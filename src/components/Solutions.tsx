import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"
import type { Solution } from "../data/content"
import { solutions } from "../data/content"
import { Reveal } from "./Reveal"

function Ask({ label, onLight = false }: { label: string; onLight?: boolean }) {
  return (
    <Link
      to="/contact"
      className={`press mt-6 inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold ${
        onLight ? "bg-graphite text-ivory" : "bg-amber text-graphite"
      }`}
    >
      {label}
      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
    </Link>
  )
}

function Feature({ item }: { item: Solution }) {
  if (!item.image) return null
  return (
    <article className="grid border-t border-white/10 lg:grid-cols-12">
      <div className="media-zoom relative min-h-[320px] overflow-hidden lg:col-span-7 lg:min-h-[560px]">
        <img
          src={item.image.src}
          alt={item.image.alt}
          width={item.image.width}
          height={item.image.height}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <p className="absolute left-4 top-4 bg-graphite/70 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-ivory">
          Ref — {item.index}
        </p>
      </div>
      <div className="flex flex-col justify-end bg-obsidian px-6 py-10 md:px-10 lg:col-span-5 lg:py-14">
        <p className="text-[11px] uppercase tracking-[0.24em] text-metal-400">{item.index}</p>
        <h3 className="mt-3 font-display text-4xl tracking-[-0.03em] md:text-5xl">{item.title}</h3>
        <p className="mt-5 text-sm leading-relaxed text-quiet md:text-base">{item.summary}</p>
        <p className="mt-4 text-sm text-metal-400">
          <span className="text-ivory">Use. </span>
          {item.use}
        </p>
        <Ask label={item.cta} />
      </div>
    </article>
  )
}

export function Solutions() {
  const feature = solutions.find((item) => item.layout === "feature")
  const stills = solutions.filter((item) => item.layout === "still")
  const typed = solutions.find((item) => item.layout === "type")
  const detail = solutions.find((item) => item.layout === "detail")

  return (
    <section id="solutions" className="bg-graphite text-ivory">
      <div className="mx-auto max-w-page px-5 pb-6 pt-20 md:px-8 md:pt-28">
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-metal-400">
            Equipment
          </p>
          <div className="mt-6 grid gap-8 lg:grid-cols-12">
            <h2 className="font-display text-[clamp(2.6rem,5vw,4.6rem)] font-medium leading-[1.02] tracking-[-0.03em] lg:col-span-7">
              What you can ask us about.
            </h2>
            <div className="max-w-md lg:col-span-5 lg:pt-3">
              <p className="text-sm leading-relaxed text-quiet md:text-base">
                These categories follow the weighing equipment associated with
                Contact Instruments. The published product list, with the prices
                and figures from that listing, is on the products page. Confirm
                what is in stock before you order.
              </p>
              <Link to="/products" className="link-line mt-4 inline-flex text-sm font-semibold text-amber">
                View listed products
              </Link>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mx-auto mt-10 max-w-page md:mt-14">
        {feature ? <Feature item={feature} /> : null}

        <div className="grid border-t border-white/10 lg:grid-cols-2">
          {stills.map((item, index) => (
            <article
              key={item.id}
              className={index === 0 ? "border-white/10 lg:border-r" : "border-t border-white/10 lg:border-t-0"}
            >
              {item.image ? (
                <div className={`media-zoom overflow-hidden ${index === 0 ? "bg-obsidian" : "bg-[#E7E1D6]"}`}>
                  <img
                    src={item.image.src}
                    alt={item.image.alt}
                    width={item.image.width}
                    height={item.image.height}
                    loading="lazy"
                    decoding="async"
                    className={
                      index === 0
                        ? "aspect-[4/5] w-full object-cover object-[50%_70%] sm:aspect-[5/4]"
                        : "aspect-[16/8] w-full object-cover object-center"
                    }
                  />
                </div>
              ) : null}
              <div className={`px-6 py-8 md:px-10 md:py-10 ${index === 1 ? "bg-ivory text-graphite" : ""}`}>
                <p className={`text-[11px] uppercase tracking-[0.24em] ${index === 1 ? "text-stone" : "text-metal-400"}`}>
                  {item.index}
                </p>
                <h3 className="mt-3 font-display text-3xl tracking-[-0.03em] md:text-4xl">{item.title}</h3>
                <p className={`mt-4 text-sm leading-relaxed md:text-base ${index === 1 ? "text-stone" : "text-quiet"}`}>
                  {item.summary}
                </p>
                <p className={`mt-4 text-sm ${index === 1 ? "text-graphite" : "text-metal-400"}`}>
                  <span className={index === 1 ? "font-semibold" : "text-ivory"}>Use. </span>
                  {item.use}
                </p>
                <Ask label={item.cta} onLight={index === 1} />
              </div>
            </article>
          ))}
        </div>

        {typed ? (
          <article className="metal-sheen border-t border-white/10 px-6 py-14 md:px-10 md:py-20">
            <div className="grid items-end gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="font-display text-[clamp(5.5rem,14vw,9rem)] italic leading-none tracking-[-0.04em]">
                  kg
                </p>
                <p className="mt-4 max-w-xs text-sm leading-relaxed text-quiet">
                  The unit on the display is the simple part. Matching the
                  indicator to the scale is the work.
                </p>
              </div>
              <div className="lg:col-span-6 lg:col-start-7">
                <p className="text-[11px] uppercase tracking-[0.24em] text-metal-400">{typed.index}</p>
                <h3 className="mt-3 font-display text-4xl tracking-[-0.03em] md:text-5xl">{typed.title}</h3>
                <p className="mt-5 text-sm leading-relaxed text-quiet md:text-base">{typed.summary}</p>
                <p className="mt-4 text-sm text-metal-400">
                  <span className="text-ivory">Use. </span>
                  {typed.use}
                </p>
                <Ask label={typed.cta} />
              </div>
            </div>
          </article>
        ) : null}

        {detail?.image ? (
          <article className="grid border-t border-white/10 lg:grid-cols-12">
            <div className="media-zoom relative min-h-[280px] overflow-hidden bg-obsidian lg:col-span-5 lg:min-h-[460px]">
              <img
                src={detail.image.src}
                alt={detail.image.alt}
                width={detail.image.width}
                height={detail.image.height}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center px-6 py-10 md:px-12 lg:col-span-7">
              <p className="text-[11px] uppercase tracking-[0.24em] text-metal-400">{detail.index}</p>
              <h3 className="mt-3 max-w-xl font-display text-4xl tracking-[-0.03em] md:text-5xl">
                {detail.title}
              </h3>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-quiet md:text-base">{detail.summary}</p>
              <p className="mt-4 text-sm text-metal-400">
                <span className="text-ivory">Use. </span>
                {detail.use}
              </p>
              <Ask label={detail.cta} />
            </div>
          </article>
        ) : null}

        <div className="border-t border-white/10 px-6 py-8 md:px-10">
          <p className="max-w-3xl text-sm leading-relaxed text-quiet">
            Installation, calibration, and maintenance often come up in the same
            enquiry. They are not listed here as standing services. Ask what
            support is available for the equipment you have in mind.
          </p>
        </div>
      </div>
    </section>
  )
}
