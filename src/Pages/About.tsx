import React from 'react'
import { Link } from 'react-router'
import PageHero from '../Components/PageHero'
import { IconTarget, IconShield, IconGlobe } from '../Components/Icons'

const About: React.FC = () => {
  return (
    <main>
      <PageHero
        title="About Us"
        subtitle="Your trusted partner for visa consultancy and global travel support, based in the heart of Baku, Azerbaijan."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'About' }]}
      />

      <section className="page-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-intro">
              <span className="about-intro-label">Our Story</span>
              <h2>Professional Visa Guidance You Can Trust</h2>
              <p>
                Your Visa Assistance is a professional consultancy firm specializing in visa guidance, application support, and travel coordination. Based in Baku, Azerbaijan, we serve clients worldwide who need reliable, expert help navigating complex immigration processes.
              </p>
              <p>
                With experience processing over 100,000 applications across 195 countries, our team understands the nuances of every visa category — tourist, business, student, work, and family reunification. We take the stress out of immigration so you can focus on your journey.
              </p>
              <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
            </div>
            <div className="about-highlight">
              <h3>Every Country. Every Visa Type.</h3>
              <p>
                From Schengen to USA, UK to Australia — we provide end-to-end support for visa applications to any destination in the world. No matter where you're going, we have the expertise to get you there.
              </p>
            </div>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-card-icon"><IconTarget size={22} /></div>
              <h4>Precision</h4>
              <p>Meticulous document review and application preparation to maximize approval rates.</p>
            </div>
            <div className="value-card">
              <div className="value-card-icon"><IconShield size={22} /></div>
              <h4>Integrity</h4>
              <p>Transparent processes and honest guidance at every stage of your application.</p>
            </div>
            <div className="value-card">
              <div className="value-card-icon"><IconGlobe size={22} /></div>
              <h4>Global Reach</h4>
              <p>Expert knowledge of visa requirements for all 195 countries worldwide.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
