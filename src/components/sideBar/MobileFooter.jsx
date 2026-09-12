import React from "react";

export default function MobileFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mobile-bottom-footer">
      <i className="ph-fill ph-seal-check"></i>
      <p>© {currentYear} sssJayson Herminio. All rights reserved.</p>
    </footer>
  );
}
