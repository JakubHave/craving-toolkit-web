# CLAUDE.md — Craving Toolkit Engineering & Content Playbook

You are working on **cravingtoolkit.com** — a Next.js (App Router, TypeScript) site for a brand built on lived addiction-recovery experience. The author/operator is **Jakub Havelka** (10+ years clean; not a clinician). Products: a 40-page ebook ($19, Gumroad) and a free offline-first iOS/Android app (Expo + React Native + SQLite).

This file is the source of truth for SEO, AEO (Answer Engine Optimization), technical standards, content templates, and the weekly growth loop. Read it before doing any work that touches a `page.tsx`, `layout.tsx`, an article data file, schema, metadata, the sitemap, `robots.txt`, or `llms.txt`.

If you are unsure whether a change is YMYL-safe or on-brand, **stop and ask**. Recovery content is "Your Money or Your Life" — Google holds it to a higher bar and so do we.

---

## 1. Brand voice (non-negotiable)

We are **practitioner-peer**, not clinical authority.

- Short, punchy sentences. Cuts before fluff.
- "I" voice when speaking as Jakub. "You" voice when speaking to the reader.
- Profanity is allowed when it lands naturally. Don't perform it; don't stuff it.
- Never sound like a generic AI blog. No "In today's fast-paced world…", no "Are you struggling with…", no rhetorical question intros that the article doesn't actually answer.
- Use specific, embodied details (a bag of gummy bears, a pint of ice cream, "chocolate on your shirt") instead of abstractions.
- Cite research without hiding behind it. If we name Anna Lembke, Marc Lewis, Judson Brewer, Gabor Maté, or Charles Duhigg, do it because we actually used the idea.

**Never:**
- Diagnose, prescribe, or claim clinical authority.
- Make medical claims ("This will cure…", "This is proven to…").
- Sound preachy, twelve-steppy by default, or boot-camp / military-coach.
- Promise outcomes. We give tools, not guarantees.
- Break the privacy promise: the app is offline-first, no account, no analytics, no community feed. Every word on the site must be consistent with that.

---

## 2. YMYL & safety standards

Addiction recovery is **YMYL (Your Money or Your Life)**. Every article must:

1. Include the **medical disclaimer** — use the `<MedicalDisclaimer />` component from `src/components/seo/MedicalDisclaimer.tsx`.
2. Include a **SAMHSA helpline** reference: `1-800-662-4357` linking to `https://www.samhsa.gov/find-help/national-helpline`. Already in `<SiteFooter />` and `<MedicalDisclaimer />`.
3. Have a **named, identifiable human author** (Jakub) with a link to `/about` and Person schema (already wired).
4. For neurochemistry / pharmacology / withdrawal / cross-addiction claims, include a **Sources** section with at least one peer-reviewed citation (PubMed/PMC preferred). Use journal name, year, volume, pages.
5. Show a `datePublished` and a `dateModified` (visible in the byline area and machine-readable in JSON-LD).
6. **Never** describe a withdrawal protocol, dosage, taper schedule, or "how to detox at home" without an explicit "this is dangerous; alcohol/benzo/opioid withdrawal can kill you; get supervised care" warning.
7. **Never** present harm-reduction content as endorsement of use. Frame as: "if you are using anyway, here's how to be safer."

If a draft article cannot meet all six, push back before writing it.

---

## 3. Tech stack ground truth

- **Next.js 16 (App Router) + React 19 + TypeScript**, deployed on Vercel.
- **Package manager: npm** (only `package-lock.json` exists; do not introduce yarn/pnpm without removing the existing lockfile).
- **Project root for source: `src/`**. Routes live under `src/app/`, components under `src/components/`, libs under `src/lib/`, article data under `src/data/articles/`.
- **Articles are TypeScript data files** (not MDX) at `src/data/articles/<slug>.ts` exporting an `Article` object. The dynamic route `src/app/articles/[slug]/page.tsx` reads them and renders.
- **Marketing pages are server components by default**. Do **not** convert SEO-relevant pages to `"use client"`. Interactive sub-trees (e.g. calculator) are isolated client components.
- **Path alias: `@/` → `src/`**.
- **Images** use `next/image` and live in `/public`. WebP preferred; never ship a >100 KB raster smaller than 200 px rendered.
- **Fonts** via `next/font` (Inter + Lora — see `src/app/layout.tsx`).
- **Working OS**: Ubuntu Linux. All shell commands assume bash.

