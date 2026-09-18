import { filter } from "@prismicio/client";

import { createClient } from "@/prismicio";
import { FeaturedProject } from "@/types/selected-work";
  

const HOME_PROJECT_LIMIT = 3;

export async function getFeaturedProjects(): Promise<FeaturedProject[]> {
  const client = createClient();

  const projects = await client.getAllByType("project", {
    filters: [
      filter.at("my.project.featured", true),
    ],
    orderings: [
      {
        field: "my.project.dispaly_order",
        direction: "asc",
      },
    ],
    limit: HOME_PROJECT_LIMIT,
  });

  return projects
    .filter(
      (
        project
      ): project is typeof project & {
        uid: string;
      } => Boolean(project.uid)
    )
    .map((project) => ({
      id: project.id,
      uid: project.uid,
      name: project.data.project_name ?? "",
      description: project.data.project_description ?? "",
      thumbnail: project.data.card_thumnail,
      industry: project.data.industry ?? null,
      role: project.data.role ?? null,
    }));
}