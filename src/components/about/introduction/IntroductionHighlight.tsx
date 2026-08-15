import type {
  IntroductionHighlightIconName,
  IntroductionHighlight as IntroductionHighlightType,
} from "@/types/about";

interface IntroductionHighlightProps {
  highlight: IntroductionHighlightType;
}

export default function IntroductionHighlight({
  highlight,
}: IntroductionHighlightProps) {
  return (
    <article className="group flex h-full gap-4 rounded-2xl border border-cool-gray-200 bg-white p-5 shadow-brand-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-brand-300 hover:shadow-brand-md sm:p-6">
      <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-emerald-brand-500/10 text-emerald-brand-700 transition-colors duration-300 group-hover:bg-emerald-brand-500 group-hover:text-navy-950">
        <HighlightIcon icon={highlight.icon} />
      </div>

      <div>
        <h3 className="text-base font-extrabold text-navy-900 sm:text-lg">
          {highlight.title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-cool-gray-700">
          {highlight.description}
        </p>
      </div>
    </article>
  );
}

interface HighlightIconProps {
  icon: IntroductionHighlightIconName;
}

function HighlightIcon({ icon }: HighlightIconProps) {
  switch (icon) {
    case "product":
      return <ProductIcon />;

    case "architecture":
      return <ArchitectureIcon />;

    case "delivery":
      return <DeliveryIcon />;

    case "collaboration":
      return <CollaborationIcon />;

    default:
      return null;
  }
}

function ProductIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-5">
      <rect
        x="3"
        y="4"
        width="18"
        height="16"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="M3 8h18M8 12h8M8 16h5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
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
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DeliveryIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-5">
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

function CollaborationIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-5">
      <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.8" />

      <circle cx="17" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.8" />

      <path
        d="M3 20a5 5 0 0 1 10 0M14 20a4 4 0 0 1 7 0"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
