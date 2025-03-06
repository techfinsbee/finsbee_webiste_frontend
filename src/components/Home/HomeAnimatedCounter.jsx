import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const AnimatedCounter = ({
  end,
  duration,
  label,
  prefix = "",
  suffix = "+",
  shouldAnimate,
  bgColor,
  COLOR,
}) => {
  const [count, setCount] = useState(0);
  const { ref: labelRef, inView: labelInView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  useEffect(() => {
    if (!shouldAnimate) {
      setCount(0);
      return;
    }

    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, shouldAnimate]);

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(0) + "M";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(0) + "K";
    }
    return num.toString();
  };

  return (
    <div
      className={`rounded-xl p-4 gap-24 flex flex-col min-w-[29vw] h-fit
                  shadow-md transition-transform duration-300 hover:scale-105 mobile-box`}
      style={{ backgroundColor: bgColor }}
    >
      <div
        className="text-[3.5rem] prefix text-left coolvetica"
        style={{
          fontWeight: "bolder",
          color: `${COLOR ? "black" : "#1D3800"}`,
        }}
      >
        {prefix}
        {formatNumber(count)}
        {suffix}
      </div>
      <div
        ref={labelRef}
        className={`text-gray-600 suffix text-right ${
          typeof window !== "undefined" && window.innerWidth > 1400
            ? "text-xl"
            : "text-[1.6rem]"
        } manrope label-animate ${labelInView ? "label-visible" : ""}`}
      >
        {label}
      </div>
    </div>
  );
};

