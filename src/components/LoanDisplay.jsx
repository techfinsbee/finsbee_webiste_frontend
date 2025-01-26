import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import AnimatedBenefits from './AnimatedBenefits';
import './LoanDisplay.component.css'
import MobileLoanCarousel from './MobileLoanCarousel';
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
      transition-all duration-300 transform opacity-0
      w-[300px] h-[130px] hidden md:block cursor-pointer
    `;

    // Separate scaling classes for automatic and hover effects
    const scaleClasses = isHighlighted 
      ? 'scale-105 shadow-2xl bg-[#725839] ring-4 ring-white ring-opacity-50' 
      : 'scale-95 hover:scale-105 hover:shadow-xl hover:bg-[#725839]';

    const positions = {
      leftTop: `${isAnimated ? '-translate-x-64' : 'translate-x-0'} top-32 -left-0`,
      leftMiddle: `${isAnimated ? '-translate-x-64' : 'translate-x-0'} top-1/2 -translate-y-1/2 -left-0`,
      leftBottom: `${isAnimated ? '-translate-x-64' : 'translate-x-0'} bottom-32 -left-0`,
      rightTop: `${isAnimated ? 'translate-x-64' : 'translate-x-0'} top-32 -right-0`,
      rightMiddle: `${isAnimated ? 'translate-x-64' : 'translate-x-0'} top-1/2 -translate-y-1/2 -right-0`,
      rightBottom: `${isAnimated ? 'translate-x-64' : 'translate-x-0'} bottom-32 -right-0`,
    };

    return `${baseClasses} ${positions[position]} ${isAnimated ? 'opacity-100' : ''} ${scaleClasses}`;
  };

  return (
    <div 
      className={getPositionClasses()} 
      style={{ 
        transitionDelay: `${delay}ms`,
        transitionProperty: 'all',
        transitionDuration: '300ms',
        transitionTimingFunction: 'ease-in-out',
        background: "linear-gradient(145deg,rgb(238, 192, 128), #E8D5C0)",
        color: "black"
      }}
      onClick={onClick}
    >
      <h3 className="text-xl font-bold mb-2 roboto-serif">{title}</h3>
      <p className="text-md leading-tight roboto-light">{description}</p>
    </div>
  );
};

const LoanDisplay = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [selectedLoan, setSelectedLoan] = useState(null);
  const images = ['/instant_loan.png', '/emi_loan.png', '/loan_against_property.png', '/home_loan.png','/loan_against_security.png', '/solar.png'];
  const loans = [
    { 
      title: "Instant Loan", 
      description: "Quick disbursal, no-collateral loans for urgent financial needs.", 
      position: "leftTop", 
      delay: 0,
      image: images[0],
    },
    { 
      title: "EMI Loan", 
      description: "Flexible loans, no collateral, repay in easy installments.", 
      position: "leftMiddle", 
      delay: 200,
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
      delay: 200,
      image: images[2]
    },
    { 
      title: "Home Loan", 
      description: "Affordable loans to turn your homeownership dreams into reality.", 
      position: "rightMiddle", 
      delay: 200,
      image: images[3]
    },
    { 
      title: "Loan Against Security", 
      description: "Access funds by pledging shares, mutual funds, or other securities.", 
      position: "rightBottom", 
      delay: 200,
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
      }, 2000);
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
    <div className="flex flex-col gap-4 md:hidden p-2">
      {loans.map((loan, index) => (
        <div 
          key={index}
          className={`
            bg-[#8B6B4E] text-white p-4 rounded-xl shadow-lg w-250 cursor-pointer
            transition-all duration-500 ease-in-out
            ${currentImageIndex === index ? 'scale-[1.02] shadow-xl bg-[#725839] ring-2 ring-white ring-opacity-50' : 'scale-100 hover:scale-[1.02] hover:shadow-lg hover:bg-[#725839]'}
          `}
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
    <section style={{height:"100vh", marginTop:"250px"}} id="loan-section" className='mb-16 loan-section'>
      <div>
        <h1 className="loan-headers roboto-serif" style={{
          textAlign: "center",
          fontSize: "50px",
          marginTop: "50px",
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          fontWeight:"700"
        }}>
          Check Out the<h1 style={{color:"#8B6B4E"}}>FundsMama</h1> Loan
        </h1>
      </div>
      <AnimatedBenefits></AnimatedBenefits>
      <div className="relative min-h-screen flex flex-col items-center p-4 mobile">
        <div 
          ref={ref} 
          className="relative w-[700px] images h-[700px] ml-12 mr-12"
        >
          <div className="absolute images w-full inset-0 z-10 overflow-hidden rounded-3xl">
            <div 
              className="transition-transform w-full duration-500 ease-in-out h-full"
              style={{ transform: `translateY(-${currentImageIndex * 100}%)` }}
            >
              {loans.map((loan, index) => (
                <img 
                  key={index}
                  src={loan.image}
                  alt={`${loan.title} interface`} 
                  className="w-full h-full"
                  style={{width: "700px", height: "700px"}}
                />
              ))}
            </div>
          </div>
          
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

        <div className="md:hidden">
          <MobileLoanCarousel loans={loans} images={images} />
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 728px) {
        .loan-section{
          height: 200vh !important;
          margin-top: 450px !important;
        }
          .loan-headers {
            font-size: 25px !important;
            font-weight: 700 !important;
            margin-top: 50px !important;
          }
          .mobile {
            padding: 0px !important;
            margin-top: 0px !important;
          }
        }

        @media (max-width: 512px) {
          .loan-section{
          height: 80vh !important;
          margin-bottom: 0px !important;
        }

        .images{
          display: none !important;
        }
        }
      `}</style>
      </section>
    </>
  );
};

export default LoanDisplay;