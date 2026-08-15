import Image from "next/image";
import Link from "next/link";

import type { HomeProject } from "@/types/home";

interface ProjectCardProps {
  project: HomeProject;
  priority?: boolean;
}

export default function ProjectCard({
  project,
  priority = false,
}: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-cool-gray-200 bg-white shadow-brand-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-brand-300 hover:shadow-brand-lg">
      <Link
        href={project.href}
        aria-label={`View ${project.title} project`}
        className="relative block aspect-[16/10] overflow-hidden bg-navy-800"
      >
        <Image
          src={project.image.src}
          alt={project.image.alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent"
        />

        <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-navy-950/80 px-3 py-1.5 text-xs font-bold text-cool-gray-100 backdrop-blur">
          {project.category}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="text-2xl font-extrabold tracking-tight text-navy-900">
          <Link
            href={project.href}
            className="rounded-md transition-colors duration-200 hover:text-emerald-brand-700"
          >
            {project.title}
          </Link>
        </h3>

        <p className="mt-3 text-sm leading-7 text-cool-gray-700">
          {project.summary}
        </p>

        <div className="mt-5 rounded-2xl border border-emerald-brand-200 bg-emerald-brand-50 p-4">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-emerald-brand-800">
            Engineering outcome
          </p>

          <p className="mt-2 text-sm leading-6 text-emerald-brand-900">
            {project.result}
          </p>
        </div>

        <ul
          className="mt-5 flex flex-wrap gap-2"
          aria-label={`${project.title} technologies`}
        >
          {project.technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-full bg-cool-gray-100 px-3 py-1.5 text-xs font-semibold text-navy-700"
            >
              {technology}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-7">
          <Link
            href={project.href}
            aria-label={`Read the ${project.title} case study`}
            className="group/link inline-flex min-h-11 items-center gap-2 rounded-lg font-bold text-emerald-brand-700 transition-colors duration-200 hover:text-emerald-brand-800"
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
