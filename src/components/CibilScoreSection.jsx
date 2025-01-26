import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const CibilScoreSection = () => {
  const [score, setScore] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  // Existing score animation logic
  useEffect(() => {
    let animationFrame;
    let startTime;
    const duration = 1000;
    const targetScore = 400;

    const animateValue = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / duration;

      if (progress < 1 && inView) {
        const currentScore = Math.min(
          Math.floor(progress * targetScore),
          targetScore
        );
        setScore(currentScore);
        animationFrame = requestAnimationFrame(animateValue);
      } else {
        setScore(targetScore);
      }
    };

    if (inView) {
      animationFrame = requestAnimationFrame(animateValue);
    }

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [inView]);

  // Carousel items data
  const carouselItems = [
    {
      icon: "/sheet.png",
      title: "Correct Any Discrepancies",
      description: "Contact the lender or the concerned credit bureau to correct any discrepancies"
    },
    {
      icon: "/credit.png",
      title: "Monitor Your Credit Health",
      description: "Check your credit score and report regularly to track your credit health"
    },
    {
      icon: "/money.png",
      title: "Improve Your Financial Decision",
      description: "Learn about your credit history, credit health, and various other factors"
    },
    {
      icon: "/piggy-bank.png",
      title: "Learn About Key Insights",
      description: "Make better decisions to grow your savings and improve your Finances"
    },
    {
      icon: "/cibil-mobile.png",
      title: "Your Credit Health Matters",
      description: "Credit health is one of the most Important Factors"
    },
    {
      svg: (
        <svg className="w-8 h-8 text-green-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2" />
          <path d="M8 12l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Get Better Loan Rates",
      description: "A good Credit Score will help you get better interest rates and credit Limits"
    }
  ];

  // Auto-slide effect
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  // Manual slide handler
  const handleSlideChange = (direction) => {
    setCurrentSlide((prev) => {
      if (direction === 'next') {
        return (prev + 1) % carouselItems.length;
      } else {
        return prev === 0 ? carouselItems.length - 1 : prev - 1;
      }
    });
  };

  // Touch handling for manual sliding
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe left
      handleSlideChange('next');
    }

    if (touchStart - touchEnd < -75) {
      // Swipe right
      handleSlideChange('prev');
    }
  };

  return (
    <div
      className="flex justify-center p-8 cibil-score"
      style={{ marginTop: "300px" }}
    >
      <div className="cibil-w" style={{ width: "84%" }}>
        {/* Header */}
        <h1 className="text-4xl md:text-5xl gap-2 flex justify-center font-bold mb-12 check roboto-serif">
          Check Your <span className="text-[#C17D5B]">Cibil Score</span>
        </h1>

        {/* Mobile Carousel */}
        <div 
          className="md:hidden carousel-container overflow-hidden mt-10"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="flex transition-transform duration-300 ease-in-out" 
            style={{ 
              transform: `translateX(-${currentSlide * 100}%)`,
              width: `${carouselItems.length * 100}%`,
              
            }}
          >
            {carouselItems.map((item, index) => (
              <div 
                key={index} 
                className="w-full flex-shrink-0 space-y-1 px-4 overflow-hidden"
              >
                <div className="flex gap-4 w-80">
                  <div className="flex justify-center" style={{ alignItems: "center" }}>
                    {item.icon ? (
                      <img
                        src={item.icon}
                        className="w-12 h-8 text-green-500"
                        alt=""
                      />
                    ) : (
                      item.svg
                    )}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold roboto-serif">
                      {item.title}
                    </h2>
                    <p className="text-gray-600 roboto-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-4">
            {carouselItems.map((_, index) => (
              <span 
                key={index}
                className={`h-2 w-2 mx-1 rounded-full ${
                  index === currentSlide ? 'bg-[#C17D5B]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid (unchanged) */}
        <div className="hidden md:grid grid-cols-2 md:grid-cols-2 gap-4 mb-12">
          {carouselItems.map((item, index) => (
            <div key={index} className="space-y-1">
              <div className="flex gap-4">
                <div className="flex justify-center" style={{ alignItems: "center" }}>
                  {item.icon ? (
                    <img
                      src={item.icon}
                      className="w-8 h-8 text-green-500"
                      alt=""
                    />
                  ) : (
                    item.svg
                  )}
                </div>
                <div>
                  <h2 className="text-2xl font-bold roboto-serif">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 roboto-light">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section (unchanged) */}
        <div
          ref={ref}
          className="flex flex-col md:flex-row justify-between items-center gap-4 mt-10"
        >
          <button
            className="bg-[#D4B8AC] cibil-button text-black text-4xl px-12 py-3 font-semibold hover:bg-[#C17D5B] hover:text-white transition-colors w-96 mb-8 roboto-serif"
            style={{ height: "130px", borderRadius: "20px" }}
          >
            Check Your <br />Cibil Score
          </button>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src="/lever.gif" style={{ width: "90%" }} alt="" />
          </div>
        </div>
      </div>

      {/* Existing styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .cibil-button {
            width: 15rem !important;
            height: 100px !important;
            font-size: 1.5rem !important;
          }
          .check {
            font-size: 1.8rem !important;
          }
          .cibil-score {
            margin-top: 0px !important;
          }
          .cibil-w {
            width: 100% !important;
          }
        }

        @media (max-width: 512px) {
          .cibil-button {
            width: 15rem !important;
            height: 100px !important;
            font-size: 1.5rem !important;
          }
          .check {
            font-size: 1.3rem !important;
          }
          .cibil-score {
            margin-top: 0px !important;
          }
          .cibil-w {
            width: 100% !important;
          }
        }

        @media (max-width: 512px) {
        .cibil-score {
            margin-top: 200px !important;
          }
        }
        @media (min-width: 1367px) and (max-width: 1920px) {
          .cibil-score {
            margin-top: 0px;
          }
        }
      `}</style>
    </div>
  );
};

export default CibilScoreSection;