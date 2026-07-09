import React from 'react'
import { Link } from 'react-router'
import PageHero from '../Components/PageHero'

const TravelCoordination: React.FC = () => {
  return (
    <main>
      <PageHero
        title="Travel Coordination"
        subtitle="Seamless travel planning integrated with your visa process for a stress-free journey."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Services' }, { label: 'Travel Coordination' }]}
      />

      <section className="page-content">
        <div className="container">
          <div className="service-detail-grid">
            <div className="service-detail-content">
              <h2>End-to-End Travel Planning</h2>
              <p>
                Getting your visa is just the beginning. Our travel coordination services ensure your entire journey — from departure to return — is planned and organized alongside your visa application, saving you time and eliminating logistical headaches.
              </p>
              <ul className="feature-list">
                <li>Tailor-made itineraries for groups, incestives, or special events</li>
                <li>Collective transport, group accommodation, and local guides</li>
                <li>Coordination for visa documentation for participants of different nationalities</li>
                <li>Travel insurance & international medical coverage: ensuring compliance with consular requirements</li>
                <li>Pre-departure & on-trip assistance: travel briefings, emergency contacts, real-time support abroad</li>
              </ul>
            </div>
            <div className="service-sidebar">
              <h3>Why Coordinate With Us?</h3>
              <ul className="feature-list">
                <li>Aligned with visa requirements</li>
                <li>Single point of contact</li>
                <li>Cost-effective packages</li>
                <li>24/7 travel support</li>
                <li>Flexible booking changes</li>
                <li>Group travel arrangements</li>
              </ul>
              <Link to="/contact" className="btn btn-accent">Plan Your Trip</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="cta-banner-inner">
          <h2>Ready to Plan Your Journey?</h2>
          <p>Let us handle the logistics while you focus on your destination.</p>
          <Link to="/contact" className="btn btn-white">Contact Our Travel Team</Link>
        </div>
      </section>
    </main>
  )
}

export default TravelCoordination
