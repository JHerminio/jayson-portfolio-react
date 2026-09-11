import React from "react";
import project1Img from "../assets/little-bloomer-academy.webp"; // Little Bloomer Academy
import project2Img from "../assets/summer-splash-community-fun-run.webp"; // Summer Splash
import project3Img from "../assets/jh-background.jpg"; // Front-End Developer

export const Credentials = {
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
};
