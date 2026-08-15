import type { Metadata } from "next";
import type { ReactNode } from "react";

import Footer from "@/components/layout/footer/Footer";
import Navbar from "@/components/layout/navbar/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Sattar Web Studio",
    template: "%s | Sattar Web Studio",
  },
  description:
    "Full-stack development, web accessibility, Shopify development, and AI-powered solutions.",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-lg bg-navy-900 px-4 py-3 font-semibold text-white transition-transform focus:translate-y-0"
        >
          Skip to main content
        </a>

        <Navbar />

        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
