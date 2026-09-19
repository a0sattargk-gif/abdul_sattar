import type { RichTextField } from "@prismicio/client";

import PortfolioRichText from "@/components/prismic/PortfolioRichText";

interface CaseStudyTextSectionProps {
  heading: string | null;
  content: RichTextField;
  background?: "white" | "gray" | "dark";
}

function getEyebrow(heading: string | null, background: string) {
  if (!heading) {
    return background === "dark" ? "Technical Architecture" : "Deep Dive";
  }

  const lower = heading.toLowerCase();
  if (lower.includes("challenge") || lower.includes("problem")) {
    return "The Challenge & Constraints";
  }
  if (lower.includes("architect") || lower.includes("system")) {
    return "Technical Architecture";
  }
  if (lower.includes("solution") || lower.includes("approach")) {
    return "Implementation & Solution";
  }
  if (lower.includes("process") || lower.includes("workflow")) {
    return "Engineering Workflow";
  }

  return background === "dark" ? "Deep Dive" : "Case Study Overview";
}

export default function CaseStudyTextSection({
  heading,
  content,
  background = "white",
}: CaseStudyTextSectionProps) {
  const isDark = background === "dark";
  const eyebrow = getEyebrow(heading, background);

  const sectionClasses = {
    white: "border-b border-cool-gray-200/70 bg-white",
    gray: "border-b border-cool-gray-200/70 bg-cool-gray-50/60",
    dark: "border-y border-white/10 bg-navy-950 text-white relative overflow-hidden",
  };

  return (
    <section
      className={[
        sectionClasses[background],
        "py-16 sm:py-20 lg:py-24",
      ].join(" ")}
    >
      {isDark && (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 size-80 rounded-full bg-emerald-brand-500/10 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(203,213,225,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(203,213,225,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"
          />
        </>
      )}

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className={[
              "h-1.5 w-1.5 rounded-full",
              isDark ? "bg-emerald-brand-400" : "bg-emerald-brand-600",
            ].join(" ")}
          />
          <p
            className={[
              "text-xs font-bold uppercase tracking-[0.18em]",
              isDark ? "text-emerald-brand-400" : "text-emerald-brand-800",
            ].join(" ")}
          >
            {eyebrow}
          </p>
        </div>

        {heading && (
          <h2
            className={[
              "mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl",
              isDark ? "text-white" : "text-navy-950",
            ].join(" ")}
          >
            {heading}
          </h2>
        )}

        <span
          aria-hidden="true"
          className={[
            "mt-4 block h-1 w-12 rounded-full",
            isDark ? "bg-emerald-brand-400" : "bg-emerald-brand-600",
          ].join(" ")}
        />

        <div className="mt-8">
          <PortfolioRichText
            field={content}
            dark={isDark}
            className="leading-relaxed"
          />
        </div>
      </div>
    </section>
  );
}
