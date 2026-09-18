import type { HomeFAQItem as HomeFAQItemType } from "@/types/home";

interface FAQItemProps {
  item: HomeFAQItemType;
}

export default function FAQItem({ item }: FAQItemProps) {
  return (
    <details className="group rounded-xl border border-cool-gray-300 bg-white open:border-navy-950 open:shadow-brand-sm">
      <summary className="flex min-h-15 cursor-pointer list-none items-center justify-between gap-5 rounded-xl px-5 py-4">
        <span className="font-bold leading-6 text-navy-900">
          {item.question}
        </span>

        <span
          aria-hidden="true"
          className="grid size-8 shrink-0 place-items-center rounded-full bg-cool-gray-100 text-navy-700 transition duration-200 group-open:rotate-45 group-open:bg-emerald-brand-500 group-open:text-navy-950"
        >
          <PlusIcon />
        </span>
      </summary>

      <div className="px-5 pb-5">
        <p className="border-t border-cool-gray-200 pt-4 text-sm leading-6 text-cool-gray-700">
          {item.answer}
        </p>
      </div>
    </details>
  );
}

function PlusIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="size-5">
      <path
        d="M10 4v12M4 10h12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
