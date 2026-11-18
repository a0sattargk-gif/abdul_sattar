import type { AboutCTAContent } from "@/types/about";

export const ABOUT_CTA_CONTENT: AboutCTAContent = {
  eyebrow: "Work Together",

  title: "Have a product or development challenge in mind?",

  description:
    "Let’s discuss the requirements and define the best technical direction.",

  primaryAction: {
    label: "Discuss a Project",
    href: "/contact",
    ariaLabel: "Contact Sattar Web Studio to discuss a software project",
  },

  secondaryAction: {
    label: "View Selected Work",
    href: "/projects",
    ariaLabel: "View selected software development projects",
  },
};
