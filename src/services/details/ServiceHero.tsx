import Link from "next/link";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { ServiceDocument } from "../../../prismicio-types";

interface ServiceHeroProps {
  service: ServiceDocument;
}

export default function ServiceHero({ service }: ServiceHeroProps) {
  const title = service.data.service_name || "Untitled service";

  return (
    <section
      aria-labelledby="service-heading"
      className="relative overflow-hidden bg-navy-900 py-14 sm:py-20 lg:py-24"
    >
      {/* Background glow & subtle grid */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute -left-28 -top-28 size-96 rounded-full bg-emerald-brand-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 size-96 rounded-full bg-emerald-brand-400/10 blur-3xl" />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(rgba(203,213,225,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(203,213,225,0.04)_1px,transparent_1px)] bg-[size:48px_48px]"
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
              href="/services"
              className="transition hover:text-emerald-brand-300"
            >
              Services
            </Link>
            <span aria-hidden="true" className="text-cool-gray-600">
              /
            </span>
            <span className="font-medium text-white">{title}</span>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 font-semibold text-emerald-brand-400 hover:text-emerald-brand-300 transition"
          >
            <svg
              className="h-4 w-4"
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
            All Services
          </Link>
        </nav>

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              {service.data.status && (
                <Badge
                  variant="emerald"
                  className="border-emerald-brand-400/30 bg-emerald-brand-500/15 text-emerald-brand-300 gap-1.5"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-brand-400 animate-pulse" />
                  {service.data.status}
                </Badge>
              )}
              <Badge
                variant="outline"
                className="border-white/20 bg-white/5 text-emerald-brand-400 text-xs font-bold uppercase tracking-[0.18em]"
              >
                Specialized Service
              </Badge>
            </div>

            <h1
              id="service-heading"
              className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight"
            >
              {title}
            </h1>

            {service.data.short_description && (
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-cool-gray-200 sm:text-lg">
                {service.data.short_description}
              </p>
            )}

            {/* Service Highlights / Fast Facts */}
            <dl className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {service.data.typical_timeline && (
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xs transition hover:border-white/20">
                  <dt className="flex items-center gap-1.5 text-xs font-medium text-cool-gray-300">
                    <svg
                      className="h-3.5 w-3.5 text-emerald-brand-400"
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
                    Typical Timeline
                  </dt>
                  <dd className="mt-1.5 text-sm font-bold text-white">
                    {service.data.typical_timeline}
                  </dd>
                </div>
              )}

              {service.data.delivery_model && (
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xs transition hover:border-white/20">
                  <dt className="flex items-center gap-1.5 text-xs font-medium text-cool-gray-300">
                    <svg
                      className="h-3.5 w-3.5 text-emerald-brand-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006A2.18 2.18 0 0118 15.75H6a2.18 2.18 0 01-1.5-.6M1.5 14.15v-5.45c0-1.08.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m0 0V5.25A2.25 2.25 0 019 3h6a2.25 2.25 0 012.25 2.25v2.25"
                      />
                    </svg>
                    Delivery Model
                  </dt>
                  <dd className="mt-1.5 text-sm font-bold text-white">
                    {service.data.delivery_model}
                  </dd>
                </div>
              )}

              {service.data.starting_price && (
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xs transition hover:border-white/20">
                  <dt className="flex items-center gap-1.5 text-xs font-medium text-cool-gray-300">
                    <svg
                      className="h-3.5 w-3.5 text-emerald-brand-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Investment
                  </dt>
                  <dd className="mt-1.5 text-sm font-bold text-emerald-brand-300">
                    {service.data.starting_price}
                  </dd>
                </div>
              )}
            </dl>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              {service.data.primary_cta.link_type !== "Any" ? (
                <Button
                  asChild
                  size="lg"
                  variant="emerald"
                  className="font-bold shadow-sm hover:shadow-md"
                >
                  <PrismicNextLink field={service.data.primary_cta}>
                    Discuss This Service
                  </PrismicNextLink>
                </Button>
              ) : (
                <Button
                  asChild
                  size="lg"
                  variant="emerald"
                  className="font-bold shadow-sm hover:shadow-md"
                >
                  <Link href="/contact">Discuss Your Project</Link>
                </Button>
              )}

              {service.data.pricing_plans &&
                service.data.pricing_plans.length > 0 && (
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10 hover:text-white"
                  >
                    <a href="#pricing">View Pricing Plans ↓</a>
                  </Button>
                )}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/15 bg-navy-800 shadow-2xl">
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
      </div>
    </section>
  );
}
