import type { Metadata } from "next";

import { notFound } from "next/navigation";

import { asImageSrc } from "@prismicio/client";

import { SliceZone } from "@prismicio/react";

import ProjectHero from "@/components/projects/details/ProjectHero";
import ProjectInformation from "@/components/projects/details/ProjectInformation";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

interface ProjectPageProps {
  params: Promise<{
    uid: string;
  }>;
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { uid } = await params;

  const client = createClient();

  const project = await client.getByUID("project", uid).catch(() => null);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const title =
    project.data.meta_title || project.data.project_name || "Project";

  const description =
    project.data.meta_description ||
    project.data.project_description ||
    undefined;

  const metaImage = asImageSrc(project.data.meta_image);

  return {
    title,
    description,

    openGraph: {
      title,
      description,
      images: metaImage
        ? [
            {
              url: metaImage,
            },
          ]
        : undefined,
    },
  };
}

export async function generateStaticParams() {
  const client = createClient();

  const projects = await client.getAllByType("project");

  return projects.map((project) => ({
    uid: project.uid,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { uid } = await params;

  const client = createClient();

  const project = await client.getByUID("project", uid).catch(() => null);

  if (!project) {
    notFound();
  }

  return (
    <>
      <ProjectHero project={project} />

      <ProjectInformation project={project} />

      <SliceZone slices={project.data.slices} components={components} />
    </>
  );
}
