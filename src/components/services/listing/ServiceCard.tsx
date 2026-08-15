import Link from "next/link";

import { PrismicNextImage } from "@prismicio/next";

import type { ServiceDocument } from "../../../../prismicio-types";

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

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-cool-gray-200 bg-white shadow-brand-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-brand-300 hover:shadow-brand-lg">
      <Link
        href={`/services/${service.uid}`}
        aria-label={`View ${title} service`}
        className="relative block aspect-[16/10] overflow-hidden bg-navy-800"
      >
        <PrismicNextImage
          field={service.data.card_image}
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
          <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-navy-950/85 px-3 py-1.5 text-xs font-bold text-cool-gray-100 backdrop-blur">
            {service.data.status}
          </span>
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
                <li
                  key={item.technology}
                  className="rounded-full bg-cool-gray-100 px-3 py-1.5 text-xs font-semibold text-navy-700"
                >
                  {item.technology}
                </li>
              ) : null,
            )}
          </ul>
        )}

        <div className="mt-auto pt-7">
          <Link
            href={`/services/${service.uid}`}
            className="group/link inline-flex min-h-11 items-center gap-2 rounded-lg font-bold text-emerald-brand-700 hover:text-emerald-brand-800"
          >
            View Service
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
