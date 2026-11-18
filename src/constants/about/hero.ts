import type { AboutHeroContent } from "@/types/about";

export const ABOUT_HERO_CONTENT: AboutHeroContent = {
  eyebrow: "About Sattar Web Studio",
  statusBadge: "Accepting new client engagements & partnerships",

  title: "Engineering digital platforms with",
  highlightedText: "craft, scale, and accountability.",

  description:
    "Sattar Web Studio is an independent software engineering and digital product agency. Led by founder and principal architect Abdul Sattar, our team partners with founders, scaling startups, and enterprise teams to design and build mission-critical web platforms, robust cloud APIs, and high-performance applications.",

  secondaryDescription:
    "Our studio methodology combines modular clean architecture, strict type safety, contract-driven APIs, and scalable infrastructure so your products ship faster with zero technical debt.",

  image: {
    src: "/images/abdul-sattar.webp",
    alt: "Abdul Sattar, Founder & Principal Solutions Architect at Sattar Web Studio",
  },

  primaryAction: {
    label: "Discuss a Project",
    href: "/contact",
    ariaLabel: "Contact Sattar Web Studio to discuss a software engineering project",
  },

  secondaryAction: {
    label: "View Selected Work",
    href: "/projects",
    ariaLabel: "Explore projects built by Sattar Web Studio",
  },

  stats: [
    {
      id: "experience",
      value: "15+",
      label: "Production Deployments",
      sublabel: "Global Clients",
    },
    {
      id: "scope",
      value: "Full-Cycle",
      label: "Engineering Scope",
      sublabel: "Architecture to Cloud",
    },
    {
      id: "standards",
      value: "100%",
      label: "Code & IP Ownership",
      sublabel: "Strict Architecture & CI/CD",
    },
  ],
};
