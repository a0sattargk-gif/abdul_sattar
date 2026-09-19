"use client";

import { useState } from "react";

interface BlogShareBarProps {
  title: string;
  url?: string;
}

export default function BlogShareBar({ title, url }: BlogShareBarProps) {
  const [copied, setCopied] = useState(false);

  const shareUrl =
    url || (typeof window !== "undefined" ? window.location.href : "");

  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);

  const twitterHref = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`;
  const linkedinHref = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(shareUrl || window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback if clipboard API fails
      setCopied(false);
    }
  }

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs font-bold uppercase tracking-wider text-cool-gray-500 mr-1">
        Share:
      </span>

      {/* Copy Link */}
      <button
        type="button"
        onClick={handleCopy}
        title="Copy article link"
        className="relative inline-flex items-center gap-1.5 rounded-lg border border-cool-gray-300 bg-white px-3 py-1.5 text-xs font-semibold text-navy-800 transition hover:border-emerald-brand-500 hover:text-emerald-brand-700"
      >
        {copied ? (
          <>
            <svg
              className="h-4 w-4 text-emerald-brand-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-emerald-brand-700 font-bold">Copied!</span>
          </>
        ) : (
          <>
            <svg
              className="h-4 w-4 text-cool-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-3.328l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
              />
            </svg>
            <span>Copy Link</span>
          </>
        )}
      </button>

      {/* Twitter / X */}
      <a
        href={twitterHref}
        target="_blank"
        rel="noopener noreferrer"
        title="Share on X (Twitter)"
        className="inline-flex items-center gap-1.5 rounded-lg border border-cool-gray-300 bg-white px-3 py-1.5 text-xs font-semibold text-navy-800 transition hover:border-emerald-brand-500 hover:text-emerald-brand-700"
      >
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
        <span>X / Tweet</span>
      </a>

      {/* LinkedIn */}
      <a
        href={linkedinHref}
        target="_blank"
        rel="noopener noreferrer"
        title="Share on LinkedIn"
        className="inline-flex items-center gap-1.5 rounded-lg border border-cool-gray-300 bg-white px-3 py-1.5 text-xs font-semibold text-navy-800 transition hover:border-emerald-brand-500 hover:text-emerald-brand-700"
      >
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.69 1.69 0 1 0-.01-3.38 1.69 1.69 0 0 0 .01 3.38m1.39 9.74v-8.37H5.07v8.37h2.78z" />
        </svg>
        <span>LinkedIn</span>
      </a>
    </div>
  );
}

