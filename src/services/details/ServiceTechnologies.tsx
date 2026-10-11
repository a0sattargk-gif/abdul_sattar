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
      className="border-b border-white/[0.08] bg-transparent py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.16em] text-emerald-400">
            <span className="size-1.5 rounded-full bg-emerald-400" />
            Tech Stack & Ecosystem
          </div>

          <h2
            id="service-technologies-heading"
            className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl"
          >
            Engineered with Modern, Production-Grade Tools
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-200 sm:text-base">
            Every technology in this stack is selected for strict type safety,
            predictable maintainability, and optimal Core Web Vitals performance.
          </p>
        </div>

        <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3 sm:gap-3.5">
          {parsedTechnologies.map((tech) => (
            <span
              key={tech}
              className="group inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-[#0b1120]/80 px-4 py-2.5 text-sm font-semibold text-slate-200 shadow-lg backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-500/40 hover:text-white hover:shadow-[0_0_15px_rgba(16,185,129,0.2)]"
            >
              <span className="size-1.5 rounded-full bg-emerald-400 transition-transform duration-150 group-hover:scale-125" />
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
