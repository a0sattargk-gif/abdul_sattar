import Link from "next/link";

interface NavbarBrandProps {
  onClick?: () => void;
}

export default function NavbarBrand({ onClick }: NavbarBrandProps) {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label="Sattar Web Studio home"
      className="inline-flex min-h-11 shrink-0 items-center gap-3 rounded-lg"
    >
      <span
        aria-hidden="true"
        className="grid size-11 place-items-center rounded-xl bg-navy-900 text-base font-extrabold text-emerald-brand-400 shadow-sm"
      >
        SW
      </span>

      <span className="hidden flex-col sm:flex">
        <span className="text-lg font-extrabold leading-tight tracking-tight text-navy-900">
          Sattar Web Studio
        </span>
      </span>
    </Link>
  );
}
