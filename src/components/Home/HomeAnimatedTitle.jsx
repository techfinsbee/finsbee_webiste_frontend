import React from "react";
import "../AnimatedTitle.component.css";
import { filter } from "framer-motion/client";
const HomeAnimatedTitle = () => {
  return (
    <section id="mart-home" className="mart-home mt-20">
      <div style={{ boxSizing: "border-box", filter: "drop-shadow(96px 96px 96px rgb(178, 255, 142)" }}>
        <div
          className="font-bold flex justify-center gap-2 main-title"
          style={{
            borderRadius: "50%",
            fontSize:"160px"
          }}
        >
          <div className="absolute h-52 w-[90vw]" style={{borderRadius:"50%",backgroundColor:"rgb(178, 255, 142)",filter:"blur(50px)", zIndex:"-100000", top:"-30px"}}></div>
          <span className="text-[#163312] coolvetica">Mama Mart</span>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 728px){
          .mart-home{
            margin-top: 0px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HomeAnimatedTitle;
