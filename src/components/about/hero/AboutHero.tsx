import AboutHeroContent from "@/components/about/hero/AboutHeroContent";
import AboutHeroVisual from "@/components/about/hero/AboutHeroVisual";

import { ABOUT_HERO_CONTENT } from "@/constants/about/hero";

export default function AboutHero() {
  const content = ABOUT_HERO_CONTENT;

  return (
    <section
      aria-labelledby="about-hero-heading"
      className="relative overflow-hidden border-b border-white/[0.08] bg-[#030712]/60 py-14 backdrop-blur-md sm:py-18 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-0 size-96 rounded-full bg-emerald-500/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-0 size-96 rounded-full bg-cyan-500/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <AboutHeroContent content={content} />
          <AboutHeroVisual
            image={content.image}
            statusBadge={content.statusBadge}
          />
        </div>
      </div>
    </section>
  );
}
