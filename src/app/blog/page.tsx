import type { Metadata } from "next";

import BlogCTA from "@/components/blog/listing/BlogCTA";
import BlogGrid from "@/components/blog/listing/BlogGrid";
import BlogHero from "@/components/blog/listing/BlogHero";
import FeaturedPost from "@/components/blog/listing/FeaturedPost";

import { createClient } from "@/prismicio";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical articles about full-stack development, Next.js, React, Node.js, databases, architecture, and production software engineering.",
};

export default async function BlogPage() {
  const client = createClient();

  const posts = await client.getAllByType("blog_post", {
    fetchOptions: { next: { tags: ["prismic", "blog_posts"] } },
    orderings: [
      {
        field: "document.first_publication_date",
        direction: "desc",
      },
    ],
  });

  const featuredPost =
    posts.find((post) => post.data.featured) ?? posts[0] ?? null;

  const remainingPosts = featuredPost
    ? posts.filter((post) => post.id !== featuredPost.id)
    : posts;

  return (
    <>
      <BlogHero />

      {featuredPost && <FeaturedPost post={featuredPost} />}

      <BlogGrid posts={remainingPosts} />

      <BlogCTA />
    </>
  );
}
