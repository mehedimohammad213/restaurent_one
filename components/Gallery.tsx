"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { photos } from "@/lib/site";

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") {
        setActive((current) =>
          current === null ? current : (current + 1) % photos.length,
        );
      }
      if (event.key === "ArrowLeft") {
        setActive((current) =>
          current === null ? current : (current - 1 + photos.length) % photos.length,
        );
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <section id="photos" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="flex items-center justify-center gap-5 text-center font-display text-4xl font-bold uppercase tracking-[0.06em] text-[#222] sm:text-5xl">
          <span className="hidden h-px w-16 bg-gold sm:block" />
          Photos
          <span className="hidden h-px w-16 bg-gold sm:block" />
        </h2>
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {photos.map((photo, index) => (
            <button
              key={photo.src}
              type="button"
              className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-ink"
              aria-label={photo.alt}
              onClick={() => setActive(index)}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </button>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={photos[active].alt}
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            className="absolute top-4 right-4 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-3xl text-white"
            aria-label="Close photo"
            onClick={() => setActive(null)}
          >
            ×
          </button>
          <button
            type="button"
            aria-label="Previous photo"
            className="absolute left-3 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-3xl text-white sm:left-6"
            onClick={(event) => {
              event.stopPropagation();
              setActive((current) =>
                current === null ? current : (current - 1 + photos.length) % photos.length,
              );
            }}
          >
            ‹
          </button>
          <div
            className="relative h-[min(80vh,820px)] w-full max-w-4xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={photos[active].src}
              alt={photos[active].alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
          <button
            type="button"
            aria-label="Next photo"
            className="absolute right-3 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-3xl text-white sm:right-6"
            onClick={(event) => {
              event.stopPropagation();
              setActive((current) =>
                current === null ? current : (current + 1) % photos.length,
              );
            }}
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
