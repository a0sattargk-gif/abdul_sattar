export default function ProjectsHero() {
  return (
    <section
      aria-labelledby="projects-page-heading"
      className="relative overflow-hidden bg-navy-900 py-16 sm:py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="absolute -left-20 top-0 size-80 rounded-full bg-emerald-brand-500/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-20 bottom-0 size-80 rounded-full bg-emerald-brand-400/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(rgba(203,213,225,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(203,213,225,0.05)_1px,transparent_1px)] bg-[size:48px_48px]"
      />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-brand-300">
          Case Studies
        </p>

        <h1
          id="projects-page-heading"
          className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          Products built around real technical challenges
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-cool-gray-200 sm:text-lg">
          Explore full-stack projects, architecture decisions, development
          processes, and production outcomes.
        </p>
      </div>
    </section>
  );
}
