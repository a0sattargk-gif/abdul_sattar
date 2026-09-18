import type { AboutHeroContent } from "@/types/about";

export const ABOUT_HERO_CONTENT: AboutHeroContent = {
  eyebrow: "About Abdul Sattar",
  statusBadge: "Available for select contracts & roles",

  title: "Software engineering with",
  highlightedText: "craft, rigor, and accountability.",

  description:
    "I’m Abdul Sattar, a full-stack software engineer and the developer behind Sattar Web Studio. I partner with founders, teams, and businesses to build high-performance web applications, resilient backend systems, and scalable digital platforms.",

  secondaryDescription:
    "My engineering approach emphasizes modular architecture, strict type safety, clean API contracts, and scalable system design so products evolve with minimal technical debt.",

  image: {
    src: "/images/abdul-sattar.webp",
    alt: "Abdul Sattar, full-stack software engineer and developer behind Sattar Web Studio",
  },

  primaryAction: {
    label: "Discuss a Project",
    href: "/contact",
    ariaLabel: "Contact Abdul Sattar to discuss a software engineering project",
  },

  secondaryAction: {
    label: "View Selected Work",
    href: "/projects",
    ariaLabel: "Explore projects built by Abdul Sattar",
  },

  stats: [
    {
      id: "experience",
      value: "2+",
      label: "Years Experience",
      sublabel: "Professional Delivery",
    },
    {
      id: "scope",
      value: "Full-Stack",
      label: "End-to-End Scope",
      sublabel: "Frontend to Backend",
    },
    {
      id: "standards",
      value: "100%",
      label: "System Design",
      sublabel: "Architecture & Scalability",
    },
  ],
};
