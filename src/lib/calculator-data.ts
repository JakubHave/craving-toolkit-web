export type SubstanceId =
  | "cigarettes"
  | "vaping"
  | "alcohol"
  | "cannabis"
  | "cocaine"
  | "opioids"
  | "gambling"
  | "other";

export interface SubstanceDefaults {
  label: string;
  icon: string;
  unitLabel: string;
  defaultQuantity: number;
  priceLabel: string;
  defaultPrice: number;
  unitsPerPurchase: number;
  frequencyUnit: "day" | "week";
  extras?: {
    rideshare: { enabled: boolean; ridesPerWeek: number; costPerRide: number };
  };
  lossPercentage?: number;
}

export const SUBSTANCE_DEFAULTS: Record<SubstanceId, SubstanceDefaults> = {
  cigarettes: {
    label: "Cigarettes",
    icon: "🚬",
    unitLabel: "cigarettes per day",
    defaultQuantity: 15,
    priceLabel: "Price per pack (20 cigarettes)",
    defaultPrice: 9.6,
    unitsPerPurchase: 20,
    frequencyUnit: "day",
  },
  vaping: {
    label: "Vaping / E-cigarettes",
    icon: "💨",
    unitLabel: "pods per week",
    defaultQuantity: 2,
    priceLabel: "Price per pod/cartridge",
    defaultPrice: 15.0,
    unitsPerPurchase: 1,
    frequencyUnit: "week",
  },
  alcohol: {
    label: "Alcohol",
    icon: "🍺",
    unitLabel: "drinks per week",
    defaultQuantity: 14,
    priceLabel: "Average price per drink",
    defaultPrice: 8.0,
    unitsPerPurchase: 1,
    frequencyUnit: "week",
    extras: {
      rideshare: { enabled: false, ridesPerWeek: 2, costPerRide: 15.0 },
    },
  },
  cannabis: {
    label: "Cannabis",
    icon: "🌿",
    unitLabel: "grams per week",
    defaultQuantity: 3.5,
    priceLabel: "Price per gram",
    defaultPrice: 12.0,
    unitsPerPurchase: 1,
    frequencyUnit: "week",
  },
  cocaine: {
    label: "Cocaine",
    icon: "❄️",
    unitLabel: "grams per week",
    defaultQuantity: 1,
    priceLabel: "Price per gram",
    defaultPrice: 100.0,
    unitsPerPurchase: 1,
    frequencyUnit: "week",
  },
  opioids: {
    label: "Opioids",
    icon: "💊",
    unitLabel: "pills/doses per day",
    defaultQuantity: 3,
    priceLabel: "Price per pill/dose",
    defaultPrice: 10.0,
    unitsPerPurchase: 1,
    frequencyUnit: "day",
  },
  gambling: {
    label: "Gambling",
    icon: "🎰",
    unitLabel: "amount bet per week",
    defaultQuantity: 1,
    priceLabel: "Weekly betting amount",
    defaultPrice: 100.0,
    lossPercentage: 40,
    unitsPerPurchase: 1,
    frequencyUnit: "week",
  },
  other: {
    label: "Other",
    icon: "➕",
    unitLabel: "per week",
    defaultQuantity: 1,
    priceLabel: "Weekly spending on this habit",
    defaultPrice: 50.0,
    unitsPerPurchase: 1,
    frequencyUnit: "week",
  },
};

export interface Milestone {
  days: number;
  label: string;
  description: string;
}

