import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Sattar Web Studio",
  description:
    "Terms of Service for Sattar Web Studio. Detailed terms governing software engineering, system architecture, consulting engagements, and client deliverables.",
  alternates: {
    canonical: "/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const SECTIONS = [
  { id: "acceptance", title: "1. Acceptance of Terms" },
  { id: "services", title: "2. Engineering Services & Scope" },
  { id: "intellectual-property", title: "3. Intellectual Property & Ownership" },
  { id: "client-responsibilities", title: "4. Client Responsibilities" },
  { id: "payment-terms", title: "5. Fees, Estimates & Invoicing" },
  { id: "confidentiality", title: "6. Confidentiality & Privacy" },
  { id: "warranties-disclaimers", title: "7. Warranties & Disclaimers" },
  { id: "liability", title: "8. Limitation of Liability" },
  { id: "termination", title: "9. Term & Termination" },
  { id: "contact-legal", title: "10. Governing Law & Contact" },
];

export default function TermsOfServicePage() {
  const lastUpdated = "September 19, 2026";

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section
        aria-labelledby="terms-heading"
        className="border-b border-cool-gray-200 bg-navy-50/40 py-14 sm:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <span aria-hidden="true" className="h-px w-8 bg-emerald-brand-700" />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-brand-700">
              Legal & Transparency
            </p>
          </div>

          <h1
            id="terms-heading"
            className="mt-3 text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl lg:text-5xl"
          >
            Terms of Service
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-cool-gray-700">
            <span>
              Effective & Last Updated:{" "}
              <strong className="text-navy-950">{lastUpdated}</strong>
            </span>
            <span aria-hidden="true">•</span>
            <span>Sattar Web Studio</span>
          </div>

          <p className="mt-4 max-w-3xl text-base leading-relaxed text-navy-900 sm:text-lg">
            These Terms of Service (&quot;Terms&quot;) govern your use of the
            Sattar Web Studio website and define the general terms under which
            we provide software engineering, web application development, and
            system architecture consulting services.
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[260px_1fr] lg:gap-14">
          {/* Sticky Table of Contents */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-2xl border border-cool-gray-300 bg-navy-50/40 p-5 shadow-2xs">
              <h2 className="text-xs font-bold uppercase tracking-wider text-navy-950">
                Contents
              </h2>
              <nav aria-label="Terms sections" className="mt-3">
                <ul className="space-y-2 text-xs font-medium">
                  {SECTIONS.map((sec) => (
                    <li key={sec.id}>
                      <a
                        href={`#${sec.id}`}
                        className="block rounded py-1 text-cool-gray-700 transition hover:text-emerald-brand-700"
                      >
                        {sec.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-6 border-t border-cool-gray-200 pt-4">
                <Link
                  href="/contact"
                  className="block text-xs font-bold text-emerald-brand-800 hover:underline"
                >
                  Ready to collaborate? Start a project →
                </Link>
              </div>
            </div>
          </aside>

          {/* Policy Clauses */}
          <article className="space-y-12 text-sm leading-relaxed text-navy-900 sm:text-base sm:leading-7">
            {/* 1. Acceptance of Terms */}
            <section id="acceptance" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-extrabold text-navy-950 sm:text-2xl">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using the website at{" "}
                <strong className="text-navy-950">
                  https://sattarwebstudio.com
                </strong>
                , or by commissioning professional consulting services from
                Abdul Sattar / Sattar Web Studio, you agree to be bound by these
                Terms.
              </p>
              <p>
                If you are entering into these Terms on behalf of an entity or
                company, you represent that you possess the requisite authority
                to bind that organization to these provisions.
              </p>
            </section>

            {/* 2. Engineering Services & Scope */}
            <section id="services" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-extrabold text-navy-950 sm:text-2xl">
                2. Engineering Services & Scope
              </h2>
              <p>
                Sattar Web Studio provides bespoke technology services,
                including:
              </p>
              <ul className="list-disc space-y-1.5 pl-6 text-cool-gray-800">
                <li>
                  <strong className="text-navy-950">
                    Frontend Engineering:
                  </strong>{" "}
                  React, Next.js App Router, responsive interfaces, state
                  management, and performance tuning.
                </li>
                <li>
                  <strong className="text-navy-950">Backend Development:</strong>{" "}
                  Node.js, NestJS, .NET APIs, microservices, and database
                  architectures (PostgreSQL, Redis).
                </li>
                <li>
                  <strong className="text-navy-950">
                    System Design & Scalability:
                  </strong>{" "}
                  Distributed pipelines, caching layers, high-throughput
                  concurrency, and cloud deployment.
                </li>
              </ul>
              <p>
                Individual project engagements are defined by a mutual Statement
                of Work (SOW), proposal, or contract specifying deliverables,
                milestones, and acceptance criteria.
              </p>
            </section>

            {/* 3. Intellectual Property & Ownership */}
            <section id="intellectual-property" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-extrabold text-navy-950 sm:text-2xl">
                3. Intellectual Property & Ownership
              </h2>
              <div className="rounded-xl border border-cool-gray-300 bg-navy-50/30 p-5 space-y-3">
                <p>
                  <strong className="text-navy-950">
                    A. Client Work-Product:
                  </strong>{" "}
                  Upon full and final payment of all agreed fees for a project,
                  all custom source code, design assets, and deliverables
                  created specifically for the client become the sole property
                  of the client, unless otherwise agreed in writing.
                </p>
                <div className="border-t border-cool-gray-200 pt-3">
                  <p>
                    <strong className="text-navy-950">
                      B. Pre-Existing Tools & Open-Source:
                    </strong>{" "}
                    We retain ownership of general methodologies, pre-existing
                    libraries, snippets, and boilerplate utilities. Standard
                    open-source packages remain subject to their respective MIT,
                    Apache, or BSD licenses.
                  </p>
                </div>
                <div className="border-t border-cool-gray-200 pt-3">
                  <p>
                    <strong className="text-navy-950">
                      C. Portfolio Showcase:
                    </strong>{" "}
                    Unless restricted by a signed Non-Disclosure Agreement
                    (NDA), Sattar Web Studio reserves the right to showcase
                    completed work, architectural case studies, and summary
                    results in our online portfolio.
                  </p>
                </div>
              </div>
            </section>

            {/* 4. Client Responsibilities */}
            <section id="client-responsibilities" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-extrabold text-navy-950 sm:text-2xl">
                4. Client Responsibilities
              </h2>
              <p>Timely project delivery depends on mutual cooperation. Clients agree to:</p>
              <ul className="list-disc space-y-1.5 pl-6 text-cool-gray-800">
                <li>
                  Provide required credentials, brand assets, API keys, and
                  technical documentation in a timely manner.
                </li>
                <li>
                  Designate an authorized decision-maker for feedback, milestone
                  reviews, and code approvals.
                </li>
                <li>
                  Ensure that all assets and content provided do not infringe on
                  third-party intellectual property or copyright laws.
                </li>
              </ul>
            </section>

            {/* 5. Fees, Estimates & Invoicing */}
            <section id="payment-terms" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-extrabold text-navy-950 sm:text-2xl">
                5. Fees, Estimates & Invoicing
              </h2>
              <p>
                Project fees are billed on either a milestone-based fixed-price
                basis or time-and-materials, as documented in the applicable
                engagement agreement.
              </p>
              <ul className="list-disc space-y-1.5 pl-6 text-cool-gray-800">
                <li>
                  Invoices are typically due within 14 calendar days of receipt
                  unless otherwise stipulated.
                </li>
                <li>
                  Work may be paused if outstanding invoices remain unpaid past
                  the due date.
                </li>
                <li>
                  Estimates provided in exploratory conversations or proposals
                  are valid for 30 days from the date of issue.
                </li>
              </ul>
            </section>

            {/* 6. Confidentiality & Privacy */}
            <section id="confidentiality" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-extrabold text-navy-950 sm:text-2xl">
                6. Confidentiality & Non-Disclosure
              </h2>
              <p>
                Both parties agree to treat all proprietary business data, code
                repositories, product roadmaps, and client discussions as
                strictly confidential. We are pleased to execute mutual NDAs
                prior to reviewing sensitive technical specifications or codebases.
              </p>
            </section>

            {/* 7. Warranties & Disclaimers */}
            <section id="warranties-disclaimers" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-extrabold text-navy-950 sm:text-2xl">
                7. Warranties & Disclaimers
              </h2>
              <p>
                We deliver engineering services in a professional, workmanlike
                manner adhering to industry standards for code quality,
                security, and architectural resilience.
              </p>
              <p>
                Except as expressly warranted in a signed client contract, our
                website and services are provided &quot;as is&quot; without
                warranties of any kind, either express or implied, including
                uninterrupted uptime or fitness for a particular commercial
                outcome.
              </p>
            </section>

            {/* 8. Limitation of Liability */}
            <section id="liability" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-extrabold text-navy-950 sm:text-2xl">
                8. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by applicable law, neither party
                shall be liable for indirect, incidental, consequential,
                special, or punitive damages (including loss of profits, data,
                or business opportunity) arising out of or related to our
                services or website.
              </p>
              <p>
                Our aggregate liability under any engagement shall not exceed the
                total amount paid by the client under the specific Statement of
                Work giving rise to the claim during the six (6) months prior to
                the event.
              </p>
            </section>

            {/* 9. Term & Termination */}
            <section id="termination" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-extrabold text-navy-950 sm:text-2xl">
                9. Term & Termination
              </h2>
              <p>
                Either party may terminate a project agreement upon written
                notice if the other party breaches any material term and fails
                to cure such breach within fourteen (14) days of notice.
              </p>
              <p>
                Upon termination, the client shall pay for all completed
                milestones and billable hours accrued up to the effective date
                of termination, and we shall deliver all corresponding work
                completed to that date.
              </p>
            </section>

            {/* 10. Governing Law & Contact */}
            <section id="contact-legal" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-extrabold text-navy-950 sm:text-2xl">
                10. Governing Law & Contact
              </h2>
              <p>
                These Terms shall be interpreted and governed in accordance with
                applicable laws, without regard to conflict of law principles.
              </p>
              <p>
                For questions, legal notices, or inquiries regarding these
                Terms of Service, please contact:
              </p>

              <div className="rounded-2xl border-l-4 border-l-emerald-brand-700 border-y border-r border-cool-gray-300 bg-navy-50/50 p-6">
                <p className="text-base font-bold text-navy-950">
                  Abdul Sattar — Sattar Web Studio
                </p>
                <p className="mt-1 text-sm text-cool-gray-700">
                  Engineering & Technical Consultancy
                </p>
                <div className="mt-3 flex flex-wrap gap-4 text-sm font-semibold">
                  <a
                    href="mailto:hello@sattarwebstudio.com"
                    className="text-emerald-brand-800 underline hover:text-navy-950"
                  >
                    hello@sattarwebstudio.com
                  </a>
                  <span aria-hidden="true" className="text-cool-gray-300">•</span>
                  <Link
                    href="/contact"
                    className="text-navy-900 underline hover:text-emerald-brand-800"
                  >
                    Contact Form
                  </Link>
                </div>
              </div>
            </section>
          </article>
        </div>
      </section>
    </div>
  );
}

