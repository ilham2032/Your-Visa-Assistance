import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import logo from "../assets/yva-logo.png";
import "../styles/navbar.css";

const serviceLinks = [
  {
    to: "/services/visa-services",
    label: "Visa Services",
    desc: "Application & documentation",
  },
  {
    to: "/services/robotics-competitions",
    label: "Robotics Competitions",
    desc: "Team travel support",
  },
  {
    to: "/services/travel-coordination",
    label: "Travel Coordination",
    desc: "Flights & itineraries",
  },
  {
    to: "/services/additional-support",
    label: "Additional Support",
    desc: "Translation & insurance",
  },
];

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (path: string) =>
    path === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(path);

  const isServiceActive = serviceLinks.some((s) => location.pathname === s.to);
  const isDesktop = () => window.matchMedia("(min-width: 969px)").matches;

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-accent" aria-hidden="true">
        <span className="accent-blue" />
        <span className="accent-white" />
        <span className="accent-red" />
      </div>

      <nav className="navbar-inner container">
        <Link
          to="/"
          className="navbar-brand"
          aria-label="Your Visa Assistance — Home"
        >
          <img src={logo} alt="Your Visa Assistance" className="navbar-logo" />
        </Link>

        <button
          className={`navbar-toggle ${mobileOpen ? "open" : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`navbar-menu ${mobileOpen ? "open" : ""}`}>
          <Link
            to="/"
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`nav-link ${isActive("/about") ? "active" : ""}`}
          >
            About
          </Link>

          <div
            className={`nav-dropdown ${servicesOpen ? "open" : ""} ${isServiceActive ? "active" : ""}`}
            onMouseEnter={() => isDesktop() && setServicesOpen(true)}
            onMouseLeave={() => isDesktop() && setServicesOpen(false)}
          >
            <button
              className="nav-link nav-dropdown-trigger"
              onClick={() => setServicesOpen(!servicesOpen)}
              aria-expanded={servicesOpen}
            >
              Services
              <svg
                className="dropdown-chevron"
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
              >
                <path
                  d="M2 3.5L5 6.5L8 3.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="nav-dropdown-menu">
              {serviceLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`nav-dropdown-item ${location.pathname === link.to ? "active" : ""}`}
                >
                  <span className="dropdown-item-label">{link.label}</span>
                  <span className="dropdown-item-desc">{link.desc}</span>
                </Link>
              ))}
            </div>
          </div>

          <Link
            to="/faq"
            className={`nav-link ${isActive("/faq") ? "active" : ""}`}
          >
            FAQ
          </Link>
          <Link
            to="/countries"
            className={`nav-link ${isActive("/countries") ? "active" : ""}`}
          >
            Countries
          </Link>
          <Link
            to="/contact"
            className={`nav-link ${isActive("/contact") ? "active" : ""}`}
          >
            Contact
          </Link>

          <Link to="/contact" className="nav-cta">
            Free Consultation
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
