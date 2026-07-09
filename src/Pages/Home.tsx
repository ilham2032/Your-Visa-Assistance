import React from 'react'
import { Link } from 'react-router'
import AnimatedBackground from '../Components/AnimatedBackground'
import { IconVisa, IconTravel, IconSupport, IconGlobe, IconDocument, IconFast, IconChat } from '../Components/Icons'
import '../styles/home.css'

const Home: React.FC = () => {
  return (
    <main className="home">
      <section className="hero">
        <AnimatedBackground />
        <div className="hero-inner">
          <span className="hero-badge">Trusted Visa Consultancy · Baku, Azerbaijan</span>
          <h1 className="hero-title">Your Gateway to <span>Global Travel</span></h1>
          <p className="hero-subtitle">
            Expert visa assistance for every country in the world — from application to approval.
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary">Get a Free Consultation</Link>
            <Link to="/services/visa-services" className="btn btn-secondary">Explore Services</Link>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div className="stats-row">
            <div className="stat-item">
              <div className="stat-number">195<span>+</span></div>
              <div className="stat-label">Countries Covered</div>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <div className="stat-number">100K<span>+</span></div>
              <div className="stat-label">Applications Processed</div>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <div className="stat-number">98<span>%</span></div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-label">What We Offer</span>
            <h2>Comprehensive Visa & Travel Services</h2>
            <p>End-to-end support tailored to your destination, timeline, and travel goals.</p>
          </div>
          <div className="card-grid">
            <Link to="/services/visa-services" className="card card-link">
              <div className="card-icon"><IconVisa size={24} /></div>
              <h3>Visa Services</h3>
              <p>Expert guidance on visa types, eligibility, documentation, and application submission for any country.</p>
            </Link>
            <Link to="/services/travel-coordination" className="card card-link">
              <div className="card-icon"><IconTravel size={24} /></div>
              <h3>Travel Coordination</h3>
              <p>Flight bookings, itinerary planning, and travel logistics coordinated alongside your visa process.</p>
            </Link>
            <Link to="/services/additional-support" className="card card-link">
              <div className="card-icon"><IconSupport size={24} /></div>
              <h3>Additional Support</h3>
              <p>Document translation, insurance, accommodation guidance, and post-approval travel assistance.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Why Choose Us</span>
            <h2>Professional, Reliable, Worldwide</h2>
            <p>We combine deep immigration expertise with personalized service for every client.</p>
          </div>
          <div className="card-grid">
            <div className="card">
              <div className="card-icon"><IconGlobe size={24} /></div>
              <h3>Every Country</h3>
              <p>We assist with visa applications for all 195 countries — no destination is out of reach.</p>
            </div>
            <div className="card">
              <div className="card-icon"><IconDocument size={24} /></div>
              <h3>Document Expertise</h3>
              <p>Thorough review ensures your application meets all official requirements the first time.</p>
            </div>
            <div className="card">
              <div className="card-icon"><IconFast size={24} /></div>
              <h3>Fast Track Options</h3>
              <p>Expedited processing available for urgent travel needs and time-sensitive applications.</p>
            </div>
            <div className="card">
              <div className="card-icon"><IconChat size={24} /></div>
              <h3>Dedicated Support</h3>
              <p>Personal consultants guide you through every step — from first inquiry to visa approval.</p>
            </div>
          </div>

          <div className="process-steps">
            <div className="process-step">
              <div className="process-step-num">1</div>
              <h4>Free Consultation</h4>
              <p>Discuss your travel goals and visa requirements with our experts.</p>
            </div>
            <div className="process-step">
              <div className="process-step-num">2</div>
              <h4>Document Preparation</h4>
              <p>We prepare and review all required documents for your application.</p>
            </div>
            <div className="process-step">
              <div className="process-step-num">3</div>
              <h4>Application Submission</h4>
              <p>Your application is submitted with full accuracy and compliance.</p>
            </div>
            <div className="process-step">
              <div className="process-step-num">4</div>
              <h4>Visa Approval</h4>
              <p>Receive your visa and travel with confidence to your destination.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="cta-banner-inner">
          <h2>Ready to Start Your Visa Journey?</h2>
          <p>Schedule a free consultation with our experts and take the first step toward your destination.</p>
          <Link to="/contact" className="btn btn-white">Schedule a Consultation Today</Link>
        </div>
      </section>
    </main>
  )
}

export default Home
