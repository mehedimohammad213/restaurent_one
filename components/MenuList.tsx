import type { MenuItem } from "@/lib/site";

export function MenuList({ items }: { items: MenuItem[] }) {
  return (
    <ul className="space-y-5">
      {items.map((item) => (
        <li key={item.name}>
          <div className="menu-line">
            <span className="font-display text-lg font-medium tracking-wide text-[#696969] sm:text-[22px]">
              {item.name}
            </span>
            <span className="leader" aria-hidden="true" />
            {item.price ? (
              <span className="font-display text-lg font-medium tracking-wide text-gold sm:text-[22px]">
                {item.price}
              </span>
            ) : null}
          </div>
          {item.note ? (
            <p className="mt-1 max-w-xl text-sm leading-6 text-[#8a8a8a]">{item.note}</p>
          ) : null}
        </li>
      ))}
    </ul>
  );
}
