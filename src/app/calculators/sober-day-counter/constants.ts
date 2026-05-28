export interface Milestone {
  days: number;
  label: string;
  emoji: string;
}

// Mirrors the mobile app's milestone ladder (constants/milestones.ts).
export const MILESTONES: Milestone[] = [
  { days: 1, label: "1 Day", emoji: "🌱" },
  { days: 3, label: "3 Days", emoji: "🌿" },
  { days: 7, label: "1 Week", emoji: "⭐" },
  { days: 14, label: "2 Weeks", emoji: "🌟" },
  { days: 30, label: "1 Month", emoji: "🏅" },
  { days: 60, label: "2 Months", emoji: "💪" },
  { days: 90, label: "3 Months", emoji: "🔥" },
  { days: 180, label: "6 Months", emoji: "🏆" },
  { days: 365, label: "1 Year", emoji: "👑" },
  { days: 730, label: "2 Years", emoji: "💎" },
  { days: 1825, label: "5 Years", emoji: "🌈" },
  { days: 3650, label: "10 Years", emoji: "🏔️" },
];

export function getNextMilestone(days: number): Milestone | null {
  return MILESTONES.find((m) => m.days > days) || null;
}

export function getReachedMilestones(days: number): Milestone[] {
  return MILESTONES.filter((m) => m.days <= days);
}
