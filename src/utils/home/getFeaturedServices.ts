import type { HomeService } from "@/types/home";

export function getFeaturedServices(services: HomeService[]): HomeService[] {
  return services
    .filter((service) => service.featured)
    .sort((firstService, secondService) => {
      return firstService.order - secondService.order;
    });
}
