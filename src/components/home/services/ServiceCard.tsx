import Link from "next/link";

import ServiceIcon from "@/components/home/services/ServiceIcon";

import type { HomeService } from "@/types/home";

interface ServiceCardProps {
  service: HomeService;
}

export default function ServiceCard({
  service,
}: ServiceCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-cool-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-brand-300 hover:shadow-lg">
      <div className="flex size-12 items-center justify-center rounded-xl bg-emerald-brand-50 text-emerald-brand-700">
        <ServiceIcon icon={service.icon} />
      </div>

      <h3 className="mt-5 text-xl font-bold tracking-tight text-navy-900">
        {service.title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-6 text-cool-gray-500">
        {service.description}
      </p>

      <Link
        href={service.href}
        className="mt-6 inline-flex items-center gap-2 self-start text-sm font-bold text-emerald-brand-700 transition hover:text-emerald-brand-800"
      >
        Learn more

        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          fill="none"
          className="size-4 transition-transform duration-200 group-hover:translate-x-1"
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
    </article>
  );
}