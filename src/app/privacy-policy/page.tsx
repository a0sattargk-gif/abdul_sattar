import type { Metadata } from "next";
import Link from "next/link";

import {
  createMailtoLink,
  POSTMASTER_EMAIL,
  PRIMARY_CONTACT_EMAIL,
} from "@/constants/email";

export const metadata: Metadata = {
  title: "Privacy Policy | Sattar Web Studio",
  description:
    "Privacy Policy for Sattar Web Studio. Learn how we handle project inquiries, client data, analytics, cookies, and privacy rights.",
  alternates: {
    canonical: "/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const SECTIONS = [
  { id: "overview", title: "1. Overview & Scope" },
  { id: "information-collected", title: "2. Information We Collect" },
  { id: "how-we-use-information", title: "3. How We Use Information" },
  { id: "cookies-tracking", title: "4. Cookies & Analytics" },
  { id: "third-party-services", title: "5. Third-Party Services" },
  { id: "data-retention-security", title: "6. Data Retention & Security" },
  { id: "your-rights", title: "7. Your Rights & Choices" },
  { id: "contact-information", title: "8. Contact Information" },
];

export default function PrivacyPolicyPage() {
  const lastUpdated = "September 19, 2026";

  return (
    <div className="bg-transparent text-slate-200">
      {/* Header Banner */}
      <section
        aria-labelledby="privacy-heading"
        className="border-b border-white/10 bg-transparent py-14 sm:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <span aria-hidden="true" className="h-px w-8 bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
              Legal &amp; Transparency
            </p>
          </div>

          <h1
            id="privacy-heading"
            className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Privacy Policy
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-300">
            <span>
              Effective &amp; Last Updated:{" "}
              <strong className="text-white">{lastUpdated}</strong>
            </span>
            <span aria-hidden="true">•</span>
            <span>Sattar Web Studio</span>
          </div>

          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-200 sm:text-lg">
            This Privacy Policy explains how Sattar Web Studio (&quot;we&quot;,
            &quot;our&quot;, or &quot;us&quot;), operated by Abdul Sattar,
            collects, uses, and protects personal information when you visit
            our website or communicate with us regarding software engineering,
            system design, and consulting engagements.
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[260px_1fr] lg:gap-14">
          {/* Sticky Table of Contents */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-2xl border border-white/10 bg-[#0b1120]/80 p-5 shadow-xl backdrop-blur-xl">
              <h2 className="text-xs font-bold uppercase tracking-wider text-white">
                Contents
              </h2>
              <nav aria-label="Privacy sections" className="mt-3">
                <ul className="space-y-2 text-xs font-medium">
                  {SECTIONS.map((sec) => (
                    <li key={sec.id}>
                      <a
                        href={`#${sec.id}`}
                        className="block rounded py-1 text-slate-300 transition hover:text-emerald-400"
                      >
                        {sec.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-6 border-t border-white/10 pt-4">
                <Link
                  href="/contact"
                  className="block text-xs font-bold text-emerald-400 hover:text-emerald-300 hover:underline"
                >
                  Have privacy questions? Contact us →
                </Link>
              </div>
            </div>
          </aside>

          {/* Policy Clauses */}
          <article className="space-y-12 text-sm leading-relaxed text-slate-200 sm:text-base sm:leading-7">
            {/* 1. Overview & Scope */}
            <section id="overview" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-extrabold text-white sm:text-2xl">
                1. Overview &amp; Scope
              </h2>
              <p>
                Sattar Web Studio is an independent software engineering
                consultancy dedicated to building high-performance web
                applications, backend architectures, and scalable digital
                systems. We treat client and visitor privacy as a fundamental
                engineering requirement.
              </p>
              <p>
                We do not sell, rent, or trade personal data to third parties for
                monetization or marketing purposes. This policy applies strictly
                to information gathered through our domain{" "}
                <strong className="text-white">
                  https://sattarwebstudio.com
                </strong>{" "}
                and direct email or project correspondence.
              </p>
            </section>

            {/* 2. Information We Collect */}
            <section id="information-collected" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-extrabold text-white sm:text-2xl">
                2. Information We Collect
              </h2>
              <p>
                We collect information through two channels: direct user
                submissions and automated technical data.
              </p>
              <div className="rounded-xl border border-white/10 bg-[#0b1120]/80 p-5 shadow-xl backdrop-blur-xl space-y-4">
                <div>
                  <h3 className="text-sm font-bold text-white sm:text-base">
                    A. Voluntarily Submitted Information
                  </h3>
                  <p className="mt-1 text-sm text-slate-200">
                    When you contact us through our website contact form, inquiry
                    forms, or directly via email, you provide details such as
                    your name, email address, company name, project goals,
                    timeline estimates, and budget ranges.
                  </p>
                </div>
                <div className="border-t border-white/10 pt-3">
                  <h3 className="text-sm font-bold text-white sm:text-base">
                    B. Automated Technical &amp; Log Data
                  </h3>
                  <p className="mt-1 text-sm text-slate-200">
                    When accessing our site, standard server infrastructure logs
                    record technical attributes including browser type, operating
                    system, referrer URL, IP address (anonymized where feasible),
                    and access timestamps for security and operational
                    reliability.
                  </p>
                </div>
              </div>
            </section>

            {/* 3. How We Use Information */}
            <section id="how-we-use-information" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-extrabold text-white sm:text-2xl">
                3. How We Use Information
              </h2>
              <p>We process personal and technical information strictly for:</p>
              <ul className="list-disc space-y-2 pl-6 text-slate-200">
                <li>
                  <strong className="text-white">Communication:</strong>{" "}
                  Responding to project briefs, quote requests, and technical
                  inquiries.
                </li>
                <li>
                  <strong className="text-white">Contract Fulfillment:</strong>{" "}
                  Drafting proposals, statements of work, and delivering
                  engineering services.
                </li>
                <li>
                  <strong className="text-white">Infrastructure Security:</strong>{" "}
                  Preventing spam, monitoring site health, mitigating DDoS
                  threats, and ensuring uptime.
                </li>
                <li>
                  <strong className="text-white">Continuous Improvement:</strong>{" "}
                  Evaluating user engagement to improve site structure and content
                  quality.
                </li>
              </ul>
            </section>

            {/* 4. Cookies & Analytics */}
            <section id="cookies-tracking" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-extrabold text-white sm:text-2xl">
                4. Cookies &amp; Analytics
              </h2>
              <p>
                Our website utilizes minimal, privacy-conscious technologies. We
                do not employ aggressive tracking beacons or third-party ad
                trackers.
              </p>
              <p>
                Any analytics tools used (such as Google Search Console or
                privacy-respecting telemetry) are configured to collect
                aggregate, non-personally identifiable traffic metrics to help us
                understand how technical content is discovered and indexed.
              </p>
              <p>
                You can configure your browser to reject cookies or notify you
                when cookies are set. Disabling cookies will not affect your
                ability to browse or read case studies on this website.
              </p>
            </section>

            {/* 5. Third-Party Services */}
            <section id="third-party-services" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-extrabold text-white sm:text-2xl">
                5. Third-Party Services &amp; Infrastructure
              </h2>
              <p>
                To deliver reliable performance and fast global delivery, we
                utilize reputable service providers:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-slate-200">
                <li>
                  <strong className="text-white">Hosting &amp; Edge CDN:</strong>{" "}
                  Vercel Inc. (cloud hosting and global edge delivery).
                </li>
                <li>
                  <strong className="text-white">Headless CMS:</strong>{" "}
                  Prismic (content management for portfolio case studies and
                  articles).
                </li>
                <li>
                  <strong className="text-white">Search Engine Tools:</strong>{" "}
                  Google Search Console (verification and search indexing).
                </li>
              </ul>
              <p>
                Each third-party vendor maintains independent privacy policies
                and data protection standards adhering to international
                regulations.
              </p>
            </section>

            {/* 6. Data Retention & Security */}
            <section id="data-retention-security" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-extrabold text-white sm:text-2xl">
                6. Data Retention &amp; Security
              </h2>
              <p>
                We apply industry-standard security practices, including HTTPS /
                TLS encryption for all data in transit, strict access controls,
                and secure email gateways.
              </p>
              <p>
                We retain project inquiry records only for as long as necessary
                to maintain business communications, fulfill consulting
                contracts, or comply with statutory accounting and legal
                obligations.
              </p>
            </section>

            {/* 7. Your Rights & Choices */}
            <section id="your-rights" className="scroll-mt-24 space-y-3">
              <h2 className="text-xl font-extrabold text-white sm:text-2xl">
                7. Your Rights &amp; Choices
              </h2>
              <p>
                Depending on your geographic location (including under GDPR in
                the European Union and CCPA in California), you possess specific
                statutory rights concerning your personal information:
              </p>
              <ul className="list-disc space-y-1.5 pl-6 text-slate-200">
                <li>Right to access the personal data we hold about you.</li>
                <li>Right to request correction of inaccurate information.</li>
                <li>Right to request deletion (&quot;Right to be Forgotten&quot;).</li>
                <li>Right to restrict or object to certain processing activities.</li>
                <li>Right to data portability.</li>
              </ul>
              <p>
                To exercise any of these rights, email us at{" "}
                <a
                  href={createMailtoLink(PRIMARY_CONTACT_EMAIL, "Data Privacy Request")}
                  className="font-bold text-emerald-400 underline hover:text-emerald-300"
                >
                  {PRIMARY_CONTACT_EMAIL}
                </a>
                . We will respond promptly within 30 business days.
              </p>
            </section>

            {/* 8. Contact Information */}
            <section id="contact-information" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-extrabold text-white sm:text-2xl">
                8. Contact Information
              </h2>
              <p>
                If you have questions, feedback, or concerns regarding this
                Privacy Policy or our data management practices, please contact:
              </p>

              <div className="rounded-2xl border-l-4 border-l-emerald-400 border border-white/10 bg-[#0b1120]/80 p-6 shadow-xl backdrop-blur-xl">
                <p className="text-base font-bold text-white">
                  Abdul Sattar — Sattar Web Studio
                </p>
                <p className="mt-1 text-sm text-slate-300">
                  Full-Stack Development, Backend Systems &amp; Architecture
                </p>
                <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4 text-sm font-semibold">
                  <div>
                    <span className="text-xs text-slate-300 block">General &amp; Privacy:</span>
                    <a
                      href={createMailtoLink(PRIMARY_CONTACT_EMAIL)}
                      className="text-emerald-400 underline hover:text-emerald-300"
                    >
                      {PRIMARY_CONTACT_EMAIL}
                    </a>
                  </div>
                  <span aria-hidden="true" className="hidden sm:inline text-white/20">•</span>
                  <div>
                    <span className="text-xs text-slate-300 block">System &amp; Postmaster:</span>
                    <a
                      href={createMailtoLink(POSTMASTER_EMAIL)}
                      className="text-slate-100 underline hover:text-emerald-400"
                    >
                      {POSTMASTER_EMAIL}
                    </a>
                  </div>
                  <span aria-hidden="true" className="hidden sm:inline text-white/20">•</span>
                  <div className="sm:self-end">
                    <Link
                      href="/contact"
                      className="text-slate-100 underline hover:text-emerald-400"
                    >
                      Online Contact Form
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </article>
        </div>
      </section>
    </div>
  );
}

