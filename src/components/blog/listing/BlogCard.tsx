import Link from "next/link";
import { PrismicNextImage } from "@prismicio/next";

import type { BlogPostDocument } from "../../../../prismicio-types";

interface BlogCardProps {
  post: BlogPostDocument;
  priority?: boolean;
}

export default function BlogCard({
  post,
  priority = false,
}: BlogCardProps) {
  const title =
    post.data.listing_title || "Untitled article";

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-cool-gray-200 bg-white">
      <Link
        href={`/blog/${post.uid}`}
        className="relative block aspect-[16/10] overflow-hidden"
      >
        <PrismicNextImage
          field={post.data.thumbnail}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
          fallbackAlt=""
        />
      </Link>

      <div className="flex flex-1 flex-col p-5">
        {post.data.category && (
          <p className="text-xs font-bold uppercase tracking-wide text-emerald-brand-700">
            {post.data.category}
          </p>
        )}

        <h2 className="mt-2 text-xl font-extrabold text-navy-900">
          <Link href={`/blog/${post.uid}`}>
            {title}
          </Link>
        </h2>

        {post.data.listing_excerpt && (
          <p className="mt-2 line-clamp-2 text-sm leading-6 text-cool-gray-700">
            {post.data.listing_excerpt}
          </p>
        )}

        <Link
          href={`/blog/${post.uid}`}
          className="mt-4 text-sm font-bold text-emerald-brand-700"
        >
          Read Article
        </Link>
      </div>
    </article>
  );
}
