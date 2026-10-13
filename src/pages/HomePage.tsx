import { Explore } from "../components/Explore"
import { Hero } from "../components/Hero"
import { Introduction } from "../components/Introduction"
import { usePageTitle } from "./usePageTitle"

export function HomePage() {
  usePageTitle()
  return (
    <main id="main">
      <Hero />
      <Introduction />
      <Explore />
    </main>
  )
}
