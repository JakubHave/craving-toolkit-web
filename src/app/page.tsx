import Link from "next/link";
import { CheckCircle2, ArrowRight, BookOpen, Eye } from "lucide-react";
import Image from "next/image";
import NewsletterForm from "./newsletter-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Craving Toolkit | Stop Cravings & Stay in Recovery",
  description: "Emergency tools to fight addiction cravings and stop relapse spirals. A 40-page guide with actionable strategies and worksheets for recovery.",
  alternates: {
    canonical: "https://www.cravingtoolkit.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Craving Toolkit – Addiction Recovery Guide",
  description: "A 40-page practical guide with emergency tools, actionable strategies, and 6 worksheets to fight addiction cravings, stop relapse spirals, and stay in recovery.",
  image: "https://www.cravingtoolkit.com/cover.jpg",
  brand: {
    "@type": "Brand",
    name: "Craving Toolkit",
  },
  offers: {
    "@type": "Offer",
    price: "19.00",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: "https://www.cravingtoolkit.com/#pricing",
    shippingDetails: {
      "@type": "OfferShippingDetails",
      shippingRate: {
        "@type": "MonetaryAmount",
        value: "0",
        currency: "USD",
      },
      shippingDestination: {
        "@type": "DefinedRegion",
        addressCountry: "US",
      },
      deliveryTime: {
        "@type": "ShippingDeliveryTime",
        handlingTime: {
          "@type": "QuantitativeValue",
          minValue: 0,
          maxValue: 0,
          unitCode: "DAY",
        },
        transitTime: {
          "@type": "QuantitativeValue",
          minValue: 0,
          maxValue: 0,
          unitCode: "DAY",
        },
      },
    },
    hasMerchantReturnPolicy: {
      "@type": "MerchantReturnPolicy",
      applicableCountry: "US",
      returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
      merchantReturnDays: 30,
      returnMethod: "https://schema.org/ReturnByMail",
      returnFees: "https://schema.org/FreeReturn",
    },
  },
};

