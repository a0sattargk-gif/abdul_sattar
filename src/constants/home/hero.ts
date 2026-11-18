import type { HomeHeroContent } from "@/types/home";

export const HOME_HERO_CONTENT: HomeHeroContent = {
  eyebrow: "Digital Product & Engineering Agency",

  title: "Software engineering for",
  highlightedText: "mission-critical, scalable digital products.",

  description:
    "We are Sattar Web Studio — an agile digital product and software engineering agency. We architect and build scalable web platforms, resilient APIs, and high-performance digital systems for startups and forward-thinking enterprises.",

  primaryAction: {
    label: "View Selected Work",
    href: "/projects",
    ariaLabel: "View selected projects by Sattar Web Studio",
  },

  secondaryAction: {
    label: "Discuss a Project",
    href: "/contact",
    ariaLabel: "Contact Sattar Web Studio to discuss a project",
  },

  technologies: [
    "React",
    "Next.js",
    "Node.js",
    "NestJS",
    "Shopify",
    "WordPress",
    "PostgreSQL",
    "System Design",
  ],
};