import Link from "next/link";

import type { ServiceDocument } from "../../../prismicio-types";

interface ServiceDeliverablesProps {
  deliverables: ServiceDocument["data"]["deliverables"];
}

export default function ServiceDeliverables({
  deliverables,
}: ServiceDeliverablesProps) {
  const visibleDeliverables = deliverables.filter(
    (item) => item.title || item.description,
  );

  if (visibleDeliverables.length === 0) {
    return null;
  }

  return (
    <section
      aria-labelledby="service-deliverables-heading"
      className="border-b border-cool-gray-200/70 bg-white py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-brand-600/20 bg-emerald-brand-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.16em] text-emerald-brand-800">
            <span className="size-1.5 rounded-full bg-emerald-brand-600" />
            Deliverables & Artifacts
          </div>

          <h2
            id="service-deliverables-heading"
            className="mt-4 text-2xl font-extrabold tracking-tight text-navy-950 sm:text-3xl lg:text-4xl"
          >
            What You Receive & Own
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-cool-gray-700 sm:text-base">
            Every engagement produces battle-tested codebases and clear handover
            assets with 100% intellectual property ownership and zero lock-in.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleDeliverables.map((item, index) => (
            <article
              key={`${item.title}-${index}`}
              className="group relative flex flex-col justify-between rounded-3xl border border-cool-gray-200/80 bg-cool-gray-50/40 p-6 shadow-brand-sm transition duration-200 hover:-translate-y-1 hover:border-emerald-brand-500/40 hover:bg-white hover:shadow-brand-md sm:p-7"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center justify-center rounded-xl bg-emerald-brand-500/10 px-3 py-1 text-xs font-extrabold tracking-wider text-emerald-brand-800 border border-emerald-brand-500/20">
                    PHASE {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="flex size-7 items-center justify-center rounded-full bg-emerald-brand-500/10 text-emerald-brand-700 group-hover:bg-emerald-brand-500 group-hover:text-navy-950 transition-colors duration-150">
                    <svg
                      className="size-4"
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
                </div>

                {item.title && (
                  <h3 className="mt-5 text-lg font-extrabold tracking-tight text-navy-950 sm:text-xl">
                    {item.title}
                  </h3>
                )}

                {item.description && (
                  <p className="mt-2.5 text-sm leading-relaxed text-cool-gray-700">
                    {item.description}
                  </p>
                )}
              </div>

              <div className="mt-6 flex items-center gap-2 border-t border-cool-gray-200/60 pt-4 text-xs font-semibold text-emerald-brand-700">
                <span className="size-1.5 rounded-full bg-emerald-brand-600" />
                Production-ready handover
              </div>
            </article>
          ))}
        </div>

        {/* Tailored scope banner */}
        <div className="mt-12 rounded-2xl border border-cool-gray-200 bg-cool-gray-50/70 p-6 text-center sm:flex sm:items-center sm:justify-between sm:text-left sm:p-7">
          <div>
            <h4 className="text-base font-bold text-navy-950">
              Need custom deliverables or legacy integrations?
            </h4>
            <p className="mt-1 text-sm text-cool-gray-700">
              Engagements can be adapted to integrate with your existing CI/CD,
              cloud providers, or security policies.
            </p>
          </div>
          <Link
            href="/contact"
            className="mt-4 inline-flex shrink-0 items-center gap-1.5 rounded-xl border border-navy-900 bg-white px-5 py-2.5 text-xs font-bold text-navy-950 shadow-brand-sm transition hover:bg-navy-900 hover:text-white sm:mt-0"
          >
            Inquire About Custom Scope →
          </Link>
        </div>
      </div>
    </section>
  );
}
