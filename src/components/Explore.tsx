import { ArrowUpRight } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import { Link } from "react-router-dom"
import { explore } from "../data/content"
import { motionTokens } from "../motion/tokens"

type Props = {
  current?: string
}

export function Explore({ current }: Props) {
  const reduce = useReducedMotion()
  const items = explore.filter((item) => item.href !== current)

  return (
    <section className="border-t border-graphite/10 bg-ivory text-graphite" aria-labelledby="explore-heading">
      <div className="mx-auto max-w-page px-5 py-20 md:px-8 md:py-28">
        <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-stone">Explore</p>
        <h2 id="explore-heading" className="mt-4 max-w-xl font-display text-[clamp(2.4rem,4.5vw,4rem)] font-medium leading-[1.02] tracking-[-0.03em]">
          {current ? "Keep going." : "The rest of the business."}
        </h2>
        <ul className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item, index) => (
            <li key={item.href}>
              <motion.div
                initial={reduce ? false : { opacity: 1, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                transition={{ duration: motionTokens.duration.base, delay: reduce ? 0 : Math.min(index, 4) * motionTokens.stagger, ease: motionTokens.ease }}
              >
                <Link
                  to={item.href}
                  className="group flex h-full flex-col border border-graphite/15 bg-white/40 p-6 transition-colors duration-200 hover:border-amber hover:bg-white"
                >
                  <span className="text-[11px] tabular-nums tracking-[0.2em] text-stone">{item.index}</span>
                  <span className="mt-4 flex items-center justify-between gap-4 font-display text-3xl tracking-[-0.03em]">
                    {item.label}
                    <ArrowUpRight className="h-5 w-5 text-amber transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                  </span>
                  <span className="mt-3 text-sm leading-relaxed text-stone">{item.text}</span>
                </Link>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
