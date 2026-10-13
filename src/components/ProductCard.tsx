import { ArrowUpRight } from "lucide-react"
import { useRef, useState, type PointerEvent } from "react"
import { Link } from "react-router-dom"
import type { Product } from "../data/catalog"

type Props = {
  product: Product
}

export function ProductCard({ product }: Props) {
  const face = useRef<HTMLDivElement>(null)
  const [imageFailed, setImageFailed] = useState(false)
  const image = product.images[0]
  const showImage = image && !imageFailed

  function onPointerMove(event: PointerEvent<HTMLElement>) {
    if (event.pointerType !== "mouse" || !face.current) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - bounds.left) / bounds.width - 0.5
    const y = (event.clientY - bounds.top) / bounds.height - 0.5
    face.current.style.setProperty("--rx", `${(-y * 8).toFixed(2)}deg`)
    face.current.style.setProperty("--ry", `${(x * 10).toFixed(2)}deg`)
    face.current.style.setProperty("--gx", `${(50 + x * 70).toFixed(0)}%`)
  }

  function resetTilt() {
    if (!face.current) return
    face.current.style.setProperty("--rx", "0deg")
    face.current.style.setProperty("--ry", "0deg")
    face.current.style.setProperty("--gx", "50%")
  }

  return (
    <article onPointerMove={onPointerMove} onPointerLeave={resetTilt} className="group h-full [perspective:900px]">
      <div
        ref={face}
        className="tilt-face relative flex h-full flex-col border border-white/10 bg-obsidian shadow-[0_18px_40px_rgba(0,0,0,0.18)] hover:shadow-[0_24px_50px_rgba(0,0,0,0.32)]"
      >
        <div aria-hidden="true" className="tilt-glare pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <Link to={`/products/${product.slug}`} className="relative block overflow-hidden">
          <div className="media-zoom aspect-[4/3] bg-graphite">
            {showImage ? (
              <img
                src={image.src}
                alt={image.alt}
                width={1200}
                height={900}
                loading="lazy"
                decoding="async"
                onError={() => setImageFailed(true)}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full flex-col justify-between p-5">
                <span className="text-[10px] uppercase tracking-[0.22em] text-amber">{product.category}</span>
                <span className="font-display text-4xl italic text-ivory/80">kg</span>
              </div>
            )}
          </div>
          {image?.reference && showImage ? (
            <span className="absolute bottom-3 left-3 bg-graphite/80 px-2 py-1 text-[10px] uppercase tracking-[0.16em] text-ivory">
              Reference photo
            </span>
          ) : null}
        </Link>
        <div className="flex flex-1 flex-col p-5">
          <p className="text-[11px] uppercase tracking-[0.18em] text-metal-400">{product.category}</p>
          <h2 className="mt-2 font-display text-2xl tracking-[-0.03em]">
            <Link to={`/products/${product.slug}`} className="link-line">
              {product.name}
            </Link>
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-quiet">{product.summary}</p>
          <p className="mt-4 text-sm font-semibold text-ivory">{product.priceLabel}</p>
          <Link to="/contact" className="press group/cta mt-5 inline-flex items-center gap-2 self-start bg-amber px-4 py-2.5 text-sm font-semibold text-graphite">
            Ask about this
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  )
}
