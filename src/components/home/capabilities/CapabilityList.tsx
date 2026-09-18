import type { FeaturedService } from "@/types/home/featured-service";

import CapabilityItem from "./CapabilityItem";

interface CapabilityListProps {
  services: FeaturedService[];
}

export default function CapabilityList({
  services,
}: CapabilityListProps) {
  return (
    <div className="border-t border-cool-gray-300">
      {services.map((service, index) => (
        <CapabilityItem
          key={service.id}
          service={service}
          index={index}
        />
      ))}
    </div>
  );
}