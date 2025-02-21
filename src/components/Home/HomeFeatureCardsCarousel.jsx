import React, { useState, useEffect } from "react";

const HomeFeatureCardsCarousel = ({ COLOR }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const features = [
    {
      title: "FundsMama Rewards: FMCoins",
      description:
        "Consumers earn FM Coins with every successful loan disbursement or product purchase.",
      imageContent: (
        <div className=" flex  oveflow-hidden object-cover items-center justify-center gap-6">
          <div className="absolute bottom-[0px]  w-[100vw] h-[200px] overflow-hidden">
            <img
              src="/reward1.png"
              alt="FM Coin"
              className="relative w-full h-[350px] top-0 overflow-hidden object-cover"
            />
          </div>
        </div>
      ),
      bgColor: `${COLOR?'bg-[#18ADA5B2]':'bg-[#FEFFC5]'}`,
      txtColor: "text-[#323300]",
    },
    {
      title: "Discover Mamamart",
      description: "Access 30+ products across 20+ categories",
      imageContent: (
        <div className="flex items-center justify-center">
          <img src="/reward2.png" alt="Categories" className="w-full h-64" />
        </div>
      ),
      bgColor: `${COLOR?'bg-[#18ADA56E]':'bg-[#FFF1F0]'}`,
      txtColor: "text-[#331800]",
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
      bgColor: `${COLOR?'bg-[#03A29517]':'bg-[#CAFFDC]'}`,
      txtColor: "text-[#003813]",
    },
  ];

  // useEffect(() => {
  //   const autoSlide = setInterval(() => {
  //     setCurrentSlide((prev) => (prev === features.length - 1 ? 0 : prev + 1));
  //   }, 3000);

  //   return () => clearInterval(autoSlide);
  // }, [features.length]);

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
            className={`rounded-lg flex p-2 flex-col h-[400px] flex-shrink-0  ${feature.bgColor} ${feature.txtColor}`}
            style={{ minWidth: "100%", overflow: "hidden" }}
          >
            <div className={`w-96 h-full rounded-lg p-2 flex flex-col feature-div ${feature.txtColor} coolvetica`}>
              <h3 className="text-2xl font-bold text-center h-14 flex items-center justify-center coolvetica">
                {feature.title}
              </h3>

              <div>
                <p className="coolvetica text-xl text-center">{feature.description}</p>
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
            className={`h-2 w-2 rounded-full ${
              currentSlide === index
                ? `${COLOR ? "bg-[#09615D]" : "bg-[#163312]"}`
                : "bg-gray-300"
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
