import type { Content } from "@prismicio/client";

import { PrismicNextImage } from "@prismicio/next";

import type { SliceComponentProps } from "@prismicio/react";

import type { BlogPostDocument } from "../../../prismicio-types";

interface BlogHeroContext {
  post: BlogPostDocument;
}

type BlogHeroProps = SliceComponentProps<
  Content.BlogHeroSlice,
  BlogHeroContext
>;

export default function BlogHero({ slice, context }: BlogHeroProps) {
  const post = context.post;

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

function ArticleMeta({
  post,
  light = false,
}: {
  post: BlogPostDocument;
  light?: boolean;
}) {
  const publishedDate = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(post.first_publication_date));

  return (
    <div
      className={[
        "mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm",
        light ? "text-cool-gray-200" : "text-cool-gray-600",
      ].join(" ")}
    >
      {post.data.author_name && <span>{post.data.author_name}</span>}

      <span aria-hidden="true">•</span>

      <time dateTime={post.first_publication_date}>{publishedDate}</time>

      {post.data.reading_time && (
        <>
          <span aria-hidden="true">•</span>

          <span>{post.data.reading_time}</span>
        </>
      )}
    </div>
  );
}

function ThumbnailHero({
  slice,
  post,
}: {
  slice: Content.BlogHeroSlice;
  post: BlogPostDocument;
}) {
  return (
    <header className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {post.data.category && (
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-brand-700">
              {post.data.category}
            </p>
          )}

          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-navy-900 sm:text-5xl lg:text-6xl">
            {slice.primary.heading || post.data.listing_title}
          </h1>

          {(slice.primary.description || post.data.listing_excerpt) && (
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-cool-gray-700 sm:text-lg">
              {slice.primary.description || post.data.listing_excerpt}
            </p>
          )}

          <ArticleMeta post={post} />
        </div>

        <div className="relative mt-10 aspect-[16/8] overflow-hidden rounded-3xl bg-cool-gray-100">
          <PrismicNextImage
            field={slice.primary.hero_image}
            fill
            priority
            sizes="100vw"
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
  post: BlogPostDocument;
}) {
  return (
    <header className="relative min-h-[560px] overflow-hidden bg-navy-950">
      <PrismicNextImage
        field={slice.primary.background_image}
        fill
        priority
        sizes="100vw"
        className="object-cover"
        fallbackAlt=""
      />

      <div aria-hidden="true" className="absolute inset-0 bg-navy-950/75" />

      <div className="relative mx-auto flex min-h-[560px] max-w-5xl items-center px-4 py-20 text-center sm:px-6 lg:px-8">
        <div className="mx-auto">
          {post.data.category && (
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-brand-300">
              {post.data.category}
            </p>
          )}

          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {slice.primary.heading || post.data.listing_title}
          </h1>

          {(slice.primary.description || post.data.listing_excerpt) && (
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-cool-gray-200 sm:text-lg">
              {slice.primary.description || post.data.listing_excerpt}
            </p>
          )}

          <ArticleMeta post={post} light />
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
  post: BlogPostDocument;
}) {
  return (
    <header className="relative overflow-hidden bg-navy-900 py-16 sm:py-20 lg:py-24">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(rgba(203,213,225,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(203,213,225,0.05)_1px,transparent_1px)] bg-[size:48px_48px]"
      />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        {post.data.category && (
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-brand-300">
            {post.data.category}
          </p>
        )}

        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {slice.primary.heading || post.data.listing_title}
        </h1>

        {(slice.primary.description || post.data.listing_excerpt) && (
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-cool-gray-200 sm:text-lg">
            {slice.primary.description || post.data.listing_excerpt}
          </p>
        )}

        <ArticleMeta post={post} light />
      </div>
    </header>
  );
}
