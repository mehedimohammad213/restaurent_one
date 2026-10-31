"use client";

import { useState } from "react";
import { reviews } from "@/lib/site";

export function Reviews() {
  const [index, setIndex] = useState(0);
  const review = reviews[index];

  function step(direction: number) {
    setIndex((current) => (current + direction + reviews.length) % reviews.length);
  }

  return (
    <section id="reviews" className="bg-[#faf7f2] py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-display text-4xl font-bold uppercase tracking-[0.06em] text-[#222] sm:text-5xl">
          What customers say
        </h2>
        <div className="relative mt-12">
          <button
            type="button"
            aria-label="Previous review"
            onClick={() => step(-1)}
            className="absolute top-1/2 left-0 hidden h-12 w-12 -translate-x-4 -translate-y-1/2 place-items-center rounded-full border border-gold/40 font-display text-2xl text-ink sm:grid lg:-left-16"
          >
            ‹
          </button>
          <blockquote>
            <p className="font-body text-xl leading-9 text-[#4d4d4d] sm:text-2xl sm:leading-10">
              “ {review.quote} ”
            </p>
            <footer className="mt-8 font-display text-sm font-semibold uppercase tracking-[0.22em] text-gold">
              — {review.name} —
            </footer>
          </blockquote>
          <button
            type="button"
            aria-label="Next review"
            onClick={() => step(1)}
            className="absolute top-1/2 right-0 hidden h-12 w-12 translate-x-4 -translate-y-1/2 place-items-center rounded-full border border-gold/40 font-display text-2xl text-ink sm:grid lg:-right-16"
          >
            ›
          </button>
        </div>
        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            type="button"
            aria-label="Previous review"
            onClick={() => step(-1)}
            className="grid h-11 w-11 place-items-center rounded-full border border-gold/40 font-display text-2xl text-ink sm:hidden"
          >
            ‹
          </button>
          {reviews.map((item, dot) => (
            <button
              key={item.name}
              type="button"
              aria-label={`Show review from ${item.name}`}
              aria-current={dot === index ? "true" : undefined}
              onClick={() => setIndex(dot)}
              className={`h-2.5 w-2.5 rounded-full ${dot === index ? "bg-gold" : "bg-ink/20"}`}
            />
          ))}
          <button
            type="button"
            aria-label="Next review"
            onClick={() => step(1)}
            className="grid h-11 w-11 place-items-center rounded-full border border-gold/40 font-display text-2xl text-ink sm:hidden"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
