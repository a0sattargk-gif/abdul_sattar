import type { HomeService } from "@/types/home";

export const HOME_SERVICES: HomeService[] = [
  {
    id: "frontend-development",
    title: "Frontend Development",
    description:
      "Responsive, scalable, and maintainable user interfaces built with React, Next.js, TypeScript, Tailwind CSS, and modern frontend architecture.",
    href: "/services/frontend-development",
    icon: "frontend",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Microfrontends",
    ],
    featured: true,
    order: 1,
  },
  {
    id: "backend-development",
    title: "Backend Development",
    description:
      "Reliable APIs, authentication systems, background jobs, database integrations, and backend services using Node.js, NestJS, and Django REST Framework.",
    href: "/services/backend-development",
    icon: "backend",
    technologies: [
      "Node.js",
      "NestJS",
      "Django REST Framework",
      "REST APIs",
      "GraphQL",
    ],
    featured: true,
    order: 2,
  },
  {
    id: "mobile-development",
    title: "Mobile App Development",
    description:
      "Cross-platform mobile applications built with React Native, reusable architecture, API integration, authentication, and responsive mobile interfaces.",
    href: "/services/mobile-development",
    icon: "mobile",
    technologies: [
      "React Native",
      "TypeScript",
      "REST APIs",
      "Supabase",
      "Authentication",
    ],
    featured: true,
    order: 3,
  },
  {
    id: "software-architecture",
    title: "Software Architecture",
    description:
      "Scalable application architecture using microservices, microfrontends, cloud infrastructure, databases, Docker, and production-focused engineering practices.",
    href: "/services/software-architecture",
    icon: "architecture",
    technologies: [
      "Microservices",
      "Microfrontends",
      "AWS",
      "Docker",
      "PostgreSQL",
    ],
    featured: true,
    order: 4,
  },
];
