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

