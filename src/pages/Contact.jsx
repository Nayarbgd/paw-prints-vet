import { useEffect } from 'react'
import SEOHead from '../components/SEOHead'
import PageHero from '../components/PageHero'

const contactItems = [
  {
    icon: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeWidth="2"/><circle cx="12" cy="10" r="3" strokeWidth="2"/></>,
    title: 'Our Address',
    lines: [
      <span key="a">Arjan, Nas 2 Building, Shop 1 — Dubai, UAE</span>,
      <span key="b" style={{ fontSize: '0.85rem', color: 'var(--color-primary)' }}>Plus Code: 366P+2X Dubai</span>,
      <a key="c" href="https://maps.google.com/maps?q=366P%2B2X+Dubai" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 600 }}>Get Directions →</a>
    ]
  },
  {
    icon: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" strokeWidth="2"/>,
    title: 'Phone Number',
    lines: [
      <a key="p" href="tel:0544337908" style={{ fontWeight: 600, fontSize: '1.1rem' }}>054 433 7908</a>,
      <span key="q" style={{ fontSize: '0.85rem', color: '#2ecc71' }}>Available 24/7 for emergencies</span>
    ]
  },
  {
    icon: <><circle cx="12" cy="12" r="10" strokeWidth="2"/><polyline points="12 6 12 12 16 14" strokeWidth="2"/></>,
    title: 'Working Hours',
    lines: [
      <span key="h" style={{ fontWeight: 600, fontSize: '1.05rem' }}>Open 24 Hours / 7 Days a Week</span>,
      <span key="i" style={{ fontSize: '0.85rem', color: 'var(--color-primary)' }}>Including weekends & public holidays</span>
    ]
  },
  {
    icon: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeWidth="2"/><polyline points="22,6 12,13 2,6" strokeWidth="2"/></>,
    title: 'Email',
    lines: [
      <a key="e" href="mailto:paw.print.vetclinic@gmail.com">paw.print.vetclinic@gmail.com</a>
    ]
  },
  {
    icon: <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.449 5.428 0 9.832-4.407 9.835-9.84.002-2.633-1.018-5.107-2.872-6.963C16.381 1.943 13.913.923 11.28.923c-5.434 0-9.843 4.41-9.845 9.845-.001 1.554.437 3.078 1.267 4.498l-.986 3.601 3.684-.967z"/>,
    title: 'WhatsApp',
    lines: [
      <a key="w" href="https://wa.me/971544337908" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-whatsapp)', fontWeight: 600 }}>Chat with us on WhatsApp →</a>
    ]
  },
]

export default function Contact() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal-on-scroll')
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target) } })
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })
    els.forEach(el => { el.classList.remove('revealed'); obs.observe(el) })
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <SEOHead
        title="Contact & Location | Paw Prints Veterinary Clinic Dubai"
        description="Find Paw Prints Veterinary Clinic in Arjan, Dubai. Open 24/7. Call 054 433 7908, WhatsApp us, or get directions to our clinic."
      />
      <PageHero
        badge="Contact & Map"
        title="Find Us in Dubai"
        subtitle="We're located in Arjan and open around the clock — every day of the year, including holidays."
        breadcrumbs={[{ label: 'Contact & Map' }]}
        ctas={[
          { href: 'tel:0544337908', label: '📞 Call 054 433 7908', variant: 'btn-primary' },
          { href: 'https://wa.me/971544337908', label: '💬 WhatsApp Us', variant: 'btn-whatsapp' },
        ]}
        image="/contact-cat.png"
        imageAlt="Cat at Paw Prints Veterinary Clinic Dubai"
      />

      {/* Contact details */}
      <section className="section-padding bg-charcoal">
        <div className="container">

          <div className="contact-page-header reveal-on-scroll">
            <h2>Get in Touch</h2>
            <p>Whether it's a routine checkup or a midnight emergency, our team is always ready for your pet.</p>
          </div>

          <div className="contact-page-grid reveal-on-scroll">
            {contactItems.map((c, i) => (
              <div className="contact-page-card" key={i}>
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">{c.icon}</svg>
                </div>
                <div className="contact-text">
                  <h4>{c.title}</h4>
                  {c.lines.map((l, j) => <p key={j}>{l}</p>)}
                </div>
              </div>
            ))}
          </div>

          {/* Full-width map */}
          <div className="contact-page-map reveal-on-scroll">
            <iframe
              src="https://maps.google.com/maps?q=366P%2B2X+Dubai&output=embed"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Paw Prints Clinic Location"
            />
          </div>

        </div>
      </section>
    </>
  )
}
