import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useLocation } from "react-router-dom";

import AnimatedMain from "../AnimatedMain";
import DownloadNowButton from "./DownloadNowButton";
import Form from "./Form";

const HomeMainSection = ({ COLOR, downloadImage, TXTCOLOR }) => {
  const { ref } = useInView({ threshold: 0.3, triggerOnce: false });
  const [isFormVisible, setIsFormVisible] = useState(false);
  const location = useLocation();

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  const benefits = ["Borrow Easy", "Shop Smart", "Get Rewarded"];

  return (
    <section id="home-home">
      <div
        ref={ref}
        className="w-full relative flex items-center justify-between px-8 lg:px-8 HomeMain overflow-hidden"
        style={{
          // background: COLOR
          //   ? `radial-gradient(100% 100% at 0% 0%, white 20%, transparent 100%),
          //      radial-gradient(120% 120% at 100% 100%, rgba(255, 199, 60, 0.3) 0%, transparent 10%),
          //      radial-gradient(100% 100% at 40% 100%, rgba(255, 199, 60, 0.4) 0%, transparent 70%)`
          //   : `linear-gradient(to top, rgba(255, 199, 60, 0.2) 0%, transparent 60%, transparent 100%),
          //      radial-gradient(ellipse 120% 80% at bottom center, transparent 60%, white 61%)`,
          backgroundColor: "#ffffff",
          borderBottomLeftRadius: "90px",
          borderBottomRightRadius: "90px",
          height: "90vh",
        }}
      >
        {/* Left Content */}
        <div
          className="flex flex-col ml-12 gap-6 lg:gap-20 w-full lg:w-[60%] pt-4 lg:pt-0 home-left coolvetica"
          style={{ color: COLOR ? "#1f1f1f" : "#163312" }}
        >
          <h1 className="text-3xl lg:text-[2.8rem] font-bold leading-tight">
            Jab Zaroorat Ho Loan Ki,
            <br />
            Aur Shauk Ho Shopping Ka!
            <br />
            {TXTCOLOR ? (
              <AnimatedMain benefits={benefits} Color="#ffc73c" TXTCOLOR={TXTCOLOR} />
            ) : (
              <AnimatedMain benefits={benefits} Color="#ffc73c" />
            )}
          </h1>

          <DownloadNowButton />
        </div>

        {/* Right Content */}
        <div className="lg:block w-full lg:w-[35%] relative HomeImage" style={{ zIndex: "50" }}>
          <div className="relative home-main-div -left-4 -bottom-40 h-full flex justify-end w-full">
            <img
              src="/Home Page.svg"
              className="w-[90%] home-main-image h-[100%]"
              alt="Home"
            />
          </div>
        </div>
      </div>

      <Form isFormVisible={isFormVisible} onClose={() => setIsFormVisible(false)} />

      <style jsx>{`
        @media (max-width: 1024px) {
          .home-main-div {
            left: 1rem;
          }
          .home-left {
            margin-left: 0;
          }
        }

        @media (max-width: 912px) {
          .home-main-div {
            left: 1.8rem;
          }
          .home-left {
            margin-left: 0;
          }
        }

        @media (max-width: 680px) {
          .home-left {
            margin-left: 0px !important;
          }
          .HomeMain {
            flex-direction: column;
            gap: 20px;
            height: 100vh !important;
            margin-top: 0px;
            background: radial-gradient(100% 80% at 0% 0%, white 20%, transparent 100%),
                        radial-gradient(150% 120% at 100% 100%, rgba(255, 199, 60, 0.3) 0%, transparent 10%),
                        radial-gradient(150% 120% at 40% 100%, rgba(255, 199, 60, 0.4) 0%, transparent 70%) !important;
          }
          .HomeImage {
            width: 100%;
            display: flex;
            justify-content: center;
          }
          .HomeImage div {
            left: -5% !important;
            top: 5% !important;
          }
        }

        @media (max-height: 512px) {
          .home-main-image {
            width: 80%;
            height: 50%;
          }
          .home-main-div {
            bottom: -8rem;
            left: 4rem;
          }
        }
      `}</style>
    </section>
  );
};

export default HomeMainSection;
