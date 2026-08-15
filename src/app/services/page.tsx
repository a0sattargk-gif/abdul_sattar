import type { Metadata } from "next";

import RelatedCapabilities from "@/components/services/listing/RelatedCapabilities";
import ServicesCTA from "@/components/services/listing/ServicesCTA";
import ServicesGrid from "@/components/services/listing/ServicesGrid";
import ServicesHero from "@/components/services/listing/ServicesHero";

import { createClient } from "@/prismicio";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-stack development services for frontend, backend, mobile applications, and software architecture.",
};

export default async function ServicesPage() {
  const client = createClient();

  const services = await client.getAllByType("service", {
    orderings: [
      {
        field: "my.service.display_order",
        direction: "asc",
      },
    ],
  });

  return (
    <>
      <ServicesHero />
      <ServicesGrid services={services} />
      <RelatedCapabilities />
      <ServicesCTA />
    </>
  );
}
