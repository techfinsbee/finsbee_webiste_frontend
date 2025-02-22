import React from "react";
import "../AnimatedTitle.component.css";
const HomeAnimatedTitle = ({ COLOR, DIVCOLOR }) => {
  return (
    <section id="mart-home" className="mart-home mt-20">
      <div
        style={{
          boxSizing: "border-box",
          filter: `drop-shadow(96px 96px 96px ${
            COLOR ? COLOR : "rgb(178, 255, 142)"
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
            className="absolute h-52 w-[90vw]"
            style={{
              borderRadius: "50%",
              backgroundColor: `${DIVCOLOR ? DIVCOLOR : "rgb(178, 255, 142)"}`,
              filter: `${COLOR ? "blur(150px)" : "blur(50px)"}`,
              zIndex: "-100000",
              top: "-30px",
            }}
          ></div>
          <span
            className={`coolvetica`}
            style={{
              color: `${COLOR ? "#09615D" : "#163312"}`,
            }}
          >
            Mama Mart
          </span>
        </div>
      </div>
      <style jsx>{`
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