**Hard rules:**
- Every page that ranks must be **server-rendered HTML** with the body content present in the initial fetch (`curl -A 'Mozilla/5.0' https://www.cravingtoolkit.com/path` must return the article text).
- No client-only article rendering. No data-fetching from the client for anything indexable.
- Total JS for an article page should be under ~150 KB gzipped. Verify with `npm run build` + Vercel Analytics or Lighthouse.
- Target Lighthouse: Performance ≥ 95, SEO 100, Accessibility ≥ 95, Best Practices ≥ 95. LCP < 1.5s on 4G mobile.

---

## 4. Site standards — every page MUST have

The root metadata lives in `src/app/layout.tsx` with `metadataBase`, default OG, canonical fallback, robots, favicon. Per-page overrides should set their own `title`, `description`, and `alternates.canonical`.

**Per-page mandatory:**
- `export const metadata` (or `generateMetadata`) with **unique** `title`, `description`, and `alternates.canonical` resolving to the **exact** rendered URL (not the homepage, not a parent collection).
- `openGraph.url` matching the canonical exactly.
- A relevant JSON-LD payload rendered via `<JsonLd data={…} />` from `src/components/seo/JsonLd.tsx` (templates in §6).
- An `<h1>` that is the article title and matches (or shortens) the `title` metadata.
- For articles: visible byline via `<Byline />`, medical disclaimer via `<MedicalDisclaimer />`, and (optional) `<QuickAnswer>` directly under the H1.

**Length budgets:**
- `<title>` ≤ **60 characters** (display ~600 px). Keep brand suffix `| Craving Toolkit` only when it fits. Article titles use `title: { absolute: ... }` to skip the brand template.
- `meta description` ≤ **155 characters**. Lead with the answer/promise; do not bury keywords at the end.
- `og:title` ≤ 60 chars; `og:description` ≤ 155 chars.

**`@id` conventions** (used for schema graph linking — see §6):
- Organization: `https://www.cravingtoolkit.com/#organization`
- Person (Jakub): `https://www.cravingtoolkit.com/about#author`
- WebSite: `https://www.cravingtoolkit.com/#website`
- MobileApplication: `https://www.cravingtoolkit.com/#app`
- Product (guide): `https://www.cravingtoolkit.com/guide#product`
- Book (guide): `https://www.cravingtoolkit.com/guide#book`
- Article: `https://www.cravingtoolkit.com/articles/<slug>#article`

---

## 5. File structure

