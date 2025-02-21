import React from "react";
import { useInView } from "react-intersection-observer";
import AnimatedMain from "../AnimatedMain";
import DownloadNowButton from "./DownloadNowButton";
const HomeMainSection = ({ COLOR, downloadImage, TXTCOLOR }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });
  const benefits = ["Borrow Easy", "Shop Smart", "Get Rewarded"];
  return (
    <section id="home-home">
      <div
        ref={ref}
        className="w-full relative flex items-center justify-between px-8 lg:px-8 HomeMain overflow-hidden"
        style={{
          background: `${
            COLOR
              ? `linear-gradient(to top, #69B6B2 0%, transparent 50%, transparent 80%),
           radial-gradient(ellipse 120% 80% at bottom center, transparent 0%, white 40%)`
              : `linear-gradient(to top, #b2ff8e 0%, transparent 60%, transparent 100%),
           radial-gradient(ellipse 120% 80% at bottom center, transparent 60%, white 61%)`
          }`,
          backgroundColor: "white",
          borderBottomLeftRadius: "90px",
          borderBottomRightRadius: "90px",
          height: "90vh",
        }}
      >
        {/* Left content */}
        <div
          className="flex flex-col ml-12 gap-6 lg:gap-20   w-full lg:w-[60%] pt-4 lg:pt-0 home-left coolvetica"
          style={{ color: `${COLOR ? "#09615D" : "#163312"}`, zIndex: "1000" }}
        >
          <h1
            className="text-3xl lg:text-[3.2rem] font-bold leading-tight"
            style={{ fontWeight: "bold" }}
          >
            Jab Zaroorat Ho Loan Ki,
            <br />
            Aur Shauk Ho Shopping Ka!
            <br />
            {TXTCOLOR ? (
              <AnimatedMain
                benefits={benefits}
                Color="#09615D"
                TXTCOLOR={TXTCOLOR}
              ></AnimatedMain>
            ) : (
              <AnimatedMain benefits={benefits} Color="#163312"></AnimatedMain>
            )}
          </h1>

          {/* Download button */}
          <DownloadNowButton COLOR={COLOR}></DownloadNowButton>
          {/* <div className="flex items-center gap-4 w-fit" style={{}}>
            <button className="py-3 rounded-full font-semibold flex items-center gap-2">
              <img
                src={`${downloadImage ? downloadImage : "/download.svg"}`}
                alt=""
              />
            </button>
          </div> */}
        </div>

        {/* Right content - Phone mockup */}
        <div
          className="lg:block w-full lg:w-[35%] relative HomeImage"
          style={{ zIndex: "1000" }}
        >
          <div className="relative home-main-div -bottom-40 h-full flex justify-end w-full">
            <img
              src="/image1.png"
              className="w-[100%] home-main-image h-[100%]"
              alt=""
            />
          </div>
        </div>
      </div>

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
        }
        @media (max-width: 912px) {
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
          }
          .HomeImage {
            width: 100%;
            display: flex;
            justify-content: center;
          }
          .HomeImage div {
            left: 0 !important;
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
            left: 5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default HomeMainSection;
