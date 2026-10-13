import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { ArrowDownRight } from "lucide-react"
import { useRef } from "react"
import { Link } from "react-router-dom"
import { business } from "../config/business"
import { photos } from "../data/content"
import { motionTokens } from "../motion/tokens"

const lines = ["Every kilogram.", "Accounted for"]

export function Hero() {
  const reduce = useReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"])
  const cueOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0])

  const rise = (delay: number) =>
    reduce
      ? undefined
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: motionTokens.duration.slow, ease: motionTokens.ease, delay },
        }

  return (
    <section id="top" ref={sectionRef} className="relative min-h-[100svh] overflow-hidden bg-graphite text-ivory">
      <motion.div className="absolute inset-0" style={reduce ? undefined : { y: imageY }}>
        <img
          src={photos.weighbridgeTruck.src}
          alt={photos.weighbridgeTruck.alt}
          width={photos.weighbridgeTruck.width}
          height={photos.weighbridgeTruck.height}
          className="hero-photo absolute inset-0 h-[118%] w-full max-w-none object-cover"
          fetchPriority="high"
          decoding="async"
        />
      </motion.div>
      <div className="hero-shade pointer-events-none absolute inset-0" />
      <div className="hero-warm pointer-events-none absolute inset-0" />

      <div
        className="pointer-events-none absolute bottom-0 left-5 top-24 hidden w-8 flex-col justify-between py-8 text-[10px] tracking-[0.18em] text-ivory/40 md:flex lg:left-8"
        aria-hidden="true"
      >
        {["00", "25", "50", "75"].map((mark) => (
          <span key={mark} className="flex items-center gap-2">
            <span className="h-px w-3 bg-ivory/50" />
            {mark}
          </span>
        ))}
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-page flex-col justify-start px-5 pb-28 pt-24 md:px-8 md:pb-14 md:pt-28 lg:justify-center lg:pb-20 lg:pl-24">
        <div className="w-full min-w-0 max-w-3xl">
          <motion.p {...rise(0.05)} className="flex max-w-full flex-wrap items-center gap-x-4 gap-y-2 text-[11px] font-medium uppercase tracking-[0.22em] text-quiet sm:tracking-[0.28em]">
            <span className="measure-line" aria-hidden="true" />
            <span>Nagpur · Weighing equipment</span>
          </motion.p>
          <h1 className="mt-6 max-w-full font-display text-[clamp(2.7rem,11vw,6.6rem)] font-medium leading-[0.92] tracking-[-0.035em]">
            {lines.map((line, index) => (
              <motion.span
                key={line}
                className={`block ${index === 1 ? "mt-1 italic" : ""}`}
                {...rise(0.12 + index * 0.12)}
              >
                {line}
                {index === 1 ? (
                  <>
                    <span className="ml-2 inline-block h-[0.16em] w-[0.16em] -translate-y-[0.08em] bg-amber align-middle" aria-hidden="true" />
                    <span className="sr-only">.</span>
                  </>
                ) : null}
              </motion.span>
            ))}
          </h1>
          <motion.p {...rise(0.4)} className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-ivory md:mt-6 md:text-lg md:text-quiet">
            Weighing equipment from Duttawadi, Nagpur. Start with the listed products, or with the services that match a scale to the job.
          </motion.p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <motion.div {...rise(0.5)}>
              <Link to="/products" className="press inline-flex items-center justify-center gap-2 bg-amber px-5 py-3.5 text-sm font-semibold text-graphite">
                View products
                <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </motion.div>
            <motion.div {...rise(0.58)}>
              <Link to="/services" className="press inline-flex items-center justify-center gap-2 border border-ivory/40 bg-graphite/80 px-5 py-3.5 text-sm font-semibold text-ivory hover:border-amber hover:text-amber">
                Our services
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between md:mt-12 md:gap-8">
          <motion.a
            href="#introduction"
            style={reduce ? undefined : { opacity: cueOpacity }}
            className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-quiet"
          >
            <span className="scroll-cue-line" aria-hidden="true" />
            Scroll
          </motion.a>
          <motion.aside {...rise(0.66)} className="glass-plate w-full max-w-xs border border-white/15 bg-graphite/90 p-4 md:bg-graphite/55 md:backdrop-blur-md">
            <p className="text-[10px] uppercase tracking-[0.22em] text-amber">Plate CI–01</p>
            <dl className="mt-3 space-y-2 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-metal-400">Place</dt>
                <dd>Duttawadi, Nagpur</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-metal-400">Work</dt>
                <dd className="text-right">Weighing equipment</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-metal-400">Call</dt>
                <dd>{business.phone.display}</dd>
              </div>
            </dl>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}
