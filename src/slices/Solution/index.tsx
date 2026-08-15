import type { Content } from "@prismicio/client";

import type { SliceComponentProps } from "@prismicio/react";

import CaseStudyTextSection from "@/components/prismic/CaseStudyTextSection";

export type SolutionProps = SliceComponentProps<Content.SolutionSlice>;

export default function Solution({ slice }: SolutionProps) {
  return (
    <div
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <CaseStudyTextSection
        heading={slice.primary.heading}
        content={slice.primary.content}
        background="gray"
      />
    </div>
  );
}
