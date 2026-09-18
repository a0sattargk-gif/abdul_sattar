import { filter } from "@prismicio/client";

import { createClient } from "@/prismicio";
import type { FeaturedService } from "@/types/home/featured-service";

const HOME_SERVICE_LIMIT = 4;

export async function getFeaturedServices(): Promise<FeaturedService[]> {
  const client = createClient();

  const services = await client.getAllByType("service", {
    filters: [
      filter.at("my.service.featured", true),
    ],
    orderings: [
      {
        field: "my.service.display_order",
        direction: "asc",
      },
    ],
  });

  return services
    .filter((service) => Boolean(service.uid))
    .slice(0, HOME_SERVICE_LIMIT)
    .map((service) => ({
      id: service.id,
      uid: service.uid!,
      name: service.data.service_name ?? "",
      description: service.data.short_description ?? "",
      image: service.data.card_image,
      timeline: service.data.typical_timeline ?? null,
      deliveryModel: service.data.delivery_model ?? null,
    }));
}