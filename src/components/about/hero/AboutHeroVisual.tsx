import Image from "next/image";

interface AboutHeroVisualProps {
  image: {
    src: string;
    alt: string;
  };
  statusBadge: string;
}

export default function AboutHeroVisual({
  image,
  statusBadge,
}: AboutHeroVisualProps) {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      {/* Subtle emerald ambient glow behind photo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-6 -top-6 size-64 rounded-full bg-emerald-brand-400/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-6 -right-6 size-64 rounded-full bg-navy-400/15 blur-3xl"
      />

      <div className="relative overflow-hidden rounded-3xl border border-cool-gray-200 bg-white p-3 shadow-brand-lg sm:p-4">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-cool-gray-100">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            quality={90}
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 480px"
            className="object-cover object-[50%_35%] transition-transform duration-500 hover:scale-[1.02]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent"
          />
        </div>

        {/* Floating Studio Badge */}
        <div className="absolute left-6 top-6 flex items-center gap-2 rounded-xl border border-cool-gray-200/90 bg-white/95 px-3.5 py-1.5 text-xs font-bold text-navy-950 shadow-brand-sm backdrop-blur">
          <span className="size-1.5 rounded-full bg-emerald-brand-600" />
          <span>Sattar Web Studio</span>
        </div>

        {/* Floating Live Status Badge */}
        <div className="absolute bottom-6 right-6 flex items-center gap-2 rounded-xl border border-cool-gray-300 bg-white/95 px-3.5 py-2 text-xs font-semibold text-navy-950 shadow-brand-md backdrop-blur">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-brand-400 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-brand-600" />
          </span>
          <span>{statusBadge}</span>
        </div>
      </div>
    </div>
  );
}
