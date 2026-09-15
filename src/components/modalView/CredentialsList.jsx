import React from "react";
import certificateAttendance from "../../assets/Certificate-of-Attendance.webp";
import certificateCompletion from "../../assets/Certificate-of-Completion.webp";

const credentialsList = [
  {
    id: 1,
    title: "Certificate of Attendance",
    imageUrl: certificateAttendance,
    linkUrl: certificateAttendance,
  },
  {
    id: 2,
    title: "Certificate of Completion",
    imageUrl: certificateCompletion,
    linkUrl: certificateCompletion,
  },
  // {
  //   id: 3,
  //   title: "WP Developer",
  //   imageUrl: certificateCompletion,
  //   linkUrl: "https://example.com/credential-3",
  // },
];

export default function CredentialsList() {
  return (
    <div className="credentials-card">
      {/* Header */}
      <div className="credentials-header">
        {/* <div className="credentials-icon">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.8}
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            />
          </svg>
        </div> */}
        {/* <div className="credentials-title-group">
          <h3>CREDENTIALS</h3>
          <p>Certificates</p>
        </div> */}
      </div>

      {/* Credentials Grid */}
      <div className="credentials-grid">
        {credentialsList.map((item) => (
          <a
            key={item.id}
            href={item.linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="credential-item"
          >
            <div className="credential-avatar">
              <img
                src={item.imageUrl}
                alt={item.title}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
            <span className="credential-badge">{item.title}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
