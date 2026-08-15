import { PrismicRichText, type PrismicRichTextProps } from "@prismicio/react";

interface PortfolioRichTextProps {
  field: PrismicRichTextProps["field"];
  className?: string;
  dark?: boolean;
}

export default function PortfolioRichText({
  field,
  className = "",
  dark = false,
}: PortfolioRichTextProps) {
  const textClasses = dark
    ? [
        "text-cool-gray-200",
        "[&_h1]:text-white",
        "[&_h2]:text-white",
        "[&_h3]:text-white",
        "[&_h4]:text-white",
        "[&_strong]:text-white",
        "[&_a]:text-emerald-brand-300",
        "[&_blockquote]:text-cool-gray-200",
      ]
    : [
        "text-cool-gray-700",
        "[&_h1]:text-navy-900",
        "[&_h2]:text-navy-900",
        "[&_h3]:text-navy-900",
        "[&_h4]:text-navy-900",
        "[&_strong]:text-navy-900",
        "[&_a]:text-emerald-brand-700",
        "[&_blockquote]:text-navy-800",
      ];

  return (
    <div
      className={[
        "space-y-5 text-base leading-8",
        "[&_h1]:mt-8 [&_h1]:text-3xl [&_h1]:font-extrabold",
        "[&_h2]:mt-8 [&_h2]:text-2xl [&_h2]:font-extrabold",
        "[&_h3]:mt-7 [&_h3]:text-xl [&_h3]:font-bold",
        "[&_h4]:mt-6 [&_h4]:text-lg [&_h4]:font-bold",
        "[&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6",
        "[&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6",
        "[&_a]:font-semibold [&_a]:underline [&_a]:underline-offset-4",
        "[&_blockquote]:border-l-4",
        "[&_blockquote]:border-emerald-brand-500",
        "[&_blockquote]:pl-5",
        "[&_pre]:overflow-x-auto",
        "[&_pre]:rounded-xl",
        "[&_pre]:bg-navy-950",
        "[&_pre]:p-5",
        "[&_pre]:text-sm",
        "[&_pre]:text-cool-gray-100",
        "[&_img]:rounded-2xl",
        ...textClasses,
        className,
      ].join(" ")}
    >
      <PrismicRichText field={field} />
    </div>
  );
}
