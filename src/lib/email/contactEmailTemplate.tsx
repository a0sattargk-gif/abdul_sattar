import type { ContactFormData } from "@/types/contact";

const PROJECT_TYPE_LABELS: Record<string, string> = {
  "web-application": "Web Application",
  "mobile-application": "Mobile Application",
  "saas-product": "SaaS Product",
  "backend-api": "Backend or API",
  "existing-project": "Existing Project",
  other: "Other",
};

const BUDGET_LABELS: Record<string, string> = {
  "not-sure": "Not sure yet",
  "under-1000": "Under $1,000",
  "1000-3000": "$1,000 – $3,000",
  "3000-5000": "$3,000 – $5,000",
  "5000-plus": "$5,000+",
};

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export function createContactEmailSubject(data: ContactFormData): string {
  const projectType = PROJECT_TYPE_LABELS[data.projectType] ?? "Project";

  return `Portfolio enquiry: ${projectType} from ${data.name}`;
}

export function createContactEmailText(data: ContactFormData): string {
  const projectType = PROJECT_TYPE_LABELS[data.projectType] ?? "Not provided";

  const budget = BUDGET_LABELS[data.budget] ?? "Not provided";

  return [
    "New portfolio contact request",
    "",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Company: ${data.company || "Not provided"}`,
    `Project type: ${projectType}`,
    `Budget: ${budget}`,
    "",
    "Project details:",
    data.message,
  ].join("\n");
}

export function createContactEmailHtml(data: ContactFormData): string {
  const projectType = PROJECT_TYPE_LABELS[data.projectType] ?? "Not provided";

  const budget = BUDGET_LABELS[data.budget] ?? "Not provided";

  const safeName = escapeHtml(data.name);
  const safeEmail = escapeHtml(data.email);
  const safeCompany = escapeHtml(data.company || "Not provided");
  const safeProjectType = escapeHtml(projectType);
  const safeBudget = escapeHtml(budget);
  const safeMessage = escapeHtml(data.message).replaceAll("\n", "<br />");

  return `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>New portfolio enquiry</title>
      </head>

      <body
        style="
          margin: 0;
          padding: 24px;
          background: #f8fafc;
          color: #334155;
          font-family: Arial, Helvetica, sans-serif;
        "
      >
        <div
          style="
            max-width: 680px;
            margin: 0 auto;
            overflow: hidden;
            border: 1px solid #e2e8f0;
            border-radius: 16px;
            background: #ffffff;
          "
        >
          <div
            style="
              padding: 24px;
              background: #0f172a;
              color: #ffffff;
            "
          >
            <p
              style="
                margin: 0;
                color: #6ee7b7;
                font-size: 12px;
                font-weight: 700;
                letter-spacing: 1.5px;
                text-transform: uppercase;
              "
            >
              Portfolio contact form
            </p>

            <h1
              style="
                margin: 10px 0 0;
                color: #ffffff;
                font-size: 24px;
              "
            >
              New project enquiry
            </h1>
          </div>

          <div style="padding: 24px;">
            <table
              role="presentation"
              style="
                width: 100%;
                border-collapse: collapse;
              "
            >
              ${createTableRow("Name", safeName)}
              ${createTableRow("Email", safeEmail)}
              ${createTableRow("Company", safeCompany)}
              ${createTableRow("Project type", safeProjectType)}
              ${createTableRow("Budget", safeBudget)}
            </table>

            <div
              style="
                margin-top: 24px;
                padding: 20px;
                border-radius: 12px;
                background: #f1f5f9;
              "
            >
              <p
                style="
                  margin: 0 0 10px;
                  color: #0f172a;
                  font-size: 14px;
                  font-weight: 700;
                "
              >
                Project details
              </p>

              <p
                style="
                  margin: 0;
                  color: #334155;
                  font-size: 14px;
                  line-height: 1.7;
                "
              >
                ${safeMessage}
              </p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}

function createTableRow(label: string, value: string): string {
  return `
    <tr>
      <th
        scope="row"
        style="
          width: 140px;
          padding: 10px 12px 10px 0;
          border-bottom: 1px solid #e2e8f0;
          color: #64748b;
          font-size: 13px;
          text-align: left;
          vertical-align: top;
        "
      >
        ${label}
      </th>

      <td
        style="
          padding: 10px 0;
          border-bottom: 1px solid #e2e8f0;
          color: #0f172a;
          font-size: 14px;
          font-weight: 600;
        "
      >
        ${value}
      </td>
    </tr>
  `;
}
