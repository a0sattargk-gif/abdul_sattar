import Link from "next/link";
import { isFilled } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

import type { ProjectDocument } from "../../../../prismicio-types";

interface ProjectHeroProps {
  project: ProjectDocument;
}

export default function ProjectHero({ project }: ProjectHeroProps) {
  const title = project.data.project_name || "Untitled project";
  const description = project.data.project_description || "";
  const heroImage = project.data.hero_banner;

  const liveUrlText =
    isFilled.link(project.data.live_url) && "url" in project.data.live_url
      ? (project.data.live_url.url as string).replace(/^https?:\/\//, "")
      : `${project.uid || "case-study"}.app`;

  return (
    <section
      aria-labelledby="project-detail-heading"
      className="relative overflow-hidden bg-navy-900 py-12 sm:py-16 lg:py-20"
    >
      {/* Ambient background glows */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-28 -top-28 size-96 rounded-full bg-emerald-brand-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 size-96 rounded-full bg-emerald-brand-400/10 blur-3xl" />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(203,213,225,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(203,213,225,0.04)_1px,transparent_1px)] bg-[size:48px_48px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumbs"
          className="mb-8 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-cool-gray-300"
        >
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="transition hover:text-emerald-brand-300"
            >
              Home
            </Link>
            <span aria-hidden="true" className="text-cool-gray-600">
              /
            </span>
            <Link
              href="/projects"
              className="transition hover:text-emerald-brand-300"
            >
              Projects
            </Link>
            <span aria-hidden="true" className="text-cool-gray-600">
              /
            </span>
            <span className="font-medium text-white">{title}</span>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 font-semibold text-emerald-brand-400 hover:text-emerald-brand-300 transition"
          >
            <svg
              className="size-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            All Projects
          </Link>
        </nav>

        {/* Hero Content */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {project.data.featured && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-brand-400/30 bg-emerald-brand-500/15 px-3 py-1 text-xs font-bold text-emerald-brand-300">
                <span className="size-1.5 rounded-full bg-emerald-brand-400" />
                Featured Case Study
              </span>
            )}

            {project.data.industry && (
              <span className="rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-bold text-white">
                {project.data.industry}
              </span>
            )}

            {project.data.status && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-cool-gray-300/20 bg-white/5 px-3.5 py-1 text-xs font-bold text-cool-gray-200">
                <span className="size-1.5 rounded-full bg-emerald-brand-400 animate-pulse" />
                {project.data.status}
              </span>
            )}
          </div>

          <h1
            id="project-detail-heading"
            className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight"
          >
            {title}
          </h1>

          {description && (
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-cool-gray-200 sm:text-lg">
              {description}
            </p>
          )}

          {/* Action Toolbar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            {isFilled.link(project.data.live_url) && (
              <PrismicNextLink
                field={project.data.live_url}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-emerald-brand-500 px-6 py-3.5 text-sm font-extrabold text-navy-950 shadow-brand-sm transition duration-150 hover:bg-emerald-brand-400 hover:shadow-brand-md"
              >
                <svg
                  className="size-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
                Visit Live Site
              </PrismicNextLink>
            )}

            {isFilled.link(project.data.github_link) && (
              <PrismicNextLink
                field={project.data.github_link}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition duration-150 hover:border-white/35 hover:bg-white/15"
              >
                <svg
                  className="size-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                View Source
              </PrismicNextLink>
            )}

            {isFilled.link(project.data.demo_video) && (
              <PrismicNextLink
                field={project.data.demo_video}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition duration-150 hover:border-white/35 hover:bg-white/15"
              >
                <svg
                  className="size-4 text-emerald-brand-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch Demo
              </PrismicNextLink>
            )}

            <a
              href="#case-study"
              className="inline-flex min-h-12 items-center justify-center gap-1.5 rounded-xl border border-transparent px-5 py-3.5 text-sm font-semibold text-cool-gray-300 transition duration-150 hover:text-white"
            >
              Case Study Details ↓
            </a>
          </div>
        </div>

        {/* Browser Mockup Hero Frame */}
        <div className="relative mt-12 overflow-hidden rounded-3xl border border-white/15 bg-navy-950 shadow-2xl">
          {/* Browser Chrome Header */}
          <div className="flex items-center justify-between border-b border-white/10 bg-navy-950/80 px-4 py-3 backdrop-blur-xs">
            <div className="flex items-center gap-1.5">
              <span className="size-3 rounded-full bg-red-500/80" />
              <span className="size-3 rounded-full bg-yellow-500/80" />
              <span className="size-3 rounded-full bg-green-500/80" />
            </div>

            <div className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-4 py-1 text-xs font-mono text-cool-gray-300">
              <svg
                className="size-3 text-emerald-brand-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <span>{liveUrlText}</span>
            </div>

            <div className="w-12 text-right text-xs text-cool-gray-500">
              SSL
            </div>
          </div>

          {/* Banner Graphic */}
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-navy-900">
            {heroImage?.url ? (
              <PrismicNextImage
                field={heroImage}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-cover"
                fallbackAlt=""
              />
            ) : (
              <div className="grid size-full place-items-center bg-navy-900 text-cool-gray-400">
                <span className="text-sm font-semibold">
                  Project Preview Graphic
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
