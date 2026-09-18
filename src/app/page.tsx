import type { Metadata } from "next";
// sattar
import FAQSection from "@/components/home/faq/FAQSection";
import Hero from "@/components/home/hero/Hero";
import SelectedWorkSection from "@/components/home/selected-work/SelectedWorkSection";
import CapabilitiesSection from "@/components/home/capabilities/CapabilitiesSection";
import AboutSection from "@/components/home/about/AboutSection";
import CTASection from "@/components/home/cta/CTASection";

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
      <SelectedWorkSection />
      <CapabilitiesSection />
      <AboutSection />
       <CTASection />
      <FAQSection />
     
    </>
  );
}
