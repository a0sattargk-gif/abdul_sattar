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
      className="bg-cool-gray-50 py-14 sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-brand-700">
            Related Capabilities
          </p>

          <h2
            id="related-capabilities-heading"
            className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900"
          >
            Supporting expertise across the product stack
          </h2>
        </div>

        <ul className="mt-8 flex flex-wrap justify-center gap-3">
          {capabilities.map((capability) => (
            <li
              key={capability}
              className="rounded-full border border-cool-gray-200 bg-white px-4 py-2 text-sm font-semibold text-navy-800"
            >
              {capability}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
