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
      icon: (
        <svg
          className="size-4 text-emerald-brand-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
          />
        </svg>
      ),
    },
    {
      label: "Client Type",
      value: project.data.client_type,
      icon: (
        <svg
          className="size-4 text-emerald-brand-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006A2.18 2.18 0 0118 15.75H6a2.18 2.18 0 01-1.5-.6M1.5 14.15v-5.45c0-1.08.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m0 0V5.25A2.25 2.25 0 019 3h6a2.25 2.25 0 012.25 2.25v2.25"
          />
        </svg>
      ),
    },
    {
      label: "Industry",
      value: project.data.industry,
      icon: (
        <svg
          className="size-4 text-emerald-brand-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.778.099-1.533.284-2.253"
          />
        </svg>
      ),
    },
    {
      label: "Duration",
      value: project.data.duration,
      icon: (
        <svg
          className="size-4 text-emerald-brand-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      label: "Team Size",
      value: project.data.team_size,
      icon: (
        <svg
          className="size-4 text-emerald-brand-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
          />
        </svg>
      ),
    },
  ].filter(
    (item): item is typeof item & { value: string } => Boolean(item.value),
  );

  if (information.length === 0) {
    return null;
  }

  return (
    <section
      id="case-study"
      aria-labelledby="project-information-heading"
      className="border-b border-cool-gray-200/70 bg-white py-10 sm:py-14"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="project-information-heading" className="sr-only">
          Project Information &amp; Key Details
        </h2>

        <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {information.map((item) => (
            <div
              key={item.label}
              className="group flex flex-col justify-between rounded-2xl border border-cool-gray-200/80 bg-cool-gray-50/50 p-5 transition duration-150 hover:-translate-y-0.5 hover:border-emerald-brand-400 hover:bg-white hover:shadow-brand-sm"
            >
              <div className="flex items-center justify-between">
                <dt className="text-xs font-bold uppercase tracking-[0.14em] text-emerald-brand-800">
                  {item.label}
                </dt>
                <div className="flex size-7 items-center justify-center rounded-lg bg-emerald-brand-500/10">
                  {item.icon}
                </div>
              </div>

              <dd className="mt-3 text-base font-extrabold tracking-tight text-navy-950 sm:text-lg">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
