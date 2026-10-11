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
          "relative inline-flex min-h-11 items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium transition-colors duration-200",
          isActive
            ? "text-emerald-brand-400 font-semibold"
            : "text-slate-300 hover:bg-white/[0.06] hover:text-white",
        ].join(" ")}
      >
        <span>{item.label}</span>

        <ChevronDownIcon isOpen={isOpen} />

        {isActive && (
          <span
            aria-hidden="true"
            className="absolute inset-x-3 -bottom-[19px] h-0.5 rounded-full bg-emerald-brand-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]"
          />
        )}
      </button>

      {isOpen && (
        <div
          id={menuId}
          onKeyDown={handleMenuKeyDown}
          className="absolute left-1/2 top-full z-50 mt-4 w-80 -translate-x-1/2 rounded-2xl border border-white/10 bg-[#0b1120]/95 p-2.5 shadow-[0_25px_60px_rgba(0,0,0,0.85)] backdrop-blur-2xl ring-1 ring-white/10"
        >
          {item.href && (
            <Link
              href={item.href}
              onClick={onClose}
              className="mb-2 flex min-h-12 items-center justify-between rounded-xl bg-emerald-500 px-4 py-3 text-sm font-bold text-navy-950 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-colors hover:bg-emerald-400"
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
                        ? "bg-emerald-brand-500/15"
                        : "hover:bg-white/[0.06]",
                    ].join(" ")}
                  >
                    <span className="block text-sm font-bold text-white">
                      {dropdownItem.label}
                    </span>

                    {dropdownItem.description && (
                      <span className="mt-1 block text-xs leading-5 text-slate-300">
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
