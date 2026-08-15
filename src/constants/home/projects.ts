import type { HomeProject } from "@/types/home";

export const HOME_PROJECTS: HomeProject[] = [
  {
    id: "accessify-video",
    slug: "accessify-video",
    title: "Accessify Video",
    category: "AI SaaS Platform",
    summary:
      "An enterprise-grade accessibility platform that automatically generates transcripts, captions, audio descriptions, and fully remediated accessible videos using AI-powered processing pipelines.",

    result:
      "Designed and built a resumable distributed processing engine supporting long-running video rendering, checkpoint recovery, AI analysis, FFmpeg rendering, background workers, and cloud storage.",

    image: {
      src: "https://picsum.photos/1200/720?random=11",
      alt: "Accessify Video project preview",
    },

    technologies: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Firebase",
      "FFmpeg",
      "Gemini AI",
    ],

    href: "/projects/accessify-video",

    featured: true,

    order: 1,
  },

  {
    id: "alt-text-pro",
    slug: "alt-text-pro",
    title: "Alt Text Pro",
    category: "Shopify SaaS",

    summary:
      "A Shopify application that scans store images and generates optimized AI-powered alternative text to improve SEO, accessibility, and product discoverability.",

    result:
      "Developed scalable image processing workflows, AI generation pipelines, bulk operations, merchant dashboards, and Shopify Admin integrations.",

    image: {
      src: "https://picsum.photos/1200/720?random=12",
      alt: "Alt Text Pro project preview",
    },

    technologies: [
      "React",
      "Node.js",
      "GraphQL",
      "Shopify API",
      "PostgreSQL",
      "AI",
    ],

    href: "/projects/alt-text-pro",

    featured: true,

    order: 2,
  },

  {
    id: "pslm-dashboard",
    slug: "pslm-dashboard",
    title: "PSLM Analytics Dashboard",
    category: "Government Data Platform",

    summary:
      "Interactive analytical dashboard for exploring Pakistan Social and Living Standards Measurement datasets through dynamic charts, indicators, province comparisons, and downloadable reports.",

    result:
      "Implemented reusable dashboard architecture, REST APIs, SQL integration, CSV processing, dynamic charts, filtering, and high-performance data visualization.",

    image: {
      src: "https://picsum.photos/1200/720?random=13",
      alt: "PSLM Dashboard preview",
    },

    technologies: [
      "React",
      "Express",
      "Node.js",
      "SQL",
      "Recharts",
      "REST API",
    ],

    href: "/projects/pslm-dashboard",

    featured: true,

    order: 3,
  },

  {
    id: "microservice-commerce",
    slug: "microservice-commerce",
    title: "Microservice Commerce Platform",
    category: "Distributed Architecture",

    summary:
      "A production-ready ecommerce architecture built around independent customer, product, payment, and order services using event-driven communication and containerized deployment.",

    result:
      "Designed scalable service boundaries, GraphQL APIs, Docker deployment, independent databases, authentication, and cloud-ready infrastructure.",

    image: {
      src: "https://picsum.photos/1200/720?random=14",
      alt: "Microservice architecture preview",
    },

    technologies: [
      "Next.js",
      "NestJS",
      "GraphQL",
      "Docker",
      "PostgreSQL",
      "Microservices",
    ],

    href: "/projects/microservice-commerce",

    featured: true,

    order: 4,
  },
];
