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
    <div className="max-w-3xl">
      <div className="flex items-center gap-3">
        <Badge
          variant="emerald"
          className="px-3 py-1 text-xs font-bold uppercase tracking-[0.16em]"
        >
          {content.eyebrow}
        </Badge>
      </div>

      <h1
        id="home-hero-heading"
        className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-[-0.035em] text-navy-950 sm:text-5xl lg:text-6xl"
      >
        {content.title}{" "}
        <span className="text-emerald-brand-700">
          {content.highlightedText}
        </span>
      </h1>

      <p className="mt-5 max-w-2xl text-base leading-7 text-cool-gray-600 sm:text-lg sm:leading-8">
        {content.description}
      </p>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <Button
          asChild
          size="lg"
          variant="default"
          className="group shadow-md"
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
          className="font-bold border-cool-gray-300 hover:bg-cool-gray-50"
        >
          <Link
            href={content.secondaryAction.href}
            aria-label={content.secondaryAction.ariaLabel}
          >
            {content.secondaryAction.label}
          </Link>
        </Button>
      </div>

      <div className="mt-8 border-t border-cool-gray-200 pt-5">
        <ul
          role="list"
          aria-label="Core technologies"
          className="flex flex-wrap gap-2"
        >
          {content.technologies.map((technology) => (
            <li key={technology}>
              <Badge
                variant="secondary"
                className="font-semibold text-cool-gray-600 bg-cool-gray-100 hover:bg-cool-gray-200"
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