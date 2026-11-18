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
    label: "Not sure yet (Need technical discovery)",
  },
  {
    value: "under-3000",
    label: "Under $3,000 (Architecture Audit / Scoping)",
  },
  {
    value: "3000-8000",
    label: "$3,000 – $8,000 (Feature Sprint / Module)",
  },
  {
    value: "8000-15000",
    label: "$8,000 – $15,000 (Full-Cycle MVP / Web Platform)",
  },
  {
    value: "15000-plus",
    label: "$15,000+ (Enterprise / Dedicated Team Retainer)",
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
    value: "Global Delivery · Operating Remotely",
  },
  {
    id: "availability",
    label: "Availability",
    value: "Accepting new client projects & retainer partnerships",
  },
];

export const CONTACT_EXPECTATIONS = [
  "Technical Discovery & Architectural Roadmap",
  "Dedicated Solutions Architect on Every Account",
  "Agile Sprint Delivery with Bi-weekly Progress Demos",
  "Full Code, Database Schema & IP Ownership",
];
