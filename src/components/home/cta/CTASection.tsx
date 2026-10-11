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
      className="relative border-b border-white/[0.08] bg-transparent py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#0b1120] via-[#020617] to-[#0b1120] p-8 shadow-[0_30px_90px_rgba(0,0,0,0.9)] ring-1 ring-emerald-500/20 sm:rounded-[40px] sm:p-12 lg:p-16">
          {/* Cyber Ambient Glows */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 size-80 rounded-full bg-emerald-500/20 blur-[140px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-20 bottom-0 size-80 rounded-full bg-cyan-500/15 blur-[140px]"
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

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg sm:leading-8">
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
