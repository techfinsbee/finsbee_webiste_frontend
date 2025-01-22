import React, { useState, useEffect } from 'react';

const AnimatedBenefits = () => {
  const benefits = [
    "Loans at lowest Interest",
    "Seamless shopping",
    "Hassle-free digital application",
    "Maximum Rewards"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % benefits.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto p-2 sm:p-4" style={{display:"flex", justifyContent:"center",alignItems:"center", flexDirection:"column"}}>
      <span className="text-base sm:text-xl lg:text-2xl font-medium roboto-slab" style={{textAlign:"center"}}>
          With FundsMama, you unlock
        </span>
      <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-0">
        
        <br />
        <div className="relative h-6 sm:h-8 sm:ml-2">
          <div className="relative h-full overflow-hidden inline-block w-[200px] sm:w-[250px] lg:w-[300px]">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="absolute inset-0 w-full transition-all duration-500 ease-in-out text-base sm:text-xl lg:text-2xl roboto-slab"
                style={{
                  transform: `translateY(${index === currentIndex ? '0%' : '100%'})`,
                  opacity: index === currentIndex ? 1 : 0,
                  willChange: 'transform',
                  textAlign:"center"
                }}
              >
                <span className="text-green-500 block">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
      @media (max-width: 728px){
        .text-base{
          font-size: 1.5rem !important;
        }
      }
      `}</style>
    </div>
  );
};

export default AnimatedBenefits;