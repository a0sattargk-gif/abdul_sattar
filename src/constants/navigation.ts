import type { NavigationItem, NavigationLink } from "@/types/navigation";

export const MAIN_NAVIGATION: NavigationItem[] = [
  {
    type: "link",
    id: "home",
    label: "Home",
    href: "/",
  },
  {
    type: "link",
    id: "about",
    label: "About",
    href: "/about",
  },
  {
    type: "link",
    id: "services",
    label: "Services",
    href: "/services",
  },
  {
    type: "link",
    id: "projects",
    label: "Projects",
    href: "/projects",
  },
  {
    type: "link",
    id: "blog",
    label: "Blog",
    href: "/blog",
  },
];

export const CONTACT_NAVIGATION_ITEM: NavigationLink = {
  type: "link",
  id: "contact",
  label: "Contact",
  href: "/contact",
};
