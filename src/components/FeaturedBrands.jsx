import React from 'react';
import BrandSlider from './BrandSlider';
import './FeaturedBrands.component.css'
const FeaturedBrands = ({allLogos}) => {

  return (
    <div className=" rounded-xl mt-8 pb-6" style={{ overflowX: "hidden" }}>
      <h2 className="text-[#006d5b] text-6xl font-bold mb-6 center" style={{textAlign:"center"}}>
          {allLogos.title}
        </h2>
      <div className="max-[90vw] feature-brand" style={{display:"flex", flexDirection:"row", alignItems:"center", gap:"40px"}}>
        <div className="flex flex-wrap gap-4">
          <BrandSlider allLogos={allLogos.logos}></BrandSlider>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBrands;