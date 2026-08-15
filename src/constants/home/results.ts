import type { ResultItem, ResultsSummaryItem } from "@/types/home";

export const HOME_RESULTS: ResultItem[] = [
  {
    id: "scalable-architecture",
    title: "Scalable Architecture",
    description:
      "Applications are structured with clear service boundaries, reusable modules, maintainable data flows, and architecture that can grow with product requirements.",
    icon: "architecture",
  },
  {
    id: "production-performance",
    title: "Production Performance",
    description:
      "Frontend rendering, API requests, database queries, background jobs, and deployment workflows are designed with performance and reliability in mind.",
    icon: "performance",
  },
  {
    id: "end-to-end-delivery",
    title: "End-to-End Delivery",
    description:
      "From requirements and architecture to development, testing, deployment, and production support, I handle the complete software delivery lifecycle.",
    icon: "delivery",
  },
  {
    id: "system-integration",
    title: "System Integration",
    description:
      "Third-party APIs, authentication systems, cloud services, databases, payment workflows, and internal services are integrated into cohesive products.",
    icon: "integration",
  },
];

export const HOME_RESULTS_SUMMARY: ResultsSummaryItem[] = [
  {
    id: "experience",
    value: "2+",
    label: "Years of professional development experience",
  },
  {
    id: "platforms",
    value: "Web + Mobile",
    label: "Applications across browser and mobile platforms",
  },
  {
    id: "architecture",
    value: "Full Stack",
    label: "Frontend, backend, database, cloud, and deployment",
  },
  {
    id: "delivery",
    value: "Production",
    label: "Software designed for real-world deployment",
  },
];
