import { PrismicRichText } from "@prismicio/react";

import type { ServiceDocument } from "../../../prismicio-types";

interface ServiceOverviewProps {
  service: ServiceDocument;
}

export default function ServiceOverview({ service }: ServiceOverviewProps) {
  if (
    !service.data.overview_heading &&
    service.data.overview_content.length === 0
  ) {
    return null;
  }

  return (
    <section
      aria-labelledby="service-overview-heading"
      className="bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {service.data.overview_heading && (
          <h2
            id="service-overview-heading"
            className="text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl"
          >
            {service.data.overview_heading}
          </h2>
        )}

        <div className="mt-5 space-y-5 text-base leading-8 text-cool-gray-700">
          <PrismicRichText field={service.data.overview_content} />
        </div>
      </div>
    </section>
  );
}
