"use client";

import Link from "next/link";
import { useState } from "react";

import NavbarLink from "./NavbarLink";

import { CONTACT_NAVIGATION_ITEM } from "@/constants/navigation";
import type { NavigationDropdown, NavigationItem } from "@/types/navigation";
import { isDropdownActive, isPathActive } from "@/utils/navigation";

interface MobileNavbarProps {
  navigationItems: NavigationItem[];
  pathname: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNavbar({
  navigationItems,
  pathname,
  isOpen,
  onClose,
}: MobileNavbarProps) {
  if (!isOpen) {
    return null;
  }

  const isContactActive = isPathActive(pathname, CONTACT_NAVIGATION_ITEM.href);

  return (
    <div
      id="mobile-navigation"
      className="border-t border-cool-gray-200 bg-cool-gray-50 lg:hidden"
    >
      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6">
        <ul className="grid gap-1" role="list">
          {navigationItems.map((item) => {
            if (item.type === "link") {
              return (
                <li key={item.id}>
                  <NavbarLink
                    item={item}
                    pathname={pathname}
                    variant="mobile"
                    onClick={onClose}
                  />
                </li>
              );
            }

            return (
              <MobileDropdown
                key={item.id}
                item={item}
                pathname={pathname}
                onNavigate={onClose}
              />
            );
          })}
        </ul>

        <div className="mt-5 border-t border-cool-gray-200 pt-5">
          <Link
            href={CONTACT_NAVIGATION_ITEM.href}
            onClick={onClose}
            aria-current={isContactActive ? "page" : undefined}
            className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-emerald-brand-500 px-5 py-3 font-bold text-navy-950 transition-colors duration-200 hover:bg-emerald-brand-400"
          >
            {CONTACT_NAVIGATION_ITEM.label}
          </Link>
        </div>

        <p className="mt-5 text-center text-sm text-cool-gray-500">
          Full-stack development, accessibility and AI solutions.
        </p>
      </div>
    </div>
  );
}

interface MobileDropdownProps {
  item: NavigationDropdown;
  pathname: string;
  onNavigate: () => void;
}

function MobileDropdown({ item, pathname, onNavigate }: MobileDropdownProps) {
  const isActive = isDropdownActive(pathname, item);

  const [isExpanded, setIsExpanded] = useState(isActive);

  const menuId = `${item.id}-mobile-dropdown`;

  function toggleDropdown() {
    setIsExpanded((currentState) => !currentState);
  }

  return (
    <li>
      <button
        type="button"
        onClick={toggleDropdown}
        aria-expanded={isExpanded}
        aria-controls={menuId}
        className={[
          "flex min-h-12 w-full items-center justify-between rounded-lg px-4 py-3 text-left text-base font-semibold transition-colors duration-200",
          isActive
            ? "bg-emerald-brand-500/10 text-emerald-brand-700"
            : "text-navy-700 hover:bg-cool-gray-100 hover:text-navy-900",
        ].join(" ")}
      >
        <span>{item.label}</span>

        <ChevronDownIcon isOpen={isExpanded} />
      </button>

      {isExpanded && (
        <div id={menuId} className="mt-1 rounded-xl bg-white p-2">
          {item.href && (
            <Link
              href={item.href}
              onClick={onNavigate}
              className="mb-1 flex min-h-11 items-center justify-between rounded-lg bg-navy-900 px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-navy-800"
            >
              <span>View all {item.label}</span>

              <ArrowRightIcon />
            </Link>
          )}

          <ul className="grid gap-1" role="list">
            {item.items.map((dropdownItem) => (
              <li key={dropdownItem.id}>
                <NavbarLink
                  item={dropdownItem}
                  pathname={pathname}
                  variant="dropdown"
                  onClick={onNavigate}
                />

                {dropdownItem.description && (
                  <p className="-mt-2 px-4 pb-3 text-xs leading-5 text-cool-gray-500">
                    {dropdownItem.description}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
}

interface ChevronDownIconProps {
  isOpen: boolean;
}

function ChevronDownIcon({ isOpen }: ChevronDownIconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className={[
        "size-4 transition-transform duration-200",
        isOpen ? "rotate-180" : "",
      ].join(" ")}
    >
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="size-4">
      <path
        d="M4 10H16M11 5L16 10L11 15"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
