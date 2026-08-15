import Link from "next/link";

import type {
  NavigationDropdownLink,
  NavigationLink,
} from "@/types/navigation";

import { isPathActive } from "@/utils/navigation";

type NavbarLinkItem = NavigationLink | NavigationDropdownLink;

interface NavbarLinkProps {
  item: NavbarLinkItem;
  pathname: string;
  variant?: "desktop" | "mobile" | "dropdown";
  onClick?: () => void;
}

export default function NavbarLink({
  item,
  pathname,
  variant = "desktop",
  onClick,
}: NavbarLinkProps) {
  const isActive = isPathActive(pathname, item.href);

  const className = getNavbarLinkClasses(variant, isActive);

  return (
    <Link
      href={item.href}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
      className={className}
    >
      <span>{item.label}</span>

      {variant === "desktop" && isActive && (
        <span
          aria-hidden="true"
          className="absolute inset-x-3 -bottom-[19px] h-0.5 rounded-full bg-emerald-brand-500"
        />
      )}
    </Link>
  );
}

function getNavbarLinkClasses(
  variant: NavbarLinkProps["variant"],
  isActive: boolean,
): string {
  const baseClasses =
    "relative inline-flex items-center rounded-lg font-semibold transition-colors duration-200";

  if (variant === "mobile") {
    return [
      baseClasses,
      "min-h-12 w-full px-4 py-3 text-base",
      isActive
        ? "bg-emerald-brand-500/10 text-emerald-brand-700"
        : "text-navy-700 hover:bg-cool-gray-100 hover:text-navy-900",
    ].join(" ");
  }

  if (variant === "dropdown") {
    return [
      baseClasses,
      "min-h-12 w-full px-4 py-3 text-sm",
      isActive
        ? "bg-emerald-brand-500/10 text-emerald-brand-700"
        : "text-navy-700 hover:bg-cool-gray-100 hover:text-navy-900",
    ].join(" ");
  }

  return [
    baseClasses,
    "min-h-11 px-3 py-2 text-sm",
    isActive
      ? "text-emerald-brand-700"
      : "text-navy-700 hover:bg-cool-gray-100 hover:text-navy-900",
  ].join(" ");
}
