"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, restaurant } from "@/lib/site";

const links = [...nav.left, ...nav.right];

export function Header() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");
  const [menuKey, setMenuKey] = useState<string | null>(null);
  const routeKey = `${pathname}${hash}`;
  const open = menuKey === routeKey;

  useEffect(() => {
    const sync = () => setHash(window.location.hash);
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function active(id: string) {
    if (id === "menu") return pathname === "/menu";
    if (pathname !== "/") return false;
    if (!hash) return id === "info";
    return hash === `#${id}`;
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5">
      <div className="relative mx-auto flex h-[72px] max-w-6xl items-center rounded-full bg-ink px-3 shadow-lg lg:px-8">
        <nav className="hidden flex-1 items-center justify-end gap-7 pr-16 lg:flex">
          {nav.left.map((item) => (
            <NavLink key={item.id} {...item} active={active(item.id)} onNavigate={setHash} />
          ))}
        </nav>

        <Link
          href="/"
          aria-label={restaurant.name}
          className="relative z-10 shrink-0 lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2"
        >
          <span className="block h-14 w-14 overflow-hidden rounded-full border-[3px] border-cream shadow-md lg:h-[108px] lg:w-[108px] lg:border-4">
            <Image
              src="/images/logo.jpg"
              alt=""
              width={216}
              height={216}
              className="h-full w-full object-cover"
              priority
            />
          </span>
        </Link>

        <p className="ml-3 min-w-0 flex-1 truncate font-display text-[13px] font-semibold uppercase tracking-[0.16em] text-white lg:hidden">
          {restaurant.name}
        </p>

        <nav className="hidden flex-1 items-center justify-start gap-7 pl-16 lg:flex">
          {nav.right.map((item) => (
            <NavLink key={item.id} {...item} active={active(item.id)} onNavigate={setHash} />
          ))}
        </nav>

        <button
          type="button"
          className="ml-3 grid h-11 w-11 place-items-center rounded-full text-white lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setMenuKey(open ? null : routeKey)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex w-5 flex-col gap-1.5">
            <span className="h-0.5 w-full bg-white" />
            <span className="h-0.5 w-full bg-white" />
            <span className="h-0.5 w-full bg-white" />
          </span>
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-ink text-white lg:hidden">
          <div className="flex items-start justify-between px-6 pt-8">
            <p className="max-w-[16rem] font-display text-2xl font-bold uppercase leading-tight tracking-[0.12em]">
              {restaurant.name}
            </p>
            <button
              type="button"
              aria-label="Close menu"
              className="grid h-12 w-12 place-items-center text-4xl leading-none"
              onClick={() => setMenuKey(null)}
            >
              ×
            </button>
          </div>
          <ul className="mt-10">
            {links.map((item) => (
              <li key={item.id} className="border-t border-white/15">
                <Link
                  href={item.href}
                  className={`block px-6 py-5 font-display text-sm font-semibold uppercase tracking-[0.18em] ${
                    active(item.id) ? "text-[#00ff00]" : "text-white"
                  }`}
                  onClick={() => {
                    if (item.href.includes("#")) setHash(`#${item.id}`);
                    setMenuKey(null);
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

function NavLink({
  href,
  label,
  id,
  active,
  onNavigate,
}: {
  href: string;
  label: string;
  id: string;
  active: boolean;
  onNavigate: (hash: string) => void;
}) {
  return (
    <Link
      href={href}
      onClick={() => onNavigate(href.includes("#") ? `#${id}` : "")}
      className={`font-display text-[13px] font-semibold uppercase tracking-[0.16em] transition-colors xl:text-[15px] ${
        active ? "text-[#00ff00]" : "text-white hover:text-gold"
      }`}
    >
      {label}
    </Link>
  );
}
