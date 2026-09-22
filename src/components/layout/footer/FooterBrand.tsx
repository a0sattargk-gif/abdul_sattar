import Image from "next/image";
import Link from "next/link";

import { FOOTER_PRIMARY_CTA } from "@/constants/footer";

export default function FooterBrand() {
  return (
    <div className="max-w-sm">
      <Link
        href="/"
        aria-label="Sattar Web Studio home"
        className="group inline-flex items-center gap-3.5 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-brand-500"
      >
        <div className="flex h-14 items-center justify-center rounded-xl bg-navy-900 px-3.5 py-2 shadow-sm ring-1 ring-white/10 transition-all duration-200 group-hover:bg-navy-800 group-hover:ring-white/20">
          <Image
            src="/images/logo.png"
            alt="Sattar Web Studio Logo"
            width={120}
            height={48}
            className="h-10 w-auto object-contain"
          />
        </div>

        <div className="flex flex-col">
          <span className="text-xl font-extrabold tracking-tight text-white">
            Sattar Web Studio
          </span>
          <span className="text-xs font-semibold text-emerald-brand-400">
            Development & Engineering
          </span>
        </div>
      </Link>

      <p className="mt-5 text-sm leading-7 text-cool-gray-400">
        Building accessible, scalable, and high-performance web applications
        using modern frontend, backend, Shopify, and AI technologies.
      </p>

      <Link
        href={FOOTER_PRIMARY_CTA.href}
        className="mt-6 inline-flex min-h-11 items-center justify-center rounded-lg bg-emerald-brand-500 px-5 py-2.5 text-sm font-bold text-navy-950 transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-brand-400"
      >
        {FOOTER_PRIMARY_CTA.label}
      </Link>
    </div>
  );
}
