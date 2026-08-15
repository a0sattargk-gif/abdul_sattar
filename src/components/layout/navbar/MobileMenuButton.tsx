interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function MobileMenuButton({
  isOpen,
  onClick,
}: MobileMenuButtonProps) {
  const accessibleLabel = isOpen
    ? "Close navigation menu"
    : "Open navigation menu";

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={accessibleLabel}
      aria-expanded={isOpen}
      aria-controls="mobile-navigation"
      className="grid size-11 place-items-center rounded-lg border border-cool-gray-200 bg-white text-navy-900 transition-colors duration-200 hover:bg-cool-gray-100 lg:hidden"
    >
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </button>
  );
}

function MenuIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-6">
      <path
        d="M4 7H20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M4 12H20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M4 17H20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-6">
      <path
        d="M6 6L18 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
