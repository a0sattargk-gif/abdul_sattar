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
      className="relative border-b border-white/[0.08] bg-transparent py-20 sm:py-24 lg:py-28"
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
          <Accordion type="single" collapsible className="w-full space-y-3.5">
            {HOME_FAQS.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="rounded-2xl border border-white/10 bg-[#0b1120]/75 px-6 backdrop-blur-xl shadow-md transition-all duration-300 hover:border-emerald-500/40 hover:bg-[#0b1120] data-[state=open]:border-emerald-500/50 data-[state=open]:shadow-[0_0_25px_rgba(16,185,129,0.15)] ring-1 ring-white/5"
              >
                <AccordionTrigger className="text-base font-bold text-white hover:text-emerald-brand-400 py-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-200 text-sm leading-relaxed pb-5 pt-1">
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

