import React from "react";
import BrandSlider from "./BrandSlider";
import "./FeaturedBrands.component.css";
const FeaturedBrands = ({ allLogos, Color }) => {
  return (
    <div
      className={`rounded-xl ${Color ? "mt-24 mb-0" : "p-0"}`}
      style={{ overflowX: "hidden" }}
    >
      <h2
        className=" text-6xl brand-text font-bold mb-6 center"
        style={{ textAlign: "center", color: `${Color ? "#006d5b" : "black"}` }}
      >
        {allLogos.title}
      </h2>
      <div
        className="max-w-[90vw] feature-brand"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "40px",
        }}
      >
        <div className="flex flex-wrap">
          <BrandSlider allLogos={allLogos.logos}></BrandSlider>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 512px) {
          .brand-text {
            font-size: 30px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default FeaturedBrands;
