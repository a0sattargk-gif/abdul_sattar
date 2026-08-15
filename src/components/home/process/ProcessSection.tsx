import Link from "next/link";

import ProcessStepCard from "@/components/home/process/ProcessStepCard";
import SectionHeading from "@/components/shared/SectionHeading";

import { HOME_PROCESS_STEPS } from "@/constants/home/process";

export default function ProcessSection() {
  const processSteps = [...HOME_PROCESS_STEPS].sort(
    (firstStep, secondStep) => firstStep.order - secondStep.order,
  );

  return (
    <section
      aria-labelledby="home-process-heading"
      className="bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              id="home-process-heading"
              eyebrow="Working Process"
              title="A structured path from idea to production"
              description="Every project follows a clear delivery process that reduces uncertainty, improves communication, and keeps technical decisions aligned with business goals."
            />

            <div className="mt-8 rounded-2xl border border-cool-gray-200 bg-cool-gray-50 p-6">
              <p className="text-sm font-bold text-navy-900">
                Clear communication throughout delivery
              </p>

              <p className="mt-3 text-sm leading-7 text-cool-gray-700">
                Progress, technical decisions, risks, and next steps remain
                visible throughout the project instead of appearing only at the
                final delivery stage.
              </p>

              <Link
                href="/process"
                className="group mt-5 inline-flex min-h-11 items-center gap-2 rounded-lg font-bold text-emerald-brand-700 transition-colors hover:text-emerald-brand-800"
              >
                Explore My Process
                <ArrowRightIcon />
              </Link>
            </div>
          </div>

          <ol className="grid gap-6">
            {processSteps.map((step, index) => (
              <ProcessStepCard
                key={step.id}
                step={step}
                isLast={index === processSteps.length - 1}
              />
            ))}
          </ol>
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
