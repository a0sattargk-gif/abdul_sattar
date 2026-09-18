import AboutHeroContent from "@/components/about/hero/AboutHeroContent";
import AboutHeroVisual from "@/components/about/hero/AboutHeroVisual";

import { ABOUT_HERO_CONTENT } from "@/constants/about/hero";

export default function AboutHero() {
  const content = ABOUT_HERO_CONTENT;

  return (
    <section
      aria-labelledby="about-hero-heading"
      className="relative overflow-hidden border-b border-cool-gray-200 bg-white py-14 sm:py-18 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
