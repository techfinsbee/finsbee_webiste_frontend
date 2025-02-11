import React from 'react';
import HomeFeatureCardsCarousel from './HomeFeatureCardsCarousel';
const RewardsSection = () => {
  return (
    <section className="w-full py-12 px-4 lg:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 rewards">
        {/* Left box - FMCoins */}
        <div className="bg-[#FEFFC5] rounded-2xl p-8 flex flex-col">
          <div>
            <h2 className="text-2xl text-[#323300] lg:text-3xl font-bold text-gray-800 mb-2">
              FundsMama
              <br />
              Rewards: FMCoins
            </h2>
            <p className="text-gray-600">
              Consumers earn FM Coins with every successful loan disbursement or product purchase.
            </p>
          </div>
          <div className="flex items-center relative top-40 justify-center">
            <img
              src="/reward1.png"
              alt="FMCoins Rewards"
              style={{objectFit:"cover",
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </div>

        {/* Right column - split into two boxes */}
        <div className="flex flex-col justify-between">
          {/* Top box - Mamamart */}
          <div className="bg-[#FFF1F0] rounded-2xl px-4 py-0 flex justify-between items-center">
            <div>
              <h2 className="text-2xl text-[#331800]  lg:text-3xl font-bold text-gray-800 mb-2">
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
              className="w-[400px] h-[240px] object-contain"
            />
          </div>

          {/* Bottom box - Payment Options */}
          <div className="bg-[#CAFFDC] rounded-2xl px-4 flex justify-between items-center">
            <div>
              <h2 className="text-2xl text-[#003813] lg:text-3xl font-bold text-gray-800 mb-2">
                Flexible Payment
                <br />
                Options
              </h2>
              <p className="text-gray-600">
                Enjoy seamless shopping with flexible payment options that suit your preferences
              </p>
            </div>
            <img
              src="/reward3.png"
              alt="Payment Options"
              className="w-[400px] h-[240px] object-contain flex"
              style={{flexDirection:"row-reverse"}}
            />
          </div>
        </div>
      </div>
      <div className='mobile-rewards'>
      <HomeFeatureCardsCarousel></HomeFeatureCardsCarousel>
      </div>
      <style jsx>{`
      .mobile-rewards {
        display: none;
      }
        @media (max-width: 728px){
          .mobile-rewards{
            display: block;
          }
            .rewards{
              display: none;
            }
        }
      `}</style>
    </section>
  );
};

export default RewardsSection;