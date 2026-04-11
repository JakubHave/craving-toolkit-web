"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronDown, Calculator } from "lucide-react";
import {
  SUBSTANCE_DEFAULTS,
  type SubstanceId,
} from "@/lib/calculator-data";
import { calculateSavings, type CalculatorResult } from "@/lib/calculator-logic";
import ResultsCard from "./ResultsCard";

const SUBSTANCE_IDS = Object.keys(SUBSTANCE_DEFAULTS) as SubstanceId[];

function todayString() {
  return new Date().toISOString().split("T")[0];
}

function daysBetween(dateStr: string): number {
  const diff = Date.now() - new Date(dateStr).getTime();
  return Math.max(1, Math.floor(diff / 86400000) + 1);
}

function dateFromDays(days: number): string {
  const d = new Date(Date.now() - (days - 1) * 86400000);
  return d.toISOString().split("T")[0];
}

export default function MoneyCalculator() {
  const [substance, setSubstance] = useState<SubstanceId | null>(null);
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [unitsPerPurchase, setUnitsPerPurchase] = useState(1);
  const [frequencyUnit, setFrequencyUnit] = useState<"day" | "week">("week");

  // Alcohol rideshare
  const [rideshareEnabled, setRideshareEnabled] = useState(false);
  const [ridesPerWeek, setRidesPerWeek] = useState(2);
  const [costPerRide, setCostPerRide] = useState(15);

  // Gambling
  const [lossPercentage, setLossPercentage] = useState(40);

  // Sobriety
  const [soberDate, setSoberDate] = useState(todayString());
  const [daysSober, setDaysSober] = useState(1);
  const [dateSource, setDateSource] = useState<"date" | "days">("date");

  // Advanced
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [annualEscalation, setAnnualEscalation] = useState(5);
  const [investmentReturn, setInvestmentReturn] = useState(7);
  const [includeHiddenCosts, setIncludeHiddenCosts] = useState(false);
  const [monthlyHealthCosts, setMonthlyHealthCosts] = useState(0);
  const [monthlyProductivityLoss, setMonthlyProductivityLoss] = useState(0);

  const [result, setResult] = useState<CalculatorResult | null>(null);

  // Sync date <-> days
  useEffect(() => {
    if (dateSource === "date") {
      setDaysSober(daysBetween(soberDate));
    }
  }, [soberDate, dateSource]);

  // Select substance -> populate defaults
  function selectSubstance(id: SubstanceId) {
    const d = SUBSTANCE_DEFAULTS[id];
    setSubstance(id);
    setQuantity(d.defaultQuantity);
    setPrice(d.defaultPrice);
    setUnitsPerPurchase(d.unitsPerPurchase);
    setFrequencyUnit(d.frequencyUnit);
    if (d.extras?.rideshare) {
      setRideshareEnabled(d.extras.rideshare.enabled);
      setRidesPerWeek(d.extras.rideshare.ridesPerWeek);
      setCostPerRide(d.extras.rideshare.costPerRide);
    } else {
      setRideshareEnabled(false);
    }
    if (d.lossPercentage !== undefined) {
      setLossPercentage(d.lossPercentage);
    }
    setResult(null);
  }

  // Update URL params with current state
  const updateUrlParams = useCallback(() => {
    if (!substance) return;
    const params = new URLSearchParams();
    params.set("s", substance);
    params.set("q", String(quantity));
    params.set("p", String(price));
    params.set("d", String(daysSober));
    window.history.replaceState(null, "", `?${params.toString()}`);
  }, [substance, quantity, price, daysSober]);

  // Load from URL on mount and auto-calculate
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const s = params.get("s");
    if (s && s in SUBSTANCE_DEFAULTS) {
      const defaults = SUBSTANCE_DEFAULTS[s as SubstanceId];
      selectSubstance(s as SubstanceId);

      const parsedQ = params.get("q");
      const parsedP = params.get("p");
      const parsedD = params.get("d");

      const q = parsedQ && !isNaN(Number(parsedQ)) ? Math.max(0, Number(parsedQ)) : defaults.defaultQuantity;
      const p = parsedP && !isNaN(Number(parsedP)) ? Math.max(0, Number(parsedP)) : defaults.defaultPrice;
      const d = parsedD && !isNaN(Number(parsedD)) ? Math.max(1, Math.floor(Number(parsedD))) : 1;

      setQuantity(q);
      setPrice(p);
      setDaysSober(d);
      setSoberDate(dateFromDays(d));
      setDateSource("days");

      // Calculate immediately with parsed values
      setResult(
        calculateSavings({
          substance: s,
          quantity: q,
          price: p,
          unitsPerPurchase: defaults.unitsPerPurchase,
          frequencyUnit: defaults.frequencyUnit,
          daysSober: d,
          lossPercentage: defaults.lossPercentage ?? 40,
          annualEscalation,
          investmentReturn,
          rideshareEnabled: false,
          ridesPerWeek: 0,
          costPerRide: 0,
          monthlyHealthCosts: 0,
          monthlyProductivityLoss: 0,
          includeHiddenCosts: false,
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleCalculate() {
    if (!substance) return;
    const r = calculateSavings({
      substance,
      quantity,
      price,
      unitsPerPurchase,
      frequencyUnit,
      daysSober,
      lossPercentage,
      annualEscalation,
      investmentReturn,
      rideshareEnabled,
      ridesPerWeek,
      costPerRide,
      monthlyHealthCosts,
      monthlyProductivityLoss,
      includeHiddenCosts,
    });
    setResult(r);
    updateUrlParams();
    setTimeout(() => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      document.getElementById("calculator-results")?.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start",
      });
    }, 100);
  }

  const defaults = substance ? SUBSTANCE_DEFAULTS[substance] : null;

  return (
    <div>
      {/* Step 1: Substance selection */}
      <div className="mb-8">
        <label className="block text-sm font-semibold text-slate-700 mb-3">
          Step 1: What&rsquo;s your substance?
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {SUBSTANCE_IDS.map((id) => {
            const d = SUBSTANCE_DEFAULTS[id];
            const selected = substance === id;
            return (
              <button
                key={id}
                onClick={() => selectSubstance(id)}
                aria-pressed={selected}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl border text-sm font-medium transition-all ${
                  selected
                    ? "border-emerald-500 bg-emerald-50 text-emerald-800 shadow-sm"
                    : "border-slate-200 bg-white text-slate-600 hover:border-emerald-300 hover:bg-emerald-50/50"
                }`}
              >
                <span className="text-lg" aria-hidden="true">{d.icon}</span>
                <span>{d.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {substance && defaults && (
        <>
          {/* Step 2: Usage details */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-slate-700 mb-3">
              Step 2: Your usage details
            </label>
            <div className="bg-white rounded-xl border border-slate-200 p-5 space-y-4">
              {substance === "gambling" ? (
                <>
                  <InputField
                    label={defaults.priceLabel}
                    value={price}
                    onChange={setPrice}
                    prefix="$"
                    type="number"
                    min={0}
                    step={10}
                  />
                  <div>
                    <label htmlFor="loss-percentage" className="block text-sm text-slate-600 mb-1.5">
                      What percentage do you typically lose? ({lossPercentage}%)
                    </label>
                    <input
                      id="loss-percentage"
                      type="range"
                      min={5}
                      max={100}
                      value={lossPercentage}
                      onChange={(e) => setLossPercentage(Number(e.target.value))}
                      className="w-full accent-emerald-600"
                      aria-valuenow={lossPercentage}
                      aria-valuemin={5}
                      aria-valuemax={100}
                    />
                    <div className="flex justify-between text-xs text-slate-400 mt-1">
                      <span>5%</span>
                      <span>100%</span>
                    </div>
                  </div>
                </>
              ) : substance === "other" ? (
                <InputField
                  label={defaults.priceLabel}
                  value={price}
                  onChange={setPrice}
                  prefix="$"
                  type="number"
                  min={0}
                  step={5}
                />
              ) : (
                <>
                  <InputField
                    label={`How many ${defaults.unitLabel}?`}
                    value={quantity}
                    onChange={setQuantity}
                    type="number"
                    min={0}
                    step={substance === "cannabis" ? 0.5 : 1}
                  />
                  <InputField
                    label={defaults.priceLabel}
                    value={price}
                    onChange={setPrice}
                    prefix="$"
                    type="number"
                    min={0}
                    step={0.5}
                  />
                </>
              )}

              {/* Alcohol rideshare toggle */}
              {substance === "alcohol" && (
                <div className="pt-2 border-t border-slate-100">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={rideshareEnabled}
                      onChange={(e) => setRideshareEnabled(e.target.checked)}
                      className="w-4 h-4 rounded accent-emerald-600"
                    />
                    <span className="text-sm text-slate-600">
                      Include Uber/rideshare costs?
                    </span>
                  </label>
                  {rideshareEnabled && (
                    <div className="mt-3 ml-7 space-y-3">
                      <InputField
                        label="Rides per week"
                        value={ridesPerWeek}
                        onChange={setRidesPerWeek}
                        type="number"
                        min={0}
                      />
                      <InputField
                        label="Average ride cost"
                        value={costPerRide}
                        onChange={setCostPerRide}
                        prefix="$"
                        type="number"
                        min={0}
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Step 3: Recovery timeline */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-slate-700 mb-3">
              Step 3: Your recovery timeline
            </label>
            <div className="bg-white rounded-xl border border-slate-200 p-5 space-y-4">
              <div>
                <label className="block text-sm text-slate-600 mb-1.5">
                  Sober / quit date
                </label>
                <input
                  type="date"
                  value={soberDate}
                  max={todayString()}
                  onChange={(e) => {
                    setSoberDate(e.target.value);
                    setDateSource("date");
                  }}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-400 transition"
                />
              </div>
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-slate-200" />
                <span className="text-xs text-slate-400 uppercase tracking-wider">or</span>
                <div className="h-px flex-1 bg-slate-200" />
              </div>
              <InputField
                label="Days sober"
                value={daysSober}
                onChange={(v) => {
                  setDaysSober(v);
                  setSoberDate(dateFromDays(v));
                  setDateSource("days");
                }}
                type="number"
                min={0}
              />
            </div>
          </div>

          {/* Step 4: Advanced options */}
          <div className="mb-8">
            <button
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-emerald-700 transition-colors"
            >
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  showAdvanced ? "rotate-180" : ""
                }`}
              />
              Advanced Options
            </button>
            {showAdvanced && (
              <div className="mt-3 bg-white rounded-xl border border-slate-200 p-5 space-y-4">
                <InputField
                  label="Annual price increase (%)"
                  value={annualEscalation}
                  onChange={setAnnualEscalation}
                  type="number"
                  min={0}
                  max={50}
                  suffix="%"
                />
                <InputField
                  label="Investment return rate (% per year)"
                  value={investmentReturn}
                  onChange={setInvestmentReturn}
                  type="number"
                  min={0}
                  max={30}
                  suffix="%"
                />
                <div className="pt-2 border-t border-slate-100">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={includeHiddenCosts}
                      onChange={(e) => setIncludeHiddenCosts(e.target.checked)}
                      className="w-4 h-4 rounded accent-emerald-600"
                    />
                    <span className="text-sm text-slate-600">
                      Include hidden costs?
                    </span>
                  </label>
                  {includeHiddenCosts && (
                    <div className="mt-3 ml-7 space-y-3">
                      <InputField
                        label="Monthly health-related costs (meds, doctor visits)"
                        value={monthlyHealthCosts}
                        onChange={setMonthlyHealthCosts}
                        prefix="$"
                        type="number"
                        min={0}
                      />
                      <InputField
                        label="Monthly productivity/income loss estimate"
                        value={monthlyProductivityLoss}
                        onChange={setMonthlyProductivityLoss}
                        prefix="$"
                        type="number"
                        min={0}
                      />
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Calculate button */}
          <button
            onClick={handleCalculate}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3.5 rounded-full shadow-lg shadow-emerald-600/25 transition-colors text-lg"
          >
            <Calculator className="w-5 h-5" />
            Calculate My Savings
          </button>
        </>
      )}

      {/* Results */}
      {result && substance && (
        <div id="calculator-results" className="mt-10 scroll-mt-6">
          <ResultsCard result={result} substance={substance} daysSober={daysSober} investmentReturn={investmentReturn} />
        </div>
      )}
    </div>
  );
}

// Reusable input field
function InputField({
  label,
  value,
  onChange,
  prefix,
  suffix,
  type = "number",
  min,
  max,
  step,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  prefix?: string;
  suffix?: string;
  type?: string;
  min?: number;
  max?: number;
  step?: number;
}) {
  return (
    <div>
      <label className="block text-sm text-slate-600 mb-1.5">{label}</label>
      <div className="relative">
        {prefix && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm pointer-events-none">
            {prefix}
          </span>
        )}
        <input
          type={type}
          value={value}
          onChange={(e) => {
            const v = Number(e.target.value);
            if (!isNaN(v)) onChange(v);
          }}
          min={min}
          max={max}
          step={step}
          className={`w-full py-2.5 rounded-lg border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-400 transition ${
            prefix ? "pl-8 pr-4" : suffix ? "pl-4 pr-8" : "px-4"
          }`}
        />
        {suffix && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm pointer-events-none">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}
