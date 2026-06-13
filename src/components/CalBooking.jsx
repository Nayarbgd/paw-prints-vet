// ============================================================
// CAL.COM BOOKING CONFIGURATION
// ============================================================
// To activate the booking calendar, paste your Cal.com URL here.
//
// Examples:
//   "https://cal.com/your-username"
//   "https://cal.com/your-username/30min"
//   "https://cal.com/pawprints-dubai/appointment"
//
// Future integrations — all configured inside Cal.com dashboard:
//   → Google Calendar  : Settings → Calendars → Connect Google
//   → Mobile alerts    : Settings → Notifications
//   → Webhooks         : Settings → Developer → Webhooks (add your endpoint)
//   → n8n              : Use webhook URL from Cal.com as n8n trigger
//   → WhatsApp notify  : Cal.com webhook → n8n → WhatsApp Business API
// ============================================================
const CAL_BOOKING_URL = "";

export default function CalBooking() {
  return (
    <div className="cal-booking-card">

      <div className="cal-booking-header">
        <h3>Book an Appointment</h3>
        <p className="cal-booking-subtitle">Choose a convenient date and time for your visit.</p>
      </div>

      <div className="cal-booking-emergency">
        <span className="cal-emergency-icon">🚨</span>
        <p>
          For emergencies, please call{' '}
          <a href="tel:0544337908">054 433 7908</a>{' '}
          immediately instead of booking online. We are available 24/7.
        </p>
      </div>

      <div className="cal-iframe-container">
        {CAL_BOOKING_URL ? (
          /*
           * Cal.com embed iframe.
           * Replace CAL_BOOKING_URL above with your Cal.com link.
           * The iframe automatically renders the full booking calendar.
           */
          <iframe
            src={CAL_BOOKING_URL}
            title="Book an Appointment — Paw Prints Veterinary Clinic"
            frameBorder="0"
            scrolling="no"
            allowFullScreen
          />
        ) : (
          /* Shown until CAL_BOOKING_URL is configured */
          <div className="cal-placeholder">
            <div className="cal-placeholder-icon">📅</div>
            <h4>Online Booking Coming Soon</h4>
            <p>Our online calendar is being set up. In the meantime, book directly via call or WhatsApp — we confirm instantly.</p>
            <div className="cal-placeholder-actions">
              <a href="tel:0544337908" className="btn btn-primary">📞 Call 054 433 7908</a>
              <a href="https://wa.me/971544337908" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">💬 WhatsApp Us</a>
            </div>
          </div>
        )}
      </div>

      <div className="cal-booking-footer">
        <p>Prefer to reach us directly?</p>
        <div className="cal-footer-buttons">
          <a href="tel:0544337908" className="btn btn-dark" style={{ padding: '10px 20px', fontSize: '0.85rem' }}>📞 Call Now</a>
          <a href="https://wa.me/971544337908" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{ padding: '10px 20px', fontSize: '0.85rem' }}>💬 WhatsApp Chat</a>
        </div>
      </div>

    </div>
  )
}
