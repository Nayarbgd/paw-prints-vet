import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

const PawLogo = () => (
  <svg viewBox="0 0 100 100">
    <path d="M50,90 C28,90 10,72 10,50 C10,28 28,10 50,10 C72,10 90,28 90,50 C90,72 72,90 50,90 Z" fill="none" stroke="white" strokeWidth="4"/>
    <path d="M35,38 C39,38 42,35 42,31 C42,27 39,24 35,24 C31,24 28,27 28,31 C28,35 31,38 35,38 Z M65,38 C69,38 72,35 72,31 C72,27 69,24 65,24 C61,24 58,27 58,31 C58,35 61,38 65,38 Z M43,51 C46,51 49,48 49,44 C49,40 46,37 43,37 C40,37 37,40 37,44 C37,48 40,51 43,51 Z M57,51 C60,51 63,48 63,44 C63,40 60,37 57,37 C54,37 51,40 51,44 C51,48 54,51 57,51 Z M50,56 C44,56 38,60 35,66 C33,70 36,75 41,75 C43,75 45,74 47,72 C49,70 51,70 53,72 C55,74 57,75 59,75 C64,75 67,70 65,66 C62,60 56,56 50,56 Z" fill="white"/>
  </svg>
)

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMobileOpen(false)

  const navLinkClass = ({ isActive }) => isActive ? 'active' : ''

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="container nav-wrapper">
        <Link to="/" className="logo" onClick={closeMenu}>
          <div className="logo-badge"><PawLogo /></div>
          <div className="logo-text">Paw<span>Prints</span></div>
        </Link>

        <ul className={`nav-links${mobileOpen ? ' mobile-active' : ''}`}>
          <li><NavLink to="/services" className={navLinkClass} onClick={closeMenu}>Services</NavLink></li>
          <li><NavLink to="/reviews" className={navLinkClass} onClick={closeMenu}>Reviews</NavLink></li>
          <li><NavLink to="/our-vets" className={navLinkClass} onClick={closeMenu}>Our Vets</NavLink></li>
          <li><NavLink to="/contact" className={navLinkClass} onClick={closeMenu}>Contact & Map</NavLink></li>
        </ul>

        <div className="nav-cta">
          <Link to="/contact" className="btn btn-primary header-btn">Book Appointment</Link>
          <button
            className={`mobile-toggle${mobileOpen ? ' active' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Navigation"
          >
            <span/><span/><span/>
          </button>
        </div>
      </div>
    </header>
  )
}
