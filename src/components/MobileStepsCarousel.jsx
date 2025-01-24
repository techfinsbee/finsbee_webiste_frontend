import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MobileStepsCarousel = ({ steps, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

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
    setTimeout(() => setAutoPlay(true), 5000); // Resume autoplay after 5 seconds
  };

  const handleDragEnd = (event, info) => {
    const threshold = 100; // Minimum swipe distance to trigger a slide
    if (info.offset.x > threshold) {
      // Swiped right
      setCurrentIndex((prevIndex) => (prevIndex - 1 + steps.length) % steps.length);
    } else if (info.offset.x < -threshold) {
      // Swiped left
      setCurrentIndex((prevIndex) => (prevIndex + 1) % steps.length);
    }
  };

  return (
    <div
      className="relative w-full overflow-hidden touch-pan-y"
      onTouchStart={handleTouchStart}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          drag="x" // Enable dragging on the x-axis
          dragConstraints={{ left: 0, right: 0 }} // Limit dragging to horizontal swiping
          dragElastic={0.2} // Elasticity for smoother dragging
          onDragEnd={handleDragEnd} // Handle drag end for swipe functionality
          className="flex flex-col items-center"
        >
          {/* Image */}
          <div className="w-full h-full mb-4">
            <img
              src={images[currentIndex]}
              alt={steps[currentIndex].title}
              style={{ width: "450px", height: "500px" }}
            />
          </div>

          {/* Loan Box */}
          <div
            className={`
              bg-[#8B6B4E] text-white p-6 rounded-xl shadow-lg 
              w-[90%] max-w-[350px] cursor-pointer
              transition-all duration-500 ease-in-out
              hover:bg-[#725839] hover:scale-[1.02]
            `}
          >
            <h3 className="text-xl font-bold mb-2">{steps[currentIndex].title}</h3>
            <p className="text-md leading-tight">{steps[currentIndex].content}</p>
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
              ${index === currentIndex ? 'bg-[#8B6B4E]' : 'bg-gray-300'}
            `}
          />
        ))}
      </div>
    </div>
  );
};

export default MobileStepsCarousel;
