import Link from "next/link";
import { About } from "@/components/About";
import { Gallery } from "@/components/Gallery";
import { HomeHero } from "@/components/Hero";
import { Location } from "@/components/Location";
import { MenuList } from "@/components/MenuList";
import { Reviews } from "@/components/Reviews";
import { menu } from "@/lib/site";

const starters = menu.find((category) => category.id === "starters");

export default function Home() {
  return (
    <main>
      <HomeHero />
      <About />
      {starters ? (
        <section className="bg-white pb-8">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="font-display text-4xl font-bold uppercase tracking-[0.06em] text-[#222] sm:text-5xl">
                Starters
              </h2>
              <Link
                href="/menu"
                className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-gold"
              >
                View full menu
              </Link>
            </div>
            <div className="mt-10 grid gap-x-16 gap-y-2 md:grid-cols-2">
              <MenuList items={starters.items.slice(0, 4)} />
              <MenuList items={starters.items.slice(4, 8)} />
            </div>
          </div>
        </section>
      ) : null}
      <section className="relative mt-16 overflow-hidden bg-ink text-cream">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{ backgroundImage: "url(/images/gallery-1.jpg)" }}
        />
        <div className="relative mx-auto max-w-4xl px-6 py-20 text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-gold">
            Pizza pub & pins
          </p>
          <h2 className="mt-4 font-script text-6xl text-cream sm:text-7xl">
            Stay for a game
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-white/90">
            Lanes are in the back of the pub. Early bird games are $2 until 4pm,
            prime time is $4, and moonlight bowling runs Friday and Saturday from
            9pm to midnight.
          </p>
          <Link
            href="/menu#bowling"
            className="mt-8 inline-flex font-display text-sm font-semibold uppercase tracking-[0.16em] text-gold"
          >
            Bowling prices
          </Link>
        </div>
      </section>
      <Reviews />
      <Gallery />
      <Location />
    </main>
  );
}
