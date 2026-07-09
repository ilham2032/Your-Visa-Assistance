import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import FAQ from "./Pages/FAQ";
import Countries from "./Pages/Countries";
import VisaServices from "./Pages/VisaServices";
import TravelCoordination from "./Pages/TravelCoordination";
import AdditionalSupport from "./Pages/AdditionalSupport";
import RoboticsCompetitions from "./Pages/RoboticsCompetitions";
import "./styles/site.css";

const ScrollToTop: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <div className="app-layout">
      <Navbar />
      <ScrollToTop />
      <div className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/services/visa-services" element={<VisaServices />} />
          <Route
            path="/services/robotics-competitions"
            element={<RoboticsCompetitions />}
          />
          <Route
            path="/services/travel-coordination"
            element={<TravelCoordination />}
          />
          <Route
            path="/services/additional-support"
            element={<AdditionalSupport />}
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
