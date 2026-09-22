"use client";

import { useMemo, useState } from "react";
import { BookOpen } from "lucide-react";

import BlogCard from "@/components/blog/listing/BlogCard";
import PaginationControls from "@/components/shared/PaginationControls";
import { Button } from "@/components/ui/button";
import { usePagination } from "@/hooks/usePagination";
import { cn } from "@/lib/utils";
import type { BlogPostDocument } from "../../../../prismicio-types";

interface BlogGridProps {
  posts: BlogPostDocument[];
  pageSize?: number;
}

const CURATED_TOPICS = ["Architecture", "Full-Stack", "Performance"];

export default function BlogGrid({ posts, pageSize = 6 }: BlogGridProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Calculate counts for categories present in posts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    posts.forEach((p) => {
      const cat = p.data.category?.trim();
      if (cat) {
        counts[cat] = (counts[cat] || 0) + 1;
      }
    });
    return counts;
  }, [posts]);

  // Build unique category tabs: "All" + extracted categories + curated topics
  const categories = useMemo(() => {
    const extracted = Array.from(
      new Set(
        posts
          .map((p) => p.data.category?.trim())
          .filter((c): c is string => Boolean(c))
      )
    );

    const merged = ["All", ...extracted];
    CURATED_TOPICS.forEach((topic) => {
      if (!merged.includes(topic)) {
        merged.push(topic);
      }
    });

    return merged;
  }, [posts]);

  // Filter posts based on active category
  const filteredPosts = useMemo(() => {
    if (selectedCategory === "All") {
      return posts;
    }
    return posts.filter(
      (p) =>
        p.data.category?.trim().toLowerCase() ===
        selectedCategory.toLowerCase()
    );
  }, [posts, selectedCategory]);

  const pagination = usePagination({
    items: filteredPosts,
    pageSize,
    scrollToTopOnChange: true,
    scrollTargetSelector: "#latest-articles-heading",
  });

  return (
    <section
      aria-labelledby="latest-articles-heading"
      className="bg-cool-gray-50 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-brand-700">
            Latest Articles
          </p>

          <h2
            id="latest-articles-heading"
            className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl"
          >
            Notes from building real software
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-cool-gray-700">
            Practical lessons from frontend, backend, architecture, and
            production engineering.
          </p>
        </div>

        {/* Category Tab Bar */}
        <div className="mt-10 flex items-center justify-center">
          <div
            role="tablist"
            aria-label="Filter articles by category"
            className="flex max-w-full flex-wrap items-center justify-center gap-2 rounded-2xl border border-cool-gray-200 bg-white p-1.5 shadow-sm"
          >
            {categories.map((category) => {
              const isActive =
                selectedCategory.toLowerCase() === category.toLowerCase();
              const count =
                category === "All"
                  ? posts.length
                  : categoryCounts[category] || 0;

              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => {
                    setSelectedCategory(category);
                    pagination.reset();
                  }}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-brand-500",
                    isActive
                      ? "bg-navy-950 text-white shadow-sm"
                      : "text-cool-gray-600 hover:bg-cool-gray-100 hover:text-navy-950"
                  )}
                >
                  <span>{category}</span>
                  <span
                    className={cn(
                      "rounded-full px-2 py-0.5 text-xs font-bold transition-colors",
                      isActive
                        ? "bg-emerald-brand-500 text-navy-950"
                        : "bg-cool-gray-100 text-cool-gray-600"
                    )}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Filtered Articles Grid / Empty State */}
        {filteredPosts.length > 0 ? (
          <>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {pagination.paginatedItems.map((post, index) => (
                <BlogCard key={post.id} post={post} priority={index < 3} />
              ))}
            </div>

            <PaginationControls {...pagination} itemLabel="articles" />
          </>
        ) : (
          <div className="mx-auto mt-10 max-w-md rounded-3xl border border-cool-gray-200 bg-white p-8 text-center shadow-sm">
            <div className="mx-auto grid size-12 place-items-center rounded-2xl bg-cool-gray-100 text-cool-gray-500">
              <BookOpen className="size-6" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-navy-950">
              No articles in &ldquo;{selectedCategory}&rdquo; yet
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-cool-gray-600">
              New deep-dive case studies and tutorials are published regularly.
            </p>
            <Button
              variant="default"
              size="sm"
              className="mt-5 font-bold"
              onClick={() => {
                setSelectedCategory("All");
                pagination.reset();
              }}
            >
              View All Articles ({posts.length})
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
