import ResultCard from "@/components/home/results/ResultCard";
import ResultsSummary from "@/components/home/results/ResultsSummary";
import SectionHeading from "@/components/shared/SectionHeading";

import { HOME_RESULTS, HOME_RESULTS_SUMMARY } from "@/constants/home/results";

export default function ResultsSection() {
  return (
    <section
      aria-labelledby="home-results-heading"
      className="bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <SectionHeading
              id="home-results-heading"
              eyebrow="Engineering Impact"
              title="Software designed for reliability, growth, and long-term maintenance"
              description="I focus on more than feature delivery. Each product is structured around maintainability, production readiness, system integration, and future growth."
            />

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {HOME_RESULTS.map((result) => (
                <ResultCard key={result.id} result={result} />
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-28">
            <ResultsSummary items={HOME_RESULTS_SUMMARY} />
          </div>
        </div>
      </div>
    </section>
  );
}
