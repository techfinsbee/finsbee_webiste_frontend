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
  COLOR
}) => {
  const [count, setCount] = useState(0);

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
      <div className="text-[3.5rem] prefix text-left coolvetica" style={{fontWeight:"bolder",color:`${COLOR?"#09615D":"#1D3800"}`}}>
        {prefix}
        {formatNumber(count)}
        {suffix}
      </div>
      <div className={`text-gray-600 suffix text-right ${typeof window !== 'undefined' && window.innerWidth > 1400 ? "text-xl" : "text-[1.6rem]"} manrope`}>{label}</div>
    </div>
  );
};

const HomeAnimatedCounter = ({COLOR}) => {
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
      bgColor: `${COLOR?"#18ADA5":"#97F15D"}`,
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const autoSlideInterval = useRef(null);

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 512);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Set up auto-sliding
  useEffect(() => {
    if (isMobile && !isPaused) {
      autoSlideInterval.current = setInterval(() => {
        setCurrentSlide(prev => (prev === stats.length - 1 ? 0 : prev + 1));
      }, 4000); // Change slide every 3 seconds
    }
    
    // Clean up interval when component unmounts or when not needed
    return () => {
      if (autoSlideInterval.current) {
        clearInterval(autoSlideInterval.current);
      }
    };
  }, [isMobile, isPaused, stats.length]);

  // Reset the interval when currentSlide changes to prevent timer interruptions
  useEffect(() => {
    if (isMobile && !isPaused) {
      if (autoSlideInterval.current) {
        clearInterval(autoSlideInterval.current);
      }
      
      autoSlideInterval.current = setInterval(() => {
        setCurrentSlide(prev => (prev === stats.length - 1 ? 0 : prev + 1));
      }, 3000);
    }
    
    return () => {
      if (autoSlideInterval.current) {
        clearInterval(autoSlideInterval.current);
      }
    };
  }, [currentSlide, isMobile, isPaused, stats.length]);

  useEffect(() => {
    if (!inView) {
      setHasExited(true);
    }
  }, [inView]);

  const shouldAnimate = inView && hasExited;

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
    setCurrentSlide(prev => (prev === stats.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? stats.length - 1 : prev - 1));
  };
  // Mobile carousel indicators
  const renderIndicators = (COLOR) => {
    return (
      <div className="flex justify-center mt-4 gap-2">
        {stats.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${currentSlide === index ? `${COLOR?'bg-[#09615D]':'bg-[#112B00]'}` : 'bg-gray-300'}`}
            onClick={() => {
              setCurrentSlide(index);
              setIsPaused(true);
              setTimeout(() => setIsPaused(false), 3000);
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div ref={ref} className="mt-20">
      {isMobile ? (
        <div 
          className="carousel-container"
          ref={carouselRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="carousel-slider" 
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {stats.map((stat, index) => (
              <div className="carousel-slide" key={index}>
                <AnimatedCounter
                  end={stat.end}
                  duration={1000}
                  label={stat.label}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  shouldAnimate={shouldAnimate && currentSlide === index}
                  bgColor={stat.bgColor}
                  COLOR={COLOR}
                />
              </div>
            ))}
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
          .mobile-box {
            min-width: 30vw !important;
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
            font-size: 0.6rem
          }
          .mobile-box {
            min-width: 30vw !important;
          }
        }
        
        @media screen and (max-width: 510px) {
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