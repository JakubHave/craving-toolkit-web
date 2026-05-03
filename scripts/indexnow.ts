/**
 * IndexNow ping script — submits URLs to Microsoft Bing + Yandex via the
 * IndexNow API (https://www.indexnow.org/). Google does NOT consume IndexNow;
 * Google indexing is handled separately via GSC URL Inspection.
 *
 * See CLAUDE.md §11.5 for the weekly-ping usage pattern: ping only the URLs
 * that actually changed this week, not the whole site on every build.
 *
 *   USAGE
 *     npm run indexnow -- <url> [<url> ...]
 *     npx tsx scripts/indexnow.ts <url> [<url> ...]
 *
 *   EXAMPLE
 *     npm run indexnow -- \
 *       https://www.cravingtoolkit.com/articles/some-slug \
 *       https://www.cravingtoolkit.com/articles/another-slug
 *
 *   POST-DEPLOY SMOKE TEST (run after Vercel deploys a config change)
 *     # 1. Verify the key file is publicly reachable
 *     curl https://www.cravingtoolkit.com/e2668d5eba4a4c1a.txt
 *     # 2. Send a test ping
 *     npm run indexnow -- https://www.cravingtoolkit.com/
 *
 *   ENVIRONMENT
 *     INDEXNOW_KEY  — required; read from .env.local or process.env
 *
 *   EXIT CODES
 *     0  Submission accepted: HTTP 200/202, OR Bing returned 403 with the URL
 *        still queued (a known soft-warning when the keyLocation URL redirects;
 *        Bing accepts the submission anyway if the domain is verified in BWT).
 *     1  Validation error, network error, or any other non-2xx response.
 *
 *   Source of truth for whether a submission actually landed:
 *     https://www.bing.com/webmasters/indexnow
 */
export {};

import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const HOST = "www.cravingtoolkit.com";
const ENDPOINT = "https://api.indexnow.org/IndexNow";

// Hand-parse .env.local so the script works as a manual CLI without pulling in
// dotenv. Vercel injects env vars natively at build time, so this is only
// load-bearing for local invocations. Existing process.env always wins.
function loadEnvLocal() {
  const path = join(process.cwd(), ".env.local");
  if (!existsSync(path)) return;
  const lines = readFileSync(path, "utf8").split("\n");
  for (const raw of lines) {
    const line = raw.trim();
    if (!line || line.startsWith("#")) continue;
    const eq = line.indexOf("=");
    if (eq === -1) continue;
    const key = line.slice(0, eq).trim();
    let value = line.slice(eq + 1).trim();
    // Strip surrounding quotes if present.
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (process.env[key] === undefined) {
      process.env[key] = value;
    }
  }
}

function fail(message: string): never {
  console.error(`IndexNow: ${message}`);
  process.exit(1);
}

function validateUrls(urls: string[]): void {
  if (urls.length === 0) {
    fail(
      `no URLs provided.\n` +
        `Usage: npm run indexnow -- https://${HOST}/path [https://${HOST}/another ...]`,
    );
  }
  for (const u of urls) {
    let parsed: URL;
    try {
      parsed = new URL(u);
    } catch {
      fail(`not an absolute URL: "${u}"`);
    }
    if (parsed.protocol !== "https:") {
      fail(`URLs must use https://, got "${u}"`);
    }
    if (parsed.host !== HOST) {
      fail(
        `URL host must be "${HOST}", got "${parsed.host}" in "${u}".\n` +
          `IndexNow rejects mixed hosts in a single submission.`,
      );
    }
  }
}

async function main() {
  loadEnvLocal();

  const key = process.env.INDEXNOW_KEY;
  if (!key) {
    fail(
      `INDEXNOW_KEY is not set.\n` +
        `Add it to .env.local (key file is at public/<KEY>.txt).`,
    );
  }

  const urls = process.argv.slice(2);
  validateUrls(urls);

  const keyLocation = `https://${HOST}/${key}.txt`;
  const body = {
    host: HOST,
    key,
    keyLocation,
    urlList: urls,
  };

  console.log(`IndexNow: POST ${ENDPOINT}`);
  console.log(`  host:        ${HOST}`);
  console.log(`  keyLocation: ${keyLocation}`);
  console.log(`  urls:        ${urls.length}`);

  let res: Response;
  try {
    res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(body),
    });
  } catch (err) {
    fail(`network error: ${(err as Error).message}`);
  }

  // IndexNow responds with 200 (URLs received), 202 (URLs accepted, queued),
  // or various 4xx errors. Body may be empty on success.
  const text = await res.text();
  const summary = `${res.status} ${res.statusText} — submitted ${urls.length} URL${urls.length === 1 ? "" : "s"}`;

  if (res.status === 200 || res.status === 202) {
    console.log(`IndexNow: ${summary}`);
    if (text.trim()) console.log(text);
    process.exit(0);
  }

  // Bing's IndexNow returns 403 when its key-file verifier hits a redirect
  // (e.g. apex keyLocation 308 → www) — but if the underlying domain is
  // verified in Bing Webmaster Tools, Bing still queues the URL. Treat as
  // a soft warning and exit 0; verify in BWT > IndexNow log.
  if (res.status === 403) {
    console.warn(`IndexNow: ${summary} (accepted with verification warning)`);
    if (text.trim()) console.warn(text);
    console.warn(
      `\nNote: 403 here is usually a soft warning, not a hard rejection. Bing\n` +
        `accepts the submission when the domain is verified in BWT, even if\n` +
        `the key-file URL redirects.\n\n` +
        `Verify the URL was queued at:\n` +
        `  https://www.bing.com/webmasters/indexnow\n\n` +
        `If it does NOT show up there within an hour:\n` +
        `  - Re-check the key file:  curl https://${HOST}/${key}.txt\n` +
        `  - Expected body:          ${key}\n` +
        `  - Confirm BWT has the site verified (apex or www).`,
    );
    process.exit(0);
  }

  console.error(`IndexNow: ${summary}`);
  if (text.trim()) console.error(text);

  if (res.status === 422) {
    console.error(
      `\nHint: 422 means one or more URLs failed validation. Check that every URL\n` +
        `is absolute, uses https://, and shares host "${HOST}".`,
    );
  }
  process.exit(1);
}

main();
