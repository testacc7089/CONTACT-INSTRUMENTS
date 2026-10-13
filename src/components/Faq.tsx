import { Minus, Plus } from "lucide-react"
import { useId, useState } from "react"
import { faqs } from "../data/content"

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)
  const baseId = useId()

  return (
    <section id="faq" className="bg-ivory text-graphite" aria-labelledby="faq-heading">
      <div className="mx-auto grid max-w-page gap-10 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-stone">
            Questions
          </p>
          <h2 id="faq-heading" className="mt-5 font-display text-4xl tracking-[-0.03em] md:text-5xl">
            Before you call.
          </h2>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-stone">
            Short answers, based on what can be said without inventing a
            specification. Where the right answer depends on the equipment, the
            team confirms it.
          </p>
        </div>
        <div className="border-t border-graphite/15 lg:col-span-8">
          {faqs.map((item, index) => {
            const expanded = open === index
            const panelId = `${baseId}-panel-${index}`
            const buttonId = `${baseId}-button-${index}`
            return (
              <div key={item.question} className="border-b border-graphite/15">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    className="flex w-full items-start justify-between gap-6 py-5 text-left"
                    aria-expanded={expanded}
                    aria-controls={panelId}
                    onClick={() => setOpen(expanded ? null : index)}
                  >
                    <span className="font-sans text-base font-semibold md:text-lg">{item.question}</span>
                    {expanded ? (
                      <Minus className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" />
                    ) : (
                      <Plus className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" />
                    )}
                  </button>
                </h3>
                {expanded ? (
                  <div id={panelId} role="region" aria-labelledby={buttonId} className="pb-5 pr-8">
                    <p className="max-w-2xl text-sm leading-relaxed text-stone md:text-base">{item.answer}</p>
                  </div>
                ) : null}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
