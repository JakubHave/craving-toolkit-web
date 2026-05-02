import Link from "next/link";
import { ArrowRight, ShieldCheck, Lock, Heart, Smartphone, Zap, Shield, EyeOff } from "lucide-react";
import Image from "next/image";
import { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import AppStoreBadges from "@/components/AppStoreBadges";

const HOMEPAGE_DESCRIPTION =
  "Addiction recovery tools for the moment cravings take over. Counter-action, breathing, urge surfing, voice of truth. Offline, no account, no ads.";

export const metadata: Metadata = {
  title: "Craving Toolkit — Recovery tools for the moment cravings take over",
  description: HOMEPAGE_DESCRIPTION,
  alternates: {
    canonical: "https://www.cravingtoolkit.com",
  },
  openGraph: {
    url: "https://www.cravingtoolkit.com",
    title: "Craving Toolkit — Recovery tools for the moment cravings take over",
    description: HOMEPAGE_DESCRIPTION,
    images: [
      {
        url: "/og-image-1200x630.png",
        width: 1200,
        height: 630,
        alt: "Craving Toolkit — recovery tools for the moment cravings take over",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Craving Toolkit — Recovery tools for the moment cravings take over",
    description: HOMEPAGE_DESCRIPTION,
    images: ["/og-image-1200x630.png"],
  },
};

const screens = [
  { src: "/screens/android_ten_minutes.webp", alt: "Buy yourself ten minutes — emergency 10-minute timer" },
  { src: "/screens/android_counter_action.webp", alt: "Counter-Action — use your body to interrupt the urge" },
  { src: "/screens/android_urge_surfing.webp", alt: "Urge Surfing — observe the craving without acting on it" },
  { src: "/screens/android_breath.webp", alt: "Reset with breath — guided breathing exercise" },
  { src: "/screens/android_addictive_voice.webp", alt: "Addictive Voice — name the lie, then flip to the truth" },
  { src: "/screens/android_my_voice.webp", alt: "My Voice of Truth — hear your own calm voice when you need it most" },
  { src: "/screens/android_checkin.webp", alt: "Daily check-in" },
  { src: "/screens/android_track.webp", alt: "Craving log — track intensity, triggers, and what worked" },
];

const SITE_URL = "https://www.cravingtoolkit.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  "@id": `${SITE_URL}/#app`,
  name: "Craving Toolkit",
  url: SITE_URL,
  description: HOMEPAGE_DESCRIPTION,
  applicationCategory: "HealthApplication",
  operatingSystem: "iOS, Android",
  inLanguage: "en",
  downloadUrl: "https://apps.apple.com/app/id6761936946",
  installUrl: "https://play.google.com/store/apps/details?id=com.jacob.cravingtoolkitapp",
  screenshot: screens.map((s) => `${SITE_URL}${s.src}`),
  creator: { "@id": `${SITE_URL}/about#author` },
  publisher: { "@id": `${SITE_URL}/#organization` },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

// At lg, the screen grid is 6 columns with each card spanning 2 (i.e. 3 cards
// per row). When the count doesn't divide by 3, center the partial last row by
// pushing the first tail item with col-start.
function lastRowOffsetClass(index: number, count: number) {
  const remainder = count % 3;
  if (remainder === 0) return "";
  const firstTailIndex = count - remainder;
  if (index !== firstTailIndex) return "";
  return remainder === 1 ? "lg:col-start-3" : "lg:col-start-2";
}

const differentiators = [
  {
    icon: Zap,
    title: "Crisis-first, not counter-first.",
    desc: "Sober days are tracked, but the app leads with tools for the moment a craving takes over.",
  },
  {
    icon: Shield,
    title: "Your data never leaves your device.",
    desc: "No account, no analytics, no ads.",
  },
  {
    icon: EyeOff,
    title: "No community feed.",
    desc: "No comparison, no pressure, no public sobriety performance.",
  },
  {
    icon: Heart,
    title: "Built by someone in recovery, not a startup.",
    desc: "10+ years clean, written from inside the experience.",
  },
];

export default function LandingPage() {
  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-200">
      <SiteNav />
      <main>

      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-100 via-white to-slate-50" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-emerald-200/55 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-6 pt-24 pb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="animate-fade-in-up font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                A pocket recovery toolkit for{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">the moment your brain stops feeling trustworthy.</span>
              </h1>
              <p className="animate-fade-in-up-delay-1 text-lg md:text-xl text-slate-500 mb-10 leading-relaxed">
                Free. Fully offline. No account, no tracking, no community feed. Just the tools you need when willpower runs out.
              </p>
              <div className="animate-fade-in-up-delay-2">
                <AppStoreBadges />
              </div>
              <p className="animate-fade-in-up-delay-3 mt-5 text-sm text-slate-400 tracking-wide text-center md:text-left">Free download. iOS & Android.</p>
            </div>

            <div className="animate-fade-in-up-delay-3 flex justify-center">
              <Image
                src="/screens/mobile_hero.webp"
                alt="Craving Toolkit app — real tools for real cravings"
                width={1620}
                height={2880}
                sizes="(max-width: 768px) 90vw, 440px"
                className="w-full max-w-[360px] sm:max-w-[440px] h-auto rounded-3xl"
                priority
              />
            </div>
          </div>
        </div>
      </header>

      {/* Why this is different */}
      <section className="bg-white py-20 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-14 text-center leading-snug max-w-3xl mx-auto">
            Most recovery apps count days. This one helps you survive the next ten minutes.
          </h2>
          <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
            {differentiators.map(({ icon: Icon, title, desc }) => (
              <li key={title} className="flex items-start gap-4">
                <div className="flex items-center justify-center w-9 h-9 rounded-full bg-emerald-100 text-emerald-700 shrink-0 mt-0.5">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 leading-snug mb-1">{title}</p>
                  <p className="text-slate-500 leading-relaxed">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What's in the app */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-center leading-snug">What&rsquo;s in the app</h2>
          <p className="text-lg text-center text-slate-500 mb-12 max-w-3xl mx-auto leading-relaxed">
            Eight tools, all reachable in a tap when a craving hits: a 10-minute emergency timer, guided breathing,
            urge surfing, counter-action, an addictive-voice exercise, your own pre-recorded voice of truth, a daily
            check-in, and a craving log to track what works.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5 sm:gap-6">
            {screens.map((screen, i) => (
              <li
                key={screen.src}
                className={`overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm lg:col-span-2 ${lastRowOffsetClass(i, screens.length)}`}
              >
                <Image
                  src={screen.src}
                  alt={screen.alt}
                  width={1620}
                  height={2880}
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                  className="w-full h-auto"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Privacy */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-700 mb-6">
            <Lock className="w-6 h-6" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 leading-snug">
            Your data never leaves your device.
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
            No backend. No account. No analytics. Everything you record, log, or write stays in your phone&rsquo;s local storage.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-medium text-slate-500">
            <span className="inline-flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-emerald-600" /> No account required</span>
            <span className="inline-flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-emerald-600" /> Works offline</span>
            <span className="inline-flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-emerald-600" /> Zero analytics</span>
          </div>
        </div>
      </section>

      {/* Author */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-900 to-teal-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.15),transparent_60%)]" />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <Image
            src="/jakub.jpg"
            alt="Jakub Havelka"
            width={160}
            height={160}
            className="rounded-full border-2 border-emerald-400/50 mb-8 mx-auto"
          />
          <p className="text-lg leading-relaxed text-emerald-100/90 mb-6">
            I&rsquo;m not writing this from a distance. I&rsquo;m an addict — alcohol, drugs, smoking, overeating. I spent years in treatment, rehab, and therapy. I&rsquo;ve been clean for over 10 years.
          </p>
          <p className="text-lg leading-relaxed text-emerald-100/90">
            I built this app from what actually helped — my own experience and modern addiction science. What I care about is not sounding impressive. It&rsquo;s giving you tools that are actually usable when things get hard.
          </p>
          <p className="text-sm text-emerald-300/70 mt-6">
            <a href="https://x.com/cravingtoolkit" target="_blank" rel="noopener" className="text-emerald-300 hover:text-emerald-200">X/Twitter</a>
            <span className="mx-2">·</span>
            <a href="https://www.instagram.com/craving.toolkit/" target="_blank" rel="noopener" className="text-emerald-300 hover:text-emerald-200">Instagram</a>
            <span className="mx-2">·</span>
            <a href="https://www.tiktok.com/@cravingtoolkit" target="_blank" rel="noopener" className="text-emerald-300 hover:text-emerald-200">TikTok</a>
          </p>
        </div>
      </section>

      {/* Guide cross-link */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 leading-snug">Want to understand the science?</h2>
          <p className="text-lg text-slate-500 mb-8 leading-relaxed">
            The 40-page Craving Toolkit guide goes deeper into why cravings work the way they do, how the addictive voice operates, and the daily practices that weaken cravings over time. The app is what you use. The guide shapes how you think about recovery.
          </p>
          <Link
            href="/guide"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-emerald-600 text-emerald-700 font-semibold hover:bg-emerald-50 transition-all text-base"
          >
            Read the guide <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section id="download" className="relative py-20 overflow-hidden bg-slate-50 scroll-mt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-100/30 rounded-full blur-3xl" />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-600 text-white mb-6 shadow-lg shadow-emerald-600/25">
            <Smartphone className="w-6 h-6" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 leading-snug">
            Free. Fully offline. Built for the hardest moment.
          </h2>
          <p className="text-lg text-slate-500 mb-10 leading-relaxed">
            Download the Craving Toolkit and have it ready before the next craving hits.
          </p>
          <AppStoreBadges />
        </div>
      </section>

      </main>
      <SiteFooter />
    </div>
    </>
  );
}
