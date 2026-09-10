import React from "react";
import { useNavigate } from "react-router-dom";

export default function BentoGrid() {
  const navigate = useNavigate();

  return (
    <div className="bento-grid">
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
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80"
            alt="Project Preview"
          />
          <div className="overlay-text">Seven days to remember what strong</div>
        </div>
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
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=300&q=80"
            alt="Working"
          />
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
        <p className="card-desc">Certified GHL Admin, Aspiring AI Engineer.</p>
        <div className="badge-container">
          <div className="cert-badge">
            <i className="ph-fill ph-seal-check"></i>
          </div>
          <span className="cert-label">Certified Admin</span>
        </div>
      </div>

      {/* Services Card */}
      <div
        className="rightSide-card span-1 interactive-card"
        onClick={() => navigate("/services")}
      >
        <div className="card-header">
          <div className="icon-box orange">
            <i className="ph ph-stack"></i>
          </div>
          <h3>SERVICES</h3>
        </div>
        <p className="card-desc">What I build for services and agencies.</p>
        <ul className="services-list">
          <li>
            <span>
              <i className="ph ph-code"></i> Coded Funnels
            </span>
            <span className="num">01</span>
          </li>
          <li>
            <span>
              <i className="ph ph-robot"></i> GHL Automation
            </span>
            <span className="num">02</span>
          </li>
          <li>
            <span>
              <i className="ph ph-database"></i> CRM Setup
            </span>
            <span className="num">03</span>
          </li>
          <li>
            <span>
              <i className="ph ph-globe"></i> Website
            </span>
            <span className="num">04</span>
          </li>
          <li>
            <span>
              <i className="ph ph-app-window"></i> Apps
            </span>
            <span className="num">05</span>
          </li>
        </ul>
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
