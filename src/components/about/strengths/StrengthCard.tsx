import type { StrengthIconName, StrengthItem } from "@/types/about";

interface StrengthCardProps {
  item: StrengthItem;
}

export default function StrengthCard({ item }: StrengthCardProps) {
  return (
    <article className="group flex h-full flex-col justify-between rounded-2xl border border-cool-gray-300 bg-white p-6 shadow-brand-sm transition-all duration-300 hover:-translate-y-1 hover:border-navy-950 hover:shadow-brand-md sm:p-7">
      <div>
        <div className="grid size-11 place-items-center rounded-xl bg-emerald-brand-500/10 text-emerald-brand-700 transition-colors duration-300 group-hover:bg-emerald-brand-600 group-hover:text-white">
          <StrengthIcon icon={item.icon} />
        </div>

        <h3 className="mt-5 text-lg font-extrabold tracking-tight text-navy-950">
          {item.title}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-navy-900">
          {item.description}
        </p>

        {/* Tangible Client Takeaway */}
        <div className="mt-4 rounded-xl border-l-4 border-l-emerald-brand-700 border-y border-r border-cool-gray-300 bg-navy-50/50 p-3.5">
          <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-brand-800">
            Client Impact
          </p>
          <p className="mt-1 text-xs font-semibold leading-relaxed text-navy-950">
            {item.clientBenefit}
          </p>
        </div>
      </div>

      <ul className="mt-6 border-t border-cool-gray-200 pt-4 space-y-2" aria-label={`${item.title} standards`}>
        {item.points.map((point) => (
          <li
            key={point}
            className="flex items-center gap-2.5 text-xs font-semibold text-cool-gray-700"
          >
            <span
              aria-hidden="true"
              className="size-1.5 shrink-0 rounded-full bg-emerald-brand-600"
            />
            <span>{point}</span>
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

    case "system-design":
      return <SystemDesignIcon />;

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

function SystemDesignIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-5">
      <rect x="2" y="3" width="20" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      <rect x="2" y="10" width="20" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      <rect x="2" y="17" width="20" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="6" cy="5.5" r="1" fill="currentColor" />
      <circle cx="6" cy="12.5" r="1" fill="currentColor" />
      <circle cx="6" cy="19.5" r="1" fill="currentColor" />
      <path d="M16 5.5h2M16 12.5h2M16 19.5h2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
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
