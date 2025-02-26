import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HomeMobileStepsCarousel = ({ steps, images, COLOR, stepImage }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [dragDirection, setDragDirection] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
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

  const handleTouchStart = (e) => {
    setAutoPlay(false);
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setCurrentIndex((prev) => (prev + 1) % steps.length);
      setDragDirection(-1);
    } else if (isRightSwipe) {
      setCurrentIndex((prev) => (prev - 1 + steps.length) % steps.length);
      setDragDirection(1);
    }

    // Reset touch values
    setTouchStart(0);
    setTouchEnd(0);
    
    // Resume autoplay after 3 seconds
    setTimeout(() => setAutoPlay(true), 3000);
  };

  return (
    <div
      className={`relative w-full min-h-fit overflow-hidden touch-pan-y pb-10  mb-20`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
        overflowX: "hidden",
        borderTopLeftRadius: "50px",
        borderTopRightRadius: "50px",
        background: `${COLOR ? "#69B6B2" : "rgb(178, 255, 142)"}`,
      }}
    >
      <div className="w-full h-full absolute">
        <div className="flex absolute bottom-[30%] justify-center w-full">
          <img
            src="/step-coin.png"
            alt="Coin background"
            className={`object-cover w-[70%] relative object-center  relative `}
          />
        </div>
      </div>
      <div className="text-center mt-10 flex flex-col gap-4">
        <h1
          className={`${
            COLOR ? "text-black" : "text-[#112B00]"
          } text-3xl font-bold`}
        >
          Loan Application Steps
        </h1>
        <p className={`text-md ${COLOR ? "text-black" : "text-[#112B00]"}`}>
          With Fundsmama you unlock loans at lower prices
        </p>
      </div>
      <AnimatePresence mode="wait">
      <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: dragDirection > 0 ? -300 : 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: dragDirection > 0 ? 300 : -300 }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
          className="flex flex-col items-center w-full"
          style={{ overflow: "hidden" }}
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
              w-[100%] max-w-[90vw] cursor-pointer
              transition-all duration-500 ease-in-out
               hover:scale-[1.02] flex gap-4
            "
            style={{ background: `${COLOR ? "#09615D" : "#112B00 "}` }}
          >
            <div className="relative top-2">
              <div>
                <img
                  src={`${stepImage ? stepImage : "Rectangle.png"}`}
                  alt=""
                />
              </div>
            </div>
            <div>
              <h3
                className="text-lg sm:text-xl font-bold mb-2"
                style={{ color: `${COLOR ? "#fff" : "#fff"}` }}
              >
                {steps[currentIndex].title}
              </h3>
              <p
                className="text-sm sm:text-md text-black"
                style={{ color: `${COLOR ? "#fff" : "#fff"}` }}
              >
                {steps[currentIndex].content}
              </p>
            </div>
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
              ${
                index === currentIndex
                  ? `${COLOR ? "bg-[#09615D]" : "bg-[#112B00]"}`
                  : "bg-gray-300"
              }
            `}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeMobileStepsCarousel;
