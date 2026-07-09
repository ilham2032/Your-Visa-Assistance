import React from "react";
import { Link } from "react-router";
import logo from "../assets/yva-logo.png";
import "../styles/footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="footer-accent" aria-hidden="true">
        <span className="accent-blue" />
        <span className="accent-white" />
        <span className="accent-red" />
      </div>

      <div className="footer-decor" aria-hidden="true">
        <svg viewBox="0 0 220 140" className="footer-plane footer-plane-1">
          <path
            d="M24 92l132-52-36 42-48 4 20 24-18 10-16-20-24 10 20-22-22-18z"
            fill="rgba(255,255,255,0.24)"
          />
          <path
            d="M24 92l132-52"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
          <path
            d="M82 78l34 8"
            stroke="rgba(255,255,255,0.24)"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>

        <svg viewBox="0 0 220 160" className="footer-map footer-map-1">
          <path
            d="M32 42h58l24-18h74v78l-34 18-44-18-34 10-44-12z"
            fill="none"
            stroke="rgba(255,255,255,0.28)"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <path
            d="M90 24v52"
            stroke="rgba(255,255,255,0.28)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M148 24v58"
            stroke="rgba(255,255,255,0.28)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M58 42v58"
            stroke="rgba(255,255,255,0.28)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <circle cx="90" cy="76" r="8" fill="rgba(255,255,255,0.24)" />
          <circle cx="148" cy="82" r="8" fill="rgba(255,255,255,0.22)" />
        </svg>

        <svg viewBox="0 0 220 140" className="footer-plane footer-plane-2">
          <path
            d="M20 84l124-46-24 32-44 2 14 20-16 8-12-16-24 10 22-22-20-18z"
            fill="rgba(255,255,255,0.2)"
          />
          <path
            d="M20 84l124-46"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>

        <svg viewBox="0 0 220 160" className="footer-map footer-map-2">
          <path
            d="M34 36h58l18-16h70v80l-42 20-44-16-40 12-20-10z"
            fill="none"
            stroke="rgba(255,255,255,0.24)"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <path
            d="M92 20v44"
            stroke="rgba(255,255,255,0.24)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M150 20v54"
            stroke="rgba(255,255,255,0.24)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <circle cx="92" cy="66" r="7" fill="rgba(255,255,255,0.2)" />
          <circle cx="150" cy="74" r="7" fill="rgba(255,255,255,0.18)" />
        </svg>
      </div>

      <div className="footer-content container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-logo-link">
              <img
                src={logo}
                alt="Your Visa Assistance"
                className="footer-logo"
              />
            </Link>
            <div className="footer-badge">Trusted global visa support</div>
            <p>
              Professional visa consultancy and travel support based in Baku,
              Azerbaijan. We guide travelers with precision, clarity, and
              dependable coordination from planning to arrival.
            </p>
            <div className="footer-highlights">
              <span>Worldwide visa guidance</span>
              <span>Document review</span>
              <span>Travel planning</span>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <nav className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/faq">FAQ</Link>
              <Link to="/countries">Countries</Link>
              <Link to="/contact">Contact</Link>
            </nav>
          </div>

          <div className="footer-col">
            <h4>Our Services</h4>
            <nav className="footer-links">
              <Link to="/services/visa-services">Visa Services</Link>
              <Link to="/services/travel-coordination">
                Travel Coordination
              </Link>
              <Link to="/services/additional-support">Additional Support</Link>
            </nav>
          </div>

          <div className="footer-col footer-contact">
            <h4>Contact Us</h4>
            <p className="footer-contact-item">
              <span className="footer-contact-label">Location</span>
              Chinar Park Business Centre, Block 5, Baku, Azerbaijan
            </p>
            <p className="footer-contact-item">
              <span className="footer-contact-label">Email</span>
              <a href="mailto:info@yourvisaassistance.az">
                info@yourvisaassistance.com
              </a>
            </p>
            <p className="footer-contact-item">
              <span className="footer-contact-label">Hours</span>
              Mon – Fri, 9:00 AM – 6:00 PM
            </p>
             <p className="footer-contact-item">
              <span className="footer-contact-label">Phone</span>
              +994 50 363 64 84
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Your Visa Assistance. All rights
            reserved.
          </p>
          <p className="footer-tagline">
            Visa assistance for all 195 countries worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