```
src/
  app/
    layout.tsx                      # root metadata, Organization JSON-LD
    page.tsx                        # homepage; emits MobileApplication + WebSite JSON-LD
    about/page.tsx                  # Jakub bio; emits Person JSON-LD
    guide/page.tsx                  # ebook landing; emits Product + Book JSON-LD
    articles/page.tsx               # article index
    articles/[slug]/page.tsx        # article; emits Article + BreadcrumbList (+ FAQPage when faqs present)
    articles/page/[page]/page.tsx   # paginated article list
    calculators/page.tsx
    calculators/money-saved/page.tsx
    editorial-policy/page.tsx
    privacy/page.tsx, terms/page.tsx
    app-privacy/page.tsx, app-terms/page.tsx
    preview/page.tsx                # ebook free preview (PDF iframe)
    links/page.tsx                  # linktree-style page (NOINDEX — bio link only)
    api/keepalive/route.ts          # Vercel cron pinger for Supabase
    sitemap.ts, robots.ts
    icon.png, apple-icon.tsx, manifest.ts
  components/
    SiteNav.tsx, SiteFooter.tsx
    AppStoreBadges.tsx
    RelatedArticles.tsx
    seo/
      JsonLd.tsx                    # safe JSON-LD <script> renderer
      QuickAnswer.tsx
      MedicalDisclaimer.tsx
      Byline.tsx
    calculators/...
  data/
    articles/
      types.ts                      # Article + ArticleMeta
      index.ts                      # articles + articlesMeta + getArticleBySlug
      <slug>.ts                     # one file per article
  lib/
    supabase.ts
    calculator-data.ts, calculator-logic.ts
public/
  llms.txt                          # AEO entity file (see §9)
  screens/                          # app screenshots (1620x2880 webp)
  jakub.jpg, icon_1024.webp, etc.
  og-image-1200x630.png
  Download_on_the_App_Store_Badge_US-UK.svg
  GetItOnGooglePlay_Badge_Web_color_English.svg
  craving-toolkit-preview.pdf
  e2668d5eba4a4c1a.txt              # IndexNow verification — DO NOT DELETE
scripts/
  indexnow.ts                       # IndexNow ping (postbuild)
  audit.ts                          # local SEO/AEO sanity checker
CLAUDE.md                           # this file
```

---

## 6. Schema templates (copy-paste, then adapt)

The site already emits these schemas in production. Use `<JsonLd data={…} />` from `@/components/seo/JsonLd` for any new ones.

### 6.1 Safe JSON-LD renderer (already exists at `src/components/seo/JsonLd.tsx`)

```tsx
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
```

Use `dangerouslySetInnerHTML` (not `next/script`) per the official Next.js JSON-LD guidance.

### 6.2 Organization (already wired in `src/app/layout.tsx`)

```ts
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.cravingtoolkit.com/#organization",
  name: "Craving Toolkit",
  url: "https://www.cravingtoolkit.com",
  logo: { "@type": "ImageObject", url: "https://www.cravingtoolkit.com/icon-512.png", width: 512, height: 512 },
  founder: { "@id": "https://www.cravingtoolkit.com/about#author" },
  // sameAs, description, contactPoint, etc.
}
```

### 6.3 Person (already wired in `src/app/about/page.tsx`)

The canonical Person definition lives on `/about` with `@id: "https://www.cravingtoolkit.com/about#author"`. Other pages reference it via `{ "@id": "https://www.cravingtoolkit.com/about#author" }` only — do not duplicate the Person object.

> Do **not** add fake medical credentials. Jakub's authority is experiential. State that plainly.

### 6.4 Article (already wired in `src/app/articles/[slug]/page.tsx`)

Generated in `getArticleJsonLd()` from the article's title/description/dates. Author and publisher are referenced via `@id` only (no duplication). When the article has a `faqs` array, the page also emits a `FAQPage` block.

> **MedicalWebPage variant** is **not** currently emitted. For physiology / pharmacology / withdrawal articles (e.g. anhedonia, sugar cravings), consider adding an opt-in `medicalCondition?: string` field on `Article` and emitting a `MedicalWebPage` block when present.

### 6.5 FAQPage

Google restricts FAQ **rich results** to gov/health authority sites since Aug 2023, but FAQPage schema still drives high citation rates in ChatGPT, Perplexity, and Google AI Overviews. Keep using it, but only on pages where the visible Q/A actually exists.

To add an FAQ to an article, set the `faqs` field on the article data:

```ts
faqs: [
  { q: "Why does X happen after quitting Y?", a: "Direct, 40–60 word answer." },
  // 3–6 entries, each genuinely answered in the article body
];
```

The article slug page emits `FAQPage` JSON-LD automatically when `faqs` is present, and renders the visible Q/A list in the article footer.

### 6.6 BreadcrumbList (already wired)

