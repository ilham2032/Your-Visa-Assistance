import React from "react";
import { Link } from "react-router";
import PageHero from "../Components/PageHero";
import RoboChallenge from "../assets/Robochallenge_logo.webp";
import Robotex from "../assets/Robotex_International_red.png";
import Fibonacci from "../assets/images-removebg-preview.png";
import FSI from "../assets/images-removebg-preview (1).png";
import FIRST from "../assets/FIRST_Robotics_Competition_(logo).svg";

const competitionLogos = [
  { name: "RoboChallenge", src: RoboChallenge },
  { name: "Robotex", src: Robotex },
  { name: "Fibonacci", src: Fibonacci },
  { name: "FSI All Japan Robot", src: FSI },
  { name: "FIRST robotics Competition", src: FIRST },
];

const RoboticsCompetitions: React.FC = () => {
  return (
    <main>
      <PageHero
        title="Robotics Competition Support"
        subtitle="Dedicated visa and travel support for Azerbaijani robotics teams competing internationally."
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Services", to: "/services/visa-services" },
          { label: "Robotics Competitions" },
        ]}
      />

      <section className="page-content">
        <div className="container">
          <section className="logo-marquee-section logo-marquee-top">
            <div className="logo-marquee">
              <div className="logo-marquee-track">
                {competitionLogos
                  .concat(competitionLogos)
                  .map((competition, index) => (
                    <div
                      className="marquee-logo"
                      key={`${competition.name}-${index}`}
                      aria-label={competition.name}
                    >
                      <img src={competition.src} alt={competition.name} />
                    </div>
                  ))}
              </div>
            </div>
          </section>

          <div className="service-detail-grid">
            <div className="service-detail-content">
              <h2>Professional Competition Travel Support</h2>
              <p>
                Azerbaijan's robotics community competes at national and
                international tournaments, but organizing travel, visas, and
                team logistics for competition delegations can be complex. Your
                Visa Assistance helps teams arrive on time, prepared, and
                focused on performance.
              </p>
              <p>
                We specialize in robotics competition travel for students,
                coaches, mentors, and support staff, guiding every delegation
                through embassy protocols, invitations, and route planning.
              </p>

              <div className="feature-row">
                <div className="highlight-card">
                  <h4>Competition-ready visa guidance</h4>
                  <p>
                    Customized support for robotics teams, including invitation
                    letter preparation and deadline management.
                  </p>
                </div>
                <div className="highlight-card">
                  <h4>Team logistics coordination</h4>
                  <p>
                    Travel plans that align with competition schedules, training
                    sessions, and group arrival needs.
                  </p>
                </div>
                <div className="highlight-card">
                  <h4>Fast-track support</h4>
                  <p>
                    Urgent and last-minute cases receive priority assistance to
                    keep teams competition-ready.
                  </p>
                </div>
              </div>

              <h3>What We Offer</h3>
              <ul className="feature-list">
                <li>Dedicated robotics competition visa consultations</li>
                <li>
                  Assistance with embassy applications and invitation documents
                </li>
                <li>
                  Support for coaches, mentors, competitors, and delegation
                  staff
                </li>
                <li>Group travel coordination and multi-passport processing</li>
                <li>
                  Recommendations for competition entry, transit, and arrival
                  timing
                </li>
                <li>
                  Support for training camps, qualifications, and championship
                  travel
                </li>
              </ul>
            </div>

            <aside className="service-sidebar">
              <h3>Robotics Teams Trust Us</h3>
              <ul className="feature-list">
                <li>Strong knowledge of tournament travel demands</li>
                <li>Experienced with Azerbaijani robotics delegation needs</li>
                <li>Flexible support for sudden schedule changes</li>
                <li>
                  Clear communication through every stage of travel preparation
                </li>
              </ul>
              <Link to="/contact" className="btn btn-accent">
                Request Team Support
              </Link>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RoboticsCompetitions;
