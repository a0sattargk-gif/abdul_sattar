import type { Metadata } from "next";
import { notFound } from "next/navigation";

// import ServiceCTA from "@/components/services/details/ServiceCTA";
// import ServiceDeliverables from "@/components/services/details/ServiceDeliverables";
// import ServiceHero from "@/components/services/details/ServiceHero";
// import ServiceOverview from "@/components/services/details/ServiceOverview";
// import ServicePricing from "@/components/services/details/ServicePricing";
// import ServiceTechnologies from "@/components/services/details/ServiceTechnologies";

import { createClient } from "@/prismicio";
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

export async function generateStaticParams() {
  const client = createClient();

  const services = await client.getAllByType("service");

  return services.map((service) => ({
    uid: service.uid,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { uid } = await params;
  const client = createClient();

  try {
    const service = await client.getByUID("service", uid);

    return {
      title: service.data.meta_title || service.data.service_name || "Service",

      description:
        service.data.meta_description ||
        service.data.short_description ||
        undefined,
    };
  } catch {
    return {
      title: "Service Not Found",
    };
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { uid } = await params;
  const client = createClient();

  let service;

  try {
    service = await client.getByUID("service", uid);
  } catch (error) {
    console.error("Service fetch failed:", {
      uid,
      error,
    });

    notFound();
  }

  return (
    <>
      <ServiceHero service={service} />

      <ServiceOverview service={service} />

      <ServiceTechnologies technologies={service.data.technologies} />

      <ServiceDeliverables deliverables={service.data.deliverables} />

      <ServicePricing plans={service.data.pricing_plans} />

      <ServiceCTA service={service} />
    </>
  );
}
