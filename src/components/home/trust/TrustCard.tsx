import type { TrustIconName, TrustItem } from "@/types/home";

interface TrustCardProps {
  item: TrustItem;
}

export default function TrustCard({ item }: TrustCardProps) {
  return (
    <article className="group rounded-2xl border border-cool-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-brand-300 hover:shadow-lg">
      <div className="grid size-12 place-items-center rounded-xl bg-emerald-brand-500/10 text-emerald-brand-700 transition-colors duration-300 group-hover:bg-emerald-brand-500 group-hover:text-navy-950">
        <TrustIcon icon={item.icon} />
      </div>

      <h3 className="mt-5 text-lg font-bold tracking-tight text-navy-900">
        {item.title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-cool-gray-500">
        {item.description}
      </p>
    </article>
  );
}

interface TrustIconProps {
  icon: TrustIconName;
}

function TrustIcon({ icon }: TrustIconProps) {
  switch (icon) {
    case "experience":
      return <ExperienceIcon />;

    case "architecture":
      return <ArchitectureIcon />;

    case "technology":
      return <TechnologyIcon />;

    case "availability":
      return <AvailabilityIcon />;

    default:
      return null;
  }
}

function ExperienceIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-6">
      <path
        d="M8 7V5.5A2.5 2.5 0 0 1 10.5 3h3A2.5 2.5 0 0 1 16 5.5V7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <path
        d="M5 7h14a2 2 0 0 1 2 2v9a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V9a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />

      <path
        d="M3 12h7m4 0h7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <path
        d="M10 10h4v4h-4z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
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

function TechnologyIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-6">
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="m9 9-3 3 3 3m6-6 3 3-3 3m-2-7-2 8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AvailabilityIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-6">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />

      <path
        d="m8 12 2.5 2.5L16 9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
