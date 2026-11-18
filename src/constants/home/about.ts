import type { HomeAboutContent } from "@/types/home/about";

export const HOME_ABOUT_CONTENT: HomeAboutContent = {
  eyebrow: "About Our Studio",
  statusText: "Accepting new client engagements & retainers",
  title: "Engineering dependable software with",
  highlightedText: "architectural precision.",
  brief:
    "We are Sattar Web Studio, a full-cycle software engineering agency. Led by founder Abdul Sattar, our team partners with founders, scaling businesses, and product leaders to design, architect, and ship high-performance digital products engineered for long-term scale.",
  stats: [
    {
      value: "15+",
      label: "Production Systems",
      sublabel: "Shipped Worldwide",
    },
    {
      value: "Full-Cycle",
      label: "Engineering Scope",
      sublabel: "Discovery to Cloud Scale",
    },
    {
      value: "99.9%",
      label: "System Reliability",
      sublabel: "Architecture & Scale",
    },
  ],
  action: {
    label: "About Our Studio",
    href: "/about",
    ariaLabel: "Learn more about Sattar Web Studio's team, process, and capabilities",
  },
  categories: [
    { key: "all", label: "All Stack" },
    { key: "frontend", label: "Frontend" },
    { key: "backend", label: "Backend" },
    { key: "cms", label: "CMS & E-Com" },
    { key: "cloud", label: "Data & Cloud" },
    { key: "practices", label: "Architecture" },
  ],
  technologies: [
    { name: "React", category: "frontend", highlight: "Modern UI & Hooks" },
    { name: "Next.js", category: "frontend", highlight: "App Router & SSR" },
    { name: "TypeScript", category: "frontend", highlight: "Strict Type Safety" },
    { name: "Tailwind CSS", category: "frontend", highlight: "Design Tokens & UX" },
    { name: "Node.js", category: "backend", highlight: "Fast Async Runtime" },
    { name: "NestJS", category: "backend", highlight: "Modular Architecture" },
    { name: "REST & GraphQL", category: "backend", highlight: "Clean Contract APIs" },
    { name: "Shopify", category: "cms", highlight: "Custom Stores & Liquid" },
    { name: "WordPress", category: "cms", highlight: "Headless & Custom Themes" },
    { name: "PostgreSQL", category: "cloud", highlight: "Relational Schemas" },
    { name: "Supabase", category: "cloud", highlight: "Auth & Storage" },
    { name: "Redis", category: "cloud", highlight: "In-Memory Caching" },
    { name: "AWS", category: "cloud", highlight: "Cloud Infrastructure" },
    { name: "System Design", category: "practices", highlight: "Distributed Systems" },
    { name: "Clean Architecture", category: "practices", highlight: "Maintainable Code" },
    { name: "Microservices", category: "practices", highlight: "Decoupled Services" },
  ],
};