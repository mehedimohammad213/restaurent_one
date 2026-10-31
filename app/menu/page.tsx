import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { MenuList } from "@/components/MenuList";
import { menu, restaurant } from "@/lib/site";

export const metadata: Metadata = {
  title: "Menu",
  description: `Full menu at ${restaurant.name} in Moweaqua — pizza, salads, burgers, wings, desserts, and bowling.`,
};

export default function MenuPage() {
  return (
    <main>
      <Hero
        compact
        title="Our Menu"
        subtitle="Pizza, pub fare, and a game of bowling on Main Street."
      />
      <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
        <div className="space-y-16">
          {menu.map((category) => {
            const split = category.items.length > 3;
            const midpoint = Math.ceil(category.items.length / 2);
            const columns = split
              ? [category.items.slice(0, midpoint), category.items.slice(midpoint)]
              : [category.items];

            return (
              <section key={category.id} id={category.id} className="scroll-mt-32">
                <h2 className="font-display text-3xl font-bold uppercase tracking-[0.08em] text-[#222] sm:text-4xl">
                  {category.title}
                </h2>
                <div className={`mt-8 grid gap-x-16 gap-y-8 ${split ? "md:grid-cols-2" : ""}`}>
                  {columns.map((column) => (
                    <MenuList key={column[0]?.name} items={column} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </main>
  );
}
