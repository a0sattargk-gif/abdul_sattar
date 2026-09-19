"use client";

import { useEffect, useState } from "react";
import type { TocItem } from "@/utils/blog";

interface BlogTableOfContentsProps {
  headings: TocItem[];
  inline?: boolean;
}

export default function BlogTableOfContents({
  headings,
  inline = false,
}: BlogTableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!headings || headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "0% 0% -70% 0%",
        threshold: 0.1,
      }
    );

    headings.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [headings]);

  if (!headings || headings.length < 2) {
    return null;
  }

  const handleScrollTo = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Mobile / Inline Collapsible version
  if (inline) {
    return (
      <div className="mb-8 block lg:hidden rounded-2xl border border-cool-gray-300 bg-navy-50/50 p-4">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-center justify-between text-left text-sm font-bold text-navy-950 cursor-pointer"
        >
          <span className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-emerald-brand-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h12"
              />
            </svg>
            Table of Contents ({headings.length})
          </span>
          <svg
            className={`w-4 h-4 text-cool-gray-500 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isOpen && (
          <ul className="mt-4 space-y-2 border-t border-cool-gray-200 pt-3 text-xs">
            {headings.map((item) => (
              <li
                key={item.id}
                style={{ paddingLeft: item.level === 3 ? "0.75rem" : "0" }}
              >
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollTo(item.id);
                    setIsOpen(false);
                  }}
                  className={[
                    "block py-1 transition-colors",
                    activeId === item.id
                      ? "font-bold text-emerald-brand-700"
                      : "text-cool-gray-600 hover:text-navy-900",
                  ].join(" ")}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }

  // Desktop Sidebar version
  return (
    <nav
      aria-label="Table of contents"
      className="rounded-2xl border border-cool-gray-300 bg-navy-50/40 p-5 shadow-2xs"
    >
      <div className="flex items-center gap-2 pb-3 border-b border-cool-gray-200">
        <svg
          className="w-4 h-4 text-emerald-brand-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h12"
          />
        </svg>
        <p className="text-xs font-bold uppercase tracking-wider text-navy-950">
          Table of Contents
        </p>
      </div>

      <ul className="mt-3 space-y-1.5 text-xs">
        {headings.map((item) => (
          <li
            key={item.id}
            style={{ paddingLeft: item.level === 3 ? "0.75rem" : "0" }}
          >
            <a
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo(item.id);
              }}
              className={[
                "block py-1 transition-colors leading-normal",
                activeId === item.id
                  ? "font-bold text-emerald-brand-700"
                  : "text-cool-gray-600 hover:text-navy-900",
              ].join(" ")}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
