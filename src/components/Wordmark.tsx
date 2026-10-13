type Props = {
  tone?: "light" | "dark"
}

export function Mark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <circle cx="16" cy="16" r="10" fill="none" stroke="currentColor" strokeWidth="1" />
      <path d="M16 4.5v23M4.5 16H16" fill="none" stroke="currentColor" strokeWidth="1" />
      <path d="M16 16h8.5" fill="none" stroke="#F5B544" strokeWidth="1.4" />
      <circle cx="16" cy="16" r="1.2" fill="#F5B544" />
    </svg>
  )
}

export function Wordmark({ tone = "light" }: Props) {
  const ink = tone === "light" ? "text-ivory" : "text-graphite"
  const mute = tone === "light" ? "text-metal-400" : "text-stone"
  return (
    <span className={`inline-flex items-center gap-3 ${ink}`}>
      <Mark />
      <span className="flex flex-col leading-none">
        <span className="font-sans text-[12px] font-semibold tracking-[0.24em] sm:text-[13px]">
          CONTACT
        </span>
        <span className={`mt-1 font-sans text-[9px] font-medium tracking-[0.32em] sm:text-[10px] ${mute}`}>
          INSTRUMENTS
        </span>
      </span>
    </span>
  )
}
