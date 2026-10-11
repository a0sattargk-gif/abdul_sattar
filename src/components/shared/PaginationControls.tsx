"use client";

import type { PageItem } from "@/hooks/usePagination";

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  startItemNumber: number;
  endItemNumber: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  pageNumbers: PageItem[];
  goToPage: (page: number) => void;
  nextPage: () => void;
  prevPage: () => void;
  itemLabel?: string;
  className?: string;
}

export default function PaginationControls({
  currentPage,
  totalPages,
  totalItems,
  startItemNumber,
  endItemNumber,
  hasNextPage,
  hasPrevPage,
  pageNumbers,
  goToPage,
  nextPage,
  prevPage,
  itemLabel = "items",
  className = "",
}: PaginationControlsProps) {
  // If there are no items or only 1 page, hide the pagination controls
  if (totalPages <= 1) {
    return null;
  }

  return (
    <nav
      aria-label="Pagination Navigation"
      className={`mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row ${className}`}
    >
      {/* Item Range Counter */}
      <p className="text-xs font-medium text-slate-300">
        Showing{" "}
        <strong className="font-bold text-white">
          {startItemNumber}–{endItemNumber}
        </strong>{" "}
        of <strong className="font-bold text-white">{totalItems}</strong>{" "}
        {itemLabel}
      </p>

      {/* Navigation Buttons */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        {/* Previous Page Button */}
        <button
          type="button"
          onClick={prevPage}
          disabled={!hasPrevPage}
          aria-label="Go to previous page"
          className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs font-bold text-slate-200 backdrop-blur-md transition-all duration-200 hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-white disabled:cursor-not-allowed disabled:border-white/5 disabled:bg-white/[0.02] disabled:text-slate-600 disabled:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
        >
          <span aria-hidden="true" className="text-sm">←</span>
          <span className="hidden sm:inline">Previous</span>
        </button>

        {/* Page Number Buttons */}
        <ul className="flex items-center gap-1" role="list">
          {pageNumbers.map((page, index) => {
            if (page === "ellipsis") {
              return (
                <li
                  key={`ellipsis-${index}`}
                  aria-hidden="true"
                  className="px-2 text-xs font-bold text-slate-400 select-none"
                >
                  …
                </li>
              );
            }

            const isCurrent = page === currentPage;

            return (
              <li key={page}>
                <button
                  type="button"
                  onClick={() => goToPage(page)}
                  aria-current={isCurrent ? "page" : undefined}
                  aria-label={`Page ${page}`}
                  className={`inline-flex size-10 items-center justify-center rounded-xl text-xs font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                    isCurrent
                      ? "border border-emerald-500 bg-emerald-500 text-navy-950 shadow-[0_0_15px_rgba(16,185,129,0.35)]"
                      : "border border-white/10 bg-white/[0.04] text-slate-200 hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-white"
                  }`}
                >
                  {page}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Next Page Button */}
        <button
          type="button"
          onClick={nextPage}
          disabled={!hasNextPage}
          aria-label="Go to next page"
          className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs font-bold text-slate-200 backdrop-blur-md transition-all duration-200 hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-white disabled:cursor-not-allowed disabled:border-white/5 disabled:bg-white/[0.02] disabled:text-slate-600 disabled:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
        >
          <span className="hidden sm:inline">Next</span>
          <span aria-hidden="true" className="text-sm">→</span>
        </button>
      </div>
    </nav>
  );
}

