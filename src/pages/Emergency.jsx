import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'

const PHONE = 'tel:0544337908'
const WHATSAPP = 'https://wa.me/971544337908?text=Emergency%20-%20My%20pet%20needs%20urgent%20care'
const DIRECTIONS = 'https://maps.google.com/maps?q=366P%2B2X+Dubai'

const emergencySigns = [
  { icon: '💨', title: 'Difficulty Breathing', desc: 'Laboured breathing, open-mouth breathing, or blue/grey gums.' },
  { icon: '😵', title: 'Collapse / Unconsciousness', desc: 'Sudden loss of balance, inability to stand, or unresponsiveness.' },
  { icon: '⚡', title: 'Seizures', desc: 'Uncontrolled muscle movements, convulsions, or falling to one side.' },
  { icon: '🩸', title: 'Heavy Bleeding', desc: 'Bleeding that does not stop within 5 minutes of applying pressure.' },
  { icon: '☠️', title: 'Poison Ingestion', desc: 'Suspected swallowing of toxic plants, chemicals, medications, or foods.' },
  { icon: '🚗', title: 'Hit by a Car', desc: 'Any road traffic accident, even if the pet appears uninjured.' },
  { icon: '🚱', title: 'Unable to Urinate', desc: 'Straining without producing urine, especially in male cats — life-threatening.' },
  { icon: '🎈', title: 'Bloated Abdomen', desc: 'Distended, hard, or painful belly — can indicate GDV (bloat).' },
  { icon: '🤢', title: 'Continuous Vomiting', desc: 'Vomiting more than 3 times in an hour, or vomiting blood.' },
  { icon: '🤧', title: 'Severe Allergic Reaction', desc: 'Sudden facial swelling, hives, vomiting, or collapse after exposure.' },
  { icon: '🌡️', title: 'Heatstroke', desc: 'Excessive panting, drooling, red gums, and high body temperature.' },
  { icon: '🍼', title: 'Difficulty Giving Birth', desc: 'Straining for more than 30 minutes without delivering, or a stuck kitten/puppy.' },
]

const actionGuide = [
  {
    title: 'Poisoning',
    icon: '☠️',
    do: ['Remove access to the substance immediately.', 'Take a photo of the product or packaging.', 'Call us immediately — do not wait for symptoms.'],
    dont: ['Do NOT induce vomiting unless explicitly instructed by a vet.'],
  },
  {
    title: 'Difficulty Breathing',
    icon: '💨',
    do: ['Keep your pet as calm and still as possible.', 'Minimise movement — carry them to your vehicle.', 'Come to us immediately without delay.'],
    dont: ['Do NOT force food, water, or medication.'],
  },
  {
    title: 'Seizures',
    icon: '⚡',
    do: ['Move sharp or hard objects away from the pet.', 'Dim lights and reduce noise in the environment.', "Record the duration and call us while it's happening."],
    dont: ["Do NOT put your hands near or in the pet's mouth."],
  },
  {
    title: 'Heatstroke',
    icon: '🌡️',
    do: ['Move the pet to a cool, shaded area at once.', 'Apply cool (not ice-cold) water to paws and neck.', 'Call us immediately as you head over.'],
    dont: ['Do NOT immerse in ice or very cold water — this causes shock.'],
  },
  {
    title: 'Hit by a Car',
    icon: '🚗',
    do: ['Move the pet carefully using a towel or flat board.', 'Keep them warm and as still as possible.', 'Come immediately — internal injuries may not be visible.'],
    dont: ['Do NOT manipulate injured or potentially broken limbs.'],
  },
  {
    title: 'Bloat / Swollen Abdomen',
    icon: '🎈',
    do: ['Seek immediate treatment — this is time-critical.', 'Keep the pet calm and drive directly to us.'],
    dont: ['Do NOT wait to see if it improves on its own.'],
  },
]

