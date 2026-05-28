import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import SoberDayCounterClient from "./SoberDayCounterClient";

export const metadata: Metadata = {
  title: {
    absolute: "Sober Day Counter — How Many Days Have You Been Sober?",
  },
  description:
    "Free sober day counter. Enter your recovery start date to see how many days, weeks, and months you've been sober — plus your next milestone. No signup.",
  alternates: {
    canonical: "https://www.cravingtoolkit.com/calculators/sober-day-counter",
  },
  openGraph: {
    title: "Sober Day Counter — How Many Days Have You Been Sober?",
    description:
      "Enter your recovery start date to see how many days, weeks, and months you've been sober — plus your next milestone. Free and private.",
    url: "https://www.cravingtoolkit.com/calculators/sober-day-counter",
    type: "website",
    images: [
      {
        url: "/og-calculator.png",
        width: 1200,
        height: 630,
        alt: "Sober Day Counter — Craving Toolkit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sober Day Counter — How Many Days Have You Been Sober?",
    description:
      "Free, private sober day counter. See your days, weeks, months, and next milestone.",
    images: ["/og-calculator.png"],
  },
};

// Visible FAQ — answers double as FAQPage schema text (plain-text versions).
const FAQ_ITEMS: { question: string; answer: string; node?: React.ReactNode }[] =
  [
    {
      question: "How do I count my sober days?",
      answer:
        "Count from the morning after your last use. Day 1 is the first full day without the substance. Most people count from the date, not the hour — if you're unsure, pick the start of the day after your last drink or use.",
    },
    {
      question: "What's the difference between sober days and dry days?",
      answer:
        '"Dry days" usually mean a temporary break (Dry January, etc.) where the goal is to return to drinking moderately. "Sober days" usually mean ongoing abstinence as part of recovery. The counter works for both — only the intent differs.',
    },
    {
      question: "Does the counter restart if I slip?",
      answer:
        "That's a personal choice. Some recovery communities (AA, NA) traditionally restart the count. Others (harm reduction, SMART Recovery) don't. If a restart feels meaningful, count from your most recent clean day — but the slip doesn't erase what you learned in the days before. See our guide to what to do after a relapse.",
      node: (
        <>
          That&rsquo;s a personal choice. Some recovery communities (AA, NA)
          traditionally restart the count. Others (harm reduction, SMART
          Recovery) don&rsquo;t. If a restart feels meaningful, count from your
          most recent clean day &mdash; but the slip doesn&rsquo;t erase what you
          learned in the days before. See our{" "}
          <Link
            href="/articles/what-to-do-after-a-relapse"
            className="text-emerald-600 hover:text-emerald-700 underline underline-offset-2"
          >
            guide to what to do after a relapse
          </Link>
          .
        </>
      ),
    },
    {
      question: "Is the counter saved if I close the browser?",
      answer:
        'Only if you tick "Remember this date on my device." Then we store it in your browser\'s local storage. No server, no account, no tracking. If you don\'t tick the box, you\'ll re-enter the date next visit.',
    },
    {
      question: 'How many days sober is "long-term recovery"?',
      answer:
        "Definitions vary. Many treatment programs consider 90 days the threshold for early stability. One year is often called \"long-term sobriety.\" Five years is sometimes the threshold for sustained recovery. None of these are magic — consistency matters more than any single number.",
    },
  ];

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Sober Day Counter",
  url: "https://www.cravingtoolkit.com/calculators/sober-day-counter",
  applicationCategory: "HealthApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description:
    "Count exactly how many days, weeks, and months you've been sober, and see your next recovery milestone.",
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
      name: "Sober Day Counter",
      item: "https://www.cravingtoolkit.com/calculators/sober-day-counter",
    },
  ],
};

