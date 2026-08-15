import type {
  ContactFormData,
  ContactFormErrors,
  ProjectBudget,
  ProjectType,
} from "@/types/contact";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const PROJECT_TYPES: ProjectType[] = [
  "web-application",
  "mobile-application",
  "saas-product",
  "backend-api",
  "existing-project",
  "other",
];

const PROJECT_BUDGETS: ProjectBudget[] = [
  "not-sure",
  "under-1000",
  "1000-3000",
  "3000-5000",
  "5000-plus",
];

export function validateContactForm(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};

  const name = data.name.trim();
  const email = data.email.trim();
  const message = data.message.trim();

  if (!name) {
    errors.name = "Please enter your name.";
  } else if (name.length < 2) {
    errors.name = "Name must contain at least 2 characters.";
  } else if (name.length > 80) {
    errors.name = "Name must not exceed 80 characters.";
  }

  if (!email) {
    errors.email = "Please enter your email address.";
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = "Please enter a valid email address.";
  } else if (email.length > 160) {
    errors.email = "Email address is too long.";
  }

  if (!data.projectType || !PROJECT_TYPES.includes(data.projectType)) {
    errors.projectType = "Please select a project type.";
  }

  if (data.budget && !PROJECT_BUDGETS.includes(data.budget)) {
    errors.form = "The selected budget is invalid.";
  }

  if (!message) {
    errors.message = "Please describe your project.";
  } else if (message.length < 20) {
    errors.message =
      "Please provide at least 20 characters about your project.";
  } else if (message.length > 3000) {
    errors.message = "Project description must not exceed 3,000 characters.";
  }

  if (data.company.trim().length > 120) {
    errors.form = "Company name is too long.";
  }

  return errors;
}

export function hasValidationErrors(errors: ContactFormErrors): boolean {
  return Object.keys(errors).length > 0;
}

export function sanitizeContactFormData(
  data: ContactFormData,
): ContactFormData {
  return {
    name: data.name.trim(),
    email: data.email.trim().toLowerCase(),
    company: data.company.trim(),
    projectType: data.projectType,
    budget: data.budget,
    message: data.message.trim(),
    website: data.website.trim(),
  };
}
