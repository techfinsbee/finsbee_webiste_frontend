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
  
  return (
    <div
      className="relative w-full min-h-fit overflow-hidden touch-pan-y"
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
          <div className="w-full flex justify-center mb-4">
            <img
              src={images[currentIndex]}
              alt={loans[currentIndex].title}
              className={`w-full max-w-[50%] h-auto object-contain rounded-md
      ${
        getImageType(images[currentIndex]) === "svg"
          ? "theme-image-svg"
          : "theme-image-png"
      }
      ${isImageLoaded ? "opacity-100" : "opacity-0"}`}
              onLoad={() => setIsImageLoaded(true)}
            />
          </div>

          {/* Loan Box */}
          <div
            className="
              bg-[#EEEEEE] p-4 rounded-xl shadow-lg 
              w-[90%] max-w-[350px] cursor-pointer
              transition-all duration-500 ease-in-out
              hover:bg-[#F8F9FA] hover:scale-[1.02] flex flex-col gap-2
            "
            style={{ color: `${COLOR ? "#112A00" : "#163312"}` }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="flex h-fit gap-2">
              <div className="bg-[#EEEEEE] p-2 rounded-full">
                <img 
                  src={`${loans[currentIndex].TImg}`} 
                  alt={loans[currentIndex].title}
                  className="w-8 h-8 object-contain" 
                />
              </div>
              <div className="flex justify-center items-center">
                <h3 
                  className="text-lg sm:text-xl font-bold mb-0 coolvetica"
                  style={{
                    fontWeight: "750",
                    color: COLOR ? "#09615D" : "#112A00",
                  }}
                >
                  {loans[currentIndex].title}
                </h3>
              </div>
            </div>
            
            <div>
              <p 
                className="text-sm sm:text-md leading-relaxed text-gray-600 mb-4"
                style={{ fontFamily: "Helvetica", fontWeight: "500" }}
              >
                {loans[currentIndex].description}
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="action-buttons flex flex-col gap-3 mt-auto">
              <button 
                className="action-button primary-button py-2 px-4 rounded-md text-white bg-[#18ADA5] hover:bg-[#09615D] transition-colors duration-300 text-sm font-medium"
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
                className="action-button secondary-button py-2 px-4 rounded-md border border-[#18ADA5] text-[#18ADA5] hover:bg-[#ffffff] transition-colors duration-300 text-sm font-medium"
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

      {/* Pagination Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {loans.map((_, index) => (
          <span
            key={index}
            className={`
              h-2 w-2 rounded-full 
              ${
                index === currentIndex
                  ? `${COLOR ? "bg-[#09615D]" : "bg-[#112B00]"}`
                  : "bg-gray-300"
              }
            `}
          />
        ))}
      </div>
      <style jsx>{`
        .theme-image-svg {
          filter: none;
        }

        .dark .theme-image-svg {
          filter: opacity(0.8) brightness(0.8); // Reduce brightness for SVGs in dark mode
        }

        .theme-image-png {
          filter: none;
        }

        .dark .theme-image-png {
          filter: brightness(1.2) contrast(1.1); // Increase brightness for PNGs in dark mode
        }
        
        /* Additional mobile-specific styling for buttons */
        @media (max-width: 640px) {
          .action-button {
            width: 100%;
            padding: 10px;
            margin-bottom: 8px;
            font-weight: 500;
          }
          
          .action-buttons {
            display: flex;
            flex-direction: column;
            width: 100%;
            margin-top: 12px;
          }
        }
      `}</style>
    </div>
  );
};

export default HomeMobileLoanCarousel;