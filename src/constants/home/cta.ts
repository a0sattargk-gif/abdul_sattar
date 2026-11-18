import type { CTAContent } from "@/types/home/cta";

export const HOME_CTA: CTAContent = {
  eyebrow: "Start a Conversation",

  title: "Ready to build a scalable, high-performance digital product?",

  description:
    "Whether you need full-stack product engineering, modern frontend architecture, or robust backend API systems, let's discuss your project goals and engineer a solution built for scale.",

  primaryAction: {
    label: "Start a Project",
    href: "/contact",
    ariaLabel: "Contact Sattar Web Studio to discuss a software project",
  },

  secondaryAction: {
    label: "View Selected Work",
    href: "/projects",
    ariaLabel: "Explore selected software engineering projects",
  },

  trustItems: [
    "Dedicated cross-functional engineering pods",
    "Global collaboration across all major timezones",
    "Full-cycle delivery from system architecture to cloud",
    "Guaranteed milestones, SLAs, & complete code ownership",
  ],
};
