import Link from "next/link";

import ProjectCard from "@/components/home/projects/ProjectCard";
import SectionHeading from "@/components/shared/SectionHeading";

import { HOME_PROJECTS } from "@/constants/home/projects";
import { HomeProject } from "@/types/home";

export default function FeaturedProjects() {
  const featuredProjects = HOME_PROJECTS.filter(
    (project) => project.featured,
  ).sort(
    (firstProject, secondProject) => firstProject.order - secondProject.order,
  );

  return (
    <section
      aria-labelledby="home-projects-heading"
      className="bg-cool-gray-50 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="home-projects-heading"
            eyebrow="Selected Work"
            title="Software products built around real technical challenges"
            description="A selection of full-stack, SaaS, data, and distributed-system projects demonstrating practical architecture, development, and deployment experience."
          />

          <Link
            href="/projects"
            className="group inline-flex min-h-11 shrink-0 items-center gap-2 self-start rounded-lg border border-cool-gray-300 bg-white px-5 py-2.5 text-sm font-bold text-navy-900 transition duration-200 hover:border-emerald-brand-500 hover:text-emerald-brand-700 lg:self-auto"
          >
            View All Projects
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              fill="none"
              className="size-5 transition-transform duration-200 group-hover:translate-x-1"
            >
              <path
                d="M4 10H16M11 5L16 10L11 15"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        <div className="mt-12 grid gap-7 md:grid-cols-2">
          {featuredProjects.map((project: HomeProject, index: number) => (
            <ProjectCard
              key={project.id}
              project={project}
              priority={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
