import Image from "next/image";
import Card3D from "@/components/3d/Card3D";

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
        className="pointer-events-none absolute -left-6 -top-6 size-72 rounded-full bg-emerald-500/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-6 -right-6 size-72 rounded-full bg-cyan-500/15 blur-3xl"
      />

      <Card3D className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b1120]/80 p-3 shadow-2xl backdrop-blur-xl sm:p-4">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[#030712]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            quality={90}
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 480px"
            className="object-cover object-[50%_35%] transition-transform duration-700 ease-out hover:scale-105"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b1120] via-transparent to-transparent opacity-70"
          />
        </div>

        {/* Floating Studio Badge */}
        <div className="absolute left-6 top-6 flex items-center gap-2 rounded-xl border border-white/15 bg-black/60 px-3.5 py-1.5 text-xs font-bold text-white shadow-lg backdrop-blur-md">
          <span className="size-1.5 rounded-full bg-emerald-400" />
          <span>Sattar Web Studio</span>
        </div>

        {/* Floating Live Status Badge */}
        <div className="absolute bottom-6 right-6 flex items-center gap-2 rounded-xl border border-white/15 bg-black/60 px-3.5 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur-md">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
          </span>
          <span>{statusBadge}</span>
        </div>
      </Card3D>
    </div>
  );
}
