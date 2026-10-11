import type { Metadata } from "next";
import type { ReactNode } from "react";

import Footer from "@/components/layout/footer/Footer";
import Navbar from "@/components/layout/navbar/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
      process.env.APP_URL ||
      "https://sattarwebstudio.com"
  ),
  title: {
    default: "Sattar Web Studio",
    template: "%s | Sattar Web Studio",
  },
  description:
    "Full-stack development, backend systems, system design, and modern web application architecture.",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en" className="dark">
      <body className="relative min-h-screen overflow-x-hidden bg-[#030712] text-foreground antialiased selection:bg-emerald-400 selection:text-navy-950">
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-lg bg-emerald-500 px-4 py-3 font-bold text-navy-950 transition-transform focus:translate-y-0 shadow-lg"
        >
          Skip to main content
        </a>

        <div className="relative z-10 flex min-h-screen flex-col">
          <Navbar />

          <main id="main-content" className="flex-1">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
