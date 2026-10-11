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
    white: "border-b border-white/10 bg-transparent text-slate-200",
    gray: "border-b border-white/10 bg-white/[0.02] text-slate-200",
    dark: "border-y border-white/10 bg-[#0b1120]/60 text-white relative overflow-hidden backdrop-blur-md",
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
            className="pointer-events-none absolute -right-20 -top-20 size-80 rounded-full bg-emerald-500/10 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"
          />
        </>
      )}

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)]"
          />
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-400">
            {eyebrow}
          </p>
        </div>

        {heading && (
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
            {heading}
          </h2>
        )}

        <span
          aria-hidden="true"
          className="mt-4 block h-1 w-12 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.5)]"
        />

        <div className="mt-8">
          <PortfolioRichText
            field={content}
            dark={true}
            className="leading-relaxed text-slate-200"
          />
        </div>
      </div>
    </section>
  );
}
