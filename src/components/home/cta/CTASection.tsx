import Link from "next/link";

import AvailabilityBadge from "./AvailabilityBadge";
import TrustItem from "./TrustItem";

import { HOME_CTA } from "@/constants/home/cta";

export default function CTASection() {
  return (
    <section aria-labelledby="cta-heading" className="bg-navy-900 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[40px] border border-cool-gray-300/15 bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 p-8 shadow-brand-lg sm:p-12 lg:p-16">
          {/* Glow */}

          <div
            aria-hidden
            className="absolute -right-20 -top-20 size-72 rounded-full bg-emerald-brand-500/10 blur-[120px]"
          />

          <div
            aria-hidden
            className="absolute -left-20 bottom-0 size-72 rounded-full bg-emerald-brand-400/10 blur-[120px]"
          />

          <div className="relative grid gap-14 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <AvailabilityBadge />

              <p className="mt-8 text-sm font-bold uppercase tracking-[0.16em] text-emerald-brand-400">
                {HOME_CTA.eyebrow}
              </p>

              <h2
                id="cta-heading"
                className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-white lg:text-5xl"
              >
                {HOME_CTA.title}
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-cool-gray-200">
                {HOME_CTA.description}
              </p>

              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {HOME_CTA.trustItems.map((item) => (
                  <TrustItem key={item} text={item} />
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <Link
                href={HOME_CTA.primaryAction.href}
                className="inline-flex min-h-14 items-center justify-center rounded-xl bg-emerald-brand-500 px-8 text-lg font-bold text-navy-950 transition hover:bg-emerald-brand-400"
              >
                {HOME_CTA.primaryAction.label}
              </Link>

              <Link
                href={HOME_CTA.secondaryAction.href}
                className="inline-flex min-h-14 items-center justify-center rounded-xl border border-cool-gray-300/20 bg-white/5 px-8 text-lg font-bold text-white transition hover:bg-white/10"
              >
                {HOME_CTA.secondaryAction.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
