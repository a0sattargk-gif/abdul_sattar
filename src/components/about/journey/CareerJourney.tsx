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
        className="border-b border-cool-gray-200 bg-white py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-emerald-brand-700" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-brand-700">
                {content.eyebrow}
              </p>
            </div>

            <h2
              id="about-journey-heading"
              className="mt-3 text-2xl font-extrabold tracking-tight text-navy-950 sm:text-3xl lg:text-4xl"
            >
              {content.title}
            </h2>

            <p className="mt-4 text-base leading-relaxed text-navy-900 sm:text-lg">
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
                    className={`group relative flex w-full flex-col text-left rounded-2xl border p-5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-brand-600 ${
                      isActive
                        ? "border-navy-950 bg-navy-950 text-white shadow-brand-md"
                        : "border-cool-gray-300 bg-white text-navy-950 hover:border-navy-950 hover:bg-navy-50/50"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-xs font-bold uppercase tracking-wider ${
                          isActive ? "text-emerald-brand-400" : "text-emerald-brand-700"
                        }`}
                      >
                        {item.period}
                      </span>
                      <span
                        className={`text-xs font-mono font-semibold ${
                          isActive ? "text-cool-gray-300" : "text-cool-gray-500"
                        }`}
                      >
                        {item.role}
                      </span>
                    </div>

                    <h3
                      className={`mt-2 text-base font-bold ${
                        isActive ? "text-white" : "text-navy-950"
                      }`}
                    >
                      {item.title}
                    </h3>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Active Phase Deep Dive Card */}
            <div className="rounded-2xl border border-cool-gray-200 bg-white p-6 sm:p-8 lg:p-10 shadow-brand-sm lg:col-span-7">
              <AnimatePresence mode="wait">
                <m.div
                  key={activeItem.id}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={shouldReduceMotion ? undefined : { opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-cool-gray-200 pb-4">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-brand-800">
                        {activeItem.period}
                      </span>
                      <h3 className="mt-1 text-xl font-extrabold text-navy-950 sm:text-2xl">
                        {activeItem.title}
                      </h3>
                    </div>
                    <span className="rounded-xl border border-cool-gray-200 bg-navy-50/50 px-3 py-1 text-xs font-semibold text-navy-900">
                      {activeItem.role}
                    </span>
                  </div>

                  <p className="mt-5 text-base leading-relaxed text-navy-900">
                    {activeItem.description}
                  </p>

                  {/* Highlights Checklist */}
                  <div className="mt-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-navy-950">
                      Key Deliverables & Responsibilities
                    </h4>
                    <ul className="mt-3 space-y-2.5" role="list">
                      {activeItem.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-2.5 text-sm font-medium text-navy-900"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-emerald-brand-500/15 text-xs font-bold text-emerald-brand-800"
                          >
                            ✓
                          </span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies utilized */}
                  <div className="mt-8 border-t border-cool-gray-200 pt-5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-navy-950">
                      Core Stack in this Phase
                    </h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {activeItem.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-cool-gray-200 bg-white px-3 py-1 text-xs font-semibold text-navy-900 shadow-2xs"
                        >
                          <span className="size-1.5 rounded-full bg-emerald-brand-600" />
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
