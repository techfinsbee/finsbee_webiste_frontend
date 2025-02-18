import React, { useState, useEffect } from "react";

const HomeFeatureCardsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const features = [
    {
      title: "FundsMama Rewards: FMCoins",
      description:
        "Consumers earn FM Coins with every successful loan disbursement or product purchase.",
      imageContent: (
        <div className="flex items-center justify-center gap-6">
          <img
            src="/reward1.png"
            alt="FM Coin"
            className="w-full h-32"
          />
        </div>
      ),
      bgColor:"bg-[#FEFFC5]",
      txtColor:"bg-[#FEFFC5]",
    },
    {
      title: "Discover Mamamart",
      description: "Access 30+ products across 20+ categories",
      imageContent: (
        <div className="flex items-center justify-center">
          <img
            src="/reward2.png"
            alt="Categories"
            className="w-full h-32"
          />
        </div>
      ),
      bgColor:"bg-[#FFF1F0]",
      txtColor:"text-[#331800]",
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
            className="w-full h-32"
          />
        </div>
      ),
      bgColor:"bg-[#CAFFDC]",
      txtColor:"text-[#003813]",
    },
  ];

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentSlide((prev) => (prev === features.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(autoSlide);
  }, [features.length]);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      setCurrentSlide((prev) => (prev === features.length - 1 ? 0 : prev + 1));
    }

    if (touchStart - touchEnd < -75) {
      setCurrentSlide((prev) => (prev === 0 ? features.length - 1 : prev - 1));
    }
  };

  return (
    <div
      className="relative w-full overflow-hidden mall-card-carousel"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ overflowX: "hidden" }}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
          width: `${features.length * 100}%`,
        }}
      >
        {features.map((feature, index) => (
          <div
            key={index}
            className={`rounded-lg p-6 flex flex-col h-[330px] flex-shrink-0 justify-center ${feature.bgColor} ${feature.txtColor}`}
            style={{ minWidth: "100%", overflow: "hidden" }}
          >
            <div className="w-96 h-fit rounded-lg p-6 flex flex-col justify-center items-center feature-div">
              <h3 className="text-2xl font-bold text-center h-14 flex items-center justify-center roboto-serif">
                {feature.title}
              </h3>
              
              <div>
                <p className="roboto-light text-xl">
                  {feature.description}
                </p>
              </div>
              <div className="flex items-center justify-center">
                {feature.imageContent}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {features.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-3 rounded-full ${
              currentSlide === index ? "bg-[#163312]" : "bg-[#b2ff8e]"
            }`}
          />
        ))}
      </div>
      <style jsx>{`
        @media screen and (max-width: 780px) {
          .mall-card-carousel {
            width: 100vw !important;
          }
            .feature-div {
            width: 31% !important;
          }
        }
        @media screen and (max-width: 681px) {
          .feature-div {
            width: 31% !important;
          }
          .mall-card-carousel {
            width: 100% !important;
            height: 100% !important;
          }
        }
      `}</style>
    </div>
  );
};

export default HomeFeatureCardsCarousel;
