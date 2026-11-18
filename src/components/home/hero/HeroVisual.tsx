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

  return (
    <LazyMotion features={domAnimation}>
      <div className="relative mx-auto flex items-center justify-center w-full max-w-[520px] py-6 sm:py-8 lg:ml-auto">
        {/* 3D WebGL Background Orb */}
        <HeroOrb />

        {/* Outer Cyber Ambient Glows */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute size-72 sm:size-96 rounded-full bg-emerald-500/20 blur-[100px] animate-pulse"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute size-60 sm:size-80 rounded-full bg-cyan-500/15 blur-[90px]"
        />

        {/* Circular Animation Frame & Orbitals */}
        <div className="relative z-10 flex items-center justify-center size-64 sm:size-80 md:size-96 lg:size-[400px]">
          {/* Animated Orbital Ring 1: Outer Dashed Counter-Clockwise */}
          <m.div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-6 sm:-inset-8 rounded-full border border-dashed border-emerald-400/25"
            animate={
              reduceMotion
                ? undefined
                : { rotate: [0, 360] }
            }
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* Orbital Satellite Node */}
            <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 size-3 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]" />
          </m.div>

          {/* Animated Orbital Ring 2: Concentric Cyan Ring with Reverse Rotation */}
          <m.div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-3 sm:-inset-4 rounded-full border border-cyan-400/30"
            animate={
              reduceMotion
                ? undefined
                : { rotate: [360, 0] }
            }
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* Orbital Satellite Node */}
            <span className="absolute -bottom-1.5 right-1/4 size-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
          </m.div>

          {/* Animated Radar Pulse Wave */}
          <m.div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-1 rounded-full border border-emerald-400/40"
            animate={
              reduceMotion
                ? undefined
                : {
                    scale: [1, 1.08, 1],
                    opacity: [0.3, 0.7, 0.3],
                  }
            }
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* CIRCULAR IMAGE CONTAINER WITH 3D INTERACTIVE TILT */}
          <Card3D maxTilt={12} scale={1.03} depth={20} className="size-full rounded-full">
            <div className="relative size-full rounded-full border-4 border-emerald-500/30 bg-[#0b1120] p-1.5 shadow-[0_0_60px_rgba(16,185,129,0.25)] ring-1 ring-white/10 sm:border-[6px] sm:p-2">
              <div className="relative size-full overflow-hidden rounded-full aspect-square bg-[#030712]">
                <Image
                  src="/images/abdul-sattar.webp"
                  alt="Sattar Web Studio"
                  fill
                  priority
                  fetchPriority="high"
                  quality={90}
                  sizes="(max-width: 640px) 260px, (max-width: 1024px) 380px, 400px"
                  className="size-full object-cover object-[50%_25%] transition-transform duration-700 ease-out hover:scale-105"
                />

                {/* Subtle Inner Lens Vignette for High-Tech Polish */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/15 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(0,0,0,0.5)_100%)]"
                />
              </div>
            </div>
          </Card3D>
        </div>
      </div>
    </LazyMotion>
  );
}
