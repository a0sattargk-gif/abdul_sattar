import type { CoreStrengthsContent } from "@/types/about";

export const ABOUT_CORE_STRENGTHS: CoreStrengthsContent = {
  eyebrow: "Core Strengths",

  title: "Engineering strengths that support product growth",

  description:
    "A practical combination of technical depth, structured thinking, and reliable delivery.",

  items: [
    {
      id: "full-stack-engineering",
      title: "Full-Stack Engineering",
      description:
        "Building complete products across frontend, backend, database, and cloud.",
      icon: "full-stack",
      points: [
        "React and Next.js",
        "Node.js and NestJS",
        "PostgreSQL and MongoDB",
      ],
      order: 1,
    },
    {
      id: "software-architecture",
      title: "Software Architecture",
      description:
        "Designing modular systems that remain maintainable as products grow.",
      icon: "architecture",
      points: ["Microservices", "Microfrontends", "Clean architecture"],
      order: 2,
    },
    {
      id: "problem-solving",
      title: "Problem Solving",
      description:
        "Turning technical and business requirements into practical solutions.",
      icon: "problem-solving",
      points: [
        "Requirement analysis",
        "Technical decisions",
        "Issue resolution",
      ],
      order: 3,
    },
    {
      id: "reliable-delivery",
      title: "Reliable Delivery",
      description:
        "Taking software from planning through implementation and deployment.",
      icon: "delivery",
      points: ["Testing", "Deployment", "Production support"],
      order: 4,
    },
  ],
};
