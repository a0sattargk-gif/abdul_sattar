import Link from "next/link";

export default function BlogCTA() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b1120]/90 px-6 py-10 text-center shadow-2xl backdrop-blur-xl sm:px-10 sm:py-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-20 -top-20 size-72 rounded-full bg-emerald-500/15 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 right-0 size-72 rounded-full bg-cyan-500/10 blur-3xl"
          />

          <div className="relative">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Need help building your software product?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-200">
              Let&apos;s discuss the architecture, implementation, and delivery
              plan.
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-flex min-h-12 items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 px-7 py-3 font-bold text-navy-950 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(16,185,129,0.5)]"
            >
              Discuss Your Project →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
