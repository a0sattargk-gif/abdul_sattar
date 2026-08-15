export type ProjectType =
  | "web-application"
  | "mobile-application"
  | "saas-product"
  | "backend-api"
  | "existing-project"
  | "other";

export type ProjectBudget =
  | "not-sure"
  | "under-1000"
  | "1000-3000"
  | "3000-5000"
  | "5000-plus";

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  projectType: ProjectType | "";
  budget: ProjectBudget | "";
  message: string;

  /**
   * Honeypot field.
   * Real users should leave this empty.
   */
  website: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  projectType?: string;
  message?: string;
  form?: string;
}

export interface ContactApiResponse {
  success: boolean;
  message: string;
  errors?: ContactFormErrors;
}

export interface ContactOption {
  value: string;
  label: string;
}

export interface ContactDetail {
  id: string;
  label: string;
  value: string;
  href?: string;
}
