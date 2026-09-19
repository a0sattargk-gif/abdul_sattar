 

interface SectionHeadingProps  { 
  id?:string;
  align?: "left" | "center";
  headingLevel?: "h2" | "h3";
  className?: string;
  eyebrow?: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  headingLevel = "h2",
  className = "",
}: SectionHeadingProps) {
  const HeadingTag = headingLevel;

  const alignmentClasses =
    align === "center"
      ? "mx-auto items-center text-center"
      : "items-start text-left";

  return (
    <div
      className={["flex max-w-3xl flex-col", alignmentClasses, className].join(
        " ",
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-emerald-brand-700">
          {eyebrow}
        </p>
      )}

      <HeadingTag
        id={id}
        className="text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl lg:text-5xl"
      >
        {title}
      </HeadingTag>

      {description && (
        <p className="mt-5 max-w-2xl text-base leading-7 text-cool-gray-500 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
