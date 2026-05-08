export type ArticleCategory =
  | "understanding-addiction"
  | "craving-management"
  | "early-recovery"
  | "recovery-lifestyle"
  | "triggers-and-relapse";

export interface FAQ {
  q: string;
  a: string;
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  modifiedAt?: string;
  category: ArticleCategory;
  content: string;
  isExcerpt?: boolean;
  disclaimer?: string;
  /**
   * Optional 40–60 word Quick Answer rendered as an aside below the H1.
   * Self-contained, atomic-fact friendly. See CLAUDE.md §7.1.
   */
  quickAnswer?: string;
  /**
   * Optional FAQ list. When present, the slug page emits FAQPage JSON-LD
   * and renders a visible Q/A list. 3–6 entries; each answer 40–60 words.
   */
  faqs?: FAQ[];
  /**
   * Optional per-article hero image. When present, the slug page renders it
   * above the H1 and uses it as the og:image / twitter:image (overriding the
   * default site-wide cover). seopilot writes this on new articles; existing
   * articles without it continue to use the default cover.
   *
   * `src` is a path under `/public` (e.g. `/articles/<slug>.webp`).
   * `alt` is descriptive alt text, ≤ 125 chars.
   */
  coverImage?: {
    src: string;
    alt: string;
  };
}

export interface ArticleMeta {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  category: ArticleCategory;
}
