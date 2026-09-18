import type { MetadataRoute } from "next";

import { createClient } from "@/prismicio";

export const revalidate = 86400; // Cache and revalidate once daily (24 hours)

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.APP_URL ||
  "https://sattarwebstudio.com";

interface StaticRouteConfig {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}

const STATIC_ROUTES: StaticRouteConfig[] = [
  { path: "", changeFrequency: "weekly", priority: 1.0 },
  { path: "/about", changeFrequency: "monthly", priority: 0.9 },
  { path: "/services", changeFrequency: "weekly", priority: 0.9 },
  { path: "/projects", changeFrequency: "weekly", priority: 0.9 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.5 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.5 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const currentDate = new Date();

  // 1. Static Pages
  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  // 2. Dynamic Pages from Prismic CMS (services, projects, blog posts)
  const client = createClient();

  try {
    const [services, projects, blogPosts] = await Promise.all([
      client.getAllByType("service").catch(() => []),
      client.getAllByType("project").catch(() => []),
      client.getAllByType("blog_post").catch(() => []),
    ]);

    const serviceEntries: MetadataRoute.Sitemap = services
      .filter((service) => Boolean(service.uid))
      .map((service) => ({
        url: `${BASE_URL}/services/${service.uid}`,
        lastModified: service.last_publication_date
          ? new Date(service.last_publication_date)
          : currentDate,
        changeFrequency: "monthly",
        priority: 0.8,
      }));

    const projectEntries: MetadataRoute.Sitemap = projects
      .filter((project) => Boolean(project.uid))
      .map((project) => ({
        url: `${BASE_URL}/projects/${project.uid}`,
        lastModified: project.last_publication_date
          ? new Date(project.last_publication_date)
          : currentDate,
        changeFrequency: "monthly",
        priority: 0.8,
      }));

    const blogEntries: MetadataRoute.Sitemap = blogPosts
      .filter((post) => Boolean(post.uid))
      .map((post) => ({
        url: `${BASE_URL}/blog/${post.uid}`,
        lastModified: post.last_publication_date
          ? new Date(post.last_publication_date)
          : currentDate,
        changeFrequency: "weekly",
        priority: 0.7,
      }));

    return [
      ...staticEntries,
      ...serviceEntries,
      ...projectEntries,
      ...blogEntries,
    ];
  } catch (error) {
    console.error("Error generating dynamic sitemap entries from Prismic:", error);
    // Graceful fallback to static entries if Prismic API is unreachable
    return staticEntries;
  }
}

