import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

import type { ServiceDocument } from "../../../prismicio-types";

interface ServiceCTAProps {
  service: ServiceDocument;
}

export default function ServiceCTA({ service }: ServiceCTAProps) {
  if (
    !service.data.cta[0]?.cta_heading &&
    service.data.cta[0]?.cta_description.length === 0
  ) {
    return null;
  }

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-navy-900 px-6 py-10 text-center sm:px-10 sm:py-12">
          {service.data.cta[0]?.cta_heading && (
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              {service.data.cta[0].cta_heading}
            </h2>
          )}

          <div className="mx-auto mt-4 max-w-xl text-base leading-7 text-cool-gray-200">
            <PrismicRichText field={service.data.cta[0]?.cta_description} />
          </div>

          {service.data.cta[0]?.cta_button.link_type !== "Any" && (
            <PrismicNextLink
              field={service.data.cta[0]?.cta_button}
              className="mt-7 inline-flex min-h-12 items-center justify-center rounded-lg bg-emerald-brand-500 px-6 py-3 font-bold text-navy-950 hover:bg-emerald-brand-400"
            >
              Start a Project
            </PrismicNextLink>
          )}
        </div>
      </div>
    </section>
  );
}
