import { useEffect } from "react"
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import { Footer } from "./components/Footer"
import { MobileDock } from "./components/MobileDock"
import { Nav } from "./components/Nav"
import { AboutPage } from "./pages/AboutPage"
import { ApplicationsPage } from "./pages/ApplicationsPage"
import { ContactPage } from "./pages/ContactPage"
import { HomePage } from "./pages/HomePage"
import { ProductDetailPage } from "./pages/ProductDetailPage"
import { ProductsPage } from "./pages/ProductsPage"
import { ServicesPage } from "./pages/ServicesPage"

function ScrollManager() {
  const location = useLocation()
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1)
      const node = document.getElementById(id)
      if (node) {
        node.scrollIntoView()
        return
      }
    }
    window.scrollTo(0, 0)
  }, [location.pathname, location.hash])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/applications" element={<ApplicationsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:slug" element={<ProductDetailPage />} />
      </Routes>
      <Footer />
      <MobileDock />
    </BrowserRouter>
  )
}
