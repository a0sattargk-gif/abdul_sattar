import Link from "next/link";

import type { HomeHeroContent } from "@/types/home";

interface HeroContentProps {
  content: HomeHeroContent;
}

export default function HeroContent({ content }: HeroContentProps) {
  return (
    <div className="max-w-3xl">
      <p className="inline-flex items-center gap-2 rounded-full border border-emerald-brand-300/40 bg-emerald-brand-500/15 px-4 py-2 text-sm font-semibold text-emerald-brand-300">
        <span
          aria-hidden="true"
          className="size-2 rounded-full bg-emerald-brand-400"
        />

        {content.eyebrow}
      </p>

      <h1
        id="home-hero-heading"
        className="mt-7 max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
      >
        {content.title}{" "}
        <span className="text-emerald-brand-400">
          {content.highlightedText}
        </span>
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-cool-gray-200">
        {content.description}
      </p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
        <Link
          href={content.primaryAction.href}
          aria-label={content.primaryAction.ariaLabel}
          className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-emerald-brand-500 px-6 py-3 font-bold text-navy-950 shadow-accent transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-brand-400"
        >
          {content.primaryAction.label}

          <ArrowRightIcon />
        </Link>

        <Link
          href={content.secondaryAction.href}
          aria-label={content.secondaryAction.ariaLabel}
          className="inline-flex min-h-12 items-center justify-center rounded-lg border border-cool-gray-300/30 bg-white/5 px-6 py-3 font-bold text-white transition duration-200 hover:border-emerald-brand-300/60 hover:bg-white/10"
        >
          {content.secondaryAction.label}
        </Link>
      </div>

      <div className="mt-10">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-cool-gray-300">
          Core technologies
        </p>

        <ul className="mt-4 flex flex-wrap gap-2" role="list">
          {content.technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-full border border-cool-gray-300/20 bg-white/5 px-3 py-1.5 text-sm font-medium text-cool-gray-200"
            >
              {technology}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="size-5 transition-transform duration-200 group-hover:translate-x-1"
    >
      <path
        d="M4 10H16M11 5L16 10L11 15"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
