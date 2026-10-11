import type { Metadata } from "next";
import Link from "next/link";
import {
  Home,
  Briefcase,
  Layers,
  BookOpen,
  User,
  Send,
  Compass,
} from "lucide-react";

import Card3D from "@/components/3d/Card3D";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Sattar Web Studio",
  description:
    "The page you are looking for could not be found. Explore projects, engineering services, or return to the homepage.",
  robots: {
    index: false,
    follow: false,
  },
};

const QUICK_LINKS = [
  {
    name: "Projects",
    href: "/projects",
    description: "Production case studies",
    icon: Briefcase,
  },
  {
    name: "Services",
    href: "/services",
    description: "Full-stack capabilities",
    icon: Layers,
  },
  {
    name: "Engineering Blog",
    href: "/blog",
    description: "Technical articles & notes",
    icon: BookOpen,
  },
  {
    name: "About Me",
    href: "/about",
    description: "Background & career stack",
    icon: User,
  },
];

export default function NotFound() {
  return (
    <div className="relative min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
      {/* Cyber Ambient Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 -top-20 size-96 rounded-full bg-emerald-500/15 blur-[160px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-10 size-96 rounded-full bg-cyan-500/15 blur-[160px]"
      />

      {/* Cyber Grid Background Matrix */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-3xl">
        {/* Interactive 3D Status Card */}
        <Card3D
          maxTilt={8}
          scale={1.01}
          glareOpacity={0.25}
          className="rounded-3xl border border-white/10 bg-[#0b1120]/85 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.85)] backdrop-blur-2xl ring-1 ring-white/5 sm:p-12 md:p-14"
        >
          <div className="text-center">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
              <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse" />
              <span>HTTP 404 • ROUTE_NOT_FOUND</span>
            </div>

            {/* Glowing 3D 404 Visual */}
            <div className="my-6">
              <h1 className="font-mono text-7xl font-black tracking-tight sm:text-8xl md:text-9xl select-none">
                <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(16,185,129,0.35)]">
                  404
                </span>
              </h1>
              <p className="mt-2 text-xl font-extrabold tracking-tight text-white sm:text-2xl lg:text-3xl">
                Page Lost in Cyberspace
              </p>
            </div>

            {/* Explanation & High-contrast Text */}
            <p className="mx-auto max-w-lg text-base leading-relaxed text-slate-200 sm:text-lg">
              The page or resource you are looking for does not exist, has been
              relocated, or the URL might be mistyped.
            </p>

            {/* Primary Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
              <Button
                asChild
                size="lg"
                variant="default"
                className="group h-12 px-7 text-sm font-extrabold shadow-accent hover:-translate-y-0.5"
              >
                <Link href="/" aria-label="Return to homepage">
                  <Home className="size-4 transition-transform group-hover:scale-110" />
                  <span>Return to Home</span>
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 border-white/20 bg-white/5 px-7 text-sm font-bold text-white hover:border-white/35 hover:bg-white/10 hover:text-white hover:-translate-y-0.5"
              >
                <Link href="/projects" aria-label="Explore projects">
                  <Briefcase className="size-4" />
                  <span>Explore Projects</span>
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 border-white/20 bg-white/5 px-6 text-sm font-bold text-white hover:border-white/35 hover:bg-white/10 hover:text-white hover:-translate-y-0.5"
              >
                <Link href="/contact" aria-label="Contact Abdul Sattar">
                  <Send className="size-4" />
                  <span>Contact Me</span>
                </Link>
              </Button>
            </div>
          </div>
        </Card3D>

        {/* Suggested Destinations Grid */}
        <section
          aria-labelledby="popular-destinations-heading"
          className="mt-8 rounded-2xl border border-white/10 bg-[#0b1120]/60 p-6 backdrop-blur-xl sm:p-7"
        >
          <div className="flex items-center gap-2 mb-4">
            <Compass className="size-4 text-emerald-400" />
            <h2
              id="popular-destinations-heading"
              className="text-xs font-bold uppercase tracking-[0.16em] text-slate-300"
            >
              Popular Destinations
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {QUICK_LINKS.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-3.5 transition-all duration-200 hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:shadow-[0_0_15px_rgba(16,185,129,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                >
                  <div className="flex items-center gap-3">
                    <div className="grid size-9 place-items-center rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 transition-colors group-hover:bg-emerald-500 group-hover:text-black">
                      <Icon className="size-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                        {item.name}
                      </div>
                      <div className="text-xs text-slate-300">
                        {item.description}
                      </div>
                    </div>
                  </div>
                  <span
                    aria-hidden="true"
                    className="text-xs font-bold text-slate-400 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-emerald-400"
                  >
                    →
                  </span>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}

