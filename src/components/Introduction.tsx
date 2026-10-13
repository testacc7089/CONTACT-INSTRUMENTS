import { Link } from "react-router-dom"
import { Reveal } from "./Reveal"

export function Introduction() {
  return (
    <section id="introduction" className="paper-grid bg-ivory text-graphite">
      <div className="mx-auto max-w-page px-5 py-20 md:px-8 md:py-28 lg:py-32">
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-stone">The business</p>
          <div className="mt-6 grid items-end gap-8 lg:grid-cols-12">
            <h2 className="font-display text-[clamp(2.6rem,5vw,4.6rem)] font-medium leading-[1.02] tracking-[-0.03em] lg:col-span-7">
              Weighing equipment, and the work of choosing it.
            </h2>
            <div className="max-w-md lg:col-span-5 lg:pb-2">
              <p className="text-base leading-relaxed text-stone">
                Contact Instruments, in Duttawadi, Nagpur, supplies weighing machines, weighbridges, and electronic weighing equipment. The product is the instrument. The service is matching it to the load, the place, and the record you need.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-stone">
                This page is the introduction. The products, the services, the applications, and the visit are on their own pages.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link to="/products" className="press inline-flex bg-graphite px-4 py-2.5 text-sm font-semibold text-ivory">
                  Products
                </Link>
                <Link to="/services" className="press inline-flex border border-graphite/20 px-4 py-2.5 text-sm font-semibold">
                  Services
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}