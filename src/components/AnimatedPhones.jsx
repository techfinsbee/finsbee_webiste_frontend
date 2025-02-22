import React, { useEffect, useRef } from "react";

const AnimatedPhones = ({ Home }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const screenWidth = window.innerWidth;

      // Enhanced mobile detection with specific breakpoints
      const isXXSmall = screenWidth <= 320;
      const isXSmall = screenWidth <= 375 && screenWidth > 320;
      const isMobile = screenWidth < 768;
      const isTablet = screenWidth >= 768 && screenWidth <= 1024;

      const scrollProgress = 1.5 - rect.bottom / (viewportHeight + rect.height);
      const clampedProgress = Math.max(0, Math.min(1, scrollProgress));

      // Adjust scale based on screen size
      let baseScale, scaleGrowth;
      if (isXXSmall) {
        baseScale = 0.5;
        scaleGrowth = 0.15;
      } else if (isXSmall) {
        baseScale = 0.6;
        scaleGrowth = 0.18;
      } else if (isMobile) {
        baseScale = 0.7;
        scaleGrowth = 0.2;
      } else if (isTablet) {
        baseScale = 0.75;
        scaleGrowth = 0.25;
      } else {
        baseScale = 0.8;
        scaleGrowth = 0.4;
      }

      const scale = baseScale + clampedProgress * scaleGrowth;

      // Separate spread distances for PNG and SVG
      let maxSpread, zScaleFactor, verticalDistance;
      if (Home) {
        // Increased spread for PNG images and added vertical movement
        if (isXXSmall) {
          maxSpread = 100;
          zScaleFactor = 15;
          verticalDistance = -50;
        } else if (isXSmall) {
          maxSpread = 120;
          zScaleFactor = 20;
          verticalDistance = -80;
        } else if (isMobile) {
          maxSpread = 150;
          zScaleFactor = 25;
          verticalDistance = -90;
        } else if (isTablet) {
          maxSpread = 250;
          zScaleFactor = 12.5;
          verticalDistance = -100;
        } else {
          maxSpread = 300;
          zScaleFactor = 50;
          verticalDistance = -70;
        }
      } else {
        // Original spread values for SVG with no vertical movement
        if (isXXSmall) {
          maxSpread = 80;
          zScaleFactor = 15;
          verticalDistance = 0;
        } else if (isXSmall) {
          maxSpread = 100;
          zScaleFactor = 20;
          verticalDistance = 0;
        } else if (isMobile) {
          maxSpread = 130;
          zScaleFactor = 25;
          verticalDistance = 0;
        } else if (isTablet) {
          maxSpread = 200;
          zScaleFactor = 12.5;
          verticalDistance = 0;
        } else {
          maxSpread = 300;
          zScaleFactor = 50;
          verticalDistance = 0;
        }
      }

      const spread = clampedProgress * maxSpread;
      
      // Calculate vertical translation based on scroll progress (only for Home)
      const verticalTranslate = Home ? clampedProgress * verticalDistance : 0;

      const phones = containerRef.current.getElementsByClassName("phone");
      Array.from(phones).forEach((phone, index) => {
        if (index === 1) {
          // Middle phone
          phone.style.transform = `
            scale(${scale})
            translateZ(${clampedProgress * zScaleFactor}px)
            ${Home ? `translateY(${verticalTranslate}px)` : ''}
          `;
          phone.style.zIndex = "20";
        } else {
          // Side phones
          const direction = index === 0 ? -1 : 1;
          phone.style.transform = `
            scale(${scale})
            translateX(${spread * direction}px)
            translateZ(${-25 + clampedProgress * zScaleFactor}px)
            ${Home ? `translateY(${verticalTranslate}px)` : ''}
          `;
          phone.style.zIndex = "10";
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [Home]); // Added Home to dependency array

  return (
    <div
      className="flex items-center justify-center sm:p-4 md:p-6 lg:p-8 main-context"
      style={{ height: `${Home?"80vh":"110vh"}`, padding: "0" }}
    >
      <div
        ref={containerRef}
        className="relative flex items-center justify-center w-full max-w-7xl mx-auto"
        style={{ perspective: "1500px" }}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Left Phone */}
          <div className="phone absolute transition-all duration-300 ease-out">
            <img
              src={Home ? "/mama2.png" : "/mobile2.svg"}
              alt="Cart Screen"
              className={
                Home
                  ? "w-40 xs:w-28 sm:w-52 md:w-56 lg:w-[200px] object-contain svg-1"
                  : "w-80 xs:w-28 sm:w-36 md:w-48 lg:w-[600px] object-contain ani-img1"
              }
            />
          </div>

          {/* Middle Phone */}
          <div className="phone transition-all duration-300 ease-out">
            <img
              src={Home ? "/mama1.png" : "/mobile1.svg"}
              alt="Main Screen"
              className={
                Home
                  ? "w-44 xs:w-28 sm:w-56 md:w-64 lg:w-[260px] object-contain svg-2"
                  : "w-96 xs:w-32 sm:w-40 md:w-56 lg:w-[700px] object-contain ani-img2"
              }
            />
          </div>

          {/* Right Phone */}
          <div className="phone absolute transition-all duration-300 ease-out">
            <img
              src={Home ? "/mama3.png" : "/mobile3.svg"}
              alt="Details Screen"
              className={
                Home
                  ? "w-40 xs:w-28 sm:w-52 md:w-56 lg:w-[200px] object-contain svg-1"
                  : "w-80 xs:w-28 sm:w-36 md:w-48 lg:w-[600px] object-contain ani-img1"
              }
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .phone {
          will-change: transform;
          transform-style: preserve-3d;
          transition: transform 0.3s ease-out;
          transform-origin: center center;
        }
        @media screen and (max-width: 1023px) {
          .ani-img1 {
            width: 300px !important;
          }
          .ani-img2 {
            width: 400px !important;
          }
          .main-context {
            height: 100vh !important;
          }
        }
        @media screen and (max-height: 512px) {
          .main-context {
            height: fit-content !important;
          }
        }
        @media screen and (max-width: 820px) {
          .ani-img1 {
            width: 300px !important;
          }
          .ani-img2 {
            width: 400px !important;
          }
          .main-context {
            height: 70vh !important;
          }
        }
        @media (max-width: 512px) {
          .phone {
            transition: transform 0.18s ease-out;
          }
          .main-context {
            height: 40vh !important;
          }
          .svg-1 {
            width: 30vw !important;
          }
          .svg-2 {
            width: 35vw !important;
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedPhones;