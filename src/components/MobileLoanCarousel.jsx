import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MobileLoanCarousel = ({ loans, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    let interval;
    if (autoPlay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % loans.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoPlay, loans.length]);

  const handleTouchStart = () => {
    setAutoPlay(false);
    // Resume autoplay after 5 seconds
    setTimeout(() => setAutoPlay(true), 5000);
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
          className="flex flex-col items-center"
        >
          {/* Image */}
          <div className="w-[400px] h-[400px] mb-4">
            <img 
              src={images[currentIndex]} 
              alt={loans[currentIndex].title} 
              className="w-screen h-full"
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
            <h3 className="text-xl font-bold mb-2">{loans[currentIndex].title}</h3>
            <p className="text-md leading-tight">{loans[currentIndex].description}</p>
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
              ${index === currentIndex ? 'bg-[#8B6B4E]' : 'bg-gray-300'}
            `}
          />
        ))}
      </div>
    </div>
  );
};

export default MobileLoanCarousel;