import type { Content } from "@prismicio/client";

import { PrismicRichText, type SliceComponentProps } from "@prismicio/react";

export type BlogTextProps = SliceComponentProps<Content.BlogTextSlice>;

export default function BlogText({ slice }: BlogTextProps) {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-white py-8 sm:py-10"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div
          className={[
            "text-base leading-8 text-cool-gray-700 sm:text-lg",
            "[&_p]:my-5",
            "[&_h2]:mb-4 [&_h2]:mt-12 [&_h2]:text-3xl [&_h2]:font-extrabold [&_h2]:tracking-tight [&_h2]:text-navy-900",
            "[&_h3]:mb-3 [&_h3]:mt-9 [&_h3]:text-2xl [&_h3]:font-extrabold [&_h3]:text-navy-900",
            "[&_h4]:mb-3 [&_h4]:mt-7 [&_h4]:text-xl [&_h4]:font-bold [&_h4]:text-navy-900",
            "[&_strong]:font-bold [&_strong]:text-navy-900",
            "[&_ul]:my-5 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6",
            "[&_ol]:my-5 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6",
            "[&_pre]:my-7 [&_pre]:overflow-x-auto [&_pre]:rounded-2xl [&_pre]:bg-navy-950 [&_pre]:p-5 [&_pre]:text-sm [&_pre]:text-cool-gray-100",
            "[&_blockquote]:my-7 [&_blockquote]:border-l-4 [&_blockquote]:border-emerald-brand-500 [&_blockquote]:bg-cool-gray-50 [&_blockquote]:px-5 [&_blockquote]:py-3",
            "[&_a]:font-semibold [&_a]:text-emerald-brand-700 [&_a]:underline [&_a]:underline-offset-4",
          ].join(" ")}
        >
          <PrismicRichText field={slice.primary.content} />
        </div>
      </div>
    </section>
  );
}
