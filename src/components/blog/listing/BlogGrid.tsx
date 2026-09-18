"use client";

import BlogCard from "@/components/blog/listing/BlogCard";
import PaginationControls from "@/components/shared/PaginationControls";
import { usePagination } from "@/hooks/usePagination";

import type { BlogPostDocument } from "../../../../prismicio-types";

interface BlogGridProps {
  posts: BlogPostDocument[];
  pageSize?: number;
}

export default function BlogGrid({ posts, pageSize = 6 }: BlogGridProps) {
  const pagination = usePagination({
    items: posts,
    pageSize,
    scrollToTopOnChange: true,
    scrollTargetSelector: "#latest-articles-heading",
  });

  if (posts.length === 0) {
    return null;
  }

  return (
    <section
      aria-labelledby="latest-articles-heading"
      className="bg-cool-gray-50 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {pagination.paginatedItems.map((post, index) => (
            <BlogCard key={post.id} post={post} priority={index < 3} />
          ))}
        </div>

        <PaginationControls
          {...pagination}
          itemLabel="articles"
        />
      </div>
    </section>
  );
}
