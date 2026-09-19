import type { Content } from "@prismicio/client";
import type { SliceComponentProps } from "@prismicio/react";

export type StatisticsProps = SliceComponentProps<Content.StatisticsSlice>;

export default function Statistics({ slice }: StatisticsProps) {
  const statistics = slice.primary.statistics.filter(
    (item) => item.score || item.desc,
  );

  if (statistics.length === 0) {
    return null;
  }

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      aria-label="Project statistics & key performance metrics"
      className="relative overflow-hidden border-y border-white/10 bg-navy-950 py-16 sm:py-20"
    >
      {/* Ambient background glows */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-28 -top-28 size-96 rounded-full bg-emerald-brand-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 size-96 rounded-full bg-emerald-brand-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-brand-400/30 bg-emerald-brand-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.16em] text-emerald-brand-300">
            <span className="size-1.5 rounded-full bg-emerald-brand-400" />
            Performance &amp; Impact
          </div>

          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
            Measurable Engineering Outcomes
          </h2>
        </div>

        <dl className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {statistics.map((item, index) => (
            <div
              key={`${item.desc}-${index}`}
              className="group flex flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-center backdrop-blur-xs transition duration-150 hover:-translate-y-1 hover:border-emerald-brand-400/50 hover:bg-white/[0.08] hover:shadow-brand-md"
            >
              {item.score && (
                <dd className="text-3xl font-extrabold tracking-tight text-emerald-brand-300 font-mono sm:text-4xl lg:text-5xl">
                  {item.score}
                </dd>
              )}

              {item.desc && (
                <dt className="mt-3 text-sm leading-relaxed text-cool-gray-300">
                  {item.desc}
                </dt>
              )}
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
