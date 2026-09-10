import React from "react";
import ContactForm from "../components/ContactForm";
import CvViewer from "../components/CvViewer";

import project1Img from "../assets/little-bloomer-academy.webp"; // Little Bloomer Academy
import project2Img from "../assets/summer-splash-community-fun-run.webp"; // Summer Splash
import project3Img from "../assets/jh-background.jpg"; // Front-End Developer

export const navLinks = [
  { path: "/", label: "Home", icon: "ph ph-house", key: "Home" },
  {
    path: "/projects",
    label: "Projects",
    icon: "ph ph-folder",
    key: "Projects",
  },
  // {
  //   path: "/kape-tools",
  //   label: "Kape Tools",
  //   icon: "ph ph-wrench",
  //   key: "Kape Tools",
  // },
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
  {
    path: "/cvViewer",
    label: "CV Viewer",
    icon: "ph ph-file-text",
    key: "CV Viewer",
  },
];

export const modalContentMap = {
  // --- INDIVIDUAL CLIENT TESTIMONIAL MODALS ---
  "/testimonials/team-gfe": {
    icon: "ph-star",
    title: "Team GFE Review",
    content: (
      <>
        <p
          style={{
            fontSize: "1.05rem",
            fontStyle: "italic",
            marginBottom: "1.25rem",
            color: "var(--text-main)",
          }}
        >
          "Jayson created top-tier UI/UX designs, event branding, and finisher
          medal artwork for Guiguinto Fitness Enthusiasts. His design work
          elevated our community event significantly."
        </p>
        <div
          style={{
            padding: "1rem",
            background: "#f8fafc",
            borderRadius: "16px",
            border: "1px solid rgba(0,0,0,0.05)",
          }}
        >
          <strong
            style={{
              display: "block",
              fontSize: "0.95rem",
              color: "var(--text-main)",
            }}
          >
            Team GFE
          </strong>
          <p
            style={{
              fontSize: "0.8rem",
              color: "var(--text-muted)",
              margin: "0.25rem 0 0.5rem 0",
            }}
          >
            Guiguinto Fitness Enthusiasts
          </p>
          <span
            style={{
              fontSize: "0.75rem",
              color: "var(--accent-orange)",
              fontWeight: 600,
            }}
          >
            UI/UX Design • Event Branding • Finisher Medal Design
          </span>
        </div>
      </>
    ),
  },

  "/testimonials/client-2": {
    icon: "ph-star",
    title: "Client Review - GHL & AI",
    content: (
      <>
        <p
          style={{
            fontSize: "1.05rem",
            fontStyle: "italic",
            marginBottom: "1.25rem",
            color: "var(--text-main)",
          }}
        >
          "Exceptional implementation of CRM pipelines, custom lead capture
          forms, and GHL automations. He saved us hours of repetitive manual
          work."
        </p>
        <div
          style={{
            padding: "1rem",
            background: "#f8fafc",
            borderRadius: "16px",
            border: "1px solid rgba(0,0,0,0.05)",
          }}
        >
          <strong
            style={{
              display: "block",
              fontSize: "0.95rem",
              color: "var(--text-main)",
            }}
          >
            GHL Specialist & Agentic AI Engineer
          </strong>
          <p
            style={{
              fontSize: "0.8rem",
              color: "var(--text-muted)",
              margin: "0.25rem 0 0.5rem 0",
            }}
          >
            Automation Partner
          </p>
          <span
            style={{
              fontSize: "0.75rem",
              color: "var(--accent-orange)",
              fontWeight: 600,
            }}
          >
            CRM • Pipelines • Forms
          </span>
        </div>
      </>
    ),
  },

  "/testimonials/client-3": {
    icon: "ph-star",
    title: "Client Review - Web Dev",
    content: (
      <>
        <p
          style={{
            fontSize: "1.05rem",
            fontStyle: "italic",
            marginBottom: "1.25rem",
            color: "var(--text-main)",
          }}
        >
          "Reliable web developer who builds clean, responsive web applications
          and seamlessly hooks them into GoHighLevel workflows."
        </p>
        <div
          style={{
            padding: "1rem",
            background: "#f8fafc",
            borderRadius: "16px",
            border: "1px solid rgba(0,0,0,0.05)",
          }}
        >
          <strong
            style={{
              display: "block",
              fontSize: "0.95rem",
              color: "var(--text-main)",
            }}
          >
            Web Dev & GHL Specialist
          </strong>
          <p
            style={{
              fontSize: "0.8rem",
              color: "var(--text-muted)",
              margin: "0.25rem 0 0.5rem 0",
            }}
          >
            Development Partner
          </p>
          <span
            style={{
              fontSize: "0.75rem",
              color: "var(--accent-orange)",
              fontWeight: 600,
            }}
          >
            Web Dev • GHL • Automation
          </span>
        </div>
      </>
    ),
  },

  // --- GENERAL TESTIMONIALS FALLBACK (Nav Link) ---
  "/testimonials": {
    icon: "ph-star",
    title: "Client Reviews",
    content: (
      <>
        <p>
          Select any client from the list on the dashboard to read their full
          detailed review.
        </p>
      </>
    ),
  },

  "/projects": {
    icon: "ph-folder",
    title: "Featured Projects",
    content: (
      <>
        <p style={{ marginBottom: "1.25rem" }}>
          Engineering robust systems, custom workflows, and high-converting app
          platforms:
        </p>

        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}
        >
          {/* Card 1 */}
          <a
            href="https://jherminio.github.io/little-bloomer-academy/"
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
              src={project1Img}
              alt="Little Bloomer Academy"
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
                  Little Bloomer Academy
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
                Welcome to Little Bloomer Academy!
                <br /> A sweet, nurturing environment where little minds bloom
                through play, laughter, and creativity.
              </p>
            </div>
          </a>

          {/* Card 2 */}
          <a
            href="https://www.facebook.com/share/p/1Ju3zdAtQY/"
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
              src={project2Img}
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
                  Summer Splash Community Fun Run
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
                Team GFE proudly invites everyone to join our first-ever
                community fun run on May 10, 2026 at the Guiguinto Municipal
                Oval!
              </p>
            </div>
          </a>

          {/* Card 3 */}
          <a
            href="https://jherminio.github.io/myportfolio/"
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
              src={project3Img}
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
                  Front-End Developer & UI/UX Designer
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
                Crafting clean code and dynamic web experiences.
              </p>
            </div>
          </a>
        </div>
      </>
    ),
  },

  // "/projects": {
  //   icon: "ph-folder",
  //   title: "Featured Projects",
  //   content: (
  //     <>
  //       <p style={{ marginBottom: "1.25rem" }}>
  //         Engineering robust systems, custom workflows, and high-converting app
  //         platforms:
  //       </p>

  //       <div
  //         style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}
  //       >
  //         {/* Card 1 */}
  //         <a
  //           href="https://your-link.com"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //           className="project-modal-card"
  //         >
  //           {/* 2. USE THE IMPORTED VARIABLE HERE */}
  //           <img
  //             src={project1Img}
  //             alt="Little Bloomer Academy"
  //             style={{
  //               width: "85px",
  //               height: "70px",
  //               objectFit: "cover",
  //               borderRadius: "10px",
  //               flexShrink: 0,
  //             }}
  //           />
  //           <div>
  //             <strong>Little Bloomer Academy</strong>
  //             <p>
  //               Welcome to Little Bloomer Academy! A sweet, nurturing
  //               environment...
  //             </p>
  //           </div>
  //         </a>

  //         {/* Card 2 */}
  //         <a
  //           href="https://your-link.com"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //           className="project-modal-card"
  //         >
  //           <img
  //             src={project2Img}
  //             alt="Summer Splash Community Fun Run"
  //             style={{
  //               width: "85px",
  //               height: "70px",
  //               objectFit: "cover",
  //               borderRadius: "10px",
  //               flexShrink: 0,
  //             }}
  //           />
  //           <div>
  //             <strong>Summer Splash Community Fun Run</strong>
  //             <p>
  //               Team GFE proudly invites everyone to join our first-ever
  //               community fun run...
  //             </p>
  //           </div>
  //         </a>

  //         {/* Card 3 */}
  //         <a
  //           href="https://your-link.com"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //           className="project-modal-card"
  //         >
  //           <img
  //             src={project3Img}
  //             alt="Front-End Developer & UI/UX Designer"
  //             style={{
  //               width: "85px",
  //               height: "70px",
  //               objectFit: "cover",
  //               borderRadius: "10px",
  //               flexShrink: 0,
  //             }}
  //           />
  //           <div>
  //             <strong>Front-End Developer & UI/UX Designer</strong>
  //             <p>Crafting clean code and dynamic web experiences.</p>
  //           </div>
  //         </a>
  //       </div>
  //     </>
  //   ),
  // },

  // "/kape-tools": {
  //   icon: "ph-wrench",
  //   title: "Kape Tools & Integrations",
  //   content: (
  //     <>
  //       <p>
  //         Internal developer tooling and automation suites built to accelerate
  //         builds:
  //       </p>
  //       <ul>
  //         <li>
  //           <i
  //             className="ph-fill ph-robot"
  //             style={{ color: "var(--accent-orange)" }}
  //           ></i>{" "}
  //           <strong>KopeAI:</strong> Context-aware task agent
  //         </li>
  //         <li>
  //           <i
  //             className="ph-fill ph-magnifying-glass"
  //             style={{ color: "var(--accent-orange)" }}
  //           ></i>{" "}
  //           <strong>KopeSEO:</strong> Automated auditing tool
  //         </li>
  //         <li>
  //           <i
  //             className="ph-fill ph-database"
  //             style={{ color: "var(--accent-orange)" }}
  //           ></i>{" "}
  //           <strong>Kape Search:</strong> AI knowledge retrieval
  //         </li>
  //       </ul>
  //     </>
  //   ),
  // },
  "/testimonials": {
    icon: "ph-star",
    title: "Client Reviews",
    content: (
      <>
        <p>
          " Jayson is a versatile designer who brings both strategic user
          experience and artistic flair to the table. For our event with Team
          GFE, he designed a seamless UI/UX that made navigating our platform
          effortless for runners. Beyond the digital experience, Jayson went
          above and beyond by helping us craft the custom medal designs,
          perfectly translating our 'Run, Refresh, Celebrate' theme into a
          physical piece our participants were proud to wear. He is responsive,
          creative, and a true team player. "
        </p>
        <div
          style={{
            marginTop: "1rem",
            padding: "0.75rem",
            background: "#f8fafc",
            borderRadius: "12px",
          }}
        >
          <strong>— Team GFE</strong>
          <p
            style={{
              fontSize: "0.8rem",
              color: "var(--text-muted)",
              margin: 0,
            }}
          >
            UI/UX Design • Event Branding • Finisher Medal Design
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
          Hi, I’m Jayson Herminio! I’m a Frontend & WordPress Developer
          passionate about building fast, responsive, and user-friendly web
          experiences. With 4+ years of hands-on experience spanning React,
          TypeScript, custom WordPress development, performance optimization,
          and technical SEO, I bridge the gap between design, functionality, and
          site speed. I bring a sharp eye for detail, strong problem-solving
          skills, and a strong drive to continuously learn and contribute to
          team success.
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
    title: "Contact",
    content: <ContactForm />,
  },
  //   icon: "ph-file-text",
  //   title: "Resume",
  //   content: (
  //     <div className="resume-modal-container">
  //       <div className="resume-download-wrapper">
  //         <a
  //           href="/resume.pdf"
  //           download="Jayson_Herminio_Resume.pdf"
  //           className="download-pdf-btn"
  //         >
  //           Download PDF <i className="ph-bold ph-download-simple"></i>
  //         </a>
  //       </div>

  //       <div className="resume-image-wrapper">
  //         <img
  //           src={resumeImg}
  //           alt="Jayson Herminio Resume Preview"
  //           className="resume-preview-img"
  //         />
  //       </div>
  //     </div>
  //   ),
  // },
  "/cvViewer": {
    icon: "ph-file-text",
    title: "CV Viewer",
    content: <CvViewer />,
  },
};
