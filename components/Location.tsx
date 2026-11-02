"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { chicagoClock, restaurant } from "@/lib/site";

export function Location() {
  const [open, setOpen] = useState<boolean | null>(null);

  useEffect(() => {
    const update = () => setOpen(chicagoClock(new Date()).open);
    update();
    const id = window.setInterval(update, 60_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section id="location" className="bg-white pb-20 lg:pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 lg:grid-cols-[0.9fr_1.1fr_1fr]">
        <div className="relative hidden h-[420px] overflow-hidden rounded-2xl lg:block">
          <Image
            src="/images/logo.jpg"
            alt="Tables beside the bowling lanes"
            fill
            sizes="320px"
            className="object-cover"
          />
        </div>
        <div className="text-center">
          <h2 className="font-display text-4xl font-bold uppercase tracking-[0.06em] text-[#222] sm:text-5xl">
            Location & Contact
          </h2>
          <p className="mt-8 font-display text-sm uppercase tracking-[0.16em] text-muted">
            Call to book a table & delivery:
          </p>
          <a
            href={restaurant.phoneHref}
            className="mt-2 inline-block font-display text-3xl font-bold tracking-wide text-gold sm:text-4xl"
          >
            {restaurant.phoneDisplay}
          </a>
          <p className="mt-8 font-display text-sm uppercase tracking-[0.16em] text-muted">
            Information {restaurant.name}:
          </p>
          <p className="mt-3 text-lg leading-8 text-[#444]">{restaurant.address}</p>
          <p className="mt-4 font-display tracking-wide text-[#444]">
            Right now:{" "}
            {open === null ? (
              <span className="text-transparent">Open now</span>
            ) : (
              <span className={open ? "text-[#1f9d4a]" : "text-[#a33b3b]"}>
                {open ? "Open now" : "Closed"}
              </span>
            )}
          </p>
        </div>
        <div className="h-[320px] overflow-hidden rounded-2xl shadow-sm sm:h-[420px]">
          <iframe
            title="Map to foodpanda"
            src={restaurant.mapEmbed}
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
