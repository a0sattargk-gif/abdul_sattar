import type { ResultsSummaryItem } from "@/types/home";

interface ResultsSummaryProps {
  items: ResultsSummaryItem[];
}

export default function ResultsSummary({ items }: ResultsSummaryProps) {
  return (
    <div className="rounded-3xl border border-cool-gray-300/20 bg-navy-800 p-6 shadow-brand-lg sm:p-8">
      <div className="grid gap-6 sm:grid-cols-2">
        {items.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl border border-cool-gray-300/20 bg-navy-700/60 p-5"
          >
            <p className="text-2xl font-extrabold tracking-tight text-emerald-brand-300 sm:text-3xl">
              {item.value}
            </p>

            <p className="mt-2 text-sm leading-6 text-cool-gray-200">
              {item.label}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-emerald-brand-300/20 bg-emerald-brand-500/10 p-5">
        <p className="text-sm font-bold text-emerald-brand-300">
          Engineering principle
        </p>

        <p className="mt-2 text-sm leading-7 text-cool-gray-200">
          Good software should be understandable, maintainable, testable,
          deployable, and ready to evolve as business requirements change.
        </p>
      </div>
    </div>
  );
}
