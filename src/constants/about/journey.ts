import type { CareerJourneyContent } from "@/types/about";

export const ABOUT_CAREER_JOURNEY: CareerJourneyContent = {
  eyebrow: "Career Journey",

  title: "From frontend development to complete product delivery",

  description:
    "My role has grown from building interfaces to delivering full-stack systems and production-ready software.",

  items: [
    {
      id: "foundation",
      period: "Foundation",
      title: "Frontend Development",
      description: "Built responsive interfaces and reusable React components.",
      icon: "foundation",
      highlights: [
        "React applications",
        "Responsive layouts",
        "Reusable components",
      ],
      order: 1,
    },
    {
      id: "full-stack",
      period: "Professional Growth",
      title: "Full-Stack Engineering",
      description:
        "Expanded into APIs, databases, authentication, and backend services.",
      icon: "professional",
      highlights: [
        "Node.js and NestJS",
        "REST and GraphQL APIs",
        "PostgreSQL and MongoDB",
      ],
      order: 2,
    },
    {
      id: "ownership",
      period: "Product Ownership",
      title: "End-to-End Delivery",
      description:
        "Handled architecture, implementation, deployment, and support.",
      icon: "leadership",
      highlights: [
        "System architecture",
        "Cloud deployment",
        "Production support",
      ],
      order: 3,
    },
    {
      id: "current-focus",
      period: "Current Focus",
      title: "Scalable Software Systems",
      description:
        "Focused on distributed systems, mobile apps, and cloud platforms.",
      icon: "growth",
      highlights: ["Microservices", "Microfrontends", "React Native and AWS"],
      order: 4,
    },
  ],
};
