import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

import type { ServiceDocument } from "../../../prismicio-types";

interface ServiceHeroProps {
  service: ServiceDocument;
}

export default function ServiceHero({ service }: ServiceHeroProps) {
  const title = service.data.service_name || "Untitled service";

  return (
    <section
      aria-labelledby="service-heading"
      className="relative overflow-hidden bg-navy-900 py-16 sm:py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(rgba(203,213,225,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(203,213,225,0.05)_1px,transparent_1px)] bg-[size:48px_48px]"
      />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-8">
        <div>
          {service.data.status && (
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-bold text-white">
              {service.data.status}
            </span>
          )}

          <h1
            id="service-heading"
            className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {title}
          </h1>

          {service.data.short_description && (
            <p className="mt-5 max-w-2xl text-base leading-7 text-cool-gray-200 sm:text-lg">
              {service.data.short_description}
            </p>
          )}

          <dl className="mt-7 grid gap-3 sm:grid-cols-3">
            {service.data.typical_timeline && (
              <div className="rounded-xl border border-cool-gray-300/20 bg-white/5 p-4">
                <dt className="text-xs text-cool-gray-300">Timeline</dt>

                <dd className="mt-1 text-sm font-bold text-white">
                  {service.data.typical_timeline}
                </dd>
              </div>
            )}

            {service.data.delivery_model && (
              <div className="rounded-xl border border-cool-gray-300/20 bg-white/5 p-4">
                <dt className="text-xs text-cool-gray-300">Delivery</dt>

                <dd className="mt-1 text-sm font-bold text-white">
                  {service.data.delivery_model}
                </dd>
              </div>
            )}

            {service.data.starting_price && (
              <div className="rounded-xl border border-cool-gray-300/20 bg-white/5 p-4">
                <dt className="text-xs text-cool-gray-300">Starting price</dt>

                <dd className="mt-1 text-sm font-bold text-white">
                  {service.data.starting_price}
                </dd>
              </div>
            )}
          </dl>

          {service.data.primary_cta.link_type !== "Any" && (
            <PrismicNextLink
              field={service.data.primary_cta}
              className="mt-7 inline-flex min-h-12 items-center justify-center rounded-lg bg-emerald-brand-500 px-6 py-3 font-bold text-navy-950 hover:bg-emerald-brand-400"
            >
              Discuss This Service
            </PrismicNextLink>
          )}
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-cool-gray-300/20 bg-navy-800 shadow-2xl">
          <PrismicNextImage
            field={service.data.hero_image}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover"
            fallbackAlt=""
          />
        </div>
      </div>
    </section>
  );
}
