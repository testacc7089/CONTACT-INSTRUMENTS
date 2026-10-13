import { Applications } from "../components/Applications"
import { Explore } from "../components/Explore"
import { usePageTitle } from "./usePageTitle"

export function ApplicationsPage() {
  usePageTitle("Applications")
  return (
    <main id="main">
      <Applications lead />
      <Explore current="/applications" />
    </main>
  )
}
