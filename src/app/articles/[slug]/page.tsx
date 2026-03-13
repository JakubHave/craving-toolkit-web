import { articles } from "@/data/articles";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const article = articles.find((a) => a.slug === resolvedParams.slug);
  if (!article) return { title: "Article Not Found | Craving Toolkit" };
  
  return {
    title: `${article.title} | Craving Toolkit`,
    description: article.description,
  };
}


export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const article = articles.find((a) => a.slug === resolvedParams.slug);
  if (!article) notFound();

  // Simple markdown-ish parser for V1 (handles bold, italics, lists, and headers)
  const formatContent = (content: string) => {
    return content.split('\n\n').map((paragraph, idx) => {
      if (paragraph.startsWith('### ')) {
        return <h3 key={idx} className="text-2xl font-bold mt-10 mb-4 text-slate-900">{paragraph.replace('### ', '')}</h3>;
      }
      if (paragraph.startsWith('* ')) {
        const items = paragraph.split('\n').map(item => item.replace('* ', ''));
        return (
          <ul key={idx} className="list-disc pl-6 space-y-2 mb-6 text-lg text-slate-700">
            {items.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        );
      }
      if (paragraph === '***') {
        return <hr key={idx} className="my-10 border-slate-200" />;
      }
      
      // Handle bold and italic
      const formattedHtml = paragraph
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>');
        
      return <p key={idx} className="mb-6 text-lg leading-relaxed text-slate-700" dangerouslySetInnerHTML={{ __html: formattedHtml }} />;
    });
  };

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

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-6 py-16">
        <Link href="/articles" className="text-emerald-600 font-semibold flex items-center gap-2 mb-10 hover:text-emerald-700 transition">
          <ArrowLeft className="w-4 h-4" /> Back to Articles
        </Link>
        
        <header className="mb-12">
          <time className="text-emerald-600 font-bold mb-4 block">{new Date(article.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
            {article.title}
          </h1>
        </header>

        <div className="prose prose-lg prose-emerald max-w-none">
          {formatContent(article.content)}
        </div>
      </article>

      {/* SEO Funnel Pitch */}
      <section className="bg-emerald-900 py-16 text-emerald-50 mt-12">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <BookOpen className="w-12 h-12 mx-auto mb-6 text-emerald-400 opacity-80" />
          <h2 className="text-3xl font-bold mb-4">Did this tool help you?</h2>
          <p className="text-xl leading-relaxed text-emerald-100 mb-8 max-w-2xl mx-auto">
            This article is just one of the 15 chapters inside the Craving Toolkit. If you want the complete field manual and the 6 printable worksheets, you can download the full PDF guide today.
          </p>
          <Link 
            href="/#pricing"
            className="inline-block bg-emerald-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-400 transition shadow-lg"
          >
            Get the Full Craving Toolkit
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 text-center text-sm">
        <div className="max-w-4xl mx-auto px-6">
          <p className="mb-4">
            <strong>Disclaimer:</strong> This guide is educational and based on lived experience. It is not medical advice and is not a substitute for professional treatment, therapy, or emergency support.
          </p>
          <p>© {new Date().getFullYear()} Craving Toolkit. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
