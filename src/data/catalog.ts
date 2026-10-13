export type ProductImage = {
  src: string
  alt: string
  reference?: boolean
}

export type ProductSpec = {
  label: string
  value: string
}

export type Product = {
  slug: string
  name: string
  category: string
  summary: string
  priceInr: number | null
  priceLabel: string
  moq: string | null
  brand: string | null
  specs: ProductSpec[]
  images: ProductImage[]
}

export type Catalog = {
  sourceNote: string
  sourceUrl: string
  products: Product[]
}

let catalogRequest: Promise<Catalog> | null = null

function isProduct(value: unknown): value is Product {
  if (!value || typeof value !== "object") return false
  const product = value as Product
  return (
    typeof product.slug === "string" &&
    typeof product.name === "string" &&
    typeof product.category === "string" &&
    typeof product.summary === "string" &&
    typeof product.priceLabel === "string" &&
    (product.priceInr === null || typeof product.priceInr === "number") &&
    Array.isArray(product.specs) &&
    Array.isArray(product.images)
  )
}

export function loadCatalog(): Promise<Catalog> {
  if (!catalogRequest) {
    catalogRequest = fetch("/data/products.json")
      .then((response) => {
        if (!response.ok) throw new Error("The product list could not be loaded.")
        return response.json() as Promise<unknown>
      })
      .then((data) => {
        if (!data || typeof data !== "object") {
          throw new Error("The product list is not valid.")
        }
        const record = data as Partial<Catalog>
        const products = Array.isArray(record.products) ? record.products.filter(isProduct) : []
        return {
          sourceNote: typeof record.sourceNote === "string" ? record.sourceNote : "",
          sourceUrl: typeof record.sourceUrl === "string" ? record.sourceUrl : "",
          products,
        }
      })
      .catch((error: unknown) => {
        catalogRequest = null
        throw error
      })
  }
  return catalogRequest
}