export default function SoberDayCounterPage() {
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

      <SiteNav />

      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-6 pt-6">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 text-sm text-slate-400"
        >
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
          <span className="text-slate-600">Sober Day Counter</span>
        </nav>
      </div>

      {/* Intro — server-rendered for SEO */}
      <section className="max-w-4xl mx-auto px-6 pt-10 pb-8">
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
          Sober Day Counter
        </h1>
        <div className="prose prose-slate max-w-none text-lg leading-relaxed">
          <p>
            Enter the day you started your recovery and see exactly how many days,
            weeks, and months you&rsquo;ve been sober &mdash; plus a live count of
            the hours, minutes, and seconds, and how close you are to your next
            milestone.
          </p>
          <p className="text-base text-slate-500 mt-4">
            <strong>100% private.</strong> No signup. No account. Everything runs
            in your browser.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <SoberDayCounterClient />
      </section>

      {/* Content sections — server-rendered for SEO */}
      <section className="bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6 py-16 space-y-12">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              How to use the sober day counter
            </h2>
            <div className="text-slate-600 leading-relaxed space-y-3">
              <p>
                Pick your recovery start date in the date field above. If you want
                to be precise, add the time of day you stopped &mdash; otherwise it
                defaults to the start of that day in your local timezone. The
                counter calculates instantly: total days sober, the breakdown into
                weeks, months, and years, and a live clock ticking the seconds since
                you started. There&rsquo;s no submit step and no waiting. Everything
                runs entirely in your browser, so your date never leaves your
                device.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Why counting sober days matters
            </h2>
            <div className="text-slate-600 leading-relaxed space-y-3">
              <p>
                Counting days turns something abstract &mdash; &ldquo;I&rsquo;m in
                recovery&rdquo; &mdash; into a number you can see grow. That matters
                more than it sounds. Early on, the count is proof the bad days are
                adding up to something. A visible streak is a small, daily reward
                that your brain can latch onto while the bigger rewards of recovery
                are still coming online.
              </p>
              <p>
                &ldquo;One day at a time&rdquo; isn&rsquo;t just a slogan; it&rsquo;s
                a way of shrinking an overwhelming goal into one you can actually
                hit today. A counter makes each of those days concrete. It also gives
                you language for the harder stretches &mdash; when day 40 feels worse
                than day 4, seeing the number reminds you how far you&rsquo;ve come.
                If you&rsquo;re rebuilding around the question of{" "}
                <Link
                  href="/articles/who-am-i-without-addiction-identity"
                  className="text-emerald-600 hover:text-emerald-700 underline underline-offset-2"
                >
                  who you are without addiction
                </Link>
                , a day count is one of the first new identities you get to claim. It
                pairs well with the{" "}
                <Link
                  href="/articles/30-day-dopamine-reset-week-by-week"
                  className="text-emerald-600 hover:text-emerald-700 underline underline-offset-2"
                >
                  30-day dopamine reset
                </Link>{" "}
                and the slower work of{" "}
                <Link
                  href="/articles/finding-purpose-recovery"
                  className="text-emerald-600 hover:text-emerald-700 underline underline-offset-2"
                >
                  finding purpose in recovery
                </Link>
                .
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Recovery milestones explained
            </h2>
            <div className="text-slate-600 leading-relaxed space-y-3">
              <p>
                The counter marks the same milestone ladder used in the Craving
                Toolkit app, because each rung tends to line up with something real
                happening in your body and mind.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>1 week (⭐):</strong> the acute fog starts lifting. Sleep is
                  often still rough, but the worst of the early physical adjustment is
                  usually behind you.
                </li>
                <li>
                  <strong>1 month (🏅):</strong> the brain&rsquo;s reward system begins
                  recalibrating. Cravings come less often, though they can still hit
                  hard out of nowhere.
                </li>
                <li>
                  <strong>90 days (🔥):</strong> often treated as a turning point in
                  early recovery. Many people notice mood, focus, and motivation
                  steadying as dopamine signaling continues to recover.
                </li>
                <li>
                  <strong>1 year (👑):</strong> a full cycle of seasons, holidays, and
                  triggers survived sober. The new routines start to feel like your
                  actual life rather than a restriction.
                </li>
              </ul>
              <p>
                None of these are switches that flip overnight &mdash; they&rsquo;re
                rough markers on a gradual curve. For the underlying timeline, see how
                long it takes to{" "}
                <Link
                  href="/articles/how-long-to-reset-dopamine-timeline"
                  className="text-emerald-600 hover:text-emerald-700 underline underline-offset-2"
                >
                  reset your dopamine system
                </Link>{" "}
                and what to expect during{" "}
                <Link
                  href="/articles/paws-post-acute-withdrawal-month-by-month"
                  className="text-emerald-600 hover:text-emerald-700 underline underline-offset-2"
                >
                  post-acute withdrawal, month by month
                </Link>
                .
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              What to do when you hit a milestone
            </h2>
            <div className="text-slate-600 leading-relaxed space-y-3">
              <p>
                Mark it &mdash; but keep it in proportion. You don&rsquo;t need a
                blowout, and a milestone that becomes an excuse to &ldquo;reward&rdquo;
                yourself near old triggers can backfire. You also don&rsquo;t want to
                let it pass like it was nothing.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Take five minutes to reflect on what changed since the last one.</li>
                <li>Tell one sober friend or someone who&rsquo;s in your corner.</li>
                <li>Write down what helped, so you can lean on it again.</li>
                <li>Do something small that you genuinely enjoy and won&rsquo;t regret.</li>
              </ul>
              <p>
                If a milestone leaves you feeling oddly flat instead of proud,
                that&rsquo;s common &mdash; it can be a nudge to keep{" "}
                <Link
                  href="/articles/finding-purpose-recovery"
                  className="text-emerald-600 hover:text-emerald-700 underline underline-offset-2"
                >
                  building purpose in recovery
                </Link>{" "}
                beyond the number.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — server-rendered for SEO */}
      <section className="border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-serif text-3xl font-bold text-slate-900 mb-8">
            Frequently asked questions
          </h2>
          <div className="space-y-6">
            {FAQ_ITEMS.map((item) => (
              <div key={item.question}>
                <h3 className="font-semibold text-slate-800 mb-2">
                  {item.question}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.node ?? item.answer}
                </p>
              </div>
            ))}
          </div>
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
                title: "Addiction Cost Calculator — see what your habit really costs",
                href: "/calculators/money-saved",
              },
              {
                title: "The 30-Day Dopamine Reset, Week by Week",
                href: "/articles/30-day-dopamine-reset-week-by-week",
              },
              {
                title: "How Long Does It Take to Reset Your Dopamine?",
                href: "/articles/how-long-to-reset-dopamine-timeline",
              },
              {
                title: "Get the Complete Craving Toolkit Guide",
                href: "/guide#pricing",
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

      {/* SAMHSA disclaimer */}
      <section className="border-t border-slate-200 bg-slate-100">
        <div className="max-w-4xl mx-auto px-6 py-8 text-center">
          <p className="text-sm text-slate-500">
            If you or someone you know is struggling with substance abuse, contact{" "}
            <a
              href="https://www.samhsa.gov/find-help/national-helpline"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 hover:text-emerald-700 underline underline-offset-2"
            >
              SAMHSA&rsquo;s National Helpline
            </a>{" "}
            at{" "}
            <a
              href="tel:1-800-662-4357"
              className="font-semibold text-slate-600"
            >
              1-800-662-4357
            </a>{" "}
            (free, confidential, 24/7).
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
