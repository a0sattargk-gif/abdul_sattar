"use client";

import { useState } from "react";
import {
  AnimatePresence,
  LazyMotion,
  domAnimation,
  m,
  useReducedMotion,
} from "framer-motion";

import { ABOUT_CAREER_JOURNEY } from "@/constants/about/journey";

export default function CareerJourney() {
  const content = ABOUT_CAREER_JOURNEY;
  const shouldReduceMotion = useReducedMotion();
  const [activePhaseId, setActivePhaseId] = useState<string>(content.items[0].id);

  const activeItem =
    content.items.find((item) => item.id === activePhaseId) ?? content.items[0];

  return (
    <LazyMotion features={domAnimation}>
      <section
        aria-labelledby="about-journey-heading"
        className="border-b border-white/[0.08] bg-[#030712]/40 py-16 backdrop-blur-md sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-emerald-400" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
                {content.eyebrow}
              </p>
            </div>

            <h2
              id="about-journey-heading"
              className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl"
            >
              {content.title}
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-200 sm:text-lg">
              {content.description}
            </p>
          </div>

          {/* Interactive Phase Selector & Detail Showcase */}
          <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:gap-10 items-start">
            {/* Left Column: Interactive Milestone Navigation */}
            <div className="flex flex-col gap-3 lg:col-span-5" role="tablist" aria-label="Career phases">
              {content.items.map((item) => {
                const isActive = item.id === activePhaseId;
                return (
                  <button
                    key={item.id}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActivePhaseId(item.id)}
                    className={`group relative flex w-full flex-col text-left rounded-2xl border p-5 backdrop-blur-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                      isActive
                        ? "border-emerald-500/50 bg-[#0b1120] text-white shadow-[0_0_25px_rgba(16,185,129,0.15)]"
                        : "border-white/10 bg-[#0b1120]/60 text-slate-300 hover:border-white/20 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                        {item.period}
                      </span>
                      <span
                        className={`text-xs font-mono font-semibold ${
                          isActive ? "text-slate-200" : "text-slate-300"
                        }`}
                      >
                        {item.role}
                      </span>
                    </div>

                    <h3
                      className={`mt-2 text-base font-bold ${
                        isActive ? "text-white" : "text-slate-200 group-hover:text-white"
                      }`}
                    >
                      {item.title}
                    </h3>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Active Phase Deep Dive Card */}
            <div className="rounded-2xl border border-white/10 bg-[#0b1120]/90 p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-xl lg:col-span-7">
              <AnimatePresence mode="wait">
                <m.div
                  key={activeItem.id}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={shouldReduceMotion ? undefined : { opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                        {activeItem.period}
                      </span>
                      <h3 className="mt-1 text-xl font-extrabold text-white sm:text-2xl">
                        {activeItem.title}
                      </h3>
                    </div>
                    <span className="rounded-xl border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200">
                      {activeItem.role}
                    </span>
                  </div>

                  <p className="mt-5 text-base leading-relaxed text-slate-200">
                    {activeItem.description}
                  </p>

                  {/* Highlights Checklist */}
                  <div className="mt-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                      Key Deliverables & Responsibilities
                    </h4>
                    <ul className="mt-3 space-y-2.5" role="list">
                      {activeItem.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-2.5 text-sm font-medium text-slate-200"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full border border-emerald-500/30 bg-emerald-500/15 text-xs font-bold text-emerald-400"
                          >
                            ✓
                          </span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies utilized */}
                  <div className="mt-8 border-t border-white/10 pt-5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                      Core Stack in this Phase
                    </h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {activeItem.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold text-slate-200"
                        >
                          <span className="size-1.5 rounded-full bg-emerald-400" />
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </m.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
