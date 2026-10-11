import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { HomeHeroContent } from "@/types/home";

interface HeroContentProps {
  content: HomeHeroContent;
}

export default function HeroContent({
  content,
}: HeroContentProps) {
  return (
    <div className="relative max-w-3xl">
      <div className="flex items-center gap-3">
        <span aria-hidden="true" className="relative flex size-2.5">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-brand-400 opacity-60 motion-reduce:animate-none" />
          <span className="relative inline-flex size-2.5 rounded-full bg-emerald-brand-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
        </span>
        <Badge
          variant="emerald"
          className="border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-emerald-brand-400 backdrop-blur-md"
        >
          {content.eyebrow}
        </Badge>
      </div>

      <h1
        id="home-hero-heading"
        className="mt-6 max-w-3xl text-[2.75rem] font-extrabold leading-[0.99] tracking-[-0.05em] text-white sm:text-6xl lg:text-[4.6rem]"
      >
        {content.title}{" "}
        <span className="relative inline bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
          {content.highlightedText}
          <span aria-hidden="true" className="absolute -bottom-2 left-0 h-1.5 w-2/5 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 shadow-[0_0_12px_rgba(52,211,153,0.8)] sm:-bottom-3 sm:h-2" />
        </span>
      </h1>

      <p className="mt-7 max-w-xl border-l-2 border-emerald-500/50 pl-5 text-base leading-7 text-slate-100 sm:text-lg sm:leading-8">
        {content.description}
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button
          asChild
          size="lg"
          variant="default"
          className="group min-h-12 rounded-xl bg-emerald-brand-500 font-bold text-navy-950 shadow-[0_0_25px_rgba(16,185,129,0.4)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-brand-400 hover:shadow-[0_0_35px_rgba(16,185,129,0.6)]"
        >
          <Link
            href={content.primaryAction.href}
            aria-label={content.primaryAction.ariaLabel}
          >
            {content.primaryAction.label}
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </Button>

        <Button
          asChild
          size="lg"
          variant="outline"
          className="min-h-12 rounded-xl border-white/15 bg-white/[0.04] font-bold text-white backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10"
        >
          <Link
            href={content.secondaryAction.href}
            aria-label={content.secondaryAction.ariaLabel}
          >
            {content.secondaryAction.label}
          </Link>
        </Button>
      </div>

      <div className="mt-10 border-t border-white/10 pt-5">
        <p className="mb-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300">Tools &amp; disciplines</p>
        <ul
          role="list"
          aria-label="Core technologies"
          className="flex flex-wrap gap-2"
        >
          {content.technologies.map((technology) => (
            <li key={technology}>
              <Badge
                variant="secondary"
                className="rounded-lg border border-white/10 bg-white/[0.04] font-mono text-[11px] font-medium text-slate-200 backdrop-blur-sm transition-all duration-200 hover:border-emerald-400/40 hover:bg-emerald-500/10 hover:text-emerald-300"
              >
                {technology}
              </Badge>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}