import { Link } from "react-router-dom"
import { business, mailHref, telHref, whatsappHref } from "../config/business"
import { navLinks, photoCredits } from "../data/content"
import { Wordmark } from "./Wordmark"

export function Footer() {
  const call = telHref()
  const mail = mailHref()
  const whatsapp = whatsappHref()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-obsidian text-ivory">
      <div className="mx-auto grid max-w-page gap-12 px-5 py-14 md:px-8 md:py-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Wordmark />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-quiet">
            Weighing equipment and instrumentation from Duttawadi, Nagpur.
          </p>
        </div>
        <nav className="lg:col-span-3" aria-label="Footer">
          <p className="text-[11px] uppercase tracking-[0.2em] text-metal-400">Pages</p>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link to={link.href} className="link-line text-sm text-ivory/90">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/contact#faq" className="link-line text-sm text-ivory/90">
                Questions
              </Link>
            </li>
          </ul>
        </nav>
        <div className="lg:col-span-5">
          <p className="text-[11px] uppercase tracking-[0.2em] text-metal-400">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-quiet">
            <li>{business.address.line1}</li>
            <li>{business.address.line2}</li>
            <li>
              {business.address.locality}, {business.address.region} {business.address.postalCode}
            </li>
            {call ? (
              <li>
                <a href={call} className="text-ivory hover:text-amber">
                  {business.phone.display}
                </a>
              </li>
            ) : null}
            {mail && business.email.address ? (
              <li>
                <a href={mail} className="text-ivory hover:text-amber">
                  {business.email.address}
                </a>
              </li>
            ) : null}
            {whatsapp ? (
              <li>
                <a href={whatsapp} className="text-ivory hover:text-amber" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </li>
            ) : null}
            {business.social.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-ivory hover:text-amber" target="_blank" rel="noopener noreferrer">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-page border-t border-white/10 px-5 pb-28 pt-6 md:px-8 md:pb-8">
        <p className="text-[11px] uppercase tracking-[0.16em] text-metal-400">Photographs</p>
        <ul className="mt-3 flex flex-col gap-1 text-xs text-metal-400">
          {photoCredits.map((photo) => (
            <li key={photo.src}>
              <a href={photo.creditHref} className="hover:text-ivory" target="_blank" rel="noopener noreferrer">
                {photo.credit}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-xs text-metal-400">
          © {year} {business.name}. Photographs of equipment are reference images, not a catalogue of stocked models.
        </p>
      </div>
    </footer>
  )
}
