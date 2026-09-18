import HeroContent from "@/components/home/hero/HeroContent";
import HeroVisual from "@/components/home/hero/HeroVisual";

import { HOME_HERO_CONTENT } from "@/constants/home/hero";

export default function Hero() {
  return (
    <section
      aria-labelledby="home-hero-heading"
      className="relative overflow-hidden border-b border-cool-gray-200 bg-cool-gray-50"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:px-8 lg:py-16">
        <HeroContent content={HOME_HERO_CONTENT} />

        <HeroVisual />
      </div>
    </section>
  );
}