import React from "react";
import HomeFeatureCardsCarousel from "./HomeFeatureCardsCarousel";
const RewardsSection = ({ COLOR }) => {
  return (
    <section className="w-full py-10 px-4 lg:px-4 reward-section">
      <div className="grid grid-cols-1 md:grid-cols-2 rewards coolvetica">
        {/* Left box - FMCoins */}
        <div className={`${COLOR?"bg-[#18ADA5B2]":"bg-[#FEFFC5]"} h-[500px] rounded-2xl px-8 pt-8 object-cover overflow-hidden box-1 flex flex-col w-[96%] ml-2`}>
          <div className="">
            <h2
              className="text-2xl color-[#323300] lg:text-3xl font-bold text-gray-800 mb-2 reward-title"
              style={{ color: "#323300" }}
            >
              FundsMama
              <br />
              Rewards: FMCoins
            </h2>
            <p className="text-gray-600 reward-content">
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
                overflow: "hidden",
              }}
            />
          </div>
        </div>

        {/* Right column - split into two boxes */}
        <div className="flex flex-col justify-between">
          {/* Top box - Mamamart */}
          <div className={`${COLOR?"bg-[#18ADA56E]":"bg-[#FFE8D4]"} reward-2 rounded-2xl px-4 py-0 flex justify-between items-center w-[95%]`}>
            <div>
              <h2
                className="text-2xl text-[#331800]  lg:text-3xl font-bold text-gray-800 mb-2 reward-title"
                style={{ color: "#331800" }}
              >
                Discover
                <br />
                Mamamart
              </h2>
              <p className="text-gray-600 reward-content">
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
          <div className={`${COLOR?"bg-[#03A29517]":"bg-[#CAFFDC]"} reward-3 rounded-2xl overflow-hidden pl-4 flex justify-between items-center w-[95%]`}>
            <div>
              <h2
                className="text-2xl text-[#003813] lg:text-3xl font-bold text-gray-800 mb-2 reward-title"
                style={{ color: "#003813" }}
              >
                Flexible Payment
                <br />
                Options
              </h2>
              <p className="text-gray-600 reward-content">
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
        <HomeFeatureCardsCarousel COLOR={COLOR}></HomeFeatureCardsCarousel>
      </div>
      <style jsx>{`
        .mobile-rewards {
          display: none;
        }
        @media (max-width: 769px) {
          .img2,
          .img3 {
            width: 25vw;
            height: 20vh;
          }
        }
        @media (max-width: 912px) {
          .img2,
          .img3 {
            width: 25vw;
            height: 15vh;
          }
          .reward-title {
            font-size: 1.3rem;
            line-height: 1.2rem;
          }
          .reward-content {
            font-size: 0.9rem;
          }
          .box-1 {
            height: 380px !important;
          }
        }

        @media (max-width: 728px) {
          .mobile-rewards {
            display: block;
          }
          .rewards {
            display: none;
          }
          .reward-section {
            padding-top: 0px !important;
            padding-bottom: 0px !important;
          }
        }
        @media (max-height: 512px) {
          .box-1 {
            height: 300px !important;
          }
          .reward-2 {
            padding-top: 10px !important;
            padding-bottom: 10px !important;
          }
            .reward-2 img,.reward-3 img{
              height: 35vh;
            }
        }
      `}</style>
    </section>
  );
};

export default RewardsSection;
