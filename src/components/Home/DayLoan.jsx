import React, { useState, useEffect } from "react";

const DayLoan = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Adjust sidebar width based on screen size
  const getSidebarWidth = () => {
    if (windowWidth < 480) return "180px";
    if (windowWidth < 768) return "200px";
    return "240px";
  };

  const sidebarWidth = getSidebarWidth();

  const sidebarStyle = {
    position: "fixed",
    left: isOpen ? 0 : `-${sidebarWidth}`,
    top: windowWidth < 768 ? "40%" : "50%", // Position higher on mobile
    transform: "translateY(-50%)",
    backgroundColor: "#f8f9fa",
    padding: windowWidth < 480 ? "15px" : "20px",
    borderRadius: "0 10px 10px 0",
    boxShadow: "2px 0 10px rgba(0,0,0,0.1)",
    zIndex: 100000,
    transition: "left 0.3s ease-in-out",
    width: sidebarWidth,
  };

  const buttonStyle = {
    position: "fixed",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    left: isOpen ? sidebarWidth : windowWidth < 480 ? "5px" : "10px",
    top: windowWidth < 768 ? "40%" : "50%", // Position higher on mobile
    transform: "translateY(-50%)",
    backgroundColor: "black",
    color: "white",
    border: "none",
    borderRadius: "50%",
    width: windowWidth < 480 ? "40px" : "50px",
    height: windowWidth < 480 ? "40px" : "50px",
    cursor: "pointer",
    zIndex: 100001,
    fontSize: windowWidth < 480 ? "24px" : "30px",
    fontWeight: "700",
    transition: "left 0.3s ease-in-out",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#0066cc",
    fontWeight: "bold",
    display: "block",
    fontSize: windowWidth < 480 ? "12px" : "14px",
    lineHeight: "1.4",
  };

  return (
    <>
      <div style={sidebarStyle}>
        <a
          href="https://30daysloan.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          Click here to make repayment of your loan and access your past loan
          inquiries with FundsMama.
        </a>
      </div>
      <button
        style={buttonStyle}
        onClick={toggleSidebar}
        aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
      >
        <div className="flex justify-center align-center">
          <span className="relative -top-[2px]">{isOpen ? "<" : ">"}</span>
        </div>
      </button>
    </>
  );
};

export default DayLoan; 