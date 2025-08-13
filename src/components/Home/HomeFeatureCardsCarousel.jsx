import React, { useState, useEffect, useRef } from "react";

const HomeFeatureCardsCarousel = ({ COLOR, TXTCOLOR }) => {
  const [currentSlide, setCurrentSlide] = useState(2); // Start at index 2 which is the first real slide
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const slideTimer = useRef(null);
  const carouselRef = useRef(null);
  const initialRender = useRef(true);

  const features = [
    {
      title: "FinsBee Rewards: FBCoins",
      description:
        "Consumers earn FM Coins with every successful loan disbursement or product purchase.",
      imageContent: (
        <div className="flex overflow-hidden object-cover items-center justify-center gap-6">
          <div className="absolute bottom-[0px] w-[100vw] h-[200px] overflow-hidden">
            <img
              src="/reward1.png"
              alt="FM Coin"
              className="relative w-full h-[350px] top-0 overflow-hidden object-cover"
            />
          </div>
        </div>
      ),
      bgColor: `${COLOR ? "bg-[#7B549CBF]" : "bg-[#FEFFC5]"}`,
      txtColor: `${TXTCOLOR ? "text-black" : "text-[#323300]"}`,
    },
    {
      title: "Discover  ",
      description: "Access 30+ products across 20+ categories",
      imageContent: (
        <div className="flex items-center justify-center">
          <img src="/reward2.png" alt="Categories" className="w-full h-64" />
        </div>
      ),
      bgColor: `${COLOR ? "bg-[#7B549C6E]" : "bg-[#FFF1F0]"}`,
      txtColor: `${TXTCOLOR ? "text-black" : "text-[#331800]"}`,
    },
    {
      title: "Flexible payment options",
      description:
        "Enjoy seamless shopping with flexible payment options that suit your preferences",
      imageContent: (
        <div className="flex items-center justify-center">
          <img
            src="/reward3.png"
            alt="Flexible Payment"
            className="w-full h-64"
          />
        </div>
      ),
      bgColor: `${COLOR ? "bg-[#7B549C17]" : "bg-[#CAFFDC]"}`,
      txtColor: `${TXTCOLOR ? "text-black" : "text-[#003813]"}`,
    },
  ];

  // Create array with duplicated slides for infinite effect
  // We add two copies of the first slide at the end and two copies of the last slide at the beginning
  const extendedFeatures = [
    features[features.length - 1], 
    features[features.length - 1], 
    ...features, 
    features[0], 
    features[0]
  ];

  // Handle manual navigation
  const goToSlide = (index) => {
    clearInterval(slideTimer.current);
    setCurrentSlide(index + 2); // +2 because we have two clone slides at the beginning
    startAutoSlide();
  };

  // Set up auto sliding
  const startAutoSlide = () => {
    slideTimer.current = setInterval(() => {
      setCurrentSlide(prev => prev + 1);
    }, 3000);
  };

  // Initialize auto sliding and ensure we start from first real slide
  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    }
    startAutoSlide();
    return () => clearInterval(slideTimer.current);
  }, []);

  // Handle slide transitions and infinite loop logic
  useEffect(() => {
    // When we reach the last clone slide
    if (currentSlide >= features.length + 2) {
      // First let the transition complete to the clone
      setTimeout(() => {
        setIsTransitioning(false); // Temporarily disable transition
        setCurrentSlide(2); // Jump to the real first slide (index 2 in extendedFeatures)
        // Re-enable transition after a small delay
        setTimeout(() => setIsTransitioning(true), 50);
      }, 500); // Same as transition duration
    } 
    // When we go before the first clone slide
    else if (currentSlide <= 1) {
      // First let the transition complete to the clone
      setTimeout(() => {
        setIsTransitioning(false); // Temporarily disable transition
        setCurrentSlide(features.length + 1); // Jump to the real last slide
        // Re-enable transition after a small delay
        setTimeout(() => setIsTransitioning(true), 50);
      }, 500); // Same as transition duration
    }
  }, [currentSlide, features.length]);

  // Touch event handlers for swipe functionality
  const handleTouchStart = (e) => {
    clearInterval(slideTimer.current);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50; // Minimum distance required for a swipe
    
    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        // Swipe left - go to next slide
        setCurrentSlide(prev => prev + 1);
      } else {
        // Swipe right - go to previous slide
        setCurrentSlide(prev => prev - 1);
      }
    }
    
    // Reset touch positions
    setTouchStart(null);
    setTouchEnd(null);
    
    // Restart auto sliding
    startAutoSlide();
  };

  // Mouse events for desktop swipe simulation
  const handleMouseDown = (e) => {
    clearInterval(slideTimer.current);
    setTouchStart(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!touchStart) return;
    setTouchEnd(e.clientX);
  };

  const handleMouseUp = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;
    
    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        setCurrentSlide(prev => prev + 1);
      } else {
        setCurrentSlide(prev => prev - 1);
      }
    }
    
    setTouchStart(null);
    setTouchEnd(null);
    startAutoSlide();
  };

  const handleMouseLeave = () => {
    if (touchStart && touchEnd) {
      handleMouseUp();
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div 
      className="relative w-full overflow-hidden mall-card-carousel"
      ref={carouselRef}
    >
      <div
        className={`flex ${isTransitioning ? "transition-transform duration-500 ease-in-out" : ""}`}
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
          width: `${extendedFeatures.length * 100}%`,
          cursor: 'grab'
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {extendedFeatures.map((feature, index) => (
          <div
            key={index}
            className={`rounded-lg flex p-2 flex-col h-[400px] flex-shrink-0 ${feature.bgColor} ${feature.txtColor}`}
            style={{ minWidth: "100%", overflow: "hidden" }}
          >
            <div className={`w-96 h-full rounded-lg p-2 flex flex-col feature-div ${feature.txtColor} coolvetica`}>
              <h3 className="text-2xl w-[85vw] font-bold text-center h-14 flex items-center justify-center coolvetica">
                {feature.title}
              </h3>
              <div>
                <p className="coolvetica text-xl w-[85vw] text-center">{feature.description}</p>
              </div>
              <div className="flex items-center w-[85vw] justify-center">{feature.imageContent}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {features.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 rounded-full ${
              currentSlide === index + 2 // +2 because we have two clone slides at the beginning
                ? `${COLOR ? "bg-[#ffc73c]" : "bg-[#163312]"}`
                : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeFeatureCardsCarousel;