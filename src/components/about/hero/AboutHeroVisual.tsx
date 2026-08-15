import Image from "next/image";

const engineeringAreas = [
  "Frontend Engineering",
  "Backend Systems",
  "Database Design",
  "Cloud Deployment",
];

export default function AboutHeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div
        aria-hidden="true"
        className="absolute -left-10 top-16 size-40 rounded-full bg-emerald-brand-500/15 blur-3xl"
      />

      <div className="relative overflow-hidden rounded-3xl border border-cool-gray-300/20 bg-navy-800 p-3 shadow-2xl">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-navy-700">
          <Image
            src="https://picsum.photos/900/1100?random=41"
            alt="Software engineer working on full-stack application architecture"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 42vw"
            className="object-cover"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/15 to-transparent"
          />

          <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-cool-gray-300/20 bg-navy-950/90 p-5 backdrop-blur">
            <p className="text-sm font-bold text-white">
              Engineering across the complete product stack
            </p>

            <ul className="mt-4 grid grid-cols-2 gap-2" role="list">
              {engineeringAreas.map((area) => (
                <li
                  key={area}
                  className="rounded-lg border border-cool-gray-300/15 bg-white/5 px-3 py-2 text-xs font-semibold text-cool-gray-200"
                >
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-5 -right-4 hidden rounded-2xl border border-emerald-brand-300/20 bg-navy-900 p-4 shadow-brand-lg sm:block">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-emerald-brand-300">
          Current focus
        </p>

        <p className="mt-2 text-sm font-semibold text-white">
          Scalable full-stack products
        </p>
      </div>
    </div>
  );
}
