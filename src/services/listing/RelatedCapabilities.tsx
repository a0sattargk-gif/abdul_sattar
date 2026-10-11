const capabilities = [
  "API Integration",
  "Database Design",
  "Authentication",
  "Cloud Deployment",
  "Performance Optimization",
  "Existing Project Support",
];

export default function RelatedCapabilities() {
  return (
    <section
      aria-labelledby="related-capabilities-heading"
      className="border-b border-white/[0.08] bg-[#030712]/40 py-14 backdrop-blur-md sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-400">
            Related Capabilities
          </p>

          <h2
            id="related-capabilities-heading"
            className="mt-3 text-3xl font-extrabold tracking-tight text-white"
          >
            Supporting expertise across the product stack
          </h2>
        </div>

        <ul className="mt-8 flex flex-wrap justify-center gap-3">
          {capabilities.map((capability) => (
            <li
              key={capability}
              className="rounded-full border border-white/10 bg-[#0b1120]/80 px-4 py-2 text-sm font-semibold text-cool-gray-200 backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-500/40 hover:text-white hover:shadow-[0_0_15px_rgba(16,185,129,0.15)]"
            >
              {capability}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
