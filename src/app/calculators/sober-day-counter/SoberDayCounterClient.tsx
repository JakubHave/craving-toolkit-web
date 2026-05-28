"use client";

import { useState, useEffect, useCallback } from "react";
import { Check, Copy, CalendarDays } from "lucide-react";
import {
  MILESTONES,
  getNextMilestone,
  getReachedMilestones,
  type Milestone,
} from "./constants";

const STORAGE_KEY = "ctk_sober_start";
const DAY_MS = 86_400_000;

function todayString() {
  return new Date().toISOString().split("T")[0];
}

interface Computed {
  days: number;
  weeks: number;
  months: number;
  years: number;
  elapsedH: number;
  elapsedM: number;
  elapsedS: number;
  next: Milestone | null;
  daysToNext: number;
  progressPct: number;
  reached: Milestone[];
}

function compute(startMs: number, now: number): Computed {
  const diff = now - startMs;
  // Floor of elapsed days; the day you start is Day 1, so never show 0.
  const days = Math.max(1, Math.floor(diff / DAY_MS));

  // Use the same day-counts the milestone ladder uses (30-day months, 365-day
  // years) so the breakdown never contradicts the milestone chips — e.g. at 365
  // days the "1 Year" chip and "1 year" both appear.
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  const totalSeconds = Math.floor(diff / 1000);
  const elapsedH = Math.floor(totalSeconds / 3600);
  const elapsedM = Math.floor((totalSeconds % 3600) / 60);
  const elapsedS = totalSeconds % 60;

  const next = getNextMilestone(days);
  const reached = getReachedMilestones(days);

  // Progress from the previous reached milestone toward the next one.
  const prevDays = reached.length ? reached[reached.length - 1].days : 0;
  let daysToNext = 0;
  let progressPct = 100;
  if (next) {
    daysToNext = next.days - days;
    const span = next.days - prevDays;
    progressPct = span > 0 ? Math.min(100, Math.max(0, ((days - prevDays) / span) * 100)) : 0;
  }

  return {
    days,
    weeks,
    months,
    years,
    elapsedH,
    elapsedM,
    elapsedS,
    next,
    daysToNext,
    progressPct,
    reached,
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function SoberDayCounterClient() {
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("00:00");
  const [rememberOnDevice, setRememberOnDevice] = useState(false);
  const [now, setNow] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  // Restore a previously saved date (opt-in only). Plain function so the mount
  // effect drives state through a call rather than a synchronous setState in the
  // effect body.
  function restoreFromStorage() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const saved = JSON.parse(raw) as { date?: string; time?: string };
      if (saved.date) {
        setStartDate(saved.date);
        setStartTime(saved.time || "00:00");
        setRememberOnDevice(true);
      }
    } catch {
      // ignore corrupt storage
    }
  }

  useEffect(() => {
    // Hydration-safe: state starts empty to match the server render, then we
    // pull any opt-in saved date from localStorage once on the client.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    restoreFromStorage();
  }, []);

  // Tick the live clock every second. `now` stays null until after mount so the
  // server and first client render match; we prime it on the next frame.
  useEffect(() => {
    const raf = requestAnimationFrame(() => setNow(Date.now()));
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => {
      cancelAnimationFrame(raf);
      clearInterval(id);
    };
  }, []);

  // Persist (or clear) based on the opt-in toggle.
  useEffect(() => {
    try {
      if (rememberOnDevice && startDate) {
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify({ date: startDate, time: startTime })
        );
      } else {
        localStorage.removeItem(STORAGE_KEY);
      }
    } catch {
      // storage may be unavailable (private mode); fail silently
    }
  }, [rememberOnDevice, startDate, startTime]);

  const startMs = startDate
    ? new Date(`${startDate}T${startTime || "00:00"}`).getTime()
    : NaN;

  const isValid =
    Boolean(startDate) &&
    !Number.isNaN(startMs) &&
    now !== null &&
    startMs <= now;

  const isFuture =
    Boolean(startDate) && !Number.isNaN(startMs) && now !== null && startMs > now;

  const data = isValid ? compute(startMs, now as number) : null;

  const copyResult = useCallback(async () => {
    if (!data) return;
    const noun = data.days === 1 ? "day" : "days";
    const text = `${data.days} ${noun} sober — track yours at cravingtoolkit.com`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("Copy your result:", text);
    }
  }, [data]);

  return (
    <div>
      {/* Input card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-5">
          <CalendarDays className="w-5 h-5 text-emerald-600" />
          <h2 className="text-lg font-bold text-slate-800">
            When did you start your recovery?
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="sober-start-date"
              className="block text-sm text-slate-600 mb-1.5"
            >
              Recovery start date
            </label>
            <input
              id="sober-start-date"
              type="date"
              value={startDate}
              max={todayString()}
              onClick={(e) => (e.target as HTMLInputElement).showPicker?.()}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-400 transition cursor-pointer"
            />
          </div>
          <div>
            <label
              htmlFor="sober-start-time"
              className="block text-sm text-slate-600 mb-1.5"
            >
              Time of day{" "}
              <span className="text-slate-400">(optional)</span>
            </label>
            <input
              id="sober-start-time"
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value || "00:00")}
              className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-400 transition cursor-pointer"
            />
          </div>
        </div>

        <label className="flex items-center gap-3 cursor-pointer mt-5">
          <input
            type="checkbox"
            checked={rememberOnDevice}
            onChange={(e) => setRememberOnDevice(e.target.checked)}
            className="w-4 h-4 rounded accent-emerald-600"
          />
          <span className="text-sm text-slate-600">
            Remember this date on my device
          </span>
        </label>
      </div>

      {/* Future-date message */}
      {isFuture && (
        <div className="mt-6 bg-amber-50 border border-amber-200 rounded-2xl p-6 text-center">
          <p className="text-amber-800 font-medium">
            That date is in the future. Set your recovery start date to see your
            count.
          </p>
        </div>
      )}

      {/* Empty state */}
      {!startDate && (
        <div className="mt-6 bg-white border border-dashed border-slate-200 rounded-2xl p-6 text-center">
          <p className="text-slate-500">
            Pick your recovery start date above and your sober day count appears
            here instantly.
          </p>
        </div>
      )}

      {/* Result card */}
      {data && (
        <div className="mt-6 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          {/* Hero number */}
          <div className="text-center">
            <p
              className="font-serif font-bold text-emerald-600 leading-none text-6xl sm:text-7xl md:text-8xl"
              aria-label={`${data.days} ${data.days === 1 ? "day" : "days"} sober`}
            >
              {data.days.toLocaleString()}
            </p>
            <p className="mt-3 text-xl font-semibold text-slate-700">
              {data.days === 1 ? "day" : "days"} sober
            </p>
            <p className="mt-2 text-slate-500">
              {data.weeks.toLocaleString()}{" "}
              {data.weeks === 1 ? "week" : "weeks"} ·{" "}
              {data.months.toLocaleString()}{" "}
              {data.months === 1 ? "month" : "months"} ·{" "}
              {data.years.toLocaleString()}{" "}
              {data.years === 1 ? "year" : "years"}
            </p>
          </div>

          {/* Live ticking clock */}
          <div className="mt-6 text-center">
            <p
              className="font-mono text-2xl sm:text-3xl text-slate-800 tabular-nums"
              aria-live="polite"
            >
              {pad(data.elapsedH)}:{pad(data.elapsedM)}:{pad(data.elapsedS)}
            </p>
            <p className="text-xs text-slate-400 uppercase tracking-wider mt-1">
              hours · minutes · seconds since you started
            </p>
          </div>

          {/* Next milestone */}
          {data.next && (
            <div className="mt-8">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="font-medium text-slate-700">
                  {data.next.emoji} Next: {data.next.label}
                </span>
                <span className="text-slate-500">
                  {data.daysToNext.toLocaleString()}{" "}
                  {data.daysToNext === 1 ? "day" : "days"} to go
                </span>
              </div>
              <div
                className="h-3 rounded-full bg-slate-100 overflow-hidden"
                role="progressbar"
                aria-valuenow={Math.round(data.progressPct)}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`Progress toward ${data.next.label} milestone`}
              >
                <div
                  className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                  style={{ width: `${data.progressPct}%` }}
                />
              </div>
            </div>
          )}

          {/* Reached milestones */}
          {data.reached.length > 0 && (
            <div className="mt-8">
              <h3 className="text-sm font-semibold text-slate-700 mb-3">
                Milestones reached
              </h3>
              <div className="flex flex-wrap gap-2">
                {data.reached.map((m) => (
                  <span
                    key={m.days}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-sm font-medium text-emerald-800"
                  >
                    <span aria-hidden="true">{m.emoji}</span>
                    {m.label}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Celebrate when every milestone is reached */}
          {!data.next && (
            <p className="mt-6 text-center text-emerald-700 font-medium">
              You&rsquo;ve passed every milestone on the ladder. Incredible.
            </p>
          )}

          {/* Copy */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={copyResult}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-100 text-slate-700 text-sm font-medium rounded-lg hover:bg-slate-200 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" /> Copied!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" /> Copy result
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {/* Privacy note */}
      <p className="mt-6 text-center text-sm text-slate-400">
        All data stays in your browser. Nothing is sent to a server.
      </p>

      {/* Static milestone ladder — server-rendered fallback so the full list is
          always in the HTML, even before any date is entered. */}
      <noscript>
        <p className="mt-4 text-sm text-slate-500">
          Milestones tracked:{" "}
          {MILESTONES.map((m) => `${m.label}`).join(", ")}.
        </p>
      </noscript>
    </div>
  );
}
