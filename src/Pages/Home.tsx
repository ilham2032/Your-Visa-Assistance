import React from 'react'
import AnimatedBackground from '../Components/AnimatedBackground'

const Home: React.FC = () => {
  return (
    <main className="home">
      <section className="hero">
        <AnimatedBackground />
        <div className="hero-inner">
          <div className="hero-content">
            <h1 className="hero-title animate-slide-left">Your Visa Assistance</h1>
            <p className="hero-subtitle animate-fade" style={{ animationDelay: '0.2s' }}>Professional visa support and consultancy based in Azerbaijan</p>
            <p className="hero-description animate-slide-up" style={{ animationDelay: '0.4s' }}>Navigate your immigration journey with expert guidance from our team of experienced professionals</p>
            <div className="hero-buttons animate-scale" style={{ animationDelay: '0.6s' }}>
              <a href="#contact" className="cta-primary">Get a Free Consultation</a>
              <a href="#services" className="cta-secondary">Explore Services</a>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">195</div>
            <div className="stat-label">Countries</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">104,148</div>
            <div className="stat-label">Applications</div>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="services-container">
          <div className="section-header">
            <h2>Our Services</h2>
            <p>Everything you need for a successful visa application</p>
          </div>
          <div className="cards">
            <div className="card">
              <div className="card-icon">📋</div>
              <h3>Visa Consultation</h3>
              <p>Personalised guidance for the right visa path based on your destination and circumstances.</p>
            </div>
            <div className="card">
              <div className="card-icon">✅</div>
              <h3>Application Support</h3>
              <p>End-to-end application preparation and submission with expert review.</p>
            </div>
            <div className="card">
              <div className="card-icon">📄</div>
              <h3>Document Review</h3>
              <p>Ensure all your documents meet official requirements for approval.</p>
            </div>
            <div className="card">
              <div className="card-icon">🚀</div>
              <h3>Fast Track Service</h3>
              <p>Expedited processing for time-sensitive visa applications.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-inner">
          <h2>Ready to Start Your Visa Journey?</h2>
          <p>Let our experts guide you through every step</p>
          <a href="#contact" className="cta-button">Schedule a Consultation Today</a>
        </div>
      </section>


      <style>{`
        .home {
          padding: 0;
        }

        /* Hero Section */
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding-top: 60px;
        }

        .hero-inner {
          position: relative;
          z-index: 10;
          max-width: 850px;
          margin: 0 auto;
          padding: 80px 40px;
          text-align: center;
        }

        .hero-content {
          animation: fadeInUp 0.8s ease-out;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-title {
          margin: 0 0 24px;
          font-size: 64px;
          font-weight: 800;
          background: linear-gradient(135deg, #dc2626 0%, #1e3a8a 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1.15;
          letter-spacing: -1px;
          font-family: var(--heading);
        }

        .hero-subtitle {
          margin: 0 0 20px;
          font-size: 22px;
          font-weight: 700;
          color: #1e3a8a;
          line-height: 1.4;
          font-family: var(--heading);
        }

        .hero-description {
          margin: 0 0 48px;
          font-size: 17px;
          color: #4b5563;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.8;
          font-weight: 500;
        }

        .hero-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-primary {
          background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
          color: white;
          padding: 15px 36px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          font-size: 15px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(30, 58, 138, 0.3);
          display: inline-block;
        }

        .cta-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(30, 58, 138, 0.4);
        }

        .cta-secondary {
          background: white;
          color: #1e3a8a;
          padding: 15px 36px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          font-size: 15px;
          border: 2px solid #1e3a8a;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .cta-secondary:hover {
          background: #f0f4ff;
          transform: translateY(-2px);
        }

        /* Stats Section */
        .stats-section {
          padding: 80px 40px;
          background: white;
          border-top: 1px solid #e5e7eb;
          border-bottom: 1px solid #e5e7eb;
        }

        .stats-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 80px;
        }

        .stat-item {
          text-align: center;
          flex: 1;
          max-width: 300px;
        }

        .stat-number {
          font-size: 56px;
          font-weight: 800;
          background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 12px;
          font-family: 'Segoe UI', Roboto, -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .stat-label {
          font-size: 18px;
          font-weight: 600;
          color: #6b7280;
          font-family: 'Segoe UI', Roboto, -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .stat-divider {
          width: 2px;
          height: 80px;
          background: linear-gradient(180deg, transparent 0%, #e5e7eb 50%, transparent 100%);
        }

        /* Services Section */
        .services {
          padding: 120px 40px;
          background: #f8fafc;
        }

        .services-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .section-header h2 {
          margin: 0 0 16px;
          font-size: 44px;
          font-weight: 800;
          color: #1f2937;
          letter-spacing: -0.5px;
        }

        .section-header p {
          margin: 0;
          font-size: 17px;
          color: #6b7280;
          line-height: 1.6;
        }

        .cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 32px;
        }

        .card {
          background: white;
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
          transition: all 0.3s ease;
          border: 1px solid #e5e7eb;
        }

        .card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
        }

        .card-icon {
          font-size: 48px;
          margin-bottom: 20px;
          display: block;
        }

        .card h3 {
          margin: 0 0 14px;
          font-size: 19px;
          font-weight: 700;
          color: #1f2937;
        }

        .card p {
          margin: 0;
          color: #6b7280;
          font-size: 14px;
          line-height: 1.7;
        }

        /* CTA Section */
        .cta-section {
          background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
          padding: 120px 40px;
          text-align: center;
        }

        .cta-inner {
          max-width: 700px;
          margin: 0 auto;
        }

        .cta-inner h2 {
          margin: 0 0 16px;
          font-size: 40px;
          font-weight: 800;
          color: white;
          letter-spacing: -0.5px;
        }

        .cta-inner p {
          margin: 0 0 40px;
          font-size: 17px;
          color: rgba(255, 255, 255, 0.95);
          line-height: 1.6;
        }

        .cta-button {
          background: white;
          color: #1e3a8a;
          padding: 15px 40px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          font-size: 15px;
          display: inline-block;
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero-inner {
            padding: 60px 24px;
          }

          .hero-title {
            font-size: 44px;
            margin-bottom: 16px;
          }

          .hero-subtitle {
            font-size: 20px;
          }

          .hero-description {
            font-size: 15px;
            margin-bottom: 32px;
          }

          .hero-buttons {
            gap: 12px;
          }

          .stats-section {
            padding: 60px 24px;
          }

          .stats-container {
            flex-direction: column;
            gap: 40px;
          }

          .stat-divider {
            width: 80px;
            height: 2px;
          }

          .stat-number {
            font-size: 40px;
          }

          .stat-label {
            font-size: 16px;
          }

          .section-header {
            margin-bottom: 50px;
          }

          .section-header h2 {
            font-size: 32px;
          }

          .services {
            padding: 80px 24px;
          }

          .cards {
            gap: 20px;
          }

          .card {
            padding: 28px;
          }

          .cta-section {
            padding: 80px 24px;
          }

          .cta-inner h2 {
            font-size: 32px;
          }

          .cta-inner p {
            margin-bottom: 28px;
          }

          .cta-primary,
          .cta-secondary,
          .cta-button {
            width: 100%;
            max-width: 280px;
          }
        }
      `}</style>
    </main>
  )
}

export default Home
