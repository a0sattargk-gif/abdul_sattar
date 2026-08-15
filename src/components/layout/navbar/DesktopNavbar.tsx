"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import NavbarDropdown from "@/components/layout/navbar/NavbarDropdown";
import NavbarLink from "@/components/layout/navbar/NavbarLink";

import { CONTACT_NAVIGATION_ITEM } from "@/constants/navigation";

import type { NavigationItem } from "@/types/navigation";

import { isPathActive } from "@/utils/navigation";

interface DesktopNavbarProps {
  navigationItems: NavigationItem[];
  pathname: string;
}

export default function DesktopNavbar({
  navigationItems,
  pathname,
}: DesktopNavbarProps) {
  const navigationRef = useRef<HTMLDivElement>(null);

  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);

  const isContactActive = isPathActive(pathname, CONTACT_NAVIGATION_ITEM.href);

  function openDropdown(dropdownId: string) {
    setOpenDropdownId(dropdownId);
  }

  function closeDropdown() {
    setOpenDropdownId(null);
  }

  function toggleDropdown(dropdownId: string) {
    setOpenDropdownId((currentDropdownId) =>
      currentDropdownId === dropdownId ? null : dropdownId,
    );
  }

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      const target = event.target as Node;

      if (navigationRef.current && !navigationRef.current.contains(target)) {
        closeDropdown();
      }
    }

    function handleEscapeKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeDropdown();
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);

    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);

      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  return (
    <div ref={navigationRef} className="hidden items-center gap-5 lg:flex">
      <ul className="flex items-center gap-1" role="list">
        {navigationItems.map((item) => {
          if (item.type === "dropdown") {
            const isOpen = openDropdownId === item.id;

            return (
              <NavbarDropdown
                key={item.id}
                item={item}
                pathname={pathname}
                isOpen={isOpen}
                onOpen={() => openDropdown(item.id)}
                onClose={closeDropdown}
                onToggle={() => toggleDropdown(item.id)}
              />
            );
          }

          return (
            <li key={item.id}>
              <NavbarLink
                item={item}
                pathname={pathname}
                variant="desktop"
                onClick={closeDropdown}
              />
            </li>
          );
        })}
      </ul>

      <Link
        href={CONTACT_NAVIGATION_ITEM.href}
        onClick={closeDropdown}
        aria-current={isContactActive ? "page" : undefined}
        className="inline-flex min-h-11 items-center justify-center rounded-lg bg-emerald-brand-500 px-5 py-2.5 text-sm font-bold text-navy-950 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-brand-400 hover:shadow-md"
      >
        {CONTACT_NAVIGATION_ITEM.label}
      </Link>
    </div>
  );
}
