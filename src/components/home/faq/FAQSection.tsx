import Link from "next/link";

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

        <div className="mt-8 text-center">
          <p className="text-sm text-cool-gray-700">Have another question?</p>

          <Link
            href="/contact"
            className="group mt-3 inline-flex min-h-11 items-center gap-2 rounded-lg font-bold text-emerald-brand-700 transition-colors hover:text-emerald-brand-800"
          >
            Contact Me
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="size-5 transition-transform duration-200 group-hover:translate-x-1"
    >
      <path
        d="M4 10H16M11 5L16 10L11 15"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
