import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

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
    title: "Sober Day Counter",
    description:
      "Find out exactly how many days, weeks, and months you've been sober — and what's your next milestone.",
    href: "/calculators/sober-day-counter",
    status: "live" as const,
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
      <SiteNav />

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

      <SiteFooter />
    </div>
  );
}
