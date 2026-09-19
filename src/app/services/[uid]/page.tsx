import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { asImageSrc } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import ServiceHero from "@/services/details/ServiceHero";
import ServiceOverview from "@/services/details/ServiceOverview";
import ServiceTechnologies from "@/services/details/ServiceTechnologies";
import ServiceDeliverables from "@/services/details/ServiceDeliverables";
import ServicePricing from "@/services/details/ServicePricing";
import ServiceCTA from "@/services/details/ServiceCTA";

interface ServicePageProps {
  params: Promise<{
    uid: string;
  }>;
}

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.APP_URL ||
  "https://sattarwebstudio.com";

export const dynamicParams = true;
export const revalidate = 60;

export async function generateStaticParams() {
  const client = createClient();

  const services = await client
    .getAllByType("service", {
      fetchOptions: { next: { tags: ["prismic", "services"] } },
    })
    .catch(() => []);

  return services.map((service) => ({
    uid: service.uid,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { uid } = await params;
  const client = createClient();

  const service = await client
    .getByUID("service", uid, {
      fetchOptions: { next: { tags: ["prismic", `service-${uid}`, "services"] } },
    })
    .catch(() => null);

  if (!service) {
    return {
      title: "Service Not Found | Sattar Web Studio",
    };
  }

  const rawTitle =
    service.data.meta_title || service.data.service_name || "Service";
  const title = `${rawTitle} | Sattar Web Studio`;
  const description =
    service.data.meta_description ||
    service.data.short_description ||
    "Professional web development, modern frontend architecture, and performance engineering by Sattar Web Studio.";

  const canonicalUrl = `${SITE_URL}/services/${service.uid}`;
  const metaImage =
    asImageSrc(service.data.meta_image) ||
    asImageSrc(service.data.hero_image) ||
    asImageSrc(service.data.card_image);

  return {
    title,
    description,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "website",
      title,
      description,
      url: canonicalUrl,
      images: metaImage
        ? [
            {
              url: metaImage,
              alt: rawTitle,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: metaImage ? [metaImage] : undefined,
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { uid } = await params;
  const client = createClient();

  const service = await client
    .getByUID("service", uid, {
      fetchOptions: { next: { tags: ["prismic", `service-${uid}`, "services"] } },
    })
    .catch(() => null);

  if (!service) {
    notFound();
  }

  const title = service.data.service_name || "Service";
  const description =
    service.data.short_description ||
    service.data.meta_description ||
    "Specialized web engineering and architecture service.";
  const canonicalUrl = `${SITE_URL}/services/${service.uid}`;
  const imageUrl =
    asImageSrc(service.data.meta_image) ||
    asImageSrc(service.data.hero_image) ||
    asImageSrc(service.data.card_image);

  // Structured data (Schema.org / JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    description,
    url: canonicalUrl,
    image: imageUrl || undefined,
    provider: {
      "@type": "ProfessionalService",
      name: "Sattar Web Studio",
      url: SITE_URL,
      founder: {
        "@type": "Person",
        name: "Abdul Sattar",
      },
    },
    offers: service.data.pricing_plans
      ?.filter((p) => p.plan_name && p.price)
      .map((p) => ({
        "@type": "Offer",
        name: p.plan_name,
        price: p.price,
        priceCurrency: "USD",
        description: p.timeline ? `Timeline: ${p.timeline}` : undefined,
      })),
  };

  return (
    <>
     

      <ServiceHero service={service} />

      <ServiceOverview service={service} />

      <ServiceTechnologies technologies={service.data.technologies} />

      <ServiceDeliverables deliverables={service.data.deliverables} />

      <ServicePricing plans={service.data.pricing_plans} />

      {service.data.slices && service.data.slices.length > 0 && (
        <SliceZone slices={service.data.slices} components={components} />
      )}

      <ServiceCTA service={service} />
       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
