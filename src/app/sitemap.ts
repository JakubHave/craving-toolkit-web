import { MetadataRoute } from 'next'
import { articles } from '@/data/articles'

const ARTICLES_PER_PAGE = 10;

// Manual lastmod for static pages (legal, marketing). Bump this when you make
// a substantive content edit to one of those pages — don't lie to crawlers by
// using new Date() on every build, that inflates the freshness signal.
// Article-specific lastmod is computed from the article's modifiedAt below.
const SITE_LAST_UPDATED = new Date('2026-05-03');
const LEGAL_LAST_UPDATED = new Date('2025-08-01');

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.cravingtoolkit.com';

  const totalPages = Math.ceil(articles.length / ARTICLES_PER_PAGE);

  // Pagination pages reflect the freshness of the most-recently-modified
  // article in the collection (a new article being published changes /articles
  // and its pagination shards).
  const latestArticleDate = articles
    .map((a) => new Date(a.modifiedAt || a.publishedAt).getTime())
    .reduce((max, t) => (t > max ? t : max), 0);
  const articlesIndexLastMod = latestArticleDate ? new Date(latestArticleDate) : SITE_LAST_UPDATED;

  const paginationEntries: MetadataRoute.Sitemap = Array.from({ length: totalPages - 1 }, (_, i) => ({
    url: `${baseUrl}/articles/page/${i + 2}`,
    lastModified: articlesIndexLastMod,
    changeFrequency: 'weekly' as const,
    priority: 0.5,
  }));

  const articleEntries: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${baseUrl}/articles/${article.slug}`,
    lastModified: new Date(article.modifiedAt || article.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/guide`,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: articlesIndexLastMod,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/calculators`,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/calculators/money-saved`,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/calculators/sober-day-counter`,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/editorial-policy`,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    ...articleEntries,
    ...paginationEntries,
    {
      url: `${baseUrl}/privacy`,
      lastModified: LEGAL_LAST_UPDATED,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: LEGAL_LAST_UPDATED,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${baseUrl}/app-privacy`,
      lastModified: LEGAL_LAST_UPDATED,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${baseUrl}/app-terms`,
      lastModified: LEGAL_LAST_UPDATED,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
  ]
}
