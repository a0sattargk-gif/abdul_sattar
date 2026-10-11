import Link from "next/link";

import { ABOUT_CTA_CONTENT } from "@/constants/about/cta";

export default function AboutCTA() {
  const content = ABOUT_CTA_CONTENT;

  return (
    <section
      aria-labelledby="about-cta-heading"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0b1120]/90 p-8 shadow-2xl backdrop-blur-xl sm:rounded-[40px] sm:p-12 lg:p-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-emerald-500/15 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-20 bottom-0 size-72 rounded-full bg-cyan-500/10 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]"
          />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
                {content.eyebrow}
              </p>

              <h2
                id="about-cta-heading"
                className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl"
              >
                {content.title}
              </h2>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-200">
                {content.description}
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3.5 sm:flex-row">
              <Link
                href={content.primaryAction.href}
                aria-label={content.primaryAction.ariaLabel}
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 px-7 text-sm font-extrabold text-navy-950 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
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
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] px-7 text-sm font-semibold text-white backdrop-blur-md transition duration-200 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
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
