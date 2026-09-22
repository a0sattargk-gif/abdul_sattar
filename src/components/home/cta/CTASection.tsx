import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import AvailabilityBadge from "./AvailabilityBadge";
import TrustItem from "./TrustItem";

import { HOME_CTA } from "@/constants/home/cta";

export default function CTASection() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="border-b border-cool-gray-200 bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[32px] border border-cool-gray-300/15 bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900 p-8 shadow-brand-lg sm:rounded-[40px] sm:p-12 lg:p-16">
          {/* Subtle Ambient Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-emerald-brand-500/10 blur-[120px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-20 bottom-0 size-72 rounded-full bg-emerald-brand-400/10 blur-[120px]"
          />

          <div className="relative grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <AvailabilityBadge />

              <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-emerald-brand-400">
                {HOME_CTA.eyebrow}
              </p>

              <h2
                id="cta-heading"
                className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
              >
                {HOME_CTA.title}
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-cool-gray-300 sm:text-lg sm:leading-8">
                {HOME_CTA.description}
              </p>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2" role="list">
                {HOME_CTA.trustItems.map((item) => (
                  <TrustItem key={item} text={item} />
                ))}
              </ul>
            </div>

            <div className="flex shrink-0 flex-col gap-3.5 sm:flex-row lg:flex-col">
              <Button
                asChild
                size="lg"
                variant="emerald"
                className="group h-13 px-8 text-base font-bold shadow-accent hover:-translate-y-0.5"
              >
                <Link
                  href={HOME_CTA.primaryAction.href}
                  aria-label={HOME_CTA.primaryAction.ariaLabel}
                >
                  {HOME_CTA.primaryAction.label}
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-13 border-white/20 bg-white/5 px-8 text-base font-bold text-white hover:border-white/40 hover:bg-white/10 hover:text-white hover:-translate-y-0.5"
              >
                <Link
                  href={HOME_CTA.secondaryAction.href}
                  aria-label={HOME_CTA.secondaryAction.ariaLabel}
                >
                  {HOME_CTA.secondaryAction.label}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
