import React, { useState, useEffect } from 'react';

const FeatureCardsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const features = [
    {
      title: "FundsMama Rewards: FMCoins",
      description: "Consumers earn FM Coins with every successful loan disbursement or product purchase.",
      imageContent: (
        <div className="flex items-center justify-center gap-6">
          <img src="/coin.png" alt="FM Coin" className="w-18 h-14 object-contain" />
          <span className="text-5xl flex" style={{ position: "relative", top: "-5px" }}>=</span>
          <img src="/1 inr.png" alt="INR 1" className="w-12 h-12 object-contain" />
        </div>
      )
    },
    {
      title: "Discover FundsMall",
      description: "Access 30+ products across 20+ categories",
      imageContent: (
        <div className="flex items-center justify-center">
          <img src="/category.png" alt="Categories" className="w-12 h-12 object-contain" />
        </div>
      )
    },
    {
      title: "Flexible payment options",
      description: "Enjoy seamless shopping with flexible payment options that suit your preferences",
      imageContent: (
        <div className="flex items-center justify-center">
          <img src="/flexible.png" alt="Flexible Payment" className="w-12 h-12 object-contain" />
        </div>
      )
    }
  ];

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentSlide((prev) => 
        prev === features.length - 1 ? 0 : prev + 1
      );
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
      setCurrentSlide((prev) => 
        prev === features.length - 1 ? 0 : prev + 1
      );
    }

    if (touchStart - touchEnd < -75) {
      setCurrentSlide((prev) => 
        prev === 0 ? features.length - 1 : prev - 1
      );
    }
  };

  return (
    <div 
      className="relative w-full overflow-hidden md:hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
          width: `${features.length * 100}%`
        }}
      >
        {features.map((feature, index) => (
          <div 
            key={index} 
            className=" rounded-lg p-6 flex flex-col h-[280px] w-full flex-shrink-0 justify-center"
            style={{ minWidth: "100%" }}
          >
            <div className=' bg-orange-100 w-96 h-[300px] rounded-lg p-6 flex flex-col justify-center items-center feature-div'>
            <h3 className="text-2xl font-bold text-center h-14 flex items-center justify-center roboto-serif">
              {feature.title}
            </h3>
            <div className="h-24 flex items-center justify-center">
              {feature.imageContent}
            </div>
            <div>
              <p className="text-base roboto-light text-xl">
                {feature.description}
              </p>
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
              currentSlide === index ? 'bg-orange-500' : 'bg-orange-200'
            }`}
          />
        ))}
      </div>
      <style jsx>{`
        @media screen and (max-width: 420px){
          .feature-div{
            width: 31% !important;
          }
        }
      `}</style>
    </div>
  );
};

export default FeatureCardsCarousel;
