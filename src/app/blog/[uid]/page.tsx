import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";
import type { Content } from "@prismicio/client";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { extractBlogHeadings } from "@/utils/blog";
import ReadingProgressBar from "@/components/blog/details/ReadingProgressBar";
import BlogPostHeader from "@/components/blog/details/BlogPostHeader";
import BlogTableOfContents from "@/components/blog/details/BlogTableOfContents";
import BlogSidebarCTA from "@/components/blog/details/BlogSidebarCTA";
import BlogAuthorBio from "@/components/blog/details/BlogAuthorBio";
import BlogShareBar from "@/components/blog/details/BlogShareBar";
import BlogRelatedPosts from "@/components/blog/details/BlogRelatedPosts";
import BlogCTA from "@/components/blog/listing/BlogCTA";

interface BlogPostPageProps {
  params: Promise<{
    uid: string;
  }>;
}

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.APP_URL ||
  "https://sattarwebstudio.com";

export const dynamicParams = true;
export const revalidate = 60;

export async function generateStaticParams() {
  const client = createClient();

  const posts = await client
    .getAllByType("blog_post", {
      fetchOptions: { next: { tags: ["prismic", "blog_posts"] } },
    })
    .catch(() => []);

  return posts.map((post) => ({
    uid: post.uid,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { uid } = await params;

  const client = createClient();

  const post = await client
    .getByUID("blog_post", uid, {
      fetchOptions: { next: { tags: ["prismic", `blog_post-${uid}`, "blog_posts"] } },
    })
    .catch(() => null);

  if (!post) {
    return {
      title: "Article Not Found | Sattar Web Studio",
    };
  }

  const title = post.data.meta_title || post.data.listing_title || "Article";
  const description =
    post.data.meta_description || post.data.listing_excerpt || undefined;
  const canonicalUrl = `${SITE_URL}/blog/${post.uid}`;
  const imageUrl = post.data.meta_image?.url || post.data.thumbnail?.url;

  return {
    title: `${title} | Sattar Web Studio`,
    description,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "article",
      title: `${title} | Sattar Web Studio`,
      description,
      url: canonicalUrl,
      publishedTime: post.first_publication_date,
      modifiedTime: post.last_publication_date,
      authors: [post.data.author_name || "Abdul Sattar"],
      images: imageUrl
        ? [
            {
              url: imageUrl,
              width: post.data.meta_image?.dimensions?.width || 1200,
              height: post.data.meta_image?.dimensions?.height || 630,
              alt: post.data.meta_image?.alt || title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Sattar Web Studio`,
      description,
      images: imageUrl ? [imageUrl] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { uid } = await params;

  const client = createClient();

  const [post, allPosts] = await Promise.all([
    client
      .getByUID("blog_post", uid, {
        fetchOptions: {
          next: { tags: ["prismic", `blog_post-${uid}`, "blog_posts"] },
        },
      })
      .catch(() => null),
    client
      .getAllByType("blog_post", {
        fetchOptions: { next: { tags: ["prismic", "blog_posts"] } },
        orderings: [
          {
            field: "document.first_publication_date",
            direction: "desc",
          },
        ],
      })
      .catch(() => []),
  ]);

  if (!post) {
    notFound();
  }

  // Identify hero slice vs body content slices
  const heroSlice = post.data.slices.find(
    (s) => s.slice_type === "blog_hero"
  ) as Content.BlogHeroSlice | undefined;

  const bodySlices = post.data.slices.filter(
    (s) => s.slice_type !== "blog_hero"
  );

  const hasCtaSlice = post.data.slices.some((s) => s.slice_type === "blog_cta");

  // Determine display values
  const title =
    heroSlice?.primary?.heading ||
    post.data.listing_title ||
    "Untitled Article";

  const excerpt =
    heroSlice?.primary?.description || post.data.listing_excerpt || null;

  const heroImage =
    heroSlice?.primary?.hero_image?.url
      ? heroSlice.primary.hero_image
      : post.data.thumbnail;

  const authorName = post.data.author_name || "Abdul Sattar";
  const canonicalUrl = `${SITE_URL}/blog/${post.uid}`;
  const headings = extractBlogHeadings(post.data.slices);

  // JSON-LD structured data for Google / LLMs
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: excerpt || undefined,
    image: heroImage?.url || undefined,
    datePublished: post.first_publication_date,
    dateModified: post.last_publication_date || post.first_publication_date,
    author: {
      "@type": "Person",
      name: authorName,
      url: `${SITE_URL}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: "Sattar Web Studio",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/abdul-sattar.webp`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ReadingProgressBar />

      <article className="min-h-screen bg-white">
        {/* Editorial Article Header */}
        <BlogPostHeader
          title={title}
          excerpt={excerpt}
          category={post.data.category}
          authorName={authorName}
          publishedDate={post.first_publication_date}
          readingTime={post.data.reading_time}
          heroImage={heroImage}
        />

        {/* Article Body + Sticky Sidebar Layout */}
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_280px] xl:grid-cols-[1fr_320px] lg:gap-16">
            {/* Main Reading Column */}
            <div className="min-w-0">
              {/* Mobile Table of Contents */}
              <BlogTableOfContents headings={headings} inline />

              {/* Slices Content */}
              <div id="article-content" className="prose-container space-y-6">
                <SliceZone
                  slices={bodySlices}
                  components={components}
                  context={{
                    post,
                  }}
                />
              </div>

              {/* Share & Feedback Bottom Bar */}
              <div className="mt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-y border-cool-gray-200 py-6">
                <div className="text-sm text-cool-gray-600">
                  Enjoyed this article? Share it with your network:
                </div>
                <BlogShareBar title={title} url={canonicalUrl} />
              </div>

              {/* Author Bio Card */}
              <BlogAuthorBio authorName={authorName} />
            </div>

            {/* Desktop Sticky Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-28 space-y-6">
                <BlogTableOfContents headings={headings} />
                <BlogSidebarCTA />
              </div>
            </aside>
          </div>
        </div>

        {/* Fallback CTA if blog post doesn't include a BlogCta slice */}
        {!hasCtaSlice && <BlogCTA />}

        {/* More / Related Articles Section */}
        <BlogRelatedPosts currentUid={post.uid} posts={allPosts} />
      </article>
    </>
  );
}
