import { Link } from 'react-router-dom'

const PawLogo = () => (
  <svg viewBox="0 0 100 100">
    <path d="M50,90 C28,90 10,72 10,50 C10,28 28,10 50,10 C72,10 90,28 90,50 C90,72 72,90 50,90 Z" fill="none" stroke="white" strokeWidth="4"/>
    <path d="M35,38 C39,38 42,35 42,31 C42,27 39,24 35,24 C31,24 28,27 28,31 C28,35 31,38 35,38 Z M65,38 C69,38 72,35 72,31 C72,27 69,24 65,24 C61,24 58,27 58,31 C58,35 61,38 65,38 Z M43,51 C46,51 49,48 49,44 C49,40 46,37 43,37 C40,37 37,40 37,44 C37,48 40,51 43,51 Z M57,51 C60,51 63,48 63,44 C63,40 60,37 57,37 C54,37 51,40 51,44 C51,48 54,51 57,51 Z M50,56 C44,56 38,60 35,66 C33,70 36,75 41,75 C43,75 45,74 47,72 C49,70 51,70 53,72 C55,74 57,75 59,75 C64,75 67,70 65,66 C62,60 56,56 50,56 Z" fill="white"/>
  </svg>
)

const days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']

export default function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="logo" style={{ marginBottom: 20 }}>
            <div className="logo-badge"><PawLogo /></div>
            <div className="logo-text">Paw<span>Prints</span></div>
          </Link>
          <p>Your primary veterinary care asset in Arjan, Dubai. Providing round-the-clock emergency medical diagnostics, dental scaling, surgeries, and vaccine schedules for cats and dogs.</p>
          <div className="social-links">
            <a href="https://instagram.com/pawprints.vet" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
              <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2" fill="none"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="currentColor" strokeWidth="2" fill="none"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/services">Our Services</Link></li>
            <li><Link to="/reviews">Patient Reviews</Link></li>
            <li><Link to="/our-vets">Our Team</Link></li>
            <li><Link to="/contact">Book Appointment</Link></li>
            <li><a href="tel:0544337908">054 433 7908</a></li>
          </ul>
        </div>

        <div>
          <h4 className="footer-title">Working Hours</h4>
          <ul className="footer-hours-list">
            {days.map(d => (
              <li key={d}><span>{d}</span><span className="hours-highlight">24 Hours</span></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="footer-title">Contact Clinic</h4>
          <ul className="footer-links" style={{ fontSize: '0.9rem' }}>
            <li style={{ display:'flex', gap:8, alignItems:'flex-start' }}>
              <span>📍</span>
              <span>Arjan, Nas 2 Building, Shop 1 - Dubai (366P+2X)</span>
            </li>
            <li style={{ display:'flex', gap:8, alignItems:'center' }}>
              <span>📞</span>
              <a href="tel:0544337908">054 433 7908</a>
            </li>
            <li style={{ display:'flex', gap:8, alignItems:'center' }}>
              <span>✉️</span>
              <a href="mailto:paw.print.vetclinic@gmail.com">paw.print.vetclinic@gmail.com</a>
            </li>
            <li style={{ display:'flex', gap:8, alignItems:'center' }}>
              <span>📸</span>
              <a href="https://instagram.com/pawprints.vet" target="_blank" rel="noopener noreferrer">@pawprints.vet</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>&copy; 2026 Paw Prints Veterinary Clinic. All rights reserved.</p>
        <p>Arjan, Dubai, UAE. Emergency veterinary care available 24/7.</p>
      </div>
    </footer>
  )
}
