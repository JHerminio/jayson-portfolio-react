import React from "react";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <header className="hero-section">
      <div className="hero-text">
        <h2 className="hero-title">Build it once. Run it forever.</h2>
        <p className="hero-subtitle">
          Lost leads are never found again. A workflow built once works forever,
          and the follow-up that fires itself never asks for a raise.
        </p>
      </div>
      <button
        className="cta-button primary-cta"
        onClick={() => navigate("/contact")}
      >
        Get in touch <i className="ph ph-arrow-up-right"></i>
      </button>
    </header>
  );
}
