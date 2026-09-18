import type { CareerJourneyContent } from "@/types/about";

export const ABOUT_CAREER_JOURNEY: CareerJourneyContent = {
  eyebrow: "Experience & Evolution",
  title: "A journey defined by craftsmanship and continuous growth",
  description:
    "From specialized frontend component engineering to architecting complete, distributed full-stack applications with end-to-end accountability.",

  items: [
    {
      id: "frontend-focus",
      period: "Phase 01",
      title: "Modern Frontend Engineering",
      role: "Frontend Engineer",
      description:
        "Focused on building responsive, performant user interfaces, state management systems, and reusable design tokens with React, Next.js, and TypeScript.",
      icon: "foundation",
      highlights: [
        "Component-driven UI architecture with Next.js App Router & React 19",
        "Responsive, fluid layouts and client-side performance optimization",
        "Sub-second load times and Core Web Vitals performance tuning",
      ],
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "State Management"],
      order: 1,
    },
    {
      id: "fullstack-systems",
      period: "Phase 02",
      title: "Backend Services & Distributed APIs",
      role: "Full-Stack Engineer",
      description:
        "Expanded into scalable backend systems, database modeling, and contract-driven API design. Engineered resilient REST & GraphQL services with robust error boundaries.",
      icon: "professional",
      highlights: [
        "Modular backend architecture with Node.js, NestJS, and .NET",
        "Relational schema design, query tuning, and caching with PostgreSQL & Redis",
        "Secure authentication, role-based access control, and webhook integrations",
      ],
      technologies: ["Node.js", "NestJS", ".NET", "PostgreSQL", "Redis", "REST/GraphQL"],
      order: 2,
    },
    {
      id: "studio-ownership",
      period: "Phase 03",
      title: "Sattar Web Studio & Product Leadership",
      role: "Lead Full-Stack Developer",
      description:
        "Founding Sattar Web Studio to deliver end-to-end digital solutions for founders and business clients. Overseeing architecture, deployment, and ongoing system resilience.",
      icon: "leadership",
      highlights: [
        "End-to-end delivery of SaaS platforms, admin portals, and web products",
        "Zero-downtime CI/CD workflows and serverless cloud setups on Supabase & AWS",
        "Pragmatic technical consulting helping clients prioritize high-ROI features",
      ],
      technologies: ["Supabase", "AWS", "Microservices", "Docker", "Architecture"],
      order: 3,
    },
  ],
};
