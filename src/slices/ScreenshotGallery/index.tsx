import type { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import type { SliceComponentProps } from "@prismicio/react";

export type ScreenshotGalleryProps =
  SliceComponentProps<Content.ScreenshotGallerySlice>;

export default function ScreenshotGallery({ slice }: ScreenshotGalleryProps) {
  const images = slice.primary.images.filter((item) => item.image.url);

  if (images.length === 0) {
    return null;
  }

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      aria-label="Project screenshots & visual interface"
      className="border-b border-white/10 bg-transparent py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.16em] text-emerald-400">
            <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
            Visual Showcase
          </div>

          <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
            Interface &amp; Product Walkthrough
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-200 sm:text-base">
            Detailed views of production user journeys, UI components, and
            system architecture.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {images.map((item, index) => (
            <figure
              key={`${item.image.url}-${index}`}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0b1120]/80 p-3 shadow-2xl backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-[0_0_25px_rgba(16,185,129,0.15)]"
            >
              {/* Window chrome header */}
              <div className="flex items-center justify-between border-b border-white/5 px-3 py-2">
                <div className="flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-rose-500/60" />
                  <span className="size-2 rounded-full bg-amber-500/60" />
                  <span className="size-2 rounded-full bg-emerald-500/60" />
                </div>
                {item.image.alt && (
                  <span className="truncate max-w-[200px] text-[11px] font-medium text-slate-300">
                    {item.image.alt}
                  </span>
                )}
                <span className="text-[10px] uppercase font-bold text-slate-300">
                  #{String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="relative mt-2 aspect-[16/10] overflow-hidden rounded-2xl bg-black/60">
                <PrismicNextImage
                  field={item.image}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  fallbackAlt=""
                />
              </div>

              {item.image.alt && (
                <figcaption className="mt-3 px-2 text-center text-xs text-slate-300">
                  {item.image.alt}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
