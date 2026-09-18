"use client";

import ProjectCard from "@/components/projects/listing/ProjectCard";
import PaginationControls from "@/components/shared/PaginationControls";
import { usePagination } from "@/hooks/usePagination";

import type { ProjectDocument } from "../../../../prismicio-types";

interface ProjectsGridProps {
  projects: ProjectDocument[];
  pageSize?: number;
}

export default function ProjectsGrid({
  projects,
  pageSize = 6,
}: ProjectsGridProps) {
  const pagination = usePagination({
    items: projects,
    pageSize,
    scrollToTopOnChange: true,
    scrollTargetSelector: "#projects-grid-heading",
  });

  return (
    <section
      aria-labelledby="projects-grid-heading"
      className="bg-cool-gray-50 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-brand-700">
            Selected Work
          </p>

          <h2
            id="projects-grid-heading"
            className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl"
          >
            Explore my project case studies
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-cool-gray-700">
            Review the challenges, solutions, processes, and results behind each
            product.
          </p>
        </div>

        {projects.length > 0 ? (
          <>
            <div className="mt-10 grid gap-7 md:grid-cols-2">
              {pagination.paginatedItems.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>

            <PaginationControls
              {...pagination}
              itemLabel="projects"
            />
          </>
        ) : (
          <div className="mt-10 rounded-2xl border border-cool-gray-300 bg-white p-8 text-center">
            <p className="text-cool-gray-700">
              Project case studies are being prepared.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