export const HEALTH_MILESTONES: Record<string, Milestone[]> = {
  cigarettes: [
    { days: 1, label: "24 hours", description: "Blood pressure and heart rate normalize" },
    { days: 14, label: "2 weeks", description: "Circulation and lung function improve" },
    { days: 30, label: "1 month", description: "Coughing and shortness of breath decrease" },
    { days: 365, label: "1 year", description: "Heart disease risk drops by 50%" },
    { days: 1825, label: "5 years", description: "Stroke risk equals a non-smoker's" },
    { days: 3650, label: "10 years", description: "Lung cancer risk drops by 50%" },
  ],
  alcohol: [
    { days: 1, label: "24 hours", description: "Blood sugar stabilizes" },
    { days: 7, label: "1 week", description: "Sleep quality begins improving" },
    { days: 30, label: "1 month", description: "Liver fat reduces by up to 20%" },
    { days: 90, label: "3 months", description: "Blood pressure and cholesterol improve" },
    { days: 365, label: "1 year", description: "Liver function significantly recovered" },
    { days: 1825, label: "5 years", description: "Risk of liver disease, stroke, and certain cancers decreases substantially" },
  ],
  vaping: [
    { days: 1, label: "24 hours", description: "Nicotine levels drop, heart rate begins to normalize" },
    { days: 7, label: "1 week", description: "Sense of taste and smell start returning" },
    { days: 14, label: "2 weeks", description: "Circulation improves, breathing feels easier" },
    { days: 30, label: "1 month", description: "Lung irritation decreases, coughing subsides" },
    { days: 90, label: "3 months", description: "Lung capacity and immune function measurably improve" },
    { days: 365, label: "1 year", description: "Risk of respiratory infections significantly reduced" },
    { days: 1825, label: "5 years", description: "Cardiovascular risk approaches that of a non-user" },
  ],
  cannabis: [
    { days: 7, label: "1 week", description: "Sleep normalizes, appetite stabilizes" },
    { days: 14, label: "2 weeks", description: "Brain fog starts lifting" },
    { days: 30, label: "1 month", description: "Memory and concentration measurably improve" },
    { days: 90, label: "3 months", description: "Lung function improves (if smoked)" },
    { days: 180, label: "6 months", description: "Motivation and emotional regulation stabilize" },
    { days: 365, label: "1 year", description: "Cognitive function fully restored, anxiety levels normalized" },
  ],
  cocaine: [
    { days: 3, label: "3 days", description: "Acute crash subsides, sleep begins to return" },
    { days: 7, label: "1 week", description: "Physical withdrawal symptoms ease, appetite returns" },
    { days: 30, label: "1 month", description: "Dopamine receptors begin healing, mood swings lessen" },
    { days: 90, label: "3 months", description: "Energy levels stabilize, concentration improves" },
    { days: 180, label: "6 months", description: "Brain reward system significantly rebalanced" },
    { days: 365, label: "1 year", description: "Cardiovascular risk reduced, nasal tissue healed (if snorted)" },
    { days: 1825, label: "5 years", description: "Heart disease and stroke risk approach non-user levels" },
  ],
  opioids: [
    { days: 3, label: "3 days", description: "Acute withdrawal symptoms peak and begin to subside" },
    { days: 7, label: "1 week", description: "Physical symptoms ease, sleep and appetite slowly return" },
    { days: 14, label: "2 weeks", description: "Energy returns, body aches and chills resolve" },
    { days: 30, label: "1 month", description: "Mood stabilizes, natural endorphin production restarts" },
    { days: 90, label: "3 months", description: "Brain chemistry rebalancing well underway, cravings lessen" },
    { days: 180, label: "6 months", description: "Hormonal function and immune system recovering" },
    { days: 365, label: "1 year", description: "Cognitive function restored, relapse risk significantly lower" },
  ],
  gambling: [
    { days: 7, label: "1 week", description: "Stress and anxiety from active gambling begin to ease" },
    { days: 30, label: "1 month", description: "Sleep quality improves, financial stress starts decreasing" },
    { days: 90, label: "3 months", description: "Decision-making and impulse control measurably improve" },
    { days: 180, label: "6 months", description: "Relationships and trust begin rebuilding" },
    { days: 365, label: "1 year", description: "Financial stability returning, mental health significantly improved" },
    { days: 1825, label: "5 years", description: "Relapse risk greatly reduced, long-term emotional resilience established" },
  ],
  other: [
    { days: 7, label: "1 week", description: "Acute withdrawal typically subsides" },
    { days: 30, label: "1 month", description: "Sleep, appetite, and mood begin stabilizing" },
    { days: 90, label: "3 months", description: "Brain chemistry rebalancing underway" },
    { days: 180, label: "6 months", description: "Cognitive function noticeably improved" },
    { days: 365, label: "1 year", description: "Relapse risk significantly reduced" },
  ],
  default: [
    { days: 7, label: "1 week", description: "Acute withdrawal typically subsides" },
    { days: 30, label: "1 month", description: "Sleep, appetite, and mood begin stabilizing" },
    { days: 90, label: "3 months", description: "Brain chemistry rebalancing underway" },
    { days: 180, label: "6 months", description: "Cognitive function noticeably improved" },
    { days: 365, label: "1 year", description: "Relapse risk significantly reduced" },
  ],
};

