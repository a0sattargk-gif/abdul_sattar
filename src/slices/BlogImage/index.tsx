import type { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import type { SliceComponentProps } from "@prismicio/react";

export type BlogImageProps = SliceComponentProps<Content.BlogImageSlice>;

export default function BlogImage({ slice }: BlogImageProps) {
  if (!slice.primary.image?.url) {
    return null;
  }

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-white py-6 sm:py-8 lg:py-10"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-cool-gray-200 bg-cool-gray-100">
          <PrismicNextImage
            field={slice.primary.image}
            width={1600}
            height={900}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1024px"
            className="h-auto w-full object-cover"
            fallbackAlt=""
          />
        </div>
      </div>
    </section>
  );
}
