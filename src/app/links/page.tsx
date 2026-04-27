import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Bell, FileText, Newspaper, Mail } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Links — Craving Toolkit" },
  description: "All the Craving Toolkit links in one place — the guide, the mobile app waitlist, a free sample, and articles for recovery.",
  alternates: {
    canonical: "https://www.cravingtoolkit.com/links",
  },
  openGraph: {
    type: "website",
    url: "https://www.cravingtoolkit.com/links",
    title: "Links — Craving Toolkit",
    description: "All the Craving Toolkit links in one place — the guide, the mobile app waitlist, a free sample, and articles for recovery.",
    siteName: "Craving Toolkit",
    images: [
      {
        url: "/cover.jpg",
        width: 1200,
        height: 630,
        alt: "Craving Toolkit — A field manual for recovery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Links — Craving Toolkit",
    description: "All the Craving Toolkit links in one place — the guide, the mobile app waitlist, a free sample, and articles for recovery.",
    images: ["/cover.jpg"],
    creator: "@JacobHavelka",
    site: "@JacobHavelka",
  },
};

type PrimaryLink = {
  href: string;
  label: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  external?: boolean;
};

const primaryLinks: PrimaryLink[] = [
  {
    href: "/#pricing",
    label: "Get the ebook",
    description: "The 40-page guide — instant PDF download.",
    icon: BookOpen,
  },
  {
    href: "/#waiting-list",
    label: "App waitlist",
    description: "Be first in line when the mobile app launches.",
    icon: Bell,
  },
  {
    href: "/preview",
    label: "Free sample",
    description: "Read the first chapters — no signup, no payment.",
    icon: FileText,
  },
  {
    href: "/articles",
    label: "Articles",
    description: "Practical writing on cravings, triggers, and recovery.",
    icon: Newspaper,
  },
];

export default function LinksPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-200 flex flex-col">
      <main className="flex-1">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/80 via-white to-slate-50" />
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-100/40 rounded-full blur-3xl" />

          <div className="relative max-w-md mx-auto px-5 pt-16 pb-12 sm:pt-20 sm:pb-16">
            <header className="text-center mb-10">
              <Link href="/" className="inline-flex items-center gap-2 mb-6" aria-label="Craving Toolkit home">
                <Image
                  src="/icon_1024.webp"
                  alt="Craving Toolkit logo"
                  width={64}
                  height={64}
                  className="rounded-2xl w-16 h-16 shadow-lg shadow-emerald-900/10"
                  priority
                />
              </Link>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-3 leading-[1.15]">
                Craving Toolkit
              </h1>
              <p className="text-lg text-slate-500 leading-relaxed">
                A field manual for recovery.
              </p>
            </header>

            <nav aria-label="Primary links" className="flex flex-col gap-4">
              {primaryLinks.map((link) => {
                const Icon = link.icon;
                const className =
                  "group flex items-center gap-4 bg-white px-5 py-5 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-emerald-200/60 hover:-translate-y-0.5 transition-all";
                const inner = (
                  <>
                    <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 shrink-0">
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="flex-1 min-w-0">
                      <span className="block font-semibold text-base text-slate-800 group-hover:text-emerald-800 transition-colors">
                        {link.label}
                      </span>
                      <span className="block text-sm text-slate-500 leading-snug mt-0.5">
                        {link.description}
                      </span>
                    </span>
                    <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all shrink-0" />
                  </>
                );
                return link.href.startsWith("/") ? (
                  <Link key={link.href} href={link.href} className={className}>
                    {inner}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >
                    {inner}
                  </a>
                );
              })}
            </nav>

            <section aria-labelledby="social-heading" className="mt-12">
              <h2 id="social-heading" className="text-xs font-bold text-emerald-600 tracking-widest uppercase text-center mb-5">
                Follow along
              </h2>
              <div className="flex items-center justify-center gap-3">
                <a
                  href="https://x.com/JacobHavelka"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow on X (Twitter)"
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white border border-slate-200/80 text-slate-700 hover:text-emerald-700 hover:border-emerald-200/60 hover:shadow-md transition-all"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com/havelkajacob"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow on Instagram"
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white border border-slate-200/80 text-slate-700 hover:text-emerald-700 hover:border-emerald-200/60 hover:shadow-md transition-all"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
              </div>
            </section>

            <section aria-labelledby="contact-heading" className="mt-10 text-center">
              <h2 id="contact-heading" className="sr-only">Contact</h2>
              <a
                href="mailto:jacob@cravingtoolkit.com"
                className="inline-flex items-center gap-2 text-slate-500 hover:text-emerald-700 text-sm font-medium transition-colors"
              >
                <Mail className="w-4 h-4" />
                jacob@cravingtoolkit.com
              </a>
            </section>
          </div>
        </div>
      </main>

      {/* Footer / Legal — copied from homepage to keep styling in lockstep */}
      <footer className="bg-slate-900 text-slate-400 py-16 text-center text-sm">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/" className="inline-block font-semibold text-lg text-white/80 mb-6">Craving Toolkit</Link>
          <p className="mb-6 max-w-2xl mx-auto leading-relaxed text-slate-500">
            <strong className="text-slate-400">Disclaimer:</strong> This guide is educational and based on lived experience and modern addiction science. It is not medical advice and is not a substitute for professional treatment, therapy, or emergency support.
          </p>
          <nav aria-label="Footer" className="flex flex-wrap items-center justify-center gap-4 mb-2">
            <Link href="/about" className="text-slate-400 hover:text-white transition-colors">About</Link>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <Link href="/articles" className="text-slate-400 hover:text-white transition-colors">All Articles</Link>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <Link href="/calculators" className="text-slate-400 hover:text-white transition-colors">Calculators</Link>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <Link href="/editorial-policy" className="text-slate-400 hover:text-white transition-colors">Editorial Policy</Link>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <Link href="/terms" className="text-slate-400 hover:text-white transition-colors">Guide Terms</Link>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors">Guide Privacy</Link>
          </nav>
          <div className="flex items-center justify-center gap-4 mb-4">
            <Link href="/app-terms" className="text-slate-400 hover:text-white transition-colors">App Terms</Link>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <Link href="/app-privacy" className="text-slate-400 hover:text-white transition-colors">App Privacy</Link>
          </div>
          <p className="text-xs text-slate-500 mb-4 max-w-2xl mx-auto">
            The Craving Toolkit is not a substitute for professional medical advice, diagnosis, or treatment.
            If you need help, contact <a href="https://www.samhsa.gov/find-help/national-helpline" rel="noopener" target="_blank" className="underline hover:text-slate-300">SAMHSA&rsquo;s National Helpline</a> at 1-800-662-4357.
          </p>
          <p className="mb-4">Contact: <a href="mailto:jacob@cravingtoolkit.com" className="text-slate-400 hover:text-white transition-colors">jacob@cravingtoolkit.com</a></p>
          <div className="flex items-center justify-center gap-4 mt-3 mb-4">
            <a
              href="https://x.com/JacobHavelka"
              target="_blank"
              rel="noopener"
              aria-label="Follow on X (Twitter)"
              className="text-slate-400 hover:text-slate-300 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/havelkajacob/"
              target="_blank"
              rel="noopener"
              aria-label="Follow on Instagram"
              className="text-slate-400 hover:text-slate-300 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
          </div>
          <p className="text-slate-600">© {new Date().getFullYear()} Craving Toolkit. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
