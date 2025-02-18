import React from "react";
import { useInView } from "react-intersection-observer";
import AnimatedMain from "../AnimatedMain";
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
        className="w-full relative flex items-center justify-between px-8 lg:px-16 HomeMain overflow-hidden"
        style={{
          background: `linear-gradient(180deg, #fff 0%,#fff 50%, ${
            COLOR ? "#69B6B2 100%" : "#b2ff8e 100%"
          })`,
          borderBottomLeftRadius: "90px",
          borderBottomRightRadius: "90px",
          height: "90vh",
        }}
      >
        {/* Left content */}
        <div
          className="flex flex-col ml-12 gap-4 lg:gap-12 w-full lg:w-1/2 pt-4 lg:pt-0 home-left coolvetica"
          style={{ color: `${COLOR ? "#09615D" : "#163312"}` }}
        >
          <h1
            className="text-3xl lg:text-5xl font-bold leading-tight"
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
          <div className="flex items-center gap-4 w-fit" style={{}}>
            <button className="py-3 rounded-full font-semibold flex items-center gap-2">
              <img
                src={`${downloadImage ? downloadImage : "/download.svg"}`}
                alt=""
              />
            </button>
          </div>
        </div>

        {/* Right content - Phone mockup */}
        <div className="lg:block w-1/2 relative HomeImage">
          <div className="relative home-main-div -bottom-40 h-full left-20 w-96 mx-auto">
            <img
              src="/image1.png"
              className="w-full home-main-image h-full"
              alt=""
            />
          </div>
        </div>
      </div>
      <style jsx>{`
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
            bottom: -7rem;
          }
        }
      `}</style>
    </section>
  );
};

export default HomeMainSection;
