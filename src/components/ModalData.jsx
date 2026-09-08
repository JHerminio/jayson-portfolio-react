import React from "react";

export const navLinks = [
  { path: "/", label: "Home", icon: "ph ph-house", key: "Home" },
  {
    path: "/projects",
    label: "Projects",
    icon: "ph ph-folder",
    key: "Projects",
  },
  {
    path: "/services",
    label: "Services",
    icon: "ph ph-stack",
    key: "Services",
  },
  {
    path: "/kape-tools",
    label: "Kape Tools",
    icon: "ph ph-wrench",
    key: "Kape Tools",
  },
  {
    path: "/testimonials",
    label: "Testimonials",
    icon: "ph ph-star",
    key: "Testimonials",
  },
  { path: "/about", label: "About", icon: "ph ph-user", key: "About" },
  {
    path: "/contact",
    label: "Contact",
    icon: "ph ph-chat-circle",
    key: "Contact",
  },
];

export const modalContentMap = {
  "/projects": {
    icon: "ph-folder",
    title: "Featured Projects",
    content: (
      <>
        <p style={{ marginBottom: "1.25rem" }}>
          Engineering robust systems, custom workflows, and high-converting app
          platforms:
        </p>

        {/* 3 Flex Cards Container */}
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}
        >
          {/* Card 1 */}
          <a
            href="https://your-live-project-link-1.com"
            target="_blank"
            rel="noopener noreferrer"
            className="project-modal-card"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              padding: "0.875rem",
              background: "#f8fafc",
              borderRadius: "16px",
              textDecoration: "none",
              color: "inherit",
              border: "1px solid rgba(0,0,0,0.05)",
              transition:
                "transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80"
              alt="Custom Coded Sales Funnels"
              style={{
                width: "85px",
                height: "70px",
                objectFit: "cover",
                borderRadius: "10px",
                flexShrink: 0,
              }}
            />
            <div style={{ flexGrow: 1 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "0.25rem",
                }}
              >
                <strong
                  style={{ fontSize: "0.95rem", color: "var(--text-main)" }}
                >
                  Custom Coded Sales Funnels
                </strong>
                <i
                  className="ph ph-arrow-up-right"
                  style={{ color: "var(--accent-orange)", fontSize: "1.1rem" }}
                ></i>
              </div>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "var(--text-muted)",
                  margin: 0,
                  lineHeight: "1.4",
                }}
              >
                High-converting, pixel-perfect responsive web pages and
                automated checkout flows.
              </p>
            </div>
          </a>

          {/* Card 2 */}
          <a
            href="https://your-live-project-link-2.com"
            target="_blank"
            rel="noopener noreferrer"
            className="project-modal-card"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              padding: "0.875rem",
              background: "#f8fafc",
              borderRadius: "16px",
              textDecoration: "none",
              color: "inherit",
              border: "1px solid rgba(0,0,0,0.05)",
              transition:
                "transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=300&q=80"
              alt="GoHighLevel (GHL) Automations"
              style={{
                width: "85px",
                height: "70px",
                objectFit: "cover",
                borderRadius: "10px",
                flexShrink: 0,
              }}
            />
            <div style={{ flexGrow: 1 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "0.25rem",
                }}
              >
                <strong
                  style={{ fontSize: "0.95rem", color: "var(--text-main)" }}
                >
                  GoHighLevel Automations
                </strong>
                <i
                  className="ph ph-arrow-up-right"
                  style={{ color: "var(--accent-orange)", fontSize: "1.1rem" }}
                ></i>
              </div>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "var(--text-muted)",
                  margin: 0,
                  lineHeight: "1.4",
                }}
              >
                End-to-end lead workflows, CRM pipelines, and appointment
                booking automation.
              </p>
            </div>
          </a>

          {/* Card 3 */}
          <a
            href="https://your-live-project-link-3.com"
            target="_blank"
            rel="noopener noreferrer"
            className="project-modal-card"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              padding: "0.875rem",
              background: "#f8fafc",
              borderRadius: "16px",
              textDecoration: "none",
              color: "inherit",
              border: "1px solid rgba(0,0,0,0.05)",
              transition:
                "transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=300&q=80"
              alt="Custom API Integrations"
              style={{
                width: "85px",
                height: "70px",
                objectFit: "cover",
                borderRadius: "10px",
                flexShrink: 0,
              }}
            />
            <div style={{ flexGrow: 1 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "0.25rem",
                }}
              >
                <strong
                  style={{ fontSize: "0.95rem", color: "var(--text-main)" }}
                >
                  Custom API Integrations
                </strong>
                <i
                  className="ph ph-arrow-up-right"
                  style={{ color: "var(--accent-orange)", fontSize: "1.1rem" }}
                ></i>
              </div>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "var(--text-muted)",
                  margin: 0,
                  lineHeight: "1.4",
                }}
              >
                Data sync between webhooks, third-party platforms, and custom
                backend tools.
              </p>
            </div>
          </a>
        </div>
      </>
    ),
  },
  "/services": {
    icon: "ph-stack",
    title: "Services & Capabilities",
    content: (
      <>
        <p>Specialized dev solutions built once to run seamlessly forever:</p>
        <ul>
          <li>
            <strong>01. Coded Funnels:</strong> Pixel-perfect responsive web
            pages
          </li>
          <li>
            <strong>02. Automation:</strong> End-to-end CRM lead workflows
          </li>
          <li>
            <strong>03. AI Agents:</strong> RAG Chatbots & intelligent
            assistants
          </li>
        </ul>
      </>
    ),
  },
  "/kape-tools": {
    icon: "ph-wrench",
    title: "Kape Tools & Integrations",
    content: (
      <>
        <p>
          Internal developer tooling and automation suites built to accelerate
          builds:
        </p>
        <ul>
          <li>
            <i
              className="ph-fill ph-robot"
              style={{ color: "var(--accent-orange)" }}
            ></i>{" "}
            <strong>KopeAI:</strong> Context-aware task agent
          </li>
          <li>
            <i
              className="ph-fill ph-magnifying-glass"
              style={{ color: "var(--accent-orange)" }}
            ></i>{" "}
            <strong>KopeSEO:</strong> Automated auditing tool
          </li>
          <li>
            <i
              className="ph-fill ph-database"
              style={{ color: "var(--accent-orange)" }}
            ></i>{" "}
            <strong>Kape Search:</strong> AI knowledge retrieval
          </li>
        </ul>
      </>
    ),
  },
  "/testimonials": {
    icon: "ph-star",
    title: "Client Reviews",
    content: (
      <>
        <p>
          "Jayson optimized our entire operational pipeline and cut down our
          manual response time to zero."
        </p>
        <div
          style={{
            marginTop: "1rem",
            padding: "0.75rem",
            background: "#f8fafc",
            borderRadius: "12px",
          }}
        >
          <strong>— Operations Manager</strong>
          <p
            style={{
              fontSize: "0.8rem",
              color: "var(--text-muted)",
              margin: 0,
            }}
          >
            GHL Build • Membership • Automation
          </p>
        </div>
      </>
    ),
  },
  "/about": {
    icon: "ph-user",
    title: "About Jayson Herminio",
    content: (
      <>
        <p>
          I am a developer and certified GHL Admin dedicated to designing
          scalable workflows and modern minimalist web products.
        </p>
        <p>
          <strong>Core Philosophy:</strong> Lost leads are never found again. A
          workflow built once works forever.
        </p>
      </>
    ),
  },
  "/contact": {
    icon: "ph-chat-circle",
    title: "Get In Touch",
    content: (
      <>
        <p>Ready to automate your workflows or build custom web solutions?</p>
        <ul>
          <li>
            <i
              className="ph-fill ph-envelope-simple"
              style={{ color: "var(--accent-orange)" }}
            ></i>{" "}
            Email:
            <a
              href="https://your-live-project-link-1.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              jaysonberherminio@gmail.com
            </a>
          </li>
          <li>
            <i
              className="ph-fill ph-linkedin-logo"
              style={{ color: "var(--accent-orange)" }}
            ></i>{" "}
            LinkedIn:
            <a
              href="https://www.linkedin.com/in/jbherminio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.linkedin.com/in/jbherminio/
            </a>
          </li>
        </ul>
      </>
    ),
  },
};
