import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMobileOpen(false)

  const navLinkClass = ({ isActive }) => isActive ? 'active' : ''

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="container nav-wrapper">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src="/logo.png" alt="Paw Prints Veterinary Clinic" className="logo-img" />
        </Link>

        <ul className={`nav-links${mobileOpen ? ' mobile-active' : ''}`}>
          <li><NavLink to="/services" className={navLinkClass} onClick={closeMenu}>Services</NavLink></li>
          <li><NavLink to="/reviews" className={navLinkClass} onClick={closeMenu}>Reviews</NavLink></li>
          <li><NavLink to="/our-vets" className={navLinkClass} onClick={closeMenu}>Our Vets</NavLink></li>
          <li><NavLink to="/emergency" className={navLinkClass} onClick={closeMenu} style={({ isActive }) => ({ color: isActive ? 'var(--color-primary)' : 'var(--color-primary)', opacity: isActive ? 1 : 0.9 })}>🚨 Emergency 24/7</NavLink></li>
          <li><NavLink to="/contact" className={navLinkClass} onClick={closeMenu}>Contact & Map</NavLink></li>
        </ul>

        <div className="nav-cta">
          <Link to="/book-appointment" className="btn btn-primary header-btn" onClick={closeMenu}>Book Appointment</Link>
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
