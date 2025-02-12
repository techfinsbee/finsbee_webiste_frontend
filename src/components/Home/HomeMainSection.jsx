import React from "react";
import { useInView } from "react-intersection-observer";
import AnimatedMain from "../AnimatedMain";
const HomeMainSection = () => {
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
          background: "linear-gradient(180deg, #fff 0%,#fff 50%, #b2ff8e 100%)",
          borderBottomLeftRadius: "120px",
          borderBottomRightRadius: "120px",
          height: "90vh",
        }}
      >
        {/* Left content */}
        <div className="flex flex-col ml-12 gap-8 lg:gap-12 w-full lg:w-1/2 pt-8 lg:pt-0 home-left">
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 leading-tight">
            Jab Zaroorat Ho Loan Ki,
            <br />
            Aur Shauk Ho Shopping Ka!
            <br />
            <AnimatedMain benefits={benefits}></AnimatedMain>
          </h1>

          {/* Download button */}
          <div className="flex items-center gap-4">
            <button className="py-3 rounded-full font-semibold flex items-center gap-2">
              <img src="/download.png" alt="" />
            </button>
          </div>
        </div>

        {/* Right content - Phone mockup */}
        <div className="lg:block w-1/2 relative HomeImage">
          <div className="relative top-32 h-full left-20 w-96 mx-auto">
            <img src="/image1.png" className="w-full h-full" alt="" />
          </div>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 680px) {
        .home-left{
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
            .HomeImage div{
              left: 0 !important;
              top: 5% !important;
            }
        }
      `}</style>
    </section>
  );
};

export default HomeMainSection;
