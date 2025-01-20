import React from 'react';
import BrandSlider from './BrandSlider';
import './FeaturedBrands.component.css'
const FeaturedBrands = ({allLogos}) => {

  return (
    <div className=" rounded-xl pb-6 mb-20" >
      <div className="max-w-8xl ml-32 mr-32 feature-brand" style={{display:"flex", flexDirection:"row", alignItems:"center", gap:"40px"}}>
        <h2 className="text-[#006d5b] text-4xl font-bold mb-6 center">
          {allLogos.title.t1}
          <br />
          {allLogos.title.t2}
        </h2>
        
        <div className="flex flex-wrap gap-4">
          <BrandSlider allLogos={allLogos.logos}></BrandSlider>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBrands;