import type { ExpertiseGroup, ExpertiseIconName } from "@/types/home";

interface ExpertiseGroupCardProps {
  group: ExpertiseGroup;
}

export default function ExpertiseGroupCard({ group }: ExpertiseGroupCardProps) {
  return (
    <article className="group h-full rounded-2xl border border-cool-gray-300/20 bg-navy-800 p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-brand-300/50 hover:bg-navy-700 sm:p-7">
      <div className="grid size-13 place-items-center rounded-xl bg-emerald-brand-500/15 text-emerald-brand-300">
        <ExpertiseIcon icon={group.icon} />
      </div>

      <h3 className="mt-5 text-xl font-extrabold tracking-tight text-white">
        {group.title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-cool-gray-200">
        {group.description}
      </p>

      <ul
        className="mt-5 flex flex-wrap gap-2"
        aria-label={`${group.title} technologies`}
      >
        {group.technologies.map((technology) => (
          <li
            key={technology}
            className="rounded-full border border-cool-gray-300/20 bg-white/5 px-3 py-1.5 text-xs font-semibold text-cool-gray-200"
          >
            {technology}
          </li>
        ))}
      </ul>
    </article>
  );
}

interface ExpertiseIconProps {
  icon: ExpertiseIconName;
}

function ExpertiseIcon({ icon }: ExpertiseIconProps) {
  switch (icon) {
    case "frontend":
      return <CodeIcon />;

    case "backend":
      return <ServerIcon />;

    case "database":
      return <DatabaseIcon />;

    case "cloud":
      return <CloudIcon />;

    case "architecture":
      return <ArchitectureIcon />;

    case "mobile":
      return <MobileIcon />;

    default:
      return null;
  }
}

function CodeIcon() {
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

function ServerIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-6">
      <rect
        x="3"
        y="4"
        width="18"
        height="6"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <rect
        x="3"
        y="14"
        width="18"
        height="6"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="M7 7h.01M7 17h.01M11 7h6M11 17h6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function DatabaseIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-6">
      <ellipse
        cx="12"
        cy="5"
        rx="8"
        ry="3"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function CloudIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-6">
      <path
        d="M7 18h10a4 4 0 0 0 .7-7.94A6 6 0 0 0 6.1 9.2 4.5 4.5 0 0 0 7 18Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
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
      />
    </svg>
  );
}

function MobileIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-6">
      <rect
        x="7"
        y="2.5"
        width="10"
        height="19"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="M10 5h4M11 18.5h2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
