import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const LoanBox = ({ title, description, position, delay, isInView, onClick, isActive, isHighlighted }) => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setIsAnimated(true), delay);
      return () => clearTimeout(timer);
    } else {
      setIsAnimated(false);
    }
  }, [isInView, delay]);

  const getPositionClasses = () => {
    const baseClasses = `
      absolute bg-[#8B6B4E] text-white p-6 rounded-xl shadow-lg 
      transition-all duration-500 transform opacity-0 scale-95
      w-100 hidden md:block cursor-pointer
      hover:scale-105 hover:shadow-xl
    `;

    const activeClass = isActive ? 'ring-4 ring-white ring-opacity-50' : '';
    const highlightedClass = isHighlighted ? 'scale-105 shadow-2xl' : '';

    const positions = {
      leftTop: `${isAnimated ? '-translate-x-96' : 'translate-x-0'} top-20 -left-20`,
      leftMiddle: `${isAnimated ? '-translate-x-96' : 'translate-x-0'} top-1/2 -translate-y-1/2 -left-20`,
      leftBottom: `${isAnimated ? '-translate-x-96' : 'translate-x-0'} bottom-20 -left-20`,
      rightTop: `${isAnimated ? 'translate-x-96' : 'translate-x-0'} top-20 -right-20`,
      rightMiddle: `${isAnimated ? 'translate-x-96' : 'translate-x-0'} top-1/2 -translate-y-1/2 -right-20`,
      rightBottom: `${isAnimated ? 'translate-x-96' : 'translate-x-0'} bottom-20 -right-20`,
    };

    return `${baseClasses} ${positions[position]} ${isAnimated ? 'opacity-100 scale-100' : ''} ${activeClass} ${highlightedClass}`;
  };

  return (
    <div 
      className={getPositionClasses()} 
      style={{ transitionDelay: `${delay}ms` }}
      onClick={onClick}
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm leading-tight">{description}</p>
    </div>
  );
};

const LoanDisplay = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [selectedLoan, setSelectedLoan] = useState(null);
  const images = ['/solar.png', '/emi_loan.png', '/loan_against_property.png', '/home_loan.png','/loan_against_security.png', '/emi_loan.png'];
  const loans = [
    { 
      title: "Instant Loan", 
      description: "Quick disbursal, no-collateral loans for urgent financial needs.", 
      position: "leftTop", 
      delay: 0,
      image: images[0]
    },
    { 
      title: "EMI Loan", 
      description: "Flexible loans, no collateral, repay in easy installments.", 
      position: "leftMiddle", 
      delay: 100,
      image: images[1]
    },
    { 
      title: "Credit Cards", 
      description: "Flexible, rewarding credit cards for seamless spending and exclusive perks.", 
      position: "leftBottom", 
      delay: 200,
      image: images[5]
    },
    { 
      title: "Loan Against Property", 
      description: "Unlock high-value loans with flexible tenures by leveraging your property assets.", 
      position: "rightTop", 
      delay: 300,
      image: images[2]
    },
    { 
      title: "Home Loan", 
      description: "Affordable loans to turn your homeownership dreams into reality.", 
      position: "rightMiddle", 
      delay: 400,
      image: images[3]
    },
    { 
      title: "Loan Against Security", 
      description: "Access funds by pledging shares, mutual funds, or other securities.", 
      position: "rightBottom", 
      delay: 500,
      image: images[4]
    }
  ];

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  useEffect(() => {
    let interval;
    if (autoPlay) {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % loans.length);
        setSelectedLoan(null);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [autoPlay, loans.length]);

  const handleBoxClick = (index) => {
    setAutoPlay(false);
    setCurrentImageIndex(index);
    setSelectedLoan(index);
    
    // Resume autoplay after 5 seconds of inactivity
    setTimeout(() => {
      setAutoPlay(true);
      setSelectedLoan(null);
    }, 5000);
  };

  // Mobile view component
  const MobileBoxes = () => (
    <div className="flex flex-col gap-4 md:hidden p-2 mt-8">
      {loans.map((loan, index) => (
        <div 
          key={index}
          className={`bg-[#8B6B4E] text-white p-4 rounded-xl shadow-lg w-250 cursor-pointer
            ${selectedLoan === index ? 'ring-4 ring-white ring-opacity-50' : ''}`}
          onClick={() => handleBoxClick(index)}
        >
          <h3 className="text-lg font-bold mb-1">{loan.title}</h3>
          <p className="text-sm leading-tight">{loan.description}</p>
        </div>
      ))}
    </div>
  );

  return (
    <>
    <div>
      <h1 className="loan-header" style={
        {textAlign:"center", fontSize:"50px", marginTop:"50px", display:"flex", justifyContent:"center",gap:"10px"}}>Check Out the<h1 style={{color:"#8B6B4E"}}>FundsMama</h1> Loan</h1>
    </div>
    <div className="relative min-h-screen flex flex-col items-center justify-center p-4 md: pl-32 pr-32 mobile" style={{ marginTop: '50px' }}>
      <div 
        ref={ref} 
        className="relative w-[300px] h-[600px] mx-auto"
      >
        {/* Phone mockup with image carousel */}
        <div className="absolute inset-0 z-10 overflow-hidden rounded-3xl">
          <div 
            className="transition-transform duration-500 ease-in-out h-full"
            style={{ transform: `translateY(-${currentImageIndex * 100}%)` }}
          >
            {loans.map((loan, index) => (
              <img 
                key={index}
                src={loan.image}
                alt={`${loan.title} interface`} 
                className="w-full h-full object-contain"
              />
            ))}
          </div>
        </div>
        
        {/* Loan boxes */}
        {loans.map((loan, index) => (
          <LoanBox 
            key={index}
            title={loan.title}
            description={loan.description}
            position={loan.position}
            delay={loan.delay}
            isInView={inView}
            onClick={() => handleBoxClick(index)}
            isActive={selectedLoan === index}
            isHighlighted={currentImageIndex === index}
          />
        ))}
      </div>

      {/* Mobile view */}
      <MobileBoxes />
    </div>
    <style jsx>{`
    @media (max-width: 428px) {
      .loan-header {
        font-size: 25px !important;
        font-weight: 700 !important;
        margin-top: 50px !important;
      }
      .mobile{
        padding: 0px !important;
        margin-top:50px !important;
      }
    }
    `
      }</style>
    </>
  );
};

export default LoanDisplay;