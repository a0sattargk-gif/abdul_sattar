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
      aria-label="Project statistics"
      className="bg-navy-900 py-14 sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {statistics.map((item, index) => (
            <div
              key={`${item.desc}-${index}`}
              className="rounded-2xl border border-cool-gray-300/20 bg-navy-800 p-5 text-center"
            >
              {item.score && (
                <dd className="text-2xl font-extrabold text-emerald-brand-300 sm:text-3xl">
                  {item.score}
                </dd>
              )}

              {item.desc && (
                <dt className="mt-2 text-sm leading-6 text-cool-gray-200">
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
