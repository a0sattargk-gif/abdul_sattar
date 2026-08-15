import type { NavigationDropdown, NavigationItem } from "@/types/navigation";

/**
 * Checks whether a pathname matches a navigation URL.
 *
 * Examples:
 * pathname: "/projects"
 * href: "/projects"
 * result: true
 *
 * pathname: "/projects/accessify-video"
 * href: "/projects"
 * result: true
 */
export function isPathActive(pathname: string, href: string): boolean {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

/**
 * Checks whether any child link inside a dropdown is active.
 */
export function isDropdownActive(
  pathname: string,
  dropdown: NavigationDropdown,
): boolean {
  if (dropdown.href && isPathActive(pathname, dropdown.href)) {
    return true;
  }

  return dropdown.items.some((item) => isPathActive(pathname, item.href));
}

/**
 * Checks whether either a normal link or dropdown is active.
 */
export function isNavigationItemActive(
  pathname: string,
  item: NavigationItem,
): boolean {
  if (item.type === "link") {
    return isPathActive(pathname, item.href);
  }

  return isDropdownActive(pathname, item);
}

/**
 * Returns true when a navigation item is a normal link.
 */
export function isNavigationLink(
  item: NavigationItem,
): item is Extract<NavigationItem, { type: "link" }> {
  return item.type === "link";
}

/**
 * Returns true when a navigation item contains a dropdown.
 */
export function isNavigationDropdown(
  item: NavigationItem,
): item is NavigationDropdown {
  return item.type === "dropdown";
}
