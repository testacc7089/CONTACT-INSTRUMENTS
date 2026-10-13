import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { Menu, Phone, X } from "lucide-react"
import { useEffect, useId, useRef, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { business, telHref } from "../config/business"
import { navLinks } from "../data/content"
import { motionTokens } from "../motion/tokens"
import { Wordmark } from "./Wordmark"

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const menuId = useId()
  const call = telHref()
  const location = useLocation()
  const reduce = useReducedMotion()
  const firstLinkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"
    document.addEventListener("keydown", onKey)
    firstLinkRef.current?.focus()
    const background = ["main", "contact-dock"]
      .map((id) => document.getElementById(id))
      .concat(document.querySelector("footer"))
    background.forEach((node) => node?.setAttribute("inert", ""))
    return () => {
      document.body.style.overflow = previous
      document.removeEventListener("keydown", onKey)
      background.forEach((node) => node?.removeAttribute("inert"))
    }
  }, [open])

  function isCurrent(href: string) {
    return location.pathname === href || location.pathname.startsWith(`${href}/`)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-300 ${
        scrolled || open
          ? "border-white/10 bg-graphite/95 md:bg-graphite/75 md:backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-page items-center justify-between px-5 md:px-8">
        <Link to="/" className="rounded-sm" aria-label="Contact Instruments, home">
          <Wordmark />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const current = isCurrent(link.href)
            return (
              <Link
                key={link.href}
                to={link.href}
                aria-current={current ? "page" : undefined}
                className={`link-line text-[13px] font-medium tracking-[0.08em] ${current ? "text-amber" : "text-ivory/85 hover:text-ivory"}`}
              >
                {link.label}
              </Link>
            )
          })}
          {call ? (
            <a href={call} className="press inline-flex items-center gap-2 bg-amber px-4 py-2.5 text-[13px] font-semibold tracking-wide text-graphite">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call Our Team
            </a>
          ) : null}
        </nav>

        <button
          type="button"
          className="press inline-flex h-11 w-11 items-center justify-center text-ivory lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id={menuId}
            className="fixed inset-0 top-[4.5rem] z-50 bg-graphite lg:hidden"
            initial={reduce ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: motionTokens.duration.base, ease: motionTokens.ease }}
          >
            <nav className="flex h-full flex-col px-6 py-8" aria-label="Mobile">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={reduce ? false : { opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: reduce ? 0 : 0.05 + index * motionTokens.stagger, duration: motionTokens.duration.base, ease: motionTokens.ease }}
                >
                  <Link
                    to={link.href}
                    ref={index === 0 ? firstLinkRef : undefined}
                    onClick={() => setOpen(false)}
                    className="block border-b border-white/10 py-5 font-display text-4xl text-ivory"
                    aria-current={isCurrent(link.href) ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              {call ? (
                <a href={call} className="press mt-8 inline-flex items-center justify-center gap-2 bg-amber px-4 py-4 text-sm font-semibold text-graphite">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call {business.phone.display}
                </a>
              ) : null}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
