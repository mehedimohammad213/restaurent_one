import { restaurant } from "@/lib/site";

export function Hero({
  title,
  subtitle,
  compact = false,
}: {
  title: string;
  subtitle?: string;
  compact?: boolean;
}) {
  return (
    <section
      className={`relative flex items-center justify-center overflow-hidden bg-ink ${
        compact ? "min-h-[460px]" : "min-h-[88vh]"
      }`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/hero.jpg)" }}
        role="img"
        aria-label="Specialty pizza from Crawfords"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/45 to-ink/75" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 pt-28 pb-16 text-center">
        <h1 className="font-script text-6xl leading-none text-cream sm:text-7xl md:text-8xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-6 text-lg text-white sm:text-xl">{subtitle}</p>
        ) : null}
      </div>
    </section>
  );
}

export function HomeHero() {
  return (
    <Hero
      title={`Welcome to ${restaurant.name}`}
      subtitle={restaurant.address}
    />
  );
}
