import Link from "next/link";

import type { FooterLinkGroup as FooterLinkGroupType } from "@/types/footer";

interface FooterLinkGroupProps {
  group: FooterLinkGroupType;
}

export default function FooterLinkGroup({ group }: FooterLinkGroupProps) {
  return (
    <section aria-labelledby={`${group.id}-footer-heading`}>
      <h2
        id={`${group.id}-footer-heading`}
        className="text-sm font-bold uppercase tracking-[0.14em] text-white"
      >
        {group.title}
      </h2>

      <ul className="mt-5 grid gap-3" role="list">
        {group.links.map((link) => (
          <li key={link.id}>
            {link.isExternal ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-md text-sm text-cool-gray-400 transition-colors duration-200 hover:text-emerald-brand-400"
              >
                {link.label}

                <span className="sr-only"> opens in a new tab</span>
              </a>
            ) : (
              <Link
                href={link.href}
                className="inline-flex rounded-md text-sm text-cool-gray-400 transition-colors duration-200 hover:text-emerald-brand-400"
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
