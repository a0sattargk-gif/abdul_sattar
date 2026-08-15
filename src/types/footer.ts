export interface FooterLink {
  id: string;
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface FooterLinkGroup {
  id: string;
  title: string;
  links: FooterLink[];
}

export interface FooterSocialLink {
  id: string;
  label: string;
  href: string;
  icon: "github" | "linkedin" | "upwork" | "email";
}

export interface FooterContactItem {
  id: string;
  label: string;
  value: string;
  href?: string;
}
