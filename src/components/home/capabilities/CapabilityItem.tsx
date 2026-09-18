"use client";

import Link from "next/link";
import {
  LazyMotion,
  domAnimation,
  m,
  useReducedMotion,
} from "framer-motion";

import type { FeaturedService } from "@/types/home/featured-service";

interface CapabilityItemProps {
  service: FeaturedService;
  index: number;
}

export default function CapabilityItem({
  service,
  index,
}: CapabilityItemProps) {
  const shouldReduceMotion = useReducedMotion();
  const number = String(index + 1).padStart(2, "0");

  return (
    <LazyMotion features={domAnimation}>
      <m.article
        initial={
          shouldReduceMotion
            ? false
            : {
                opacity: 0,
                y: 24,
              }
        }
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.35,
        }}
        transition={{
          duration: 0.55,
          delay: shouldReduceMotion ? 0 : index * 0.08,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="group relative border-b border-cool-gray-300"
      >
        <Link
          href={`/services/${service.uid}`}
          aria-label={`Learn more about ${service.name}`}
          className="
            relative block overflow-hidden
            px-1 py-7
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-inset
            focus-visible:ring-emerald-brand-700
            sm:py-8
          "
        >
          {/* Animated background */}
          <span
            aria-hidden="true"
            className="
              absolute inset-0
              origin-left scale-x-0
              bg-white
              transition-transform
              duration-500
              ease-[cubic-bezier(0.22,1,0.36,1)]
              group-hover:scale-x-100
            "
          />

          {/* Left accent */}
          <span
            aria-hidden="true"
            className="
              absolute bottom-0 left-0 top-0
              w-[3px]
              origin-bottom scale-y-0
              bg-emerald-brand-700
              transition-transform
              duration-500
              group-hover:scale-y-100
            "
          />

          <div className="relative z-10 grid gap-5 sm:grid-cols-[56px_1fr_auto] sm:items-start">
            {/* Number */}
            <div>
              <span
                className="
                  font-mono text-xs font-bold
                  tracking-[0.16em]
                  text-cool-gray-700
                  transition-colors
                  duration-300
                  group-hover:text-emerald-brand-700
                "
              >
                {number}
              </span>
            </div>

            {/* Main content */}
            <div className="min-w-0">
              <h3
                className="
                  text-xl font-bold
                  tracking-[-0.025em]
                  text-navy-950
                  transition-colors
                  duration-300
                  group-hover:text-emerald-brand-700
                  sm:text-2xl
                "
              >
                {service.name}
              </h3>

              {service.description && (
                <p className="mt-3 max-w-xl text-sm leading-6 text-cool-gray-700 sm:text-base sm:leading-7">
                  {service.description}
                </p>
              )}

              {/* Metadata */}
              {(service.timeline || service.deliveryModel) && (
                <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
                  {service.timeline && (
                    <div className="flex items-center gap-2">
                      <span
                        aria-hidden="true"
                        className="size-1.5 bg-emerald-brand-700"
                      />

                      <span className="text-xs font-semibold text-cool-gray-700">
                        {service.timeline}
                      </span>
                    </div>
                  )}

                  {service.deliveryModel && (
                    <div className="flex items-center gap-2">
                      <span
                        aria-hidden="true"
                        className="size-1.5 bg-emerald-brand-700"
                      />

                      <span className="text-xs font-semibold text-cool-gray-700">
                        {service.deliveryModel}
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Arrow */}
            <div className="hidden sm:flex sm:justify-end">
              <span
                aria-hidden="true"
                className="
                  grid size-11 place-items-center
                  border border-cool-gray-300
                  text-lg text-navy-950
                  transition-all
                  duration-300
                  group-hover:border-navy-950
                  group-hover:bg-navy-950
                  group-hover:text-white
                "
              >
                <span
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                >
                  ↗
                </span>
              </span>
            </div>
          </div>

          {/* Mobile action */}
          <div className="relative z-10 mt-5 flex items-center gap-2 text-sm font-bold text-navy-950 sm:hidden">
            Explore service

            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </div>
        </Link>
      </m.article>
    </LazyMotion>
  );
}