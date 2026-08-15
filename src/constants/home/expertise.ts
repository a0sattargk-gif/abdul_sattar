import type { ExpertiseGroup } from "@/types/home";

export const HOME_EXPERTISE_GROUPS: ExpertiseGroup[] = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    description:
      "Responsive interfaces, reusable components, server rendering, state management, and scalable frontend architecture.",
    icon: "frontend",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Microfrontends",
    ],
    order: 1,
  },
  {
    id: "backend",
    title: "Backend Engineering",
    description:
      "Secure APIs, authentication, background jobs, service integrations, and modular backend systems.",
    icon: "backend",
    technologies: [
      "Node.js",
      "NestJS",
      "Django REST Framework",
      "Express",
      "GraphQL",
    ],
    order: 2,
  },
  {
    id: "database",
    title: "Database Systems",
    description:
      "Relational and document database design, querying, schema management, and application data workflows.",
    icon: "database",
    technologies: [
      "PostgreSQL",
      "MongoDB",
      "Supabase",
      "SQL",
      "Database Design",
    ],
    order: 3,
  },
  {
    id: "cloud",
    title: "Cloud and Deployment",
    description:
      "Cloud-ready deployment, containerization, environment configuration, storage, and production operations.",
    icon: "cloud",
    technologies: ["AWS", "Docker", "Nginx", "Linux", "CI/CD"],
    order: 4,
  },
  {
    id: "architecture",
    title: "Software Architecture",
    description:
      "Distributed systems, service boundaries, modular applications, and maintainable architecture patterns.",
    icon: "architecture",
    technologies: [
      "Microservices",
      "Microfrontends",
      "REST APIs",
      "Event-Driven Systems",
      "Clean Architecture",
    ],
    order: 5,
  },
  {
    id: "mobile",
    title: "Mobile Development",
    description:
      "Cross-platform mobile applications with reusable components, APIs, authentication, and responsive layouts.",
    icon: "mobile",
    technologies: [
      "React Native",
      "TypeScript",
      "API Integration",
      "Authentication",
      "Mobile UI",
    ],
    order: 6,
  },
];
