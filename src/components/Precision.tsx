import { photos, selectionPoints } from "../data/content"
import { Reveal } from "./Reveal"

export function Precision() {
  return (
    <section id="precision" className="bg-ivory text-graphite">
      <div className="mx-auto grid max-w-page lg:grid-cols-2">
        <div className="flex flex-col justify-center px-5 py-20 md:px-8 md:py-28 lg:py-32 lg:pr-16">
          <Reveal>
            <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-stone">
              Selection
            </p>
            <h2 className="mt-6 font-display text-[clamp(2.5rem,4.6vw,4.4rem)] font-medium leading-[1.02] tracking-[-0.03em]">
              The right scale is a decision.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-stone">
              A suitable weighing setup fits the load, the way the work moves,
              and the record you need to keep. That is a practical choice. It
              is not a guarantee printed on a box.
            </p>
          </Reveal>
          <ol className="mt-12 border-t border-graphite/15">
            {selectionPoints.map((point) => (
              <li key={point.index} className="border-b border-graphite/15 py-5">
                <p className="flex items-baseline gap-4">
                  <span className="text-xs tabular-nums tracking-[0.16em] text-stone">{point.index}</span>
                  <span className="font-display text-2xl">{point.title}</span>
                </p>
                <p className="mt-2 pl-10 text-sm leading-relaxed text-stone">{point.text}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className="media-zoom relative min-h-[420px] overflow-hidden lg:min-h-full">
          <img
            src={photos.platform.src}
            alt={photos.platform.alt}
            width={photos.platform.width}
            height={photos.platform.height}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-[center_72%]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-graphite/60 via-transparent to-graphite/15" />
          <p className="absolute bottom-5 left-5 right-5 text-[11px] uppercase tracking-[0.18em] text-ivory">
            Graduated beam on a platform scale. A reference photograph, not a listed model.
          </p>
        </div>
      </div>
    </section>
  )
}
