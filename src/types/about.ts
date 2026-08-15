export interface AboutAction {
  label: string;
  href: string;
  ariaLabel?: string;
}

export interface AboutHeroStat {
  id: string;
  value: string;
  label: string;
}

export interface AboutHeroContent {
  eyebrow: string;
  title: string;
  highlightedText: string;
  description: string;
  secondaryDescription: string;
  primaryAction: AboutAction;
  secondaryAction: AboutAction;
  stats: AboutHeroStat[];
}
export type IntroductionHighlightIconName =
  | "product"
  | "architecture"
  | "delivery"
  | "collaboration";

export interface IntroductionHighlight {
  id: string;
  title: string;
  description: string;
  icon: IntroductionHighlightIconName;
}

export interface AboutIntroductionContent {
  eyebrow: string;
  title: string;
  description: string;
  secondaryDescription: string;
  highlights: IntroductionHighlight[];
}
export type JourneyIconName =
  | "foundation"
  | "professional"
  | "leadership"
  | "growth";

export interface JourneyItem {
  id: string;
  period: string;
  title: string;
  description: string;
  icon: JourneyIconName;
  highlights: string[];
  order: number;
}

export interface CareerJourneyContent {
  eyebrow: string;
  title: string;
  description: string;
  items: JourneyItem[];
}
export type StrengthIconName =
  | "full-stack"
  | "architecture"
  | "problem-solving"
  | "delivery";

export interface StrengthItem {
  id: string;
  title: string;
  description: string;
  icon: StrengthIconName;
  points: string[];
  order: number;
}

export interface CoreStrengthsContent {
  eyebrow: string;
  title: string;
  description: string;
  items: StrengthItem[];
}
export interface AboutCTAContent {
  eyebrow: string;
  title: string;
  description: string;
  primaryAction: AboutAction;
  secondaryAction: AboutAction;
}
