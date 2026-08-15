import type { AboutPreviewContent } from "@/types/home";

export const HOME_ABOUT_CONTENT: AboutPreviewContent = {
  eyebrow: "About Me",

  title:
    "Full-stack engineer focused on scalable architecture and reliable delivery",

  description:
    "I am a software engineer with more than two years of professional experience building full-stack web applications, backend services, mobile products, and production-ready software systems.",

  secondaryDescription:
    "My work covers frontend engineering, API development, database design, cloud deployment, microservices, microfrontends, and cross-platform mobile development. I focus on writing maintainable code and designing systems that can evolve with business requirements.",

  image: {
    src: "https://picsum.photos/900/1000?random=21",
    alt: "Full-stack software engineer working on application architecture",
  },

  primaryAction: {
    label: "More About Me",
    href: "/about",
    ariaLabel: "Learn more about my professional background",
  },

  secondaryAction: {
    label: "View Experience",
    href: "/experience",
    ariaLabel: "View my professional software development experience",
  },

  highlights: [
    "Frontend and backend development",
    "Web and mobile applications",
    "Cloud-ready system architecture",
    "Microservices and microfrontends",
  ],
};
