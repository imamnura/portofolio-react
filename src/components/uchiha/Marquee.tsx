type MarqueeProps = {
  items: readonly string[];
};

/** Endless red ticker band; content is duplicated so the loop is seamless. */
export function Marquee({ items }: MarqueeProps) {
  return (
    <div className="overflow-hidden border-y-4 border-ink bg-blood py-3" aria-hidden="true">
      <div className="animate-marquee flex w-max">
        {["a", "b"].map((copy) =>
          items.map((item) => (
            <span
              key={`${copy}-${item}`}
              className="flex items-center gap-6 pr-6 font-display text-xl uppercase text-white sm:text-3xl"
            >
              {item}
              <span className="text-[#0b0b0b]">✦</span>
            </span>
          )),
        )}
      </div>
    </div>
  );
}
