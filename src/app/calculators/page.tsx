import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Free Recovery Calculators",
  description:
    "Calculate how much money and time you save in recovery. Free interactive tools for anyone quitting smoking, drinking, drugs, or gambling.",
  alternates: { canonical: "https://www.cravingtoolkit.com/calculators" },
  openGraph: {
    url: "https://www.cravingtoolkit.com/calculators",
  },
};

const calculators = [
  {
    title: "Money Saved Calculator",
    description:
      "Find out how much your habit really costs — and what you could do with that money instead.",
    href: "/calculators/money-saved",
    status: "live" as const,
  },
  {
    title: "Time Saved Calculator",
    description:
      "Calculate how many hours you've reclaimed since getting sober.",
    href: "/calculators/time-saved",
    status: "soon" as const,
  },
  {
    title: "Health Recovery Timeline",
    description:
      "Track your body's healing milestones from day 1 to year 5.",
    href: "/calculators/health-timeline",
    status: "soon" as const,
  },
];

export default function CalculatorsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="border-b bg-white">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold text-xl tracking-tight text-emerald-800"
          >
            <Image
              src="/icon_1024.webp"
              alt="Craving Toolkit logo"
              width={32}
              height={32}
              className="rounded-lg w-8 h-8"
            />
            Craving Toolkit
          </Link>
          <div className="flex gap-6">
            <Link
              href="/articles"
              className="text-base font-semibold text-slate-700 hover:text-emerald-700 transition"
            >
              Articles
            </Link>
            <Link
              href="/calculators"
              className="text-base font-semibold text-emerald-700"
            >
              Calculators
            </Link>
            <Link
              href="/#pricing"
              className="hidden sm:inline-block text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 px-4 py-1.5 rounded-full transition-colors whitespace-nowrap"
            >
              Get the Guide
            </Link>
          </div>
        </div>
      </nav>

      <section className="max-w-4xl mx-auto px-6 py-16 sm:py-24">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Recovery Calculators
          </h1>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            See what recovery is really worth &mdash; in dollars, hours, and
            health.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {calculators.map((calc) => {
            const isLive = calc.status === "live";
            const cardClasses = `group bg-white p-6 rounded-2xl border shadow-sm transition-all ${
              isLive
                ? "border-slate-100 hover:border-emerald-200 hover:shadow-md cursor-pointer"
                : "border-slate-100 opacity-75"
            }`;
            const inner = (
              <>
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-xl font-bold text-slate-800 group-hover:text-emerald-700 transition-colors">
                    {calc.title}
                  </h2>
                  {calc.status === "soon" && (
                    <span className="text-xs font-semibold text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
                      Coming Soon
                    </span>
                  )}
                </div>
                <p className="text-slate-500 mb-4 leading-relaxed">
                  {calc.description}
                </p>
                {isLive && (
                  <span className="text-emerald-600 font-semibold text-sm flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                    Try it now <ArrowRight className="w-4 h-4" />
                  </span>
                )}
              </>
            );
            return isLive ? (
              <Link key={calc.title} href={calc.href} className={cardClasses}>
                {inner}
              </Link>
            ) : (
              <div key={calc.title} className={cardClasses}>
                {inner}
              </div>
            );
          })}
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="max-w-5xl mx-auto px-6 py-8 text-center text-sm text-slate-400">
          &copy; {new Date().getFullYear()} Craving Toolkit. All rights
          reserved.
        </div>
      </footer>
    </div>
  );
}
