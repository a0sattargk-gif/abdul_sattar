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
      className={`mt-12 flex flex-col items-center justify-between gap-4 border-t border-cool-gray-200 pt-8 sm:flex-row ${className}`}
    >
      {/* Item Range Counter */}
      <p className="text-xs font-medium text-cool-gray-700">
        Showing{" "}
        <strong className="font-bold text-navy-950">
          {startItemNumber}–{endItemNumber}
        </strong>{" "}
        of <strong className="font-bold text-navy-950">{totalItems}</strong>{" "}
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
          className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-xl border border-cool-gray-300 bg-white px-3.5 py-2 text-xs font-bold text-navy-900 shadow-2xs transition-all duration-200 hover:border-navy-950 hover:bg-navy-50/50 hover:text-navy-950 disabled:cursor-not-allowed disabled:border-cool-gray-200 disabled:bg-cool-gray-50 disabled:text-cool-gray-400 disabled:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-950"
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
                  className="px-2 text-xs font-bold text-cool-gray-400 select-none"
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
                  className={`inline-flex size-10 items-center justify-center rounded-xl text-xs font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-950 ${
                    isCurrent
                      ? "border border-navy-950 bg-navy-950 text-white shadow-brand-sm"
                      : "border border-cool-gray-300 bg-white text-navy-900 hover:border-navy-950 hover:bg-navy-50/50 hover:text-navy-950 shadow-2xs"
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
          className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-xl border border-cool-gray-300 bg-white px-3.5 py-2 text-xs font-bold text-navy-900 shadow-2xs transition-all duration-200 hover:border-navy-950 hover:bg-navy-50/50 hover:text-navy-950 disabled:cursor-not-allowed disabled:border-cool-gray-200 disabled:bg-cool-gray-50 disabled:text-cool-gray-400 disabled:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-950"
        >
          <span className="hidden sm:inline">Next</span>
          <span aria-hidden="true" className="text-sm">→</span>
        </button>
      </div>
    </nav>
  );
}

