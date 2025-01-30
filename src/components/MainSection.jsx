import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import "./MainSection.component.css";
import AnimatedMain from "./AnimatedMain";
const MainSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.3, // Trigger when 30% of the section is visible
    triggerOnce: false, // Trigger animation only once
  });

  return (
    <section id="home" className="">
      <div
        ref={ref} // Attach the ref to the main section
        className="relative w-full min-h-screen flex items-center main-section  gap-40 main"
      >
        {/* Left content */}
        <div className="flex flex-col main1 gap-16 ml-24">
          <h1 className="text-6xl font-bold text-gray-800  ml-5 roboto-serif main-h1">
            Your Ultimate Financial <br /> SuperApp
            <br />
            <AnimatedMain></AnimatedMain>
          </h1>
          <div className="flex flex-row gap-2 justiy-center items-center number">
            <input
              name=""
              id=""
              type="text"
              class="ml-5 w-72 p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#CD855F] rounded-lg resize-none number-input "
              placeholder="Phone Number"
            ></input>
            <button
              class="w-40 bg-[#CD855F] h-12 text-white font-medium py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="playButton"
            >
              Check your score
            </button>
          </div>
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
            alt="Person using app"
            className="main-img object-cover"
          />

          {/* Animated text bubble */}
          <div
            className={`
            main-right-text
            absolute -left-20 px-6 py-3 -bottom-0
            bg-[#E6D5C3] rounded-lg
            transform transition-all duration-[1500ms]
            ${
              inView ? "-translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }
          `}
          >
            <p
              className="text-gray-800 whitespace-nowrap font-medium text-2xl earn roboto-serif"
              style={{ textAlign: "center" }}
            >
              Earn FMCoins on <br /> each transaction via <br /> App
            </p>
          </div>
        </div>
        <style jsx>{`
          @media (max-height: 512px) {
            .main{
              height: fit-content !important;
            }
          }
          @media (max-width: 912px) {
          .number{
              align-items: baseline !important;
              gap: 0.1rem !important;
            }
              .number-input {
              margin: 10px 0px !important;
            }
        }
          @media (max-width: 512px) {
            
            #playButton {
              padding: 0px 10px !important;
            }

            .main-right-text {
              width: 80%;
              height: auto !important;
            }
            .main-right-text p {
              font-size: 1.5rem !important;
            }
            .main2 img {
              width: 400px !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default MainSection;
