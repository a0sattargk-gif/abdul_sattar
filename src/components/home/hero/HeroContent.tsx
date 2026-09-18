import Link from "next/link";

import type { HomeHeroContent } from "@/types/home";

interface HeroContentProps {
  content: HomeHeroContent;
}

export default function HeroContent({
  content,
}: HeroContentProps) {
  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className="h-px w-8 bg-emerald-brand-700"
        />

        <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-brand-700">
          {content.eyebrow}
        </p>
      </div>

      <h1
        id="home-hero-heading"
        className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-[-0.035em] text-navy-950 sm:text-5xl lg:text-6xl"
      >
        {content.title}{" "}
        <span className="text-emerald-brand-700">
          {content.highlightedText}
        </span>
      </h1>

      <p className="mt-5 max-w-2xl text-base leading-7 text-cool-gray-600 sm:text-lg sm:leading-8">
        {content.description}
      </p>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <Link
          href={content.primaryAction.href}
          aria-label={content.primaryAction.ariaLabel}
          className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-navy-950 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-navy-800"
        >
          {content.primaryAction.label}
          <ArrowRightIcon />
        </Link>

        <Link
          href={content.secondaryAction.href}
          aria-label={content.secondaryAction.ariaLabel}
          className="inline-flex min-h-12 items-center justify-center rounded-md border border-cool-gray-300 bg-white px-6 py-3 text-sm font-bold text-navy-900 transition-colors hover:border-cool-gray-400"
        >
          {content.secondaryAction.label}
        </Link>
      </div>

      <div className="mt-8 border-t border-cool-gray-200 pt-5">
        <ul
          role="list"
          aria-label="Core technologies"
          className="flex flex-wrap gap-x-5 gap-y-2"
        >
          {content.technologies.map((technology) => (
            <li
              key={technology}
              className="text-sm font-semibold text-cool-gray-500"
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