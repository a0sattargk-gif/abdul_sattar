import Link from "next/link";
import { isFilled } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { ExternalLink, Code2, Play, ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
            <ArrowLeft className="size-4" />
            All Projects
          </Link>
        </nav>

        {/* Hero Content */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {project.data.featured && (
              <Badge
                variant="emerald"
                className="border-emerald-brand-400/30 bg-emerald-brand-500/15 text-emerald-brand-300 gap-1.5"
              >
                <span className="size-1.5 rounded-full bg-emerald-brand-400" />
                Featured Case Study
              </Badge>
            )}

            {project.data.industry && (
              <Badge
                variant="outline"
                className="border-white/20 bg-white/10 text-white font-bold"
              >
                {project.data.industry}
              </Badge>
            )}

            {project.data.status && (
              <Badge
                variant="navyMuted"
                className="border-cool-gray-300/20 bg-white/5 text-cool-gray-200 gap-1.5"
              >
                <span className="size-1.5 rounded-full bg-emerald-brand-400 animate-pulse" />
                {project.data.status}
              </Badge>
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
              <Button
                asChild
                size="lg"
                variant="emerald"
                className="font-extrabold shadow-brand-sm hover:shadow-brand-md"
              >
                <PrismicNextLink field={project.data.live_url}>
                  <ExternalLink className="size-4" />
                  Visit Live Site
                </PrismicNextLink>
              </Button>
            )}

            {isFilled.link(project.data.github_link) && (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 bg-white/10 text-white hover:border-white/35 hover:bg-white/15 hover:text-white"
              >
                <PrismicNextLink field={project.data.github_link}>
                  <Code2 className="size-4" />
                  View Source
                </PrismicNextLink>
              </Button>
            )}

            {isFilled.link(project.data.demo_video) && (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 bg-white/10 text-white hover:border-white/35 hover:bg-white/15 hover:text-white"
              >
                <PrismicNextLink field={project.data.demo_video}>
                  <Play className="size-4 fill-emerald-brand-400 text-emerald-brand-400" />
                  Watch Demo
                </PrismicNextLink>
              </Button>
            )}

             
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
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-navy-950">
            {heroImage?.url ? (
              <PrismicNextImage
                field={heroImage}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-cover object-top"
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
