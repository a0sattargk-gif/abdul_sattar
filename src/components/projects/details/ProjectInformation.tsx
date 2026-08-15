import type { ProjectDocument } from "../../../../prismicio-types";

interface ProjectInformationProps {
  project: ProjectDocument;
}

export default function ProjectInformation({
  project,
}: ProjectInformationProps) {
  const information = [
    {
      label: "Role",
      value: project.data.role,
    },
    {
      label: "Client type",
      value: project.data.client_type,
    },
    {
      label: "Industry",
      value: project.data.industry,
    },
    {
      label: "Duration",
      value: project.data.duration,
    },
    {
      label: "Team size",
      value: project.data.team_size,
    },
  ].filter(
    (
      item,
    ): item is {
      label: string;
      value: string;
    } => Boolean(item.value),
  );

  if (information.length === 0) {
    return null;
  }

  return (
    <section
      aria-labelledby="project-information-heading"
      className="bg-white py-12 sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="project-information-heading" className="sr-only">
          Project information
        </h2>

        <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {information.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-cool-gray-200 bg-cool-gray-50 p-5"
            >
              <dt className="text-xs font-bold uppercase tracking-[0.14em] text-emerald-brand-700">
                {item.label}
              </dt>

              <dd className="mt-2 text-sm font-bold leading-6 text-navy-900">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
