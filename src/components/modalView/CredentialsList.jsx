import React from "react";

const credentialsList = [
  {
    id: 1,
    title: "Certified Admin",
    imageUrl: "/../../assets/Certificate-of-Attendance.webp",
    linkUrl: "../../assets/Certificate-of-Attendance.webp",
  },
  {
    id: 2,
    title: "React Specialist",
    imageUrl: "/../../assets/Certificate-of-Attendance.webp",
    linkUrl: "../../assets/Certificate-of-Completion.webp",
  },
  {
    id: 3,
    title: "WP Developer",
    imageUrl: "/path-to-image-3.png",
    linkUrl: "https://example.com/credential-3",
  },
];

export default function SingleCredentialsCard() {
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-[32px] p-6 shadow-sm border border-slate-100">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-[#FFF0EB] flex items-center justify-center text-[#FF6B4A]">
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
        </div>
        <div>
          <h3 className="text-sm font-bold tracking-wider text-slate-900 uppercase">
            CREDENTIALS
          </h3>
          <p className="text-xs text-slate-400 font-medium">Certificates</p>
        </div>
      </div>

      {/* 3 Images & Links Grid */}
      <div className="grid grid-cols-3 gap-3 my-4">
        {credentialsList.map((item) => (
          <a
            key={item.id}
            href={item.linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group"
          >
            <div className="w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center p-1 border-2 border-sky-200 group-hover:scale-105 transition-transform overflow-hidden">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover rounded-full"
                onError={(e) => {
                  // Fallback icon if image path is empty
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
            <span className="mt-2 px-2.5 py-1 text-[11px] font-semibold text-white bg-[#0F172A] rounded-full text-center group-hover:bg-blue-600 transition-colors">
              {item.title}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
