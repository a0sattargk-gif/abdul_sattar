import type { AboutIntroductionContent } from "@/types/about";

export const ABOUT_INTRODUCTION_CONTENT: AboutIntroductionContent = {
  eyebrow: "Professional Background",

  title: "Building dependable products across the full stack",

  description:
    "I develop web and mobile products across frontend, backend, database, and cloud systems.",

  secondaryDescription:
    "My focus is clean architecture, maintainable code, and reliable delivery.",

  highlights: [
    {
      id: "product-development",
      title: "Product Development",
      description: "SaaS platforms, dashboards, APIs, and mobile applications.",
      icon: "product",
    },
    {
      id: "system-architecture",
      title: "System Architecture",
      description:
        "Modular systems, microservices, databases, and integrations.",
      icon: "architecture",
    },
    {
      id: "production-delivery",
      title: "Production Delivery",
      description:
        "Deployment, configuration, testing, and ongoing improvements.",
      icon: "delivery",
    },
    {
      id: "team-collaboration",
      title: "Collaboration",
      description:
        "Clear communication with clients, developers, and product teams.",
      icon: "collaboration",
    },
  ],
};
