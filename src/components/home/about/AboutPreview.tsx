import Image from "next/image";
import Link from "next/link";

import { HOME_ABOUT_CONTENT } from "@/constants/home/about";

export default function AboutPreview() {
  const content = HOME_ABOUT_CONTENT;

  return (
    <section
      aria-labelledby="home-about-heading"
      className="bg-cool-gray-50 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
        <div className="relative mx-auto w-full max-w-xl">
          <div
            aria-hidden="true"
            className="absolute -left-5 -top-5 size-32 rounded-full bg-emerald-brand-500/15 blur-3xl"
          />

          <div className="relative overflow-hidden rounded-3xl border border-cool-gray-200 bg-white p-3 shadow-brand-lg">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-navy-800">
              <Image
                src={content.image.src}
                alt={content.image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-navy-950/55 via-transparent to-transparent"
              />

              <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/20 bg-navy-950/85 p-5 backdrop-blur">
                <p className="text-sm font-bold text-white">
                  Full-Stack Software Engineering
                </p>

                <p className="mt-2 text-sm leading-6 text-cool-gray-200">
                  Building maintainable products across frontend, backend,
                  database, mobile, and cloud systems.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-brand-700">
            {content.eyebrow}
          </p>

          <h2
            id="home-about-heading"
            className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl lg:text-5xl"
          >
            {content.title}
          </h2>

          <p className="mt-6 text-base leading-8 text-cool-gray-700 sm:text-lg">
            {content.description}
          </p>

          <p className="mt-4 text-base leading-8 text-cool-gray-700">
            {content.secondaryDescription}
          </p>

          <ul className="mt-7 grid gap-3 sm:grid-cols-2" role="list">
            {content.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-3 rounded-xl border border-cool-gray-200 bg-white p-4 text-sm font-semibold text-navy-800"
              >
                <span
                  aria-hidden="true"
                  className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-emerald-brand-500 text-xs font-bold text-navy-950"
                >
                  ✓
                </span>

                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href={content.primaryAction.href}
              aria-label={content.primaryAction.ariaLabel}
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-navy-900 px-6 py-3 font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-navy-800"
            >
              {content.primaryAction.label}
            </Link>

            <Link
              href={content.secondaryAction.href}
              aria-label={content.secondaryAction.ariaLabel}
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-cool-gray-300 bg-white px-6 py-3 font-bold text-navy-900 transition duration-200 hover:border-emerald-brand-500 hover:text-emerald-brand-700"
            >
              {content.secondaryAction.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
