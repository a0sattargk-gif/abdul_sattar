import Link from "next/link";
import { PrismicNextImage } from "@prismicio/next";
import { ArrowRight } from "lucide-react";

import Card3D from "@/components/3d/Card3D";
import { Button } from "@/components/ui/button";
import type { ProjectDocument } from "../../../../prismicio-types";

interface ProjectCardProps {
  project: ProjectDocument;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const title = project.data.project_name || "Untitled project";

  const description =
    project.data.project_description || "Project details are being prepared.";

  const imageField = project.data.card_thumnail?.url
    ? project.data.card_thumnail
    : project.data.hero_banner;

  return (
    <Card3D className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0b1120]/80 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-emerald-500/40 hover:shadow-[0_0_35px_rgba(16,185,129,0.15)]">
      <Link
        href={`/projects/${project.uid}`}
        aria-label={`View ${title} case study`}
        className="relative block aspect-[16/10] overflow-hidden bg-[#030712]"
      >
        {imageField?.url ? (
          <>
            <PrismicNextImage
              field={imageField}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top transition duration-700 ease-out group-hover:scale-105"
              fallbackAlt=""
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b1120] via-transparent to-transparent opacity-80"
            />
          </>
        ) : (
          <div className="grid size-full place-items-center bg-[#0b1120]">
            <span className="text-sm font-semibold text-slate-300">
              Project preview
            </span>
          </div>
        )}

        {project.data.status && (
          <div className="absolute bottom-4 left-4 z-20">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
              <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {project.data.status}
            </span>
          </div>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        {project.data.industry && (
          <div className="mb-3">
            <span className="inline-flex items-center rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-semibold tracking-wider uppercase text-emerald-400">
              {project.data.industry}
            </span>
          </div>
        )}

        <h2 className="text-2xl font-bold tracking-tight text-white transition-colors duration-200 group-hover:text-emerald-400">
          <Link
            href={`/projects/${project.uid}`}
            className="rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            {title}
          </Link>
        </h2>

        <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-200">
          {description}
        </p>

        <div className="mt-auto pt-7">
          <Button
            asChild
            variant="ghost"
            className="group/link -ml-4 px-4 font-semibold text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10"
          >
            <Link href={`/projects/${project.uid}`}>
              View Case Study
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </Card3D>
  );
}
