import Link from "next/link";

import ServiceCard from "@/components/home/services/ServiceCard";
import SectionHeading from "@/components/shared/SectionHeading";

import { HOME_SERVICES } from "@/constants/home/services";

export default function ServicesSection() {
  const featuredServices = HOME_SERVICES.filter(
    (service) => service.featured,
  ).sort(
    (firstService, secondService) => firstService.order - secondService.order,
  );

  return (
    <section
      aria-labelledby="home-services-heading"
      className="bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Services"
            title="Full-stack solutions designed for scalable products"
            description="From frontend interfaces and backend APIs to mobile applications and distributed architecture, I build complete software solutions around business requirements."
          />

          <Link
            href="/services"
            className="group inline-flex min-h-11 shrink-0 items-center gap-2 self-start rounded-lg border border-cool-gray-300 px-5 py-2.5 text-sm font-bold text-navy-900 transition duration-200 hover:border-emerald-brand-500 hover:text-emerald-brand-700 lg:self-auto"
          >
            View All Services
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              fill="none"
              className="size-5 transition-transform duration-200 group-hover:translate-x-1"
            >
              <path
                d="M4 10H16M11 5L16 10L11 15"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featuredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
