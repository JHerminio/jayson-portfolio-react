import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { modalContentMap } from "./ModalData";

export default function ModalOverlay() {
  const location = useLocation();
  const navigate = useNavigate();

  const data = modalContentMap[location.pathname];
  const isOpen = Boolean(data);

  const closeModal = () => navigate("/");

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) closeModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className={`modal-overlay ${isOpen ? "active" : ""}`}
      onClick={closeModal}
    >
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal-close"
          onClick={closeModal}
          aria-label="Close modal"
        >
          <i className="ph ph-x"></i>
        </button>
        <div className="modal-header">
          <div className="icon-box orange">
            <i className={`ph ${data.icon}`}></i>
          </div>
          <h2>{data.title}</h2>
        </div>
        <div className="modal-body">{data.content}</div>
      </div>
    </div>
  );
}
