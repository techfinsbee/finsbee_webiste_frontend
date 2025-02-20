import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const HomeCibilScoreSection = ({ COLOR, cibilImgaes }) => {
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
      icon: `${cibilImgaes ? cibilImgaes.image6 : "/CAD.png"}`,
      title: "Correct Any Discrepancies",
      description:
        "Contact the lender or the concerned credit bureau to correct any discrepancies",
    },
    {
      icon: `${cibilImgaes ? cibilImgaes.image3 : "/CH.png"}`,

      title: "Monitor Your Credit Health",
      description:
        "Check your credit score and report regularly to track your credit health",
    },
    {
      icon: `${cibilImgaes ? cibilImgaes.image4 : "/FD.png"}`,

      title: "Improve Your Financial Decision",
      description:
        "Learn about your credit history, credit health, and various other factors",
    },
    {
      icon: `${cibilImgaes ? cibilImgaes.image5 : "/KI.png"}`,

      title: "Learn About Key Insights",
      description:
        "Make better decisions to grow your savings and improve your Finances",
    },
    {
      icon: `${cibilImgaes ? cibilImgaes.image1 : "/CHM.png"}`,

      title: "Your Credit Health Matters",
      description: "Credit health is one of the most Important Factors",
    },
    {
      icon: `${cibilImgaes ? cibilImgaes.image2 : "/BLR.png"}`,

      title: "Get Better Loan Rates",
      description:
        "A good Credit Score will help you get better interest rates and credit Limits",
    },
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
      if (direction === "next") {
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
      handleSlideChange("next");
    }

    if (touchStart - touchEnd < -75) {
      // Swipe right
      handleSlideChange("prev");
    }
  };

  return (
    <div className="flex justify-center px-4 cibil-score">
      <div
        className="cibil-w p-8"
        style={{
          width: "86%",
          borderRadius: "30px",
          background: `${COLOR ? "#09615D" : "#163312"}`,
        }}
      >
        {/* Header */}
        <div
          className="flex cibil-header pt-8"
          style={{ justifyContent: "space-between" }}
        >
          <h1 className="text-3xl md:text-[70px] text-white gap-2 flex justify-center font-bold mb-12 check coolvetica">
            Check Your Cibil Score
          </h1>
          <button
            className="bg-white cibil-button text-black text-xl p-0 font-semibold coolvetica"
            style={{
              borderRadius: "50px",
              padding: "10px 10px",
              height: "fit-content",
            }}
          >
            Check Your Cibil Score
          </button>
        </div>

        {/* Mobile Carousel */}
        <div
          className="md:hidden flex flex-col  carousel-container overflow-hidden "
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
              width: `${carouselItems.length * 20}%`,
            }}
          >
            {carouselItems.map((item, index) => (
              <div
                key={index}
                className="w-full cibil-card flex flex-shrink-0 space-y-1 overflow-hidden"
                style={{ padding: "0 auto" }}
              >
                <div className="flex gap-2 cibil-container w-80">
                  <div className="flex" style={{ marginTop:"20px" }}>
                    <img
                      src={item.icon}
                      className="w-20 h-12 text-green-500"
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white coolvetica">
                      {item.title}
                    </h2>
                    <p className="desc text-white coolvetica">
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
                  index === currentSlide
                    ? `${cibilImgaes ? "bg-[#68e6df]" : "bg-[#b2ff8e]"}`
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid (unchanged) */}
        <div className="hidden md:grid grid-cols-2 md:grid-cols-2 gap-4 mb-12 ">
          {carouselItems.map((item, index) => (
            <div key={index} className="space-y-1">
              <div className="flex gap-6">
                <div className="flex justify-center items-center ">
                  {item.icon ? (
                    item.title === "Your Credit Health Matters" ? (
                      <img
                        src={item.icon}
                        className="w-14 h-fit mt-1 text-green-500 object-cover"
                        alt=""
                      />
                    ) : (
                      <img
                        src={item.icon}
                        className="w-16 h-fit text-green-500 object-cover"
                        alt=""
                      />
                    )
                  ) : (
                    item.svg
                  )}
                </div>
                <div>
                  <h2 className="text-2xl text-white font-bold coolvetica">
                    {item.title}
                  </h2>
                  <p className="text-gray-300 manrope">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section (unchanged) */}
      </div>

      {/* Existing styles */}
      <style jsx>{`
        @media (max-height: 512px) {
          .check {
            font-size: 2rem;
          }
        }
        @media (max-width: 1024px) {
        .check {
            font-size: 2.8rem !important;
          }
        }
        @media (max-width: 825px) {
          .cibil-header {
            flex-direction: column;
            justify-content: center !important;
            align-items: center;
            margin-bottom: 20px;
          }
          .cibil-button {
            width: 50% !important;
            // height: 100px !important;
            font-size: 1.5rem !important;
          }
          .cibil-card {
            margin-right: 10px;
          }
          .check {
            font-size: 1.8rem !important;
          }
          .cibil-score {
            // margin-top: 100px !important;
          }
          .cibil-w {
            width: 100% !important;
          }
          .cibil-container {
            width: 80% !important;
          }
        }

        @media (max-width: 512px) {
          .desc {
            width: 100%;
          }
          .cibil-card {
            margin-right: 0px;
          }
          .cibil-container {
            width: 80vw !important;
            text-align: center;
          }
          .cibil-container h2 {
            font-size: 1.3rem;
          }
          .cibil-button {
            width: fit-content !important;
            // height: 100px !important;
            font-size: 1.3rem !important;
            // line-height: 1.5rem !important;
          }
          .check {
            font-size: 1.8rem !important;
            text-align: center;
          }
          .cibil-score {
            padding: 0px !important;
          }
          .cibil-w {
            width: 100% !important;
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

export default HomeCibilScoreSection;
