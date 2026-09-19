import FAQItem from "@/components/home/faq/FAQItem";
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

        <div className="mx-auto mt-10 grid max-w-4xl gap-3">
          {HOME_FAQS.map((item) => (
            <FAQItem key={item.id} item={item} />
          ))}
        </div>

         
      </div>
    </section>
  );
}
