import type { HomeAboutContent } from "@/types/home/about";

export const HOME_ABOUT_CONTENT: HomeAboutContent = {
  eyebrow: "About",
  statusText: "Available for projects & roles",
  title: "Engineering dependable software with",
  highlightedText: "architectural precision.",
  brief:
    "I'm Abdul Sattar, full-stack software engineer and the developer behind Sattar Web Studio. I design and engineer scalable web applications, robust backend APIs, and high-performance digital products built for longevity.",
  stats: [
    {
      value: "2+",
      label: "Experience",
      sublabel: "Professional Delivery",
    },
    {
      value: "Full-Stack",
      label: "Scope",
      sublabel: "UI, APIs & Systems",
    },
    {
      value: "100%",
      label: "System Design",
      sublabel: "Architecture & Scale",
    },
  ],
  action: {
    label: "More about me",
    href: "/about",
    ariaLabel: "Learn more about Abdul Sattar's full background and experience",
  },
  categories: [
    { key: "all", label: "All Stack" },
    { key: "frontend", label: "Frontend" },
    { key: "backend", label: "Backend" },
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
    { name: ".NET", category: "backend", highlight: "High-Throughput APIs" },
    { name: "REST & GraphQL", category: "backend", highlight: "Clean Contract APIs" },
    { name: "PostgreSQL", category: "cloud", highlight: "Relational Schemas" },
    { name: "Supabase", category: "cloud", highlight: "Auth & Storage" },
    { name: "Redis", category: "cloud", highlight: "In-Memory Caching" },
    { name: "AWS", category: "cloud", highlight: "Cloud Infrastructure" },
    { name: "System Design", category: "practices", highlight: "Distributed Systems" },
    { name: "Clean Architecture", category: "practices", highlight: "Maintainable Code" },
    { name: "Microservices", category: "practices", highlight: "Decoupled Services" },
  ],
};