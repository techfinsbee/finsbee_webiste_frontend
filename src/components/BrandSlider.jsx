import React from 'react';
import Slider from 'react-infinite-logo-slider';
import './BrandSlider.component.css'
const BrandSlider = ({ allLogos }) => {
  return (
    <div className="brand-slider overflow-hidden">
      <Slider
        width="100px"
        duration={30}
        pauseOnHover={true}
        blurBorders={false}
        blurBorderColor={'#fff'}
      >
        {allLogos.map((logo, index) => (
          <div key={index} className="flex justify-center items-center mr-10">
            <Slider.Slide width={`${window.innerWidth < 512?'100px':'300px'}`}>
              <div className="w-28 h-28 lg:w-36 lg:h-36 flex items-center justify-center">
                <img
                  src={logo.image}
                  alt={`brand-${index}`}
                  className="w-fit h-fit object-cover"
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
