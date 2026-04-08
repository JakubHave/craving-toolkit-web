export type ArticleCategory =
  | "understanding-addiction"
  | "craving-management"
  | "early-recovery"
  | "recovery-lifestyle"
  | "triggers-and-relapse";

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
}

export interface ArticleMeta {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  category: ArticleCategory;
}
