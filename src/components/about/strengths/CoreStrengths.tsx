import StrengthCard from "@/components/about/strengths/StrengthCard";

import { ABOUT_CORE_STRENGTHS } from "@/constants/about/strengths";

export default function CoreStrengths() {
  const content = ABOUT_CORE_STRENGTHS;

  const strengths = [...content.items].sort(
    (firstItem, secondItem) => firstItem.order - secondItem.order,
  );

  return (
    <section
      aria-labelledby="about-strengths-heading"
      className="border-b border-cool-gray-200 bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-8 bg-emerald-brand-700" />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-brand-700">
              {content.eyebrow}
            </p>
          </div>

          <h2
            id="about-strengths-heading"
            className="mt-3 text-2xl font-extrabold tracking-tight text-navy-950 sm:text-3xl lg:text-4xl"
          >
            {content.title}
          </h2>

          <p className="mt-4 text-base leading-relaxed text-navy-900 sm:text-lg">
            {content.description}
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {strengths.map((item) => (
            <StrengthCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
