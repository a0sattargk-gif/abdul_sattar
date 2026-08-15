import type { NavigationItem, NavigationLink } from "@/types/navigation";

export const MAIN_NAVIGATION: NavigationItem[] = [
  {
    type: "link",
    id: "home",
    label: "Home",
    href: "/",
  },
  {
    type: "link",
    id: "about",
    label: "About",
    href: "/about",
  },
  {
    type: "dropdown",
    id: "services",
    label: "Services",
    href: "/services",
    items: [
      {
        id: "full-stack-development",
        label: "Full-Stack Development",
        href: "/services/full-stack-development",
        description:
          "Scalable frontend and backend applications using modern technologies.",
      },
      {
        id: "web-accessibility",
        label: "Web Accessibility",
        href: "/services/web-accessibility",
        description:
          "WCAG audits, accessibility remediation, and accessible development.",
      },
      {
        id: "shopify-development",
        label: "Shopify Development",
        href: "/services/shopify-development",
        description:
          "Custom Shopify themes, applications, and store improvements.",
      },
      {
        id: "ai-solutions",
        label: "AI Solutions",
        href: "/services/ai-solutions",
        description:
          "AI-powered applications, automation, and intelligent integrations.",
      },
    ],
  },
  {
    type: "dropdown",
    id: "work",
    label: "Work",
    items: [
      {
        id: "projects",
        label: "Projects",
        href: "/projects",
        description:
          "Explore selected applications, products, and development projects.",
      },
      {
        id: "case-studies",
        label: "Case Studies",
        href: "/case-studies",
        description:
          "Detailed project challenges, implementation decisions, and results.",
      },
      {
        id: "open-source",
        label: "Open Source",
        href: "/open-source",
        description:
          "View open-source projects, packages, and development contributions.",
      },
    ],
  },
  {
    type: "dropdown",
    id: "expertise",
    label: "Expertise",
    items: [
      {
        id: "skills",
        label: "Skills",
        href: "/skills",
        description:
          "Technical skills across frontend, backend, accessibility, and AI.",
      },
      {
        id: "experience",
        label: "Experience",
        href: "/experience",
        description:
          "Professional experience, responsibilities, and completed work.",
      },
      {
        id: "technology-stack",
        label: "Technology Stack",
        href: "/tech-stack",
        description:
          "Technologies, frameworks, platforms, and development tools.",
      },
      {
        id: "certifications",
        label: "Certifications",
        href: "/certifications",
        description:
          "Professional certifications and completed technical training.",
      },
    ],
  },
  {
    type: "link",
    id: "blog",
    label: "Blog",
    href: "/blog",
  },
];

export const CONTACT_NAVIGATION_ITEM: NavigationLink = {
  type: "link",
  id: "contact",
  label: "Contact",
  href: "/contact",
};
