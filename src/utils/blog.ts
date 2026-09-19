export interface TocItem {
  id: string;
  text: string;
  level: number;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

interface PrismicContentBlock {
  type?: string;
  text?: string;
}

interface SliceWithContent {
  slice_type: string;
  primary?: {
    content?: PrismicContentBlock[];
  };
}

export function extractBlogHeadings(slices: readonly unknown[] | undefined): TocItem[] {
  const headings: TocItem[] = [];
  if (!slices || !Array.isArray(slices)) return headings;

  for (const rawSlice of slices) {
    const slice = rawSlice as SliceWithContent | undefined;
    if (slice?.slice_type === "blog_text" && Array.isArray(slice.primary?.content)) {
      for (const block of slice.primary.content) {
        const text = block.text || "";
        if (block.type === "heading2") {
          headings.push({ id: slugify(text), text, level: 2 });
        } else if (block.type === "heading3") {
          headings.push({ id: slugify(text), text, level: 3 });
        } else if (block.type === "paragraph") {
          if (text.startsWith("## ")) {
            const cleanText = text.replace(/^##\s+/, "").trim();
            headings.push({ id: slugify(cleanText), text: cleanText, level: 2 });
          } else if (text.startsWith("### ")) {
            const cleanText = text.replace(/^###\s+/, "").trim();
            headings.push({ id: slugify(cleanText), text: cleanText, level: 3 });
          }
        }
      }
    }
  }

  return headings;
}
