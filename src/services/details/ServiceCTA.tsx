import Link from "next/link";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

import type { ServiceDocument } from "../../../prismicio-types";

interface ServiceCTAProps {
  service: ServiceDocument;
}

export default function ServiceCTA({ service }: ServiceCTAProps) {
  const ctaData = service.data.cta?.[0];
  const serviceTitle = service.data.service_name || "this service";

  const heading =
    ctaData?.cta_heading ||
    `Ready to Elevate Your Product with ${serviceTitle}?`;

  const hasCustomDesc =
    Boolean(ctaData?.cta_description && ctaData.cta_description.length > 0);

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-navy-800 bg-navy-950 px-6 py-14 text-center shadow-2xl sm:px-12 sm:py-16">
          {/* Ambient Glows */}
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
              {heading}
            </h2>

            {hasCustomDesc ? (
              <div className="mt-4 text-sm leading-relaxed text-cool-gray-300 sm:text-base [&_p]:leading-relaxed">
                <PrismicRichText field={ctaData?.cta_description} />
              </div>
            ) : (
              <p className="mt-4 text-sm leading-relaxed text-cool-gray-300 sm:text-base">
                Let&apos;s discuss your technical architecture, timeline, and
                goals. You&apos;ll receive an actionable scoping roadmap, clear
                milestones, and a fixed investment proposal.
              </p>
            )}

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              {ctaData?.cta_button && ctaData.cta_button.link_type !== "Any" ? (
                <PrismicNextLink
                  field={ctaData.cta_button}
                  className="inline-flex min-h-12 items-center justify-center rounded-xl bg-emerald-brand-500 px-7 py-3.5 text-sm font-extrabold text-navy-950 shadow-brand-md transition duration-150 hover:bg-emerald-brand-400 hover:shadow-brand-lg"
                >
                  Schedule a Consultation →
                </PrismicNextLink>
              ) : (
                <Link
                  href="/contact"
                  className="inline-flex min-h-12 items-center justify-center rounded-xl bg-emerald-brand-500 px-7 py-3.5 text-sm font-extrabold text-navy-950 shadow-brand-md transition duration-150 hover:bg-emerald-brand-400 hover:shadow-brand-lg"
                >
                  Schedule a Consultation →
                </Link>
              )}

              <Link
                href="/services"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition duration-150 hover:border-white/35 hover:bg-white/10"
              >
                Browse All Services
              </Link>
            </div>

            {/* Value Badges */}
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
                Fast 24-hour response
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
                No obligation technical scope
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
  );
}
