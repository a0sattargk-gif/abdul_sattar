import type { Metadata } from "next";

 

import { createClient } from "@/prismicio";
import ServicesHero from "@/services/listing/ServicesHero";
 
import RelatedCapabilities from "@/services/listing/RelatedCapabilities";
import ServicesCTA from "@/services/listing/ServicesCTA";
import ServicesGrid from "@/services/listing/ServicesGrid";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-stack development services for frontend, backend, mobile applications, and software architecture.",
};

export default async function ServicesPage() {
  const client = createClient();

  const services = await client.getAllByType("service", {
    fetchOptions: { next: { tags: ["prismic", "services"] } },
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
