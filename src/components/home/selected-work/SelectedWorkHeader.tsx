import Link from "next/link";

export default function SelectedWorkHeader() {
  return (
    <header className="flex flex-col gap-6 border-b border-cool-gray-200 pb-8 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <div className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="h-px w-8 bg-emerald-brand-700"
          />

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-brand-700">
            Selected Work
          </p>
        </div>

        <h2
          id="selected-work-heading"
          className="mt-4 text-3xl font-bold tracking-[-0.03em] text-navy-950 sm:text-4xl"
        >
          Products and systems built around real problems.
        </h2>
      </div>

      <Link
        href="/projects"
        className="group inline-flex items-center gap-2 text-sm font-bold text-navy-950 transition-colors hover:text-emerald-brand-700"
      >
        View all work

        <span
          aria-hidden="true"
          className="transition-transform duration-200 group-hover:translate-x-1"
        >
          →
        </span>
      </Link>
    </header>
  );
}