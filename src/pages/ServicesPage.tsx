import { Link } from "react-router-dom"
import { Explore } from "../components/Explore"
import { Precision } from "../components/Precision"
import { Solutions } from "../components/Solutions"
import { services } from "../data/content"
import { usePageTitle } from "./usePageTitle"

export function ServicesPage() {
  usePageTitle("Services")
  return (
    <main id="main">
      <section className="bg-graphite pb-16 pt-28 text-ivory md:pb-20 md:pt-36">
        <div className="mx-auto max-w-page px-5 md:px-8">
          <p className="flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.26em] text-metal-400">
            <span className="measure-line" aria-hidden="true" />
            Services
          </p>
          <div className="mt-6 grid gap-8 lg:grid-cols-12">
            <h1 className="font-display text-[clamp(2.6rem,5vw,4.8rem)] font-medium leading-[1.02] tracking-[-0.03em] lg:col-span-7">
              Products, matched to the job.
            </h1>
            <p className="max-w-md text-sm leading-relaxed text-quiet md:text-base lg:col-span-5 lg:pt-3">
              Contact Instruments works with weighing equipment. The service is getting the right machine in front of the right load, then confirming what the site still needs.
            </p>
          </div>
          <ol className="mt-14 grid gap-px bg-white/10 md:grid-cols-3">
            {services.map((item) => (
              <li key={item.index} className="bg-graphite p-6 md:p-8">
                <p className="text-[11px] tabular-nums tracking-[0.2em] text-amber">{item.index}</p>
                <h2 className="mt-4 font-display text-3xl tracking-[-0.03em]">{item.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-quiet">{item.text}</p>
              </li>
            ))}
          </ol>
          <Link to="/products" className="press mt-10 inline-flex bg-amber px-5 py-3 text-sm font-semibold text-graphite">
            See the listed products
          </Link>
        </div>
      </section>
      <Solutions />
      <Precision />
      <Explore current="/services" />
    </main>
  )
}
