import type { Metadata } from "next";

import AboutCTA from "@/components/about/cta/AboutCTA";
import AboutHero from "@/components/about/hero/AboutHero";
import ProfessionalIntroduction from "@/components/about/introduction/ProfessionalIntroduction";
import CareerJourney from "@/components/about/journey/CareerJourney";
import CoreStrengths from "@/components/about/strengths/CoreStrengths";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about my full-stack software engineering experience, technical background, architecture approach, and professional development journey.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />

      <ProfessionalIntroduction />
      <CareerJourney />
      <CoreStrengths />
      <AboutCTA />
    </>
  );
}
