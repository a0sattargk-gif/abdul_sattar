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
      className="bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-brand-700">
          Featured Article
        </p>

        <article className="mt-6 grid overflow-hidden rounded-3xl border border-cool-gray-200 bg-cool-gray-50 lg:grid-cols-2">
          <Link
            href={`/blog/${post.uid}`}
            aria-label={`Read ${title}`}
            className="relative min-h-72 overflow-hidden bg-navy-800 lg:min-h-[420px]"
          >
            <PrismicNextImage
              field={post.data.thumbnail}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition duration-500 hover:scale-105"
              fallbackAlt=""
            />
          </Link>

          <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
            <div className="flex flex-wrap items-center gap-3 text-sm font-semibold">
              {post.data.category && (
                <span className="text-emerald-brand-700">
                  {post.data.category}
                </span>
              )}

              {post.data.reading_time && (
                <span className="text-cool-gray-600">
                  {post.data.reading_time}
                </span>
              )}
            </div>

            <h2
              id="featured-post-heading"
              className="mt-4 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl"
            >
              {title}
            </h2>

            {post.data.listing_excerpt && (
              <p className="mt-4 max-w-xl text-base leading-7 text-cool-gray-700">
                {post.data.listing_excerpt}
              </p>
            )}

            <Link
              href={`/blog/${post.uid}`}
              className="mt-7 inline-flex min-h-11 items-center self-start rounded-lg bg-navy-900 px-5 py-2.5 font-bold text-white transition hover:bg-navy-800"
            >
              Read Featured Article
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
