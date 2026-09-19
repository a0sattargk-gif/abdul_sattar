import type { Content } from "@prismicio/client";
import Image from "next/image";
import { PrismicNextImage } from "@prismicio/next";
import type { SliceComponentProps } from "@prismicio/react";
import type { BlogPostDocument } from "../../../prismicio-types";
import BlogBreadcrumbs from "@/components/blog/details/BlogBreadcrumbs";
import BlogShareBar from "@/components/blog/details/BlogShareBar";

interface BlogHeroContext {
  post?: BlogPostDocument;
}

type BlogHeroProps = SliceComponentProps<
  Content.BlogHeroSlice,
  BlogHeroContext
>;

export default function BlogHero({ slice, context }: BlogHeroProps) {
  const post = context?.post;

  const hasHeroImage = Boolean(slice.primary.hero_image?.url);
  const hasBackgroundImage = Boolean(slice.primary.background_image?.url);
  const useBackground =
    Boolean(slice.primary.use_background) && hasBackgroundImage;

  if (useBackground) {
    return <BackgroundImageHero slice={slice} post={post} />;
  }

  if (hasHeroImage) {
    return <ThumbnailHero slice={slice} post={post} />;
  }

  return <SimpleHero slice={slice} post={post} />;
}

function ArticleAuthorMeta({
  post,
  light = false,
}: {
  post?: BlogPostDocument;
  light?: boolean;
}) {
  const authorName = post?.data?.author_name || "Abdul Sattar";
  const publishedDate = post?.first_publication_date
    ? new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }).format(new Date(post.first_publication_date))
    : null;

  return (
    <div className="flex items-center gap-3 text-left">
      <div className="relative h-11 w-11 flex-shrink-0 overflow-hidden rounded-full border border-emerald-brand-500/30">
        <Image
          src="/images/abdul-sattar.webp"
          alt={authorName}
          fill
          sizes="44px"
          className="object-cover"
        />
      </div>
      <div>
        <p
          className={[
            "text-sm font-bold",
            light ? "text-white" : "text-navy-950",
          ].join(" ")}
        >
          {authorName}
        </p>
        <div
          className={[
            "flex items-center gap-2 text-xs",
            light ? "text-cool-gray-300" : "text-cool-gray-500",
          ].join(" ")}
        >
          <span>Full-Stack Engineer</span>
          {publishedDate && (
            <>
              <span aria-hidden="true">•</span>
              <time dateTime={post?.first_publication_date}>
                {publishedDate}
              </time>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function ThumbnailHero({
  slice,
  post,
}: {
  slice: Content.BlogHeroSlice;
  post?: BlogPostDocument;
}) {
  const category = post?.data?.category;
  const title = slice.primary.heading || post?.data?.listing_title || "Article";
  const description = slice.primary.description || post?.data?.listing_excerpt;
  const readingTime = post?.data?.reading_time;

  return (
    <header className="border-b border-cool-gray-200 bg-gradient-to-b from-navy-50/70 via-white to-white pt-8 pb-12 sm:pt-12 sm:pb-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <BlogBreadcrumbs category={category} title={title} />

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

        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl lg:text-5xl leading-tight sm:leading-tight">
          {title}
        </h1>

        {description && (
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-cool-gray-700 sm:text-lg sm:leading-8">
            {description}
          </p>
        )}

        <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5 border-t border-cool-gray-200 pt-6">
          <ArticleAuthorMeta post={post} />
          <BlogShareBar title={title} />
        </div>

        <div className="relative mt-8 sm:mt-10 aspect-[16/9] w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-cool-gray-200 bg-navy-900 shadow-md">
          <PrismicNextImage
            field={slice.primary.hero_image}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
            fallbackAlt=""
          />
        </div>
      </div>
    </header>
  );
}

function BackgroundImageHero({
  slice,
  post,
}: {
  slice: Content.BlogHeroSlice;
  post?: BlogPostDocument;
}) {
  const category = post?.data?.category;
  const title = slice.primary.heading || post?.data?.listing_title || "Article";
  const description = slice.primary.description || post?.data?.listing_excerpt;
  const readingTime = post?.data?.reading_time;

  return (
    <header className="relative min-h-[500px] overflow-hidden bg-navy-950 py-16 sm:py-20 lg:py-24">
      <PrismicNextImage
        field={slice.primary.background_image}
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-25"
        fallbackAlt=""
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-transparent"
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <BlogBreadcrumbs category={category} title={title} />

        <div className="mt-4 flex flex-wrap items-center gap-2.5">
          {category && (
            <span className="inline-flex items-center rounded-full border border-emerald-brand-400/30 bg-emerald-brand-500/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-brand-300">
              {category}
            </span>
          )}
          {readingTime && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-cool-gray-300">
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

        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight sm:leading-tight">
          {title}
        </h1>

        {description && (
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-cool-gray-200 sm:text-lg sm:leading-8">
            {description}
          </p>
        )}

        <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5 border-t border-white/15 pt-6">
          <ArticleAuthorMeta post={post} light />
          <BlogShareBar title={title} />
        </div>
      </div>
    </header>
  );
}

function SimpleHero({
  slice,
  post,
}: {
  slice: Content.BlogHeroSlice;
  post?: BlogPostDocument;
}) {
  const category = post?.data?.category;
  const title = slice.primary.heading || post?.data?.listing_title || "Article";
  const description = slice.primary.description || post?.data?.listing_excerpt;
  const readingTime = post?.data?.reading_time;

  return (
    <header className="border-b border-cool-gray-200 bg-gradient-to-b from-navy-50/70 via-white to-white pt-8 pb-12 sm:pt-12 sm:pb-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <BlogBreadcrumbs category={category} title={title} />

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

        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl lg:text-5xl leading-tight sm:leading-tight">
          {title}
        </h1>

        {description && (
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-cool-gray-700 sm:text-lg sm:leading-8">
            {description}
          </p>
        )}

        <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5 border-t border-cool-gray-200 pt-6">
          <ArticleAuthorMeta post={post} />
          <BlogShareBar title={title} />
        </div>
      </div>
    </header>
  );
}
