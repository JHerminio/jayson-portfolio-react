import React from "react";
import { NavLink } from "react-router-dom";
// import { navLinks } from "../ModalData";
import { navLinks } from "../NavLinks";
import profileImg from "../../assets/jaysonherminio.jpg";

export default function Sidebar({ isMenuOpen, closeMenu }) {
  return (
    <aside className={`sidebar ${isMenuOpen ? "active" : ""}`} id="sidebar">
      <div className="profile-section">
        <img
          // src="/src/assets/jaysonherminio.jpg"
          src={profileImg}
          alt="Jayson Herminio"
          className="profile-img"
        />
        <h1 className="profile-name">
          Jayson Herminio
          <i className="ph-fill ph-check-circle verified-badge"></i>
        </h1>
        <p className="profile-handle">@jherminio</p>

        <div className="social-links">
          <a href="#" className="social-btn" aria-label="Facebook">
            <i className="ph-fill ph-facebook-logo"></i>
          </a>
          <a href="#" className="social-btn" aria-label="LinkedIn">
            <i className="ph-fill ph-linkedin-logo"></i>
          </a>
          <a href="#" className="social-btn" aria-label="GitHub">
            <i className="ph-fill ph-github-logo"></i>
          </a>
        </div>
      </div>

      <nav className="main-nav">
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            end={link.path === "/"}
            className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
            onClick={closeMenu}
          >
            <i className={link.icon}></i> {link.label}
          </NavLink>
        ))}
      </nav>

      <div className="footer">
        <i className="ph-fill ph-seal-check"></i>
        <div>
          <p>© 2026</p>
          <p>Jayson Herminio. All rights reserved.</p>
        </div>
      </div>
    </aside>
  );
}
