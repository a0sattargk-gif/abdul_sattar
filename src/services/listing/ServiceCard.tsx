import Link from "next/link";
import { PrismicNextImage } from "@prismicio/next";
import { ArrowRight } from "lucide-react";

import { Card } from "@/components/ui/card";
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
    <Card className="group flex h-full flex-col overflow-hidden rounded-3xl border-cool-gray-300 bg-white shadow-brand-sm transition duration-300 hover:-translate-y-1 hover:border-navy-950 hover:shadow-brand-lg">
      <Link
        href={`/services/${service.uid}`}
        aria-label={`View ${title} service`}
        className="relative block aspect-[16/10] overflow-hidden bg-navy-800"
      >
        <PrismicNextImage
          field={cardImage}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition duration-500 group-hover:scale-105"
          fallbackAlt=""
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-navy-950/65 via-transparent to-transparent"
        />

        {service.data.status && (
          <div className="absolute bottom-4 left-4">
            <Badge
              variant="navyMuted"
              className="border-white/20 bg-navy-950/85 backdrop-blur text-cool-gray-100"
            >
              {service.data.status}
            </Badge>
          </div>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h2 className="text-2xl font-extrabold tracking-tight text-navy-900">
          <Link
            href={`/services/${service.uid}`}
            className="rounded-md transition-colors hover:text-emerald-brand-700"
          >
            {title}
          </Link>
        </h2>

        <p className="mt-3 text-sm leading-7 text-cool-gray-700">
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
                    className="font-semibold text-navy-700"
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
            className="group/link -ml-4 px-4 font-bold text-emerald-brand-700 hover:text-emerald-brand-800 hover:bg-emerald-brand-50/50"
          >
            <Link href={`/services/${service.uid}`}>
              View Service
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
}
