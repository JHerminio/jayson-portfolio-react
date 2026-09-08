import React from "react";

export default function Ticker() {
  const tools = [
    { icon: "ph-fill ph-google-logo", name: "Google Workspace" },
    { icon: "ph-fill ph-headset", name: "Zendesk" },
    { icon: "ph-fill ph-chat-centered-text", name: "Intercom" },
    { icon: "ph-fill ph-slack-logo", name: "Slack" },
    { icon: "ph-fill ph-code", name: "Claude Code" },
    { icon: "ph-fill ph-github-logo", name: "GitHub" },
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
