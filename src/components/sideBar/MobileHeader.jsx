import React from "react";
import profileImg from "../../assets/jaysonherminio.jpg";

export default function MobileHeader({ isMenuOpen, toggleMenu }) {
  return (
    <div className="mobile-header">
      <div className="mobile-logo">
        <img
          // src="/src/assets/jaysonherminio.jpg"
          src={profileImg}
          alt="Profile"
          className="mobile-avatar"
        />
        <span>JHerminio</span>
      </div>
      <button
        className="mobile-menu-btn"
        onClick={toggleMenu}
        aria-label="Toggle Navigation"
      >
        <i className={`ph ${isMenuOpen ? "ph-x" : "ph-list"}`}></i>
      </button>
    </div>
  );
}
