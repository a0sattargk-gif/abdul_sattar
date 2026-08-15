"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import DesktopNavbar from "./DesktopNavbar";
import MobileMenuButton from "./MobileMenuButton";
import MobileNavbar from "./MobileNavbar";
import NavbarBrand from "./NavbarBrand";

import { MAIN_NAVIGATION } from "@/constants/navigation";

export default function Navbar() {
  const pathname = usePathname();

  /*
   * Stores the pathname where the mobile menu was opened.
   *
   * null:
   * The menu is closed.
   *
   * Same as current pathname:
   * The menu is open.
   *
   * Different from current pathname:
   * The route changed, so the menu is considered closed.
   */
  const [mobileMenuPathname, setMobileMenuPathname] = useState<string | null>(
    null,
  );

  const isMobileMenuOpen = mobileMenuPathname === pathname;

  function closeMobileMenu() {
    setMobileMenuPathname(null);
  }

  function toggleMobileMenu() {
    setMobileMenuPathname((currentPathname) =>
      currentPathname === pathname ? null : pathname,
    );
  }

  // Close the menu when Escape is pressed.
  useEffect(() => {
    if (!isMobileMenuOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeMobileMenu();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  // Close the menu when changing to desktop size.
  useEffect(() => {
    function handleWindowResize() {
      if (window.innerWidth >= 1024) {
        closeMobileMenu();
      }
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  // Lock page scrolling while the mobile menu is open.
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-cool-gray-200 bg-cool-gray-50/95 backdrop-blur-xl">
      <nav aria-label="Main navigation">
        <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
          <NavbarBrand onClick={closeMobileMenu} />

          <DesktopNavbar
            navigationItems={MAIN_NAVIGATION}
            pathname={pathname}
          />

          <MobileMenuButton
            isOpen={isMobileMenuOpen}
            onClick={toggleMobileMenu}
          />
        </div>

        <MobileNavbar
          navigationItems={MAIN_NAVIGATION}
          pathname={pathname}
          isOpen={isMobileMenuOpen}
          onClose={closeMobileMenu}
        />
      </nav>
    </header>
  );
}
