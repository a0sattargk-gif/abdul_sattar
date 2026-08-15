import type { ServiceIconName } from "@/types/home";

interface ServiceIconProps {
  icon: ServiceIconName;
}

export default function ServiceIcon({ icon }: ServiceIconProps) {
  switch (icon) {
    case "frontend":
      return <FrontendIcon />;

    case "backend":
      return <BackendIcon />;

    case "mobile":
      return <MobileIcon />;

    case "architecture":
      return <ArchitectureIcon />;

    default:
      return null;
  }
}

function FrontendIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-7">
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
        d="M3 8h18M7 6h.01M10 6h.01"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <path
        d="m9 12-2 2 2 2m6-4 2 2-2 2m-2-5-2 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BackendIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-7">
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

function MobileIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-7">
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

function ArchitectureIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-7">
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
