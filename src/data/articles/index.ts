export type { Article, ArticleMeta } from "./types";

import { article as surviveFirst10Minutes } from "./survive-first-10-minutes-of-craving";
import { article as addictiveVoice } from "./the-addictive-voice-how-your-mind-talks-you-into-relapse";
import { article as ulyssesContract } from "./ulysses-contract-outsmart-addiction";
import { article as coldPlunging } from "./cold-plunging-addiction-recovery-dopamine";
import { article as sobrietyBoring } from "./why-sobriety-feels-boring-dopamine-science";
import { article as anhedonia } from "./anhedonia-after-quitting-how-long-it-lasts";
import { article as boredomTolerance } from "./boredom-tolerance-recovery-skill";
import { article as phoneRelapse } from "./phone-relapse-trigger-digital-cues";
import { article as dopamineReset } from "./how-long-to-reset-dopamine-timeline";
import { article as pleasurePain } from "./pleasure-pain-balance-explains-addiction";
import { article as dopamineFasting } from "./dopamine-fasting-does-it-work";
import { article as shameSpiral } from "./shame-spiral-addiction-how-to-break-it";
import { article as radicalHonesty } from "./why-addicts-lie-radical-honesty-recovery";
import { article as crossAddiction } from "./cross-addiction-quitting-one-leads-to-another";
import { article as paws } from "./paws-post-acute-withdrawal-month-by-month";
import { article as urgeSurfing } from "./urge-surfing-protocol-ride-out-craving";
import { article as dopamineStacking } from "./dopamine-stacking-modern-life-addiction-recovery";
import { article as thirtyDayReset } from "./30-day-dopamine-reset-week-by-week";
import { article as cantFeelPleasure } from "./why-cant-i-feel-pleasure-dopamine-deficit";
import { article as sugarCravingsAlcohol } from "./sugar-cravings-after-quitting-alcohol";
import { article as threeStagesRelapse } from "./three-stages-of-relapse-how-to-catch-yourself";
import { article as brainChangesHeals } from "./how-addiction-changes-your-brain-and-heals";
import { article as sugarBingeEating } from "./sugar-addiction-binge-eating-same-circuits";
import { article as diseaseOrLearning } from "./is-addiction-disease-or-learning";
import { article as whiteKnuckling } from "./white-knuckling-sobriety";
import { article as onceAnAddict } from "./once-an-addict-always-an-addict";
import { article as narrowingEffect } from "./narrowing-effect-addiction";
import { article as willpowerFails } from "./why-willpower-fails-recovery";
import { article as recoveryWithoutRehab } from "./recovery-without-rehab";
import { article as growingOut } from "./growing-out-of-addiction";
import { article as whoAmI } from "./who-am-i-without-addiction-identity";
import { article as egoDepletion } from "./ego-depletion-myth-recovery";
import { article as heartbreakWithdrawal } from "./heartbreak-withdrawal-love-addiction";
import { article as instantGratification } from "./instant-gratification-addiction";
import { article as screwItMoment } from "./screw-it-moment-all-or-nothing";
import { article as narrativeIdentity } from "./rewriting-your-story-narrative-identity";

import { Article, ArticleMeta } from "./types";

export const articles: Article[] = [
  surviveFirst10Minutes,
  addictiveVoice,
  ulyssesContract,
  coldPlunging,
  sobrietyBoring,
  anhedonia,
  boredomTolerance,
  phoneRelapse,
  dopamineReset,
  pleasurePain,
  dopamineFasting,
  shameSpiral,
  radicalHonesty,
  crossAddiction,
  paws,
  urgeSurfing,
  dopamineStacking,
  thirtyDayReset,
  cantFeelPleasure,
  sugarCravingsAlcohol,
  threeStagesRelapse,
  brainChangesHeals,
  sugarBingeEating,
  diseaseOrLearning,
  whiteKnuckling,
  onceAnAddict,
  narrowingEffect,
  willpowerFails,
  recoveryWithoutRehab,
  growingOut,
  whoAmI,
  egoDepletion,
  heartbreakWithdrawal,
  instantGratification,
  screwItMoment,
  narrativeIdentity,
];

export const articlesMeta: ArticleMeta[] = articles.map(({ slug, title, description, publishedAt }) => ({
  slug,
  title,
  description,
  publishedAt,
}));

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
