import Image from "next/image";
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
      className="group inline-flex min-h-11 shrink-0 items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-brand-400"
    >
      <div
        aria-hidden="true"
        className="flex h-11 items-center justify-center rounded-xl bg-gradient-to-br from-navy-900 to-navy-950 px-3 py-1.5 shadow-md ring-1 ring-white/10 transition-transform duration-200 group-hover:scale-105 group-hover:ring-emerald-500/30"
      >
        <Image
          src="/images/logo-mark.png"
          alt="Sattar Web Studio Logo"
          width={76}
          height={28}
          className="h-7 w-auto object-contain"
          priority
        />
      </div>

      <span className="flex flex-col">
        <span className="text-base font-extrabold leading-tight tracking-tight text-white sm:text-lg">
          Sattar <span className="text-emerald-brand-400">Web Studio</span>
        </span>
      </span>
    </Link>
  );
}

