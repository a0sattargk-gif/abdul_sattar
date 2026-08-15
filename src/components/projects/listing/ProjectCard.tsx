import Link from "next/link";

import { PrismicImage } from "@prismicio/react";
import type { ProjectDocument } from "../../../../prismicio-types";

interface ProjectCardProps {
  project: ProjectDocument;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const title = project.data.project_name || "Untitled project";

  const description =
    project.data.project_description || "Project details are being prepared.";

  const imageUrl = project.data.card_thumnail || "";

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-cool-gray-200 bg-white shadow-brand-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-brand-300 hover:shadow-brand-lg">
      <Link
        href={`/projects/${project.uid}`}
        aria-label={`View ${title} case study`}
        className="relative block aspect-[16/10] overflow-hidden bg-navy-800"
      >
        {imageUrl ? (
          <PrismicImage field={imageUrl} />
        ) : (
          <div className="grid size-full place-items-center bg-navy-800">
            <span className="text-sm font-semibold text-cool-gray-300">
              Project preview
            </span>
          </div>
        )}

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-navy-950/75 via-transparent to-transparent"
        />

        {project.data.status && (
          <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-navy-950/85 px-3 py-1.5 text-xs font-bold text-cool-gray-100 backdrop-blur">
            {project.data.status}
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        {project.data.industry && (
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-emerald-brand-700">
            {project.data.industry}
          </p>
        )}

        <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-navy-900">
          <Link
            href={`/projects/${project.uid}`}
            className="rounded-md transition-colors hover:text-emerald-brand-700"
          >
            {title}
          </Link>
        </h2>

        <p className="mt-3 line-clamp-3 text-sm leading-7 text-cool-gray-700">
          {description}
        </p>

        <div className="mt-auto pt-7">
          <Link
            href={`/projects/${project.uid}`}
            className="group/link inline-flex min-h-11 items-center gap-2 rounded-lg font-bold text-emerald-brand-700 transition-colors hover:text-emerald-brand-800"
          >
            View Case Study
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </article>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="size-5 transition-transform duration-200 group-hover/link:translate-x-1"
    >
      <path
        d="M4 10H16M11 5L16 10L11 15"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