Articles emit BreadcrumbList automatically. To add elsewhere, use the visible breadcrumb plus matching JSON-LD; the URL of the last item is optional but recommended.

### 6.7 MobileApplication (already wired in `src/app/page.tsx`)

Includes `@id`, url, screenshot array (auto-built from the `screens` array), downloadUrl, installUrl, creator and publisher via `@id`, offers, featureList. Update the `screens` array to add or remove app screenshots — the schema and the visible grid both update from the same source.

### 6.8 Book + Product (`/guide`)

The guide page emits both `Product` (for offer-rich-results eligibility) and `Book` (for entity recognition). They share the same offer via `@id` to avoid duplication.

### 6.9 WebSite (homepage)

Emitted alongside MobileApplication on the homepage. Establishes the WebSite entity for sitelinks search box eligibility (only fires if Google decides the site is search-box eligible).

---

## 7. Article template (drop into `src/data/articles/<slug>.ts`)

Articles are TypeScript data files, not MDX. The slug page renders all the structure.

```ts
import { Article } from "./types";

export const article: Article = {
  slug: "your-article-slug",
  title: "Question-shaped headline that matches a real query", // ≤ 60 chars
  description:
    "One-sentence promise that answers the headline. Lead with the answer.", // ≤ 155 chars
  publishedAt: "2026-05-03",
  modifiedAt: "2026-05-03",
  category: "early-recovery",

  // Optional — render as a 40–60 word Quick Answer aside under the H1.
  // The literal answer to the headline question. Stand-alone, extractable, atomic.
  quickAnswer:
    "First sentence states the conclusion. Subsequent sentences add the most load-bearing fact (timeline, mechanism, threshold).",

  // Optional — emits FAQPage JSON-LD and renders a visible FAQ section.
  faqs: [
    { q: "Why does X happen after quitting Y?", a: "Direct, 40–60 word answer." },
    // 3–6 entries
  ],

  content: `
First paragraph: the hook. Specific, embodied, in voice.

### Why this happens

40–60 word direct answer paragraph, then expansion.

### How long does it last?

Answer-first, then timeline.

### What to do about it

Answer-first; numbered or bulleted steps.

* Use Markdown-style asterisk bullets when listing steps.
* Each item is a complete instruction.

### When to get professional help

Clear safety escalation language; SAMHSA + therapist + medical detox where relevant.

### Frequently Asked Questions

Mirror the entries in the \`faqs\` field above so the visible content matches the schema.

### Sources

1. Author Last, First. *Title.* Journal Name. Year; Volume(Issue):Pages. DOI / PMID.
2. ...
`,
};
```

The slug page automatically renders byline, disclaimer, the optional Quick Answer, the article body, the FAQ section (if `faqs` set), the about-the-author block, related articles, and the CTA.

### 7.1 Quick Answer block

`<QuickAnswer>` is rendered automatically when `article.quickAnswer` is set.

Rules for the body:
- 40–60 words. Hard cap at 70.
- First sentence states the conclusion. Subsequent sentences add the most load-bearing fact (timeline, mechanism, threshold).
- Self-contained. If quoted alone, it must still be true and useful.
- Atomic-fact friendly: 6–20 word sentences, declarative, no rhetorical questions.

### 7.2 H2 = question rule

Every H2 is a question a real person asks. Convert "The timeline" → "How long do these cravings last?". Use the `<h2>` text verbatim as one of the FAQ Q's where it makes sense.

> The article body is currently a custom Markdown subset rendered by `formatContent()` in `src/app/articles/[slug]/page.tsx`. Headings use `### Title`. To convert these to question form, edit each article's `content` string.

### 7.3 Article structure rule of thumb

