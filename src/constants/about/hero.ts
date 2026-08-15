import type { AboutHeroContent } from "@/types/about";

export const ABOUT_HERO_CONTENT: AboutHeroContent = {
  eyebrow: "About Me",

  title: "Full-stack engineer building",

  highlightedText: "reliable software systems",

  description:
    "I am a full-stack software engineer with more than two years of professional experience building web applications, backend services, mobile products, dashboards, and scalable software architecture.",

  secondaryDescription:
    "My work combines frontend engineering, backend development, databases, cloud deployment, microservices, microfrontends, and mobile development to deliver maintainable products from idea to production.",

  primaryAction: {
    label: "View My Experience",
    href: "/experience",
    ariaLabel: "View my professional software development experience",
  },

  secondaryAction: {
    label: "Discuss a Project",
    href: "/contact",
    ariaLabel: "Contact me to discuss a software development project",
  },

  stats: [
    {
      id: "experience",
      value: "2+",
      label: "Years of professional experience",
    },
    {
      id: "development",
      value: "Full Stack",
      label: "Frontend, backend, database, and cloud",
    },
    {
      id: "platforms",
      value: "Web + Mobile",
      label: "Applications across multiple platforms",
    },
  ],
};
