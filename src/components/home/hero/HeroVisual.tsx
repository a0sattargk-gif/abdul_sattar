"use client";

import Image from "next/image";
import {
  LazyMotion,
  domAnimation,
  m,
  useReducedMotion,
} from "framer-motion";

export default function HeroVisual() {
  const reduceMotion = useReducedMotion();

  const lineTransition = (delay: number) => ({
    duration: 3.6,
    delay,
    repeat: Infinity,
    repeatDelay: 0.2,
    ease: "easeInOut" as const,
  });

  return (
    <LazyMotion features={domAnimation}>
      <div className="relative mx-auto w-full max-w-[540px] lg:ml-auto">

        {/* Keep your existing SATTAR/background decorations here */}

        <div className="relative z-10 mx-auto w-[78%] sm:w-[76%]">

          {/* TOP LEFT */}
          <div
            aria-hidden="true"
            className="absolute -left-4 -top-4 z-30"
          >
            <m.span
              className="absolute left-0 top-0 h-[2px] origin-left bg-emerald-brand-600"
              initial={{ width: 0 }}
              animate={
                reduceMotion
                  ? { width: 70 }
                  : { width: [24, 72, 72, 24] }
              }
              transition={lineTransition(0)}
            />

            <m.span
              className="absolute left-0 top-0 w-[2px] origin-top bg-emerald-brand-600"
              initial={{ height: 0 }}
              animate={
                reduceMotion
                  ? { height: 70 }
                  : { height: [24, 72, 72, 24] }
              }
              transition={lineTransition(0)}
            />
          </div>

          {/* TOP RIGHT */}
          <div
            aria-hidden="true"
            className="absolute -right-4 -top-4 z-30"
          >
            <m.span
              className="absolute right-0 top-0 h-[2px] bg-emerald-brand-600"
              animate={
                reduceMotion
                  ? { width: 70 }
                  : { width: [24, 24, 72, 24] }
              }
              transition={lineTransition(0.35)}
            />

            <m.span
              className="absolute right-0 top-0 w-[2px] bg-emerald-brand-600"
              animate={
                reduceMotion
                  ? { height: 70 }
                  : { height: [24, 24, 72, 24] }
              }
              transition={lineTransition(0.35)}
            />
          </div>

          {/* BOTTOM RIGHT */}
          <div
            aria-hidden="true"
            className="absolute -bottom-4 -right-4 z-30"
          >
            <m.span
              className="absolute bottom-0 right-0 h-[2px] bg-emerald-brand-600"
              animate={
                reduceMotion
                  ? { width: 70 }
                  : { width: [24, 24, 72, 24] }
              }
              transition={lineTransition(0.7)}
            />

            <m.span
              className="absolute bottom-0 right-0 w-[2px] bg-emerald-brand-600"
              animate={
                reduceMotion
                  ? { height: 70 }
                  : { height: [24, 24, 72, 24] }
              }
              transition={lineTransition(0.7)}
            />
          </div>

          {/* BOTTOM LEFT */}
          <div
            aria-hidden="true"
            className="absolute -bottom-4 -left-4 z-30"
          >
            <m.span
              className="absolute bottom-0 left-0 h-[2px] bg-emerald-brand-600"
              animate={
                reduceMotion
                  ? { width: 70 }
                  : { width: [24, 24, 72, 24] }
              }
              transition={lineTransition(1.05)}
            />

            <m.span
              className="absolute bottom-0 left-0 w-[2px] bg-emerald-brand-600"
              animate={
                reduceMotion
                  ? { height: 70 }
                  : { height: [24, 24, 72, 24] }
              }
              transition={lineTransition(1.05)}
            />
          </div>

          {/* PORTRAIT — DOES NOT MOVE */}
          <div className="relative overflow-hidden bg-cool-gray-200">
            <Image
              src="/images/abdul-sattar.webp"
              alt="Abdul Sattar, full-stack software engineer behind Sattar Web Studio"
              width={720}
              height={900}
              priority
              fetchPriority="high"
              quality={82}
              sizes="(max-width: 640px) 78vw, 400px"
              className="aspect-[4/5] w-full object-cover object-[50%_35%]"
            />
          </div>
        </div>

        {/* Keep your existing name/title below */}
      </div>
    </LazyMotion>
  );
}