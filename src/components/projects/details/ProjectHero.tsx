import { isFilled } from "@prismicio/client";

import { PrismicNextLink } from "@prismicio/next";

import { PrismicImage } from "@prismicio/react";
import type { ProjectDocument } from "../../../../prismicio-types";

interface ProjectHeroProps {
  project: ProjectDocument;
}

export default function ProjectHero({ project }: ProjectHeroProps) {
  const title = project.data.project_name || "Untitled project";

  const description = project.data.project_description || "";

  const heroImage = project.data.hero_banner || "";

  return (
    <section
      aria-labelledby="project-detail-heading"
      className="relative overflow-hidden bg-navy-900 py-16 sm:py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(rgba(203,213,225,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(203,213,225,0.05)_1px,transparent_1px)] bg-[size:48px_48px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="flex flex-wrap justify-center gap-2">
            {project.data.industry && (
              <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-bold text-white">
                {project.data.industry}
              </span>
            )}

            {project.data.status && (
              <span className="rounded-full border border-cool-gray-300/20 bg-white/5 px-3 py-1.5 text-xs font-bold text-cool-gray-200">
                {project.data.status}
              </span>
            )}
          </div>

          <h1
            id="project-detail-heading"
            className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {title}
          </h1>

          {description && (
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-cool-gray-200 sm:text-lg">
              {description}
            </p>
          )}

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            {isFilled.link(project.data.live_url) && (
              <PrismicNextLink
                field={project.data.live_url}
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-emerald-brand-500 px-6 py-3 font-bold text-navy-950 transition hover:bg-emerald-brand-400"
              >
                View Live Project
              </PrismicNextLink>
            )}

            {isFilled.link(project.data.github_link) && (
              <PrismicNextLink
                field={project.data.github_link}
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-cool-gray-300/30 bg-white/5 px-6 py-3 font-bold text-white transition hover:bg-white/10"
              >
                View Source
              </PrismicNextLink>
            )}

            {isFilled.link(project.data.demo_video) && (
              <PrismicNextLink
                field={project.data.demo_video}
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-cool-gray-300/30 bg-white/5 px-6 py-3 font-bold text-white transition hover:bg-white/10"
              >
                Watch Demo
              </PrismicNextLink>
            )}
          </div>
        </div>

        <div className="relative mt-12 aspect-[16/8] overflow-hidden rounded-3xl border border-cool-gray-300/20 bg-navy-800 shadow-2xl">
          {heroImage ? (
            <PrismicImage field={heroImage} />
          ) : (
            <div className="grid size-full place-items-center">
              <span className="text-sm font-semibold text-cool-gray-300">
                Project banner
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
