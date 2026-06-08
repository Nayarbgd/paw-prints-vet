import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'
import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'

const allServices = [
  { slug: 'general-checkups', icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>, title: 'General Checkups', desc: 'Routine wellness exams, weight management advice, and physical evaluations to keep your pet healthy year-round.', badge: 'Most Popular' },
  { slug: 'vaccinations', icon: <><path d="M18 2v4M6 2v4M2 10h20M4 6h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></>, title: 'Vaccinations', desc: 'Core pet vaccinations and booster schedule management to protect against rabies, parvo, feline flu, and more.' },
  { slug: 'emergency-care', icon: <path d="M12 2v20M2 12h20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>, title: 'Emergency Care', desc: '24/7 emergency trauma care, poisoning treatment, and acute sickness triage with critical care equipment.', badge: '24/7', urgent: true },
  { slug: 'dental-care', icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/>, title: 'Dental Care', desc: 'Professional scaling, polishing, extraction, and full oral health diagnostics to prevent and treat periodontal disease.' },
  { slug: 'lab-tests', icon: <><path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v1" strokeWidth="2" strokeLinecap="round"/><path d="M18 8h4a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-4" strokeWidth="2" strokeLinecap="round"/><circle cx="8" cy="13" r="3" strokeWidth="2"/></>, title: 'Lab & Blood Tests', desc: 'On-site blood analyzer, rapid virus testing kits, fecal checks, and micro-parasite microscopy tests for fast results.' },
  { slug: 'nutrition', icon: <><circle cx="12" cy="12" r="10" strokeWidth="2"/><path d="M12 8v8M8 12h8" strokeWidth="2"/></>, title: 'Nutrition & Diet', desc: 'Custom dietary plans, hypoallergenic food recommendations, and clinical obesity management tailored for your pet.' },
  { slug: 'grooming', icon: <><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" strokeWidth="2"/><path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" strokeWidth="2"/></>, title: 'Grooming Referrals', desc: 'Medicated bath solutions for skin allergies and curated connections with premium local grooming salons in Arjan.' },
  { slug: 'surgery', icon: <polygon points="12 2 2 22 22 22" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/>, title: 'Surgery', desc: 'Soft tissue and orthopedic surgical treatments including spaying, neutering, tumor removal, and bone procedures.' },
]

const whyUs = [
  { icon: '⏰', title: 'Open 24/7', desc: 'Including weekends and public holidays' },
  { icon: '🏥', title: 'Advanced Equipment', desc: 'On-site diagnostics and lab testing' },
  { icon: '🐾', title: 'Cat & Dog Specialists', desc: 'Tailored care for your pet\'s species' },
  { icon: '📍', title: 'Arjan, Dubai', desc: 'Free parking at the clinic door' },
]

export default function Services() {
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
        title="Veterinary Services Dubai | Paw Prints Clinic Arjan"
        description="Complete veterinary services in Dubai: general checkups, vaccinations, emergency 24/7 care, dental treatment, lab tests, surgery, nutrition, and grooming for cats and dogs."
      />
      <PageHero
        badge="All Services"
        title="Complete Veterinary Care for Cats & Dogs"
        subtitle="From routine checkups to life-saving emergency surgery — Paw Prints Clinic provides comprehensive veterinary care 24 hours a day, 7 days a week in Arjan, Dubai."
        breadcrumbs={[{ label: 'Services' }]}
        ctas={[
          { to: '/contact', label: 'Book Appointment', variant: 'btn-primary' },
          { href: 'tel:0544337908', label: 'Call 054 433 7908', variant: 'btn-secondary' },
        ]}
      />

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header text-center reveal-on-scroll">
            <h2>Our Specialized Services</h2>
            <p>Every service is delivered by our experienced vet team with advanced clinical equipment and compassionate care.</p>
          </div>
          <div className="services-grid reveal-on-scroll">
            {allServices.map(s => (
              <div className="service-card" key={s.slug} style={{ position: 'relative' }}>
                {s.badge && (
                  <span style={{ position: 'absolute', top: 16, right: 16, background: s.urgent ? 'var(--color-primary)' : 'var(--color-dark)', color: '#fff', fontSize: '0.7rem', fontWeight: 700, padding: '4px 10px', borderRadius: 'var(--radius-full)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{s.badge}</span>
                )}
                <div className="service-icon-wrapper">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">{s.icon}</svg>
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <Link to={`/services/${s.slug}`} className="service-card-cta">
                  Learn more <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Strip */}
      <section className="section-padding bg-charcoal">
        <div className="container">
          <div className="section-header text-center reveal-on-scroll" style={{ marginBottom: 50 }}>
            <h2 style={{ color: 'var(--color-white)' }}>Why Thousands Trust Paw Prints</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 30 }}>
            {whyUs.map((w, i) => (
              <div key={i} className="reveal-on-scroll" style={{ textAlign: 'center', color: 'var(--color-white)' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: 12 }}>{w.icon}</div>
                <h4 style={{ fontSize: '1.15rem', marginBottom: 6 }}>{w.title}</h4>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
