import type {
  FooterContactItem,
  FooterLink,
  FooterLinkGroup,
  FooterSocialLink,
} from "@/types/footer";

export const FOOTER_LINK_GROUPS: FooterLinkGroup[] = [
  {
    id: "services",
    title: "Services",
    links: [
      {
        id: "full-stack-development",
        label: "Full-Stack Development",
        href: "/services/full-stack-development",
      },
      {
        id: "system-design",
        label: "System Design & Architecture",
        href: "/services/system-design",
      },
      {
        id: "shopify-development",
        label: "Shopify Development",
        href: "/services/shopify-development",
      },
      {
        id: "ai-solutions",
        label: "AI Solutions",
        href: "/services/ai-solutions",
      },
    ],
  },
  {
    id: "work",
    title: "Work",
    links: [
      {
        id: "projects",
        label: "Projects",
        href: "/projects",
      },
      {
        id: "case-studies",
        label: "Case Studies",
        href: "/case-studies",
      },
      {
        id: "open-source",
        label: "Open Source",
        href: "/open-source",
      },
      {
        id: "experience",
        label: "Experience",
        href: "/experience",
      },
    ],
  },
  {
    id: "resources",
    title: "Resources",
    links: [
      {
        id: "blog",
        label: "Blog",
        href: "/blog",
      },
      {
        id: "skills",
        label: "Skills",
        href: "/skills",
      },
      {
        id: "technology-stack",
        label: "Technology Stack",
        href: "/tech-stack",
      },
      {
        id: "certifications",
        label: "Certifications",
        href: "/certifications",
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
    href: "https://github.com/your-username",
    icon: "github",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/your-username",
    icon: "linkedin",
  },
  {
    id: "upwork",
    label: "Upwork",
    href: "https://www.upwork.com/freelancers/your-profile",
    icon: "upwork",
  },
  {
    id: "email",
    label: "Email",
    href: "mailto:hello@sattarwebstudio.com",
    icon: "email",
  },
];

export const FOOTER_CONTACT_ITEMS: FooterContactItem[] = [
  {
    id: "email",
    label: "Email",
    value: "hello@sattarwebstudio.com",
    href: "mailto:hello@sattarwebstudio.com",
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
