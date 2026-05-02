"use client";

import { useEffect, useReducer } from "react";

interface Props {
  perSecond: number;
  totalSaved: number;
}

export default function LiveTicker({ perSecond, totalSaved }: Props) {
  const [secondsSinceMount, tick] = useReducer((s: number) => s + 1, 0);

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  const current = totalSaved + secondsSinceMount * perSecond;

  return (
    <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 text-center">
      <p className="text-sm text-emerald-700 mb-1">
        Right now, you&rsquo;re saving{" "}
        <span className="font-semibold">${perSecond.toFixed(5)}</span> every
        second.
      </p>
      <p className="text-2xl sm:text-3xl font-bold text-emerald-700 tabular-nums">
        ${current.toFixed(5)}
      </p>
      <p className="text-xs text-emerald-600/70 mt-1">Live savings counter</p>
    </div>
  );
}
