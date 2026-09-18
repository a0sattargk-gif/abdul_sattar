import type { Metadata } from "next";

import AboutCTA from "@/components/about/cta/AboutCTA";
import AboutHero from "@/components/about/hero/AboutHero";
import CareerJourney from "@/components/about/journey/CareerJourney";
import CoreStrengths from "@/components/about/strengths/CoreStrengths";

export const metadata: Metadata = {
  title: "About Abdul Sattar | Full-Stack Software Engineer & Founder",
  description:
    "Learn about Abdul Sattar, full-stack software engineer and the developer behind Sattar Web Studio. Specialized in React, Next.js, Node.js, NestJS, and scalable system design.",

  alternates: {
    canonical: "/about",
  },

  openGraph: {
    title: "About Abdul Sattar | Full-Stack Software Engineer",
    description:
      "Full-stack software engineering, scalable web & mobile application architecture, and system design by Abdul Sattar.",
    type: "profile",
    url: "/about",
    images: [
      {
        url: "/images/abdul-sattar.webp",
        width: 720,
        height: 900,
        alt: "Abdul Sattar, full-stack software engineer behind Sattar Web Studio",
      },
    ],
  },
};

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://sattarwebstudio.com/#person",
      name: "Abdul Sattar",
      jobTitle: "Full-Stack Software Engineer",
      description:
        "Full-stack software engineer and founder of Sattar Web Studio building scalable web and mobile applications with React, Next.js, Node.js, NestJS, and PostgreSQL.",
      image: "https://sattarwebstudio.com/images/abdul-sattar.webp",
      worksFor: {
        "@type": "Organization",
        name: "Sattar Web Studio",
      },
      knowsAbout: [
        "Software Architecture",
        "Full-Stack Web Development",
        "System Design",
        "React",
        "Next.js",
        "Node.js",
        "NestJS",
        "TypeScript",
        "PostgreSQL",
        "Cloud Infrastructure",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://sattarwebstudio.com/#service",
      name: "Sattar Web Studio",
      founder: {
        "@id": "https://sattarwebstudio.com/#person",
      },
      description:
        "Custom web application development, full-stack engineering, backend systems, and system design architecture.",
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <AboutHero />
      <CareerJourney />
      <CoreStrengths />
      <AboutCTA />
    </>
  );
}
