import Link from "next/link";
import { PrismicNextImage } from "@prismicio/next";
import { ArrowRight, Clock } from "lucide-react";

import Card3D from "@/components/3d/Card3D";
import type { BlogPostDocument } from "../../../../prismicio-types";

interface BlogCardProps {
  post: BlogPostDocument;
  priority?: boolean;
}

export default function BlogCard({
  post,
  priority = false,
}: BlogCardProps) {
  const title = post.data.listing_title || "Untitled article";

  const formattedDate = post.first_publication_date
    ? new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }).format(new Date(post.first_publication_date))
    : null;

  return (
    <Card3D className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0b1120]/80 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-emerald-500/40 hover:shadow-[0_0_35px_rgba(16,185,129,0.15)]">
      <Link
        href={`/blog/${post.uid}`}
        aria-label={`Read ${title}`}
        className="relative block aspect-[16/10] overflow-hidden bg-[#030712]"
      >
        {post.data.thumbnail?.url ? (
          <PrismicNextImage
            field={post.data.thumbnail}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            fallbackAlt=""
          />
        ) : (
          <div className="grid size-full place-items-center bg-[#0b1120]">
            <span className="text-sm font-semibold text-slate-300">
              Article Preview
            </span>
          </div>
        )}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b1120] via-transparent to-transparent opacity-80"
        />

        {post.data.category && (
          <div className="absolute bottom-4 left-4 z-10">
            <span className="inline-flex items-center rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-emerald-400 backdrop-blur-md">
              {post.data.category}
            </span>
          </div>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300">
          {formattedDate && <span>{formattedDate}</span>}
          {formattedDate && post.data.reading_time && (
            <span aria-hidden="true">•</span>
          )}
          {post.data.reading_time && (
            <span className="inline-flex items-center gap-1">
              <Clock className="size-3 text-emerald-400" />
              {post.data.reading_time}
            </span>
          )}
        </div>

        <h3 className="mt-3 text-xl font-bold tracking-tight text-white transition-colors group-hover:text-emerald-400">
          <Link href={`/blog/${post.uid}`}>{title}</Link>
        </h3>

        {post.data.listing_excerpt && (
          <p className="mt-2.5 line-clamp-2 text-sm leading-relaxed text-slate-200">
            {post.data.listing_excerpt}
          </p>
        )}

        <div className="mt-auto pt-6">
          <Link
            href={`/blog/${post.uid}`}
            className="group/btn inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-400 transition-colors hover:text-emerald-300"
          >
            <span>Read Article</span>
            <ArrowRight className="size-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
          </Link>
        </div>
      </div>
    </Card3D>
  );
}
