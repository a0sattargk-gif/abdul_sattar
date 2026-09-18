export default function ContactHero() {
  return (
    <section
      aria-labelledby="contact-hero-heading"
      className="relative overflow-hidden bg-navy-900 py-16 sm:py-20 lg:py-24"
    >
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute -left-20 top-0 size-80 rounded-full bg-emerald-brand-500/10 blur-3xl" />

        <div className="absolute -right-20 bottom-0 size-80 rounded-full bg-emerald-brand-400/10 blur-3xl" />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(rgba(203,213,225,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(203,213,225,0.05)_1px,transparent_1px)] bg-[size:48px_48px]"
      />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-brand-300">
          Contact
        </p>

        <h1
          id="contact-hero-heading"
          className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          Let&apos;s discuss your next software project
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-cool-gray-200 sm:text-lg">
          Share your project, challenge, or product idea and I&apos;ll review
          the best technical direction.
        </p>

        <div className="mt-7 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white">
            <span
              aria-hidden="true"
              className="size-2 rounded-full bg-emerald-brand-400"
            />
            Available for remote projects
          </span>
        </div>
      </div>
    </section>
  );
}
