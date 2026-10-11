import type { Content } from "@prismicio/client";

import type { SliceComponentProps } from "@prismicio/react";

import PortfolioRichText from "@/components/prismic/PortfolioRichText";

export type FeatureListProps = SliceComponentProps<Content.FeatureListSlice>;

export default function FeatureList({ slice }: FeatureListProps) {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-transparent py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {slice.primary.heading && (
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              {slice.primary.heading}
            </h2>
          </div>
        )}

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {slice.primary.repeater.map((item, index) => (
            <article
              key={`${item.title}-${index}`}
              className="h-full rounded-2xl border border-white/10 bg-[#0b1120]/80 p-5 shadow-xl backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-[0_0_25px_rgba(16,185,129,0.15)] sm:p-6"
            >
              <span className="grid size-10 place-items-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 font-mono text-sm font-extrabold text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.2)]">
                {String(index + 1).padStart(2, "0")}
              </span>

              {item.title && (
                <h3 className="mt-4 text-lg font-extrabold text-white">
                  {item.title}
                </h3>
              )}

              <PortfolioRichText
                field={item.desc}
                className="mt-2 text-sm leading-6 text-slate-200"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
