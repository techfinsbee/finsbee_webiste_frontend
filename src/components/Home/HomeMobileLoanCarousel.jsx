import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HomeMobileLoanCarousel = ({ loans, images, COLOR, loanImage }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [dragDirection, setDragDirection] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
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
          transition={{ type: "ease",ease: "easeInOut" , stiffness: 100, damping: 30 }}
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
              className={`w-full max-w-[100%] h-auto object-contain rounded-md
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
              bg-[#F8F9FA] p-4 rounded-xl shadow-lg 
              w-[90%] max-w-[350px] cursor-pointer
              transition-all duration-500 ease-in-out
              hover:bg-[#F8F9FA] hover:scale-[1.02] flex flex-col gap-2
            "
            style={{ color: `${COLOR ? "#112A00" : "#163312"}` }}
          >
            <div className="flex h-fit gap-2">
              <img src={`${loans[currentIndex].TImg}`} alt="" />
              <div className="flex justify-center items-center">
                <h3 className="text-lg sm:text-xl font-bold mb-2">
                  {loans[currentIndex].title}
                </h3>
              </div>
            </div>
            <div>
              <p className="text-sm sm:text-md leading-tight">
                {loans[currentIndex].description}
              </p>
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
      `}</style>
    </div>
  );
};

export default HomeMobileLoanCarousel;
