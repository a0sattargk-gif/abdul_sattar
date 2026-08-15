import type { Content } from "@prismicio/client";

import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

import { PrismicRichText, type SliceComponentProps } from "@prismicio/react";

export type BlogCtaProps = SliceComponentProps<Content.BlogCtaSlice>;

export default function BlogCta({ slice }: BlogCtaProps) {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-white py-14 sm:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-3xl border border-navy-800 bg-navy-900 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="p-6 sm:p-8 lg:p-10">
            {slice.primary.heading && (
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                {slice.primary.heading}
              </h2>
            )}

            <div className="mt-4 max-w-xl text-base leading-7 text-cool-gray-200">
              <PrismicRichText field={slice.primary.description} />
            </div>

            {slice.primary.button.link_type !== "Any" && (
              <PrismicNextLink
                field={slice.primary.button}
                className="mt-6 inline-flex min-h-12 items-center justify-center rounded-lg bg-emerald-brand-500 px-6 py-3 font-bold text-navy-950 transition hover:bg-emerald-brand-400"
              />
            )}
          </div>

          <div className="relative min-h-64 h-full">
            <PrismicNextImage
              field={slice.primary.image}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
              fallbackAlt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
