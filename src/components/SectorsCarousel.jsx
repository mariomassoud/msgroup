export default function SectorsCarousel({ items }) {
  const loop = [...items, ...items];

  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
      <div className="flex w-max gap-space-md animate-marquee hover:[animation-play-state:paused]">
        {loop.map((industry, i) => (
          <div
            key={`${industry.name}-${i}`}
            className="shrink-0 w-40 sm:w-48 bg-primary/60 p-space-md rounded-DEFAULT border border-on-primary/10 flex flex-col items-center justify-center space-y-space-xs text-center"
          >
            <span className="material-symbols-outlined text-secondary-fixed-dim text-[28px]">{industry.icon}</span>
            <span className="font-label-md text-label-sm uppercase text-on-primary font-semibold">{industry.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
