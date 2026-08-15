import type { Content } from "@prismicio/client";

import type { SliceComponentProps } from "@prismicio/react";

import CaseStudyTextSection from "@/components/prismic/CaseStudyTextSection";

export type RichTextProps = SliceComponentProps<Content.RichTextSlice>;

export default function RichText({ slice }: RichTextProps) {
  return (
    <div
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <CaseStudyTextSection
        heading={slice.primary.heading}
        content={slice.primary.content}
        background="white"
      />
    </div>
  );
}