const timeline = [
  { step: '01', icon: '🚨', title: 'Immediate Triage', desc: 'Your pet is assessed by our team the moment you arrive — no waiting.' },
  { step: '02', icon: '💉', title: 'Stabilization', desc: 'Oxygen, IV fluids, or pain relief administered to stabilize your pet.' },
  { step: '03', icon: '🔬', title: 'Diagnostics', desc: 'Blood tests, ultrasound, and X-rays performed on-site within minutes.' },
  { step: '04', icon: '📋', title: 'Treatment Plan', desc: 'A clear treatment plan is communicated to you before any procedure.' },
  { step: '05', icon: '👁️', title: 'Continuous Monitoring', desc: 'Your pet stays under constant monitoring throughout their care.' },
]

const equipment = [
  { icon: '💨', title: 'Oxygen Therapy', desc: 'Intensive oxygen boxes for respiratory emergencies.' },
  { icon: '🖥️', title: 'ICU Monitoring', desc: 'Real-time vitals tracking including heart rate and SpO₂.' },
  { icon: '🔪', title: 'Emergency Surgery', desc: 'Fully equipped surgical suite for urgent procedures.' },
  { icon: '💧', title: 'IV Fluid Therapy', desc: 'Rapid-infusion fluid pumps for shock and dehydration.' },
  { icon: '❤️', title: 'Cardiac Monitoring', desc: 'ECG monitoring for arrhythmias and cardiac events.' },
  { icon: '🩸', title: 'Blood Testing', desc: 'On-site analyser for complete blood panels in minutes.' },
  { icon: '📡', title: 'Ultrasound', desc: 'Real-time abdominal and cardiac imaging on the spot.' },
  { icon: '🏥', title: 'Hospitalization Ward', desc: 'Dedicated ward for overnight and extended stays.' },
]

const whyChoose = [
  { icon: '🕐', title: 'Open 24/7/365', desc: 'We never close — not on weekends, not on UAE public holidays.' },
  { icon: '📅', title: 'No Holiday Closures', desc: 'Our doors are open every single day of the year without exception.' },
  { icon: '⚡', title: 'Fast Triage', desc: 'Emergency patients are seen immediately upon arrival.' },
  { icon: '👨‍⚕️', title: 'Experienced Emergency Team', desc: 'Vets trained specifically for critical and trauma care.' },
  { icon: '🏥', title: 'ICU-Level Equipment', desc: 'Hospital-grade monitoring and treatment technology on-site.' },
  { icon: '👁️', title: 'Continuous Monitoring', desc: 'Your pet is never left unobserved during critical care.' },
]

const faqs = [
  {
    q: 'What counts as a veterinary emergency?',
    a: 'Any situation where your pet is in pain, distress, or at risk of death. This includes difficulty breathing, collapse, seizures, heavy bleeding, suspected poisoning, road accidents, inability to urinate, or a severely bloated abdomen. When in doubt, call us and we will advise.',
  },
  {
    q: 'Should I call before coming?',
    a: 'It is helpful but not required. Calling ahead allows our team to prepare for your arrival. However, if your pet is in critical condition, come immediately without delay — we are ready to receive emergencies at all times.',
  },
  {
    q: 'How quickly will my pet be seen?',
    a: 'Emergency cases are triaged immediately upon arrival. There is no waiting room delay for critical patients — our team will assess your pet the moment you walk through the door.',
  },
  {
    q: 'How much does emergency care cost?',
    a: 'Emergency consultation fees and treatment costs are discussed transparently before any procedure. We provide clear estimates and will always communicate costs to you. Our priority is saving your pet — and we work with you on the best possible approach.',
  },
  {
    q: 'My pet ate something toxic. What should I do?',
    a: 'Remove access to the substance immediately and take a photo or note of what was ingested. Call us right away — do NOT induce vomiting unless our vet specifically instructs you to. Bring your pet to us without delay.',
  },
  {
    q: 'Can I bring any animal for emergency treatment?',
    a: 'Paw Prints Veterinary Clinic specialises in cats and dogs. If you have another species experiencing an emergency, please call us and we will do our best to assist or direct you to the appropriate facility.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'VeterinaryCare'],
  name: 'Paw Prints Veterinary Clinic',
  description: 'Emergency veterinary clinic in Dubai open 24/7. Immediate care for poisoning, breathing problems, accidents, seizures, bleeding, and other pet emergencies.',
  url: 'https://pawprintsdubai.com/emergency',
  telephone: '+971544337908',
  openingHours: 'Mo-Su 00:00-23:59',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Nas 2 Building, Shop 1, Arjan',
    addressLocality: 'Dubai',
    addressCountry: 'AE',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://pawprintsdubai.com/' },
    { '@type': 'ListItem', position: 2, name: '24/7 Emergency Vet', item: 'https://pawprintsdubai.com/emergency' },
  ],
}

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="faq-item">
      <div className={`faq-question${open ? ' open' : ''}`} onClick={() => setOpen(!open)}>
        <h4>{q}</h4>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
      <div className={`faq-answer${open ? ' open' : ''}`}>
        <p>{a}</p>
      </div>
    </div>
  )
}

