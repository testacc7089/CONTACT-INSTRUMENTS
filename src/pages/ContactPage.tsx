import { Contact } from "../components/Contact"
import { Explore } from "../components/Explore"
import { Faq } from "../components/Faq"
import { usePageTitle } from "./usePageTitle"

export function ContactPage() {
  usePageTitle("Contact")
  return (
    <main id="main">
      <Contact lead />
      <Faq />
      <Explore current="/contact" />
    </main>
  )
}