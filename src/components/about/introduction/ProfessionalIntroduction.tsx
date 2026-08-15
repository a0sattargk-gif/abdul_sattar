import IntroductionHighlight from "@/components/about/introduction/IntroductionHighlight";

import { ABOUT_INTRODUCTION_CONTENT } from "@/constants/about/introduction";

export default function ProfessionalIntroduction() {
  const content = ABOUT_INTRODUCTION_CONTENT;

  return (
    <section
      aria-labelledby="about-introduction-heading"
      className="bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="max-w-xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-brand-700">
              {content.eyebrow}
            </p>

            <h2
              id="about-introduction-heading"
              className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl"
            >
              {content.title}
            </h2>

            <p className="mt-5 text-base leading-7 text-cool-gray-700 sm:text-lg">
              {content.description}
            </p>

            <p className="mt-3 text-base leading-7 text-cool-gray-700">
              {content.secondaryDescription}
            </p>

            <div className="mt-6 rounded-2xl border border-emerald-brand-200 bg-emerald-brand-50 p-5">
              <p className="text-sm font-semibold leading-6 text-emerald-brand-900">
                I build software that remains clear, maintainable, and ready for
                continued product growth.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {content.highlights.map((highlight) => (
              <IntroductionHighlight key={highlight.id} highlight={highlight} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
