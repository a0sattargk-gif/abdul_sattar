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
      aria-label="Project screenshots"
      className="bg-cool-gray-50 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {images.map((item, index) => (
            <figure
              key={`${item.image.url}-${index}`}
              className="overflow-hidden rounded-3xl border border-cool-gray-200 bg-white p-2 shadow-brand-sm"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-navy-800">
                <PrismicNextImage
                  field={item.image}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  fallbackAlt=""
                />
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
