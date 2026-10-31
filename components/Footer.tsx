import Link from "next/link";
import { hours, nav, restaurant } from "@/lib/site";

const links = [...nav.left, ...nav.right];

export function Footer() {
  return (
    <footer className="bg-ink text-[#d7d0c8]">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-bold uppercase tracking-[0.14em] text-white">
            {restaurant.name}
          </p>
          <p className="mt-4 max-w-sm leading-7">
            A hometown pizza pub and bowling alley on Main Street in Moweaqua.
            Order a pie, grab a booth, and stay for a game.
          </p>
        </div>
        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Visit
          </p>
          <p className="mt-4 leading-7">
            {restaurant.street}
            <br />
            {restaurant.city}
          </p>
          <a
            href={restaurant.phoneHref}
            className="mt-3 inline-block font-display text-2xl font-semibold tracking-wide text-white hover:text-gold"
          >
            {restaurant.phoneDisplay}
          </a>
        </div>
        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Hours
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {hours.map((row) => (
              <li key={row.day} className="flex justify-between gap-6">
                <span>{row.day}</span>
                <span className="text-white">{row.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-5 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {restaurant.name}</p>
          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            {links.map((item) => (
              <Link key={item.id} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
