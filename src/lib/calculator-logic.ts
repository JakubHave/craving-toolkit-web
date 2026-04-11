export interface CalculatorInput {
  substance: string;
  quantity: number;
  price: number;
  unitsPerPurchase: number;
  frequencyUnit: "day" | "week";
  daysSober: number;
  lossPercentage?: number;
  annualEscalation: number;
  investmentReturn: number;
  rideshareEnabled?: boolean;
  ridesPerWeek?: number;
  costPerRide?: number;
  monthlyHealthCosts: number;
  monthlyProductivityLoss: number;
  includeHiddenCosts: boolean;
}

export interface Projection {
  saved: number;
  invested: number;
}

export interface CalculatorResult {
  dailyCost: number;
  weeklyCost: number;
  monthlyCost: number;
  annualCost: number;
  totalSaved: number;
  perSecond: number;
  projections: Record<number, Projection>;
}

export function calculateSavings(input: CalculatorInput): CalculatorResult {
  // Clamp negative inputs
  const quantity = Math.max(0, input.quantity);
  const price = Math.max(0, input.price);
  const daysSober = Math.max(0, input.daysSober);
  let weeklyCost: number;

  if (input.substance === "cigarettes") {
    const packsPerDay = quantity / (input.unitsPerPurchase || 20);
    const dailyCost = packsPerDay * price;
    weeklyCost = dailyCost * 7;
  } else if (input.substance === "gambling") {
    weeklyCost = price * ((input.lossPercentage ?? 40) / 100);
  } else if (input.frequencyUnit === "day") {
    weeklyCost = quantity * price * 7;
  } else {
    weeklyCost = quantity * price;
  }

  if (input.rideshareEnabled) {
    weeklyCost += (input.ridesPerWeek ?? 0) * (input.costPerRide ?? 0);
  }

  if (input.includeHiddenCosts) {
    weeklyCost += (input.monthlyHealthCosts + input.monthlyProductivityLoss) / 4.33;
  }

  const dailyCost = weeklyCost / 7;
  const monthlyCost = weeklyCost * 4.33;
  const annualCost = weeklyCost * 52;

  const totalSaved = dailyCost * daysSober;

  const escalation = input.annualEscalation / 100;
  const investmentReturn = input.investmentReturn / 100;

  const projections: Record<number, Projection> = {};
  let cumulativeSavings = 0;
  let cumulativeInvested = 0;

  for (let year = 1; year <= 10; year++) {
    const yearCost = annualCost * Math.pow(1 + escalation, year - 1);
    cumulativeSavings += yearCost;
    cumulativeInvested = (cumulativeInvested + yearCost) * (1 + investmentReturn);
    projections[year] = {
      saved: cumulativeSavings,
      invested: cumulativeInvested,
    };
  }

  const perSecond = dailyCost / 86400;

  return {
    dailyCost,
    weeklyCost,
    monthlyCost,
    annualCost,
    totalSaved,
    perSecond,
    projections,
  };
}
