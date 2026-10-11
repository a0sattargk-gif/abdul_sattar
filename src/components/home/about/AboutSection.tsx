"use client";

import { useState } from "react";
import Link from "next/link";
import {
  AnimatePresence,
  LazyMotion,
  domAnimation,
  m,
  useReducedMotion,
} from "framer-motion";

import { HOME_ABOUT_CONTENT } from "@/constants/home/about";
import type { TechCategoryKey } from "@/types/home/about";

export default function AboutSection() {
  const shouldReduceMotion = useReducedMotion();
  const content = HOME_ABOUT_CONTENT;
  const [activeCategory, setActiveCategory] = useState<TechCategoryKey>("all");

  const filteredTechnologies =
    activeCategory === "all"
      ? content.technologies
      : content.technologies.filter((tech) => tech.category === activeCategory);

  const activeCategoryLabel =
    content.categories.find((cat) => cat.key === activeCategory)?.label ?? "All";

  return (
    <LazyMotion features={domAnimation}>
      <section
        aria-labelledby="home-about-heading"
        className="relative overflow-hidden border-b border-white/[0.08] bg-transparent py-14 sm:py-18 lg:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Top Label Bar */}
          <m.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-between border-b border-white/10 pb-4"
          >
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-emerald-brand-400" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-brand-400">
                {content.eyebrow}
              </p>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0b1120] px-3.5 py-1 text-xs font-bold text-white shadow-sm ring-1 ring-white/5">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-brand-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-brand-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              </span>
              <span>{content.statusText}</span>
            </div>
          </m.div>

          {/* Symmetrical 50/50 Grid with Unified Clean Surfaces */}
          <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-10 items-stretch">
            {/* Left Card: Concise Overview & Stats (50%) */}
            <m.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0b1120]/80 p-6 sm:p-8 lg:p-9 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl ring-1 ring-white/5 transition duration-300 hover:border-emerald-500/30"
            >
              <div>
                <h2
                  id="home-about-heading"
                  className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl"
                >
                  {content.title}{" "}
                  <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    {content.highlightedText}
                  </span>
                </h2>

                <p className="mt-4 text-base leading-relaxed text-slate-200">
                  {content.brief}
                </p>
              </div>

              {/* Symmetrical 3-column stats with high-contrast palette */}
              <div className="my-6 grid grid-cols-3 divide-x divide-white/10 rounded-xl border border-white/10 bg-[#030712]/60 p-3 sm:p-4 text-center">
                {content.stats.map((stat) => (
                  <div key={stat.label} className="px-2">
                    <div className="text-xl font-extrabold tracking-tight text-white sm:text-2xl font-mono">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-[11px] font-bold uppercase tracking-wider text-emerald-brand-400">
                      {stat.label}
                    </div>
                    <div className="mt-0.5 text-[11px] font-medium text-slate-300 hidden sm:block">
                      {stat.sublabel}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom CTA */}
              <div>
                <Link
                  href={content.action.href}
                  aria-label={content.action.ariaLabel}
                  className="group inline-flex w-fit min-h-11 items-center gap-2.5 rounded-xl bg-emerald-brand-500 px-6 py-2.5 text-sm font-bold text-navy-950 shadow-[0_0_20px_rgba(16,185,129,0.35)] transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-brand-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-brand-400"
                >
                  {content.action.label}
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </div>
            </m.div>

            {/* Right Card: Interactive Tech Stack Matrix (50%) */}
            <m.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.55,
                delay: shouldReduceMotion ? 0 : 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0b1120]/80 p-6 sm:p-8 lg:p-9 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl ring-1 ring-white/5 transition duration-300 hover:border-emerald-500/30"
            >
              <div>
                {/* Header & Category Tabs */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-white">
                    Core Technologies
                  </span>
                  <span className="text-xs font-medium text-slate-300">
                    Filter by domain
                  </span>
                </div>

                {/* Filter Tabs with High Contrast */}
                <div
                  role="tablist"
                  aria-label="Filter technologies by domain"
                  className="mt-4 flex flex-wrap gap-1.5"
                >
                  {content.categories.map((cat) => {
                    const isSelected = activeCategory === cat.key;
                    return (
                      <button
                        key={cat.key}
                        role="tab"
                        aria-selected={isSelected}
                        onClick={() => setActiveCategory(cat.key)}
                        className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-brand-400 ${
                          isSelected
                            ? "bg-emerald-brand-500 text-navy-950 shadow-[0_0_15px_rgba(16,185,129,0.4)]"
                            : "border border-white/10 bg-white/[0.04] text-slate-200 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
                        }`}
                      >
                        {cat.label}
                      </button>
                    );
                  })}
                </div>

                {/* Interactive Pills Grid */}
                <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  <AnimatePresence mode="popLayout">
                    {filteredTechnologies.map((tech) => (
                      <m.div
                        key={tech.name}
                        layout
                        initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="group flex items-center justify-between gap-2 rounded-xl border border-white/10 bg-[#030712]/70 px-3.5 py-2.5 text-xs font-medium text-slate-200 shadow-sm transition-all duration-200 hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-white"
                      >
                        <span className="flex items-center gap-2">
                          <span
                            aria-hidden="true"
                            className="size-1.5 rounded-full bg-emerald-brand-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] transition-transform duration-200 group-hover:scale-150"
                          />
                          <span className="font-bold text-white">
                            {tech.name}
                          </span>
                        </span>
                        {tech.highlight && (
                          <span className="rounded border border-white/10 bg-white/[0.05] px-2 py-0.5 font-mono text-[10.5px] font-semibold text-slate-300 transition-colors group-hover:border-white/20 group-hover:text-white">
                            {tech.highlight}
                          </span>
                        )}
                      </m.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-3.5 text-xs text-slate-300">
                <span>
                  Showing <strong className="text-white">{filteredTechnologies.length}</strong> technologies in{" "}
                  <strong className="text-emerald-brand-400">{activeCategoryLabel}</strong>
                </span>
                <Link
                  href="/about"
                  className="font-bold text-emerald-brand-400 transition-colors hover:text-emerald-brand-300"
                >
                  Full Stack ↗
                </Link>
              </div>
            </m.div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}