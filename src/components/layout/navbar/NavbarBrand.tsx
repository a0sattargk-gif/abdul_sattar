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
      className="group inline-flex min-h-11 shrink-0 items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-brand-500"
    >
      <span
        aria-hidden="true"
        className="flex h-11 items-center justify-center bg-navy-950 px-3 py-2 shadow-sm    transition-transform duration-200 group-hover:scale-105 rounded-xl"
      >
        <Image
          src="/images/logo.png"
          alt="Sattar Web Studio Logo"
          width={40}
          height={28}
          className="h-20 w-auto object-cover"
          priority
        />
      </span>

      
     
    </Link>
  );
}

