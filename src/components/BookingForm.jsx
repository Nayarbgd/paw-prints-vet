import { useState, useRef, useEffect } from 'react'

export default function BookingForm() {
  const [form, setForm] = useState({ name: '', petName: '', petType: '', service: '', dateTime: '', phone: '', message: '' })
  const [alert, setAlert] = useState(null)
  const [loading, setLoading] = useState(false)
  const dateRef = useRef(null)

  useEffect(() => {
    if (dateRef.current) {
      const now = new Date()
      const pad = n => String(n).padStart(2, '0')
      dateRef.current.min = `${now.getFullYear()}-${pad(now.getMonth()+1)}-${pad(now.getDate())}T${pad(now.getHours())}:${pad(now.getMinutes())}`
    }
  }, [])

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setAlert(null)
    const { name, petName, petType, service, dateTime, phone } = form
    if (!name || !petName || !petType || !service || !dateTime || !phone) {
      return setAlert({ type: 'error', msg: 'Please fill in all required fields marked with *.' })
    }
    if (phone.replace(/\D/g, '').length < 7) {
      return setAlert({ type: 'error', msg: 'Please enter a valid phone number (at least 7 digits).' })
    }
    if (new Date(dateTime) < new Date()) {
      return setAlert({ type: 'error', msg: 'The preferred date and time must be in the future.' })
    }
    setLoading(true)
    try {
      const res = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setAlert({ type: 'success', msg: data.message })
        setForm({ name: '', petName: '', petType: '', service: '', dateTime: '', phone: '', message: '' })
      } else {
        setAlert({ type: 'error', msg: data.message || 'An error occurred. Please try again.' })
      }
    } catch {
      setAlert({ type: 'error', msg: 'Could not connect to the booking server. Please call 054 433 7908 directly.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="booking-form-container">
      <h3>Book an Appointment</h3>
      <p style={{ color: 'var(--color-gray-dark)', marginBottom: 20, fontSize: '0.95rem' }}>
        Fill out the details below, and our clinic desk will contact you within 15 minutes to confirm.
      </p>
      <div className="form-urgency">
        <p>🚨 For urgent emergencies, please call us directly on 054 433 7908 rather than booking online. We are ready 24/7.</p>
      </div>
      {alert && <div className={`form-notification ${alert.type}`}>{alert.msg}</div>}
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Owner's Full Name *</label>
            <input name="name" value={form.name} onChange={handleChange} className="form-control" placeholder="e.g. Sarah Mansoor" required />
          </div>
          <div className="form-group">
            <label>Pet's Name *</label>
            <input name="petName" value={form.petName} onChange={handleChange} className="form-control" placeholder="e.g. Mochi" required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Pet Type *</label>
            <select name="petType" value={form.petType} onChange={handleChange} className="form-control" required>
              <option value="" disabled>Select Pet Type</option>
              <option value="Cat">Cat</option>
              <option value="Dog">Dog</option>
              <option value="Other">Other Pet</option>
            </select>
          </div>
          <div className="form-group">
            <label>Service Needed *</label>
            <select name="service" value={form.service} onChange={handleChange} className="form-control" required>
              <option value="" disabled>Select Service</option>
              <option value="General Checkup">General Checkup</option>
              <option value="Vaccination">Vaccination</option>
              <option value="Emergency Care">Emergency Care</option>
              <option value="Surgery Consultation">Surgery Consultation</option>
              <option value="Dental Scaling">Dental Scaling</option>
              <option value="Lab & Blood Tests">Lab & Blood Tests</option>
              <option value="Nutrition Advisory">Nutrition Advisory</option>
              <option value="Grooming Referral">Grooming Referral</option>
              <option value="Other Consultation">Other Consultation</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Preferred Date & Time *</label>
            <input ref={dateRef} type="datetime-local" name="dateTime" value={form.dateTime} onChange={handleChange} className="form-control" required />
          </div>
          <div className="form-group">
            <label>Owner's Phone Number *</label>
            <input type="tel" name="phone" value={form.phone} onChange={handleChange} className="form-control" placeholder="e.g. 054 433 7908" required />
          </div>
        </div>
        <div className="form-group">
          <label>Tell us about your pet's symptoms / needs (Optional)</label>
          <textarea name="message" value={form.message} onChange={handleChange} className="form-control" placeholder="Write any notes for the doctor..." />
        </div>
        <div className="form-submit-wrapper">
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? <><span className="spinner">⟳</span> Submitting...</> : '✔ Confirm Appointment Request'}
          </button>
        </div>
      </form>
      <div className="form-footer-options">
        <p>Prefer instant booking via chat or quick phone call?</p>
        <div className="form-footer-buttons">
          <a href="tel:0544337908" className="btn btn-dark" style={{ padding: '10px 20px', fontSize: '0.85rem' }}>📞 Call Now</a>
          <a href="https://wa.me/971544337908" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{ padding: '10px 20px', fontSize: '0.85rem' }}>💬 WhatsApp Chat</a>
        </div>
      </div>
    </div>
  )
}
