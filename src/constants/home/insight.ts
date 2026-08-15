import type { HomeInsight } from "@/types/home";

export const HOME_INSIGHTS: HomeInsight[] = [
  {
    id: "scalable-nextjs-architecture",
    slug: "scalable-nextjs-architecture",
    title: "How to Structure a Scalable Next.js Application",
    excerpt:
      "A practical approach to organizing components, business features, shared utilities, data access, and application routes in a production Next.js project.",
    category: "Next.js",
    image: {
      src: "https://picsum.photos/1200/720?random=31",
      alt: "Next.js application architecture article preview",
    },
    publishedAt: "2026-07-20",
    readingTime: "8 min read",
    href: "/blog/scalable-nextjs-architecture",
    featured: true,
    order: 1,
  },
  {
    id: "nestjs-microservice-design",
    slug: "nestjs-microservice-design",
    title: "Designing Microservices with NestJS",
    excerpt:
      "Learn how to separate service responsibilities, manage communication, structure modules, and prepare NestJS services for containerized deployment.",
    category: "Backend Architecture",
    image: {
      src: "https://picsum.photos/1200/720?random=32",
      alt: "NestJS microservice architecture article preview",
    },
    publishedAt: "2026-07-12",
    readingTime: "10 min read",
    href: "/blog/nestjs-microservice-design",
    featured: true,
    order: 2,
  },
  {
    id: "postgresql-api-performance",
    slug: "postgresql-api-performance",
    title: "Improving API Performance with PostgreSQL",
    excerpt:
      "A practical overview of indexing, query design, pagination, connection management, and database-level decisions that affect API performance.",
    category: "Database Engineering",
    image: {
      src: "https://picsum.photos/1200/720?random=33",
      alt: "PostgreSQL performance article preview",
    },
    publishedAt: "2026-07-05",
    readingTime: "7 min read",
    href: "/blog/postgresql-api-performance",
    featured: true,
    order: 3,
  },
];
