import type { CoreStrengthsContent } from "@/types/about";

export const ABOUT_CORE_STRENGTHS: CoreStrengthsContent = {
  eyebrow: "Engineering Principles",
  title: "Architectural standards that create tangible product value",
  description:
    "How disciplined engineering practices translate into faster feature velocity, lower maintenance costs, and better product reliability.",

  items: [
    {
      id: "architecture",
      title: "Clean Modular Architecture",
      description:
        "Structuring codebases with clear domain boundaries, strong separation of concerns, and reusable components.",
      clientBenefit:
        "Reduces long-term technical debt and allows your team to ship new features faster without breaking existing code.",
      icon: "architecture",
      points: [
        "Modular domain-driven design",
        "Strict TypeScript typing throughout",
        "Reusable, documented UI patterns",
      ],
      order: 1,
    },
    {
      id: "system-design",
      title: "System Design & Scalability",
      description:
        "Architecting distributed systems, modular services, and database pipelines engineered for high throughput and fault tolerance.",
      clientBenefit:
        "Guarantees your platform stays fast, stable, and responsive under heavy user traffic with zero infrastructure bottlenecks.",
      icon: "system-design",
      points: [
        "Distributed system patterns & microservices",
        "Database indexing & schema optimization",
        "Redis caching & load resilience",
      ],
      order: 2,
    },
    {
      id: "full-stack",
      title: "Resilient Full-Stack Systems",
      description:
        "Connecting clean frontend interfaces with robust backend APIs, relational database schemas, and caching layers.",
      clientBenefit:
        "Delivers sub-second response times, handles traffic surges smoothly, and prevents runtime crashes.",
      icon: "full-stack",
      points: [
        "Optimized PostgreSQL queries & indices",
        "Type-safe REST & GraphQL endpoints",
        "Redis caching for peak performance",
      ],
      order: 3,
    },
    {
      id: "delivery",
      title: "Pragmatic, Transparent Delivery",
      description:
        "Direct communication, proactive problem-solving, and continuous integration testing before any code reaches production.",
      clientBenefit:
        "Eliminates guesswork with clear timelines, transparent progress updates, and reliable production deployments.",
      icon: "delivery",
      points: [
        "Direct developer collaboration",
        "Automated CI/CD workflows",
        "Production observability & logging",
      ],
      order: 4,
    },
  ],
};
