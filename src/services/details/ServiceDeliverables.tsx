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
      className="border-b border-white/[0.08] bg-[#030712]/40 py-16 backdrop-blur-md sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.16em] text-emerald-400">
            <span className="size-1.5 rounded-full bg-emerald-400" />
            Deliverables & Artifacts
          </div>

          <h2
            id="service-deliverables-heading"
            className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl"
          >
            What You Receive & Own
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-200 sm:text-base">
            Every engagement produces battle-tested codebases and clear handover
            assets with 100% intellectual property ownership and zero lock-in.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleDeliverables.map((item, index) => (
            <article
              key={`${item.title}-${index}`}
              className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-[#0b1120]/80 p-6 shadow-2xl backdrop-blur-xl transition duration-200 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-[0_0_25px_rgba(16,185,129,0.15)] sm:p-7"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center justify-center rounded-xl bg-emerald-500/10 px-3 py-1 text-xs font-extrabold tracking-wider text-emerald-400 border border-emerald-500/30">
                    PHASE {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="flex size-7 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-colors duration-150">
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
                  <h3 className="mt-5 text-lg font-extrabold tracking-tight text-white sm:text-xl">
                    {item.title}
                  </h3>
                )}

                {item.description && (
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-200">
                    {item.description}
                  </p>
                )}
              </div>

              <div className="mt-6 flex items-center gap-2 border-t border-white/10 pt-4 text-xs font-semibold text-emerald-400">
                <span className="size-1.5 rounded-full bg-emerald-400" />
                Production-ready handover
              </div>
            </article>
          ))}
        </div>

        {/* Tailored scope banner */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-[#0b1120]/90 p-6 text-center sm:flex sm:items-center sm:justify-between sm:text-left sm:p-7 backdrop-blur-xl">
          <div>
            <h4 className="text-base font-bold text-white">
              Need custom deliverables or legacy integrations?
            </h4>
            <p className="mt-1 text-sm text-slate-200">
              Engagements can be adapted to integrate with your existing CI/CD,
              cloud providers, or security policies.
            </p>
          </div>
          <Link
            href="/contact"
            className="mt-4 inline-flex shrink-0 items-center gap-1.5 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-5 py-2.5 text-xs font-bold text-emerald-400 shadow-sm transition hover:bg-emerald-500 hover:text-navy-950 sm:mt-0"
          >
            Inquire About Custom Scope →
          </Link>
        </div>
      </div>
    </section>
  );
}
