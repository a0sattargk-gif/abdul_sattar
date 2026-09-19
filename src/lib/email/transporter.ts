import nodemailer from "nodemailer";

function getEmailCredentials() {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS || process.env.EMAIL_PASSWORD;

  if (!user || !pass) {
    throw new Error(
      "EMAIL_USER and EMAIL_PASS (or EMAIL_PASSWORD) environment variables are required.",
    );
  }

  const host = process.env.EMAIL_HOST;
  const port = process.env.EMAIL_PORT ? parseInt(process.env.EMAIL_PORT, 10) : 465;
  const secure = process.env.EMAIL_SECURE !== "false"; // true for port 465, false for 587

  return {
    user,
    pass,
    host,
    port,
    secure,
  };
}

export function createEmailTransporter() {
  const credentials = getEmailCredentials();

  /*
   * If custom SMTP host is provided (e.g. mail.sattarwebstudio.com or smtp.privateemail.com),
   * use standard custom domain SMTP.
   */
  if (credentials.host) {
    return nodemailer.createTransport({
      host: credentials.host,
      port: credentials.port,
      secure: credentials.secure,
      auth: {
        user: credentials.user,
        pass: credentials.pass,
      },
    });
  }

  /*
   * Fallback for Gmail service or development
   */
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: credentials.user,
      pass: credentials.pass,
    },
  });
}

export function getContactRecipient(): string {
  if (process.env.EMAIL_TO) {
    return process.env.EMAIL_TO;
  }

  const { user } = getEmailCredentials();

  return user;
}
