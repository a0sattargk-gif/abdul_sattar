import type { HomeHeroContent } from "@/types/home";

export const HOME_HERO_CONTENT: HomeHeroContent = {
  eyebrow: "Sattar Web Studio",

  title: "Software engineering for",
  highlightedText: "useful, reliable digital products.",

  description:
    "I’m Abdul Sattar, the developer behind Sattar Web Studio. I build full-stack web applications, backend systems, mobile experiences, and high-performance digital products.",

  primaryAction: {
    label: "View Selected Work",
    href: "/projects",
    ariaLabel: "View selected projects by Abdul Sattar",
  },

  secondaryAction: {
    label: "Discuss a Project",
    href: "/contact",
    ariaLabel: "Contact Abdul Sattar to discuss a project",
  },

  technologies: [
    "React",
    "Next.js",
    "Node.js",
    "NestJS",
    ".NET",
    "PostgreSQL",
    "System Design",
  ],
};