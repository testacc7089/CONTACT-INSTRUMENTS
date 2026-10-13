import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ProductCatalog } from "../components/ProductCatalog"
import { loadCatalog, type Catalog } from "../data/catalog"
import { usePageTitle } from "./usePageTitle"

export function ProductsPage() {
  usePageTitle("Products")
  const [catalog, setCatalog] = useState<Catalog | null>(null)
  const [error, setError] = useState("")

  useEffect(() => {
    let active = true
    loadCatalog()
      .then((data) => {
        if (active) setCatalog(data)
      })
      .catch(() => {
        if (active) setError("The product list could not be loaded. Refresh the page, or call the team.")
      })
    return () => {
      active = false
    }
  }, [])

  return (
    <main id="main" className="bg-graphite pb-28 pt-28 text-ivory md:pb-20 md:pt-32">
      <div className="mx-auto max-w-page px-5 md:px-8">
        <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-metal-400">Listed equipment</p>
        <div className="mt-4 grid gap-6 lg:grid-cols-12">
          <h1 className="font-display text-[clamp(2.6rem,5vw,4.6rem)] font-medium leading-[1.02] tracking-[-0.03em] lg:col-span-7">
            Products on the published list.
          </h1>
          <p className="max-w-md text-sm leading-relaxed text-quiet md:text-base lg:col-span-5">
            These are the weighing products Contact Instruments has published on its trade listing. Prices and specifications can change. Ask before you treat a figure as current.
          </p>
        </div>
        {catalog?.sourceNote ? (
          <p className="mt-6 max-w-3xl text-xs leading-relaxed text-metal-400">
            {catalog.sourceNote}{" "}
            {catalog.sourceUrl ? (
              <a href={catalog.sourceUrl} className="link-line text-quiet" target="_blank" rel="noopener noreferrer">
                View the source listing
              </a>
            ) : null}
          </p>
        ) : null}

        <div className="mt-10">
          {error ? (
            <p className="border border-white/15 px-5 py-8 text-sm text-quiet" role="alert">
              {error}
            </p>
          ) : null}
          {!catalog && !error ? (
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3" aria-hidden="true">
              {Array.from({ length: 6 }, (_, index) => (
                <div key={index} className="h-80 animate-pulse border border-white/10 bg-obsidian" />
              ))}
            </div>
          ) : null}
          {catalog ? <ProductCatalog catalog={catalog} /> : null}
        </div>
        <p className="mt-10 text-sm text-quiet">
          <Link to="/" className="link-line">
            Back to the introduction
          </Link>
        </p>
      </div>
    </main>
  )
}