1. H1 (the question/promise) — rendered by the slug page from `title`
2. Byline + dates — `<Byline />`
3. Medical disclaimer — `<MedicalDisclaimer />`
4. Quick Answer (40–60 words) — opt-in via `quickAnswer`
5. H3 → answer-first paragraph (30–60 words) → expansion (in `content`)
6. Repeat 5 for 4–7 H3s
7. FAQ section (3–6 Q/A pairs that ALSO appear in JSON-LD via `faqs`)
8. Sources (numbered, real)
9. About-the-author block (rendered by slug page)
10. Related Articles (rendered by `<RelatedArticles />`)

> Note: the existing renderer treats `### ...` as `<h3>`. Per AEO best practice these should be `<h2>` semantically. Either upgrade the renderer to use `## ...` → `<h2>` and re-author articles, or keep `<h3>` and accept the slightly weaker AEO signal. (Open follow-up.)

---

## 8. AEO checklist (every article must pass)

Before merging an article, every box gets checked:

- [ ] H1 reflects a real query (verified with GSC or AlsoAsked).
- [ ] Quick Answer block is 40–60 words and stands alone.
- [ ] All H2/H3s are questions.
- [ ] Each section opens with a 30–60 word direct answer, then expands.
- [ ] Sentences average 6–20 words in answer paragraphs (atomic facts).
- [ ] At least one bulleted or numbered list (LLMs over-cite lists).
- [ ] At least one specific number / statistic with a source.
- [ ] At least one named expert reference (Lembke / Lewis / Brewer / Maté / Duhigg / a study).
- [ ] FAQ block at the end with 3–6 Q/A pairs, each answer 40–60 words.
- [ ] `Article` + `FAQPage` + `BreadcrumbList` JSON-LD emitted.
- [ ] `Person` author resolves to `/about#author`.
- [ ] Byline shows "Published" + "Updated" with ISO dates that match `dateModified`.
- [ ] Medical disclaimer + SAMHSA helpline are visible.
- [ ] Internal links to 3–4 related Craving Toolkit articles.
- [ ] One contextual link to `/guide` or `/` (app) where genuinely relevant — not stuffed.
- [ ] `<title>` ≤ 60 chars; `meta description` ≤ 155 chars.
- [ ] `og:url` matches canonical exactly.
- [ ] Page is fully readable with JS disabled (`curl` test passes).

Run `npm run audit` to verify the structural items automatically.

---

## 9. `llms.txt` (AEO entity file)

Lives at `public/llms.txt`. Keep under ~3 KB. Update whenever a major page is added.

`robots.ts` does not currently reference `llms.txt`; LLM crawlers may discover it at the well-known path regardless. If you want to surface it explicitly, edit `src/app/robots.ts`.

---

## 10. Known issues to fix (audit findings — actionable)

These were the original audit defects. Status as of last update:

### 10.1 Self-canonicals pointing to homepage — ✅ resolved

Every page sets its own `alternates.canonical`. Verified with `npm run audit`.

### 10.2 `og:url` mismatches — ✅ resolved

Every page sets `openGraph.url` to its canonical. Verified with `npm run audit`.

### 10.3 Title / meta description over length — ⚠️ partial

Homepage description trimmed to 144 chars. Article titles and descriptions have not been audited en masse. Run `npm run audit` to find offenders; fix individually.

### 10.4 Missing JSON-LD — ✅ resolved

