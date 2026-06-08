import { useState, useEffect, useRef } from 'react'

const testimonials = [
  { initials: 'SM', name: 'Sarah M.', pet: 'Owner of Mochi (Cat) • Dubai Marina', date: '2 weeks ago', quote: '"Dr. Aisha saved our cat Mochi at 2am. I was panicking because he swallowed a small toy, but the staff was so calm, professional, and took him to emergency triage immediately. Truly 24/7 care you can rely on!"' },
  { initials: 'VK', name: 'Vikram K.', pet: 'Owner of Max (Dog) • Jumeirah', date: '1 month ago', quote: '"We brought our Golden Retriever Max in for dental surgery. Dr. David explained the entire scaling and extraction process so clearly and the price was very transparent with no hidden clinic fees. Truly outstanding service."' },
  { initials: 'ES', name: 'Elena S.', pet: 'Owner of Leila (Cat) • Downtown Dubai', date: '3 weeks ago', quote: '"Super clean clinic, easy parking, and very professional. The online booking system was seamless, and Dr. Aisha spent 30 minutes explaining the allergy treatment plan for my cat Leila. Highly recommended."' },
  { initials: 'TA', name: 'Tariq A.', pet: 'Owner of Cooper (Dog) • Arabian Ranches', date: '2 months ago', quote: '"Absolutely the best veterinary clinic in Dubai. Their triage team was incredible when my dog Cooper ingested chocolate late at night. They saved him. I can\'t thank the emergency team enough."' },
  { initials: 'CT', name: 'Chloe T.', pet: 'Owner of Bruno (Dog) • Motor City', date: '3 months ago', quote: '"Wonderful clinic in Arjan. Free parking directly outside, very friendly receptionist, and Dr. David was extremely gentle during Bruno\'s annual vaccinations. Very happy to have them nearby."' },
]

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef(null)

  const moveTo = (idx) => {
    if (idx < 0) idx = testimonials.length - 1
    if (idx >= testimonials.length) idx = 0
    setCurrent(idx)
  }

  const startAutoplay = () => {
    timerRef.current = setInterval(() => setCurrent(c => (c + 1) % testimonials.length), 5000)
  }
  const stopAutoplay = () => clearInterval(timerRef.current)

  useEffect(() => {
    startAutoplay()
    return stopAutoplay
  }, [])

  const handleNav = (dir) => {
    stopAutoplay()
    moveTo(current + dir)
    startAutoplay()
  }

  const t = testimonials[current]

  return (
    <div className="testimonials-carousel-container" onMouseEnter={stopAutoplay} onMouseLeave={startAutoplay}>
      <div className="testimonials-track" style={{ transform: `translateX(-${current * 100}%)` }}>
        {testimonials.map((t, i) => (
          <div className="testimonial-slide" key={i}>
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-quote">{t.quote}</p>
              <div className="testimonial-author">
                <div className="author-info">
                  <div className="author-avatar">{t.initials}</div>
                  <div className="author-name">
                    <h4>{t.name}</h4>
                    <p>{t.pet}</p>
                  </div>
                </div>
                <div className="testimonial-date">{t.date}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="carousel-nav">
        <button className="carousel-btn" onClick={() => handleNav(-1)} aria-label="Previous">
          <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <button className="carousel-btn" onClick={() => handleNav(1)} aria-label="Next">
          <svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div>
      <div className="carousel-dots">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`carousel-dot${i === current ? ' active' : ''}`}
            onClick={() => { stopAutoplay(); moveTo(i); startAutoplay() }}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
