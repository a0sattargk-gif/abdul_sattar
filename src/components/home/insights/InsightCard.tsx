import Image from "next/image";
import Link from "next/link";

import type { HomeInsight } from "@/types/home";

interface InsightCardProps {
  insight: HomeInsight;
  priority?: boolean;
}

export default function InsightCard({
  insight,
  priority = false,
}: InsightCardProps) {
  const formattedDate = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(insight.publishedAt));

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-cool-gray-200 bg-white shadow-brand-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-brand-300 hover:shadow-brand-lg">
      <Link
        href={insight.href}
        aria-label={`Read ${insight.title}`}
        className="relative block aspect-[16/10] overflow-hidden bg-navy-800"
      >
        <Image
          src={insight.image.src}
          alt={insight.image.alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-navy-950/65 via-transparent to-transparent"
        />

        <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-navy-950/80 px-3 py-1.5 text-xs font-bold text-cool-gray-100 backdrop-blur">
          {insight.category}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-semibold text-cool-gray-600">
          <time dateTime={insight.publishedAt}>{formattedDate}</time>

          <span aria-hidden="true">•</span>

          <span>{insight.readingTime}</span>
        </div>

        <h3 className="mt-4 text-xl font-extrabold tracking-tight text-navy-900 sm:text-2xl">
          <Link
            href={insight.href}
            className="rounded-md transition-colors duration-200 hover:text-emerald-brand-700"
          >
            {insight.title}
          </Link>
        </h3>

        <p className="mt-3 text-sm leading-7 text-cool-gray-700">
          {insight.excerpt}
        </p>

        <div className="mt-auto pt-6">
          <Link
            href={insight.href}
            aria-label={`Read article: ${insight.title}`}
            className="group/link inline-flex min-h-11 items-center gap-2 rounded-lg font-bold text-emerald-brand-700 transition-colors duration-200 hover:text-emerald-brand-800"
          >
            Read Article
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </article>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="size-5 transition-transform duration-200 group-hover/link:translate-x-1"
    >
      <path
        d="M4 10H16M11 5L16 10L11 15"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
