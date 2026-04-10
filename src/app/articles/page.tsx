import { articlesMeta } from "@/data/articles";
import type { ArticleCategory } from "@/data/articles/types";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Addiction Recovery Articles",
  description: "Free evidence-based articles on stopping cravings, preventing relapse, and managing addiction urges. Practical strategies for alcohol, drug, and compulsive behavior recovery.",
  alternates: {
    canonical: "https://www.cravingtoolkit.com/articles",
  },
  openGraph: {
    title: "Addiction Recovery Articles — Craving Toolkit",
    description: "Free evidence-based articles on how to stop cravings, prevent relapse, and manage addiction urges.",
    url: "https://www.cravingtoolkit.com/articles",
    images: [{ url: "/cover.jpg", width: 1200, height: 630, alt: "Craving Toolkit articles" }],
  },
};

const categories: { id: ArticleCategory; label: string }[] = [
  { id: "craving-management", label: "Craving Management" },
  { id: "early-recovery", label: "Early Recovery" },
  { id: "understanding-addiction", label: "Understanding Addiction" },
  { id: "triggers-and-relapse", label: "Triggers & Relapse Prevention" },
  { id: "recovery-lifestyle", label: "Recovery Lifestyle" },
];

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Addiction Recovery Articles",
  description: "Practical strategies for addiction recovery, craving management, and staying sober.",
  numberOfItems: articlesMeta.length,
  itemListElement: articlesMeta.map((a, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `https://www.cravingtoolkit.com/articles/${a.slug}`,
    name: a.title,
  })),
};

export default function ArticlesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
        <nav aria-label="Main navigation" className="border-b bg-white">
          <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link href="/" className="font-bold text-xl tracking-tight text-emerald-800">Craving Toolkit</Link>
            <div className="flex gap-6">
              <Link href="/articles" className="text-sm font-medium text-emerald-700">Articles</Link>
              <Link href="/#pricing" className="text-sm font-medium text-slate-600 hover:text-emerald-700 transition">Get the Guide</Link>
            </div>
          </div>
        </nav>

        <main>
          <header className="max-w-4xl mx-auto px-6 pt-20 pb-8 text-center">
            <BookOpen className="w-12 h-12 text-emerald-600 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
              Recovery Tools & Articles
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Practical strategies for the moments when willpower fails.
            </p>
          </header>

          <nav aria-label="Article categories" className="max-w-3xl mx-auto px-6 mb-12">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((cat) => (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="px-4 py-2 text-sm font-medium rounded-full border border-slate-200 bg-white text-slate-600 hover:border-emerald-300 hover:text-emerald-700 transition"
                >
                  {cat.label}
                </a>
              ))}
            </div>
          </nav>

          <div className="max-w-3xl mx-auto px-6 pb-24 space-y-16">
            {categories.map((cat) => {
              const catArticles = articlesMeta.filter((a) => a.category === cat.id);
              return (
                <section key={cat.id} id={cat.id}>
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-200">
                    {cat.label}
                  </h2>
                  <div className="space-y-6">
                    {catArticles.map((a) => (
                      <article key={a.slug}>
                        <Link
                          href={`/articles/${a.slug}`}
                          className="block group bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-emerald-200 hover:shadow-md transition"
                        >
                          <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-700 transition">{a.title}</h3>
                          <p className="text-slate-600 mb-3 leading-relaxed">{a.description}</p>
                          <span className="text-emerald-600 font-semibold text-sm flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                            Read article <ArrowRight className="w-4 h-4" />
                          </span>
                        </Link>
                      </article>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </main>
      </div>
    </>
  );
}
