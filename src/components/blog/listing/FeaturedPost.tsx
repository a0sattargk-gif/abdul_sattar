import Link from "next/link";

import { PrismicNextImage } from "@prismicio/next";

import type { BlogPostDocument } from "../../../../prismicio-types";

interface FeaturedPostProps {
  post: BlogPostDocument;
}

export default function FeaturedPost({ post }: FeaturedPostProps) {
  const title = post.data.listing_title || "Untitled article";

  return (
    <section
      aria-labelledby="featured-post-heading"
      className="relative py-16 sm:py-20 border-b border-white/[0.08]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-400">
          Featured Article
        </p>

        <article className="mt-6 grid overflow-hidden rounded-3xl border border-white/10 bg-[#0b1120]/80 shadow-2xl backdrop-blur-xl lg:grid-cols-2">
          <Link
            href={`/blog/${post.uid}`}
            aria-label={`Read ${title}`}
            className="relative min-h-72 overflow-hidden bg-[#030712] lg:min-h-[420px]"
          >
            <PrismicNextImage
              field={post.data.thumbnail}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition duration-700 ease-out hover:scale-105"
              fallbackAlt=""
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b1120] via-transparent to-transparent opacity-80"
            />
          </Link>

          <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
            <div className="flex flex-wrap items-center gap-3 text-sm font-semibold">
              {post.data.category && (
                <span className="inline-flex items-center rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                  {post.data.category}
                </span>
              )}

              {post.data.reading_time && (
                <span className="text-slate-300 text-xs font-medium">
                  {post.data.reading_time}
                </span>
              )}
            </div>

            <h2
              id="featured-post-heading"
              className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl hover:text-emerald-400 transition-colors"
            >
              <Link href={`/blog/${post.uid}`}>{title}</Link>
            </h2>

            {post.data.listing_excerpt && (
              <p className="mt-4 max-w-xl text-base leading-7 text-slate-200">
                {post.data.listing_excerpt}
              </p>
            )}

            <Link
              href={`/blog/${post.uid}`}
              className="mt-7 inline-flex min-h-11 items-center self-start rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 px-6 py-2.5 font-bold text-navy-950 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(16,185,129,0.5)]"
            >
              Read Featured Article →
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
