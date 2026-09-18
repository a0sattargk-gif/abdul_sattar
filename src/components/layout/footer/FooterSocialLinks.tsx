import { FOOTER_SOCIAL_LINKS } from "@/constants/footer";

export default function FooterSocialLinks() {
  return (
    <section aria-labelledby="footer-social-heading">
      <h2
        id="footer-social-heading"
        className="text-sm font-bold uppercase tracking-[0.14em] text-white"
      >
        Connect
      </h2>

      <ul className="mt-5 flex flex-wrap gap-3" role="list">
        {FOOTER_SOCIAL_LINKS.map((socialLink) => (
          <li key={socialLink.id}>
            <a
              href={socialLink.href}
              target={socialLink.icon === "email" ? undefined : "_blank"}
              rel={
                socialLink.icon === "email" ? undefined : "noopener noreferrer"
              }
              aria-label={
                socialLink.icon === "email"
                  ? socialLink.label
                  : `${socialLink.label}, opens in a new tab`
              }
              className="grid size-11 place-items-center rounded-lg border border-white/10 bg-white/5 text-cool-gray-300 transition duration-200 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10 hover:text-white"
            >
              <SocialIcon icon={socialLink.icon} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

interface SocialIconProps {
  icon: "github" | "linkedin" | "upwork" | "email";
}

function SocialIcon({ icon }: SocialIconProps) {
  switch (icon) {
    case "github":
      return <GitHubIcon />;

    case "linkedin":
      return <LinkedInIcon />;

    case "upwork":
      return <UpworkIcon />;

    case "email":
      return <EmailIcon />;

    default:
      return null;
  }
}

function GitHubIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-5"
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.71.5.09.68-.22.68-.49v-1.72c-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .08 1.53 1.06 1.53 1.06.9 1.56 2.35 1.11 2.92.85.09-.66.35-1.11.64-1.36-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 7.13a9.4 9.4 0 0 1 2.5.35c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.95.68 1.91v2.6c0 .27.18.59.69.49A10.25 10.25 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-5"
    >
      <path d="M6.5 8.2H3.2V21h3.3V8.2ZM4.85 3A1.93 1.93 0 1 0 4.85 6.86 1.93 1.93 0 0 0 4.85 3ZM21 13.67c0-3.85-2.05-5.64-4.79-5.64-2.2 0-3.19 1.21-3.74 2.06V8.2H9.18V21h3.29v-6.34c0-1.67.32-3.29 2.39-3.29 2.04 0 2.06 1.91 2.06 3.4V21H21v-7.33Z" />
    </svg>
  );
}

function UpworkIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-5">
      <path
        d="M4 7v5.2a3.8 3.8 0 1 0 7.6 0V7M11.6 12.2c1.2-2.7 2.7-4.1 4.5-4.1 2.2 0 3.9 1.8 3.9 4s-1.7 4-3.9 4c-1.7 0-3.2-1.3-4.5-3.9L9.4 17"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-5">
      <path
        d="M4 6.5h16v11H4v-11Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />

      <path
        d="m5 7.5 7 5 7-5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
