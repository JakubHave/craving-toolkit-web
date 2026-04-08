export interface Article {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  content: string;
  isExcerpt?: boolean;
  disclaimer?: string;
}
