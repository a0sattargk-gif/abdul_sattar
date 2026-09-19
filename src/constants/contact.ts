import { createMailtoLink, PRIMARY_CONTACT_EMAIL } from "@/constants/email";
import type { ContactDetail, ContactOption } from "@/types/contact";

export const CONTACT_PROJECT_TYPES: ContactOption[] = [
  {
    value: "web-application",
    label: "Web Application",
  },
  {
    value: "mobile-application",
    label: "Mobile Application",
  },
  {
    value: "saas-product",
    label: "SaaS Product",
  },
  {
    value: "backend-api",
    label: "Backend or API",
  },
  {
    value: "existing-project",
    label: "Existing Project",
  },
  {
    value: "other",
    label: "Other",
  },
];

export const CONTACT_BUDGET_OPTIONS: ContactOption[] = [
  {
    value: "not-sure",
    label: "Not sure yet",
  },
  {
    value: "under-1000",
    label: "Under $1,000",
  },
  {
    value: "1000-3000",
    label: "$1,000 – $3,000",
  },
  {
    value: "3000-5000",
    label: "$3,000 – $5,000",
  },
  {
    value: "5000-plus",
    label: "$5,000+",
  },
];

export const CONTACT_DETAILS: ContactDetail[] = [
  {
    id: "email",
    label: "Email",
    value: PRIMARY_CONTACT_EMAIL,
    href: createMailtoLink(PRIMARY_CONTACT_EMAIL),
  },
  {
    id: "location",
    label: "Location",
    value: "Pakistan · Available remotely",
  },
  {
    id: "availability",
    label: "Availability",
    value: "Freelance, contract, and remote projects",
  },
];

export const CONTACT_EXPECTATIONS = [
  "Clear project discussion",
  "Technical direction",
  "Realistic timeline",
  "Transparent communication",
];
