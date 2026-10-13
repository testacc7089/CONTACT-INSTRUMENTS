import { About } from "../components/About"
import { Explore } from "../components/Explore"
import { Reviews } from "../components/Reviews"
import { usePageTitle } from "./usePageTitle"

export function AboutPage() {
  usePageTitle("About")
  return (
    <main id="main">
      <About lead />
      <Reviews />
      <Explore current="/about" />
    </main>
  )
}
