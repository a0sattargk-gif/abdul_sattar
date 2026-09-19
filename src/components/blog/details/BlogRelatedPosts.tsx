import Link from "next/link";
import { PrismicNextImage } from "@prismicio/next";
import type { BlogPostDocument } from "../../../../prismicio-types";

interface BlogRelatedPostsProps {
  currentUid: string;
  posts: BlogPostDocument[];
}

export default function BlogRelatedPosts({
  currentUid,
  posts,
}: BlogRelatedPostsProps) {
  const otherPosts = posts.filter((p) => p.uid !== currentUid).slice(0, 3);

  return (
    <section
      aria-labelledby="related-articles-heading"
      className="border-t border-cool-gray-200 bg-cool-gray-50/50 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-brand-700">
              Continue Reading
            </p>
            <h2
              id="related-articles-heading"
              className="mt-2 text-2xl font-extrabold tracking-tight text-navy-950 sm:text-3xl"
            >
              {otherPosts.length > 0
                ? "More Technical Articles"
                : "Explore More from Sattar Web Studio"}
            </h2>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-brand-700 hover:text-emerald-brand-800 transition"
          >
            All Articles
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </div>

        {otherPosts.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {otherPosts.map((post) => {
              const title = post.data.listing_title || "Untitled article";
              return (
                <article
                  key={post.id}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-cool-gray-200 bg-white transition hover:border-emerald-brand-500 hover:shadow-lg"
                >
                  <Link
                    href={`/blog/${post.uid}`}
                    className="relative block aspect-[16/10] overflow-hidden bg-navy-900"
                  >
                    <PrismicNextImage
                      field={post.data.thumbnail}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition duration-300 group-hover:scale-105"
                      fallbackAlt=""
                    />
                  </Link>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-2 text-xs font-semibold text-emerald-brand-700 mb-2">
                      {post.data.category && <span>{post.data.category}</span>}
                      {post.data.reading_time && (
                        <>
                          <span aria-hidden="true" className="text-cool-gray-300">
                            •
                          </span>
                          <span className="text-cool-gray-500">
                            {post.data.reading_time}
                          </span>
                        </>
                      )}
                    </div>

                    <h3 className="text-lg font-bold text-navy-900 group-hover:text-emerald-brand-700 transition">
                      <Link href={`/blog/${post.uid}`}>{title}</Link>
                    </h3>

                    {post.data.listing_excerpt && (
                      <p className="mt-2 line-clamp-2 text-sm leading-6 text-cool-gray-600">
                        {post.data.listing_excerpt}
                      </p>
                    )}

                    <div className="mt-auto pt-4">
                      <Link
                        href={`/blog/${post.uid}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-emerald-brand-700 hover:underline"
                      >
                        Read Article →
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-cool-gray-200 bg-white p-8">
              <span className="inline-block rounded-lg bg-emerald-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-brand-700">
                Engineering Services
              </span>
              <h3 className="mt-4 text-xl font-bold text-navy-900">
                Explore Full-Stack Solutions
              </h3>
              <p className="mt-2 text-sm text-cool-gray-600 leading-relaxed">
                From scalable backend architecture to polished React interfaces,
                discover how we can build your next product.
              </p>
              <Link
                href="/services"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-emerald-brand-700 hover:underline"
              >
                View Services →
              </Link>
            </div>

            <div className="rounded-2xl border border-cool-gray-200 bg-white p-8">
              <span className="inline-block rounded-lg bg-navy-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-navy-800">
                Case Studies
              </span>
              <h3 className="mt-4 text-xl font-bold text-navy-900">
                Featured Engineering Projects
              </h3>
              <p className="mt-2 text-sm text-cool-gray-600 leading-relaxed">
                Deep-dives into real-world production applications, performance
                metrics, and system designs.
              </p>
              <Link
                href="/projects"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-emerald-brand-700 hover:underline"
              >
                View Case Studies →
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

