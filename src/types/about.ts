export interface AboutAction {
  label: string;
  href: string;
  ariaLabel?: string;
}

export interface AboutHeroStat {
  id: string;
  value: string;
  label: string;
  sublabel?: string;
}

export interface AboutHeroContent {
  eyebrow: string;
  statusBadge: string;
  title: string;
  highlightedText: string;
  description: string;
  secondaryDescription: string;
  image: {
    src: string;
    alt: string;
  };
  primaryAction: AboutAction;
  secondaryAction: AboutAction;
  stats: AboutHeroStat[];
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
  role: string;
  description: string;
  icon: JourneyIconName;
  highlights: string[];
  technologies: string[];
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
  | "system-design"
  | "delivery";

export interface StrengthItem {
  id: string;
  title: string;
  description: string;
  clientBenefit: string;
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
