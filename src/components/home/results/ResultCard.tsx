import type { ResultIconName, ResultItem } from "@/types/home";

interface ResultCardProps {
  result: ResultItem;
}

export default function ResultCard({ result }: ResultCardProps) {
  return (
    <article className="group rounded-2xl border border-cool-gray-200 bg-white p-6 shadow-brand-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-brand-300 hover:shadow-brand-md sm:p-7">
      <div className="grid size-12 place-items-center rounded-xl bg-emerald-brand-500/10 text-emerald-brand-700 transition-colors duration-300 group-hover:bg-emerald-brand-500 group-hover:text-navy-950">
        <ResultIcon icon={result.icon} />
      </div>

      <h3 className="mt-5 text-xl font-extrabold tracking-tight text-navy-900">
        {result.title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-cool-gray-700">
        {result.description}
      </p>
    </article>
  );
}

interface ResultIconProps {
  icon: ResultIconName;
}

function ResultIcon({ icon }: ResultIconProps) {
  switch (icon) {
    case "architecture":
      return <ArchitectureIcon />;

    case "performance":
      return <PerformanceIcon />;

    case "delivery":
      return <DeliveryIcon />;

    case "integration":
      return <IntegrationIcon />;

    default:
      return null;
  }
}

function ArchitectureIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-6">
      <rect
        x="9"
        y="3"
        width="6"
        height="5"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <rect
        x="3"
        y="16"
        width="6"
        height="5"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <rect
        x="15"
        y="16"
        width="6"
        height="5"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="M12 8v4m0 0H6v4m6-4h6v4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PerformanceIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-6">
      <path
        d="M4 18a8 8 0 1 1 16 0"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <path
        d="m12 14 4-4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <circle cx="12" cy="14" r="1.5" fill="currentColor" />
    </svg>
  );
}

function DeliveryIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-6">
      <path
        d="M5 4h10v13H5z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />

      <path
        d="M15 8h3l2 3v6h-5V8Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />

      <circle cx="8" cy="18" r="2" stroke="currentColor" strokeWidth="1.8" />

      <circle cx="17" cy="18" r="2" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function IntegrationIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-6">
      <path d="M8 8h8v8H8z" stroke="currentColor" strokeWidth="1.8" />

      <path
        d="M3 6h3v3M18 6h3v3M3 18h3v-3M18 18h3v-3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M6 8 4 6m14 2 2-2M6 16l-2 2m14-2 2 2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
