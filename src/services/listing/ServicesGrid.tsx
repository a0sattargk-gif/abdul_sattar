"use client";

import PaginationControls from "@/components/shared/PaginationControls";
import { usePagination } from "@/hooks/usePagination";

import { ServiceDocument } from "../../../prismicio-types";
import ServiceCard from "./ServiceCard";

interface ServicesGridProps {
  services: ServiceDocument[];
  pageSize?: number;
}

export default function ServicesGrid({
  services,
  pageSize = 6,
}: ServicesGridProps) {
  const pagination = usePagination({
    items: services,
    pageSize,
    scrollToTopOnChange: true,
    scrollTargetSelector: "#services-grid-heading",
  });

  return (
    <section
      aria-labelledby="services-grid-heading"
      className="bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-brand-700">
            Core Services
          </p>

          <h2
            id="services-grid-heading"
            className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl"
          >
            Choose the support your product needs
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-cool-gray-700">
            Each service can be delivered as a complete project or as support
            for an existing team.
          </p>
        </div>

        {services.length > 0 ? (
          <>
            <div className="mt-10 grid gap-7 md:grid-cols-2">
              {pagination.paginatedItems.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  priority={index < 2}
                />
              ))}
            </div>

            <PaginationControls
              {...pagination}
              itemLabel="services"
            />
          </>
        ) : (
          <div className="mt-10 rounded-2xl border border-cool-gray-300 bg-cool-gray-50 p-8 text-center">
            <p className="text-cool-gray-700">
              Services are currently being updated.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
