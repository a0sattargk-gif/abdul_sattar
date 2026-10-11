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
      className="bg-transparent py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b1120]/80 px-6 py-10 shadow-2xl backdrop-blur-xl sm:px-10 sm:py-12 lg:px-14">
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-20 size-64 rounded-full bg-emerald-500/20 blur-3xl"
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
                className="mt-4 max-w-xl text-slate-200"
              />
            </div>

            {isFilled.link(slice.primary.btn) && (
              <PrismicNextLink
                field={slice.primary.btn}
                className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 px-7 py-3.5 font-bold text-slate-950 shadow-lg shadow-emerald-500/20 transition duration-300 hover:shadow-emerald-500/40 hover:brightness-110"
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
