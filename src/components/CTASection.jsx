import { Link } from 'react-router-dom'

export default function CTASection({
  title = 'Ready to Book an Appointment?',
  subtitle = 'Our clinic is open 24/7, including weekends and holidays. Your pet\'s health is our priority.',
  primaryText = 'Book Appointment',
  primaryTo = '/contact',
  showCall = true,
  showWhatsApp = true,
}) {
  return (
    <section className="cta-section">
      <div className="container">
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <div className="cta-buttons">
          <Link to={primaryTo} className="btn btn-primary" style={{ fontSize: '1rem', padding: '16px 36px' }}>
            {primaryText}
          </Link>
          {showCall && (
            <a href="tel:0544337908" className="btn btn-secondary" style={{ fontSize: '1rem', padding: '16px 36px' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Call 054 433 7908
            </a>
          )}
          {showWhatsApp && (
            <a href="https://wa.me/971544337908" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{ fontSize: '1rem', padding: '16px 36px' }}>
              💬 WhatsApp Chat
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
