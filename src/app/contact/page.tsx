import type { Metadata } from "next";

import ContactDetails from "@/components/contact/details/ContactDetails";
import ContactForm from "@/components/contact/form/ContactForm";
import ContactHero from "@/components/contact/hero/ContactHero";

export const metadata: Metadata = {
  title: "Contact",

  description:
    "Discuss a full-stack web, mobile, SaaS, API, dashboard, or software architecture project.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      <section
        aria-label="Contact form and project information"
        className="bg-cool-gray-50 py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:px-8">
          <ContactDetails />

          <ContactForm />
        </div>
      </section>
    </>
  );
}
