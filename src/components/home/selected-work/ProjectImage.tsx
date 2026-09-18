import Link from "next/link";
import { PrismicNextImage } from "@prismicio/next";
import { FeaturedProject } from "@/types/selected-work";
 
 
interface ProjectImageProps {
  project: FeaturedProject;
  priority?: boolean;
}

export default function ProjectImage({
  project,
  priority = false,
}: ProjectImageProps) {
  if (!project.thumbnail?.url) {
    return null;
  }

  return (
    <Link
      href={`/projects/${project.uid}`}
      aria-label={`View ${project.name} case study`}
      className="group relative block overflow-hidden bg-cool-gray-100"
    >
      <PrismicNextImage
        field={project.thumbnail}
        priority={priority}
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="aspect-[16/10] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.025]"
        fallbackAlt=""
      />

      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 border border-navy-950/10"
      />
    </Link>
  );
}