import Link from "next/link";
import { PrismicNextImage } from "@prismicio/next";
import { ArrowRight } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
    <Card className="group flex h-full flex-col overflow-hidden rounded-3xl border-cool-gray-300 bg-white shadow-brand-sm transition duration-300 hover:-translate-y-1 hover:border-navy-950 hover:shadow-brand-lg">
      <Link
        href={`/projects/${project.uid}`}
        aria-label={`View ${title} case study`}
        className="relative block aspect-[16/10] overflow-hidden bg-navy-900"
      >
        {imageField?.url ? (
          <>
            <PrismicNextImage
              field={imageField}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top transition duration-500 group-hover:scale-105"
              fallbackAlt=""
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent"
            />
          </>
        ) : (
          <div className="grid size-full place-items-center bg-navy-900">
            <span className="text-sm font-semibold text-cool-gray-300">
              Project preview
            </span>
          </div>
        )}

        {project.data.status && (
          <div className="absolute bottom-4 left-4 z-20">
            <Badge
              variant="navyMuted"
              className="border-white/20 bg-navy-950/85 backdrop-blur text-cool-gray-100"
            >
              {project.data.status}
            </Badge>
          </div>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        {project.data.industry && (
          <div className="mb-2">
            <Badge
              variant="emerald"
              className="text-[10px] uppercase tracking-wider"
            >
              {project.data.industry}
            </Badge>
          </div>
        )}

        <h2 className="text-2xl font-extrabold tracking-tight text-navy-900">
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
          <Button
            asChild
            variant="ghost"
            className="group/link -ml-4 px-4 font-bold text-emerald-brand-700 hover:text-emerald-brand-800 hover:bg-emerald-brand-50/50"
          >
            <Link href={`/projects/${project.uid}`}>
              View Case Study
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
}
