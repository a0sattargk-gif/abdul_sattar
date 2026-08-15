const capabilityItems = [
  {
    id: "frontend",
    label: "Frontend Engineering",
    value: "React, Next.js and microfrontend architecture",
  },
  {
    id: "backend",
    label: "Backend Development",
    value: "Node.js, NestJS and Django REST Framework",
  },
  {
    id: "mobile",
    label: "Mobile Development",
    value: "Cross-platform applications with React Native",
  },
  {
    id: "cloud-data",
    label: "Cloud and Data",
    value: "AWS, PostgreSQL, MongoDB and Supabase",
  },
];

const productionStack = ["React", "Next.js", "NestJS", "PostgreSQL", "AWS"];

export default function HeroVisual() {
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-xl">
      <div className="absolute -left-8 top-12 size-36 rounded-full bg-emerald-brand-500/20 blur-3xl" />

      <div className="absolute -right-8 bottom-8 size-40 rounded-full bg-emerald-brand-400/10 blur-3xl" />

      <div className="relative overflow-hidden rounded-3xl border border-cool-gray-300/20 bg-navy-800/95 p-5 shadow-2xl backdrop-blur sm:p-7">
        <div className="flex items-center justify-between gap-4 border-b border-cool-gray-300/15 pb-5">
          <div>
            <p className="text-sm font-bold text-white">
              Full-Stack Engineering
            </p>

            <p className="mt-1 text-xs text-cool-gray-300">
              Architecture and delivery capabilities
            </p>
          </div>

          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-brand-300/25 bg-emerald-brand-500/15 px-3 py-1.5 text-xs font-semibold text-emerald-brand-300">
            <span className="size-2 rounded-full bg-emerald-brand-400" />
            Available
          </span>
        </div>

        <div className="mt-6 grid gap-3">
          {capabilityItems.map((item, index) => (
            <div
              key={item.id}
              className="flex items-center gap-4 rounded-2xl border border-cool-gray-300/20 bg-navy-700/70 p-4"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-emerald-brand-500/15 text-sm font-extrabold text-emerald-brand-300">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div>
                <p className="text-sm font-bold text-white">{item.label}</p>

                <p className="mt-1 text-xs leading-5 text-cool-gray-300">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-cool-gray-300/20 bg-navy-900/80 p-4">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-bold text-white">Production Stack</p>

              <p className="mt-1 text-xs text-cool-gray-300">
                Technologies used across modern applications
              </p>
            </div>

            <span className="rounded-full border border-emerald-brand-300/20 bg-emerald-brand-500/15 px-3 py-1 text-xs font-bold text-emerald-brand-300">
              Scalable
            </span>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {productionStack.map((technology) => (
              <span
                key={technology}
                className="rounded-lg border border-cool-gray-300/20 bg-white/5 px-3 py-1.5 text-xs font-semibold text-cool-gray-200"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-cool-gray-300/20 bg-navy-700/70 p-4">
            <p className="text-lg font-extrabold text-emerald-brand-300 sm:text-xl">
              Web + Mobile
            </p>

            <p className="mt-1 text-xs leading-5 text-cool-gray-300">
              React, Next.js and React Native
            </p>
          </div>

          <div className="rounded-2xl border border-cool-gray-300/20 bg-navy-700/70 p-4">
            <p className="text-lg font-extrabold text-emerald-brand-300 sm:text-xl">
              Cloud Ready
            </p>

            <p className="mt-1 text-xs leading-5 text-cool-gray-300">
              AWS and distributed system architecture
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
