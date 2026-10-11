import type { Content } from "@prismicio/client";
import {
  PrismicLink,
  PrismicRichText,
  type JSXMapSerializer,
  type SliceComponentProps,
} from "@prismicio/react";

import { slugify } from "@/utils/blog";

export type BlogTextProps = SliceComponentProps<Content.BlogTextSlice>;

function renderFormattedInline(text: string) {
  const parts = [];
  const regex = /(`[^`]+`|\*\*[^*]+\*\*)/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    const token = match[0];
    if (token.startsWith("`")) {
      parts.push(
        <code
          key={lastIndex}
          className="rounded-md bg-white/[0.06] px-1.5 py-0.5 font-mono text-sm text-emerald-300 border border-white/10"
        >
          {token.slice(1, -1)}
        </code>
      );
    } else if (token.startsWith("**")) {
      parts.push(
        <strong key={lastIndex} className="font-bold text-white">
          {token.slice(2, -2)}
        </strong>
      );
    }
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }
  return parts.length > 0 ? parts : text;
}

const richTextComponents: JSXMapSerializer = {
  heading1: ({ children, node }) => {
    const id = slugify(node.text || "");
    return (
      <h1
        id={id}
        className="scroll-mt-24 mt-12 mb-5 text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
      >
        {children}
      </h1>
    );
  },
  heading2: ({ children, node }) => {
    const id = slugify(node.text || "");
    return (
      <h2
        id={id}
        className="scroll-mt-24 mt-12 mb-4 text-2xl sm:text-3xl font-extrabold text-white tracking-tight border-b border-white/10 pb-2"
      >
        {children}
      </h2>
    );
  },
  heading3: ({ children, node }) => {
    const id = slugify(node.text || "");
    return (
      <h3
        id={id}
        className="scroll-mt-24 mt-8 mb-3 text-xl sm:text-2xl font-bold text-white tracking-tight"
      >
        {children}
      </h3>
    );
  },
  heading4: ({ children, node }) => {
    const id = slugify(node.text || "");
    return (
      <h4
        id={id}
        className="scroll-mt-24 mt-6 mb-2 text-lg sm:text-xl font-bold text-white"
      >
        {children}
      </h4>
    );
  },
  paragraph: ({ children, node }) => {
    const rawText = node.text || "";

    // Support Markdown-style H2 in plain paragraphs
    if (rawText.startsWith("## ")) {
      const cleanText = rawText.replace(/^##\s+/, "");
      const id = slugify(cleanText);
      return (
        <h2
          id={id}
          className="scroll-mt-24 mt-12 mb-4 text-2xl sm:text-3xl font-extrabold text-white tracking-tight border-b border-white/10 pb-2"
        >
          {cleanText}
        </h2>
      );
    }

    // Support Markdown-style H3 in plain paragraphs
    if (rawText.startsWith("### ")) {
      const cleanText = rawText.replace(/^###\s+/, "");
      const id = slugify(cleanText);
      return (
        <h3
          id={id}
          className="scroll-mt-24 mt-8 mb-3 text-xl sm:text-2xl font-bold text-white tracking-tight"
        >
          {cleanText}
        </h3>
      );
    }

    // Support Markdown-style bullet lists in plain paragraphs
    if (rawText.startsWith("- ") || rawText.startsWith("* ")) {
      const cleanText = rawText.replace(/^[-*]\s+/, "");
      return (
        <div className="flex items-start gap-3 my-2 pl-3 text-base sm:text-lg leading-relaxed text-slate-200">
          <span
            aria-hidden="true"
            className="mt-2.5 h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0 shadow-[0_0_8px_rgba(16,185,129,0.8)]"
          />
          <span className="flex-1">{renderFormattedInline(cleanText)}</span>
        </div>
      );
    }

    // Normal paragraph with possible inline markdown code/bold
    if (node.spans.length === 0 && (rawText.includes("`") || rawText.includes("**"))) {
      return (
        <p className="my-5 text-base sm:text-lg leading-relaxed text-slate-200">
          {renderFormattedInline(rawText)}
        </p>
      );
    }

    return (
      <p className="my-5 text-base sm:text-lg leading-relaxed text-slate-200">
        {children}
      </p>
    );
  },
  list: ({ children }) => (
    <ul className="my-5 list-none space-y-2 pl-2 text-slate-200">{children}</ul>
  ),
  listItem: ({ children }) => (
    <li className="flex items-start gap-3 my-1.5 text-base sm:text-lg leading-relaxed text-slate-200">
      <span
        aria-hidden="true"
        className="mt-2.5 h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0 shadow-[0_0_8px_rgba(16,185,129,0.8)]"
      />
      <span className="flex-1">{children}</span>
    </li>
  ),
  oList: ({ children }) => (
    <ol className="my-5 list-decimal space-y-2 pl-6 text-slate-200 text-base sm:text-lg leading-relaxed">
      {children}
    </ol>
  ),
  oListItem: ({ children }) => (
    <li className="leading-relaxed pl-1">{children}</li>
  ),
  preformatted: ({ children }) => (
    <div className="my-7 overflow-hidden rounded-2xl border border-white/10 bg-black/80 shadow-xl">
      <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.04] px-4 py-2.5 text-xs text-slate-300">
        <span className="font-mono font-medium">Code Snippet</span>
      </div>
      <pre className="overflow-x-auto p-5 text-sm text-slate-100 font-mono leading-relaxed">
        {children}
      </pre>
    </div>
  ),
  hyperlink: ({ children, node }) => (
    <PrismicLink
      field={node.data}
      className="font-semibold text-emerald-400 hover:text-emerald-300 underline underline-offset-4 transition-colors"
    >
      {children}
    </PrismicLink>
  ),
  strong: ({ children }) => (
    <strong className="font-bold text-white">{children}</strong>
  ),
  em: ({ children }) => <em className="italic text-slate-200">{children}</em>,
};

export default function BlogText({ slice }: BlogTextProps) {
  return (
    <div
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="text-base sm:text-lg leading-relaxed text-slate-200"
    >
      <PrismicRichText
        field={slice.primary.content}
        components={richTextComponents}
      />
    </div>
  );
}
