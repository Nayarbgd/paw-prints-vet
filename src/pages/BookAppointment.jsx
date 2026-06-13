import { useEffect } from 'react'
import SEOHead from '../components/SEOHead'

const CAL_LINK = "brayan-gutierrez-5d3ijh/veterinary-appointment"

function initCal() {
  ;(function (C, A, L) {
    let p = function (a, ar) { a.q.push(ar) }
    let d = C.document
    C.Cal = C.Cal || function () {
      let cal = C.Cal
      let ar = arguments
      if (!cal.loaded) {
        cal.ns = {}
        cal.q = cal.q || []
        d.head.appendChild(d.createElement("script")).src = A
        cal.loaded = true
      }
      if (ar[0] === L) {
        const api = function () { p(api, arguments) }
        const namespace = ar[1]
        api.q = api.q || []
        if (typeof namespace === "string") {
          Cal.ns[namespace] = Cal.ns[namespace] || api
          p(Cal.ns[namespace], ar)
          return
        }
        p(cal, ar)
        return
      }
      p(cal, ar)
    }
  })(window, "https://app.cal.com/embed/embed.js", "init")

  Cal("init", { origin: "https://cal.com" })
  Cal("inline", {
    elementOrSelector: "#cal-booking-container",
    calLink: CAL_LINK,
    layout: "month_view"
  })
  Cal("ui", {
    cssVarsPerTheme: {
      light: { "cal-brand": "#E8645A" },
      dark:  { "cal-brand": "#E8645A" }
    },
    hideEventTypeDetails: false,
    layout: "month_view"
  })
}

export default function BookAppointment() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })

    const container = document.getElementById('cal-booking-container')
    if (container && container.querySelector('iframe')) {
      return
    }

    initCal()
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

      {/* ── Cal.com Embed (auto-resizes — no scroll capture on mobile) ── */}
      <section className="book-cal-section">
        <div id="cal-booking-container" className="book-cal-embed" />
      </section>

      {/* ── Direct Contact ── */}
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
