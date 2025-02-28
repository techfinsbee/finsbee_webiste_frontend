import React, { useState, useEffect } from "react";

const DayLoan = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animationState, setAnimationState] = useState("hidden"); // hidden, entering, visible, exiting

  // Show popup after 1 second
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setAnimationState("entering");

      // After entering animation completes
      setTimeout(() => {
        setAnimationState("visible");
      }, 500);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    // Start exit animation
    setAnimationState("exiting");

    // After exit animation completes
    setTimeout(() => {
      setIsVisible(false);
      setAnimationState("hidden");
    }, 500);
  };

  // Modal overlay style (blurred background)
  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor:
      animationState === "entering"
        ? "rgba(0, 0, 0, 0)"
        : animationState === "exiting"
        ? "rgba(0, 0, 0, 0)"
        : "rgba(0, 0, 0, 0.5)",
    backdropFilter:
      animationState === "entering"
        ? "blur(0px)"
        : animationState === "exiting"
        ? "blur(0px)"
        : "blur(5px)",
    zIndex: 100000,
    display: isVisible ? "flex" : "none",
    justifyContent: "center",
    alignItems: "center",
    transition: "backdrop-filter 0.5s ease, background-color 0.5s ease",
  };

  // Modal content style
  const modalStyle = {
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "30px",
    width: "90%",
    maxWidth: "400px",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
    position: "relative",
    textAlign: "center",
    opacity:
      animationState === "entering" ? 0 : animationState === "exiting" ? 0 : 1,
    transform:
      animationState === "entering"
        ? "scale(0.9) translateY(20px)"
        : animationState === "exiting"
        ? "scale(0.9) translateY(20px)"
        : "scale(1) translateY(0)",
    transition:
      "opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1), transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
  };

  // Close button style
  const closeButtonStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
    backgroundColor: "transparent",
    border: "none",
    fontSize: "24px",
    cursor: "pointer",
    color: "#333",
    width: "30px",
    height: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    transition: "background-color 0.3s ease",
  };

  // Link style
  const linkStyle = {
    textDecoration: "none",
    color: "#0066cc",
    fontWeight: "bold",
    display: "block",
    fontSize: "16px",
    lineHeight: "1.5",
    marginBottom: "20px",
    transition: "color 0.3s ease",
  };

  // Logo container style
  const logoContainerStyle = {
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
    opacity:
      animationState === "entering" ? 0 : animationState === "exiting" ? 0 : 1,
    transform:
      animationState === "entering"
        ? "translateY(10px)"
        : animationState === "exiting"
        ? "translateY(10px)"
        : "translateY(0)",
    transition: "opacity 0.6s ease, transform 0.6s ease",
    transitionDelay: "0.1s",
  };

  return (
    <>
      {/* Modal Overlay */}
      <div style={overlayStyle} onClick={closePopup}>
        {/* Modal Content - stopPropagation prevents closing when clicking inside */}
        <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
          {/* Close Button - removed rotation animation */}
          <button
            style={closeButtonStyle}
            onClick={closePopup}
            aria-label="Close popup"
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#f0f0f0";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            ×
          </button>

          {/* Loan Information */}
          <a
            href="https://30daysloan.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
            onMouseOver={(e) => (e.currentTarget.style.color = "#0044aa")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#0066cc")}
          >
            Click here to repay your loan and view your past loan inquiries with
            FundsMama.
          </a>

          {/* Logo with link */}
          <div style={logoContainerStyle}>
            <a
              href="https://30daysloan.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://30daysloan.com/static/media/logo1.73eea7b0e17697f8fa1edcabe1e98422.svg"
                alt="FundsMama Logo"
                style={{
                  maxWidth: "200px",
                  height: "auto",
                  transition: "transform 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default DayLoan;
