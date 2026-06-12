export default function Marquee({ marquee }) {
  const items = [...marquee.items, ...marquee.items];

  return (
    <section className="relative z-10 border-y border-ink bg-ink py-4 text-white" aria-label={marquee.label}>
      <div className="overflow-hidden">
        <div className="marquee-track flex w-max items-center gap-5">
          {items.map((item, index) => (
            <div key={`${item}-${index}`} className="flex items-center gap-5">
              <span className="font-display text-xl font-bold text-white md:text-3xl">{item}</span>
              <span className="size-2 rounded-full bg-white/70" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
