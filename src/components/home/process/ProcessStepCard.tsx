import type { ProcessIconName, ProcessStep } from "@/types/home";

interface ProcessStepCardProps {
  step: ProcessStep;
  isLast: boolean;
}

export default function ProcessStepCard({
  step,
  isLast,
}: ProcessStepCardProps) {
  return (
    <li className="relative">
      {!isLast && (
        <span
          aria-hidden="true"
          className="absolute left-6 top-14 hidden h-[calc(100%+1.5rem)] w-px bg-cool-gray-300 lg:block"
        />
      )}

      <article className="relative grid gap-5 rounded-2xl border border-cool-gray-200 bg-white p-6 shadow-brand-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-brand-300 hover:shadow-brand-md sm:grid-cols-[auto_1fr] sm:p-7">
        <div className="relative z-10 grid size-12 shrink-0 place-items-center rounded-xl bg-navy-900 text-emerald-brand-300">
          <ProcessIcon icon={step.icon} />
        </div>

        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-extrabold tracking-[0.14em] text-emerald-brand-700">
              {step.number}
            </span>

            <h3 className="text-xl font-extrabold tracking-tight text-navy-900">
              {step.title}
            </h3>
          </div>

          <p className="mt-3 text-sm leading-7 text-cool-gray-700">
            {step.description}
          </p>

          <ul
            className="mt-5 grid gap-2 sm:grid-cols-2"
            aria-label={`${step.title} deliverables`}
          >
            {step.deliverables.map((deliverable) => (
              <li
                key={deliverable}
                className="flex items-start gap-2 text-sm text-navy-700"
              >
                <span
                  aria-hidden="true"
                  className="mt-2 size-1.5 shrink-0 rounded-full bg-emerald-brand-500"
                />

                <span>{deliverable}</span>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </li>
  );
}

interface ProcessIconProps {
  icon: ProcessIconName;
}

function ProcessIcon({ icon }: ProcessIconProps) {
  switch (icon) {
    case "discovery":
      return <DiscoveryIcon />;

    case "planning":
      return <PlanningIcon />;

    case "development":
      return <DevelopmentIcon />;

    case "testing":
      return <TestingIcon />;

    case "deployment":
      return <DeploymentIcon />;

    default:
      return null;
  }
}

function DiscoveryIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-6">
      <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.8" />

      <path
        d="m16 16 4 4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PlanningIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-6">
      <rect
        x="5"
        y="4"
        width="14"
        height="16"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="M8 9h8M8 13h8M8 17h5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function DevelopmentIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-6">
      <path
        d="m9 7-5 5 5 5m6-10 5 5-5 5m-2-12-2 14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TestingIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-6">
      <path
        d="M9 3h6M10 3v5l-5 9a2 2 0 0 0 1.75 3h10.5A2 2 0 0 0 19 17l-5-9V3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M8 15h8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function DeploymentIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-6">
      <path
        d="M12 3v12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <path
        d="m7 8 5-5 5 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M5 14v5h14v-5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
