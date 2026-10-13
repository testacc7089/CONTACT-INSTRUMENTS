import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { ArrowLeft, ArrowRight, Phone } from "lucide-react"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { telHref } from "../config/business"
import { loadCatalog, type Product } from "../data/catalog"
import { motionTokens } from "../motion/tokens"

export function ProductDetailPage() {
  const { slug } = useParams()
  const reduce = useReducedMotion()
  const call = telHref()
  const [product, setProduct] = useState<Product | null | undefined>(undefined)
  const [imageIndex, setImageIndex] = useState(0)
  const [failed, setFailed] = useState<Record<number, boolean>>({})

  useEffect(() => {
    let active = true
    setImageIndex(0)
    loadCatalog()
      .then((catalog) => {
        if (!active) return
        setProduct(catalog.products.find((item) => item.slug === slug) ?? null)
      })
      .catch(() => {
        if (active) setProduct(null)
      })
    return () => {
      active = false
    }
  }, [slug])

  if (product === undefined) {
    return (
      <main id="main" className="bg-graphite px-5 pb-28 pt-28 text-ivory">
        <div className="mx-auto h-80 max-w-page animate-pulse bg-obsidian" />
      </main>
    )
  }

  if (!product) {
    return (
      <main id="main" className="bg-graphite px-5 pb-28 pt-32 text-ivory">
        <div className="mx-auto max-w-xl">
          <h1 className="font-display text-4xl">That product is not on the list.</h1>
          <p className="mt-4 text-sm leading-relaxed text-quiet">
            The address does not match a product in the published JSON list.
          </p>
          <Link to="/products" className="press mt-6 inline-flex bg-amber px-4 py-2.5 text-sm font-semibold text-graphite">
            Back to products
          </Link>
        </div>
      </main>
    )
  }

  const images = product.images
  const image = images[imageIndex]
  const showImage = image && !failed[imageIndex]

  function step(direction: number) {
    if (images.length < 2) return
    setImageIndex((current) => (current + direction + images.length) % images.length)
  }

  return (
    <main id="main" className="bg-graphite pb-28 pt-28 text-ivory md:pt-32">
      <div className="mx-auto grid max-w-page gap-10 px-5 md:px-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Link to="/products" className="link-line inline-flex items-center gap-2 text-sm text-quiet">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All listed products
          </Link>
          <div
            className="relative mt-5 overflow-hidden bg-obsidian outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber"
            tabIndex={images.length > 1 ? 0 : undefined}
            aria-label={images.length > 1 ? "Product photographs" : undefined}
            onKeyDown={(event) => {
              if (event.key === "ArrowLeft") {
                event.preventDefault()
                step(-1)
              }
              if (event.key === "ArrowRight") {
                event.preventDefault()
                step(1)
              }
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={showImage ? image.src : "fallback"}
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={reduce ? undefined : { opacity: 0 }}
                transition={{ duration: motionTokens.duration.fast }}
                className="aspect-[4/3]"
              >
                {showImage ? (
                  <img
                    src={image.src}
                    alt={image.alt}
                    width={1600}
                    height={1200}
                    className="h-full w-full object-cover"
                    onError={() => setFailed((current) => ({ ...current, [imageIndex]: true }))}
                  />
                ) : (
                  <div className="flex h-full flex-col justify-between p-8">
                    <span className="text-[11px] uppercase tracking-[0.22em] text-amber">{product.category}</span>
                    <span className="font-display text-6xl italic">kg</span>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
            {images.length > 1 ? (
              <div className="absolute bottom-4 right-4 flex gap-2">
                <button type="button" onClick={() => step(-1)} className="press bg-graphite/85 p-2 text-ivory" aria-label="Previous photograph">
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button type="button" onClick={() => step(1)} className="press bg-graphite/85 p-2 text-ivory" aria-label="Next photograph">
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            ) : null}
            {images.length > 1 ? (
              <p className="sr-only" aria-live="polite">
                Photograph {imageIndex + 1} of {images.length}
              </p>
            ) : null}
          </div>
          {image?.reference && showImage ? (
            <p className="mt-3 text-xs text-metal-400">Reference photograph. It is not a picture of this exact model.</p>
          ) : null}
        </div>

        <div className="lg:col-span-5">
          <p className="text-[11px] uppercase tracking-[0.22em] text-amber">{product.category}</p>
          <h1 className="mt-3 font-display text-4xl tracking-[-0.03em] md:text-5xl">{product.name}</h1>
          <p className="mt-4 text-base leading-relaxed text-quiet">{product.summary}</p>
          <p className="mt-6 font-display text-3xl">{product.priceLabel}</p>
          {product.moq ? <p className="mt-2 text-sm text-metal-400">Minimum order listed: {product.moq}</p> : null}
          {product.brand ? <p className="mt-1 text-sm text-metal-400">Brand on the listing: {product.brand}</p> : null}

          <dl className="mt-8 border-t border-white/10">
            {product.specs.map((spec) => (
              <div key={spec.label} className="grid grid-cols-2 gap-4 border-b border-white/10 py-3 text-sm">
                <dt className="text-metal-400">{spec.label}</dt>
                <dd>{spec.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {call ? (
              <a href={call} className="press inline-flex items-center justify-center gap-2 bg-amber px-5 py-3 text-sm font-semibold text-graphite">
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call about this
              </a>
            ) : null}
            <Link to="/contact" className="press inline-flex items-center justify-center border border-ivory/30 px-5 py-3 text-sm font-semibold">
              Contact details
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
