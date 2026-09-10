import React from "react";
import { useNavigate } from "react-router-dom";
import project1Img from "../assets/little-bloomer-academy.webp"; // Little Bloomer Academy
import project2Img from "../assets/summer-splash-community-fun-run.webp"; // Summer Splash
import project3Img from "../assets/jh-background.jpg"; // Front-End Developer
import project4Img from "../assets/project-banner.png"; //
// import aboutImg1 from "../assets/about.png";

export default function RightSide() {
  const navigate = useNavigate();

  return (
    <div className="rightSide-grid">
      {/* Projects Card */}
      <div
        className="rightSide-card span-2 interactive-card"
        onClick={() => navigate("/projects")}
      >
        <div className="card-header">
          <div className="icon-box orange">
            <i className="ph ph-folder-open"></i>
          </div>
          <h3>PROJECTS</h3>
        </div>
        <p className="card-desc">
          Funnels, workflows and apps built to solve real problems.
        </p>
        <div className="project-img-wrapper">
          <img src={project4Img} alt="Project Preview" />
          <div className="overlay-text">Click to view</div>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}
        ></div>
      </div>

      {/* About Card */}
      <div
        className="rightSide-card span-1 interactive-card"
        onClick={() => navigate("/about")}
      >
        <div className="card-header">
          <div className="icon-box orange">
            <i className="ph ph-user"></i>
          </div>
          <h3>ABOUT</h3>
        </div>
        <p className="card-desc">Who I am and how I work.</p>
        <div className="about-illustration">
          {/* <img src={aboutImg1} alt="Working" /> */}
        </div>
      </div>

      {/* AI Builds Card */}
      <div
        className="rightSide-card span-1 interactive-card"
        onClick={() => navigate("/kape-tools")}
      >
        <div className="card-header">
          <div className="icon-box orange">
            <i className="ph ph-lightbulb"></i>
          </div>
          <h3>My Tech Stacks</h3>
        </div>
        <p className="card-desc">
          Agents, RAG chatbots and the tools I lean on them.
        </p>
        <div className="tags-container">
          <span className="tag">
            <i className="ph-fill ph-robot"></i> KopeAI
          </span>
          <span className="tag">
            <i className="ph-fill ph-magnifying-glass"></i> KopeSEO
          </span>
          <span className="tag">
            <i className="ph-fill ph-book-open"></i> Kape AI search
          </span>
        </div>
      </div>

      {/* Credentials Card */}
      <div
        className="rightSide-card span-1 interactive-card"
        onClick={() => navigate("/about")}
      >
        <div className="card-header">
          <div className="icon-box orange">
            <i className="ph ph-certificate"></i>
          </div>
          <h3>CREDENTIALS</h3>
        </div>
        <p className="card-desc">Certificate</p>
        <div className="badge-container">
          <div className="cert-badge">
            <i className="ph-fill ph-seal-check"></i>
          </div>
          <span className="cert-label">Certified Admin</span>
        </div>
      </div>

      {/* Testimonials Card */}
      <div className="rightSide-card span-2">
        <div className="card-header">
          <div className="icon-box orange">
            <i className="ph ph-chat-circle"></i>
          </div>
          <h3>TESTIMONIALS</h3>
        </div>
        <p className="card-desc">
          What the people I build for say about the work.
        </p>

        <div className="testimonials-list">
          {/* Client 1: Team GFE */}
          <div
            className="testimonial-item interactive-testimonial"
            onClick={(e) => {
              e.stopPropagation();
              navigate("/testimonials/team-gfe");
            }}
          >
            <div className="client-info">
              <div className="dot orange"></div>
              <strong>Team GFE</strong>
              <i className="ph ph-arrow-up-right click-icon"></i>
            </div>
            <p className="client-role">Guiguinto Fitness Enthusiasts</p>
            <p className="client-tags">
              UI/UX Design • Event Branding • Finisher Medal Design
            </p>
          </div>

          {/* Client 2 */}
          <div
            className="testimonial-item interactive-testimonial"
            onClick={(e) => {
              e.stopPropagation();
              navigate("/testimonials/client-2");
            }}
          >
            <div className="client-info">
              <div className="dot red"></div>
              <strong>Client 2</strong>
              <i className="ph ph-arrow-up-right click-icon"></i>
            </div>
            <p className="client-role">GHL Specialist & Agentic AI Engineer</p>
            <p className="client-tags">CRM • Pipelines • Forms</p>
          </div>

          {/* Client 3 */}
          <div
            className="testimonial-item interactive-testimonial"
            onClick={(e) => {
              e.stopPropagation();
              navigate("/testimonials/client-3");
            }}
          >
            <div className="client-info">
              <div className="dot orange"></div>
              <strong>Client 3</strong>
              <i className="ph ph-arrow-up-right click-icon"></i>
            </div>
            <p className="client-role">Web Dev & GHL Specialist</p>
            <p className="client-tags">Web Dev • GHL • Automation</p>
          </div>
        </div>
      </div>
    </div>
  );
}
