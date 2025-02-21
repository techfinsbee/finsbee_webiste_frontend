import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HomeMobileStepsCarousel = ({ steps, images, COLOR }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [dragDirection, setDragDirection] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
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
        setCurrentIndex((prevIndex) => (prevIndex + 1) % steps.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [autoPlay, steps.length]);

  const handleTouchStart = () => {
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 3000);
  };

  const handleDragEnd = (event, info) => {
    const threshold = 100;
    setDragDirection(info.offset.x);

    if (info.offset.x > threshold) {
      // Swiped right
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + steps.length) % steps.length
      );
    } else if (info.offset.x < -threshold) {
      // Swiped left
      setCurrentIndex((prevIndex) => (prevIndex + 1) % steps.length);
    }
  };

  return (
    <div
      className={`relative w-full min-h-fiten overflow-hidden touch-pan-y pb-10  mb-20`}
      onTouchStart={handleTouchStart}
      style={{
        overflowX: "hidden",
        borderTopLeftRadius: "50px",
        borderTopRightRadius: "50px",
        background: `${COLOR ? "#69B6B2" : "rgb(178, 255, 142)"}`,
      }}
    >
      <div className="text-center mt-10 flex flex-col gap-4">
        <h1 className={`${COLOR ? 'text-[#09615D]':'text-[#112B00]'} text-3xl font-bold`}>
          Loan Application Steps
        </h1>
        <p className={`text-md ${COLOR ? 'text-[#09615D]':'text-[#112B00]'}`}>
          With Fundsmama you unlock loans at lower prices
        </p>
      </div>
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
          style={{ overflowX: "hidden" }}
        >
          {/* Image */}
          <div className="w-full flex justify-center mb-4">
            <img
              src={images[currentIndex]}
              alt={steps[currentIndex].title}
              className={`w-full max-w-[100%] h-auto object-contain rounded-md 
                ${isImageLoaded ? "opacity-100" : "opacity-0"}`}
              onLoad={() => setIsImageLoaded(true)}
            />
          </div>

          {/* Step Box */}
          <div
            className="
               text-white p-4 rounded-xl shadow-lg 
              w-[90%] max-w-[350px] cursor-pointer
              transition-all duration-500 ease-in-out
               hover:scale-[1.02]
            "
            style={{ background: `${COLOR?'#09615D':'#112B00 '}` }}
          >
            <h3 className="text-lg sm:text-xl font-bold mb-2"
            style={{ color: `${COLOR?'#fff':'#fff'}` }}
            >
              {steps[currentIndex].title}
            </h3> 
            <p className="text-sm sm:text-md text-black"
            style={{ color: `${COLOR?'#fff':'#fff'}` }}
            >
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
              ${index === currentIndex ? `${COLOR?'bg-[#09615D]':'bg-[#112B00]'}` : "bg-gray-300"}
            `}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeMobileStepsCarousel;
