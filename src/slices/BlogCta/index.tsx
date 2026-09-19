import type { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, type SliceComponentProps } from "@prismicio/react";

export type BlogCtaProps = SliceComponentProps<Content.BlogCtaSlice>;

export default function BlogCta({ slice }: BlogCtaProps) {
  const hasImage = Boolean(slice.primary.image?.url);

  return (
    <aside
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="my-12 overflow-hidden rounded-3xl border border-navy-800 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 shadow-xl"
    >
      <div
        className={[
          "grid items-center",
          hasImage ? "lg:grid-cols-[1.2fr_0.8fr]" : "grid-cols-1",
        ].join(" ")}
      >
        <div className="p-8 sm:p-10">
          <span className="inline-block rounded-full bg-emerald-brand-500/10 border border-emerald-brand-500/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-brand-400 mb-3">
            Next Steps
          </span>

          {slice.primary.heading && (
            <h3 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              {slice.primary.heading}
            </h3>
          )}

          <div className="mt-3 text-base leading-relaxed text-cool-gray-300 [&_p]:my-2">
            <PrismicRichText field={slice.primary.description} />
          </div>

          {slice.primary.button && slice.primary.button.link_type !== "Any" && (
            <div className="mt-6">
              <PrismicNextLink
                field={slice.primary.button}
                className="inline-flex min-h-11 items-center justify-center rounded-xl bg-emerald-brand-500 px-6 py-3 text-sm font-bold text-navy-950 shadow-sm transition hover:bg-emerald-brand-400 hover:shadow-md"
              />
            </div>
          )}
        </div>

        {hasImage && (
          <div className="relative min-h-[240px] h-full w-full overflow-hidden">
            <PrismicNextImage
              field={slice.primary.image}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
              fallbackAlt=""
            />
          </div>
        )}
      </div>
    </aside>
  );
}
