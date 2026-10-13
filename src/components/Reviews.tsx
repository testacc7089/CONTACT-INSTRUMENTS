import { ArrowUpRight } from "lucide-react"
import { googleHref } from "../config/business"

export function Reviews() {
  const google = googleHref()
  return (
    <section id="reviews" className="border-y border-white/10 bg-graphite text-ivory" aria-labelledby="reviews-heading">
      <div className="mx-auto flex max-w-page flex-col gap-6 px-5 py-14 md:flex-row md:items-end md:justify-between md:px-8 md:py-16">
        <div className="max-w-xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-metal-400">
            Customer comments
          </p>
          <h2 id="reviews-heading" className="mt-4 font-display text-3xl tracking-[-0.03em] md:text-4xl">
            Read the current reviews on Google.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-quiet md:text-base">
            Comments from customers live on the Google listing, and they
            change. This page does not repeat them. Check the live listing
            before you rely on a rating.
          </p>
        </div>
        <a
          href={google.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-ivory/30 px-5 py-3 text-sm font-semibold text-ivory transition-colors hover:border-amber hover:text-amber"
        >
          {google.label}
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
