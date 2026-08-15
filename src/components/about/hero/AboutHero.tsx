import AboutHeroContent from "@/components/about/hero/AboutHeroContent";
import AboutHeroVisual from "@/components/about/hero/AboutHeroVisual";

import { ABOUT_HERO_CONTENT } from "@/constants/about/hero";

export default function AboutHero() {
  return (
    <section
      aria-labelledby="about-hero-heading"
      className="relative overflow-hidden bg-navy-900"
    >
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute left-0 top-0 size-[28rem] rounded-full bg-emerald-brand-500/10 blur-3xl" />

        <div className="absolute bottom-0 right-0 size-[30rem] rounded-full bg-emerald-brand-400/10 blur-3xl" />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(rgba(203,213,225,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(203,213,225,0.05)_1px,transparent_1px)] bg-[size:48px_48px]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
        <AboutHeroContent content={ABOUT_HERO_CONTENT} />

        <AboutHeroVisual />
      </div>
    </section>
  );
}
