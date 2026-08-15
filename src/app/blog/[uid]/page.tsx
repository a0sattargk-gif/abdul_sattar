import type { Metadata } from "next";

import { notFound } from "next/navigation";

import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

interface BlogPostPageProps {
  params: Promise<{
    uid: string;
  }>;
}

export async function generateStaticParams() {
  const client = createClient();

  const posts = await client.getAllByType("blog_post");

  return posts.map((post) => ({
    uid: post.uid,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { uid } = await params;

  const client = createClient();

  const post = await client.getByUID("blog_post", uid).catch(() => null);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  const title = post.data.meta_title || post.data.listing_title || "Article";

  const description =
    post.data.meta_description || post.data.listing_excerpt || undefined;

  return {
    title,

    description,

    robots: {
      index: false,
      follow: false,
    },

    alternates: {
      canonical: `${process.env.APP_URL}/blog/${post?.uid}`,
    },

    openGraph: {
      type: "article",

      title,

      description,

      publishedTime: post.first_publication_date,

      modifiedTime: post.last_publication_date,

      images: post.data.meta_image.url
        ? [
            {
              url: post.data.meta_image.url,
              width: post.data.meta_image.dimensions?.width,
              height: post.data.meta_image.dimensions?.height,
              alt: post.data.meta_image.alt || post.data.listing_title || "",
            },
          ]
        : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { uid } = await params;

  const client = createClient();

  const post = await client.getByUID("blog_post", uid).catch(() => null);

  if (!post) {
    notFound();
  }

  return (
    <article>
      <SliceZone
        slices={post.data.slices}
        components={components}
        context={{
          post,
        }}
      />
    </article>
  );
}