export function getMilestones(substance: SubstanceId): Milestone[] {
  return HEALTH_MILESTONES[substance] || HEALTH_MILESTONES.default;
}

interface EquivalentItem {
  emoji: string;
  label: string;
  cost: number;
}

const EQUIVALENTS: EquivalentItem[] = [
  { emoji: "🎬", label: "months of Netflix", cost: 15.49 },
  { emoji: "🍽️", label: "nice dinners out", cost: 75 },
  { emoji: "📚", label: "books", cost: 20 },
  { emoji: "✈️", label: "weekend trips", cost: 400 },
  { emoji: "📱", label: "new phones", cost: 800 },
  { emoji: "💪", label: "months of gym membership", cost: 50 },
  { emoji: "🏖️", label: "vacations", cost: 2000 },
  { emoji: "🚗", label: "monthly car payments", cost: 500 },
  { emoji: "💻", label: "new laptops", cost: 1200 },
  { emoji: "🏠", label: "months of rent", cost: 1500 },
];

export function getEquivalents(annualSavings: number): { emoji: string; text: string }[] {
  const results: { emoji: string; text: string }[] = [];

  for (const item of EQUIVALENTS) {
    const count = Math.floor(annualSavings / item.cost);
    if (count >= 1 && count <= 500) {
      results.push({ emoji: item.emoji, text: `${count} ${item.label}` });
    }
    if (results.length >= 3) break;
  }

  if (results.length < 3) {
    if (annualSavings >= 15000) {
      results.push({ emoji: "🏡", text: "a down payment on a house" });
    } else if (annualSavings >= 5000) {
      results.push({ emoji: "🎓", text: "a semester of community college" });
    }
  }

  return results.slice(0, 3);
}

export const FAQ_ITEMS = [
  {
    question: "How much does the average smoker spend per year?",
    answer: "At the national average of $9.60/pack and 15 cigarettes/day, a typical smoker spends about $2,628/year. A pack-a-day smoker spends $3,504. In expensive states like New York, that climbs above $5,300.",
  },
  {
    question: "How much does the average drinker spend per year?",
    answer: "A moderate social drinker (8 drinks/week at $8/drink) spends roughly $3,328/year. Heavy drinkers can spend $9,000\u2013$15,000+ when including bar tabs, rideshares, and late-night food.",
  },
  {
    question: "How much does vaping cost per year?",
    answer: "The average vaper spends $900\u2013$1,300/year on pods or e-liquid. Heavy vapers using disposables can spend $2,000+.",
  },
  {
    question: "Is this calculator really private?",
    answer: "Yes. Everything runs in your browser. No data is sent to any server, no cookies are set, and no account is needed. We never see your inputs or results.",
  },
  {
    question: "How accurate is the investment projection?",
    answer: "We use a 7% annual return, which matches the historical average of the S&P 500 after inflation. Actual returns vary. The projection illustrates the opportunity cost of spending on a habit vs. saving.",
  },
  {
    question: "What are the hidden costs of addiction?",
    answer: "Beyond the direct substance cost, addiction carries hidden costs including increased healthcare expenses, reduced earning potential, legal fees (DUI, possession charges), relationship costs, and lost productivity. For smoking alone, research estimates $8,500/year in extra medical costs.",
  },
  {
    question: "Can I use this calculator for behavioral addictions?",
    answer: 'Yes. Select "Other" and enter your estimated weekly spending on any behavior \u2014 shopping, gaming, social media purchases, or anything else.',
  },
  {
    question: "How long does it take to see real financial benefits from quitting?",
    answer: "Immediately. The money you don't spend today is money saved today. Most people notice the impact within the first month. At 90 days, the cumulative savings become motivating in their own right.",
  },
];
