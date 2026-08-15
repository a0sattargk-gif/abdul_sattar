import type { CTAContent } from "@/types/home";

export const HOME_CTA: CTAContent = {
  eyebrow: "Let's Build Something Great",

  title: "Ready to turn your idea into a scalable software product?",

  description:
    "Whether you're building a SaaS platform, business application, internal dashboard, ecommerce solution, or enterprise software, I'd be happy to discuss your project and help transform your idea into a production-ready product.",

  primaryAction: {
    label: "Schedule a Discovery Call",
    href: "/contact",
    ariaLabel: "Schedule a project discussion",
  },

  secondaryAction: {
    label: "Explore My Projects",
    href: "/projects",
    ariaLabel: "View my software projects",
  },

  trustItems: [
    "Available for freelance projects",
    "Remote collaboration worldwide",
    "Full-stack software development",
    "Long-term product partnerships",
  ],
};
