import type { ServiceDocument } from "../../../../prismicio-types";

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
      className="bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-brand-700">
            Deliverables
          </p>

          <h2
            id="service-deliverables-heading"
            className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl"
          >
            What you receive
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visibleDeliverables.map((item, index) => (
            <article
              key={`${item.title}-${index}`}
              className="rounded-2xl border border-cool-gray-200 bg-cool-gray-50 p-5 sm:p-6"
            >
              <span className="grid size-10 place-items-center rounded-xl bg-emerald-brand-500/10 text-sm font-extrabold text-emerald-brand-700">
                {String(index + 1).padStart(2, "0")}
              </span>

              {item.title && (
                <h3 className="mt-4 text-lg font-extrabold text-navy-900">
                  {item.title}
                </h3>
              )}

              {item.description && (
                <p className="mt-2 text-sm leading-6 text-cool-gray-700">
                  {item.description}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
