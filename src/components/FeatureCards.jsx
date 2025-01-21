import React from "react";

const FeatureCards = () => {
  const features = [
    {
      title: "EXCITING REWARDS SYSTEM",
      description:
        "Consumer earn FM Coins on every successful product purchase",
      bgColor: "bg-orange-100",
      img1: "/coin.png",
      img2: "/1 inr.png",
    },
    {
      title: "EXCITING PRODUCTS",
      description:
        "Access FundsMall Listing 1000+ products across 35+ categories",
      bgColor: "bg-orange-100",
      img: "/category.png",
    },
    {
      title: "Flexible payment options",
      description:
        "Access FundsMall Listing 1000+ products across 35+ categories",
      bgColor: "bg-orange-100",
      img: "/flexible.png",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "50px 0px",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <div className="p-4" style={{ width: "85%" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.bgColor} rounded-lg p-6 shadow-sm transition-transform duration-200 hover:scale-105 flex justify-center`}
              style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <h3
                className="text-xl center font-bold mb-4"
                style={{ textAlign: "center" }}
              >
                {feature.title}
              </h3>
              {index == 0 ? (
                <div className="flex gap-10" style={{
                  justifyContent: "center",
                  alignItems: "center",
                  height:"62px"
                }}>
                  <img src={feature.img1} className="w-[80px] center" alt="" />
                  <div style={{display:"flex", justifyContent:"flex-start"}}>
                  <p style={{fontSize: "80px"}}>=</p>
                  </div>
                  <img src={feature.img2} className="w-[60px] center" alt="" />
                </div>
              ) : (
                <img src={feature.img} className="w-[60px] center" alt="" />
              )}

              <p
                className="text-xl text-gray-700"
                style={{ textAlign: "center" }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureCards;
