export interface HomeAction {
  label: string;
  href: string;
  ariaLabel?: string;
  external?: boolean;
}

export interface HomeHeroContent {
  eyebrow: string;
  title: string;
  highlightedText: string;
  description: string;
  primaryAction: HomeAction;
  secondaryAction: HomeAction;
  technologies: string[];
}

export type TrustIconName =
  | "experience"
  | "architecture"
  | "technology"
  | "availability";

export interface TrustItem {
  id: string;
  title: string;
  description: string;
  icon: TrustIconName;
}

export type ServiceIconName =
  | "frontend"
  | "backend"
  | "mobile"
  | "architecture";

export interface HomeService {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: ServiceIconName;
  technologies: string[];
  featured: boolean;
  order: number;
}

export interface HomeProjectImage {
  src: string;
  alt: string;
}

export interface HomeProject {
  id: string;
  slug: string;
  title: string;
  category: string;
  summary: string;
  result: string;
  image: HomeProjectImage;
  technologies: string[];
  href: string;
  featured: boolean;
  order: number;
}

export interface ResultItem {
  id: string;
  title: string;
  description: string;
}
export type ResultIconName =
  | "architecture"
  | "performance"
  | "delivery"
  | "integration";

export interface ResultItem {
  id: string;
  title: string;
  description: string;
  icon: ResultIconName;
}

export interface ResultsSummaryItem {
  id: string;
  value: string;
  label: string;
}

export interface AboutPreviewContent {
  eyebrow: string;
  title: string;
  description: string;
  secondaryDescription: string;
  image: {
    src: string;
    alt: string;
  };
  primaryAction: HomeAction;
  secondaryAction: HomeAction;
  highlights: string[];
}

export type ExpertiseIconName =
  | "frontend"
  | "backend"
  | "database"
  | "cloud"
  | "architecture"
  | "mobile";

export interface ExpertiseGroup {
  id: string;
  title: string;
  description: string;
  icon: ExpertiseIconName;
  technologies: string[];
  order: number;
}

export type ProcessIconName =
  | "discovery"
  | "planning"
  | "development"
  | "testing"
  | "deployment";

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: ProcessIconName;
  deliverables: string[];
  order: number;
}

export interface HomeInsightImage {
  src: string;
  alt: string;
}

export interface HomeInsight {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: HomeInsightImage;
  publishedAt: string;
  readingTime: string;
  href: string;
  featured: boolean;
  order: number;
}
export interface CTAAction {
  label: string;
  href: string;
  ariaLabel: string;
}

export interface CTAContent {
  eyebrow: string;
  title: string;
  description: string;

  primaryAction: CTAAction;
  secondaryAction: CTAAction;

  trustItems: string[];
}
export interface HomeFAQItem {
  id: string;
  question: string;
  answer: string;
}
