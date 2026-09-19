import Link from "next/link";

import type { ProjectDocument } from "../../../../prismicio-types";
import ProjectCard from "../listing/ProjectCard";

interface ProjectCTAProps {
  currentProject: ProjectDocument;
  otherProjects?: ProjectDocument[];
  hideCtaBanner?: boolean;
}

export default function ProjectCTA({
  currentProject,
  otherProjects = [],
  hideCtaBanner = false,
}: ProjectCTAProps) {
  const projectTitle = currentProject.data.project_name || "this project";

  return (
    <div className="bg-white">
      {/* More Projects Section (if available) */}
      {otherProjects.length > 0 && (
        <section
          aria-labelledby="more-projects-heading"
          className="border-b border-cool-gray-200/70 bg-cool-gray-50/50 py-16 sm:py-20"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-brand-600/20 bg-emerald-brand-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.16em] text-emerald-brand-800">
                  <span className="size-1.5 rounded-full bg-emerald-brand-600" />
                  Portfolio Showcase
                </div>
                <h2
                  id="more-projects-heading"
                  className="mt-3 text-2xl font-extrabold tracking-tight text-navy-950 sm:text-3xl"
                >
                  Explore More Case Studies
                </h2>
              </div>

              <Link
                href="/projects"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-brand-700 hover:text-emerald-brand-800 transition"
              >
                View All Projects →
              </Link>
            </div>

            <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {otherProjects.map((project) => (
                <ProjectCard key={project.uid} project={project} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Closing Call to Action */}
      {!hideCtaBanner && (
        <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-navy-800 bg-navy-950 px-6 py-14 text-center shadow-2xl sm:px-12 sm:py-16">
            {/* Ambient glows */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-20 -top-20 size-72 rounded-full bg-emerald-brand-500/15 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 right-0 size-80 rounded-full bg-emerald-brand-400/10 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(203,213,225,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(203,213,225,0.03)_1px,transparent_1px)] bg-[size:32px_32px]"
            />

            <div className="relative mx-auto max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-brand-400/30 bg-emerald-brand-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.16em] text-emerald-brand-300">
                <span className="size-1.5 rounded-full bg-emerald-brand-400 animate-pulse" />
                Let&apos;s Build Together
              </div>

              <h2 className="mt-5 text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
                Inspired by {projectTitle}? Let&apos;s Create Yours.
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-cool-gray-300 sm:text-base">
                Whether you need a high-performance frontend architecture, an
                accessible media tool, or a production web application, let&apos;s
                discuss how we can bring your vision to life.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex min-h-12 items-center justify-center rounded-xl bg-emerald-brand-500 px-7 py-3.5 text-sm font-extrabold text-navy-950 shadow-brand-md transition duration-150 hover:bg-emerald-brand-400 hover:shadow-brand-lg"
                >
                  Schedule a Technical Call →
                </Link>

                <Link
                  href="/services"
                  className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition duration-150 hover:border-white/35 hover:bg-white/10"
                >
                  Explore Services
                </Link>
              </div>

              {/* Trust badges */}
              <div className="mt-10 flex flex-wrap items-center justify-center gap-6 border-t border-white/10 pt-8 text-xs font-medium text-cool-gray-300">
                <span className="flex items-center gap-1.5">
                  <svg
                    className="size-4 text-emerald-brand-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  24-hour response time
                </span>

                <span className="flex items-center gap-1.5">
                  <svg
                    className="size-4 text-emerald-brand-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Direct senior developer
                </span>

                <span className="flex items-center gap-1.5">
                  <svg
                    className="size-4 text-emerald-brand-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                    />
                  </svg>
                  100% IP &amp; code ownership
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}
    </div>
  );
}
