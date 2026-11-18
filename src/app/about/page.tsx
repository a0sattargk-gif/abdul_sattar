import type { Metadata } from "next";

import AboutCTA from "@/components/about/cta/AboutCTA";
import AboutHero from "@/components/about/hero/AboutHero";
import CareerJourney from "@/components/about/journey/CareerJourney";
import CoreStrengths from "@/components/about/strengths/CoreStrengths";

export const metadata: Metadata = {
  title: "About Sattar Web Studio | Software Engineering & Digital Product Agency",
  description:
    "Learn about Sattar Web Studio, an agile software engineering and digital product agency founded by Abdul Sattar. Delivering high-performance web, mobile, and cloud platforms.",

  alternates: {
    canonical: "/about",
  },

  openGraph: {
    title: "About Sattar Web Studio | Digital Product & Engineering Agency",
    description:
      "Full-cycle software engineering, scalable cloud architecture, and modern product design by Sattar Web Studio.",
    type: "website",
    url: "/about",
    images: [
      {
        url: "/images/abdul-sattar.webp",
        width: 720,
        height: 900,
        alt: "Abdul Sattar, Founder & Principal Solutions Architect at Sattar Web Studio",
      },
    ],
  },
};

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://sattarwebstudio.com/#service",
      name: "Sattar Web Studio",
      alternateName: "Sattar Web Studio Agency",
      description:
        "Full-cycle software engineering, scalable cloud architecture, custom web applications, and system design.",
      url: "https://sattarwebstudio.com",
      founder: {
        "@type": "Person",
        "@id": "https://sattarwebstudio.com/#person",
        name: "Abdul Sattar",
        jobTitle: "Founder & Principal Solutions Architect",
        description:
          "Full-stack software engineer and founder of Sattar Web Studio specializing in high-performance web applications, distributed backend systems, and cloud architecture.",
        image: "https://sattarwebstudio.com/images/abdul-sattar.webp",
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
