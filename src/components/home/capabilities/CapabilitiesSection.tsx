import Link from "next/link";

 import CapabilityList from "./CapabilityList";
import { getFeaturedServices } from "@/services/getFeaturedServices";

export default async function CapabilitiesSection() {
  const services = await getFeaturedServices();

  if (services.length === 0) {
    return null;
  }

  return (
    <section
      aria-labelledby="capabilities-heading"
      className="relative border-b border-white/[0.08] bg-transparent"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          {/* Left */}
          <div className="lg:pr-8">
            <div className="lg:sticky lg:top-28">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-px w-8 bg-emerald-brand-400"
                />

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-brand-400">
                  Capabilities
                </p>
              </div>

              <h2
                id="capabilities-heading"
                className="mt-5 max-w-md text-3xl font-extrabold leading-tight tracking-[-0.035em] text-white sm:text-4xl"
              >
                Engineering support from interface to infrastructure.
              </h2>

              <p className="mt-5 max-w-md text-base leading-7 text-slate-200">
                I help turn product requirements into reliable digital
                experiences across frontend, backend, mobile, and application
                architecture.
              </p>

              <Link
                href="/services"
                className="group mt-7 inline-flex min-h-11 items-center gap-3 font-bold text-white transition-colors hover:text-emerald-brand-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-brand-400 focus-visible:ring-offset-4"
              >
                Explore all services

                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Right */}
          <CapabilityList services={services} />
        </div>
      </div>
    </section>
  );
}