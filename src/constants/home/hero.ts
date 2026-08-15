import type { HomeHeroContent } from "@/types/home";

export const HOME_HERO_CONTENT: HomeHeroContent = {
  eyebrow: "Full-Stack Software Engineer",

  title: "I build scalable and reliable",

  highlightedText: "software products",

  description:
    "I develop production-ready web and mobile applications using React, Next.js, Node.js, NestJS, Django REST Framework, modern databases, AWS, microservices, and microfrontend architectures.",

  primaryAction: {
    label: "View My Projects",
    href: "/projects",
    ariaLabel: "View my full-stack software development projects",
  },

  secondaryAction: {
    label: "Discuss a Project",
    href: "/contact",
    ariaLabel: "Contact me to discuss a software development project",
  },

  technologies: [
    "React",
    "Next.js",
    "Node.js",
    "NestJS",
    "React Native",
    "Django REST Framework",
    "PostgreSQL",
    "MongoDB",
    "Supabase",
    "AWS",
    "Microservices",
    "Microfrontends",
  ],
};
