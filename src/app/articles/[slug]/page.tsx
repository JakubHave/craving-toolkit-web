import { articlesMeta, getArticleBySlug } from "@/data/articles";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BookOpen } from "lucide-react";
import { Metadata } from "next";
import { RelatedArticles } from "@/components/RelatedArticles";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const article = getArticleBySlug(resolvedParams.slug);
  if (!article) return { title: "Article Not Found | Craving Toolkit" };

  const url = `https://www.cravingtoolkit.com/articles/${article.slug}`;
  return {
    title: { absolute: article.title },
    description: article.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.description,
      url,
      publishedTime: article.publishedAt,
      modifiedTime: article.modifiedAt || article.publishedAt,
      siteName: "Craving Toolkit",
      images: [{ url: "/cover.jpg", width: 1200, height: 630, alt: article.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      creator: "@JacobHavelka",
      images: ["/cover.jpg"],
    },
  };
}

export async function generateStaticParams() {
  return articlesMeta.map((a) => ({
    slug: a.slug,
  }));
}

function getArticleJsonLd(article: { title: string; description: string; slug: string; publishedAt: string; modifiedAt?: string }) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `https://www.cravingtoolkit.com/articles/${article.slug}#article`,
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.modifiedAt || article.publishedAt,
    isAccessibleForFree: true,
    image: "https://www.cravingtoolkit.com/cover.jpg",
    url: `https://www.cravingtoolkit.com/articles/${article.slug}`,
    author: {
      "@type": "Person",
      "@id": "https://www.cravingtoolkit.com/about#author",
      name: "Jakub Havelka",
      url: "https://www.cravingtoolkit.com/about",
      sameAs: [
        "https://x.com/JacobHavelka",
        "https://www.instagram.com/havelkajacob/",
      ],
      description: "Software engineer, 10+ years in recovery, author of the Craving Toolkit",
      knowsAbout: [
        "addiction recovery",
        "craving management",
        "dopamine science",
        "behavioral addiction",
        "habit formation",
      ],
    },
    publisher: {
      "@type": "Organization",
      "@id": "https://www.cravingtoolkit.com/#organization",
      name: "Craving Toolkit",
      logo: {
        "@type": "ImageObject",
        url: "https://www.cravingtoolkit.com/icon-512.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.cravingtoolkit.com/articles/${article.slug}`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.cravingtoolkit.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Articles",
        item: "https://www.cravingtoolkit.com/articles",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
      },
    ],
  };

  return [articleSchema, breadcrumbSchema];
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const article = getArticleBySlug(resolvedParams.slug);
  if (!article) notFound();

  const formatContent = (content: string) => {
    return content.split('\n\n').map((paragraph, idx) => {
      if (paragraph.startsWith('### ')) {
        return <h3 key={idx} className="text-2xl font-bold mt-10 mb-4 text-slate-900">{paragraph.replace('### ', '')}</h3>;
      }

      if (paragraph.includes('\n* ')) {
        const items = paragraph.split('\n').filter(line => line.startsWith('* ')).map(item => item.substring(2));
        if (items.length > 0) {
          return (
            <ul key={idx} className="list-disc pl-6 space-y-2 mb-6 text-lg text-slate-700">
              {items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          );
        }
      }

      if (paragraph === '***') {
        return <hr key={idx} className="my-10 border-slate-200" />;
      }

      let formattedHtml = paragraph
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>');

      return <p key={idx} className="mb-6 text-lg leading-relaxed text-slate-700" dangerouslySetInnerHTML={{ __html: formattedHtml }} />;
    });
  };

  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(getArticleJsonLd(article)) }}
    />
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <nav aria-label="Main navigation" className="border-b bg-white">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-bold text-xl tracking-tight text-emerald-800">Craving Toolkit</Link>
          <div className="flex gap-6">
            <Link href="/articles" className="text-sm font-medium text-emerald-700">Articles</Link>
            <Link href="/calculators" className="text-sm font-medium text-slate-600 hover:text-emerald-700 transition">Calculators</Link>
            <Link href="/#pricing" className="text-sm font-medium text-slate-600 hover:text-emerald-700 transition">Get the Guide</Link>
          </div>
        </div>
      </nav>

      <main>
        <article className="max-w-3xl mx-auto px-6 py-16">
          <header>
            <nav aria-label="Breadcrumb" className="text-sm text-slate-500 mb-8">
              <ol className="flex items-center gap-1">
                <li><Link href="/" className="hover:text-emerald-700 transition-colors">Home</Link></li>
                <li><span className="mx-1">›</span></li>
                <li><Link href="/articles" className="hover:text-emerald-700 transition-colors">Articles</Link></li>
                <li><span className="mx-1">›</span></li>
                <li className="text-slate-700 truncate max-w-[300px]">{article.title}</li>
              </ol>
            </nav>

            <div className="text-sm text-slate-500 mb-4">
              <time dateTime={article.publishedAt}>Published {formatDate(article.publishedAt)}</time>
              {article.modifiedAt && article.modifiedAt !== article.publishedAt && (
                <span> · Updated <time dateTime={article.modifiedAt}>{formatDate(article.modifiedAt)}</time></span>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
              {article.title}
            </h1>

            <div className="flex items-center gap-3 mb-8 text-sm text-slate-600">
              <div>
                <p className="font-medium text-slate-800">
                  Written by <Link href="/about" className="text-emerald-700 hover:underline">Jakub Havelka</Link>
                  <span className="inline-flex items-center gap-2 ml-3">
                    <a href="https://x.com/JacobHavelka" target="_blank" rel="noopener" aria-label="Author on X" className="text-slate-400 hover:text-slate-600">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </a>
                    <a href="https://www.instagram.com/havelkajacob/" target="_blank" rel="noopener" aria-label="Author on Instagram" className="text-slate-400 hover:text-slate-600">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                    </a>
                  </span>
                </p>
                <p>Software engineer · 10+ years in recovery · Author of the Craving Toolkit</p>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-sm text-amber-800 mb-8">
              <strong>Medical Disclaimer:</strong> This article is educational and based on lived experience
              and modern addiction science. It is not medical advice. If you need immediate help,
              contact <a href="https://www.samhsa.gov/find-help/national-helpline" className="underline" rel="noopener" target="_blank">SAMHSA&rsquo;s National Helpline</a> at 1-800-662-4357.
            </div>
          </header>

          <section className="prose prose-lg prose-emerald max-w-none">
            {formatContent(article.content)}
          </section>

          <footer>
            <section className="mt-12 pt-8 border-t border-slate-200">
              <h3 className="text-lg font-semibold text-slate-800 mb-2">About the Author</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Jakub Havelka is a software engineer based in Europe with over a decade of personal
                recovery experience across multiple substances and behaviors. He built the Craving Toolkit
                from what actually helped — combining lived experience with research from Anna Lembke,
                Marc Lewis, Judson Brewer, Gabor Maté, and Charles Duhigg.{" "}
                <Link href="/about" className="text-emerald-700 hover:underline">Learn more</Link>
              </p>
            </section>

            <RelatedArticles currentSlug={article.slug} category={article.category} />

            {!article.isExcerpt && (
              <div className="mt-12 text-center">
                <Link
                  href="/#pricing"
                  className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-500 transition shadow-lg"
                >
                  Get Craving Toolkit
                </Link>
              </div>
            )}
          </footer>
        </article>

        {article.isExcerpt && (
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
        )}
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12 text-center text-sm">
        <div className="max-w-4xl mx-auto px-6">
          <p className="mb-4">
            <strong>Disclaimer:</strong> {article.disclaimer || "This article is educational and based on lived experience and modern addiction science. It is not medical advice and is not a substitute for professional treatment, therapy, or emergency support."}
          </p>
          <nav aria-label="Footer" className="flex flex-wrap items-center justify-center gap-4 mb-4">
            <Link href="/about" className="text-slate-400 hover:text-white transition-colors">About</Link>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <Link href="/editorial-policy" className="text-slate-400 hover:text-white transition-colors">Editorial Policy</Link>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <Link href="/articles" className="text-slate-400 hover:text-white transition-colors">All Articles</Link>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors">Privacy</Link>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <Link href="/terms" className="text-slate-400 hover:text-white transition-colors">Terms</Link>
          </nav>
          <p className="text-xs text-slate-500 mb-4 max-w-2xl mx-auto">
            The Craving Toolkit is not a substitute for professional medical advice, diagnosis, or treatment.
            If you need help, contact <a href="https://www.samhsa.gov/find-help/national-helpline" rel="noopener" target="_blank" className="underline hover:text-slate-300">SAMHSA&rsquo;s National Helpline</a> at 1-800-662-4357.
          </p>
          <div className="flex items-center justify-center gap-4 mt-3 mb-4">
            <a href="https://x.com/JacobHavelka" target="_blank" rel="noopener" aria-label="Follow on X (Twitter)" className="text-slate-400 hover:text-slate-300 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://www.instagram.com/havelkajacob/" target="_blank" rel="noopener" aria-label="Follow on Instagram" className="text-slate-400 hover:text-slate-300 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
          </div>
          <p>© {new Date().getFullYear()} Craving Toolkit. All rights reserved.</p>
        </div>
      </footer>
    </div>
    </>
  );
}
