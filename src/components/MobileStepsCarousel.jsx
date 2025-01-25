import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MobileStepsCarousel = ({ steps, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [dragDirection, setDragDirection] = useState(0);

  useEffect(() => {
    let interval;
    if (autoPlay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % steps.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoPlay, steps.length]);

  const handleTouchStart = () => {
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 5000);
  };

  const handleDragEnd = (event, info) => {
    const threshold = 100;
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
      className="relative w-full overflow-hidden touch-pan-y"
      onTouchStart={handleTouchStart}
      style={{ overflowX: "hidden" }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: dragDirection > 0 ? -100 : 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: dragDirection > 0 ? 100 : -100 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
          className="flex flex-col items-center w-full"
        >
          {/* Image */}
          <div className="w-full flex justify-center mb-4">
            <img
              src={images[currentIndex]}
              alt={steps[currentIndex].title}
              className="w-full max-w-[90%] h-auto object-contain rounded-md"
            />
          </div>

          {/* Step Box */}
          <div
            className="
              bg-[#8B6B4E] text-white p-4 rounded-xl shadow-lg 
              w-[90%] max-w-[350px] cursor-pointer
              transition-all duration-500 ease-in-out
              hover:bg-[#725839] hover:scale-[1.02]
            "
          >
            <h3 className="text-lg sm:text-xl font-bold mb-2">
              {steps[currentIndex].title}
            </h3>
            <p className="text-sm sm:text-md leading-tight">
              {steps[currentIndex].content}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {steps.map((_, index) => (
          <span
            key={index}
            className={`
              h-2 w-2 rounded-full 
              ${index === currentIndex ? "bg-[#8B6B4E]" : "bg-gray-300"}
            `}
          />
        ))}
      </div>
    </div>
  );
};

export default MobileStepsCarousel;
