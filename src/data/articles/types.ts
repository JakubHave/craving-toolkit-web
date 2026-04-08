export interface Article {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  modifiedAt?: string;
  content: string;
  isExcerpt?: boolean;
  disclaimer?: string;
}

export interface ArticleMeta {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
}
