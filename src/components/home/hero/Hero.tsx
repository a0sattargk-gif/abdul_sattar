import HeroContent from "@/components/home/hero/HeroContent";
import HeroVisual from "@/components/home/hero/HeroVisual";

import { HOME_HERO_CONTENT } from "@/constants/home/hero";

export default function Hero() {
  return (
    <section
      aria-labelledby="home-hero-heading"
      className="relative isolate overflow-hidden border-b border-white/[0.08] bg-transparent"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-32 -top-20 size-[36rem] rounded-full bg-emerald-500/15 blur-[140px]" />
        <div className="absolute -left-20 top-24 size-[32rem] rounded-full bg-cyan-500/12 blur-[130px]" />
        <div className="absolute inset-0 opacity-25 cyber-grid [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
        <span className="absolute -bottom-32 -left-10 font-mono text-[18rem] font-black leading-none tracking-[-0.12em] text-white/[0.015]">01</span>
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:px-8 lg:py-24">
        <HeroContent content={HOME_HERO_CONTENT} />

        <HeroVisual />
      </div>
    </section>
  );
}