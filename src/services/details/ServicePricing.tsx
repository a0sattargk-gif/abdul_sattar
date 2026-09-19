import Link from "next/link";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, type JSXMapSerializer } from "@prismicio/react";

import type { ServiceDocument } from "../../../prismicio-types";

interface ServicePricingProps {
  plans: ServiceDocument["data"]["pricing_plans"];
}

const darkFeatureComponents: JSXMapSerializer = {
  listItem: ({ children }) => (
    <li className="flex items-start gap-3 text-sm leading-relaxed text-cool-gray-200">
      <svg
        className="mt-1 size-4 shrink-0 text-emerald-brand-400"
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

const lightFeatureComponents: JSXMapSerializer = {
  listItem: ({ children }) => (
    <li className="flex items-start gap-3 text-sm leading-relaxed text-cool-gray-700">
      <svg
        className="mt-1 size-4 shrink-0 text-emerald-brand-600"
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
    <p className="mt-2 text-sm leading-relaxed text-cool-gray-300">{children}</p>
  ),
};

const lightDescComponents: JSXMapSerializer = {
  paragraph: ({ children }) => (
    <p className="mt-2 text-sm leading-relaxed text-cool-gray-600">{children}</p>
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
      className="border-b border-cool-gray-200/70 bg-cool-gray-50/70 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-brand-600/20 bg-emerald-brand-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.16em] text-emerald-brand-800">
            <span className="size-1.5 rounded-full bg-emerald-brand-600" />
            Transparent Pricing
          </div>

          <h2
            id="service-pricing-heading"
            className="mt-4 text-2xl font-extrabold tracking-tight text-navy-950 sm:text-3xl lg:text-4xl"
          >
            Predictable Investment, Real Impact
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-cool-gray-700 sm:text-base">
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
                  "relative flex flex-col justify-between rounded-3xl p-7 transition duration-200 sm:p-8",
                  isFeatured
                    ? "z-10 border-2 border-emerald-brand-400 bg-navy-950 text-white shadow-brand-lg"
                    : "border border-cool-gray-200 bg-white text-navy-900 shadow-brand-sm hover:border-cool-gray-300 hover:shadow-brand-md",
                ].join(" ")}
              >
                {isFeatured && (
                  <span className="absolute -top-3.5 right-6 rounded-full bg-emerald-brand-500 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-navy-950 shadow-md">
                    Recommended
                  </span>
                )}

                <div>
                  <div className="flex items-start justify-between">
                    <div>
                      {plan.plan_name && (
                        <h3
                          className={[
                            "text-xl font-extrabold tracking-tight sm:text-2xl",
                            isFeatured ? "text-white" : "text-navy-950",
                          ].join(" ")}
                        >
                          {plan.plan_name}
                        </h3>
                      )}

                      {plan.timeline && (
                        <p
                          className={[
                            "mt-1 text-xs font-semibold uppercase tracking-wider",
                            isFeatured
                              ? "text-cool-gray-400"
                              : "text-cool-gray-500",
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
                      components={
                        isFeatured ? darkDescComponents : lightDescComponents
                      }
                    />
                  )}

                  <div className="mt-6 border-t border-b py-6">
                    {hasCustomPrice ? (
                      <div>
                        <p
                          className={[
                            "text-3xl font-extrabold tracking-tight sm:text-4xl",
                            isFeatured
                              ? "text-emerald-brand-300"
                              : "text-navy-950",
                          ].join(" ")}
                        >
                          Custom Scope
                        </p>
                        <p
                          className={[
                            "mt-1 text-xs font-medium",
                            isFeatured
                              ? "text-cool-gray-400"
                              : "text-cool-gray-500",
                          ].join(" ")}
                        >
                          Tailored quote based on your exact requirements
                        </p>
                      </div>
                    ) : (
                      <div>
                        <p
                          className={[
                            "text-3xl font-extrabold tracking-tight sm:text-4xl",
                            isFeatured
                              ? "text-emerald-brand-300"
                              : "text-navy-950",
                          ].join(" ")}
                        >
                          {plan.price}
                        </p>
                        <p
                          className={[
                            "mt-1 text-xs font-medium",
                            isFeatured
                              ? "text-cool-gray-400"
                              : "text-cool-gray-500",
                          ].join(" ")}
                        >
                          Fixed-price milestone engagement
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="mt-6">
                    <p
                      className={[
                        "text-xs font-bold uppercase tracking-wider mb-4",
                        isFeatured ? "text-cool-gray-300" : "text-navy-900",
                      ].join(" ")}
                    >
                      Included in this tier:
                    </p>

                    <PrismicRichText
                      field={plan.features}
                      components={
                        isFeatured
                          ? darkFeatureComponents
                          : lightFeatureComponents
                      }
                    />
                  </div>
                </div>

                <div className="mt-8 border-t pt-6">
                  {plan.button && plan.button.link_type !== "Any" ? (
                    <PrismicNextLink
                      field={plan.button}
                      className={[
                        "inline-flex min-h-12 w-full items-center justify-center rounded-xl px-5 py-3.5 text-sm font-extrabold transition shadow-sm",
                        isFeatured
                          ? "bg-emerald-brand-500 text-navy-950 hover:bg-emerald-brand-400 hover:shadow-brand-md"
                          : "bg-navy-900 text-white hover:bg-navy-800",
                      ].join(" ")}
                    >
                      Choose This Plan →
                    </PrismicNextLink>
                  ) : (
                    <Link
                      href="/contact"
                      className={[
                        "inline-flex min-h-12 w-full items-center justify-center rounded-xl px-5 py-3.5 text-sm font-extrabold transition shadow-sm",
                        isFeatured
                          ? "bg-emerald-brand-500 text-navy-950 hover:bg-emerald-brand-400 hover:shadow-brand-md"
                          : "bg-navy-900 text-white hover:bg-navy-800",
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
        <div className="mt-12 text-center text-xs text-cool-gray-500 max-w-2xl mx-auto">
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
