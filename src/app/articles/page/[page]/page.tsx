import { articlesMeta } from "@/data/articles";
import Link from "next/link";
import { ArrowRight, BookOpen, ChevronLeft, ChevronRight } from "lucide-react";
import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";

const ARTICLES_PER_PAGE = 10;
const totalPages = Math.ceil(articlesMeta.length / ARTICLES_PER_PAGE);

export function generateStaticParams() {
  return Array.from({ length: totalPages - 1 }, (_, i) => ({
    page: String(i + 2),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ page: string }> }): Promise<Metadata> {
  const { page } = await params;
  return {
    title: `Recovery Articles – Page ${page}`,
    description: "Free evidence-based articles on how to stop cravings, prevent relapse, and manage addiction urges.",
    alternates: {
      canonical: `https://cravingtoolkit.com/articles/page/${page}`,
    },
  };
}

export default async function PaginatedArticlesPage({ params }: { params: Promise<{ page: string }> }) {
  const { page: pageStr } = await params;
  const page = parseInt(pageStr, 10);

  if (isNaN(page) || page < 1) return notFound();
  if (page === 1) redirect("/articles");
  if (page > totalPages) return notFound();

  const start = (page - 1) * ARTICLES_PER_PAGE;
  const paginatedArticles = articlesMeta.slice(start, start + ARTICLES_PER_PAGE);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <nav className="border-b bg-white">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-bold text-xl tracking-tight text-emerald-800">Craving Toolkit</Link>
          <div className="flex gap-6">
            <Link href="/articles" className="text-sm font-medium text-emerald-700">Articles</Link>
            <Link href="/#pricing" className="text-sm font-medium text-slate-600 hover:text-emerald-700 transition">Get the Guide</Link>
          </div>
        </div>
      </nav>

      <main>
      <header className="max-w-4xl mx-auto px-6 pt-20 pb-12 text-center">
        <BookOpen className="w-12 h-12 text-emerald-600 mx-auto mb-6" />
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
          Recovery Tools & Articles
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Practical strategies for the moments when willpower fails.
        </p>
      </header>

      <section className="max-w-3xl mx-auto px-6 pb-24">
        <div className="space-y-8">
          {paginatedArticles.map((a) => (
            <article key={a.slug}>
              <Link href={`/articles/${a.slug}`} className="block group bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-emerald-200 hover:shadow-md transition">
                <time dateTime={a.publishedAt} className="text-sm text-emerald-600 font-bold mb-2 block">{new Date(a.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
                <h2 className="text-2xl font-bold mb-3 group-hover:text-emerald-700 transition">{a.title}</h2>
                <p className="text-slate-600 text-lg mb-4 leading-relaxed">{a.description}</p>
                <span className="text-emerald-600 font-semibold flex items-center gap-2 group-hover:translate-x-1 transition-transform">Read article <ArrowRight className="w-4 h-4" /></span>
              </Link>
            </article>
          ))}
        </div>

        {totalPages > 1 && (
          <nav className="mt-12">
            <div className="flex items-center justify-center gap-2">
              {page > 1 ? (
                <Link
                  href={page === 2 ? "/articles" : `/articles/page/${page - 1}`}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:border-emerald-300 hover:text-emerald-700 transition"
                >
                  <ChevronLeft className="w-4 h-4" /> Previous
                </Link>
              ) : (
                <span className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-300 bg-slate-50 border border-slate-100 rounded-lg cursor-not-allowed">
                  <ChevronLeft className="w-4 h-4" /> Previous
                </span>
              )}

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <Link
                  key={p}
                  href={p === 1 ? "/articles" : `/articles/page/${p}`}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition ${
                    p === page
                      ? "bg-emerald-600 text-white"
                      : "bg-white text-slate-600 border border-slate-200 hover:border-emerald-300 hover:text-emerald-700"
                  }`}
                >
                  {p}
                </Link>
              ))}

              {page < totalPages ? (
                <Link
                  href={`/articles/page/${page + 1}`}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:border-emerald-300 hover:text-emerald-700 transition"
                >
                  Next <ChevronRight className="w-4 h-4" />
                </Link>
              ) : (
                <span className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-300 bg-slate-50 border border-slate-100 rounded-lg cursor-not-allowed">
                  Next <ChevronRight className="w-4 h-4" />
                </span>
              )}
            </div>
          </nav>
        )}
      </section>
      </main>
    </div>
  );
}
