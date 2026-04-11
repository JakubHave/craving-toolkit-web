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
  title: string;
  description: string;
}

export interface SubstanceMilestones {
  milestones: Milestone[];
  disclaimer?: string;
}

export const HEALTH_MILESTONES: Record<string, SubstanceMilestones> = {
  cigarettes: {
    milestones: [
      { days: 0, title: "Heart rate begins to drop", description: "Within 20 minutes of your last cigarette, your heart rate and blood pressure start returning to normal." },
      { days: 1, title: "Carbon monoxide clears your blood", description: "Blood carbon monoxide levels return to normal, allowing your blood to carry oxygen properly again. Nicotine drops to zero." },
      { days: 14, title: "Circulation and lung function improve", description: "Blood flow improves and your lungs begin working more efficiently. Walking and physical activity start getting easier. This improvement continues for several months." },
      { days: 30, title: "Coughing and shortness of breath decrease", description: "Cilia in your lungs start regrowing, improving their ability to clear mucus and reduce infection risk. Coughing continues to decrease over the next several months." },
      { days: 365, title: "Excess heart disease risk cut in half", description: "The additional risk of coronary heart disease caused by smoking is now half what it was when you smoked. Your heart is measurably healthier." },
      { days: 1825, title: "Stroke risk dropping toward non-smoker levels", description: "Your risk of stroke has decreased significantly and continues to fall. Within 5 to 15 years, it returns to that of someone who never smoked." },
      { days: 3650, title: "Lung cancer death risk cut in half", description: "Your risk of dying from lung cancer is now about half that of a continuing smoker. Risk of mouth, throat, esophagus, bladder, and pancreatic cancers has also decreased." },
      { days: 5475, title: "Heart disease risk equals a non-smoker", description: "Your risk of coronary heart disease is now the same as someone who never smoked. Your body has completed its cardiovascular recovery." },
    ],
  },
  vaping: {
    disclaimer: "Research on quitting e-cigarettes is still emerging. These milestones are based on nicotine science and early studies \u2014 not yet validated by long-term data.",
    milestones: [
      { days: 0, title: "Heart rate begins to normalize", description: "Within minutes of your last vape, your heart rate starts dropping as nicotine\u2019s acute cardiovascular effects wear off." },
      { days: 3, title: "Nicotine leaves your system", description: "Nicotine and its metabolites are cleared from your body. Taste and smell may start sharpening as nerve endings begin recovering." },
      { days: 14, title: "Circulation improves, breathing feels easier", description: "Blood vessel function begins recovering from the effects of nicotine and aerosol chemicals. Physical activity may feel noticeably easier." },
      { days: 30, title: "Lung irritation begins decreasing", description: "Airway inflammation starts to subside. Coughing and throat irritation gradually lessen, though full improvement may take several more months." },
      { days: 90, title: "Lung and immune function improving", description: "Respiratory defense mechanisms are recovering. You may notice fewer coughs, less chest tightness, and better endurance during exercise." },
      { days: 365, title: "Respiratory health substantially improved", description: "Your lungs have had time for significant healing. Susceptibility to respiratory infections has likely decreased, though long-term outcome data is still limited." },
    ],
  },
  alcohol: {
    disclaimer: "If you drink heavily or daily, stopping suddenly can be medically dangerous. Alcohol withdrawal can cause seizures and other life-threatening complications. Please consult a doctor before quitting.",
    milestones: [
      { days: 3, title: "Acute withdrawal risk window passes", description: "For heavy drinkers, the most dangerous withdrawal period (risk of seizures, delirium tremens) typically peaks at 48\u201372 hours. Medical supervision is critical during this window." },
      { days: 7, title: "Body begins stabilizing", description: "Blood sugar regulation improves. Hydration levels normalize. Sleep may still be disrupted \u2014 insomnia is common in early sobriety and can take weeks or months to resolve." },
      { days: 14, title: "Blood pressure starts dropping", description: "Studies show systolic blood pressure can drop significantly within the first 2\u20134 weeks of abstinence. Cancer-related growth factors also begin declining." },
      { days: 30, title: "Liver fat begins reducing", description: "Liver fat can decrease by 15\u201340% within the first month. Liver enzymes start normalizing. Many people report clearer skin, better focus, and more stable energy." },
      { days: 90, title: "Blood pressure and cholesterol improved", description: "Cardiovascular markers show sustained improvement. Cholesterol levels shift in a healthier direction. The liver continues healing if damage was not advanced." },
      { days: 180, title: "Brain volume begins recovering", description: "Neuroimaging studies show measurable increases in brain gray matter volume. Cognitive function, memory, and emotional regulation continue improving." },
      { days: 365, title: "Liver function significantly recovered", description: "Fatty liver disease can fully resolve. Mild-to-moderate fibrosis shows meaningful improvement. Note: advanced cirrhosis (severe scarring) is not fully reversible, though function improves and further damage stops." },
      { days: 1825, title: "Liver and stroke risk decreasing", description: "Risk of liver disease and stroke has decreased substantially. Some cancer risks (oral, esophageal) begin declining, though full cancer risk reduction takes 10\u201320+ years of abstinence." },
    ],
  },
  cannabis: {
    milestones: [
      { days: 3, title: "Withdrawal symptoms peak", description: "Irritability, anxiety, insomnia, decreased appetite, and cravings typically peak around days 2\u20136. This is the hardest stretch \u2014 it does pass." },
      { days: 7, title: "Physical withdrawal begins easing", description: "Appetite starts returning. Irritability and mood swings begin to lessen, though sleep disturbances (insomnia, vivid dreams) often persist for several more weeks." },
      { days: 14, title: "Memory and attention start improving", description: "Studies show measurable memory improvement within the first 1\u20132 weeks of abstinence. Brain fog begins lifting as CB1 receptors start recovering." },
      { days: 28, title: "Cognitive function approaching baseline", description: "By day 28, most standard cognitive tests show few significant differences between former users and non-users. CB1 receptor density has largely normalized." },
      { days: 45, title: "Sleep patterns normalizing", description: "Insomnia and vivid/disturbing dreams \u2014 among the most persistent withdrawal symptoms \u2014 typically resolve within 30\u201345 days." },
      { days: 90, title: "Lung function improving (if smoked)", description: "Bronchitis symptoms associated with smoking cannabis begin resolving. Coughing, phlegm, and wheezing decrease. Full respiratory recovery continues over months." },
      { days: 180, title: "Motivation and emotional regulation stabilizing", description: "With the brain\u2019s reward and stress systems recalibrated, many people report improved motivation, clearer emotional responses, and better stress management." },
    ],
  },
  cocaine: {
    milestones: [
      { days: 3, title: "Acute crash phase subsides", description: "The initial crash \u2014 extreme fatigue, excessive sleeping, depression, increased appetite \u2014 typically lasts 1\u20133 days. Sleep patterns remain disrupted, and vivid nightmares are common." },
      { days: 14, title: "Acute withdrawal easing", description: "Physical withdrawal symptoms (fatigue, agitation, sleep disruption) peak during the first 1\u20132 weeks and then begin to subside. Appetite has returned. Strong cravings continue." },
      { days: 30, title: "Early dopamine recovery underway", description: "Dopamine receptor healing has begun, though the process is slow. Mood swings are lessening for some, but depression, irritability, and low motivation can persist for months (post-acute withdrawal)." },
      { days: 90, title: "Energy and concentration improving", description: "PET imaging studies show dopamine D2 receptor recovery in about 60% of people by 3 months. Energy levels stabilize and cognitive function improves, though some individuals recover more slowly." },
      { days: 180, title: "Brain reward system partially recovered", description: "Neuroimaging shows prefrontal gray matter volume increases and midbrain dopaminergic activity normalizing. However, brain reactivity to pleasurable experiences may still be lower than in non-users." },
      { days: 365, title: "Cardiovascular risk declining", description: "Heart and vascular function continue improving with sustained abstinence. Note: some structural cardiac damage from heavy use may be permanent, and nasal septal perforations do not heal without surgery." },
      { days: 730, title: "Sustained neurological recovery", description: "Dopamine system function continues improving. For those with slower recovery (about 40% of chronic users), receptor normalization may still be ongoing. Cravings in response to triggers can persist." },
    ],
  },
  opioids: {
    disclaimer: "Opioid recovery is most effective with medication-assisted treatment (MAT) \u2014 methadone, buprenorphine, or naltrexone. MAT is the gold standard of care recommended by NIDA, SAMHSA, and WHO. Talk to a doctor about your options.",
    milestones: [
      { days: 3, title: "Acute withdrawal peaks and begins subsiding", description: "For short-acting opioids (heroin, oxycodone), withdrawal peaks around days 2\u20133 with muscle aches, sweating, insomnia, and GI symptoms. Long-acting opioids (methadone) may not peak until days 3\u20135." },
      { days: 7, title: "Worst physical symptoms easing", description: "Acute physical withdrawal from short-acting opioids generally resolves within 7\u201310 days. Sleep and appetite slowly return, though fatigue persists." },
      { days: 14, title: "Body aches and chills resolving", description: "Most acute physical symptoms have passed. Energy is returning, but post-acute withdrawal (PAWS) may be beginning \u2014 mood swings, poor sleep, and low energy that can fluctuate for months." },
      { days: 30, title: "Endorphin system restarting", description: "Opioid receptor sensitivity begins normalizing within 4\u20138 weeks. Mood may be improving, but PAWS-related depression, anxiety, and irritability commonly persist for 6\u201324 months." },
      { days: 90, title: "Brain chemistry rebalancing underway", description: "Neurochemical recovery is progressing. Cravings are lessening for many but remain a significant relapse trigger, especially in response to environmental cues and stress." },
      { days: 180, title: "Hormonal and immune function recovering", description: "Opioid-induced hormonal disruptions (testosterone, cortisol, menstrual irregularities) are recovering. Immune system function is improving. Some hormonal effects may require medical treatment." },
      { days: 365, title: "Cognitive function improving, but vigilance remains critical", description: "Thinking, memory, and decision-making continue to improve. However, relapse risk remains very high \u2014 without MAT, approximately 90% relapse within the first year. With MAT, this drops to 40\u201350%. Continued support is essential." },
      { days: 1825, title: "Sustained recovery stabilizing", description: "After 5+ years of continuous recovery, relapse risk drops substantially. The brain has had time for significant healing. Many people describe this as the point where recovery feels like their normal life." },
    ],
  },
  gambling: {
    disclaimer: "Gambling disorder follows a chronic course with high relapse rates. Professional support \u2014 cognitive behavioral therapy (CBT), support groups, or counseling \u2014 significantly improves outcomes.",
    milestones: [
      { days: 7, title: "The chaos of active gambling has stopped", description: "The cycle of chasing losses, lying, and hiding bets is broken. Withdrawal-like symptoms \u2014 restlessness, irritability, difficulty concentrating \u2014 are common and normal during the first 1\u20132 weeks." },
      { days: 30, title: "Sleep improving, financial reality clarifying", description: "Sleep quality typically improves as stress decreases. Confronting the full financial picture is often painful at this stage \u2014 this is hard but necessary. Many people report clearer thinking." },
      { days: 90, title: "Impulse control strengthening", description: "With practice and support, resisting urges to gamble becomes more manageable. Decision-making feels clearer. About 75% of people in treatment are maintaining abstinence at this point." },
      { days: 180, title: "Relationships and trust beginning to rebuild", description: "Consistent behavior over months starts rebuilding trust damaged by gambling. Emotional stability improves. Financial recovery is underway, though debts may take years to resolve." },
      { days: 365, title: "Mental health and stability significantly improved", description: "People who maintain recovery show decreased anxiety, improved personality traits, and greater life satisfaction. About 50% of those in treatment maintain abstinence at 1 year." },
      { days: 1825, title: "Long-term recovery, ongoing awareness needed", description: "Life has stabilized significantly. However, research shows relapse remains possible even after years \u2014 about 44% of recovered gamblers experience some relapse over 5 years. Continued self-awareness and support matter." },
    ],
  },
  other: {
    disclaimer: "These are general milestones. Recovery timelines vary significantly depending on the substance or behavior, duration of use, and individual factors.",
    milestones: [
      { days: 7, title: "Acute withdrawal typically subsiding", description: "The most intense physical and psychological withdrawal symptoms usually peak within the first week and then begin to ease. Sleep and appetite disruptions are common." },
      { days: 14, title: "Body stabilizing, routines forming", description: "Physical symptoms continue decreasing. New daily routines and coping strategies are beginning to take shape, even if they feel fragile." },
      { days: 30, title: "Sleep, appetite, and mood improving", description: "Most acute withdrawal effects have passed. Sleep patterns, appetite, and emotional stability are gradually normalizing, though fluctuations are still normal." },
      { days: 90, title: "Brain chemistry rebalancing underway", description: "Neurotransmitter systems are adjusting to life without the substance or behavior. Concentration, motivation, and emotional regulation are measurably improving." },
      { days: 180, title: "Cognitive function noticeably improved", description: "Thinking, memory, and decision-making feel clearer. Cravings are less frequent and less intense, though they can still be triggered by stress, boredom, or environmental cues." },
      { days: 365, title: "Sustained recovery building resilience", description: "A year of recovery represents significant neurological and psychological healing. Relapse risk remains real \u2014 continued support, self-awareness, and healthy coping strategies are important." },
    ],
  },
  default: {
    milestones: [
      { days: 7, title: "Acute withdrawal typically subsiding", description: "The most intense physical and psychological withdrawal symptoms usually peak within the first week and then begin to ease." },
      { days: 30, title: "Sleep, appetite, and mood improving", description: "Most acute withdrawal effects have passed. Sleep patterns, appetite, and emotional stability are gradually normalizing." },
      { days: 90, title: "Brain chemistry rebalancing underway", description: "Neurotransmitter systems are adjusting to life without the substance or behavior. Concentration and motivation are improving." },
      { days: 180, title: "Cognitive function noticeably improved", description: "Thinking, memory, and decision-making feel clearer. Cravings are less frequent and less intense." },
      { days: 365, title: "Sustained recovery building resilience", description: "A year of recovery represents significant neurological and psychological healing. Continued support and self-awareness remain important." },
    ],
  },
};

export function getMilestones(substance: SubstanceId): SubstanceMilestones {
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
