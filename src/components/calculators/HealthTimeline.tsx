"use client";

import { getMilestones, type SubstanceId } from "@/lib/calculator-data";
import { Check } from "lucide-react";

interface Props {
  substance: SubstanceId;
  daysSober: number;
}

export default function HealthTimeline({ substance, daysSober }: Props) {
  const milestones = getMilestones(substance);
  const nextIndex = milestones.findIndex((m) => m.days > daysSober);
  const visibleMilestones =
    nextIndex === -1 ? milestones : milestones.slice(0, nextIndex + 1);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
      <h3 className="font-semibold text-xl text-slate-800 mb-6">
        Your Health Recovery Timeline
      </h3>
      <div className="space-y-0">
        {visibleMilestones.map((milestone, i) => {
          const achieved = daysSober >= milestone.days;
          const isLast = i === visibleMilestones.length - 1;

          return (
            <div key={i} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                    achieved
                      ? "bg-emerald-100 text-emerald-600"
                      : "bg-slate-100 text-slate-400"
                  }`}
                >
                  {achieved ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  )}
                </div>
                {!isLast && (
                  <div
                    className={`w-0.5 h-full min-h-[2rem] ${
                      achieved ? "bg-emerald-200" : "bg-slate-200"
                    }`}
                  />
                )}
              </div>
              <div className={`pb-6 ${!achieved ? "opacity-50" : ""}`}>
                <p className="font-semibold text-sm text-slate-700">
                  {milestone.label}
                  {!achieved && (
                    <span className="ml-2 text-xs font-normal text-slate-400">
                      upcoming
                    </span>
                  )}
                </p>
                <p className="text-sm text-slate-500 mt-0.5">
                  {milestone.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
