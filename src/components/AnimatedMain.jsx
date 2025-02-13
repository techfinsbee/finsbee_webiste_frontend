import React, { useState, useEffect } from 'react';

const AnimatedMain = ({benefits, Color}) => {
  

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % benefits.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-2xl px-1 mt-5" >
      <div className="flex  sm:text-left gap-2 sm:gap-0">
        
        <div className="relative h-10  ">
          <div className="relative overflow-hidden animated-text inline-block w-[300px] sm:w-[300px] lg:w-[300px]" style={{height:"50px"}}>
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="absolute inset-0 w-full transition-all duration-500 ease-in-out lg:text-5xl"
                style={{
                  transform: `translateY(${index === currentIndex ? '0%' : '100%'})`,
                  opacity: index === currentIndex ? 1 : 0,
                  willChange: 'transform',
                  
                }}
              >
                <span className="block h-[400px]" style={{color:`${Color?'#163312':'#CD855F'}`, fontFamily:`${Color?'coolvetica':'roboto-slab'}`}}>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
      @media (max-width: 728px){
        .text-base{
          font-size: 5rem !important;
        }
      }

      @media (max-width: 512px){
      .animated-text{
        font-size: 3rem !important;
      }
      }

      `}</style>
    </div>
  );
};

export default AnimatedMain;