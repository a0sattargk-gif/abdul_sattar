import type { Content } from "@prismicio/client";

import type { SliceComponentProps } from "@prismicio/react";

import PortfolioRichText from "@/components/prismic/PortfolioRichText";

export type FaqsProps = SliceComponentProps<Content.FaqsSlice>;

export default function Faqs({ slice }: FaqsProps) {
  const faqs = slice.primary.faqs.filter(
    (item) => item.question || item.answer.length > 0,
  );

  if (faqs.length === 0) {
    return null;
  }

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      aria-labelledby="project-faq-heading"
      className="bg-cool-gray-50 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-brand-700">
            FAQ
          </p>

          <h2
            id="project-faq-heading"
            className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl"
          >
            Project questions
          </h2>
        </div>

        <div className="mt-9 grid gap-3">
          {faqs.map((item, index) => (
            <details
              key={`${item.question}-${index}`}
              className="group rounded-xl border border-cool-gray-300 bg-white open:border-navy-950 open:shadow-brand-sm"
            >
              <summary className="flex min-h-15 cursor-pointer list-none items-center justify-between gap-5 rounded-xl px-5 py-4">
                <span className="font-bold leading-6 text-navy-900">
                  {item.question}
                </span>

                <span
                  aria-hidden="true"
                  className="grid size-8 shrink-0 place-items-center rounded-full bg-cool-gray-100 text-navy-700 transition duration-200 group-open:rotate-45 group-open:bg-emerald-brand-500 group-open:text-navy-950"
                >
                  <PlusIcon />
                </span>
              </summary>

              <div className="border-t border-cool-gray-200 px-5 py-4">
                <PortfolioRichText
                  field={item.answer}
                  className="text-sm leading-6"
                />
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlusIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="size-5">
      <path
        d="M10 4v12M4 10h12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
