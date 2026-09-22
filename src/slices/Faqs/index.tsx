import type { Content } from "@prismicio/client";
import type { SliceComponentProps } from "@prismicio/react";

import PortfolioRichText from "@/components/prismic/PortfolioRichText";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

        <div className="mt-9">
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((item, index) => (
              <AccordionItem
                key={`${item.question}-${index}`}
                value={`faq-${index}`}
                className="rounded-2xl border border-cool-gray-200/80 bg-white px-6 shadow-sm transition-all hover:border-cool-gray-300 data-[state=open]:border-navy-900/20 data-[state=open]:shadow-md"
              >
                <AccordionTrigger className="text-base font-bold text-navy-950 hover:text-emerald-brand-700 py-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-cool-gray-600 text-sm leading-relaxed pb-5 pt-1">
                  <PortfolioRichText
                    field={item.answer}
                    className="text-sm leading-6"
                  />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
