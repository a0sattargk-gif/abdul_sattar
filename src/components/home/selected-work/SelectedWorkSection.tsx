import { getFeaturedProjects } from "@/services/projects/getFeaturedProjects";

 import SelectedWorkHeader from "./SelectedWorkHeader";
import ProjectCard from "./ProjectShowcase";

export default async function SelectedWorkSection() {
  const projects = await getFeaturedProjects();

  if (projects.length === 0) {
    return null;
  }

  return (
    <section
      aria-labelledby="selected-work-heading"
      className="border-b border-cool-gray-200 bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <SelectedWorkHeader />

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}