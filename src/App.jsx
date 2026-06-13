import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import Home from './pages/Home'
import Services from './pages/Services'
import Reviews from './pages/Reviews'
import OurVets from './pages/OurVets'
import Contact from './pages/Contact'
import BookAppointment from './pages/BookAppointment'
import GeneralCheckups from './pages/services/GeneralCheckups'
import Vaccinations from './pages/services/Vaccinations'
import EmergencyCare from './pages/services/EmergencyCare'
import DentalCare from './pages/services/DentalCare'
import LabTests from './pages/services/LabTests'
import Nutrition from './pages/services/Nutrition'
import Grooming from './pages/services/Grooming'
import Surgery from './pages/services/Surgery'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const timer = setTimeout(() => {
        const el = document.getElementById(hash.replace('#', ''))
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 80)
      return () => clearTimeout(timer)
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [pathname, hash])

  return null
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/general-checkups" element={<GeneralCheckups />} />
          <Route path="/services/vaccinations" element={<Vaccinations />} />
          <Route path="/services/emergency-care" element={<EmergencyCare />} />
          <Route path="/services/dental-care" element={<DentalCare />} />
          <Route path="/services/lab-tests" element={<LabTests />} />
          <Route path="/services/nutrition" element={<Nutrition />} />
          <Route path="/services/grooming" element={<Grooming />} />
          <Route path="/services/surgery" element={<Surgery />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/our-vets" element={<OurVets />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AppRoutes />
    </BrowserRouter>
  )
}
