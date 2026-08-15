import { isFilled, type Content } from "@prismicio/client";

import { PrismicNextLink } from "@prismicio/next";

import type { SliceComponentProps } from "@prismicio/react";

import PortfolioRichText from "@/components/prismic/PortfolioRichText";

export type CtaProps = SliceComponentProps<Content.CtaSlice>;

export default function Cta({ slice }: CtaProps) {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-cool-gray-50 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-navy-900 px-6 py-10 shadow-brand-lg sm:px-10 sm:py-12 lg:px-14">
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-20 size-64 rounded-full bg-emerald-brand-500/15 blur-3xl"
          />

          <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              {slice.primary.heading && (
                <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  {slice.primary.heading}
                </h2>
              )}

              <PortfolioRichText
                field={slice.primary.desc}
                dark
                className="mt-4 max-w-xl"
              />
            </div>

            {isFilled.link(slice.primary.btn) && (
              <PrismicNextLink
                field={slice.primary.btn}
                className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-lg bg-emerald-brand-500 px-6 py-3 font-bold text-navy-950 transition hover:-translate-y-0.5 hover:bg-emerald-brand-400"
              >
                {slice.primary.btn.text || "Start a Project"}
              </PrismicNextLink>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
