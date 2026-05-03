/**
 * SEO/AEO sanity checker. Reads the sitemap from BASE_URL and validates each URL
 * against the rules described in CLAUDE.md §13.
 *
 * Usage:
 *   npx tsx scripts/audit.ts                          # localhost:3000
 *   npx tsx scripts/audit.ts http://localhost:3000
 *   npx tsx scripts/audit.ts https://www.cravingtoolkit.com
 *
 * Hard errors fail with exit code 1. Soft warnings are reported but pass.
 */
export {};

const TITLE_MAX = 60;
const DESCRIPTION_MAX = 155;

type Severity = "error" | "warn";
type Finding = { severity: Severity; check: string; detail: string };

const argBase = process.argv[2] ?? "http://localhost:3000";
const BASE = argBase.replace(/\/$/, "");

async function fetchText(url: string): Promise<{ status: number; body: string }> {
  const res = await fetch(url, {
    headers: { "user-agent": "CravingToolkitAudit/1.0" },
    redirect: "manual",
  });
  const body = await res.text();
  return { status: res.status, body };
}

function parseSitemap(xml: string): string[] {
  const matches = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)];
  return matches.map((m) => m[1].trim());
}

function extract(html: string, regex: RegExp): string | null {
  const m = html.match(regex);
  return m ? m[1] : null;
}

// Common HTML named entities. The 5 standard XML entities plus a handful of
// typographic characters that Next.js / React tend to encode in title and
// description attributes. Keep this list focused — anything missing here will
// inflate the measured length and produce a false positive warning.
const NAMED_ENTITIES: Record<string, string> = {
  quot: '"',
  apos: "'",
  lt: "<",
  gt: ">",
  amp: "&",
  nbsp: " ",
  hellip: "…",
  mdash: "—",
  ndash: "–",
  lsquo: "‘",
  rsquo: "’",
  ldquo: "“",
  rdquo: "”",
};