const HomeAnimatedCounter = ({ COLOR }) => {
  const stats = [
    {
      end: 60,
      label: "Worth Of Loans Disbursed",
      prefix: "INR ",
      suffix: " Cr+",
      bgColor: "#F8F9FA",
    },
    {
      end: 1000000,
      label: "App downloads",
      prefix: "",
      bgColor: `${COLOR ? "#18ADA5" : "#97F15D"}`,
    },
    {
      end: 40000,
      label: "Loans Disbursed",
      prefix: "",
      bgColor: "#F8F9FA",
    },
  ];

  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "-5% 0px -5% 0px",
    triggerOnce: false,
  });

  const [hasExited, setHasExited] = useState(true);
  const [activeIndex, setActiveIndex] = useState(1); // Start at index 1 (real first slide)
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const autoSlideInterval = useRef(null);
  
  // Create an extended array with cloned items for infinite scrolling
  // We add the last slide at the beginning and the first slide at the end
  const extendedStats = [
    { ...stats[stats.length - 1], isClone: true }, // Last slide clone at the beginning
    ...stats, // Original slides
    { ...stats[0], isClone: true }, // First slide clone at the end
  ];

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 512);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Handle the initialization - we need to position the carousel without transition initially
  useEffect(() => {
    if (isMobile && carouselRef.current) {
      // Start at the first real slide (index 1 in extendedStats)
      carouselRef.current.style.transition = "none";
      carouselRef.current.style.transform = `translateX(-${100}%)`;
      
      // Force a reflow to apply the transform immediately
      carouselRef.current.offsetHeight;
      
      // Re-enable transitions after initial positioning
      setTimeout(() => {
        carouselRef.current.style.transition = "transform 0.5s ease-out";
      }, 50);
    }
  }, [isMobile]);

  // Set up auto-sliding
  useEffect(() => {
    if (isMobile && !isPaused && !isTransitioning) {
      autoSlideInterval.current = setInterval(() => {
        nextSlide();
      }, 4000); // Change slide every 4 seconds
    }

    // Clean up interval when component unmounts or when not needed
    return () => {
      if (autoSlideInterval.current) {
        clearInterval(autoSlideInterval.current);
      }
    };
  }, [isMobile, isPaused, isTransitioning]);

  useEffect(() => {
    if (!inView) {
      setHasExited(true);
    }
  }, [inView]);

  const shouldAnimate = inView && hasExited;
  
  // Function to handle transition end
  const handleTransitionEnd = () => {
    // If we've reached a clone slide, we need to jump to the corresponding real slide without transition
    if (activeIndex === 0) {
      // We reached the first clone (which is the last slide clone)
      // Jump to the real last slide
      if (carouselRef.current) {
        carouselRef.current.style.transition = "none";
        const newIndex = stats.length; // Index of the last real slide
        setActiveIndex(newIndex);
        carouselRef.current.style.transform = `translateX(-${newIndex * 100}%)`;
        
        // Force a reflow to apply the transform immediately
        carouselRef.current.offsetHeight;
        
        // Re-enable transitions
        setTimeout(() => {
          carouselRef.current.style.transition = "transform 0.5s ease-out";
          setIsTransitioning(false);
        }, 50);
      }
    } else if (activeIndex === extendedStats.length - 1) {
      // We reached the last clone (which is the first slide clone)
      // Jump to the real first slide
      if (carouselRef.current) {
        carouselRef.current.style.transition = "none";
        const newIndex = 1; // Index of the first real slide
        setActiveIndex(newIndex);
        carouselRef.current.style.transform = `translateX(-${newIndex * 100}%)`;
        
        // Force a reflow to apply the transform immediately
        carouselRef.current.offsetHeight;
        
        // Re-enable transitions
        setTimeout(() => {
          carouselRef.current.style.transition = "transform 0.5s ease-out";
          setIsTransitioning(false);
        }, 50);
      }
    } else {
      setIsTransitioning(false);
    }
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true); // Pause auto-sliding when user interacts
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 75) {
      // Swipe left, go to next slide
      nextSlide();
    } else if (touchEndX.current - touchStartX.current > 75) {
      // Swipe right, go to previous slide
      prevSlide();
    }

    // Resume auto-sliding after a delay
    setTimeout(() => {
      setIsPaused(false);
    }, 1000);
  };

  const nextSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setActiveIndex(activeIndex + 1);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setActiveIndex(activeIndex - 1);
  };

  // For indicator clicks, we need to map from visible index (0, 1, 2) to extended index (1, 2, 3)
  const goToSlide = (visibleIndex) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setActiveIndex(visibleIndex + 1); // +1 because we have a clone at the beginning
    
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 3000);
  };

  // Mobile carousel indicators - maps from extended index to visible index
  const renderIndicators = (COLOR) => {
    // Convert activeIndex to visible index (account for clones)
    const visibleIndex = activeIndex === 0 
      ? stats.length - 1 
      : activeIndex === extendedStats.length - 1 
        ? 0 
        : activeIndex - 1;
        
    return (
      <div className="flex justify-center mt-4 gap-2">
        {stats.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              visibleIndex === index
                ? `${COLOR ? "bg-[#09615D]" : "bg-[#112B00]"}`
                : "bg-gray-300"
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    );
  };

  // Map from extended index to the actual stats index
  const getStatsIndex = (extendedIndex) => {
    if (extendedIndex === 0) return stats.length - 1;
    if (extendedIndex === extendedStats.length - 1) return 0;
    return extendedIndex - 1;
  };

  return (
    <div ref={ref} className="mt-20">
      {isMobile ? (
        <div className="carousel-container">
          <div
            className="carousel-slider"
            ref={carouselRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onTransitionEnd={handleTransitionEnd}
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {/* Extended slides with clones for infinite effect */}
            {extendedStats.map((stat, extendedIndex) => {
              const statsIndex = getStatsIndex(extendedIndex);
              return (
                <div className="carousel-slide" key={`${extendedIndex}-${stat.isClone ? 'clone' : 'original'}`}>
                  <AnimatedCounter
                    end={stat.end}
                    duration={1000}
                    label={stat.label}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    shouldAnimate={shouldAnimate && activeIndex === extendedIndex}
                    bgColor={stat.bgColor}
                    COLOR={COLOR}
                  />
                </div>
              );
            })}
          </div>
          {renderIndicators(COLOR)}
        </div>
      ) : (
        <div className="flex gap-2 justify-center items-center counters">
          {stats.map((stat, index) => (
            <AnimatedCounter
              key={index}
              end={stat.end}
              duration={1000}
              label={stat.label}
              prefix={stat.prefix}
              suffix={stat.suffix}
              shouldAnimate={shouldAnimate}
              bgColor={stat.bgColor}
              COLOR={COLOR}
            />
          ))}
        </div>
      )}

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .counter-animate {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .counter-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .label-animate {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s;
        }

        .label-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .carousel-container {
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .carousel-slider {
          display: flex;
          transition: transform 0.5s ease-out;
          width: 100%;
        }

        .carousel-slide {
          min-width: 100%;
          display: flex;
          justify-content: center;
          padding: 0 10px;
        }

        @media screen and (max-width: 1000px) {
          .counters {
            gap: 1rem !important;
            padding: 0px 10px;
          }
        }

        @media screen and (max-width: 974px) {
          .counters {
            gap: 1rem !important;
            padding: 0px 10px;
          }
          .prefix {
            font-size: 1.7rem;
          }
          .suffix {
            font-size: 0.7rem;
          }
          
        }

        @media screen and (max-width: 655px) {
          .counters {
            gap: 10px !important;
            padding: 0px 10px;
          }
          .prefix {
            font-size: 1.6rem;
          }
          .suffix {
            font-size: 0.6rem;
          }
          
        }

        @media screen and (max-width: 510px) {
          .counter-animate,
          .label-animate {
            opacity: 1;
            transform: none;
            transition: none;
          }

          .counter-visible,
          .label-visible {
            opacity: 1;
            transform: none;
          }
          .counters {
            flex-direction: column;
          }
          .prefix {
            font-size: 2.2rem;
          }
          .suffix {
            font-size: 1rem;
          }
          .mobile-box {
            min-width: 80vw !important;
          }
        }
      `}</style>
    </div>
  );
};

export default HomeAnimatedCounter;