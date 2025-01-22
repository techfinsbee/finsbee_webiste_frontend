import React from 'react';
import Slider from 'react-infinite-logo-slider';
import './BrandSlider.component.css'
const BrandSlider = ({ allLogos }) => {
  return (
    <div className="brand-slider mx-auto overflow-hidden">
      <Slider
        width="300px"
        duration={60}
        pauseOnHover={true}
        blurBorders={false}
        blurBorderColor={'#fff'}
      >
        {allLogos.map((logo, index) => (
          <div key={index} className="flex justify-center items-center mr-10">
            <Slider.Slide>
              <div className="w-36 h-36 flex items-center justify-center">
                <img
                  src={logo.image}
                  alt={`brand-${index}`}
                  className="w-full h-full object-contain"
                />
              </div>
            </Slider.Slide>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BrandSlider;
