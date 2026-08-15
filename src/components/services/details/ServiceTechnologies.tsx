import type { ServiceDocument } from "../../../../prismicio-types";

interface ServiceTechnologiesProps {
  technologies: ServiceDocument["data"]["technologies"];
}

export default function ServiceTechnologies({
  technologies,
}: ServiceTechnologiesProps) {
  const visibleTechnologies = technologies.filter((item) => item.technology);

  if (visibleTechnologies.length === 0) {
    return null;
  }

  return (
    <section
      aria-labelledby="service-technologies-heading"
      className="bg-cool-gray-50 py-14 sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-brand-700">
            Technology Stack
          </p>

          <h2
            id="service-technologies-heading"
            className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900"
          >
            Technologies used for this service
          </h2>
        </div>

        <ul className="mt-8 flex flex-wrap justify-center gap-3">
          {visibleTechnologies.map((item) => (
            <li
              key={item.technology}
              className="rounded-full border border-cool-gray-200 bg-white px-4 py-2 text-sm font-semibold text-navy-800"
            >
              {item.technology}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
