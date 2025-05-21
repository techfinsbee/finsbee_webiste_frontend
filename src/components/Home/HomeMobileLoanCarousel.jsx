import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HomeMobileLoanCarousel = ({ loans, images, COLOR, loanImage, onApplyNow, onCheckEligibility }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [dragDirection, setDragDirection] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const getImageType = (imagePath) => {
    return imagePath.toLowerCase().endsWith(".svg") ? "svg" : "png";
  };
  
  useEffect(() => {
    // Preload images before rendering
    const preloadImages = () => {
      images.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };
    preloadImages();
  }, [images]);

  useEffect(() => {
    let interval;
    if (autoPlay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % loans.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [autoPlay, loans.length]);

  const handleTouchStart = () => {
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 3000);
  };
  
  const handleDragEnd = (event, info) => {
    const threshold = 30;
    setDragDirection(info.offset.x);

    if (info.offset.x > threshold) {
      // Swiped right
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + loans.length) % loans.length
      );
    } else if (info.offset.x < -threshold) {
      // Swiped left
      setCurrentIndex((prevIndex) => (prevIndex + 1) % loans.length);
    }
  };
  
  // Navigation handlers
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % loans.length);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 5000);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + loans.length) % loans.length);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 5000);
  };
  
  return (
    <div
      className="relative w-full min-h-fit overflow-hidden touch-pan-y pb-6"
      onTouchStart={handleTouchStart}
      style={{ overflowX: "hidden" }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: dragDirection > 0 ? -200 : 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: dragDirection > 0 ? 200 : -200 }}
          transition={{ type: "ease", ease: "easeInOut", stiffness: 0, damping: 0 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
          className="flex flex-col items-center w-full"
          style={{ overflow: "hidden" }}
        >
          {/* Image */}
          <div className="w-full flex justify-center mb-3">
            <img
              src={images[currentIndex]}
              alt={loans[currentIndex].title}
              className={`w-full max-w-[45%] h-auto object-contain rounded-md
                ${getImageType(images[currentIndex]) === "svg" ? "theme-image-svg" : "theme-image-png"}
                ${isImageLoaded ? "opacity-100" : "opacity-0"}
              `}
              onLoad={() => setIsImageLoaded(true)}
            />
          </div>

          {/* Loan Box */}
          <div
            className="
              bg-[#EEEEEE] p-4 rounded-xl shadow-lg 
              w-[90%] max-w-[350px] cursor-pointer
              transition-all duration-500 ease-in-out
              hover:bg-[#F8F9FA] flex flex-col gap-2
            "
            style={{ color: `${COLOR ? "#112A00" : "#163312"}` }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="flex h-fit gap-2 items-center">
              <div className="bg-[#EEEEEE] p-1.5 rounded-full flex-shrink-0">
                <img 
                  src={`${loans[currentIndex].TImg}`} 
                  alt={loans[currentIndex].title}
                  className="w-6 h-6 object-contain" 
                />
              </div>
              <div className="flex items-center">
                <h6
                  className="text-s  mb-0 coolvetica"
                  style={{
                    fontWeight: "550",
                    color: COLOR ? "#09615D" : "#112A00",
                  }}
                >
                  {loans[currentIndex].title}
                </h6>
              </div>
            </div>
            
            <div>
              <p 
                className="text-xs leading-relaxed text-gray-600 mb-3"
                style={{ fontFamily: "Helvetica", fontWeight: "500" }}
              >
                {loans[currentIndex].description}
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="action-buttons grid grid-cols-2 gap-2 mt-auto">
              <button 
                className="action-button primary-button py-2 px-3 rounded-md text-white bg-[#18ADA5] hover:bg-[#09615D] transition-colors duration-300 text-xs font-medium"
                style={{ 
                  boxShadow: isHovered ? "0 4px 12px rgba(24, 173, 165, 0.3)" : "none",
                  transition: "all 0.3s ease"
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  onApplyNow && onApplyNow(loans[currentIndex].title);
                }}
              >
                Apply Now
              </button>
              <button 
                className="action-button secondary-button py-2 px-3 rounded-md border border-[#18ADA5] text-[#18ADA5] hover:bg-[#ffffff] transition-colors duration-300 text-xs font-medium"
                style={{ 
                  boxShadow: isHovered ? "0 4px 12px rgba(24, 173, 165, 0.15)" : "none",
                  transition: "all 0.3s ease"
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  onCheckEligibility && onCheckEligibility(loans[currentIndex].title);
                }}
              >
                Check Eligibility
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls (Similar to WhyChooseUs) */}
      <div className="flex justify-between items-center mt-4 px-4 max-w-[350px] mx-auto">
        <button
          onClick={prevSlide}
          className="w-9 h-9 rounded-full flex items-center justify-center shadow-md bg-white"
          style={{
            color: COLOR ? "#18ADA5" : "#4CAF50",
          }}
          aria-label="Previous loan"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>

        {/* Dots indicator */}
        <div className="flex space-x-1.5">
          {loans.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setAutoPlay(false);
                setTimeout(() => setAutoPlay(true), 5000);
              }}
              className={`w-2 h-2 rounded-full transition-colors`}
              style={{
                backgroundColor: currentIndex === index
                  ? COLOR ? "#18ADA5" : "#4CAF50"
                  : COLOR ? "rgba(24, 173, 165, 0.2)" : "rgba(76, 175, 80, 0.2)",
              }}
              aria-label={`Go to loan ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="w-9 h-9 rounded-full flex items-center justify-center shadow-md bg-white"
          style={{
            color: COLOR ? "#18ADA5" : "#4CAF50",
          }}
          aria-label="Next loan"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>

      <style jsx>{`
        .theme-image-svg {
          filter: none;
        }

        .dark .theme-image-svg {
          filter: opacity(0.8) brightness(0.8);
        }

        .theme-image-png {
          filter: none;
        }

        .dark .theme-image-png {
          filter: brightness(1.2) contrast(1.1);
        }
        
        /* Improved mobile-specific styling */
        @media (max-width: 400px) {
          .action-button {
            padding: 8px 6px;
            font-size: 11px;
          }
        }
        
        @media (max-width: 320px) {
          .action-buttons {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default HomeMobileLoanCarousel;