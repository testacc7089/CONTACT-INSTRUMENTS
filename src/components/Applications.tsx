import { applications, photos } from "../data/content"
import { Reveal } from "./Reveal"

export function Applications({ lead = false }: { lead?: boolean }) {
  const Title = lead ? "h1" : "h2"
  return (
    <section id="applications" className="bg-obsidian text-ivory">
      <div className="mx-auto grid max-w-page lg:grid-cols-12">
        <div className={`px-5 py-20 md:px-8 md:py-28 lg:col-span-7 lg:py-32 ${lead ? "pt-28 md:pt-36" : ""}`}>
          <Reveal>
            <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-metal-400">
              Applications
            </p>
            <Title className="mt-6 max-w-xl font-display text-[clamp(2.5rem,4.6vw,4.4rem)] font-medium leading-[1.02] tracking-[-0.03em]">
              Where weighing equipment earns its place.
            </Title>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-quiet md:text-base">
              These are potential applications. They describe work in which
              scales and weighbridges are commonly used. They are not confirmed
              client industries, and they are not a list of sites already
              supplied.
            </p>
          </Reveal>
          <ol className="mt-12">
            {applications.map((item) => (
              <li
                key={item.index}
                className="grid grid-cols-[auto_1fr] gap-x-5 border-t border-white/10 py-5 last:border-b"
              >
                <span className="pt-1 text-xs tabular-nums tracking-[0.16em] text-amber">{item.index}</span>
                <div>
                  <h3 className="font-display text-2xl md:text-3xl">{item.title}</h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-quiet">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="relative min-h-[360px] lg:col-span-5 lg:min-h-full">
          <img
            src={photos.warehouse.src}
            alt={photos.warehouse.alt}
            width={photos.warehouse.width}
            height={photos.warehouse.height}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-graphite via-graphite/70 to-transparent p-5 pt-16">
            <p className="text-[11px] uppercase leading-relaxed tracking-[0.16em] text-ivory/90">
              Warehouse storage. Shown as a kind of workplace, not as a customer.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
