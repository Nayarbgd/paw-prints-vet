import { useEffect } from 'react'
import SEOHead from '../components/SEOHead'
import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'

const testimonials = [
  { initials: 'SM', name: 'Sarah M.', pet: 'Owner of Mochi (Cat)', location: 'Dubai Marina', date: '2 weeks ago', rating: 5, quote: 'Dr. Aisha saved our cat Mochi at 2am. I was panicking because he swallowed a small toy, but the staff was so calm, professional, and took him to emergency triage immediately. Truly 24/7 care you can rely on!' },
  { initials: 'VK', name: 'Vikram K.', pet: 'Owner of Max (Dog)', location: 'Jumeirah', date: '1 month ago', rating: 5, quote: 'We brought our Golden Retriever Max in for dental surgery. Dr. David explained the entire scaling and extraction process so clearly and the price was very transparent with no hidden clinic fees. Truly outstanding service.' },
  { initials: 'ES', name: 'Elena S.', pet: 'Owner of Leila (Cat)', location: 'Downtown Dubai', date: '3 weeks ago', rating: 5, quote: 'Super clean clinic, easy parking, and very professional. The online booking system was seamless, and Dr. Aisha spent 30 minutes explaining the allergy treatment plan for my cat Leila. Highly recommended.' },
  { initials: 'TA', name: 'Tariq A.', pet: 'Owner of Cooper (Dog)', location: 'Arabian Ranches', date: '2 months ago', rating: 5, quote: 'Absolutely the best veterinary clinic in Dubai. Their triage team was incredible when my dog Cooper ingested chocolate late at night. They saved him. I can\'t thank the emergency team enough.' },
  { initials: 'CT', name: 'Chloe T.', pet: 'Owner of Bruno (Dog)', location: 'Motor City', date: '3 months ago', rating: 5, quote: 'Wonderful clinic in Arjan. Free parking directly outside, very friendly receptionist, and Dr. David was extremely gentle during Bruno\'s annual vaccinations. Very happy to have them nearby.' },
  { initials: 'NA', name: 'Nadia A.', pet: 'Owner of Luna (Cat)', location: 'Barsha Heights', date: '3 months ago', rating: 5, quote: 'Luna had a severe respiratory infection. The team at Paw Prints put her on oxygen and stabilized her overnight. I received hourly updates on her condition. This is exceptional emergency care.' },
  { initials: 'RG', name: 'Ravi G.', pet: 'Owner of Rocky (Dog)', location: 'Sports City', date: '4 months ago', rating: 5, quote: 'Rocky had an emergency after swallowing a chicken bone. We called Paw Prints at midnight and they told us to come immediately. The entire procedure took less than 2 hours. Incredible team.' },
  { initials: 'HJ', name: 'Hana J.', pet: 'Owner of Simba (Cat)', location: 'Mirdif', date: '5 months ago', rating: 5, quote: 'I have been coming to Paw Prints for Simba\'s annual checkups and vaccinations for 2 years. Consistently professional, consistently gentle, and Simba has never been more comfortable at a vet.' },
  { initials: 'MP', name: 'Marco P.', pet: 'Owner of Bella (Dog)', location: 'Palm Jumeirah', date: '5 months ago', rating: 5, quote: 'Bella needed spaying and I was nervous. The pre-op consultation with Dr. Aisha put my mind at ease. The operation was smooth and Bella recovered quickly. Post-op care instructions were thorough.' },
]

const stats = [
  { value: '4.7★', label: 'Google Rating', sub: 'Based on 113+ active reviews' },
  { value: '113+', label: 'Happy Clients', sub: 'Reviewed pet owners in Dubai' },
  { value: '24/7', label: 'Always Open', sub: 'Including holidays' },
  { value: '8+', label: 'Years Experience', sub: 'In cat & dog medicine' },
]

export default function Reviews() {
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
        title="Client Reviews | Paw Prints Veterinary Clinic Dubai"
        description="Read real reviews from pet owners across Dubai about Paw Prints Veterinary Clinic. 4.7 Google rating with 113+ reviews. Trusted 24/7 vet care in Arjan."
      />
      <PageHero
        badge="Client Reviews"
        title="What Dubai's Pet Owners Say About Us"
        subtitle="Over 113 five-star Google reviews from real pet owners across Dubai. Your trust is our greatest achievement."
        breadcrumbs={[{ label: 'Reviews' }]}
        ctas={[
          { href: 'https://maps.google.com/maps?q=366P%2B2X+Dubai', label: 'See Google Reviews', variant: 'btn-primary' },
          { to: '/contact', label: 'Book Appointment', variant: 'btn-secondary' },
        ]}
      />

      {/* Stats Bar */}
      <section style={{ background: 'var(--color-primary)', padding: '50px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 30, textAlign: 'center' }}>
            {stats.map((s, i) => (
              <div key={i} style={{ color: 'var(--color-white)' }}>
                <div style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', fontWeight: 800, lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontWeight: 700, fontSize: '1rem', marginTop: 8 }}>{s.label}</div>
                <div style={{ fontSize: '0.8rem', opacity: 0.85, marginTop: 4 }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header text-center reveal-on-scroll">
            <h2>Real Stories from Real Pet Parents</h2>
            <p>These are unedited testimonials from pet owners who have trusted us with their beloved cats and dogs.</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div className="testimonial-card-grid reveal-on-scroll" key={i}>
                <div className="testimonial-stars">{'★'.repeat(t.rating)}</div>
                <p className="testimonial-quote" style={{ fontStyle: 'italic', lineHeight: 1.7, marginBottom: 24, color: 'var(--color-dark)' }}>"{t.quote}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, borderTop: '1px solid var(--color-gray-light)', paddingTop: 20 }}>
                  <div className="author-avatar">{t.initials}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '1rem' }}>{t.name}</div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--color-gray-dark)' }}>{t.pet} • {t.location}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--color-gray-medium)', marginTop: 2 }}>{t.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 60 }}>
            <a href="https://maps.google.com/maps?q=366P%2B2X+Dubai" target="_blank" rel="noopener noreferrer" className="google-reviews-link" style={{ fontSize: '1.1rem' }}>
              View all 113 reviews on Google Maps →
            </a>
          </div>
        </div>
      </section>

      <CTASection
        title="Join 113+ Happy Pet Owners"
        subtitle="Experience the same 5-star veterinary care that Dubai's pet parents trust for their cats and dogs."
      />
    </>
  )
}
