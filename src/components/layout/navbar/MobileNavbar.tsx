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
      className="border-t border-white/[0.08] bg-[#030712]/95 backdrop-blur-2xl lg:hidden"
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

        <div className="mt-5 border-t border-white/10 pt-5">
          <Link
            href={CONTACT_NAVIGATION_ITEM.href}
            onClick={onClose}
            aria-current={isContactActive ? "page" : undefined}
            className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-emerald-brand-500 px-5 py-3 font-bold text-navy-950 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-colors duration-200 hover:bg-emerald-brand-400"
          >
            {CONTACT_NAVIGATION_ITEM.label}
          </Link>
        </div>

        <p className="mt-5 text-center text-sm text-slate-300">
          Full-stack development, system design and AI solutions.
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
            ? "bg-emerald-brand-500/15 text-emerald-brand-400"
            : "text-slate-300 hover:bg-white/[0.06] hover:text-white",
        ].join(" ")}
      >
        <span>{item.label}</span>

        <ChevronDownIcon isOpen={isExpanded} />
      </button>

      {isExpanded && (
        <div id={menuId} className="mt-1 rounded-xl border border-white/10 bg-[#0b1120] p-2">
          {item.href && (
            <Link
              href={item.href}
              onClick={onNavigate}
              className="mb-1 flex min-h-11 items-center justify-between rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-bold text-navy-950 transition-colors hover:bg-emerald-400"
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
                  <p className="-mt-2 px-4 pb-3 text-xs leading-5 text-slate-300">
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
