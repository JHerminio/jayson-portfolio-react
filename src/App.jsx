import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MobileHeader from "./components/MobileHeader";
import MobileFooter from "./components/MobileFooter";

import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";

import HeroSection from "./components/HeroSection";
import Ticker from "./components/Ticker";
import ModalOverlay from "./components/ModalOverlay";
import "./App.css";

function MainLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div>
      <MobileHeader isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      <div className="app-container">
        <LeftSidebar isMenuOpen={isMenuOpen} closeMenu={closeMenu} />

        <main className="main-content">
          <HeroSection />
          <Ticker />
          <RightSidebar />
          <MobileFooter />
        </main>
      </div>

      {/* Modal Controller linked with React Router */}
      <ModalOverlay />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<MainLayout />} />
      </Routes>
    </Router>
  );
}
