/**
 * Centralized Email Configuration for Sattar Web Studio
 * Single source of truth for all domain mailboxes, administration, and contact routing.
 */

export const SITE_DOMAIN = "sattarwebstudio.com";

export const STUDIO_EMAILS = {
  /**
   * Domain Mail System Administration & Technical Operations (RFC 2142)
   */
  postmaster: `postmaster@${SITE_DOMAIN}`,

  /**
   * Primary Client Inquiries, Consultations & General Business
   */
  primary: `hello@${SITE_DOMAIN}`,

  /**
   * Security Disclosures & Vulnerability Reports (RFC 9116)
   */
  security: `security@${SITE_DOMAIN}`,

  /**
   * Support, Maintenance & Engineering SLAs
   */
  support: `support@${SITE_DOMAIN}`,

  /**
   * Legal, Privacy & Compliance (GDPR / CCPA / Terms)
   */
  legal: `legal@${SITE_DOMAIN}`,
} as const;

export type StudioEmailKey = keyof typeof STUDIO_EMAILS;

/**
 * Dedicated shorthand exports for common usage
 */
export const POSTMASTER_EMAIL = STUDIO_EMAILS.postmaster;
export const PRIMARY_CONTACT_EMAIL = STUDIO_EMAILS.primary;
export const SECURITY_EMAIL = STUDIO_EMAILS.security;
export const SUPPORT_EMAIL = STUDIO_EMAILS.support;
export const LEGAL_EMAIL = STUDIO_EMAILS.legal;

/**
 * Mailto link generator with optional subject line encoding
 */
export function createMailtoLink(
  email: string = PRIMARY_CONTACT_EMAIL,
  subject?: string
): string {
  if (!subject) {
    return `mailto:${email}`;
  }
  return `mailto:${email}?subject=${encodeURIComponent(subject)}`;
}

