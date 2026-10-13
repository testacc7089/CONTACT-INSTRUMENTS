import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { MessageCircle, Phone } from "lucide-react"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { telHref, whatsappHref } from "../config/business"
import { motionTokens } from "../motion/tokens"

export function MobileDock() {
  const call = telHref()
  const whatsapp = whatsappHref()
  const reduce = useReducedMotion()
  const [visible, setVisible] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById("top")
      const threshold = hero ? hero.offsetHeight * 0.72 : 120
      setVisible(window.scrollY > threshold)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [location.pathname])

  if (!call && !whatsapp) return null

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          id="contact-dock"
          className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-graphite p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden"
          initial={reduce ? false : { y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={reduce ? undefined : { y: 80, opacity: 0 }}
          transition={{ duration: motionTokens.duration.base, ease: motionTokens.ease }}
        >
          <div className={`grid gap-2 ${call && whatsapp ? "grid-cols-2" : "grid-cols-1"}`}>
            {call ? (
              <a href={call} className="press inline-flex items-center justify-center gap-2 bg-amber px-3 py-3 text-sm font-semibold text-graphite">
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call
              </a>
            ) : null}
            {whatsapp ? (
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="press inline-flex items-center justify-center gap-2 bg-ivory px-3 py-3 text-sm font-semibold text-graphite">
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WhatsApp
              </a>
            ) : null}
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
