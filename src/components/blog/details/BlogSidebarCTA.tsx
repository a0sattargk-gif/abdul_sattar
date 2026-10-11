import Image from "next/image";
import Link from "next/link";

export default function BlogSidebarCTA() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0b1120]/80 p-6 shadow-xl backdrop-blur-xl">
      <div className="flex items-center gap-3">
        <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full border border-emerald-500/40">
          <Image
            src="/images/abdul-sattar.webp"
            alt="Abdul Sattar"
            fill
            sizes="48px"
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="text-sm font-bold text-white">Abdul Sattar</h4>
          <p className="text-xs text-slate-300">Full-Stack Architect</p>
        </div>
      </div>

      <p className="mt-4 text-xs leading-relaxed text-slate-200">
        Need help architecting or building a scalable web application? I&apos;m
        currently available for select contract roles and consulting.
      </p>

      <div className="mt-5 space-y-2">
        <Link
          href="/contact"
          className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 px-4 py-2.5 text-xs font-bold text-navy-950 shadow-[0_0_15px_rgba(16,185,129,0.25)] transition hover:opacity-90"
        >
          Discuss Your Project
        </Link>
        <Link
          href="/services"
          className="flex w-full items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] px-4 py-2 text-xs font-semibold text-white transition hover:bg-white/10"
        >
          View Services
        </Link>
      </div>
    </div>
  );
}

