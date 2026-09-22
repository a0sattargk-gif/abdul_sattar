import Link from "next/link";
import { PrismicNextImage } from "@prismicio/next";
import { ArrowRight, Clock } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
    <Card className="group flex h-full flex-col overflow-hidden rounded-3xl border-cool-gray-200/90 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-navy-950/40 hover:shadow-brand-md">
      <Link
        href={`/blog/${post.uid}`}
        aria-label={`Read ${title}`}
        className="relative block aspect-[16/10] overflow-hidden bg-navy-950"
      >
        {post.data.thumbnail?.url ? (
          <PrismicNextImage
            field={post.data.thumbnail}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            fallbackAlt=""
          />
        ) : (
          <div className="grid size-full place-items-center bg-navy-900">
            <span className="text-sm font-semibold text-cool-gray-400">
              Article Preview
            </span>
          </div>
        )}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent"
        />

        {post.data.category && (
          <div className="absolute bottom-4 left-4 z-10">
            <Badge
              variant="emerald"
              className="border-emerald-brand-400/30 bg-emerald-brand-500/90 text-navy-950 font-bold backdrop-blur-xs"
            >
              {post.data.category}
            </Badge>
          </div>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2 text-xs text-cool-gray-500">
          {formattedDate && <span>{formattedDate}</span>}
          {formattedDate && post.data.reading_time && (
            <span aria-hidden="true">•</span>
          )}
          {post.data.reading_time && (
            <span className="inline-flex items-center gap-1">
              <Clock className="size-3 text-cool-gray-400" />
              {post.data.reading_time}
            </span>
          )}
        </div>

        <h3 className="mt-3 text-xl font-extrabold tracking-tight text-navy-950 transition-colors group-hover:text-emerald-brand-700">
          <Link href={`/blog/${post.uid}`}>{title}</Link>
        </h3>

        {post.data.listing_excerpt && (
          <p className="mt-2.5 line-clamp-2 text-sm leading-relaxed text-cool-gray-600">
            {post.data.listing_excerpt}
          </p>
        )}

        <div className="mt-auto pt-6">
          <Link
            href={`/blog/${post.uid}`}
            className="group/btn inline-flex items-center gap-1.5 text-sm font-bold text-emerald-brand-700 transition-colors hover:text-emerald-brand-800"
          >
            <span>Read Article</span>
            <ArrowRight className="size-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
          </Link>
        </div>
      </div>
    </Card>
  );
}
