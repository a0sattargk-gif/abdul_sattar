export interface NavigationLink {
  type: "link";
  id: string;
  label: string;
  href: string;
}

export interface NavigationDropdownLink {
  id: string;
  label: string;
  href: string;
  description?: string;
}

export interface NavigationDropdown {
  type: "dropdown";
  id: string;
  label: string;
  href?: string;
  items: NavigationDropdownLink[];
}

export type NavigationItem = NavigationLink | NavigationDropdown;
