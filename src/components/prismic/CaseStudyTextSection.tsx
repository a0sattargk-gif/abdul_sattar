import type { RichTextField } from "@prismicio/client";

import PortfolioRichText from "@/components/prismic/PortfolioRichText";

interface CaseStudyTextSectionProps {
  heading: string | null;
  content: RichTextField;
  background?: "white" | "gray" | "dark";
}

export default function CaseStudyTextSection({
  heading,
  content,
  background = "white",
}: CaseStudyTextSectionProps) {
  const isDark = background === "dark";

  const sectionClasses = {
    white: "bg-white",
    gray: "bg-cool-gray-50",
    dark: "bg-navy-900",
  };

  return (
    <section
      className={[sectionClasses[background], "py-16 sm:py-20 lg:py-24"].join(
        " ",
      )}
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {heading && (
          <h2
            className={[
              "text-3xl font-extrabold tracking-tight sm:text-4xl",
              isDark ? "text-white" : "text-navy-900",
            ].join(" ")}
          >
            {heading}
          </h2>
        )}

        <PortfolioRichText
          field={content}
          dark={isDark}
          className={heading ? "mt-6" : ""}
        />
      </div>
    </section>
  );
}
