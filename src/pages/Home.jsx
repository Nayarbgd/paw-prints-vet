import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'
import TestimonialsCarousel from '../components/TestimonialsCarousel'
import CTASection from '../components/CTASection'
import BookingForm from '../components/BookingForm'

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
)

const services = [
  { id: 'checkup', icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>, title: 'General Checkups', desc: 'Routine wellness exams, weight management advice, and physical evaluations to keep your pet fit.', to: '/services/general-checkups', cta: 'Book exam' },
  { id: 'vax', icon: <><path d="M18 2v4M6 2v4M2 10h20M4 6h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></>, title: 'Vaccinations', desc: 'Core pet vaccinations and booster schedule management to protect against rabies, parvo, and feline flu.', to: '/services/vaccinations', cta: 'Schedule shots' },
  { id: 'emg', icon: <path d="M12 2v20M2 12h20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>, title: 'Emergency Care', desc: 'Equipped for critical emergency trauma, poisoning, and acute sickness. Open 24 hours every day.', href: 'tel:0544337908', cta: 'Call Now 24/7', urgent: true },
  { id: 'surg', icon: <polygon points="12 2 2 22 22 22" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/>, title: 'Surgery', desc: 'General surgical treatments including standard spaying, neutering, soft tissue repair, and bone surgery.', to: '/services/surgery', cta: 'Consult surgeon' },
  { id: 'dent', icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/>, title: 'Dental Care', desc: 'Professional scaling, polishing, extraction, and oral health diagnostics to prevent periodontal diseases.', to: '/services/dental-care', cta: 'Book scaling' },
  { id: 'nut', icon: <><circle cx="12" cy="12" r="10" strokeWidth="2"/><path d="M12 8v8M8 12h8" strokeWidth="2"/></>, title: 'Nutrition & Diet', desc: 'Custom dietary plans, hypoallergenic food recommendations, and clinical obesity management plans.', to: '/services/nutrition', cta: 'Get advice' },
  { id: 'grm', icon: <><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" strokeWidth="2"/><path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" strokeWidth="2"/></>, title: 'Grooming Referrals', desc: 'Medicated bath solutions for skin allergies and connections with premium local grooming salons in Arjan.', to: '/services/grooming', cta: 'Enquire today' },
  { id: 'lab', icon: <><path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v1" strokeWidth="2" strokeLinecap="round"/><path d="M18 8h4a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-4" strokeWidth="2" strokeLinecap="round"/><circle cx="8" cy="13" r="3" strokeWidth="2"/></>, title: 'Lab & Blood Tests', desc: 'On-site blood analyzer, rapid virus testing kits, fecal checks, and micro-parasite microscopy tests.', to: '/services/lab-tests', cta: 'Learn more' },
]

export default function Home() {
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
        title="Paw Prints Veterinary Clinic Dubai | 24/7 Vet Care in Arjan"
        description="Paw Prints Veterinary Clinic in Arjan, Dubai. Open 24/7 for cats and dogs. Expert emergency vet care, checkups, surgeries, dental care, and more. Call 054 433 7908."
      />

      {/* Hero */}
      <section className="hero" style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
        <div className="container">
          <div className="hero-content reveal-on-scroll">
            <div className="hero-emergency-badge"><span/>EMERGENCY CARE AVAILABLE 24/7</div>
            <h1>Dubai's Most Trusted 24/7 Veterinary Care — For the Pets You Love Most</h1>
            <p>Comprehensive care for cats and dogs in Arjan. Quick response, state-of-the-art diagnostic clinic, and dedicated after-hours emergency vet support.</p>
            <div className="hero-ctas">
              <Link to="/contact" className="btn btn-primary">Book Appointment</Link>
              <a href="tel:0544337908" className="btn btn-secondary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Call 054 433 7908
              </a>
            </div>
            <div className="hero-trust-badges">
              <div className="trust-badge"><div className="badge-icon">⭐</div><div className="badge-text"><span className="badge-val">4.7 Google Rating</span><span className="badge-lbl">Based on active local reviews</span></div></div>
              <div className="trust-badge"><div className="badge-icon">⏰</div><div className="badge-text"><span className="badge-val">24/7 Emergency</span><span className="badge-lbl">Always open, even on holidays</span></div></div>
              <div className="trust-badge"><div className="badge-icon">🐾</div><div className="badge-text"><span className="badge-val">113+ Happy Clients</span><span className="badge-lbl">Loved cats & dogs in Dubai</span></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-gray">
        <div className="container">
          <div className="section-header text-center reveal-on-scroll">
            <h2>Our Specialized Services</h2>
            <p>Providing the highest quality medical care. We specialize exclusively in cat and dog veterinary treatments.</p>
          </div>
          <div className="services-grid reveal-on-scroll">
            {services.map(s => (
              <div className="service-card" key={s.id}>
                <div className="service-icon-wrapper">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">{s.icon}</svg>
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                {s.href ? (
                  <a href={s.href} className="service-card-cta" style={s.urgent ? { color: 'var(--color-primary)' } : {}}>
                    {s.cta} <ArrowIcon />
                  </a>
                ) : (
                  <Link to={s.to} className="service-card-cta">{s.cta} <ArrowIcon /></Link>
                )}
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Link to="/services" className="btn btn-outline">View All Services →</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container">
          <div className="why-choose-us-wrapper">
            <div className="why-choose-us-content reveal-on-scroll">
              <h3>Why Choose Paw Prints?</h3>
              <p style={{ marginBottom: 30, color: 'var(--color-gray-dark)' }}>We understand that your pets are cherished members of your family. Our clinic is specifically optimized to provide stress-free diagnostics and clinical excellence for dogs and cats.</p>
              <div className="value-props-list">
                {[
                  { icon: <><circle cx="12" cy="12" r="10" strokeWidth="2"/><polyline points="12 6 12 12 16 14" strokeWidth="2"/></>, title: 'Open 24 Hours — Even Holidays', desc: 'Never panic in the middle of the night. Our doctors and triage team are ready for any pet emergency around the clock.' },
                  { icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeWidth="2"/>, title: 'Experienced with Cats & Dogs', desc: 'Our vets specialize exclusively in cat and dog behavior, pathology, and surgery. We create a calm environment for nervous pets.' },
                  { icon: <><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" strokeWidth="2"/><line x1="12" y1="9" x2="12" y2="13" strokeWidth="2"/><line x1="12" y1="17" x2="12.01" y2="17" strokeWidth="2"/></>, title: 'Emergency After-Hours Accepted', desc: 'Equipped with intensive oxygen boxes, rapid fluid pumps, and monitoring devices to handle high-risk situations instantly.' },
                  { icon: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeWidth="2"/><circle cx="12" cy="10" r="3" strokeWidth="2"/></>, title: 'Convenient Dubai Location', desc: 'Located in Arjan at the Nas 2 Building, Shop 1, with easily accessible free parking directly in front of the clinic.' },
                ].map((p, i) => (
                  <div className="value-prop-item" key={i}>
                    <div className="value-prop-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor">{p.icon}</svg></div>
                    <div className="value-prop-text"><h4>{p.title}</h4><p>{p.desc}</p></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="why-choose-us-image reveal-on-scroll">
              <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop" alt="Vet examining dog in our Arjan clinic" />
              <div className="image-badge">
                <span className="badge-number">113+</span>
                <span className="badge-text">Happy Pet Owners<br/>Reviewed in Dubai</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gray testimonials">
        <div className="container">
          <div className="section-header text-center reveal-on-scroll">
            <h2>What Pet Owners Say</h2>
            <p>Your trust is our highest reward. Read direct testimonials from pet parents across Dubai who count on our 24-hour service.</p>
          </div>
          <TestimonialsCarousel />
          <div className="testimonials-footer text-center reveal-on-scroll">
            <a href="https://maps.google.com/maps?q=366P%2B2X+Dubai" target="_blank" rel="noopener noreferrer" className="google-reviews-link">
              See all 113 reviews on Google Maps →
            </a>
          </div>
        </div>
      </section>

      {/* Booking + Map */}
      <section className="section-padding bg-charcoal booking-section">
        <div className="container">
          <div className="booking-wrapper">
            <div className="location-info reveal-on-scroll">
              <div>
                <h2 style={{ fontSize: '2.5rem', marginBottom: 16, color: 'var(--color-white)' }}>Visit Our Clinic</h2>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', marginBottom: 10 }}>Located in the heart of Arjan, Dubai. Stop by or call us if you need directions.</p>
              </div>
              <div className="contact-details">
                {[
                  { icon: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeWidth="2"/><circle cx="12" cy="10" r="3" strokeWidth="2"/></>, title: 'Address', lines: ['Arjan, Nas 2 Building, Shop 1 - Dubai', <span style={{ fontSize: '0.85rem', color: 'var(--color-primary)' }}>Plus Code: 366P+2X Dubai</span>] },
                  { icon: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" strokeWidth="2"/>, title: 'Phone Number', lines: [<a href="tel:0544337908">054 433 7908</a>, <span style={{ fontSize: '0.85rem', color: '#2ecc71' }}>Available 24/7 for emergency calls</span>] },
                  { icon: <><circle cx="12" cy="12" r="10" strokeWidth="2"/><polyline points="12 6 12 12 16 14" strokeWidth="2"/></>, title: 'Working Hours', lines: ['Open 24 Hours / 7 Days a week', <span style={{ fontSize: '0.85rem', color: 'var(--color-primary)' }}>Including weekends and public holidays</span>] },
                  { icon: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeWidth="2"/><polyline points="22,6 12,13 2,6" strokeWidth="2"/></>, title: 'Email Support', lines: [<a href="mailto:paw.print.vetclinic@gmail.com">paw.print.vetclinic@gmail.com</a>] },
                ].map((c, i) => (
                  <div className="contact-item" key={i}>
                    <div className="contact-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor">{c.icon}</svg></div>
                    <div className="contact-text"><h4>{c.title}</h4>{c.lines.map((l, j) => <p key={j}>{l}</p>)}</div>
                  </div>
                ))}
              </div>
              <div className="map-embed">
                <iframe src="https://maps.google.com/maps?q=366P%2B2X+Dubai&output=embed" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Paw Prints Clinic Map" />
              </div>
            </div>
            <div className="reveal-on-scroll">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
