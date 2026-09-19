import Image from "next/image";
import Link from "next/link";

export default function BlogSidebarCTA() {
  return (
    <div className="rounded-2xl border border-cool-gray-300 bg-white p-6 shadow-2xs">
      <div className="flex items-center gap-3">
        <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full border border-emerald-brand-500/30">
          <Image
            src="/images/abdul-sattar.webp"
            alt="Abdul Sattar"
            fill
            sizes="48px"
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="text-sm font-bold text-navy-950">Abdul Sattar</h4>
          <p className="text-xs text-cool-gray-500">Full-Stack Architect</p>
        </div>
      </div>

      <p className="mt-4 text-xs leading-relaxed text-cool-gray-600">
        Need help architecting or building a scalable web application? I&apos;m
        currently available for select contract roles and consulting.
      </p>

      <div className="mt-5 space-y-2">
        <Link
          href="/contact"
          className="flex w-full items-center justify-center rounded-xl bg-emerald-brand-500 px-4 py-2.5 text-xs font-bold text-navy-950 transition hover:bg-emerald-brand-400"
        >
          Discuss Your Project
        </Link>
        <Link
          href="/services"
          className="flex w-full items-center justify-center rounded-xl border border-cool-gray-200 bg-cool-gray-50 px-4 py-2 text-xs font-semibold text-navy-800 transition hover:bg-cool-gray-100"
        >
          View Services
        </Link>
      </div>
    </div>
  );
}

