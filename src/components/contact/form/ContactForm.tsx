"use client";

import { type ChangeEvent, type FormEvent, useState } from "react";

import {
  CONTACT_BUDGET_OPTIONS,
  CONTACT_PROJECT_TYPES,
} from "@/constants/contact";

import type {
  ContactApiResponse,
  ContactFormData,
  ContactFormErrors,
} from "@/types/contact";

import {
  hasValidationErrors,
  validateContactForm,
} from "@/utils/contactValidation";

const INITIAL_FORM_DATA: ContactFormData = {
  name: "",
  email: "",
  company: "",
  projectType: "",
  budget: "",
  message: "",
  website: "",
};

type SubmissionState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_DATA);

  const [errors, setErrors] = useState<ContactFormErrors>({});

  const [submissionState, setSubmissionState] =
    useState<SubmissionState>("idle");

  const [statusMessage, setStatusMessage] = useState("");

  function handleChange(
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));

    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: undefined,
      form: undefined,
    }));

    if (submissionState !== "idle") {
      setSubmissionState("idle");
      setStatusMessage("");
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationErrors = validateContactForm(formData);

    setErrors(validationErrors);

    if (hasValidationErrors(validationErrors)) {
      setSubmissionState("error");
      setStatusMessage("Please review the highlighted fields.");

      focusFirstInvalidField(validationErrors);

      return;
    }

    setSubmissionState("submitting");
    setStatusMessage("Sending your message...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      });

      const result = (await response.json()) as ContactApiResponse;

      if (!response.ok || !result.success) {
        setErrors(result.errors ?? {});
        setSubmissionState("error");
        setStatusMessage(result.message || "Your message could not be sent.");

        if (result.errors) {
          focusFirstInvalidField(result.errors);
        }

        return;
      }

      setFormData(INITIAL_FORM_DATA);
      setErrors({});
      setSubmissionState("success");
      setStatusMessage(result.message);
    } catch (error) {
      console.error("Contact request failed:", error);

      setSubmissionState("error");
      setStatusMessage("A connection error occurred. Please try again.");
    }
  }

  const isSubmitting = submissionState === "submitting";

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="rounded-3xl border border-cool-gray-200 bg-white p-5 shadow-brand-lg sm:p-7 lg:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField id="contact-name" label="Name" error={errors.name} required>
          <input
            id="contact-name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            autoComplete="name"
            maxLength={80}
            required
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className={getInputClasses(Boolean(errors.name))}
            placeholder="Your name"
          />
        </FormField>

        <FormField
          id="contact-email"
          label="Email"
          error={errors.email}
          required
        >
          <input
            id="contact-email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            maxLength={160}
            required
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            className={getInputClasses(Boolean(errors.email))}
            placeholder="you@example.com"
          />
        </FormField>

        <FormField id="contact-company" label="Company" optional>
          <input
            id="contact-company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            autoComplete="organization"
            maxLength={120}
            className={getInputClasses(false)}
            placeholder="Company or product"
          />
        </FormField>

        <FormField
          id="contact-project-type"
          label="Project type"
          error={errors.projectType}
          required
        >
          <select
            id="contact-project-type"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            required
            aria-invalid={Boolean(errors.projectType)}
            aria-describedby={
              errors.projectType ? "contact-project-type-error" : undefined
            }
            className={getInputClasses(Boolean(errors.projectType))}
          >
            <option value="">Select project type</option>

            {CONTACT_PROJECT_TYPES.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </FormField>

        <div className="sm:col-span-2">
          <FormField id="contact-budget" label="Estimated budget" optional>
            <select
              id="contact-budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className={getInputClasses(false)}
            >
              <option value="">Select an approximate budget</option>

              {CONTACT_BUDGET_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </FormField>
        </div>

        <div className="sm:col-span-2">
          <FormField
            id="contact-message"
            label="Project details"
            error={errors.message}
            required
          >
            <textarea
              id="contact-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              minLength={20}
              maxLength={3000}
              required
              aria-invalid={Boolean(errors.message)}
              aria-describedby={[
                "contact-message-help",
                errors.message ? "contact-message-error" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              className={`${getInputClasses(Boolean(errors.message))} resize-y`}
              placeholder="Describe your project, current challenge, and expected result."
            />

            <div className="mt-2 flex items-center justify-between gap-4">
              <p
                id="contact-message-help"
                className="text-xs text-cool-gray-600"
              >
                Minimum 20 characters
              </p>

              <p className="text-xs text-cool-gray-600">
                {formData.message.length}/3000
              </p>
            </div>
          </FormField>
        </div>
      </div>

      {/* Honeypot field */}
      <div
        aria-hidden="true"
        className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden"
      >
        <label htmlFor="contact-website">Website</label>

        <input
          id="contact-website"
          name="website"
          type="text"
          value={formData.website}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {errors.form && (
        <p
          role="alert"
          className="mt-5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-800"
        >
          {errors.form}
        </p>
      )}

      {statusMessage && (
        <div
          role={submissionState === "error" ? "alert" : "status"}
          aria-live="polite"
          className={[
            "mt-5 rounded-xl border p-4 text-sm font-semibold",
            submissionState === "success"
              ? "border-l-4 border-l-emerald-brand-700 border-y border-r border-cool-gray-300 bg-navy-50 text-navy-950 font-bold"
              : submissionState === "error"
                ? "border-red-200 bg-red-50 text-red-800"
                : "border-cool-gray-200 bg-cool-gray-50 text-navy-800",
          ].join(" ")}
        >
          {statusMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-emerald-brand-500 px-6 py-3 font-bold text-navy-950 transition duration-200 hover:bg-emerald-brand-400 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? (
          <>
            <LoadingIcon />
            Sending...
          </>
        ) : (
          <>
            Send Project Details
            <ArrowRightIcon />
          </>
        )}
      </button>

      <p className="mt-4 text-center text-xs leading-5 text-cool-gray-600">
        Your information will only be used to respond to your enquiry.
      </p>
    </form>
  );
}

interface FormFieldProps {
  id: string;
  label: string;
  children: React.ReactNode;
  error?: string;
  required?: boolean;
  optional?: boolean;
}

function FormField({
  id,
  label,
  children,
  error,
  required = false,
  optional = false,
}: FormFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="flex items-center justify-between gap-3 text-sm font-bold text-navy-900"
      >
        <span>
          {label}

          {required && (
            <span aria-hidden="true" className="ml-1 text-red-700">
              *
            </span>
          )}
        </span>

        {optional && (
          <span className="text-xs font-medium text-cool-gray-600">
            Optional
          </span>
        )}
      </label>

      <div className="mt-2">{children}</div>

      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          className="mt-2 text-sm font-semibold text-red-700"
        >
          {error}
        </p>
      )}
    </div>
  );
}

function getInputClasses(hasError: boolean): string {
  return [
    "min-h-12 w-full rounded-xl border bg-white px-4 py-3 text-base text-navy-900 outline-none transition placeholder:text-cool-gray-500",
    "hover:border-cool-gray-400",
    "focus:border-navy-950 focus:ring-4 focus:ring-navy-950/10",
    hasError ? "border-red-500" : "border-cool-gray-300",
  ].join(" ");
}

function focusFirstInvalidField(errors: ContactFormErrors) {
  const fieldOrder: Array<keyof ContactFormErrors> = [
    "name",
    "email",
    "projectType",
    "message",
  ];

  const firstInvalidField = fieldOrder.find((field) => errors[field]);

  if (!firstInvalidField) {
    return;
  }

  const element = document.getElementById(
    `contact-${toKebabCase(firstInvalidField)}`,
  );

  element?.focus();
}

function toKebabCase(value: string): string {
  return value.replace(/[A-Z]/g, (character) => `-${character.toLowerCase()}`);
}

function LoadingIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="size-5 animate-spin"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeWidth="3"
        className="opacity-25"
      />

      <path
        d="M21 12a9 9 0 0 0-9-9"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="size-5">
      <path
        d="M4 10H16M11 5L16 10L11 15"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
