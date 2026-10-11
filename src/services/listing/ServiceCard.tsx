import Link from "next/link";
import { PrismicNextImage } from "@prismicio/next";
import { ArrowRight } from "lucide-react";

import Card3D from "@/components/3d/Card3D";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { ServiceDocument } from "../../../prismicio-types";

interface ServiceCardProps {
  service: ServiceDocument;
  priority?: boolean;
}

export default function ServiceCard({
  service,
  priority = false,
}: ServiceCardProps) {
  const title = service.data.service_name || "Untitled service";

  const description =
    service.data.short_description || "Service details are being updated.";

  const cardImage = service.data.card_image?.url
    ? service.data.card_image
    : service.data.hero_image;

  return (
    <Card3D className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0b1120]/80 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-emerald-500/40 hover:shadow-[0_0_35px_rgba(16,185,129,0.15)]">
      <Link
        href={`/services/${service.uid}`}
        aria-label={`View ${title} service`}
        className="relative block aspect-[16/10] overflow-hidden bg-[#030712]"
      >
        <PrismicNextImage
          field={cardImage}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition duration-700 ease-out group-hover:scale-105"
          fallbackAlt=""
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b1120] via-transparent to-transparent opacity-80"
        />

        {service.data.status && (
          <div className="absolute bottom-4 left-4 z-20">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
              <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {service.data.status}
            </span>
          </div>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h2 className="text-2xl font-bold tracking-tight text-white transition-colors duration-200 group-hover:text-emerald-400">
          <Link
            href={`/services/${service.uid}`}
            className="rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            {title}
          </Link>
        </h2>

        <p className="mt-3 text-sm leading-7 text-cool-gray-300">
          {description}
        </p>

        {service.data.technologies.length > 0 && (
          <ul
            className="mt-5 flex flex-wrap gap-2"
            aria-label={`${title} technologies`}
          >
            {service.data.technologies.slice(0, 4).map((item) =>
              item.technology ? (
                <li key={item.technology}>
                  <Badge
                    variant="secondary"
                    className="border-white/10 bg-white/[0.04] text-cool-gray-300 hover:text-white"
                  >
                    {item.technology}
                  </Badge>
                </li>
              ) : null,
            )}
          </ul>
        )}

        <div className="mt-auto pt-7">
          <Button
            asChild
            variant="ghost"
            className="group/link -ml-4 px-4 font-semibold text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10"
          >
            <Link href={`/services/${service.uid}`}>
              View Service
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </Card3D>
  );
}
