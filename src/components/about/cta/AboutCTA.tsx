import Link from "next/link";

import { ABOUT_CTA_CONTENT } from "@/constants/about/cta";

export default function AboutCTA() {
  const content = ABOUT_CTA_CONTENT;

  return (
    <section
      aria-labelledby="about-cta-heading"
      className="bg-cool-gray-50 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-cool-gray-300/20 bg-navy-900 px-6 py-10 shadow-brand-lg sm:px-10 sm:py-12 lg:px-14">
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-20 size-64 rounded-full bg-emerald-brand-500/15 blur-3xl"
          />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-brand-300">
                {content.eyebrow}
              </p>

              <h2
                id="about-cta-heading"
                className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
              >
                {content.title}
              </h2>

              <p className="mt-4 max-w-xl text-base leading-7 text-cool-gray-200">
                {content.description}
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Link
                href={content.primaryAction.href}
                aria-label={content.primaryAction.ariaLabel}
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-emerald-brand-500 px-6 py-3 font-bold text-navy-950 transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-brand-400"
              >
                {content.primaryAction.label}
              </Link>

              <Link
                href={content.secondaryAction.href}
                aria-label={content.secondaryAction.ariaLabel}
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-cool-gray-300/30 bg-white/5 px-6 py-3 font-bold text-white transition duration-200 hover:border-emerald-brand-300/60 hover:bg-white/10"
              >
                {content.secondaryAction.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
