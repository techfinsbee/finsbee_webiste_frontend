import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MobileStepsCarousel = ({ steps }) => {
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

  const handleTouchStart = (startX) => {
    const handleTouchMove = (moveX) => {
      if (startX - moveX > 75) {
        setCurrentIndex((prev) => (prev + 1) % steps.length);
        setAutoPlay(false);
        setTimeout(() => setAutoPlay(true), 5000);
      }
      if (startX - moveX < -75) {
        setCurrentIndex((prev) => (prev - 1 + steps.length) % steps.length);
        setAutoPlay(false);
        setTimeout(() => setAutoPlay(true), 5000);
      }
    };

    return handleTouchMove;
  };

  return (
    <div 
      className="md:hidden relative overflow-hidden w-full"
      onTouchStart={(e) => {
        const startX = e.targetTouches[0].clientX;
        const handleTouchMove = handleTouchStart(startX);
        
        const touchMoveHandler = (e) => {
          handleTouchMove(e.targetTouches[0].clientX);
        };

        document.addEventListener('touchmove', touchMoveHandler);
        document.addEventListener('touchend', () => {
          document.removeEventListener('touchmove', touchMoveHandler);
        }, { once: true });
      }}
    >
      <div 
        className="flex transition-transform duration-300"
        style={{
          width: `${steps.length * 100}%`,
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {steps.map((step, index) => (
          <div 
            key={index}
            className="w-full flex-shrink-0 p-4"
            style={{ width: '100%' }}
          >
            <div 
              className={`
                rounded-lg p-4 cursor-pointer transition-all duration-150 h-full w-[330px] step-box 
                ${currentIndex === index ? 'bg-[#d09c75] shadow-lg' : 'bg-white'}
              `}
            >
              <div className="flex gap-4 items-start">
                <div className="relative">
                  <div
                    className={`h-10 w-10 bg-[#a54a0c] rounded-full flex-shrink-0 transition-transform duration-150 ${
                      currentIndex === index ? "scale-110" : "scale-100"
                    }`}
                  />
                  {currentIndex === index && (
                    <div className="absolute inset-0 rounded-full border-2 border-white animate-ping" />
                  )}
                </div>

                <div className="flex-1">
                  <h3
                    className={`text-lg font-bold roboto-serif ${
                      currentIndex === index ? "text-white" : "text-black"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`mt-2 transition-colors duration-150 roboto-light ${
                      currentIndex === index ? "text-white" : "text-gray-600"
                    }`}
                  >
                    {step.content}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {steps.map((_, index) => (
          <span 
            key={index}
            className={`
              h-2 w-2 rounded-full 
              ${index === currentIndex ? 'bg-[#a54a0c]' : 'bg-gray-300'}
            `}
          />
        ))}
      </div>

      <style jsx>{`
      @media (min-width: 400px) and (max-width: 425px){
        .step-box{
          width: 360px !important;
        }
       @media screen and (max-width: 375px){
        .step-box{
          width: 250px !important;
          height: 200px !important;
        }
      `}</style>
    </div>
  );
};

export default MobileStepsCarousel;