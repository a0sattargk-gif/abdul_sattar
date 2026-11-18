import type { CareerJourneyContent } from "@/types/about";

export const ABOUT_CAREER_JOURNEY: CareerJourneyContent = {
  eyebrow: "Our Evolution & Delivery Framework",
  title: "Engineering evolution backed by proven production systems",
  description:
    "How Sattar Web Studio grew from specialized frontend engineering into a full-cycle software agency delivering mission-critical applications globally.",

  items: [
    {
      id: "frontend-focus",
      period: "Domain 01",
      title: "Design Systems & High-Velocity Frontend",
      role: "Frontend & UX Engineering",
      description:
        "Building responsive, pixel-perfect user interfaces, fluid design token systems, and sub-second web experiences with React, Next.js, and TypeScript.",
      icon: "foundation",
      highlights: [
        "Component-driven UI architecture with Next.js App Router & React 19",
        "Accessible, high-contrast interfaces adhering strictly to WCAG guidelines",
        "Sub-second load times and Core Web Vitals performance tuning",
      ],
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Design Systems"],
      order: 1,
    },
    {
      id: "fullstack-systems",
      period: "Domain 02",
      title: "Backend Microservices & Distributed APIs",
      role: "Backend & Cloud Architecture",
      description:
        "Engineering high-throughput backend services, relational database structures, and contract-driven API endpoints with resilient error boundaries.",
      icon: "professional",
      highlights: [
        "Modular backend architecture with Node.js, NestJS, and .NET",
        "Relational schema design, query tuning, and caching with PostgreSQL & Redis",
        "Enterprise authentication, RBAC, webhooks, and third-party integrations",
      ],
      technologies: ["Node.js", "NestJS", ".NET", "PostgreSQL", "Redis", "REST/GraphQL"],
      order: 2,
    },
    {
      id: "studio-ownership",
      period: "Domain 03",
      title: "Full-Cycle Product Engineering & Cloud DevOps",
      role: "End-to-End Delivery",
      description:
        "Delivering complete digital solutions from technical discovery and cloud infrastructure to automated CI/CD and long-term product evolution.",
      icon: "leadership",
      highlights: [
        "End-to-end delivery of SaaS platforms, client portals, and web applications",
        "Zero-downtime CI/CD workflows and resilient cloud setups on Supabase & AWS",
        "Continuous technical advisory helping founders prioritize high-impact features",
      ],
      technologies: ["AWS", "Docker", "Supabase", "CI/CD", "System Architecture"],
      order: 3,
    },
  ],
};
