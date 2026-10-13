import { useEffect } from "react"

const base = "Contact Instruments | Weighing Equipment in Nagpur"

export function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} | Contact Instruments` : base
    return () => {
      document.title = base
    }
  }, [title])
}
