import { Link } from 'react-router-dom'

const days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']

export default function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="logo" style={{ marginBottom: 20 }}>
            <img src="/logo.png" alt="Paw Prints Veterinary Clinic" className="logo-img" />
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
