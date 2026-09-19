import { PrismicRichText, type JSXMapSerializer } from "@prismicio/react";

import type { ServiceDocument } from "../../../prismicio-types";

interface ServiceOverviewProps {
  service: ServiceDocument;
}

const overviewComponents: JSXMapSerializer = {
  paragraph: ({ children }) => (
    <p className="text-base sm:text-lg leading-relaxed text-cool-gray-700">
      {children}
    </p>
  ),
  heading2: ({ children }) => (
    <h2 className="mt-8 mb-4 text-2xl sm:text-3xl font-extrabold tracking-tight text-navy-950">
      {children}
    </h2>
  ),
  heading3: ({ children }) => (
    <h3 className="mt-6 mb-3 text-xl font-bold tracking-tight text-navy-900">
      {children}
    </h3>
  ),
  list: ({ children }) => (
    <ul className="my-4 space-y-2 pl-6 list-disc text-cool-gray-700">{children}</ul>
  ),
  listItem: ({ children }) => (
    <li className="leading-relaxed">{children}</li>
  ),
  strong: ({ children }) => (
    <strong className="font-bold text-navy-950">{children}</strong>
  ),
};

export default function ServiceOverview({ service }: ServiceOverviewProps) {
  if (
    !service.data.overview_heading &&
    (!service.data.overview_content || service.data.overview_content.length === 0)
  ) {
    return null;
  }

  const guarantees = [
    {
      title: "Architecture-First",
      desc: "Built with scalable design patterns and clean boundaries to ensure long-term agility.",
    },
    {
      title: "100% Code Ownership",
      desc: "Full intellectual property transfer, clean Git history, and complete documentation.",
    },
    {
      title: "Production Standards",
      desc: "Strict TypeScript, automated testing, and optimized Core Web Vitals out of the box.",
    },
  ];

  return (
    <section
      aria-labelledby="service-overview-heading"
      className="bg-white py-16 sm:py-20 border-b border-cool-gray-100"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          {/* Main Overview */}
          <div>
            <div className="flex items-center gap-2">
              <span aria-hidden="true" className="h-px w-8 bg-emerald-brand-700" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-brand-700">
                Service Overview
              </p>
            </div>

            {service.data.overview_heading && (
              <h2
                id="service-overview-heading"
                className="mt-3 text-2xl font-extrabold tracking-tight text-navy-950 sm:text-3xl lg:text-4xl"
              >
                {service.data.overview_heading}
              </h2>
            )}

            <div className="mt-6 space-y-5">
              <PrismicRichText
                field={service.data.overview_content}
                components={overviewComponents}
              />
            </div>
          </div>

          {/* Value Proposition Sidebar Card */}
          <div className="rounded-3xl border border-cool-gray-200 bg-navy-50/50 p-6 sm:p-8">
            <h3 className="text-sm font-bold uppercase tracking-wider text-navy-950">
              Why Partner With Me
            </h3>
            <p className="mt-2 text-xs text-cool-gray-600">
              Direct senior-level execution without agency overhead or junior handoffs.
            </p>

            <div className="mt-6 space-y-5">
              {guarantees.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-brand-500/10 text-emerald-brand-700">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-navy-900">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-xs text-cool-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-cool-gray-200 pt-5 text-center sm:text-left">
              <p className="text-xs font-semibold text-cool-gray-500">
                Ready to talk specifics?
              </p>
              <a
                href="/contact"
                className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-brand-700 hover:text-emerald-brand-800 transition"
              >
                Schedule an introductory call →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
