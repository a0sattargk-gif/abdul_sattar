import Link from "next/link";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, type JSXMapSerializer } from "@prismicio/react";

import type { ServiceDocument } from "../../../prismicio-types";

interface ServicePricingProps {
  plans: ServiceDocument["data"]["pricing_plans"];
}

const darkFeatureComponents: JSXMapSerializer = {
  listItem: ({ children }) => (
    <li className="flex items-start gap-3 text-sm leading-relaxed text-slate-200">
      <svg
        className="mt-1 size-4 shrink-0 text-emerald-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2.5"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12.75l6 6 9-13.5"
        />
      </svg>
      <span>{children}</span>
    </li>
  ),
  list: ({ children }) => <ul className="space-y-3">{children}</ul>,
  paragraph: ({ children }) => <p className="inline">{children}</p>,
};

const darkDescComponents: JSXMapSerializer = {
  paragraph: ({ children }) => (
    <p className="mt-2 text-sm leading-relaxed text-slate-300">{children}</p>
  ),
};

export default function ServicePricing({ plans }: ServicePricingProps) {
  const visiblePlans = plans.filter(
    (plan) => plan.plan_name || plan.plan_description || plan.price,
  );

  if (visiblePlans.length === 0) {
    return null;
  }

  const gridColsClass =
    visiblePlans.length === 1
      ? "mx-auto max-w-lg"
      : visiblePlans.length === 2
        ? "mx-auto max-w-4xl lg:grid-cols-2"
        : "lg:grid-cols-3";

  return (
    <section
      id="pricing"
      aria-labelledby="service-pricing-heading"
      className="border-b border-white/[0.08] bg-[#030712]/50 py-16 backdrop-blur-md sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.16em] text-emerald-400">
            <span className="size-1.5 rounded-full bg-emerald-400" />
            Transparent Pricing
          </div>

          <h2
            id="service-pricing-heading"
            className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl"
          >
            Predictable Investment, Real Impact
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-200 sm:text-base">
            Choose the engagement model that matches your current product stage.
            All tiers feature direct senior execution with zero agency overhead.
          </p>
        </div>

        <div className={`mt-14 grid gap-8 ${gridColsClass}`}>
          {visiblePlans.map((plan, index) => {
            const isFeatured = Boolean(plan.featured);
            const hasCustomPrice = !plan.price || plan.price.trim() === "";

            return (
              <article
                key={`${plan.plan_name}-${index}`}
                className={[
                  "relative flex flex-col justify-between rounded-3xl p-7 backdrop-blur-xl transition duration-300 sm:p-8",
                  isFeatured
                    ? "z-10 border-2 border-emerald-400 bg-[#0b1120]/95 text-white shadow-[0_0_35px_rgba(16,185,129,0.2)]"
                    : "border border-white/10 bg-[#0b1120]/80 text-white shadow-2xl hover:border-white/20",
                ].join(" ")}
              >
                {isFeatured && (
                  <span className="absolute -top-3.5 right-6 rounded-full bg-emerald-400 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-black shadow-lg">
                    Recommended
                  </span>
                )}

                <div>
                  <div className="flex items-start justify-between">
                    <div>
                      {plan.plan_name && (
                        <h3 className="text-xl font-extrabold tracking-tight text-white sm:text-2xl">
                          {plan.plan_name}
                        </h3>
                      )}

                      {plan.timeline && (
                        <p
                          className={[
                            "mt-1 text-xs font-semibold uppercase tracking-wider",
                            isFeatured
                              ? "text-slate-300"
                              : "text-slate-400",
                          ].join(" ")}
                        >
                          Typical delivery: {plan.timeline}
                        </p>
                      )}
                    </div>
                  </div>

                  {plan.plan_description && (
                    <PrismicRichText
                      field={plan.plan_description}
                      components={darkDescComponents}
                    />
                  )}

                  <div className="mt-6 border-t border-b py-6">
                    {hasCustomPrice ? (
                      <div>
                        <p
                          className="text-3xl font-extrabold tracking-tight sm:text-4xl text-emerald-400"
                        >
                          Custom Scope
                        </p>
                        <p className="mt-1 text-xs font-medium text-slate-300">
                          Tailored quote based on your exact requirements
                        </p>
                      </div>
                    ) : (
                      <div>
                        <p className="text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
                          {plan.price}
                        </p>
                        <p className="mt-1 text-xs font-medium text-slate-300">
                          Fixed-price milestone engagement
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="mt-6">
                    <p className="text-xs font-bold uppercase tracking-wider mb-4 text-emerald-400">
                      Included in this tier:
                    </p>

                    <PrismicRichText
                      field={plan.features}
                      components={darkFeatureComponents}
                    />
                  </div>
                </div>

                <div className="mt-8 border-t border-white/10 pt-6">
                  {plan.button && plan.button.link_type !== "Any" ? (
                    <PrismicNextLink
                      field={plan.button}
                      className={[
                        "inline-flex min-h-12 w-full items-center justify-center rounded-xl px-5 py-3.5 text-sm font-extrabold transition duration-200",
                        isFeatured
                          ? "bg-gradient-to-r from-emerald-500 to-teal-400 text-black shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)]"
                          : "border border-white/15 bg-white/[0.04] text-white hover:border-white/30 hover:bg-white/10",
                      ].join(" ")}
                    >
                      Choose This Plan →
                    </PrismicNextLink>
                  ) : (
                    <Link
                      href="/contact"
                      className={[
                        "inline-flex min-h-12 w-full items-center justify-center rounded-xl px-5 py-3.5 text-sm font-extrabold transition duration-200",
                        isFeatured
                          ? "bg-gradient-to-r from-emerald-500 to-teal-400 text-black shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)]"
                          : "border border-white/15 bg-white/[0.04] text-white hover:border-white/30 hover:bg-white/10",
                      ].join(" ")}
                    >
                      Choose This Plan →
                    </Link>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* Pricing assurance footnotes */}
        <div className="mt-12 text-center text-xs text-slate-400 max-w-2xl mx-auto">
          <p>
            ✓ 100% code ownership &amp; clean Git history &nbsp;•&nbsp; ✓ Direct
            senior developer communication &nbsp;•&nbsp; ✓ Comprehensive
            technical handover
          </p>
        </div>
      </div>
    </section>
  );
}
