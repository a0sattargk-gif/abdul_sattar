import TrustCard from "@/components/home/trust/TrustCard";

import { HOME_TRUST_ITEMS } from "@/constants/home/trust";

export default function TrustStrip() {
  return (
    <section
      aria-labelledby="home-trust-heading"
      className="relative bg-cool-gray-50 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-brand-700">
            Professional Focus
          </p>

          <h2
            id="home-trust-heading"
            className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl"
          >
            Engineering reliable software for real business needs
          </h2>

          <p className="mt-5 text-base leading-7 text-cool-gray-500 sm:text-lg">
            I combine modern development technologies with scalable architecture
            and a structured delivery process.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {HOME_TRUST_ITEMS.map((item) => (
            <TrustCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
