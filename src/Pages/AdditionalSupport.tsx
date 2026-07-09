import React from 'react'
import { Link } from 'react-router'
import PageHero from '../Components/PageHero'

const AdditionalSupport: React.FC = () => {
  return (
    <main>
      <PageHero
        title="Additional Support"
        subtitle="Extra services to complement your visa application and ensure a smooth travel experience."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Services' }, { label: 'Additional Support' }]}
      />

      <section className="page-content">
        <div className="container">
          <div className="service-detail-grid">
            <div className="service-detail-content">
              <h2>Beyond Visa Applications</h2>
              <p>
                We go the extra mile to support every aspect of your international travel. From document preparation to post-arrival guidance, our additional services ensure nothing is overlooked in your journey abroad.
              </p>
              <ul className="feature-list">
                <li>Appointment Scheduling with Consulates & Embassies</li>
                <li>Translation & Notarization of Documents</li>
                <li>Guidance on Travel Nnsurances Requirements</li>
                <li>Consultation on Country-Specific Entry Regulations</li>
                <li>Verification of essential requirements: valid passport, health insurance, financial means, inviation letters, etc.</li>
              </ul>
            </div>
            <div className="service-sidebar">
              <h3>Support Categories</h3>
              <ul className="feature-list">
                <li>Document Services</li>
                <li>Financial Documentation</li>
                <li>Insurance & Health</li>
                <li>Accommodation Support</li>
                <li>Legal & Notarization</li>
                <li>Post-Approval Assistance</li>
              </ul>
              <Link to="/contact" className="btn btn-accent">Ask About Our Services</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="cta-banner-inner">
          <h2>Need Extra Help With Your Travel Plans?</h2>
          <p>Our team is here to support every detail of your international journey.</p>
          <Link to="/contact" className="btn btn-white">Get in Touch</Link>
        </div>
      </section>
    </main>
  )
}

export default AdditionalSupport
