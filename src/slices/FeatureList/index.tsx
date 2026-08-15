import type { Content } from "@prismicio/client";

import type { SliceComponentProps } from "@prismicio/react";

import PortfolioRichText from "@/components/prismic/PortfolioRichText";

export type FeatureListProps = SliceComponentProps<Content.FeatureListSlice>;

export default function FeatureList({ slice }: FeatureListProps) {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {slice.primary.heading && (
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              {slice.primary.heading}
            </h2>
          </div>
        )}

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {slice.primary.repeater.map((item, index) => (
            <article
              key={`${item.title}-${index}`}
              className="h-full rounded-2xl border border-cool-gray-200 bg-cool-gray-50 p-5 transition duration-300 hover:-translate-y-1 hover:border-emerald-brand-300 hover:bg-white hover:shadow-brand-md sm:p-6"
            >
              <span className="grid size-10 place-items-center rounded-xl bg-emerald-brand-500/10 text-sm font-extrabold text-emerald-brand-700">
                {String(index + 1).padStart(2, "0")}
              </span>

              {item.title && (
                <h3 className="mt-4 text-lg font-extrabold text-navy-900">
                  {item.title}
                </h3>
              )}

              <PortfolioRichText
                field={item.desc}
                className="mt-2 text-sm leading-6"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
