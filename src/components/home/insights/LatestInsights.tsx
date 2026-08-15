import Link from "next/link";

import InsightCard from "@/components/home/insights/InsightCard";
import SectionHeading from "@/components/shared/SectionHeading";
import { HOME_INSIGHTS } from "@/constants/home/insight";

export default function LatestInsights() {
  const featuredInsights = HOME_INSIGHTS.filter(
    (insight) => insight.featured,
  ).sort(
    (firstInsight, secondInsight) => firstInsight.order - secondInsight.order,
  );

  return (
    <section
      aria-labelledby="home-insights-heading"
      className="bg-cool-gray-50 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="home-insights-heading"
            eyebrow="Latest Insights"
            title="Practical articles on modern software engineering"
            description="Technical articles based on full-stack development, application architecture, databases, cloud deployment, and production engineering."
          />

          <Link
            href="/blog"
            className="group inline-flex min-h-11 shrink-0 items-center gap-2 self-start rounded-lg border border-cool-gray-300 bg-white px-5 py-2.5 text-sm font-bold text-navy-900 transition duration-200 hover:border-emerald-brand-500 hover:text-emerald-brand-700 lg:self-auto"
          >
            View All Articles
            <ArrowRightIcon />
          </Link>
        </div>

        <div className="mt-12 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {featuredInsights.map((insight, index) => (
            <InsightCard
              key={insight.id}
              insight={insight}
              priority={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ArrowRightIcon() {
  return (
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
  );
}
