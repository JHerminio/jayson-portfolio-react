import React from "react";
import cv1 from "../../assets/JaysonBerdinHerminio-cv-1.png";
import cv2 from "../../assets/JaysonBerdinHerminio-cv-2.png";
import cvPdf from "../../assets/JaysonBerdinHerminio-CV.pdf";

export default function CvViewer() {
  return (
    <div className="cv-viewer-container">
      {/* Download Action Bar */}
      <div className="cv-action-bar">
        <a
          href={cvPdf}
          // href="/Jayson_Berdin_Herminio_cv.pdf"
          download="Jayson_Berdin_Herminio_cv.pdf"
          className="cv-download-btn"
        >
          Download PDF <i className="ph-bold ph-download-simple"></i>
        </a>
      </div>

      {/* Stacked CV Images */}
      <div className="cv-pages-wrapper">
        <div className="cv-page-card">
          <img src={cv1} alt="CV Page 1" className="cv-img" />
        </div>
        <div className="cv-page-card">
          <img src={cv2} alt="CV Page 2" className="cv-img" />
        </div>
      </div>
    </div>
  );
}
