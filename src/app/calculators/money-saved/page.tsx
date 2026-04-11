import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import MoneyCalculator from "@/components/calculators/MoneyCalculator";
import FAQ from "@/components/calculators/FAQ";
import { FAQ_ITEMS } from "@/lib/calculator-data";

export const metadata: Metadata = {
  title: "Addiction Cost Calculator: How Much Money Are You Saving in Recovery?",
  description:
    "Calculate the real cost of smoking, drinking, vaping, drugs, or gambling — and see how much you save every day, month, and year in recovery. Free, private, no signup.",
  alternates: {
    canonical: "https://www.cravingtoolkit.com/calculators/money-saved",
  },
  openGraph: {
    title: "How Much Does Your Addiction Really Cost?",
    description:
      "Calculate the real cost of smoking, drinking, vaping, drugs, or gambling. See your daily, monthly, and yearly savings in recovery.",
    url: "https://www.cravingtoolkit.com/calculators/money-saved",
    type: "website",
    images: [
      {
        url: "/og-calculator.png",
        width: 1200,
        height: 630,
        alt: "Addiction Cost Calculator — Craving Toolkit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Much Does Your Addiction Really Cost?",
    description:
      "Free calculator — find out what your habit costs per day, month, and year.",
    images: ["/og-calculator.png"],
  },
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Addiction Cost Calculator",
  url: "https://www.cravingtoolkit.com/calculators/money-saved",
  applicationCategory: "HealthApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description:
    "Calculate how much money your addiction costs and how much you save in recovery.",
  provider: {
    "@type": "Organization",
    name: "Craving Toolkit",
    url: "https://www.cravingtoolkit.com",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
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
      name: "Calculators",
      item: "https://www.cravingtoolkit.com/calculators",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Money Saved Calculator",
      item: "https://www.cravingtoolkit.com/calculators/money-saved",
    },
  ],
};

export default async function MoneySavedPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const isEmbed = params.embed === "true";

  if (isEmbed) {
    return (
      <div className="min-h-screen bg-slate-50 p-4 sm:p-6">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
        />
        <div className="max-w-3xl mx-auto">
          <MoneyCalculator />
          <p className="text-center text-sm text-slate-400 mt-8">
            Powered by{" "}
            <a
              href="https://www.cravingtoolkit.com/calculators/money-saved"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 hover:text-emerald-700 underline underline-offset-2"
            >
              Craving Toolkit
            </a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-lg">
        <div className="max-w-5xl mx-auto px-3 sm:px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-1.5 sm:gap-2 font-semibold text-base sm:text-xl tracking-tight text-emerald-800 shrink-0"
          >
            <Image
              src="/icon_1024.webp"
              alt="Craving Toolkit logo"
              width={32}
              height={32}
              className="rounded-lg w-7 h-7 sm:w-8 sm:h-8"
            />
            Craving Toolkit
          </Link>
          <div className="flex items-center gap-3 sm:gap-6">
            <Link
              href="/articles"
              className="text-sm font-medium text-slate-500 hover:text-emerald-700 transition-colors"
            >
              Articles
            </Link>
            <Link
              href="/calculators"
              className="text-sm font-medium text-slate-500 hover:text-emerald-700 transition-colors"
            >
              Calculators
            </Link>
            <a
              href="/#pricing"
              className="text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 px-3 sm:px-4 py-1.5 rounded-full transition-colors whitespace-nowrap"
            >
              Get the Guide
            </a>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-6 pt-6">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-slate-400">
          <Link href="/" className="hover:text-emerald-600 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link
            href="/calculators"
            className="hover:text-emerald-600 transition-colors"
          >
            Calculators
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-600">Money Saved Calculator</span>
        </nav>
      </div>

      {/* Intro — server-rendered for SEO */}
      <section className="max-w-4xl mx-auto px-6 pt-10 pb-8">
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
          How Much Does Your Addiction Really Cost?
        </h1>
        <div className="prose prose-slate max-w-none text-lg leading-relaxed">
          <p>
            Most people underestimate how much they spend on their habit. A
            pack-a-day smoker burns through $3,500/year. A weekend drinker
            easily spends $5,000+. And that&rsquo;s before the hidden costs
            &mdash; Ubers, late-night food, missed work, health problems.
          </p>
          <p>
            This calculator shows you the real number. Pick your substance,
            enter your usage, and see what recovery is actually worth &mdash;
            in dollars you can spend on something better.
          </p>
          <p className="text-base text-slate-500 mt-4">
            <strong>100% private.</strong> No signup. No data stored. Everything
            runs in your browser.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <MoneyCalculator />
      </section>

      {/* Methodology — server-rendered for SEO */}
      <section className="bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-serif text-3xl font-bold text-slate-900 mb-8">
            How We Calculate Your Savings
          </h2>

          <div className="space-y-8 text-slate-600 leading-relaxed">
            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">
                Base Cost Formula
              </h3>
              <p>
                We take your reported usage (quantity &times; price per unit)
                and multiply by the appropriate frequency to get your weekly
                cost. From there: daily = weekly &divide; 7, monthly = weekly
                &times; 4.33, annual = weekly &times; 52. For cigarettes we
                calculate packs per day from your daily cigarette count and pack
                size. For gambling we apply your estimated loss percentage to
                your weekly betting amount.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">
                Investment Growth Projection
              </h3>
              <p>
                Our projection uses the compound interest formula with your
                annual savings as yearly contributions. The default 7% return
                matches the historical average of the S&amp;P 500 after
                inflation. We also apply a 5% annual escalation factor to
                account for inflation and the tendency for addiction spending to
                increase over time.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">
                Hidden Costs
              </h3>
              <p>
                The direct cost of a substance is only part of the picture.
                Research shows smokers pay an average of $8,500/year in extra
                healthcare costs. Alcohol-related DUIs cost between
                $10,000&ndash;$25,000 on average. Heavy drinkers and drug users
                face an estimated $19,000/year earnings gap compared to
                non-users. Our hidden costs module lets you include your own
                health and productivity estimates.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">
                Our Data Sources
              </h3>
              <p>
                Default substance prices are based on national averages from the{" "}
                <a href="https://www.cdc.gov" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline underline-offset-2">CDC</a>,{" "}
                <a href="https://www.niaaa.nih.gov" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline underline-offset-2">NIAAA</a>,{" "}
                <a href="https://www.samhsa.gov" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline underline-offset-2">SAMHSA</a>,{" "}
                <a href="https://www.nih.gov" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline underline-offset-2">NIH</a>, and the{" "}
                <a href="https://www.ncpgambling.org" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline underline-offset-2">National Council on Problem Gambling</a>.
                Health milestones are drawn from peer-reviewed research cited by
                these agencies. All values are user-adjustable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — server-rendered for SEO */}
      <section className="border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-serif text-3xl font-bold text-slate-900 mb-8">
            Frequently Asked Questions
          </h2>
          <FAQ />
        </div>
      </section>

      {/* Related resources */}
      <section className="bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">
            More Recovery Tools
          </h2>
          <ul className="space-y-3">
            {[
              {
                title: "How to Survive the First 10 Minutes of a Craving",
                href: "/articles/survive-first-10-minutes-of-craving",
              },
              {
                title:
                  "The Pleasure-Pain Balance: The One Concept That Explains Every Addiction",
                href: "/articles/pleasure-pain-balance-explains-addiction",
              },
              {
                title:
                  "Why Sobriety Feels So Boring: The Dopamine Science No One Explains",
                href: "/articles/why-sobriety-feels-boring-dopamine-science",
              },
              {
                title: "Get the Complete Craving Toolkit Guide",
                href: "/#pricing",
              },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-emerald-600 hover:text-emerald-700 underline underline-offset-2 text-lg"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Embed code */}
      <section className="border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <h3 className="font-semibold text-slate-700 mb-3">
            Want this calculator on your website?
          </h3>
          <pre className="bg-slate-100 border border-slate-200 rounded-xl p-4 text-sm text-slate-600 overflow-x-auto">
            <code>{`<iframe
  src="https://www.cravingtoolkit.com/calculators/money-saved?embed=true"
  width="100%"
  height="800"
  frameborder="0"
  title="Addiction Cost Calculator by Craving Toolkit">
</iframe>`}</code>
          </pre>
        </div>
      </section>

      {/* SAMHSA disclaimer */}
      <section className="border-t border-slate-200 bg-slate-100">
        <div className="max-w-4xl mx-auto px-6 py-8 text-center">
          <p className="text-sm text-slate-500">
            If you or someone you know is struggling with substance abuse,
            contact{" "}
            <a
              href="https://www.samhsa.gov/find-help/national-helpline"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 hover:text-emerald-700 underline underline-offset-2"
            >
              SAMHSA&rsquo;s National Helpline
            </a>{" "}
            at{" "}
            <a href="tel:1-800-662-4357" className="font-semibold text-slate-600">
              1-800-662-4357
            </a>{" "}
            (free, confidential, 24/7).
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link
              href="/"
              className="font-semibold text-white tracking-tight"
            >
              Craving Toolkit
            </Link>
            <div className="flex flex-wrap gap-6 text-sm">
              <Link href="/about" className="hover:text-white transition">
                About
              </Link>
              <Link href="/articles" className="hover:text-white transition">
                Articles
              </Link>
              <Link href="/calculators" className="hover:text-white transition">
                Calculators
              </Link>
              <Link
                href="/editorial-policy"
                className="hover:text-white transition"
              >
                Editorial Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition">
                Terms
              </Link>
              <Link href="/privacy" className="hover:text-white transition">
                Privacy
              </Link>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-8 text-center">
            &copy; {new Date().getFullYear()} Craving Toolkit. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
