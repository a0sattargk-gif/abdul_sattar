import type { StrengthIconName, StrengthItem } from "@/types/about";

interface StrengthCardProps {
  item: StrengthItem;
}

export default function StrengthCard({ item }: StrengthCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-cool-gray-200 bg-white p-5 shadow-brand-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-brand-300 hover:shadow-brand-md sm:p-6">
      <div className="grid size-11 place-items-center rounded-xl bg-emerald-brand-500/10 text-emerald-brand-700 transition-colors duration-300 group-hover:bg-emerald-brand-500 group-hover:text-navy-950">
        <StrengthIcon icon={item.icon} />
      </div>

      <h3 className="mt-5 text-lg font-extrabold tracking-tight text-navy-900">
        {item.title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-cool-gray-700">
        {item.description}
      </p>

      <ul className="mt-5 grid gap-2" aria-label={`${item.title} details`}>
        {item.points.map((point) => (
          <li
            key={point}
            className="flex items-center gap-2 text-sm font-medium text-navy-700"
          >
            <span
              aria-hidden="true"
              className="size-1.5 shrink-0 rounded-full bg-emerald-brand-500"
            />

            {point}
          </li>
        ))}
      </ul>
    </article>
  );
}

interface StrengthIconProps {
  icon: StrengthIconName;
}

function StrengthIcon({ icon }: StrengthIconProps) {
  switch (icon) {
    case "full-stack":
      return <FullStackIcon />;

    case "architecture":
      return <ArchitectureIcon />;

    case "problem-solving":
      return <ProblemSolvingIcon />;

    case "delivery":
      return <DeliveryIcon />;

    default:
      return null;
  }
}

function FullStackIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-5">
      <path
        d="m12 3 8 4-8 4-8-4 8-4Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />

      <path
        d="m4 12 8 4 8-4M4 17l8 4 8-4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArchitectureIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-5">
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
      />
    </svg>
  );
}

function ProblemSolvingIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-5">
      <path
        d="M9 18h6M10 21h4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <path
        d="M8 14a6 6 0 1 1 8 0c-1.1.8-1.5 1.5-1.5 2H9.5c0-.5-.4-1.2-1.5-2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DeliveryIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-5">
      <path
        d="M12 3v12m0-12-5 5m5-5 5 5"
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
