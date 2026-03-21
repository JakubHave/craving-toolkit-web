import { articles } from "@/data/articles";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Addiction Recovery Articles & Craving Management Tools",
  description: "Free evidence-based articles on how to stop cravings, prevent relapse, manage addiction urges, and build a recovery plan. Practical strategies for alcohol, drug, and compulsive behavior recovery.",
  alternates: {
    canonical: "https://cravingtoolkit.com/articles",
  },
  openGraph: {
    title: "Addiction Recovery Articles & Craving Management Tools",
    description: "Free evidence-based articles on how to stop cravings, prevent relapse, and manage addiction urges.",
    url: "https://cravingtoolkit.com/articles",
    images: [{ url: "/cover.jpg", width: 1200, height: 630, alt: "Craving Toolkit articles" }],
  },
};

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Navigation */}
      <nav className="border-b bg-white">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-bold text-xl tracking-tight text-emerald-800">Craving Toolkit</Link>
          <div className="flex gap-6">
            <Link href="/articles" className="text-sm font-medium text-emerald-700">Articles</Link>
            <Link href="/#pricing" className="text-sm font-medium text-slate-600 hover:text-emerald-700 transition">Get the Guide</Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="max-w-4xl mx-auto px-6 pt-20 pb-12 text-center">
        <BookOpen className="w-12 h-12 text-emerald-600 mx-auto mb-6" />
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
          Recovery Tools & Articles
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Practical strategies for the moments when willpower fails.
        </p>
      </header>

      {/* Article List */}
      <section className="max-w-3xl mx-auto px-6 pb-24">
        <div className="space-y-8">
          {articles.map((article) => (
            <Link href={`/articles/${article.slug}`} key={article.slug} className="block group bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-emerald-200 hover:shadow-md transition">
              <time className="text-sm text-emerald-600 font-bold mb-2 block">{new Date(article.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
              <h2 className="text-2xl font-bold mb-3 group-hover:text-emerald-700 transition">{article.title}</h2>
              <p className="text-slate-600 text-lg mb-4 leading-relaxed">{article.description}</p>
              <span className="text-emerald-600 font-semibold flex items-center gap-2 group-hover:translate-x-1 transition-transform">Read article <ArrowRight className="w-4 h-4" /></span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