export default function LandingPage() {
  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-200">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-lg">
        <div className="max-w-5xl mx-auto px-3 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-1.5 sm:gap-2 font-semibold text-base sm:text-xl tracking-tight text-emerald-800 shrink-0">
            <Image src="/icon_1024.webp" alt="Craving Toolkit logo" width={32} height={32} className="rounded-lg w-7 h-7 sm:w-8 sm:h-8" />
            Craving Toolkit
          </Link>
          <div className="flex items-center gap-3 sm:gap-6">
            <Link href="/articles" className="text-sm font-medium text-slate-500 hover:text-emerald-700 transition-colors">Articles</Link>
            <Link href="/calculators" className="text-sm font-medium text-slate-500 hover:text-emerald-700 transition-colors hidden sm:inline">Calculators</Link>
            <a href="#pricing" className="text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 px-3 sm:px-4 py-1.5 rounded-full transition-colors whitespace-nowrap">Get the Guide</a>
          </div>
        </div>
      </nav>

      {/* App Banner */}
      <a href="#waiting-list" className="block bg-gradient-to-r from-emerald-700 to-teal-700 text-white text-center py-3.5 px-4 text-base font-medium hover:from-emerald-600 hover:to-teal-600 transition-all">
        <span className="inline-flex items-center gap-2">
          📱 Mobile app coming soon. <span className="underline underline-offset-2">Join the waiting list</span> <ArrowRight className="w-4 h-4" />
        </span>
      </a>

      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/80 via-white to-slate-50" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-emerald-100/40 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-6 pt-28 pb-20 text-center">
          <h1 className="animate-fade-in-up font-serif text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
            Practical tools to fight cravings and urges, <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">stop spirals, and stay in recovery.</span>
          </h1>
          <p className="animate-fade-in-up-delay-1 text-xl md:text-2xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            A 40-page action plan and a mobile app for the exact moment cravings take over — with emergency tools, worksheets, and strategies that work when willpower doesn&rsquo;t.
          </p>
          <div className="animate-fade-in-up-delay-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#pricing" className="group bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/25 hover:shadow-xl hover:shadow-emerald-600/30 hover:-translate-y-0.5 flex items-center gap-2">
              Get the guide <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
          <p className="animate-fade-in-up-delay-3 mt-5 text-sm text-slate-400 tracking-wide">Instant PDF download. Secure checkout.</p>

          <div className="animate-fade-in-up-delay-3 mt-12">
            <Image
              src="/craving_toolkit.webp"
              alt="Craving Toolkit guide cover"
              width={360}
              height={480}
              sizes="(max-width: 768px) 90vw, 360px"
              className="mx-auto rounded-2xl shadow-2xl shadow-slate-900/20"
              priority
            />
          </div>
        </div>
      </header>

      {/* Problem Section */}
      <section className="bg-white py-24 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12 text-center leading-snug">When cravings hit, most advice is useless.</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm">
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                People say things like &ldquo;just stay strong&rdquo; or &ldquo;focus on your goals.&rdquo; But in a real craving spiral, that often isn&rsquo;t enough. Logic disappears, and old patterns take over.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed font-medium">
                What people need is something practical for the exact moment the brain stops feeling trustworthy.
              </p>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-emerald-50/50 p-8 rounded-2xl border border-slate-200/80 shadow-sm">
              <h3 className="font-semibold text-xl mb-5">This guide helps you:</h3>
              <ul className="space-y-4">
                {[
                  "Know what to do in the first 10 minutes",
                  "Interrupt the routine before relapse happens",
                  "Handle stress, loneliness, shame, and boredom",
                  "Recover quickly after a slip instead of giving up"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-center leading-snug">What is inside the guide?</h2>
          <p className="text-lg text-center text-slate-500 mb-14 max-w-2xl mx-auto leading-relaxed">
            A concise, fluff-free, 40-page PDF packed with actionable frameworks. Here is exactly what is covered across the 15 chapters and 6 worksheets:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                num: "01",
                title: "Emergency Tools & Craving Mechanics",
                desc: "Understand why cravings defy logic. Learn exactly what to do in the first 10 minutes, how to \"urge surf,\" and how to shut down the addictive voice."
              },
              {
                num: "02",
                title: "Triggers & Personality Styles",
                desc: "Detailed breakdowns of different triggers (stress, loneliness, boredom), different addiction patterns, and how your specific personality style creates unique weak spots."
              },
              {
                num: "03",
                title: "Breaking the Relapse Spiral",
                desc: "How to handle shame, slips, and the dangerous \"screw it\" mentality. Learn the daily practices that actually weaken your cravings over the long term."
              },
              {
                num: "04",
                title: "Six Practical Worksheets",
                desc: "Includes the Habit Loop Mapper, Craving Log, Cost-Benefit Check, Top 5 Addictive Lies, Slip Review, and an Emergency Craving Card to build your personal plan."
              }
            ].map((card) => (
              <div key={card.num} className="group bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-emerald-200/60 transition-all duration-300">
                <div className="text-xs font-bold text-emerald-500 tracking-widest uppercase mb-3">{card.num}</div>
                <h3 className="font-semibold text-xl mb-3 text-slate-800 group-hover:text-emerald-800 transition-colors">{card.title}</h3>
                <p className="text-slate-500 text-base leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator CTA Banner */}
      <section className="py-12 bg-white border-y border-slate-200/60">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-10">
            <p className="text-2xl mb-2">🧮</p>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mb-3">Free Recovery Calculators</h2>
            <p className="text-slate-500 text-lg mb-6 max-w-md mx-auto">
              Find out what your habit really costs &mdash; and what recovery is worth in dollars, time, and health.
            </p>
            <Link
              href="/calculators/money-saved"
              className="inline-flex items-center gap-2 border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 font-semibold px-6 py-3 rounded-full transition-colors"
            >
              Try the Money Saved Calculator <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-900 to-teal-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.15),transparent_60%)]" />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <Image
            src="/jakub.jpg"
            alt="Jakub Havelka"
            width={200}
            height={200}
            className="rounded-full border-2 border-emerald-400/50 mb-8 mx-auto"
          />
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8 text-white leading-snug">I&rsquo;m not writing this from a distance.</h2>
          <p className="text-lg leading-relaxed text-emerald-100/90 mb-6">
            I&rsquo;m an addict — alcohol, drugs, smoking, overeating, depression, and anxiety. I spent years in treatment, rehab and psychotherapy. Today, I&rsquo;ve been clean for more than 10 years and live a stable and fulfilling life.
          </p>
          <p className="text-lg leading-relaxed text-emerald-100/90 mb-6">
            I built this guide from what actually helped — my own experience combined with modern addiction science.
          </p>
          <p className="text-lg leading-relaxed text-emerald-100/90">
            What I care about is not sounding impressive. It&rsquo;s giving you tools that are actually usable when things get hard.
          </p>
          <p className="text-sm text-emerald-300/70 mt-4">
            Follow my journey:
            <a href="https://x.com/JacobHavelka" target="_blank" rel="noopener" className="text-emerald-300 hover:text-emerald-200 ml-2">X/Twitter</a>
            <span className="mx-1">·</span>
            <a href="https://www.instagram.com/havelkajacob/" target="_blank" rel="noopener" className="text-emerald-300 hover:text-emerald-200">Instagram</a>
          </p>
        </div>
      </section>

      {/* Free Preview CTA */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 text-sm font-semibold px-4 py-1.5 rounded-full border border-emerald-200 mb-6">
            <Eye className="w-4 h-4" />
            Free Preview
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 leading-snug">Not sure yet? Read it first.</h2>
          <p className="text-lg text-slate-500 mb-8 leading-relaxed">
            Read the first pages free — no signup, no payment.
          </p>
          <Link
            href="/preview"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-emerald-600 text-emerald-700 font-semibold hover:bg-emerald-50 transition-all text-base"
          >
            Read the Free Preview <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>

      {/* Pricing / Product Section */}
      <section id="pricing" className="relative pt-28 pb-16 bg-slate-50">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-50" />

        <div className="relative max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 leading-snug">Get the Craving Toolkit</h2>
            <p className="text-lg text-slate-500">You do not need perfect motivation to start. You just need better tools.</p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="relative rounded-3xl bg-gradient-to-b from-emerald-400 via-emerald-500 to-teal-600 p-[1px] shadow-2xl shadow-emerald-900/10">
              <div className="bg-white rounded-3xl overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-emerald-600 to-teal-500" />
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">The Complete Guide</h3>
                  <p className="text-slate-500 mb-6">Everything you need to interrupt the spiral.</p>
                  <div className="mb-3 flex items-baseline gap-3">
                    <span className="text-5xl font-extrabold text-slate-900">$19</span>
                    <span className="text-2xl font-bold text-slate-300 line-through">$24</span>
                  </div>
                  <div className="mb-8">
                    <span className="inline-block bg-emerald-50 text-emerald-700 text-sm font-semibold px-3 py-1 rounded-full border border-emerald-200">
                      New Release Special: Price increases soon
                    </span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-3 text-slate-600"><BookOpen className="w-5 h-5 text-emerald-500" /> Instant PDF Download</li>
                    <li className="flex items-center gap-3 text-slate-600"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> Short, actionable chapters</li>
                    <li className="flex items-center gap-3 text-slate-600"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> Practical emergency exercises</li>
                    <li className="flex items-center gap-3 text-slate-600"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> Personal anti-craving plan templates</li>
                  </ul>

                  <a
                    href="https://jacobhavelka.gumroad.com/l/lqdlu"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="group block w-full text-center bg-emerald-600 text-white rounded-xl py-4 font-bold text-lg hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20 hover:shadow-xl hover:shadow-emerald-600/30 hover:-translate-y-0.5"
                  >
                    Buy Now & Download
                  </a>
                  <p className="text-center text-sm text-slate-400 mt-4">Secure checkout. Instant delivery.</p>
                  <p className="text-center text-sm text-emerald-600 font-medium mt-2">30-day money-back guarantee — no questions asked.</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <a href="https://fazier.com/launches/www.cravingtoolkit.com" target="_blank" rel="noopener">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://fazier.com/api/v1//public/badges/launch_badges.svg?badge_type=featured&theme=neutral" width={250} alt="Featured on Fazier" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterForm />

      {/* Footer / Legal */}
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
    </>
  );
}
