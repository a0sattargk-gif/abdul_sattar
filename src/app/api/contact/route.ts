import { NextResponse } from "next/server";

import {
  createContactEmailHtml,
  createContactEmailSubject,
  createContactEmailText,
} from "@/lib/email/contactEmailTemplate";

import {
  createEmailTransporter,
  getContactRecipient,
} from "@/lib/email/transporter";

import type { ContactApiResponse, ContactFormData } from "@/types/contact";

import {
  hasValidationErrors,
  sanitizeContactFormData,
  validateContactForm,
} from "@/utils/contactValidation";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ContactFormData>;

    const rawData: ContactFormData = {
      name: body.name ?? "",
      email: body.email ?? "",
      company: body.company ?? "",
      projectType: body.projectType ?? "",
      budget: body.budget ?? "",
      message: body.message ?? "",
      website: body.website ?? "",
    };

    /*
     * Honeypot spam protection.
     *
     * Automated bots often complete hidden fields.
     * Return a generic success response so bots do not learn
     * that the submission was rejected.
     */
    if (rawData.website.trim()) {
      return NextResponse.json<ContactApiResponse>({
        success: true,
        message: "Your message has been sent successfully.",
      });
    }

    const data = sanitizeContactFormData(rawData);
    const errors = validateContactForm(data);

    if (hasValidationErrors(errors)) {
      return NextResponse.json<ContactApiResponse>(
        {
          success: false,
          message: "Please review the highlighted fields.",
          errors,
        },
        {
          status: 400,
        },
      );
    }

    const transporter = createEmailTransporter();
    const recipient = getContactRecipient();

    await transporter.sendMail({
      from: {
        name: "Portfolio Contact Form",
        address: recipient,
      },

      to: recipient,

      /*
       * Replies go to the visitor, while the sender remains
       * your authenticated account.
       */
      replyTo: {
        name: data.name,
        address: data.email,
      },

      subject: createContactEmailSubject(data),

      text: createContactEmailText(data),

      html: createContactEmailHtml(data),
    });

    return NextResponse.json<ContactApiResponse>({
      success: true,
      message: "Thank you. Your message has been sent successfully.",
    });
  } catch (error) {
    console.error("Contact form submission failed:", error);

    return NextResponse.json<ContactApiResponse>(
      {
        success: false,
        message: "Your message could not be sent. Please try again later.",
      },
      {
        status: 500,
      },
    );
  }
}
