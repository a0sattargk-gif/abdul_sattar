import Link from "next/link";

import FooterBrand from "./FooterBrand";
import FooterContact from "./FooterContact";
import FooterLinkGroup from "./FooterLinkGroup";
import FooterSocialLinks from "./FooterSocialLinks";

import { FOOTER_LEGAL_LINKS, FOOTER_LINK_GROUPS } from "@/constants/footer";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr_1fr]">
          <FooterBrand />

          <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-3">
            {FOOTER_LINK_GROUPS.map((group) => (
              <FooterLinkGroup key={group.id} group={group} />
            ))}
          </div>

          <div className="grid gap-10">
            <FooterContact />
            <FooterSocialLinks />
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-cool-gray-400">
              © {currentYear} Sattar Web Studio. All rights reserved.
            </p>

            <nav aria-label="Footer legal navigation">
              <ul className="flex flex-wrap gap-x-5 gap-y-3" role="list">
                {FOOTER_LEGAL_LINKS.map((link) => (
                  <li key={link.id}>
                    {link.isExternal ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-md text-sm text-cool-gray-400 transition-colors duration-200 hover:text-emerald-brand-400"
                      >
                        {link.label}

                        <span className="sr-only"> opens in a new tab</span>
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="rounded-md text-sm text-cool-gray-400 transition-colors duration-200 hover:text-emerald-brand-400"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <p className="mt-5 text-xs leading-6 text-cool-gray-500">
            Designed and developed with scalability, high performance,
            maintainability, and modern engineering standards.
          </p>
        </div>
      </div>
    </footer>
  );
}
