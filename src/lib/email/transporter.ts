import nodemailer from "nodemailer";

function getEmailCredentials() {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;

  if (!user || !pass) {
    throw new Error(
      "EMAIL_USER and EMAIL_PASS environment variables are required.",
    );
  }

  return {
    user,
    pass,
  };
}

export function createEmailTransporter() {
  const credentials = getEmailCredentials();

  return nodemailer.createTransport({
    service: "gmail",

    auth: {
      user: credentials.user,
      pass: credentials.pass,
    },
  });
}

export function getContactRecipient(): string {
  const { user } = getEmailCredentials();

  return user;
}
