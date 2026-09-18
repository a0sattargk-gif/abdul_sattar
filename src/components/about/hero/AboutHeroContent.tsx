import Link from "next/link";
import type { AboutHeroContent as AboutHeroContentType } from "@/types/about";

interface AboutHeroContentProps {
  content: AboutHeroContentType;
}

export default function AboutHeroContent({ content }: AboutHeroContentProps) {
  return (
    <div className="max-w-2xl">
      {/* Eyebrow */}
      <div className="flex items-center gap-3">
        <span aria-hidden="true" className="h-px w-8 bg-emerald-brand-700" />
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-brand-700">
          {content.eyebrow}
        </p>
      </div>

      {/* Main Heading */}
      <h1
        id="about-hero-heading"
        className="mt-4 text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl lg:text-5xl lg:leading-[1.12]"
      >
        {content.title}{" "}
        <span className="text-emerald-brand-700">
          {content.highlightedText}
        </span>
      </h1>

      {/* Narrative Lead */}
      <p className="mt-5 text-base leading-relaxed text-navy-900 sm:text-lg">
        {content.description}
      </p>

      <p className="mt-3 text-sm leading-relaxed text-cool-gray-700 sm:text-base">
        {content.secondaryDescription}
      </p>

      {/* Compact Credibility Stats Strip */}
      <div className="my-8 grid grid-cols-3 divide-x divide-cool-gray-200 rounded-2xl border border-cool-gray-200 bg-navy-50/30 p-3 text-center sm:p-4 shadow-2xs">
        {content.stats.map((stat) => (
          <div key={stat.id} className="px-2">
            <div className="text-xl font-extrabold tracking-tight text-navy-950 sm:text-2xl font-mono sm:font-sans">
              {stat.value}
            </div>
            <div className="mt-1 text-[11px] font-bold uppercase tracking-wider text-emerald-brand-800">
              {stat.label}
            </div>
            {stat.sublabel && (
              <div className="mt-0.5 text-[11px] font-medium text-cool-gray-700 hidden sm:block">
                {stat.sublabel}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center gap-4">
        <Link
          href={content.primaryAction.href}
          aria-label={content.primaryAction.ariaLabel}
          className="group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-xl bg-navy-950 px-6 py-3 text-sm font-bold text-white shadow-brand-sm transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-brand-700"
        >
          {content.primaryAction.label}
          <span
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:translate-x-1"
          >
            →
          </span>
        </Link>

        <Link
          href={content.secondaryAction.href}
          aria-label={content.secondaryAction.ariaLabel}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-cool-gray-300 bg-white px-6 py-3 text-sm font-bold text-navy-900 shadow-2xs transition duration-200 hover:-translate-y-0.5 hover:border-navy-950 hover:bg-navy-50/50 hover:text-navy-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-950"
        >
          {content.secondaryAction.label}
        </Link>
      </div>
    </div>
  );
}
