import Link from "next/link";
import { articlesMeta } from "@/data/articles";
import type { ArticleCategory } from "@/data/articles/types";

interface RelatedArticlesProps {
  currentSlug: string;
  category: ArticleCategory;
}

export function RelatedArticles({ currentSlug, category }: RelatedArticlesProps) {
  const sameCategory = articlesMeta.filter(
    (a) => a.category === category && a.slug !== currentSlug
  );
  const crossCategory = articlesMeta.filter(
    (a) => a.category !== category && a.slug !== currentSlug
  );

  // Pick 3 from same category, 1 from different category
  const samePicks = sameCategory.slice(0, 3);
  const crossPick = crossCategory.length > 0 ? [crossCategory[Math.floor(crossCategory.length / 2)]] : [];
  const related = [...samePicks, ...crossPick].slice(0, 4);

  if (related.length === 0) return null;

  return (
    <section className="mt-16 pt-8 border-t border-slate-200">
      <h3 className="text-xl font-semibold text-slate-800 mb-6">Related Articles</h3>
      <div className="grid sm:grid-cols-2 gap-6">
        {related.map((article) => (
          <Link
            key={article.slug}
            href={`/articles/${article.slug}`}
            className="block p-5 border border-slate-200 rounded-lg hover:border-emerald-300 hover:shadow-sm transition"
          >
            <h4 className="font-medium text-slate-800 mb-1 leading-snug">{article.title}</h4>
            <p className="text-sm text-slate-500 line-clamp-2">{article.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
