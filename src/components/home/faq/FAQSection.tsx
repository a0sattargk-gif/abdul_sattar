import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionHeading from "@/components/shared/SectionHeading";

import { HOME_FAQS } from "@/constants/home/faq";

export default function FAQSection() {
  return (
    <section
      aria-labelledby="home-faq-heading"
      className="bg-cool-gray-50 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="home-faq-heading"
          eyebrow="FAQ"
          title="Questions about working together"
          description="Quick answers about my services, technology stack, project types, and delivery process."
          align="center"
        />

        <div className="mx-auto mt-10 max-w-3xl">
          <Accordion type="single" collapsible className="w-full space-y-3">
            {HOME_FAQS.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="rounded-2xl border border-cool-gray-200/80 bg-white px-6 shadow-sm transition-all hover:border-cool-gray-300 data-[state=open]:border-navy-900/20 data-[state=open]:shadow-md"
              >
                <AccordionTrigger className="text-base font-bold text-navy-950 hover:text-emerald-brand-700 py-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-cool-gray-600 text-sm leading-relaxed pb-5 pt-1">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

