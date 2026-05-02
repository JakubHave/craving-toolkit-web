"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { CalculatorResult } from "@/lib/calculator-logic";
import type { SubstanceId } from "@/lib/calculator-data";
import { getEquivalents, SUBSTANCE_DEFAULTS } from "@/lib/calculator-data";
import HealthTimeline from "./HealthTimeline";
import LiveTicker from "./LiveTicker";
import ShareButtons from "./ShareButtons";

function useCountUp(target: number, duration = 1500) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const start = performance.now();
    let raf: number;

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(eased * target);
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      }
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);

  return value;
}

function fmt(n: number): string {
  return n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

interface Props {
  result: CalculatorResult;
  substance: SubstanceId;
  daysSober: number;
  investmentReturn: number;
}

export default function ResultsCard({ result, substance, daysSober, investmentReturn }: Props) {
  const animatedTotal = useCountUp(result.totalSaved);
  const equivalents = getEquivalents(result.annualCost);
  const label = SUBSTANCE_DEFAULTS[substance].label.toLowerCase();

  return (
    <div className="space-y-6" role="region" aria-live="polite" aria-label="Savings results">
      {/* Primary savings card */}
      <div className="bg-white rounded-2xl border border-emerald-200 shadow-lg shadow-emerald-100/50 p-6 sm:p-8 text-center">
        <p className="text-slate-600 mb-2">
          In <span className="font-semibold">{daysSober}</span> day{daysSober !== 1 ? "s" : ""} sober, you&rsquo;ve saved:
        </p>
        <p className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-emerald-600 tabular-nums mb-6">
          ${fmt(animatedTotal)}
        </p>

        <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6">
          {[
            { label: "Per Day", value: result.dailyCost },
            { label: "Per Month", value: result.monthlyCost },
            { label: "Per Year", value: result.annualCost },
          ].map((item) => (
            <div key={item.label} className="bg-slate-50 rounded-xl p-3 sm:p-4">
              <p className="text-xs text-slate-500 mb-1">{item.label}</p>
              <p className="text-lg sm:text-xl font-bold text-slate-800">${fmt(item.value)}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center text-sm text-slate-600">
          <span>
            5-Year Projection:{" "}
            <span className="font-semibold text-slate-800">
              ${Math.round(result.projections[5]?.saved ?? 0).toLocaleString()}
            </span>
          </span>
          <span className="hidden sm:inline text-slate-300">|</span>
          <span>
            If Invested ({investmentReturn}%/yr):{" "}
            <span className="font-semibold text-emerald-700">
              ${Math.round(result.projections[5]?.invested ?? 0).toLocaleString()}
            </span>{" "}
            over 5 years
          </span>
        </div>
      </div>

      {/* What you could buy */}
      {equivalents.length > 0 && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
          <h3 className="font-semibold text-lg text-slate-800 mb-4">
            What you could buy instead (per year)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {equivalents.map((eq, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-slate-50 rounded-xl p-4"
              >
                <span className="text-2xl">{eq.emoji}</span>
                <span className="text-slate-700 font-medium">{eq.text}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Health timeline */}
      <HealthTimeline substance={substance} daysSober={daysSober} />

      {/* Live ticker */}
      <LiveTicker perSecond={result.perSecond} totalSaved={result.totalSaved} />

      {/* Share */}
      <ShareButtons annualCost={result.annualCost} />

      {/* CTA */}
      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl p-6 sm:p-8 text-center">
        <p className="text-lg text-slate-700 mb-2">
          Your {label} habit costs{" "}
          <span className="font-bold text-slate-900">
            ${Math.round(result.annualCost).toLocaleString()}/year
          </span>
          . That&rsquo;s{" "}
          <span className="font-bold text-slate-900">
            ${Math.round(result.projections[5]?.saved ?? 0).toLocaleString()}
          </span>{" "}
          over 5 years.
        </p>
        <p className="text-slate-600 mb-6 max-w-lg mx-auto">
          The Craving Toolkit gives you the exact strategies to make this real
          &mdash; including the emergency tools that work in the first 10
          minutes of a craving.
        </p>
        <Link
          href="/guide#pricing"
          className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3.5 rounded-full shadow-lg shadow-emerald-600/25 transition-colors text-lg mb-3"
        >
          Get the Guide
        </Link>
        <p className="text-sm text-slate-500">
          Or{" "}
          <Link href="/#download" className="text-emerald-600 hover:text-emerald-700 underline underline-offset-2">
            download the free app
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
