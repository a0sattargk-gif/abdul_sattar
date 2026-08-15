import Link from "next/link";

import { FOOTER_PRIMARY_CTA } from "@/constants/footer";

export default function FooterBrand() {
  return (
    <div className="max-w-sm">
      <Link
        href="/"
        aria-label="Sattar Web Studio home"
        className="inline-flex items-center gap-3 rounded-lg"
      >
        <span
          aria-hidden="true"
          className="grid size-12 place-items-center rounded-xl bg-emerald-brand-500 text-base font-extrabold text-navy-950"
        >
          SW
        </span>

        <span className="flex flex-col">
          <span className="text-lg font-extrabold tracking-tight text-white">
            Sattar Web Studio
          </span>
        </span>
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
