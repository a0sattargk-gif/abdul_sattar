"use client";

import { useCallback, useMemo, useState } from "react";

export interface UsePaginationOptions<T> {
  /**
   * The complete array of items to paginate.
   */
  items: T[];

  /**
   * Number of items per page. Defaults to 6.
   */
  pageSize?: number;

  /**
   * Initial page to display (1-indexed). Defaults to 1.
   */
  initialPage?: number;

  /**
   * Whether to scroll smoothly to a target element or window top on page change.
   * Defaults to false so consumers have full control over scrolling behavior.
   */
  scrollToTopOnChange?: boolean;

  /**
   * Optional DOM selector or ref target to scroll into view upon page change.
   */
  scrollTargetSelector?: string;
}

export type PageItem = number | "ellipsis";

export interface UsePaginationReturn<T> {
  /**
   * Current active page number (1-indexed).
   */
  currentPage: number;

  /**
   * Total number of calculated pages.
   */
  totalPages: number;

  /**
   * Total number of items in the source array.
   */
  totalItems: number;

  /**
   * Current number of items per page.
   */
  pageSize: number;

  /**
   * Slice of items corresponding to the current active page.
   */
  paginatedItems: T[];

  /**
   * 0-indexed start index of the current page slice.
   */
  startIndex: number;

  /**
   * 0-indexed end index of the current page slice.
   */
  endIndex: number;

  /**
   * 1-indexed item number for UI display (e.g. "Showing 1 to 6").
   */
  startItemNumber: number;

  /**
   * 1-indexed ending item number for UI display (e.g. "Showing 1 to 6 of 24").
   */
  endItemNumber: number;

  /**
   * True if there is a next page available.
   */
  hasNextPage: boolean;

  /**
   * True if there is a previous page available.
   */
  hasPrevPage: boolean;

  /**
   * Formatted array of page numbers and ellipsis tokens for rendering pagination controls.
   */
  pageNumbers: PageItem[];

  /**
   * Jump directly to a specific page number.
   */
  goToPage: (page: number) => void;

  /**
   * Advance to the next page if available.
   */
  nextPage: () => void;

  /**
   * Go back to the previous page if available.
   */
  prevPage: () => void;

  /**
   * Dynamically change the page size.
   */
  setPageSize: (size: number) => void;

  /**
   * Reset pagination to page 1.
   */
  reset: () => void;
}

/**
 * Shared, robust pagination hook for Projects, Services, and Blog listing pages.
 * Handles slice calculation, boundary clamping, page number formatting, and optional scrolling.
 */
export function usePagination<T>({
  items,
  pageSize: initialPageSize = 6,
  initialPage = 1,
  scrollToTopOnChange = false,
  scrollTargetSelector,
}: UsePaginationOptions<T>): UsePaginationReturn<T> {
  const [pageSize, setPageSizeState] = useState<number>(
    Math.max(1, initialPageSize)
  );
  const [currentPage, setCurrentPage] = useState<number>(
    Math.max(1, initialPage)
  );

  const totalItems = items.length;

  const totalPages = useMemo(() => {
    return Math.max(1, Math.ceil(totalItems / pageSize));
  }, [totalItems, pageSize]);

  // Derive current page clamped to totalPages without requiring an effect
  const safeCurrentPage = Math.max(1, Math.min(currentPage, totalPages));

  const handleScroll = useCallback(() => {
    if (!scrollToTopOnChange || typeof window === "undefined") return;

    if (scrollTargetSelector) {
      const target = document.querySelector(scrollTargetSelector);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [scrollToTopOnChange, scrollTargetSelector]);

  const goToPage = useCallback(
    (page: number) => {
      const clampedPage = Math.max(1, Math.min(page, totalPages));
      if (clampedPage !== safeCurrentPage) {
        setCurrentPage(clampedPage);
        handleScroll();
      }
    },
    [safeCurrentPage, totalPages, handleScroll]
  );

  const nextPage = useCallback(() => {
    if (safeCurrentPage < totalPages) {
      goToPage(safeCurrentPage + 1);
    }
  }, [safeCurrentPage, totalPages, goToPage]);

  const prevPage = useCallback(() => {
    if (safeCurrentPage > 1) {
      goToPage(safeCurrentPage - 1);
    }
  }, [safeCurrentPage, goToPage]);

  const reset = useCallback(() => {
    setCurrentPage(1);
    handleScroll();
  }, [handleScroll]);

  const setPageSize = useCallback((newSize: number) => {
    const validatedSize = Math.max(1, newSize);
    setPageSizeState(validatedSize);
    setCurrentPage(1);
  }, []);

  const startIndex = (safeCurrentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, totalItems);

  const paginatedItems = useMemo(() => {
    return items.slice(startIndex, endIndex);
  }, [items, startIndex, endIndex]);

  const startItemNumber = totalItems === 0 ? 0 : startIndex + 1;
  const endItemNumber = endIndex;

  const hasNextPage = safeCurrentPage < totalPages;
  const hasPrevPage = safeCurrentPage > 1;

  // Generate pagination bar numbers (e.g. [1, 2, 'ellipsis', 8])
  const pageNumbers = useMemo<PageItem[]>(() => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    // When near the start
    if (safeCurrentPage <= 4) {
      return [1, 2, 3, 4, 5, "ellipsis", totalPages];
    }

    // When near the end
    if (safeCurrentPage >= totalPages - 3) {
      return [
        1,
        "ellipsis",
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    }

    // In the middle
    return [
      1,
      "ellipsis",
      safeCurrentPage - 1,
      safeCurrentPage,
      safeCurrentPage + 1,
      "ellipsis",
      totalPages,
    ];
  }, [safeCurrentPage, totalPages]);

  return {
    currentPage: safeCurrentPage,
    totalPages,
    totalItems,
    pageSize,
    paginatedItems,
    startIndex,
    endIndex,
    startItemNumber,
    endItemNumber,
    hasNextPage,
    hasPrevPage,
    pageNumbers,
    goToPage,
    nextPage,
    prevPage,
    setPageSize,
    reset,
  };
}

export default usePagination;
