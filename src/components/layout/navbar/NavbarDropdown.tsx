"use client";

import Link from "next/link";
import { useRef } from "react";

import type { NavigationDropdown } from "@/types/navigation";
import { isDropdownActive, isPathActive } from "@/utils/navigation";

interface NavbarDropdownProps {
  item: NavigationDropdown;
  pathname: string;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
}

export default function NavbarDropdown({
  item,
  pathname,
  isOpen,
  onOpen,
  onClose,
  onToggle,
}: NavbarDropdownProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  const isActive = isDropdownActive(pathname, item);
  const menuId = `${item.id}-dropdown-menu`;

  function focusFirstLink() {
    requestAnimationFrame(() => {
      firstLinkRef.current?.focus();
    });
  }

  function handleButtonKeyDown(event: React.KeyboardEvent<HTMLButtonElement>) {
    if (event.key === "ArrowDown") {
      event.preventDefault();

      onOpen();
      focusFirstLink();
    }

    if (event.key === "Escape") {
      event.preventDefault();
      onClose();
    }
  }

  function handleMenuKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Escape") {
      event.preventDefault();

      onClose();
      buttonRef.current?.focus();
    }
  }

  return (
    <li className="relative">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={onToggle}
        onKeyDown={handleButtonKeyDown}
        className={[
          "relative inline-flex min-h-11 items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold transition-colors duration-200",
          isActive
            ? "text-emerald-brand-700"
            : "text-navy-700 hover:bg-cool-gray-100 hover:text-navy-900",
        ].join(" ")}
      >
        <span>{item.label}</span>

        <ChevronDownIcon isOpen={isOpen} />

        {isActive && (
          <span
            aria-hidden="true"
            className="absolute inset-x-3 -bottom-[19px] h-0.5 rounded-full bg-emerald-brand-500"
          />
        )}
      </button>

      {isOpen && (
        <div
          id={menuId}
          onKeyDown={handleMenuKeyDown}
          className="absolute left-1/2 top-full z-50 mt-4 w-80 -translate-x-1/2 rounded-2xl border border-cool-gray-200 bg-white p-2 shadow-xl"
        >
          {item.href && (
            <Link
              href={item.href}
              onClick={onClose}
              className="mb-2 flex min-h-12 items-center justify-between rounded-xl bg-navy-900 px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-navy-800"
            >
              <span>View all {item.label}</span>

              <ArrowRightIcon />
            </Link>
          )}

          <ul className="grid gap-1" role="list">
            {item.items.map((dropdownItem, index) => {
              const isItemActive = isPathActive(pathname, dropdownItem.href);

              return (
                <li key={dropdownItem.id}>
                  <Link
                    ref={index === 0 ? firstLinkRef : undefined}
                    href={dropdownItem.href}
                    onClick={onClose}
                    aria-current={isItemActive ? "page" : undefined}
                    className={[
                      "block rounded-xl px-4 py-3 transition-colors duration-200",
                      isItemActive
                        ? "bg-emerald-brand-500/10"
                        : "hover:bg-cool-gray-100",
                    ].join(" ")}
                  >
                    <span className="block text-sm font-bold text-navy-900">
                      {dropdownItem.label}
                    </span>

                    {dropdownItem.description && (
                      <span className="mt-1 block text-xs leading-5 text-cool-gray-600">
                        {dropdownItem.description}
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
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
