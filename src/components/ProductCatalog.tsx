import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { Search, X } from "lucide-react"
import { useMemo, useState } from "react"
import type { Catalog } from "../data/catalog"
import { motionTokens } from "../motion/tokens"
import { ProductCard } from "./ProductCard"

type SortKey = "listed" | "price-asc" | "price-desc" | "name"

const sorts: { id: SortKey; label: string }[] = [
  { id: "listed", label: "As listed" },
  { id: "price-asc", label: "Price, low to high" },
  { id: "price-desc", label: "Price, high to low" },
  { id: "name", label: "Name" },
]

type Props = {
  catalog: Catalog
}

export function ProductCatalog({ catalog }: Props) {
  const reduce = useReducedMotion()
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState("All")
  const [sort, setSort] = useState<SortKey>("listed")
  const normalizedQuery = query.trim().toLowerCase()

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(catalog.products.map((product) => product.category)))],
    [catalog.products],
  )

  const visible = useMemo(() => {
    const filtered = catalog.products.filter((product) => {
      const inCategory = category === "All" || product.category === category
      if (!inCategory) return false
      if (!normalizedQuery) return true
      const haystack = [
        product.name,
        product.category,
        product.brand ?? "",
        product.summary,
        ...product.specs.map((spec) => `${spec.label} ${spec.value}`),
      ]
        .join(" ")
        .toLowerCase()
      return haystack.includes(normalizedQuery)
    })
    const ranked = [...filtered]
    if (sort === "name") ranked.sort((a, b) => a.name.localeCompare(b.name))
    if (sort === "price-asc") ranked.sort((a, b) => (a.priceInr ?? Number.POSITIVE_INFINITY) - (b.priceInr ?? Number.POSITIVE_INFINITY))
    if (sort === "price-desc") ranked.sort((a, b) => (b.priceInr ?? -1) - (a.priceInr ?? -1))
    return ranked
  }, [catalog.products, category, normalizedQuery, sort])

  const filtersActive = category !== "All" || query.trim().length > 0 || sort !== "listed"

  function clearFilters() {
    setQuery("")
    setCategory("All")
    setSort("listed")
  }

  return (
    <div>
      <div className="flex flex-col gap-4 border border-white/10 bg-obsidian/80 p-4 md:p-5">
        <label className="relative block">
          <span className="sr-only">Search listed products</span>
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-metal-400" aria-hidden="true" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by name, brand, or capacity"
            className="w-full border border-white/15 bg-graphite py-3 pl-10 pr-10 text-sm text-ivory outline-none placeholder:text-metal-400 focus-visible:border-amber"
          />
          {query ? (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="absolute right-2 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center text-quiet"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          ) : null}
        </label>

        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          {categories.map((item) => {
            const selected = item === category
            return (
              <button
                key={item}
                type="button"
                aria-pressed={selected}
                onClick={() => setCategory(item)}
                className={`press border px-3 py-2 text-xs font-semibold tracking-wide ${
                  selected ? "border-amber bg-amber text-graphite" : "border-white/15 text-ivory hover:border-amber/70"
                }`}
              >
                {item}
              </button>
            )
          })}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <label className="flex items-center gap-3 text-sm text-quiet">
            Sort
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value as SortKey)}
              className="border border-white/15 bg-graphite px-3 py-2 text-sm text-ivory"
            >
              {sorts.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.label}
                </option>
              ))}
            </select>
          </label>
          <p className="text-sm text-metal-400" aria-live="polite">
            {visible.length} listed {visible.length === 1 ? "product" : "products"}
          </p>
        </div>

        {filtersActive ? (
          <button type="button" onClick={clearFilters} className="link-line self-start text-sm font-semibold text-amber">
            Clear filters
          </button>
        ) : null}
      </div>

      {visible.length === 0 ? (
        <div className="mt-8 border border-dashed border-white/20 px-6 py-16 text-center">
          <p className="font-display text-3xl">Nothing matches.</p>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-quiet">
            No listed product fits that search. Clear the filters, or call the team and describe the load.
          </p>
          <button type="button" onClick={clearFilters} className="press mt-6 bg-amber px-4 py-2.5 text-sm font-semibold text-graphite">
            Show the full list
          </button>
        </div>
      ) : (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence initial={false}>
            {visible.map((product) => (
              <motion.div
                key={product.slug}
                initial={reduce ? false : { opacity: 1, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: motionTokens.duration.fast, ease: motionTokens.ease }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  )
}
