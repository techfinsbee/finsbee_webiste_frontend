import React from "react";
import HomeFeatureCardsCarousel from "./HomeFeatureCardsCarousel";
const RewardsSection = () => {
  return (
    <section className="w-full py-10 px-4 lg:px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 rewards coolvetica">
        {/* Left box - FMCoins */}
        <div className="bg-[#FEFFC5] h-[500px] rounded-2xl px-8 pt-8 object-cover overflow-hidden  flex flex-col">
          <div>
            <h2
              className="text-2xl color-[#323300] lg:text-3xl font-bold text-gray-800 mb-2"
              style={{ color: "#323300" }}
            >
              FundsMama
              <br />
              Rewards: FMCoins
            </h2>
            <p className="text-gray-600">
              Consumers earn FM Coins with every successful loan disbursement or
              product purchase.
            </p>
          </div>
            <div className="relative object-cover overflow-hidden h-[100%] w-full bottom-0">
              <img
                src="/reward1.png"
                className="relative img1 h-fit w-fit"
                alt="FMCoins Rewards"
                style={{
                  objectFit: "cover",
                  overflow:"hidden",
                }}
              />
            </div>
        </div>

        {/* Right column - split into two boxes */}
        <div className="flex flex-col justify-between">
          {/* Top box - Mamamart */}
          <div className="bg-[#FFE8D4] rounded-2xl px-4 py-0 flex justify-between items-center">
            <div>
              <h2
                className="text-2xl text-[#331800]  lg:text-3xl font-bold text-gray-800 mb-2"
                style={{ color: "#331800" }}
              >
                Discover
                <br />
                Mamamart
              </h2>
              <p className="text-gray-600">
                Access 30+ products across 10+ categories
              </p>
            </div>
            <img
              src="/reward2.png"
              alt="Mamamart Shopping"
              className="w-[300px] h-fit object-contain relative left-12 img2"
            />
          </div>

          {/* Bottom box - Payment Options */}
          <div className="bg-[#CAFFDC] rounded-2xl overflow-hidden pl-4 flex justify-between items-center">
            <div>
              <h2
                className="text-2xl text-[#003813] lg:text-3xl font-bold text-gray-800 mb-2"
                style={{ color: "#003813" }}
              >
                Flexible Payment
                <br />
                Options
              </h2>
              <p className="text-gray-600">
                Enjoy seamless shopping with flexible payment options that suit
                your preferences
              </p>
            </div>
            <img
              src="/2.png"
              alt="Payment Options"
              className="w-[250px] h-fit relative bottom-0 right-0 object-contain flex img3"
              style={{ flexDirection: "row-reverse" }}
            />
          </div>
        </div>
      </div>
      <div className="mobile-rewards">
        <HomeFeatureCardsCarousel></HomeFeatureCardsCarousel>
      </div>
      <style jsx>{`
        .mobile-rewards {
          display: none;
        }
        @media (max-width: 912px) {
          .img2,
          .img3 {
            width: 25vw;
            height: 25vh;
          }
        }
        @media (max-width: 728px) {
          .mobile-rewards {
            display: block;
          }
          .rewards {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default RewardsSection;
