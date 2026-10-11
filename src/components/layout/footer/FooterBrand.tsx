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
        <div className="flex h-14 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2 shadow-lg backdrop-blur-md transition-all duration-300 group-hover:border-emerald-500/40 group-hover:bg-emerald-500/5 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]">
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

      <p className="mt-5 text-sm leading-7 text-slate-200">
        Building accessible, scalable, and high-performance web applications
        using modern frontend, backend, Shopify, and AI technologies.
      </p>

      <Link
        href={FOOTER_PRIMARY_CTA.href}
        className="mt-6 inline-flex min-h-11 items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 px-5 py-2.5 text-sm font-bold text-navy-950 shadow-[0_0_20px_rgba(16,185,129,0.25)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(16,185,129,0.45)]"
      >
        {FOOTER_PRIMARY_CTA.label}
      </Link>
    </div>
  );
}
