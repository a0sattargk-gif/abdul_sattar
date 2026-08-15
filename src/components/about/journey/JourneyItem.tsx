import type {
  JourneyIconName,
  JourneyItem as JourneyItemType,
} from "@/types/about";

interface JourneyItemProps {
  item: JourneyItemType;
  isLast: boolean;
}

export default function JourneyItem({ item, isLast }: JourneyItemProps) {
  return (
    <li className="relative">
      {!isLast && (
        <span
          aria-hidden="true"
          className="absolute left-5 top-11 hidden h-[calc(100%+1rem)] w-px bg-cool-gray-300 md:block"
        />
      )}

      <article className="grid gap-4 rounded-2xl border border-cool-gray-200 bg-white p-5 shadow-brand-sm transition duration-300 hover:border-emerald-brand-300 hover:shadow-brand-md sm:grid-cols-[auto_1fr] sm:p-6">
        <div className="relative z-10 grid size-10 shrink-0 place-items-center rounded-xl bg-navy-900 text-emerald-brand-300">
          <JourneyIcon icon={item.icon} />
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-emerald-brand-700">
            {item.period}
          </p>

          <h3 className="mt-2 text-lg font-extrabold text-navy-900">
            {item.title}
          </h3>

          <p className="mt-2 text-sm leading-6 text-cool-gray-700">
            {item.description}
          </p>

          <ul className="mt-4 flex flex-wrap gap-2" role="list">
            {item.highlights.map((highlight) => (
              <li
                key={highlight}
                className="rounded-full bg-cool-gray-100 px-3 py-1.5 text-xs font-semibold text-navy-700"
              >
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </li>
  );
}

interface JourneyIconProps {
  icon: JourneyIconName;
}

function JourneyIcon({ icon }: JourneyIconProps) {
  switch (icon) {
    case "foundation":
      return <CodeIcon />;

    case "professional":
      return <StackIcon />;

    case "leadership":
      return <DeliveryIcon />;

    case "growth":
      return <GrowthIcon />;

    default:
      return null;
  }
}

function CodeIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-5">
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

function StackIcon() {
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

function GrowthIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-5">
      <path
        d="M4 17 9 12l4 4 7-9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M15 7h5v5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
