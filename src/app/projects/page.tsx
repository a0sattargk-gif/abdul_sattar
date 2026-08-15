import type { Metadata } from "next";

import ProjectsGrid from "@/components/projects/listing/ProjectsGrid";
import ProjectsHero from "@/components/projects/listing/ProjectsHero";

import { createClient, repositoryName } from "@/prismicio";

console.log("Repository:", repositoryName);

const client = createClient();

const repository = await client.getRepository();

console.log(repository);

export const metadata: Metadata = {
  title: "Projects",

  description:
    "Explore full-stack projects, SaaS platforms, dashboards, mobile applications, and software architecture case studies.",
};

export default async function ProjectsPage() {
  const client = createClient();

  const projects = await client.getAllByType("project", {
    orderings: [
      {
        field: "my.project.dispaly_order",
        direction: "asc",
      },
    ],
  });

  return (
    <>
      <ProjectsHero />
      <ProjectsGrid projects={projects} />
    </>
  );
}
