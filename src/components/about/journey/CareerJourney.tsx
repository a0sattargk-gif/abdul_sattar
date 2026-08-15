import JourneyItem from "@/components/about/journey/JourneyItem";

import { ABOUT_CAREER_JOURNEY } from "@/constants/about/journey";

export default function CareerJourney() {
  const content = ABOUT_CAREER_JOURNEY;

  const journeyItems = [...content.items].sort(
    (firstItem, secondItem) => firstItem.order - secondItem.order,
  );

  return (
    <section
      aria-labelledby="about-journey-heading"
      className="bg-cool-gray-50 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-brand-700">
            {content.eyebrow}
          </p>

          <h2
            id="about-journey-heading"
            className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl"
          >
            {content.title}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-cool-gray-700">
            {content.description}
          </p>
        </div>

        <ol className="mx-auto mt-10 grid max-w-4xl gap-4">
          {journeyItems.map((item, index) => (
            <JourneyItem
              key={item.id}
              item={item}
              isLast={index === journeyItems.length - 1}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}
