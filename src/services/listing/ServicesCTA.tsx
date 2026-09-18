import Link from "next/link";

export default function ServicesCTA() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-navy-900 px-6 py-10 text-center sm:px-10 sm:py-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Have a software project in mind?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-cool-gray-200">
            Share your requirements and let&apos;s define the right technical
            approach.
          </p>

          <Link
            href="/contact"
            className="mt-7 inline-flex min-h-12 items-center justify-center rounded-lg bg-emerald-brand-500 px-6 py-3 font-bold text-navy-950 transition hover:bg-emerald-brand-400"
          >
            Discuss Your Project
          </Link>
        </div>
      </div>
    </section>
  );
}
