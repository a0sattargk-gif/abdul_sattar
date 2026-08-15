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
      className="bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-brand-700">
            {content.eyebrow}
          </p>

          <h2
            id="about-strengths-heading"
            className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl"
          >
            {content.title}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-cool-gray-700">
            {content.description}
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {strengths.map((item) => (
            <StrengthCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
