import React from "react";
import FeatureCardsCarousel from "./FeatureCardsCarousel";
const FeatureCards = () => {
  const features = [
    {
      title: "FundsMama Rewards: FMCoins",
      description: "Consumers earn FM Coins with every successful loan disbursement or product purchase.",
      imageContent: (
        <div className="flex items-center justify-center gap-6">
          <img src="/coin.png" alt="FM Coin" className="w-18 h-14 object-contain" />
          <span className="text-5xl flex" style={{position:"relative", top:"-5px"}}>=</span>
          <img src="/1 inr.png" alt="INR 1" className="w-12 h-12 object-contain" />
        </div>
      )
    },
    {
      title: "Discover Mamamart",
      description: "Access 30+ products across 20+ categories",
      imageContent: (
        <div className="flex items-center justify-center ">
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

  return (
    <>
    <div className="w-full max-w-6xl mx-auto mt-10 p-4 main-cards">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-orange-100 rounded-lg p-6 flex flex-col h-[280px]"
          >
            {/* Title */}
            <h3 className="text-2xl font-bold text-center h-14 flex items-center justify-center roboto-serif">
              {feature.title}
            </h3>

            {/* Image Section - Fixed Height */}
            <div className="h-24 flex items-center justify-center">
              {feature.imageContent}
            </div>

            {/* Description - Fixed Position */}
            <div className="">
              <p className="text-base roboto-light text-xl">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      
    </div>

    <style jsx>{
    `
    @media (max-width: 768px){
    .main-cards {
      display: none !important;
    }
    }
    `}</style>
    <div className="mobile-card flex justify-center">
      <FeatureCardsCarousel></FeatureCardsCarousel>
      </div>

      <style jsx>{`
        @media screen and (min-width: 781px) {
          .mobile-card{
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default FeatureCards;