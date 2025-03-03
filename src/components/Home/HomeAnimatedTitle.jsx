import React from "react";
import "../AnimatedTitle.component.css";

const HomeAnimatedTitle = ({ COLOR, DIVCOLOR }) => {
  return (
    <section id="mart-home" className="mart-home mt-20">
      <div
        style={{
          boxSizing: "border-box",
          filter: `drop-shadow(96px 96px 96px ${
            COLOR ? "#7b549cf2" : "rgb(178, 255, 142)"
          }`,
        }}
      >
        <div
          className="font-bold flex justify-center gap-2 main-title-home"
          style={{
            borderRadius: "50%",
            fontSize: "160px",
          }}
        >
          <div
            className="absolute w-[100vw]"
            style={{
              borderRadius: "50%",
              backgroundColor: `${DIVCOLOR ? "#7b549cf2" : "rgb(178, 255, 142)"}`,
              filter: `${COLOR ? "blur(200px)" : "blur(50px)"}`,
              zIndex: "-100000",
              top: "50px",
              height:"10vh"
            }}
          ></div>
          <span
            className={`coolvetica ${COLOR ? "text-gradient" : ""}`}
            style={{
              color: `${DIVCOLOR ? "#7B549CF2" : "#163312"}`,
              backgroundSize: "200% 100%",
              animation: `${
                DIVCOLOR ? "text-gradient-flow 5s linear infinite" : ""
              }`,
            }}
          >
            Mama Mart
          </span>
        </div>
      </div>
      <style jsx>{`
        .text-gradient {
          background: linear-gradient(
            to right,
#7b549cf2 0%,
            rgba(205, 156, 245, 0.95) 25%,

            #7b549cf2 50%,
            rgba(205, 156, 245, 0.95) 75%,

            #7b549cf2 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent !important;
        }

        @keyframes text-gradient-flow {
          0% {
            background-position: 200% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @media (max-height: 512px) {
          .main-title-home {
            font-size: 200px;
          }
        }
        @media (max-width: 912px) {
          .mart-home {
            margin-top: 0px !important;
          }
          .main-title-home {
            font-size: 120px !important;
          }
        }
        @media (max-width: 512px) {
          .mart-home {
            margin-top: 0px !important;
          }
          .main-title-home {
            font-size: 60px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HomeAnimatedTitle;
