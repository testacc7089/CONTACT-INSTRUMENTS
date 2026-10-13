import { Mail, MapPin, MessageCircle, Phone } from "lucide-react"
import {
  addressLines,
  business,
  mailHref,
  mapsHref,
  telHref,
  whatsappHref,
} from "../config/business"

export function Contact({ lead = false }: { lead?: boolean }) {
  const Title = lead ? "h1" : "h2"
  const call = telHref()
  const mail = mailHref()
  const whatsapp = whatsappHref()
  const notes = [
    business.phone.e164 && !business.phone.verified ? business.phone.note : null,
    !mail ? business.email.note : null,
    !whatsapp ? business.whatsapp.note : null,
  ].filter((note): note is string => Boolean(note))

  return (
    <section id="contact" className="metal-sheen relative overflow-hidden bg-graphite text-ivory">
      <div
        className="pointer-events-none absolute bottom-0 right-4 top-0 hidden w-8 flex-col justify-between py-16 text-[10px] tracking-[0.16em] text-ivory/30 lg:flex"
        aria-hidden="true"
      >
        {["10", "20", "30", "40"].map((mark) => (
          <span key={mark} className="flex items-center justify-end gap-2">
            {mark}
            <span className="h-px w-3 bg-ivory/40" />
          </span>
        ))}
      </div>

      <div className={`mx-auto grid max-w-page gap-14 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-12 lg:py-32 ${lead ? "pt-28 md:pt-36" : ""}`}>
        <div className="lg:col-span-7">
          <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-metal-400">
            Contact
          </p>
          <Title className="mt-5 max-w-xl font-display text-[clamp(2.8rem,6vw,5.4rem)] font-medium leading-[0.96] tracking-[-0.035em]">
            Let&apos;s get the measurement right.
          </Title>
          <p className="mt-6 max-w-md text-base leading-relaxed text-quiet">
            Bring the load, the place, and the question. The team is in
            Duttawadi, Nagpur.
          </p>
          {business.hours ? (
            <dl className="mt-8 text-sm text-quiet">
              {business.hours.map((row) => (
                <div key={row.days} className="flex gap-4">
                  <dt>{row.days}</dt>
                  <dd>{row.hours}</dd>
                </div>
              ))}
            </dl>
          ) : null}
        </div>

        <div className="lg:col-span-5">
          <address className="not-italic">
            <p className="text-[11px] uppercase tracking-[0.22em] text-amber">Address</p>
            <p className="mt-3 font-display text-2xl leading-snug">
              {addressLines().map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          </address>

          <ul className="mt-10 border-t border-white/15">
            {call ? (
              <li className="border-b border-white/15">
                <a href={call} className="group flex items-center justify-between gap-4 py-5">
                  <span className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-amber" aria-hidden="true" />
                    <span>
                      <span className="block text-[11px] uppercase tracking-[0.18em] text-metal-400">Phone</span>
                      <span className="mt-1 block text-lg font-semibold">{business.phone.display}</span>
                    </span>
                  </span>
                  <span className="text-sm text-quiet group-hover:text-amber">Call</span>
                </a>
              </li>
            ) : null}
            {mail && business.email.address ? (
              <li className="border-b border-white/15">
                <a href={mail} className="group flex items-center justify-between gap-4 py-5">
                  <span className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-amber" aria-hidden="true" />
                    <span>
                      <span className="block text-[11px] uppercase tracking-[0.18em] text-metal-400">Email</span>
                      <span className="mt-1 block text-lg font-semibold">{business.email.address}</span>
                    </span>
                  </span>
                  <span className="text-sm text-quiet group-hover:text-amber">Write</span>
                </a>
              </li>
            ) : null}
            {whatsapp ? (
              <li className="border-b border-white/15">
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 py-5"
                >
                  <span className="flex items-center gap-3">
                    <MessageCircle className="h-4 w-4 text-amber" aria-hidden="true" />
                    <span>
                      <span className="block text-[11px] uppercase tracking-[0.18em] text-metal-400">WhatsApp</span>
                      <span className="mt-1 block text-lg font-semibold">Message the team</span>
                    </span>
                  </span>
                  <span className="text-sm text-quiet group-hover:text-amber">Open</span>
                </a>
              </li>
            ) : null}
            <li className="border-b border-white/15">
              <a
                href={mapsHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 py-5"
              >
                <span className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-amber" aria-hidden="true" />
                  <span>
                    <span className="block text-[11px] uppercase tracking-[0.18em] text-metal-400">Map</span>
                    <span className="mt-1 block text-lg font-semibold">Google Maps directions</span>
                  </span>
                </span>
                <span className="text-sm text-quiet group-hover:text-amber">Open</span>
              </a>
            </li>
          </ul>

          {notes.length > 0 ? (
            <ul className="mt-6 space-y-2">
              {notes.map((note) => (
                <li key={note} className="text-xs leading-relaxed text-metal-400">
                  {note}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </section>
  )
}