- Homepage: Organization (in layout) + WebSite + MobileApplication ✅
- /about: Person ✅
- /guide: Product + Book ✅
- /articles/*: Article + BreadcrumbList ✅; FAQPage ⚠️ emitted only when the article has a `faqs` field (currently no articles do — opt-in)

### 10.5 No `llms.txt` — ✅ resolved

Created at `public/llms.txt`. Update when major pages are added.

### 10.6 H2s are not questions — ⚠️ open

Existing articles use descriptive `### Headings`. Sweep `src/data/articles/**` and rewrite each heading into question form. Per-article copy work — owner: Jakub.

### 10.7 No Quick Answer blocks — ⚠️ open

`<QuickAnswer>` component is wired and renders automatically when `article.quickAnswer` is set. No existing articles have one. Per-article copy work — owner: Jakub.

### 10.8 Footer year handling — ✅ resolved (was a false alarm)

`<SiteFooter />` already uses `{new Date().getFullYear()}`.

---

## 11. Weekly growth loop (runbook — 2–3 hours) — I will give you instructions later

## 13. Local audit script

`scripts/audit.ts` runs against a base URL (default `http://localhost:3000`). For every URL in the sitemap, it checks:

- HTTP 200, no redirect chain.
- `<link rel="canonical">` present and equals the request URL.
- `og:url` equals canonical.
- `<title>` ≤ 60 chars.
- `<meta name="description">` ≤ 155 chars.
- At least one `<script type="application/ld+json">` and JSON parses.
- For `/articles/*`: schema includes `Article` and `BreadcrumbList`.
- For `/`: schema includes `Organization`, `WebSite`, `MobileApplication`.
- For `/about`: schema includes `Person`.
- For `/guide`: schema includes `Product` and `Book`.
- `<h1>` count = 1.

Run with `npm run audit` (start the dev server first, or pass a deployed URL: `npm run audit -- https://www.cravingtoolkit.com`). Hard errors fail with non-zero exit; soft warnings are reported.

---

## 14. What NOT to do

- **Do not** add fake medical credentials, "Reviewed by Dr. ___" lines, or dressed-up author bios that imply clinical authority. Jakub's authority is experiential. Lying breaks the brand and trips YMYL raters.
- **Do not** publish articles in clinical-rehab-marketing voice. No "Our compassionate clinicians…", no "evidence-based treatment programs", no rehab-directory tone. We are the opposite of that genre.
- **Do not** use AI to generate articles end-to-end. Outline + research support are fine; the prose must be Jakub's. The Sept 2025 Quality Rater Guidelines explicitly downgrade unedited AI-generated content on YMYL.
- **Do not** add affiliate links to rehabs, treatment centers, or supplements. Ever.
- **Do not** add account walls, signup walls, email-gate popovers, or "10% off your first ebook" coupons that conflict with the brand.
- **Do not** add analytics or tracking pixels that contradict the privacy promise on the app's product pages. If we add any analytics on the marketing site (Plausible, Vercel Analytics in privacy mode are acceptable), say so on `/privacy`.
- **Do not** use `HowTo` schema. Google deprecated `HowTo` rich results entirely.
- **Do not** stuff `FAQPage` schema onto pages whose visible content does not actually answer those questions. Google's policy: FAQPage markup is only for genuine FAQ content.
- **Do not** use generic AI sentence patterns ("Are you struggling with…", "In today's world…", "Let's dive in", "It's important to note that…", "Remember, recovery is a journey…"). If you catch one in a draft, kill it.
- **Do not** ship a page that fails the §13 audit.
- **Do not** describe withdrawal symptoms, taper schedules, or "how to detox at home" without an explicit, prominent danger warning and a referral to medical detox.
- **Do not** delete `public/e2668d5eba4a4c1a.txt` — it is the IndexNow site-verification key file.

---

## 15. Short reference

- Stack: Next.js App Router 16 + React 19 + TypeScript on Ubuntu, deployed Vercel.
- Package manager: npm.
- Source root: `src/`.
- Voice: practitioner-peer, raw, profanity-tolerant when natural, never clinical.
- YMYL: every article needs disclaimer + helpline + named author + sources + dates.
- AEO: Quick Answer (40–60 w) → question H2/H3s → atomic-fact answer paragraphs → FAQ → Sources.
- Schema: Organization (root), Person (about), Article + BreadcrumbList (+ FAQPage opt-in) (articles), MobileApplication + WebSite (homepage), Product + Book (/guide).
- `@id` chain: everything references Person at `/about#author` and Organization at `/#organization`.
- Length budget: title ≤ 60, description ≤ 155.
- Cadence: weekly GSC export → 3 actions → 2–3 ships → IndexNow + GSC request indexing.

End of file.
