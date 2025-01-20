import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './MainSection.component.css';

const MainSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.3, // Trigger when 20% of the section is visible
    triggerOnce: false, // Trigger animation only once
  });

  return (
    <div
      ref={ref} // Attach the ref to the main section
      className="relative w-full max-w-full flex items-center center gap-40 justify-between main"
    >
      {/* Left content */}
      <div className="flex flex-col gap-4 main1 ml-24">
        <h1 className="text-3xl font-bold text-gray-800 max-w-full ml-5">
          Your Ultimate Finance App with a Seamless Experience 
        </h1>

        <h2 className="text-4xl text-gray-700 mb-6 ml-5">
        Borrow, Shop, Insure - All Seamlessly 
        </h2>

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
          className="w-128 object-cover"
        />

        {/* Animated text bubble */}
        <div
          className={`
            main-right-text
            absolute -left-24 px-6 py-3 -bottom-0
            bg-[#E6D5C3] rounded-lg
            transform transition-all duration-[1500ms]
            ${inView ? '-translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
          `}
        >
          <p className="text-gray-800 whitespace-nowrap font-medium text-3xl earn">
            Earn coins and <br /> unlock benefits
          </p>
        </div>
      </div>
      <style jsx>{
        `
          @media (max-width: 375px) {
            .main-right-text{
              width: 60%;
              height: auto !important;
            }
              .main-right-text p{
              font-size: 1rem !important;
            }

            
          }
        `
      }</style>
    </div>
  );
};

export default MainSection;
