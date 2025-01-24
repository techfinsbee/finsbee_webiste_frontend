import React, { useEffect, useRef } from 'react';

const AnimatedPhones = () => {
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

      // Calculate scroll progress (0 to 1)
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
      } else {
        baseScale = 0.8;
        scaleGrowth = 0.4;
      }

      const scale = baseScale + clampedProgress * scaleGrowth;

      // Adjust spread distance based on screen size
      let maxSpread;
      if (isXXSmall) {
        maxSpread = 80;
      } else if (isXSmall) {
        maxSpread = 100;
      } else if (isMobile) {
        maxSpread = 130;
      } else {
        maxSpread = 300;
      }

      const spread = clampedProgress * maxSpread;

      const phones = containerRef.current.getElementsByClassName('phone');
      Array.from(phones).forEach((phone, index) => {
        if (index === 1) {
          // Middle phone (mobile1.png)
          const zTranslate = isXXSmall ? 15 : isXSmall ? 20 : isMobile ? 25 : 50;
          phone.style.transform = `
            scale(${scale})
            translateZ(${clampedProgress * zTranslate}px)
          `;
          phone.style.zIndex = '20';
        } else {
          // Side phones (mobile2.png and mobile3.png)
          const direction = index === 0 ? -1 : 1;
          const zTranslate = isXXSmall ? 15 : isXSmall ? 20 : isMobile ? 25 : 50;

          phone.style.transform = `
            scale(${scale})
            translateX(${spread * direction}px)
            translateZ(${-25 + clampedProgress * zTranslate}px)
          `;
          phone.style.zIndex = '10';
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll(); // Initial call
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div className="flex items-center justify-center px-4 mt-8 sm:px-6 lg:px-8 main-context">
      <div
        ref={containerRef}
        className="relative flex items-center justify-center w-full max-w-7xl mx-auto"
        style={{ perspective: '1500px' }}
      >
        <div className="relative w-[100vw] h-[80vh] flex items-center justify-center">
          {/* Left Phone */}
          <div className="phone absolute transition-all duration-300 ease-out">
            <img
              src="/mobile2.png"
              alt="Cart Screen"
              className="w-[180px] h-[45vh] xs:w-[250px] xs:h-[50vh] sm:w-[300px] sm:h-[55vh] md:w-[350px] md:h-[60vh] lg:w-[400px] lg:h-[65vh] object-contain"
            />
          </div>

          {/* Middle Phone */}
          <div className="phone transition-all duration-300 ease-out">
            <img
              src="/mobile1.png"
              alt="Main Screen"
              className="w-[230px] h-[50vh] xs:w-[300px] xs:h-[55vh] sm:w-[350px] sm:h-[60vh] md:w-[400px] md:h-[70vh] lg:w-[450px] lg:h-[75vh] object-contain"
            />
          </div>

          {/* Right Phone */}
          <div className="phone absolute transition-all duration-300 ease-out">
            <img
              src="/mobile3.png"
              alt="Details Screen"
              className="w-[180px] h-[45vh] xs:w-[250px] xs:h-[50vh] sm:w-[300px] sm:h-[55vh] md:w-[350px] md:h-[60vh] lg:w-[400px] lg:h-[65vh] object-contain"
            />
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .phone {
          will-change: transform;
          transform-style: preserve-3d;
          transform-origin: center center;
        }
        @media (max-width: 425px) {
          .main-context {
            height: 50vh !important;
          }
        }
        @media (max-width: 375px) {
          .main-context {
            height: 70vh !important;
          }
        }
        @media (max-width: 320px) {
          .main-context {
            height: 60vh !important;
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedPhones;
