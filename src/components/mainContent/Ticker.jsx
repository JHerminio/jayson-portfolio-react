import React from "react";

export default function Ticker() {
  const tools = [
    { icon: "ph-fill ph-code", name: "HTML" },
    { icon: "ph-fill ph-paint-brush", name: "CSS" },
    { icon: "ph-fill ph-code", name: "JavaScript" },
    { icon: "ph-fill ph-atom", name: "React" },
    { icon: "ph-fill ph-code", name: "TypeScript" },
    { icon: "ph-fill ph-git-branch", name: "Git" },
    { icon: "ph-fill ph-github-logo", name: "GitHub" },
    { icon: "ph-fill ph-terminal-window", name: "VS Code" },
    { icon: "ph-fill ph-palette", name: "Canva" },
    { icon: "ph-fill ph-file-text", name: "MS Office" },
  ];

  return (
    <div className="ticker-container">
      <div className="ticker-label">
        <span className="highlight-text">DAILY DRIVERS</span>
        <strong>Tools I work with</strong>
      </div>
      <div className="ticker-wrapper">
        <div className="ticker-track">
          {[...tools, ...tools].map((tool, index) => (
            <div className="ticker-item" key={index}>
              <i className={tool.icon}></i> {tool.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
