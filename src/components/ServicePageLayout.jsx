import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageHero from './PageHero'
import CTASection from './CTASection'
import SEOHead from './SEOHead'

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="faq-item">
      <div className={`faq-question${open ? ' open' : ''}`} onClick={() => setOpen(!open)}>
        <h4>{q}</h4>
        <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round"><polyline points="6 9 12 15 18 9"/></svg>
      </div>
      <div className={`faq-answer${open ? ' open' : ''}`}>
        <p>{a}</p>
      </div>
    </div>
  )
}

export default function ServicePageLayout({
  seoTitle, seoDescription,
  badge, title, subtitle,
  description, features,
  benefits, faqs,
  relatedServices,
  image, imageAlt,
}) {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal-on-scroll')
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target) } })
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })
    els.forEach(el => { el.classList.remove('revealed'); obs.observe(el) })
    return () => obs.disconnect()
  }, [title])

  return (
    <>
      <SEOHead title={seoTitle} description={seoDescription} />
      <PageHero
        badge={badge}
        title={title}
        subtitle={subtitle}
        breadcrumbs={[{ label: 'Services', to: '/services' }, { label: title }]}
        ctas={[
          { to: '/contact', label: 'Book This Service', variant: 'btn-primary' },
          { href: 'tel:0544337908', label: 'Call 054 433 7908', variant: 'btn-secondary' },
        ]}
      />

      {/* Detail + Features */}
      <section className="service-detail-section">
        <div className="container">
          <div className="service-detail-grid">
            <div className="service-detail-content reveal-on-scroll">
              <h2>What We Offer</h2>
              <p>{description}</p>
              <ul className="service-features-list">
                {features.map((f, i) => (
                  <li key={i}>
                    <svg viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="service-detail-image reveal-on-scroll">
              <img src={image} alt={imageAlt} loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="benefits-section">
        <div className="container">
          <div className="section-header text-center reveal-on-scroll">
            <h2>Why Choose Our {title}?</h2>
            <p>Our experienced team provides expert care in a calm, stress-free environment tailored for cats and dogs.</p>
          </div>
          <div className="benefits-grid">
            {benefits.map((b, i) => (
              <div className="benefit-card reveal-on-scroll" key={i}>
                <div className="benefit-icon">
                  <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{b.icon}</svg>
                </div>
                <h4>{b.title}</h4>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header text-center reveal-on-scroll">
            <h2>Frequently Asked Questions</h2>
            <p>Everything you need to know about our {title.toLowerCase()} service.</p>
          </div>
          <div className="faq-list">
            {faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="related-services">
        <div className="container">
          <div className="section-header text-center reveal-on-scroll">
            <h2>Related Services</h2>
            <p>Explore other veterinary services we provide at Paw Prints Clinic.</p>
          </div>
          <div className="related-grid">
            {relatedServices.map((s, i) => (
              <div className="service-card reveal-on-scroll" key={i}>
                <div className="service-icon-wrapper">
                  <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{s.icon}</svg>
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <Link to={s.to} className="service-card-cta">
                  Learn more <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Book ${title} Today`}
        subtitle="Our team is available 24/7. Book online or call us directly for the fastest response."
      />
    </>
  )
}
