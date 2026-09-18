import Link from "next/link";

import { ABOUT_CTA_CONTENT } from "@/constants/about/cta";

export default function AboutCTA() {
  const content = ABOUT_CTA_CONTENT;

  return (
    <section
      aria-labelledby="about-cta-heading"
      className="border-b border-cool-gray-200 bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[32px] border border-cool-gray-300/15 bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900 p-8 shadow-brand-lg sm:rounded-[40px] sm:p-12 lg:p-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-emerald-brand-500/15 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-20 bottom-0 size-64 rounded-full bg-emerald-brand-400/10 blur-3xl"
          />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-brand-400">
                {content.eyebrow}
              </p>

              <h2
                id="about-cta-heading"
                className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl"
              >
                {content.title}
              </h2>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-cool-gray-300">
                {content.description}
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3.5 sm:flex-row">
              <Link
                href={content.primaryAction.href}
                aria-label={content.primaryAction.ariaLabel}
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-emerald-brand-500 px-7 text-sm font-bold text-navy-950 shadow-brand-sm transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-brand-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-brand-400"
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
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/20 bg-white/5 px-7 text-sm font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-brand-400"
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
