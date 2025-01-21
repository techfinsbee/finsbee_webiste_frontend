import React from 'react';

const MobileFrame = ({ imageSrc }) => {
  return (
    <div
      style={{
        width: "300px",
        height: "600px",
        border: "12px solid #000", // Black outer border
        borderRadius: "40px",
        background: "linear-gradient(180deg, #F7E7CF 0%, #F3D5B5 100%)", // Gradient similar to the image
        position: "relative",
        overflow: "hidden",
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
      }}
    >
      {/* Top Notch */}
      <div
        style={{
          width: "120px",
          height: "30px",
          backgroundColor: "#000", // Black notch
          borderRadius: "15px",
          position: "absolute",
          top: "12px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      ></div>

      {/* Screen Area */}
      <div
        style={{
          width: "100%",
          height: "100%",
          padding: "20px",
          boxSizing: "border-box",
          backgroundColor: "white", // Background for the screen
          borderRadius: "28px", // Slight inner rounding
        }}
      >
        {imageSrc ? (
          <img
            src={imageSrc}
            alt="Mobile Content"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "28px",
            }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px",
              color: "gray",
              borderRadius: "28px",
            }}
          >
            No Image Provided
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileFrame;
