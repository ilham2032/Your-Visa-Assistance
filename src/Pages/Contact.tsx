import React, { useState } from 'react'
import PageHero from '../Components/PageHero'
import { IconLocation, IconEmail, IconClock, IconGlobe, IconCheck } from '../Components/Icons'

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main>
      <PageHero
        title="Contact Us"
        subtitle="Reach out for a free consultation. Our team is ready to help you with your visa and travel needs."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
      />

      <section className="page-content section-alt">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info-card">
              <h3>Get in Touch</h3>
              <div className="contact-detail">
                <div className="contact-detail-icon"><IconLocation size={20} /></div>
                <div className="contact-detail-text">
                  <strong>Location</strong>
                  <span>Baku, Azerbaijan</span>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon"><IconEmail size={20} /></div>
                <div className="contact-detail-text">
                  <strong>Email</strong>
                  <a href="mailto:info@yourvisaassistance.az">info@yourvisaassistance.az</a>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon"><IconClock size={20} /></div>
                <div className="contact-detail-text">
                  <strong>Working Hours</strong>
                  <span>Mon – Fri: 9:00 AM – 6:00 PM</span>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon"><IconGlobe size={20} /></div>
                <div className="contact-detail-text">
                  <strong>Coverage</strong>
                  <span>Visa assistance for all 195 countries</span>
                </div>
              </div>
            </div>

            <div className="contact-form">
              {submitted ? (
                <div className="form-success">
                  <div className="form-success-icon"><IconCheck size={28} /></div>
                  <h3>Message Sent Successfully</h3>
                  <p>Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="firstName">First Name</label>
                      <input type="text" id="firstName" name="firstName" required placeholder="John" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName">Last Name</label>
                      <input type="text" id="lastName" name="lastName" required placeholder="Doe" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" required placeholder="john@example.com" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="destination">Destination Country</label>
                    <input type="text" id="destination" name="destination" placeholder="e.g. United Kingdom" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="service">Service Needed</label>
                    <select id="service" name="service">
                      <option value="">Select a service</option>
                      <option value="visa">Visa Services</option>
                      <option value="travel">Travel Coordination</option>
                      <option value="support">Additional Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" required placeholder="Tell us about your visa needs..." />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact
