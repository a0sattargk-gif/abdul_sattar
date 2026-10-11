"use client";

import Image from "next/image";
import {
  LazyMotion,
  domAnimation,
  m,
  useReducedMotion,
} from "framer-motion";
import HeroOrb from "./HeroOrb";
import Card3D from "@/components/3d/Card3D";

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
      <div className="relative mx-auto w-full max-w-135 lg:ml-auto">
        <HeroOrb />
        <div aria-hidden="true" className="absolute inset-x-[9%] -top-7 bottom-7 rotate-[-5deg] rounded-3xl border border-emerald-500/30 bg-emerald-500/10 shadow-[0_0_40px_rgba(16,185,129,0.2)] backdrop-blur-md" />
        <div aria-hidden="true" className="absolute -right-2 top-[12%] z-20 hidden rounded-xl border border-white/10 bg-[#0b1120]/90 px-4 py-3 shadow-[0_20px_40px_rgba(0,0,0,0.8)] backdrop-blur-xl ring-1 ring-white/10 sm:block">
          <span className="block font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-slate-300">Crafting</span>
          <span className="mt-1 block text-sm font-bold tracking-tight text-white">Digital products<span className="text-emerald-brand-400">.</span></span>
        </div>

        <div className="relative z-10 mx-auto w-[78%] sm:w-[76%]">

          {/* TOP LEFT */}
          <div
            aria-hidden="true"
            className="absolute -left-4 -top-4 z-30"
          >
            <m.span
              className="absolute left-0 top-0 h-0.5 origin-left bg-emerald-brand-600"
              initial={{ width: 0 }}
              animate={
                reduceMotion
                  ? { width: 70 }
                  : { width: [24, 72, 72, 24] }
              }
              transition={lineTransition(0)}
            />

            <m.span
              className="absolute left-0 top-0 w-0.5 origin-top bg-emerald-brand-600"
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
              className="absolute right-0 top-0 h-0.5 bg-emerald-brand-600"
              animate={
                reduceMotion
                  ? { width: 70 }
                  : { width: [24, 24, 72, 24] }
              }
              transition={lineTransition(0.35)}
            />

            <m.span
              className="absolute right-0 top-0 w-0.5 bg-emerald-brand-600"
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
              className="absolute bottom-0 right-0 h-0.5 bg-emerald-brand-600"
              animate={
                reduceMotion
                  ? { width: 70 }
                  : { width: [24, 24, 72, 24] }
              }
              transition={lineTransition(0.7)}
            />

            <m.span
              className="absolute bottom-0 right-0 w-0.5 bg-emerald-brand-600"
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
              className="absolute bottom-0 left-0 h-0.5 bg-emerald-brand-600"
              animate={
                reduceMotion
                  ? { width: 70 }
                  : { width: [24, 24, 72, 24] }
              }
              transition={lineTransition(1.05)}
            />

            <m.span
              className="absolute bottom-0 left-0 w-0.5 bg-emerald-brand-600"
              animate={
                reduceMotion
                  ? { height: 70 }
                  : { height: [24, 24, 72, 24] }
              }
              transition={lineTransition(1.05)}
            />
          </div>

          {/* PORTRAIT — 3D INTERACTIVE TILT */}
          <Card3D maxTilt={10} scale={1.03} depth={25} className="w-full">
            <div className="relative overflow-hidden rounded-2xl border-4 border-white/10 bg-[#0b1120] shadow-[0_30px_90px_rgba(0,0,0,0.9)] ring-1 ring-emerald-500/25 sm:border-8">
              <Image
                src="/images/abdul-sattar.webp"
                alt="Abdul Sattar, full-stack software engineer behind Sattar Web Studio"
                width={720}
                height={900}
                priority
                fetchPriority="high"
                quality={82}
                sizes="(max-width: 640px) 78vw, 400px"
                className="aspect-4/5 w-full object-cover object-[50%_35%]"
              />
            </div>
          </Card3D>
        </div>

        <div className="absolute -bottom-5 left-0 z-20 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0b1120]/95 px-4 py-3 text-white shadow-[0_20px_40px_rgba(0,0,0,0.85)] backdrop-blur-2xl ring-1 ring-emerald-500/30 sm:left-2 sm:px-5 sm:py-4">
          <span className="grid size-9 place-items-center rounded-xl border border-emerald-brand-400/50 bg-emerald-500/10 font-mono text-xs font-bold text-emerald-brand-300 shadow-[0_0_12px_rgba(52,211,153,0.3)]">AS</span>
          <span>
            <span className="block font-mono text-[9px] uppercase tracking-[0.2em] text-slate-300">Independent engineer</span>
            <span className="mt-0.5 block text-sm font-semibold tracking-tight text-white">Ideas into software</span>
          </span>
          <span aria-hidden="true" className="ml-2 size-2 rounded-full bg-emerald-brand-400 shadow-[0_0_14px_rgba(52,211,153,0.9)]" />
        </div>
      </div>
    </LazyMotion>
  );
}