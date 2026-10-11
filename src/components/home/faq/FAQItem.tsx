import type { HomeFAQItem as HomeFAQItemType } from "@/types/home";

interface FAQItemProps {
  item: HomeFAQItemType;
}

export default function FAQItem({ item }: FAQItemProps) {
  return (
    <details className="group rounded-2xl border border-white/10 bg-[#0b1120]/80 open:border-emerald-500/50 open:shadow-[0_0_20px_rgba(16,185,129,0.15)]">
      <summary className="flex min-h-15 cursor-pointer list-none items-center justify-between gap-5 rounded-2xl px-5 py-4">
        <span className="font-bold leading-6 text-white group-hover:text-emerald-400">
          {item.question}
        </span>

        <span
          aria-hidden="true"
          className="grid size-8 shrink-0 place-items-center rounded-full bg-white/5 text-slate-200 transition duration-200 group-open:rotate-45 group-open:bg-emerald-brand-500 group-open:text-navy-950"
        >
          <PlusIcon />
        </span>
      </summary>

      <div className="px-5 pb-5">
        <p className="border-t border-white/10 pt-4 text-sm leading-6 text-slate-200">
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
