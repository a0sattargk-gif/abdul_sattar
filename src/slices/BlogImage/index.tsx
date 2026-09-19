import type { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import type { SliceComponentProps } from "@prismicio/react";

export type BlogImageProps = SliceComponentProps<Content.BlogImageSlice>;

export default function BlogImage({ slice }: BlogImageProps) {
  if (!slice.primary.image?.url) {
    return null;
  }

  const altText = slice.primary.image.alt || "";

  return (
    <figure
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="my-8 sm:my-10"
    >
      <div className="relative overflow-hidden rounded-2xl border border-cool-gray-200 bg-cool-gray-100 shadow-sm">
        <PrismicNextImage
          field={slice.primary.image}
          width={1600}
          height={900}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
          className="h-auto w-full object-cover"
          fallbackAlt=""
        />
      </div>
      {altText && (
        <figcaption className="mt-2.5 text-center text-xs text-cool-gray-500">
          {altText}
        </figcaption>
      )}
    </figure>
  );
}
