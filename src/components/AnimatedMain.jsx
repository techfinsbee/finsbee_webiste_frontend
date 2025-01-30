import React, { useState, useEffect } from 'react';

const AnimatedMain = () => {
  const benefits = [
    "Loans",
    "Shopping",
    "Rewards",
    "More"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % benefits.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto px-1 mt-5" >
      <div className="flex  sm:text-left gap-2 sm:gap-0">
        
        <div className="relative h-10  ">
          <div className="relative h-full overflow-hidden inline-block w-[200px] sm:w-[250px] lg:w-[300px]">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="absolute inset-0 w-full transition-all duration-500 ease-in-out lg:text-4xl roboto-slab"
                style={{
                  transform: `translateY(${index === currentIndex ? '0%' : '100%'})`,
                  opacity: index === currentIndex ? 1 : 0,
                  willChange: 'transform',
                  
                }}
              >
                <span className="text-[#CD855F] block h-[300px]">{benefit}</span>
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
      `}</style>
    </div>
  );
};

export default AnimatedMain;