function decodeEntities(s: string): string {
  return s
    .replace(/&#x([0-9a-f]+);/gi, (_m, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_m, dec) => String.fromCodePoint(parseInt(dec, 10)))
    .replace(/&([a-z]+);/gi, (m, name) => NAMED_ENTITIES[name.toLowerCase()] ?? m);
}

function extractAll(html: string, regex: RegExp): string[] {
  return [...html.matchAll(regex)].map((m) => m[1]);
}

function getJsonLdBlocks(html: string): unknown[] {
  const blocks = extractAll(
    html,
    /<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi
  );
  const parsed: unknown[] = [];
  for (const raw of blocks) {
    try {
      const text = raw.replace(/\\u003c/g, "<").trim();
      parsed.push(JSON.parse(text));
    } catch {
      // Surface as a check failure later.
    }
  }
  return parsed;
}

function flattenSchemas(blocks: unknown[]): { type: string; node: Record<string, unknown> }[] {
  const out: { type: string; node: Record<string, unknown> }[] = [];
  function walk(node: unknown) {
    if (Array.isArray(node)) {
      for (const item of node) walk(item);
      return;
    }
    if (node && typeof node === "object") {
      const obj = node as Record<string, unknown>;
      const t = obj["@type"];
      if (typeof t === "string") {
        out.push({ type: t, node: obj });
      } else if (Array.isArray(t)) {
        for (const ti of t) {
          if (typeof ti === "string") out.push({ type: ti, node: obj });
        }
      }
      // Recurse into nested @graph if present
      if (Array.isArray(obj["@graph"])) {
        walk(obj["@graph"]);
      }
    }
  }
  for (const b of blocks) walk(b);
  return out;
}

function pageRules(url: string): { mustHave: string[]; description: string } {
  const path = new URL(url).pathname;
  if (path === "/") return { mustHave: ["Organization", "WebSite", "MobileApplication"], description: "homepage" };
  if (path === "/about") return { mustHave: ["Person"], description: "/about" };
  if (path === "/guide") return { mustHave: ["Book"], description: "/guide" };
  if (path.startsWith("/articles/") && !path.startsWith("/articles/page/") && path !== "/articles") {
    return { mustHave: ["Article", "BreadcrumbList"], description: "article slug" };
  }
  return { mustHave: [], description: "general" };
}

async function auditUrl(url: string): Promise<Finding[]> {
  const findings: Finding[] = [];
  let res;
  try {
    res = await fetchText(url);
  } catch (err) {
    findings.push({ severity: "error", check: "fetch", detail: `network error: ${(err as Error).message}` });
    return findings;
  }

  if (res.status !== 200) {
    findings.push({ severity: "error", check: "status", detail: `HTTP ${res.status}` });
    return findings;
  }

  const html = res.body;

  // <h1> count
  const h1s = extractAll(html, /<h1\b[^>]*>([\s\S]*?)<\/h1>/gi);
  if (h1s.length === 0) findings.push({ severity: "error", check: "h1", detail: "no <h1>" });
  if (h1s.length > 1) findings.push({ severity: "error", check: "h1", detail: `found ${h1s.length} <h1> tags` });

  // <title> — measure decoded length (what Google renders), not HTML-encoded bytes
  const titleRaw = extract(html, /<title>([^<]*)<\/title>/i);
  const title = titleRaw ? decodeEntities(titleRaw) : null;
  if (!title) {
    findings.push({ severity: "error", check: "title", detail: "missing <title>" });
  } else if (title.length > TITLE_MAX) {
    findings.push({
      severity: "warn",
      check: "title",
      detail: `${title.length} > ${TITLE_MAX} chars: "${title}"`,
    });
  }

  // meta description — same: decoded length
  const descriptionRaw = extract(html, /<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i);
  const description = descriptionRaw ? decodeEntities(descriptionRaw) : null;
  if (!description) {
    findings.push({ severity: "error", check: "description", detail: "missing meta description" });
  } else if (description.length > DESCRIPTION_MAX) {
    findings.push({
      severity: "warn",
      check: "description",
      detail: `${description.length} > ${DESCRIPTION_MAX} chars`,
    });
  }

  // canonical — compare by path only, since canonicals are production URLs
  // (they should NOT switch to localhost when previewing locally).
  const canonical = extract(html, /<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i);
  const requestPath = new URL(url).pathname.replace(/\/$/, "") || "/";
  let canonicalPath: string | null = null;
  if (!canonical) {
    findings.push({ severity: "error", check: "canonical", detail: "missing <link rel=canonical>" });
  } else {
    try {
      canonicalPath = new URL(canonical).pathname.replace(/\/$/, "") || "/";
    } catch {
      findings.push({ severity: "error", check: "canonical", detail: `unparseable canonical: ${canonical}` });
    }
    if (canonicalPath && canonicalPath !== requestPath) {
      findings.push({
        severity: "error",
        check: "canonical",
        detail: `canonical path "${canonicalPath}" ≠ request path "${requestPath}"`,
      });
    }
  }

  // og:url — compare path only, same reason as canonical.
  const ogUrl = extract(html, /<meta\s+property=["']og:url["']\s+content=["']([^"']+)["']/i);
  if (!ogUrl) {
    findings.push({ severity: "warn", check: "og:url", detail: "missing og:url" });
  } else if (canonicalPath) {
    let ogPath: string | null = null;
    try {
      ogPath = new URL(ogUrl).pathname.replace(/\/$/, "") || "/";
    } catch {
      findings.push({ severity: "warn", check: "og:url", detail: `unparseable og:url: ${ogUrl}` });
    }
    if (ogPath && ogPath !== canonicalPath) {
      findings.push({
        severity: "error",
        check: "og:url",
        detail: `og:url path "${ogPath}" ≠ canonical path "${canonicalPath}"`,
      });
    }
  }

  // JSON-LD
  const blocks = getJsonLdBlocks(html);
  if (blocks.length === 0) {
    findings.push({ severity: "error", check: "jsonld", detail: "no JSON-LD blocks parsed" });
  }

  const schemas = flattenSchemas(blocks);
  const types = new Set(schemas.map((s) => s.type));
  const rules = pageRules(url);
  for (const required of rules.mustHave) {
    if (!types.has(required)) {
      findings.push({
        severity: "error",
        check: `schema:${required}`,
        detail: `${rules.description} should include @type "${required}". Found: [${[...types].join(", ") || "none"}]`,
      });
    }
  }

  return findings;
}

async function main() {
  console.log(`Auditing ${BASE}`);

  let sitemapXml: string;
  try {
    const r = await fetchText(`${BASE}/sitemap.xml`);
    if (r.status !== 200) {
      console.error(`Sitemap returned HTTP ${r.status}. Is the server running?`);
      process.exit(2);
    }
    sitemapXml = r.body;
  } catch (err) {
    console.error(`Failed to fetch sitemap: ${(err as Error).message}`);
    console.error(`Hint: start the dev server (npm run dev) or pass a deployed URL.`);
    process.exit(2);
  }

  let urls = parseSitemap(sitemapXml);
  // Rewrite the sitemap origin to the base we are auditing (sitemap may use prod host).
  urls = urls.map((u) => {
    try {
      const url = new URL(u);
      const baseUrl = new URL(BASE);
      url.protocol = baseUrl.protocol;
      url.host = baseUrl.host;
      url.port = baseUrl.port;
      return url.toString().replace(/\/$/, "") || `${BASE}/`;
    } catch {
      return u;
    }
  });

  console.log(`Found ${urls.length} URLs in sitemap.\n`);

  let totalErrors = 0;
  let totalWarns = 0;
  let pagesWithIssues = 0;

  for (const url of urls) {
    const findings = await auditUrl(url);
    if (findings.length === 0) continue;
    pagesWithIssues++;
    console.log(url);
    for (const f of findings) {
      const tag = f.severity === "error" ? "  ✘" : "  ⚠";
      console.log(`${tag} [${f.check}] ${f.detail}`);
      if (f.severity === "error") totalErrors++;
      else totalWarns++;
    }
    console.log();
  }

  console.log(`\nAudit complete: ${urls.length} URLs, ${pagesWithIssues} with issues, ${totalErrors} errors, ${totalWarns} warnings.`);
  process.exit(totalErrors > 0 ? 1 : 0);
}

main().catch((err) => {
  console.error(err);
  process.exit(2);
});
