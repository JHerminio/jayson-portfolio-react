import React, { useState, useEffect } from "react";

export default function MobileFooter() {
  const [currentYear, setCurrentYear] = useState(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="mobile-bottom-footer">
      <i className="ph-fill ph-seal-check"></i>
      <p>
        ©{" "}
        <span suppressHydrationWarning>
          {currentYear || new Date().getFullYear()}
        </span>{" "}
        Jayson Herminio. All rights reserved.
      </p>
    </footer>
  );
}
