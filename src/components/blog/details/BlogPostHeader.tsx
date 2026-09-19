import Image from "next/image";
import { PrismicNextImage } from "@prismicio/next";
import type { ImageField } from "@prismicio/client";
import BlogBreadcrumbs from "./BlogBreadcrumbs";
import BlogShareBar from "./BlogShareBar";

interface BlogPostHeaderProps {
  title: string;
  excerpt?: string | null;
  category?: string | null;
  authorName?: string | null;
  publishedDate?: string | null;
  readingTime?: string | null;
  heroImage?: ImageField | null;
}

export default function BlogPostHeader({
  title,
  excerpt,
  category,
  authorName = "Abdul Sattar",
  publishedDate,
  readingTime,
  heroImage,
}: BlogPostHeaderProps) {
  const formattedDate = publishedDate
    ? new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }).format(new Date(publishedDate))
    : null;

  return (
    <header className="border-b border-cool-gray-200 bg-gradient-to-b from-navy-50/80 via-white to-white pt-10 pb-12 sm:pt-14 sm:pb-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Navigation */}
        <BlogBreadcrumbs category={category} title={title} />

        {/* Category & Badge */}
        <div className="mt-4 flex flex-wrap items-center gap-2.5">
          {category && (
            <span className="inline-flex items-center rounded-full border border-emerald-brand-200 bg-emerald-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-brand-800">
              {category}
            </span>
          )}
          {readingTime && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-cool-gray-200 bg-white px-3 py-1 text-xs font-medium text-cool-gray-600 shadow-2xs">
              <svg
                className="w-3.5 h-3.5 text-cool-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {readingTime}
            </span>
          )}
        </div>

        {/* Article Title */}
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl lg:text-5xl leading-tight sm:leading-tight">
          {title}
        </h1>

        {/* Excerpt */}
        {excerpt && (
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-cool-gray-700 sm:text-lg sm:leading-8">
            {excerpt}
          </p>
        )}

        {/* Author Bar & Social Sharing */}
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5 border-t border-cool-gray-200 pt-6">
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full border border-emerald-brand-500/30">
              <Image
                src="/images/abdul-sattar.webp"
                alt={authorName || "Abdul Sattar"}
                fill
                sizes="48px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-bold text-navy-950">
                {authorName || "Abdul Sattar"}
              </p>
              <div className="flex items-center gap-2 text-xs text-cool-gray-500">
                <span>Full-Stack Engineer</span>
                {formattedDate && (
                  <>
                    <span aria-hidden="true">•</span>
                    <time dateTime={publishedDate || undefined}>
                      {formattedDate}
                    </time>
                  </>
                )}
              </div>
            </div>
          </div>

          <BlogShareBar title={title} />
        </div>

        {/* Hero Featured Image */}
        {heroImage?.url && (
          <div className="relative mt-8 sm:mt-10 aspect-[16/9] w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-cool-gray-200 bg-navy-900 shadow-md">
            <PrismicNextImage
              field={heroImage}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
              fallbackAlt=""
            />
          </div>
        )}
      </div>
    </header>
  );
}