export default function Emergency() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal-on-scroll')
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target) } }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    els.forEach(el => { el.classList.remove('revealed'); obs.observe(el) })
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <SEOHead
        title="24/7 Emergency Vet in Dubai | Paw Prints Veterinary Clinic"
        description="Emergency veterinary clinic in Dubai open 24/7. Immediate care for poisoning, breathing problems, accidents, seizures, bleeding, and other pet emergencies. Call now."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── HERO ── */}
      <section className="emg-hero">
        <div className="emg-hero-overlay" />
        <div className="container emg-hero-inner">
          <nav className="breadcrumb" aria-label="breadcrumb">
            <Link to="/" className="">Home</Link>
            <span className="crumb-sep">›</span>
            <span className="crumb-current">Emergency 24/7</span>
          </nav>

          <div className="hero-emergency-badge" style={{ marginBottom: 24 }}>
            <span />EMERGENCY CARE AVAILABLE 24/7/365
          </div>

          <h1 className="emg-h1">24/7 Emergency Veterinary Care in Dubai</h1>
          <p className="emg-subheadline">
            When every minute matters, our emergency veterinary team is available day and night,
            including weekends and UAE public holidays.
          </p>

          <div className="emg-hero-ctas">
            <a href={PHONE} className="btn btn-primary emg-btn-lg">
              <span>📞</span> Call Emergency Now
            </a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp emg-btn-lg">
              <span>💬</span> WhatsApp Emergency Team
            </a>
            <a href={DIRECTIONS} target="_blank" rel="noopener noreferrer" className="btn emg-btn-here emg-btn-lg">
              📍 WE ARE HERE
            </a>
          </div>

          <div className="emg-trust-row">
            {['✓ Open 24/7/365', '✓ ICU-Level Equipment', '✓ Immediate Triage', '✓ Emergency Surgery Available'].map(b => (
              <div className="emg-trust-badge" key={b}>{b}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 2: IS THIS AN EMERGENCY ── */}
      <section className="section-padding bg-gray">
        <div className="container">
          <div className="section-header text-center reveal-on-scroll">
            <h2>Bring Your Pet Immediately If You Notice:</h2>
            <p>These signs indicate a life-threatening emergency. Do not wait — come to us now or call while you're on the way.</p>
          </div>
          <div className="emg-signs-grid reveal-on-scroll">
            {emergencySigns.map(s => (
              <div className="emg-sign-card" key={s.title}>
                <div className="emg-sign-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <a href={PHONE} className="btn btn-primary">📞 Call Emergency Now</a>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: WHAT TO DO ── */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header text-center reveal-on-scroll">
            <h2>What To Do Right Now</h2>
            <p>Follow these quick-action guides while you make your way to us. Every second counts.</p>
          </div>
          <div className="emg-action-grid reveal-on-scroll">
            {actionGuide.map(item => (
              <div className="emg-action-card" key={item.title}>
                <div className="emg-action-header">
                  <span className="emg-action-icon">{item.icon}</span>
                  <h3>{item.title}</h3>
                </div>
                <div className="emg-action-do">
                  <p className="emg-action-label emg-do-label">✅ DO:</p>
                  <ul>
                    {item.do.map(d => <li key={d}>{d}</li>)}
                  </ul>
                </div>
                <div className="emg-action-dont">
                  <p className="emg-action-label emg-dont-label">🚫 DON'T:</p>
                  <ul>
                    {item.dont.map(d => <li key={d}>{d}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="emg-disclaimer reveal-on-scroll">
            <p>⚠️ <strong>Disclaimer:</strong> This information is not a substitute for veterinary care. If you suspect an emergency, contact us immediately.</p>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: WHAT HAPPENS WHEN YOU ARRIVE ── */}
      <section className="section-padding bg-charcoal">
        <div className="container">
          <div className="section-header text-center reveal-on-scroll" style={{ color: '#fff' }}>
            <h2 style={{ color: '#fff' }}>What Happens When You Arrive</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)' }}>From the moment you walk through our doors, your pet is in expert hands.</p>
          </div>
          <div className="emg-timeline reveal-on-scroll">
            {timeline.map((t, i) => (
              <div className="emg-timeline-item" key={t.step}>
                <div className="emg-timeline-step">
                  <div className="emg-step-number">{t.step}</div>
                  {i < timeline.length - 1 && <div className="emg-step-line" />}
                </div>
                <div className="emg-timeline-content">
                  <div className="emg-timeline-icon">{t.icon}</div>
                  <h3>{t.title}</h3>
                  <p>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: EQUIPMENT ── */}
      <section className="section-padding bg-gray">
        <div className="container">
          <div className="section-header text-center reveal-on-scroll">
            <h2>Our Emergency Equipment</h2>
            <p>Hospital-grade technology on-site so we can act immediately — no referrals, no delays.</p>
          </div>
          <div className="emg-equipment-grid reveal-on-scroll">
            {equipment.map(e => (
              <div className="emg-equipment-card" key={e.title}>
                <div className="emg-equipment-icon">{e.icon}</div>
                <h4>{e.title}</h4>
                <p>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: WHY CHOOSE ── */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header text-center reveal-on-scroll">
            <h2>Why Choose Paw Prints for Emergencies</h2>
            <p>Dubai pet owners trust us when it matters most — here's why.</p>
          </div>
          <div className="emg-why-grid reveal-on-scroll">
            {whyChoose.map(w => (
              <div className="emg-why-card" key={w.title}>
                <div className="emg-why-icon">{w.icon}</div>
                <h4>{w.title}</h4>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 7: FAQ ── */}
      <section className="section-padding bg-gray faq-section">
        <div className="container">
          <div className="section-header text-center reveal-on-scroll">
            <h2>Frequently Asked Questions</h2>
            <p>Answers to the questions we hear most from pet owners in urgent situations.</p>
          </div>
          <div className="faq-list reveal-on-scroll">
            {faqs.map(f => <FAQItem key={f.q} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      {/* ── SECTION 8: FINAL CTA ── */}
      <section className="emg-final-cta">
        <div className="emg-final-cta-overlay" />
        <div className="container emg-final-cta-inner">
          <div className="reveal-on-scroll">
            <div className="hero-emergency-badge" style={{ marginBottom: 24 }}>
              <span />AVAILABLE RIGHT NOW
            </div>
            <h2 className="emg-final-h2">Your pet can't wait.</h2>
            <p className="emg-final-sub">Our emergency team is ready 24/7 — including tonight.</p>
            <div className="emg-final-buttons">
              <a href={PHONE} className="btn btn-primary emg-btn-lg">
                <span>📞</span> Call Emergency Now
              </a>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp emg-btn-lg">
                <span>💬</span> WhatsApp Emergency Team
              </a>
              <a href={DIRECTIONS} target="_blank" rel="noopener noreferrer" className="btn emg-btn-here emg-btn-lg">
                📍 WE ARE HERE
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── MOBILE STICKY BAR ── */}
      <div className="emg-sticky-bar">
        <a href={PHONE} className="emg-sticky-btn emg-sticky-call">
          <span>📞</span> Call Now
        </a>
        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="emg-sticky-btn emg-sticky-whatsapp">
          <span>💬</span> WhatsApp
        </a>
      </div>
    </>
  )
}
