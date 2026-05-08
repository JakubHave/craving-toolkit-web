import { articlesMeta, getArticleBySlug } from "@/data/articles";
import type { Article, FAQ } from "@/data/articles/types";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { BookOpen } from "lucide-react";
import { Metadata } from "next";
import { RelatedArticles } from "@/components/RelatedArticles";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { JsonLd } from "@/components/seo/JsonLd";
import { Byline } from "@/components/seo/Byline";
import { MedicalDisclaimer } from "@/components/seo/MedicalDisclaimer";
import { QuickAnswer } from "@/components/seo/QuickAnswer";
import { AuthorBio } from "@/components/seo/AuthorBio";

const SITE_URL = "https://www.cravingtoolkit.com";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const article = getArticleBySlug(resolvedParams.slug);
  if (!article) return { title: "Article Not Found | Craving Toolkit" };

  const url = `${SITE_URL}/articles/${article.slug}`;

  // Per-article hero image when present, otherwise the default site cover.
  // og:image URLs are made absolute regardless of metadataBase so a stale or
  // unset metadataBase can never silently break social previews.
  const ogImage = article.coverImage
    ? {
        url: `${SITE_URL}${article.coverImage.src}`,
        width: 1024,
        height: 576,
        alt: article.coverImage.alt,
      }
    : {
        url: `${SITE_URL}/cover.jpg`,
        width: 1200,
        height: 630,
        alt: article.title,
      };

  return {
    title: { absolute: article.title },
    description: article.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.description,
      url,
      publishedTime: article.publishedAt,
      modifiedTime: article.modifiedAt || article.publishedAt,
      siteName: "Craving Toolkit",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      creator: "@cravingtoolkit",
      images: [ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  return articlesMeta.map((a) => ({ slug: a.slug }));
}

function getArticleSchemas(article: Article) {
  const url = `${SITE_URL}/articles/${article.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    mainEntityOfPage: url,
    headline: article.title.slice(0, 110),
    description: article.description,
    image: [`${SITE_URL}/cover.jpg`],
    datePublished: article.publishedAt,
    dateModified: article.modifiedAt || article.publishedAt,
    inLanguage: "en",
    isAccessibleForFree: true,
    // Reference the canonical Person and Organization definitions
    // (defined on /about and in layout.tsx respectively).
    author: { "@id": `${SITE_URL}/about#author` },
    publisher: { "@id": `${SITE_URL}/#organization` },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Articles", item: `${SITE_URL}/articles` },
      { "@type": "ListItem", position: 3, name: article.title, item: url },
    ],
  };

  const schemas: Record<string, unknown>[] = [articleSchema, breadcrumbSchema];

  if (article.faqs && article.faqs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: article.faqs.map((f: FAQ) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }

  return schemas;
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const article = getArticleBySlug(resolvedParams.slug);
  if (!article) notFound();

  const formatInline = (text: string) => {
    // Escape characters that are unsafe inside an HTML attribute value.
    const escapeAttr = (s: string) =>
      s
        .replace(/&/g, "&amp;")
        .replace(/"/g, "&quot;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
    return text
      // Link regex allows one level of balanced parens in the URL,
      // so links to Wikipedia-style URLs (e.g. /wiki/Foo_(disambiguation)) work.
      .replace(/\[([^\]]+)\]\(((?:[^()]|\([^()]*\))*)\)/g, (_m, label, href) => {
        const isExternal = /^https?:\/\//i.test(href);
        const attrs = isExternal
          ? ` target="_blank" rel="noopener noreferrer"`
          : "";
        return `<a href="${escapeAttr(href)}" class="text-emerald-700 hover:underline"${attrs}>${label}</a>`;
      })
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>');
  };

  const formatContent = (content: string) => {
    return content.split('\n\n').map((paragraph, idx) => {
      if (paragraph.startsWith('## ')) {
        return <h2 key={idx} className="text-3xl font-bold mt-12 mb-4 text-slate-900">{paragraph.replace('## ', '')}</h2>;
      }
      if (paragraph.startsWith('### ')) {
        return <h3 key={idx} className="text-2xl font-bold mt-10 mb-4 text-slate-900">{paragraph.replace('### ', '')}</h3>;
      }

      if (paragraph.includes('\n* ')) {
        const items = paragraph.split('\n').filter(line => line.startsWith('* ')).map(item => item.substring(2));
        if (items.length > 0) {
          return (
            <ul key={idx} className="list-disc pl-6 space-y-2 mb-6 text-lg text-slate-700">
              {items.map((item, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
              ))}
            </ul>
          );
        }
      }

      if (paragraph === '***') {
        return <hr key={idx} className="my-10 border-slate-200" />;
      }

      return <p key={idx} className="mb-6 text-lg leading-relaxed text-slate-700" dangerouslySetInnerHTML={{ __html: formatInline(paragraph) }} />;
    });
  };

  return (
    <>
    <JsonLd data={getArticleSchemas(article)} />
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <SiteNav />

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

            {article.coverImage && (
              <Image
                src={article.coverImage.src}
                alt={article.coverImage.alt}
                width={1024}
                height={576}
                priority
                sizes="(max-width: 768px) 100vw, 768px"
                className="rounded-xl mb-8 w-full h-auto"
              />
            )}

            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
              {article.title}
            </h1>

            <Byline publishedAt={article.publishedAt} modifiedAt={article.modifiedAt} />

            <MedicalDisclaimer custom={article.disclaimer} />

            {article.quickAnswer && <QuickAnswer>{article.quickAnswer}</QuickAnswer>}
          </header>

          <section className="prose prose-lg prose-emerald max-w-none">
            {formatContent(article.content)}
          </section>

          {article.faqs && article.faqs.length > 0 && (
            <section className="mt-12 pt-8 border-t border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
              <dl className="space-y-6">
                {article.faqs.map((f) => (
                  <div key={f.q}>
                    <dt className="text-lg font-semibold text-slate-800 mb-2">{f.q}</dt>
                    <dd className="text-slate-700 leading-relaxed">{f.a}</dd>
                  </div>
                ))}
              </dl>
            </section>
          )}

          <footer>
            <AuthorBio />

            <RelatedArticles currentSlug={article.slug} category={article.category} />

            {!article.isExcerpt && (
              <div className="mt-12 text-center">
                <Link
                  href="/guide#pricing"
                  className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-500 transition shadow-lg"
                >
                  Get the Craving Toolkit Guide
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
                href="/guide#pricing"
                className="inline-block bg-emerald-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-400 transition shadow-lg"
              >
                Get the Full Craving Toolkit Guide
              </Link>
            </div>
          </section>
        )}
      </main>

      <SiteFooter />
    </div>
    </>
  );
}
