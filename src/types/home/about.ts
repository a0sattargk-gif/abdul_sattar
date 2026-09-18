export type TechCategoryKey =
  | "all"
  | "frontend"
  | "backend"
  | "cloud"
  | "practices";

export interface TechItem {
  name: string;
  category: TechCategoryKey;
  highlight?: string;
}

export interface AboutStat {
  value: string;
  label: string;
  sublabel: string;
}

export interface HomeAboutContent {
  eyebrow: string;
  statusText: string;
  title: string;
  highlightedText: string;
  brief: string;
  stats: AboutStat[];
  action: {
    label: string;
    href: string;
    ariaLabel: string;
  };
  categories: {
    key: TechCategoryKey;
    label: string;
  }[];
  technologies: TechItem[];
}