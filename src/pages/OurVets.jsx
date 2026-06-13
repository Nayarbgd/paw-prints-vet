import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'
import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'

const vets = [
  {
    name: 'Dr. Aisha Al Mansoori',
    role: 'Senior Veterinarian & Soft Tissue Surgeon',
    bio: '8 years of clinical experience with feline and canine medicine and soft-tissue surgery in the UAE. Passionate about stress-free cat handling techniques and advanced diagnostic imaging.',
    img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=500&auto=format&fit=crop',
    alt: 'Dr. Aisha Al Mansoori - Senior Veterinarian',
    specialties: ['Feline Medicine', 'Soft Tissue Surgery', 'Emergency Triage', 'Diagnostic Imaging'],
    languages: ['Arabic', 'English'],
  },
  {
    name: 'Dr. David Chen',
    role: 'Internal Medicine & Veterinary Dentist',
    bio: 'Specialist in canine dental disease, diagnostics, and internal medicine. Over 6 years treating family pets with a focus on preventative health and oral hygiene management.',
    img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=500&auto=format&fit=crop',
    alt: 'Dr. David Chen - Veterinary Dentist',
    specialties: ['Dental Scaling & Extraction', 'Internal Medicine', 'Blood Diagnostics', 'Preventative Care'],
    languages: ['English', 'Mandarin'],
  },
  {
    name: 'Amna Al Hashimi',
    role: 'Senior Veterinary Technician',
    bio: 'Responsible for emergency triage and critical care nursing. Ensures every pet in our ward is comfortable, calm, and treated with love. Certified in advanced animal life support.',
    img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=500&auto=format&fit=crop',
    alt: 'Amna Al Hashimi - Senior Vet Technician',
    specialties: ['Emergency Triage', 'Critical Care Nursing', 'IV Fluid Management', 'Post-Op Care'],
    languages: ['Arabic', 'English'],
  },
]

const values = [
  { icon: '🐾', title: 'Fear-Free Approach', desc: 'We use low-stress handling techniques to ensure every visit is as calm as possible for your pet.' },
  { icon: '🔬', title: 'Evidence-Based Medicine', desc: 'Our team stays current with the latest research and treatment protocols in veterinary medicine.' },
  { icon: '💙', title: 'Compassionate Care', desc: 'We treat every patient as if they were our own pets — with patience, kindness, and genuine love.' },
  { icon: '🏆', title: 'Clinical Excellence', desc: 'Years of specialized training in Dubai\'s climate and regional pet health conditions.' },
]

export default function OurVets() {
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
        title="Our Veterinary Team | Paw Prints Clinic Dubai"
        description="Meet the experienced veterinary team at Paw Prints Clinic in Arjan, Dubai. Dr. Aisha Al Mansoori, Dr. David Chen, and Amna Al Hashimi — specialists in cat and dog medicine."
      />
      <PageHero
        badge="Our Team"
        title="Meet Our Veterinary Experts"
        subtitle="Our experienced team of vets and technicians work together around the clock to deliver the highest standard of care for your cats and dogs."
        breadcrumbs={[{ label: 'Our Vets' }]}
        ctas={[
          { to: '/contact', label: 'Book with Our Team', variant: 'btn-primary' },
          { href: 'tel:0544337908', label: 'Call 054 433 7908', variant: 'btn-secondary' },
        ]}
      />

      {/* Team Cards */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header text-center reveal-on-scroll">
            <h2>Our Veterinary Professionals</h2>
            <p>Each member of our team is carefully selected for their clinical expertise, compassionate approach, and dedication to animal welfare.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 60 }}>
            {vets.map((v, i) => (
              <div key={i} className="reveal-on-scroll vet-profile-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 60, alignItems: 'center' }}>
                <div style={{ order: i % 2 === 0 ? 0 : 1 }}>
                  <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', aspectRatio: '1', maxWidth: 380 }}>
                    <img src={v.img} alt={v.alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                  </div>
                </div>
                <div style={{ order: i % 2 === 0 ? 1 : 0 }}>
                  <div style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 10 }}>{v.role}</div>
                  <h2 style={{ fontSize: '2rem', marginBottom: 16 }}>{v.name}</h2>
                  <p style={{ color: 'var(--color-gray-dark)', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: 28 }}>{v.bio}</p>
                  <div style={{ marginBottom: 20 }}>
                    <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 12, color: 'var(--color-dark)' }}>Specialties</h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {v.specialties.map((s, j) => (
                        <span key={j} style={{ background: 'var(--color-primary-light)', color: 'var(--color-primary)', padding: '6px 14px', borderRadius: 'var(--radius-full)', fontSize: '0.85rem', fontWeight: 600 }}>{s}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 12, color: 'var(--color-dark)' }}>Languages</h4>
                    <div style={{ display: 'flex', gap: 8 }}>
                      {v.languages.map((l, j) => (
                        <span key={j} style={{ background: 'var(--color-gray-light)', color: 'var(--color-gray-dark)', padding: '6px 14px', borderRadius: 'var(--radius-full)', fontSize: '0.85rem' }}>{l}</span>
                      ))}
                    </div>
                  </div>
                  <div style={{ marginTop: 32 }}>
                    <Link to="/contact" className="btn btn-primary">Book with {v.name.split(' ')[1]}</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray">
        <div className="container">
          <div className="section-header text-center reveal-on-scroll">
            <h2>Our Clinical Values</h2>
            <p>The principles that guide every decision we make for your pet's health and wellbeing.</p>
          </div>
          <div className="benefits-grid">
            {values.map((v, i) => (
              <div className="benefit-card reveal-on-scroll" key={i}>
                <div style={{ fontSize: '2.5rem', marginBottom: 16 }}>{v.icon}</div>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Meet Our Team in Person"
        subtitle="Book an appointment and experience the compassionate, expert care that Dubai's pet owners trust."
      />
    </>
  )
}
