import { useEffect } from 'react'
import SEOHead from '../components/SEOHead'

// ============================================================
// CAL.COM BOOKING URL
// To update: replace the URL below with a new Cal.com booking link.
//
// Future integrations (all via Cal.com dashboard):
//   → Google Calendar  : Settings → Calendars → Connect Google
//   → Mobile alerts    : Settings → Notifications
//   → Webhooks         : Settings → Developer → Webhooks
//   → n8n automation   : Use Cal.com webhook as n8n trigger
//   → WhatsApp notify  : Cal.com webhook → n8n → WhatsApp Business API
// ============================================================
const CAL_BOOKING_URL = "https://cal.com/brayan-gutierrez-5d3ijh/veterinary-appointment"

export default function BookAppointment() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return (
    <>
      <SEOHead
        title="Book a Vet Appointment | Paw Prints Veterinary Clinic Dubai"
        description="Book your pet's veterinary appointment online at Paw Prints Clinic in Arjan, Dubai. Open 24/7 for cats and dogs. Select a date and time instantly."
      />

      {/* ── Hero ── */}
      <section className="book-page-hero">
        <div className="container">
          <div className="book-page-hero-content">
            <div className="page-hero-badge">📅 Online Booking</div>
            <h1>Book Your Appointment</h1>
            <p className="book-page-subtitle">
              Schedule your pet's visit in less than a minute. Choose a convenient date and time and secure the care your pet deserves.
            </p>
            <div className="book-page-emergency">
              <span>🚨</span>
              <span>
                For emergencies, please{' '}
                <a href="tel:0544337908">call us directly on 054 433 7908</a>{' '}
                instead of booking online — we are available 24/7.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Cal.com Calendar ── */}
      <section className="book-cal-section">
        <div className="book-cal-container">
          <div className="book-cal-wrapper">
            <iframe
              src={CAL_BOOKING_URL}
              title="Book a Veterinary Appointment — Paw Prints Clinic Dubai"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* ── Direct Contact Footer ── */}
      <section className="book-page-footer">
        <div className="container">
          <p className="book-footer-label">Prefer to reach us directly?</p>
          <div className="book-footer-buttons">
            <a href="tel:0544337908" className="btn btn-dark">📞 Call Now</a>
            <a
              href="https://wa.me/971544337908"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              💬 WhatsApp Chat
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
