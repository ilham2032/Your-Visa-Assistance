import React from 'react'
import { Link } from 'react-router'
import PageHero from '../Components/PageHero'

const VisaServices: React.FC = () => {
  return (
    <main>
      <PageHero
        title="Visa Services"
        subtitle="Comprehensive visa application support for every country and every visa category."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Services' }, { label: 'Visa Services' }]}
      />

      <section className="page-content">
        <div className="container">
          <div className="service-detail-grid">
            <div className="service-detail-content">
              <h2>Expert Visa Application Support</h2>
              <p>
                Navigating visa requirements can be overwhelming. Our experienced consultants simplify the process by providing personalized guidance tailored to your destination, purpose of travel, and individual circumstances.
              </p>
              <ul className="feature-list">
                <li>Consultation and documentation for Shenghen Visas</li>
                <li>Documentation process and interview preparation for the U.S. visa</li>
                <li>Support for the United Kingdom and Canada visas: document collection, verification,uploading to the online portal, and process monitoring</li>
                <li>Assistance with tourist, business, and student visa applications</li>
                <li>Consultation regarding transit visas</li>
                <li>Visa extensions and renewals</li>
                <li>Express / urgent visa processing</li>
              </ul>
            </div>
            <div className="service-sidebar">
              <h3>Visa Types We Handle</h3>
              <ul className="feature-list">
                <li>Tourist & Visitor Visas</li>
                <li>Business & Work Visas</li>
                <li>Student & Study Visas</li>
                <li>Family & Spouse Visas</li>
                <li>Transit & Airport Visas</li>
                <li>Schengen & Multi-Entry Visas</li>
              </ul>
              <Link to="/contact" className="btn btn-accent">Request a Free Consultation</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="cta-banner-inner">
          <h2>Need Help With Your Visa Application?</h2>
          <p>Our experts are ready to guide you through every step of the process.</p>
          <Link to="/contact" className="btn btn-white">Get Started Today</Link>
        </div>
      </section>
    </main>
  )
}

export default VisaServices
