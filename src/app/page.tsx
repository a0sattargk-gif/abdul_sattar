import type { Metadata } from "next";
// sattar
import AboutPreview from "@/components/home/about/AboutPreview";
import CTASection from "@/components/home/cta/CTASection";
import ExpertiseSection from "@/components/home/expertise/ExpertiseSection";
import FAQSection from "@/components/home/faq/FAQSection";
import Hero from "@/components/home/hero/Hero";
import LatestInsights from "@/components/home/insights/LatestInsights";
import ProcessSection from "@/components/home/process/ProcessSection";
import FeaturedProjects from "@/components/home/projects/FeaturedProjects";
import ResultsSection from "@/components/home/results/ResultsSection";
import TrustStrip from "@/components/home/trust/TrustStrip";

export const metadata: Metadata = {
  title: "Full-Stack Software Engineer",

  description:
    "Full-stack software engineer building scalable web and mobile applications with React, Next.js, Node.js, NestJS, Django REST Framework, PostgreSQL, MongoDB, Supabase, AWS, microservices, and microfrontends.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Full-Stack Software Engineer",
    description:
      "Scalable web and mobile application development using modern frontend, backend, cloud, database, and distributed-system technologies.",
    type: "website",
    url: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <FeaturedProjects />
      <ResultsSection />
      <AboutPreview />
      <ExpertiseSection />
      <ProcessSection />
      <LatestInsights />
      <CTASection />
      <FAQSection />
    </>
  );
}
