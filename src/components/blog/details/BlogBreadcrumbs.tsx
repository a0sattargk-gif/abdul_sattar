import Link from "next/link";

interface BlogBreadcrumbsProps {
  category?: string | null;
  title: string;
}

export default function BlogBreadcrumbs({
  category,
  title,
}: BlogBreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumbs"
      className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-slate-300 mb-6"
    >
      <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
        <Link
          href="/"
          className="transition-colors hover:text-emerald-400"
        >
          Home
        </Link>
        <span aria-hidden="true" className="text-slate-400">
          /
        </span>
        <Link
          href="/blog"
          className="transition-colors hover:text-emerald-400"
        >
          Blog
        </Link>
        {category && (
          <>
            <span aria-hidden="true" className="text-slate-400">
              /
            </span>
            <span className="text-slate-200 font-medium">{category}</span>
          </>
        )}
        <span aria-hidden="true" className="text-slate-400">
          /
        </span>
        <span
          className="max-w-[160px] sm:max-w-[260px] truncate font-medium text-white"
          title={title}
        >
          {title}
        </span>
      </div>

      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
      >
        <svg
          aria-hidden="true"
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
        Back to all articles
      </Link>
    </nav>
  );
}
