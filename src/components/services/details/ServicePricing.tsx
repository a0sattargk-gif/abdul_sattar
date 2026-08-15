import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

import type { ServiceDocument } from "../../../../prismicio-types";

interface ServicePricingProps {
  plans: ServiceDocument["data"]["pricing_plans"];
}

export default function ServicePricing({ plans }: ServicePricingProps) {
  const visiblePlans = plans.filter(
    (plan) => plan.plan_name || plan.plan_description || plan.price,
  );

  if (visiblePlans.length === 0) {
    return null;
  }

  return (
    <section
      aria-labelledby="service-pricing-heading"
      className="bg-cool-gray-50 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-brand-700">
            Pricing
          </p>

          <h2
            id="service-pricing-heading"
            className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl"
          >
            Choose the right engagement
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-cool-gray-700">
            Final pricing depends on scope, complexity, and delivery
            requirements.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {visiblePlans.map((plan, index) => (
            <article
              key={`${plan.plan_name}-${index}`}
              className={[
                "relative flex h-full flex-col rounded-3xl border p-6 shadow-brand-sm sm:p-7",
                plan.featured
                  ? "border-emerald-brand-500 bg-navy-900 text-white"
                  : "border-cool-gray-200 bg-white",
              ].join(" ")}
            >
              {plan.featured && (
                <span className="absolute right-5 top-5 rounded-full bg-emerald-brand-500 px-3 py-1 text-xs font-bold text-navy-950">
                  Recommended
                </span>
              )}

              {plan.plan_name && (
                <h3
                  className={[
                    "pr-24 text-xl font-extrabold",
                    plan.featured ? "text-white" : "text-navy-900",
                  ].join(" ")}
                >
                  {plan.plan_name}
                </h3>
              )}

              {plan.plan_description && (
                <PrismicRichText field={plan.plan_description} />
              )}

              {plan.price && (
                <p
                  className={[
                    "mt-6 text-3xl font-extrabold",
                    plan.featured ? "text-emerald-brand-300" : "text-navy-900",
                  ].join(" ")}
                >
                  {plan.price}
                </p>
              )}

              {plan.timeline && (
                <p
                  className={[
                    "mt-2 text-sm font-semibold",
                    plan.featured ? "text-cool-gray-300" : "text-cool-gray-600",
                  ].join(" ")}
                >
                  {plan.timeline}
                </p>
              )}

              <div
                className={[
                  "mt-6 flex-1 text-sm leading-7",
                  "[&_ul]:grid [&_ul]:gap-3",
                  "[&_li]:relative [&_li]:pl-6",
                  "[&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:top-2.5",
                  "[&_li]:before:size-2 [&_li]:before:rounded-full",
                  plan.featured
                    ? "text-cool-gray-200 [&_li]:before:bg-emerald-brand-400"
                    : "text-cool-gray-700 [&_li]:before:bg-emerald-brand-500",
                ].join(" ")}
              >
                <PrismicRichText field={plan.features} />
              </div>

              {plan.button.link_type !== "Any" && (
                <PrismicNextLink
                  field={plan.button}
                  className={[
                    "mt-7 inline-flex min-h-12 items-center justify-center rounded-lg px-5 py-3 font-bold transition",
                    plan.featured
                      ? "bg-emerald-brand-500 text-navy-950 hover:bg-emerald-brand-400"
                      : "bg-navy-900 text-white hover:bg-navy-800",
                  ].join(" ")}
                >
                  Choose This Plan
                </PrismicNextLink>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
