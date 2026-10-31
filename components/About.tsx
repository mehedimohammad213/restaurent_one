"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { aboutParagraphs, chicagoClock, hours } from "@/lib/site";

export function About() {
  const [expanded, setExpanded] = useState(false);
  const [clock, setClock] = useState<{ weekday: string; open: boolean } | null>(null);
  const visible = expanded ? aboutParagraphs : aboutParagraphs.slice(0, 2);

  useEffect(() => {
    const update = () => setClock(chicagoClock(new Date()));
    update();
    const id = window.setInterval(update, 60_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section id="info" className="bg-white">
      <div className="mx-auto grid max-w-6xl items-start gap-12 px-6 py-20 lg:grid-cols-[1.35fr_0.8fr] lg:py-28">
        <div>
          <h2 className="font-display text-4xl font-bold uppercase tracking-[0.06em] text-[#222] sm:text-5xl">
            General Info
          </h2>
          <div className="mt-8 space-y-5 text-base leading-8 text-muted">
            {visible.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
          <button
            type="button"
            className="mt-6 font-display text-sm font-semibold uppercase tracking-[0.18em] text-gold"
            aria-expanded={expanded}
            onClick={() => setExpanded((value) => !value)}
          >
            {expanded ? "Show less" : "Load more"}
          </button>
        </div>

        <div>
          <div className="relative h-64 overflow-hidden rounded-2xl sm:h-72">
            <Image
              src="/images/gallery-1.jpg"
              alt="Bowling lanes at Crawfords"
              fill
              sizes="(min-width: 1024px) 380px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="relative z-10 -mt-10 ml-4 mr-4 rounded-2xl bg-ink px-6 py-7 text-cream shadow-xl sm:ml-8">
            <div className="flex items-end justify-between gap-3">
              <h3 className="font-display text-xl font-bold uppercase tracking-[0.12em] text-gold">
                Hour Opening
              </h3>
              {clock ? (
                <span
                  className={`font-display text-xs font-semibold uppercase tracking-[0.14em] ${
                    clock.open ? "text-[#3ddc6a]" : "text-[#e7a0a0]"
                  }`}
                >
                  {clock.open ? "Open now" : "Closed"}
                </span>
              ) : (
                <span className="text-xs text-transparent">Open now</span>
              )}
            </div>
            <ul className="mt-5 space-y-3">
              {hours.map((row) => {
                const today = clock?.weekday === row.day;
                return (
                  <li
                    key={row.day}
                    className={`hour-line text-sm sm:text-base ${today ? "text-gold" : "text-cream/90"}`}
                  >
                    <span className="font-display tracking-wide">{row.day}</span>
                    <span className="leader" aria-hidden="true" />
                    <span className="font-display tracking-wide">{row.label}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
