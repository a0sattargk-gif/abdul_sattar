import { createMailtoLink, PRIMARY_CONTACT_EMAIL } from "@/constants/email";
import type {
  FooterContactItem,
  FooterLink,
  FooterLinkGroup,
  FooterSocialLink,
} from "@/types/footer";

export const FOOTER_LINK_GROUPS: FooterLinkGroup[] = [
  {
    id: "navigation",
    title: "Navigation",
    links: [
      {
        id: "home",
        label: "Home",
        href: "/",
      },
      {
        id: "about",
        label: "About",
        href: "/about",
      },
      {
        id: "services",
        label: "Services",
        href: "/services",
      },
      {
        id: "projects",
        label: "Projects",
        href: "/projects",
      },
      {
        id: "blog",
        label: "Blog",
        href: "/blog",
      },
      {
        id: "contact",
        label: "Contact",
        href: "/contact",
      },
    ],
  },
  {
    id: "capabilities",
    title: "Capabilities",
    links: [
      {
        id: "core-services",
        label: "Engineering Services",
        href: "/services",
      },
      {
        id: "case-studies",
        label: "Project Case Studies",
        href: "/projects",
      },
      {
        id: "architecture-journey",
        label: "Experience & Journey",
        href: "/about",
      },
      {
        id: "technical-insights",
        label: "Technical Articles",
        href: "/blog",
      },
    ],
  },
  {
    id: "legal-info",
    title: "Legal & Info",
    links: [
      {
        id: "privacy-policy",
        label: "Privacy Policy",
        href: "/privacy-policy",
      },
      {
        id: "terms",
        label: "Terms of Service",
        href: "/terms",
      },
      {
        id: "sitemap-xml",
        label: "XML Sitemap",
        href: "/sitemap.xml",
      },
      {
        id: "inquiries",
        label: "Project Inquiries",
        href: "/contact",
      },
    ],
  },
];

export const FOOTER_LEGAL_LINKS: FooterLink[] = [
  {
    id: "privacy-policy",
    label: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    id: "terms",
    label: "Terms of Service",
    href: "/terms",
  },
  {
    id: "sitemap",
    label: "Sitemap",
    href: "/sitemap.xml",
  },
];

export const FOOTER_SOCIAL_LINKS: FooterSocialLink[] = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/abdulsattar576",
    icon: "github",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abdul-sattar-se",
    icon: "linkedin",
  },
  {
    id: "upwork",
    label: "Upwork",
    href: "https://www.upwork.com/freelancers/~0181bd0d715b412691",
    icon: "upwork",
  },
  {
    id: "email",
    label: "Email",
    href: createMailtoLink(PRIMARY_CONTACT_EMAIL),
    icon: "email",
  },
];

export const FOOTER_CONTACT_ITEMS: FooterContactItem[] = [
  {
    id: "email",
    label: "Email",
    value: PRIMARY_CONTACT_EMAIL,
    href: createMailtoLink(PRIMARY_CONTACT_EMAIL),
  },
  {
    id: "location",
    label: "Location",
    value: "Pakistan",
  },
  {
    id: "availability",
    label: "Availability",
    value: "Available for freelance and remote work",
  },
];

export const FOOTER_PRIMARY_CTA: FooterLink = {
  id: "contact",
  label: "Start a Project",
  href: "/contact",
};
