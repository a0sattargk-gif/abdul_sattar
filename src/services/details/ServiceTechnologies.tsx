import type { ServiceDocument } from "../../../prismicio-types";

interface ServiceTechnologiesProps {
  technologies: ServiceDocument["data"]["technologies"];
}

export default function ServiceTechnologies({
  technologies,
}: ServiceTechnologiesProps) {
  // Support both separate rows and newline/comma-separated entries from Prismic
  const parsedTechnologies = Array.from(
    new Set(
      technologies.flatMap((item) =>
        item.technology
          ? item.technology
              .split(/[\r\n,]+/)
              .map((t) => t.trim())
              .filter(Boolean)
          : [],
      ),
    ),
  );

  if (parsedTechnologies.length === 0) {
    return null;
  }

  return (
    <section
      aria-labelledby="service-technologies-heading"
      className="border-b border-cool-gray-200/70 bg-cool-gray-50/60 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-brand-600/20 bg-emerald-brand-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.16em] text-emerald-brand-800">
            <span className="size-1.5 rounded-full bg-emerald-brand-600" />
            Tech Stack & Ecosystem
          </div>

          <h2
            id="service-technologies-heading"
            className="mt-4 text-2xl font-extrabold tracking-tight text-navy-950 sm:text-3xl lg:text-4xl"
          >
            Engineered with Modern, Production-Grade Tools
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-cool-gray-700 sm:text-base">
            Every technology in this stack is selected for strict type safety,
            predictable maintainability, and optimal Core Web Vitals performance.
          </p>
        </div>

        <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3 sm:gap-3.5">
          {parsedTechnologies.map((tech) => (
            <span
              key={tech}
              className="group inline-flex items-center gap-2.5 rounded-xl border border-cool-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-navy-900 shadow-brand-sm transition duration-150 hover:-translate-y-0.5 hover:border-emerald-brand-400 hover:text-navy-950 hover:shadow-brand-md"
            >
              <span className="size-1.5 rounded-full bg-emerald-brand-500 transition-transform duration-150 group-hover:scale-125" />
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
