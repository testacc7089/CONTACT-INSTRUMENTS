import { MapPin } from "lucide-react"
import { addressLines, business, mapsHref } from "../config/business"
import { Reveal } from "./Reveal"

export function About({ lead = false }: { lead?: boolean }) {
  const Title = lead ? "h1" : "h2"
  return (
    <section id="about" className="bg-ivory text-graphite">
      <div className={`mx-auto grid max-w-page items-stretch gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-12 lg:py-32 ${lead ? "pt-28 md:pt-36" : ""}`}>
        <Reveal className="lg:col-span-7">
          <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-stone">
            The business
          </p>
          <Title className="mt-6 font-display text-[clamp(2.5rem,4.6vw,4.4rem)] font-medium leading-[1.02] tracking-[-0.03em]">
            A straight conversation about the equipment.
          </Title>
          <div className="mt-8 max-w-xl space-y-5 text-base leading-relaxed text-stone">
            <p>
              Contact Instruments is a weighing equipment business in
              Duttawadi, Nagpur. People come here when they need a scale, a
              weighbridge, or an electronic weighing setup and want to talk
              through what will actually fit.
            </p>
            <p>
              The products page lists equipment published for Contact
              Instruments, with the prices and figures from that listing.
              Tell us what you weigh, how heavy it gets, and where the
              equipment will stand. We will tell you what we can supply, and
              what has to be confirmed before you decide.
            </p>
          </div>
        </Reveal>

        <aside className="relative bg-graphite p-7 text-ivory md:p-10 lg:col-span-5">
          <span className="pointer-events-none absolute left-4 top-4 h-3 w-3 border-l border-t border-amber" aria-hidden="true" />
          <span className="pointer-events-none absolute right-4 top-4 h-3 w-3 border-r border-t border-amber" aria-hidden="true" />
          <span className="pointer-events-none absolute bottom-4 left-4 h-3 w-3 border-b border-l border-amber" aria-hidden="true" />
          <span className="pointer-events-none absolute bottom-4 right-4 h-3 w-3 border-b border-r border-amber" aria-hidden="true" />
          <p className="text-[11px] uppercase tracking-[0.24em] text-amber">Visit</p>
          <h3 className="mt-4 font-display text-3xl tracking-[-0.03em]">{business.name}</h3>
          <address className="mt-6 space-y-1 text-sm not-italic leading-relaxed text-quiet">
            {addressLines().map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <a
            href={mapsHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-amber"
          >
            <MapPin className="h-4 w-4" aria-hidden="true" />
            Directions on Google Maps
          </a>
        </aside>
      </div>
    </section>
  )
}
