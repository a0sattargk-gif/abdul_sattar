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
        <span aria-hidden="true" className="h-px w-8 bg-emerald-400" />
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
          {content.eyebrow}
        </p>
      </div>

      {/* Main Heading */}
      <h1
        id="about-hero-heading"
        className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.12]"
      >
        {content.title}{" "}
        <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
          {content.highlightedText}
        </span>
      </h1>

      {/* Narrative Lead */}
      <p className="mt-5 text-base leading-relaxed text-slate-200 sm:text-lg">
        {content.description}
      </p>

      <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
        {content.secondaryDescription}
      </p>

      {/* Compact Credibility Stats Strip */}
      <div className="my-8 grid grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/10 bg-[#0b1120]/80 p-3 text-center sm:p-4 shadow-xl backdrop-blur-xl">
        {content.stats.map((stat) => (
          <div key={stat.id} className="px-2">
            <div className="text-xl font-extrabold tracking-tight text-white sm:text-2xl font-mono sm:font-sans">
              {stat.value}
            </div>
            <div className="mt-1 text-[11px] font-bold uppercase tracking-wider text-emerald-400">
              {stat.label}
            </div>
            {stat.sublabel && (
              <div className="mt-0.5 text-[11px] font-medium text-slate-300 hidden sm:block">
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
          className="group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 px-7 py-3 text-sm font-bold text-navy-950 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
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
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition duration-200 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
        >
          {content.secondaryAction.label}
        </Link>
      </div>
    </div>
  );
}
