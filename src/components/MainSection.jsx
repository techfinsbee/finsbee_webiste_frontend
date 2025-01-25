import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './MainSection.component.css';

const MainSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.3, // Trigger when 30% of the section is visible
    triggerOnce: false, // Trigger animation only once
  });

  return (
    <section id="home" className='' >

    <div
      ref={ref} // Attach the ref to the main section
      className="relative w-full max-w-full flex items-center  gap-40 main"
    >
      {/* Left content */}
      <div className="flex flex-col main1 gap-24 ml-24" style={{width:"60%"}}>
        <h1 className="text-4xl font-bold text-gray-800 max-w-full ml-5 roboto-serif main-h1">
        Your Ultimate Financial <br /> SuperApp-Loans, Shopping, Rewards, and More!
        </h1>

        {/* App store buttons */}
        <div className="flex gap-4 ml-5 play">
          <a href="#" className="w-56">
            <img
              src="/play.png"
              alt="Get it on Google Play"
              className="w-full object-contain"
            />
          </a>
          <a href="#" className="w-56">
            <img
              src="/apple.png"
              alt="Download on the App Store"
              className="w-full object-contain"
            />
          </a>
        </div>
      </div>

      {/* Right content */}
      <div className="relative flex items-center main2">
        <img
          src="/person.png"
          alt="Person using mobile app"
          className="w-[700px] object-cover"
        />

        {/* Animated text bubble */}
        <div
          className={`
            main-right-text
            absolute -left-20 px-6 py-3 -bottom-0
            bg-[#E6D5C3] rounded-lg
            transform transition-all duration-[1500ms]
            ${inView ? '-translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
          `}
        >
          <p className="text-gray-800 whitespace-nowrap font-medium text-2xl earn roboto-serif" style={{textAlign:"center"}}>
          Earn FMCoins on <br /> each transaction via <br /> App
          </p>
        </div>
      </div>
      <style jsx>{
        `
          @media (max-width: 375px) {
            .main-right-text{
              width: 80%;
              height: auto !important;
            }
              .main-right-text p{
              font-size: 1.5rem !important;
            }
            .main2 img{
              width: 400px !important;
            }
          
          }

          
        `
      }</style>
    </div>
    </section>
  );
};

export default MainSection;
