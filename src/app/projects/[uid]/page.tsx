import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { asImageSrc, isFilled } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import ProjectHero from "@/components/projects/details/ProjectHero";
import ProjectInformation from "@/components/projects/details/ProjectInformation";
import ProjectCTA from "@/components/projects/details/ProjectCTA";
import { createClient } from "@/prismicio";
import { components } from "@/slices";

interface ProjectPageProps {
  params: Promise<{
    uid: string;
  }>;
}

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.APP_URL ||
  "https://sattarwebstudio.com";

export const dynamicParams = true;
export const revalidate = 60;

export async function generateStaticParams() {
  const client = createClient();

  const projects = await client
    .getAllByType("project", {
      fetchOptions: { next: { tags: ["prismic", "projects"] } },
    })
    .catch(() => []);

  return projects.map((project) => ({
    uid: project.uid,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { uid } = await params;
  const client = createClient();

  const project = await client
    .getByUID("project", uid, {
      fetchOptions: { next: { tags: ["prismic", `project-${uid}`, "projects"] } },
    })
    .catch(() => null);

  if (!project) {
    return {
      title: "Project Not Found | Sattar Web Studio",
    };
  }

  const rawTitle =
    project.data.meta_title || project.data.project_name || "Case Study";
  const title = `${rawTitle} | Sattar Web Studio`;
  const description =
    project.data.meta_description ||
    project.data.project_description ||
    "Production web application case study by Sattar Web Studio.";

  const canonicalUrl = `${SITE_URL}/projects/${project.uid}`;
  const metaImage =
    asImageSrc(project.data.meta_image) ||
    asImageSrc(project.data.hero_banner) ||
    asImageSrc(project.data.card_thumnail);

  return {
    title,
    description,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "website",
      title,
      description,
      url: canonicalUrl,
      images: metaImage
        ? [
            {
              url: metaImage,
              alt: rawTitle,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: metaImage ? [metaImage] : undefined,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { uid } = await params;
  const client = createClient();

  const [project, allProjects] = await Promise.all([
    client
      .getByUID("project", uid, {
        fetchOptions: {
          next: { tags: ["prismic", `project-${uid}`, "projects"] },
        },
      })
      .catch(() => null),
    client
      .getAllByType("project", {
        fetchOptions: { next: { tags: ["prismic", "projects"] } },
        orderings: [
          {
            field: "my.project.dispaly_order",
            direction: "asc",
          },
        ],
      })
      .catch(() => []),
  ]);

  if (!project) {
    notFound();
  }

  const title = project.data.project_name || "Case Study";
  const description =
    project.data.project_description ||
    project.data.meta_description ||
    "Engineering case study and technical breakdown.";
  const canonicalUrl = `${SITE_URL}/projects/${project.uid}`;
  const imageUrl =
    asImageSrc(project.data.meta_image) ||
    asImageSrc(project.data.hero_banner) ||
    asImageSrc(project.data.card_thumnail);

  const otherProjects = allProjects
    .filter((p) => p.uid !== uid)
    .slice(0, 3);

  const hasCtaSlice = project.data.slices.some((s) => s.slice_type === "cta");

  // Schema.org Structured Data
  const liveUrl =
    isFilled.link(project.data.live_url) && "url" in project.data.live_url
      ? (project.data.live_url.url as string)
      : undefined;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: title,
    description,
    url: canonicalUrl,
    image: imageUrl || undefined,
    genre: project.data.industry || undefined,
    author: {
      "@type": "Person",
      name: "Abdul Sattar",
      url: `${SITE_URL}/about`,
    },
    creator: {
      "@type": "ProfessionalService",
      name: "Sattar Web Studio",
      url: SITE_URL,
    },
    mainEntityOfPage: liveUrl,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ProjectHero project={project} />

      <ProjectInformation project={project} />

      <SliceZone slices={project.data.slices} components={components} />

      <ProjectCTA
        currentProject={project}
        otherProjects={otherProjects}
        hideCtaBanner={hasCtaSlice}
      />
    </>
  );
}
