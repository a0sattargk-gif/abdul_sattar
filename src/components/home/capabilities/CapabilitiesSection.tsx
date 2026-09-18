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
      className="border-b border-cool-gray-200 bg-cool-gray-50"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          {/* Left */}
          <div className="lg:pr-8">
            <div className="lg:sticky lg:top-28">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-px w-8 bg-emerald-brand-700"
                />

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-brand-700">
                  Capabilities
                </p>
              </div>

              <h2
                id="capabilities-heading"
                className="mt-5 max-w-md text-3xl font-bold leading-tight tracking-[-0.035em] text-navy-950 sm:text-4xl"
              >
                Engineering support from interface to infrastructure.
              </h2>

              <p className="mt-5 max-w-md text-base leading-7 text-cool-gray-700">
                I help turn product requirements into reliable digital
                experiences across frontend, backend, mobile, and application
                architecture.
              </p>

              <Link
                href="/services"
                className="group mt-7 inline-flex min-h-11 items-center gap-3 font-bold text-navy-950 transition-colors hover:text-emerald-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-brand-700 focus-visible:ring-offset-4"
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