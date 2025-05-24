import React, { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import HomeMobileLoanCarousel from "./HomeMobileLoanCarousel";
import LoanApplicationForm from "../ApplyNowForm";
import EligibilityCalculator from "../EligibilityCalculator";
import { Link } from 'react-router-dom';
const LoanBox = ({
  title,
  description,
  position,
  delay,
  isInView,
  onClick,
  isActive,
  isHighlighted,
  TIMG,
  COLOR,
  onApplyNow,
  onCheckEligibility,
}) => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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
      absolute bg-[#8B6B4E] text-white rounded-xl shadow-md 
      transition-all duration-300 transform opacity-0
      ${window.innerWidth > 1100 ? "w-[26vw]" : "w-[28vw]"} h-fit hidden md:block cursor-pointer manrope
    `;

    const scaleClasses = isHighlighted
      ? "scale-105 shadow-lg bg-[#725839] ring-4 ring-white ring-opacity-50"
      : "scale-95 hover:scale-105 hover:shadow-md hover:bg-[#725839]";

    // Fixed even spacing for all cards - exact percentages for consistent spacing
    const positions = {
      // Left side cards - evenly spaced
      leftTop: `${
        isAnimated ? "translate-x-[-15vw]" : "translate-x-0"
      } top-[10%] ${window.innerWidth > 1100 ? "left-[-15vw]" : "left-[-16.6vw]"}`,
      
      leftMiddle: `${
        isAnimated ? "translate-x-[-15vw]" : "translate-x-0"
      } top-[41%] ${
        window.innerWidth > 1100 ? "left-[-15vw]" : "left-[-16.6vw]"
      }`,
      
      leftBottom: `${
        isAnimated ? "translate-x-[-15vw]" : "translate-x-0"
      } top-[72%] ${
        window.innerWidth > 1100 ? "left-[-15vw]" : "left-[-16.7vw]"
      }`,
      
      // Right side cards - evenly spaced
      rightTop: `${
        isAnimated ? "translate-x-[15vw]" : "translate-x-0"
      } top-[10%] ${
        window.innerWidth > 1100 ? "right-[-15vw]" : "right-[-16.6vw]"
      }`,
      
      rightMiddle: `${
        isAnimated ? "translate-x-[15vw]" : "translate-x-0"
      } top-[41%] ${
        window.innerWidth > 1100 ? "right-[-15vw]" : "right-[-16.6vw]"
      }`,
      
      rightBottom: `${
        isAnimated ? "translate-x-[15vw]" : "translate-x-0"
      } top-[72%] ${
        window.innerWidth > 1100 ? "right-[-15vw]" : "right-[-16.6vw]"
      }`,
    };

    return `${baseClasses} ${positions[position]} ${
      isAnimated ? "opacity-100" : ""
    } ${scaleClasses}`;
  };

  return (
    <div
      className={getPositionClasses()}
      style={{
        transitionDelay: `${delay}ms`,
        transitionProperty: "all",
        transitionDuration: "300ms",
        transitionTimingFunction: "ease-in-out",
        background: "#EEEEEE",
        color: "#112A00",
        display: "flex",
        flexDirection: "column",
        gap: "6px",
        padding: "1rem",
        height: "auto",
        maxHeight: "31%", // Limit the height to ensure all cards fit
        boxShadow: isHighlighted ? "0 10px 25px rgba(0,0,0,0.15)" : "0 4px 12px rgba(0,0,0,0.08)",
        border: isHighlighted ? "1px solid rgba(24, 173, 165, 0.3)" : "1px solid transparent",
      }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex gap-2 items-center mb-1">
        <div className="bg-[#EEEEEE] p-1.5 rounded-full">
          <img src={TIMG} alt={title} className="w-7 h-7 object-contain" />
        </div>
        <h3
          className="text-base mb-0 coolvetica"
          style={{
            fontWeight: "750",
            color: COLOR ? "#09615D" : "#112A00",
          }}
        >
          {title}
        </h3>
      </div>
      <p
        className="text-xs leading-relaxed text-gray-600 mb-1.5"
        style={{ fontFamily: "Helvetica", fontWeight: "500" }}
      >
        {description}
      </p>

      {
        title?.trim() === "Free Credit Score"
        ? 
        (<div className="flex-col sm:flex-row mt-auto w-full">
          <Link to="/check-credit-score">
        <button 
          className="py-1.5 px-3 rounded-md text-white bg-[#18ADA5] w-full hover:bg-[#09615D] transition-colors duration-300 text-xs font-medium flex-1"
          style={{ 
            boxShadow: isHovered ? "0 4px 12px rgba(24, 173, 165, 0.3)" : "none",
            transform: isHovered ? "translateY(-2px)" : "none",
            transition: "all 0.3s ease"
          }}
        >
         Check Credit Score
        </button>
        </Link>
        </div>
        )
      :
      (<div className="flex flex-col w-full sm:flex-row gap-2 mt-auto">
        <button 
          className="py-1.5 px-3 w-[50%] rounded-md text-white bg-[#18ADA5] hover:bg-[#09615D] transition-colors duration-300 text-xs font-medium flex-1"
          style={{ 
            boxShadow: isHovered ? "0 4px 12px rgba(24, 173, 165, 0.3)" : "none",
            transform: isHovered ? "translateY(-2px)" : "none",
            transition: "all 0.3s ease"
          }}
          onClick={(e) => {
            e.stopPropagation();
            onApplyNow();
          }}
        >
          Apply Now
        </button>
        <Link to="/check-eligibility" className="w-[50%]">
        <button 
          className="py-1.5 px-3 w-full  rounded-md border border-[#18ADA5] text-[#18ADA5] hover:bg-[#ffffff] transition-colors duration-300 text-xs font-medium flex-1"
          style={{ 
            boxShadow: isHovered ? "0 4px 12px rgba(24, 173, 165, 0.15)" : "none",
            transform: isHovered ? "translateY(-2px)" : "none",
            transition: "all 0.3s ease"
          }}
          
        >
          Check Eligibility
        </button>
        </Link>
      </div>)
      }
      
    </div>
  );
};

const HomeLoanDisplay = ({ COLOR, loanImages }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [selectedLoan, setSelectedLoan] = useState(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [showEligibilityCalculator, setShowEligibilityCalculator] = useState(false);
  const [selectedLoanType, setSelectedLoanType] = useState("");
  
  // Updated images array with 6 items instead of 4
  const images = [
    "/Home Loan.svg", 
    "/LAP.svg", 
    "/EMI Loan.svg", 
    "/LAS.svg", 
    "/LAS.svg", 
    "/LAS.svg"
  ];
  
  const loans = [
    {
      title: "Housing Loans",
      description:
        "Turn your dream home into reality with flexible repayment options and minimal documentation.",
      position: "leftTop",
      delay: 200,
      image: images[0],
      TImg: `${loanImages ? loanImages.image1 : "/HL.png"}`,
    },
    {
      title: "Loan Against Property",
      description:
        "Unlock your property's potential with competitive rates and hassle-free application.",
      position: "leftMiddle",
      delay: 300,
      image: images[1],
      TImg: `${loanImages ? loanImages.image2 : "/LAP.png"}`,
    },
    {
      title: "Personal Loans",
      description:
        "Quick approvals with flexible EMI options and no collateral requirements.",
      position: "leftBottom",
      delay: 400,
      image: images[2],
      TImg: `${loanImages ? loanImages.image3 : "/EL.png"}`,
    },
    {
      title: "Loan Against Security",
      description:
        "Leverage investments without liquidating with competitive LTV ratios and favorable terms.",
      position: "rightTop",
      delay: 200,
      image: images[3],
      TImg: `${loanImages ? loanImages.image6 : "/LAS.png"}`,
    },
    {
      title: "Business Loan",
      description:
        "Fuel your business growth with customized financing solutions and quick disbursement.",
      position: "rightMiddle",
      delay: 300,
      image: images[4], // New image for Business Loan
      TImg: `${loanImages ? loanImages.image4 : "/BL.png"}`,
    },
    {
      title: "Free Credit Score",
      description:
        "Check your credit health instantly without affecting your score. Know where you stand.",
      position: "rightBottom",
      delay: 400,
      image: images[5], // New image for Free Credit Score
      TImg: `${loanImages ? loanImages.image5 : "/CS.png"}`,
    },
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
  
  const handleApplyNow = (title) => {
    setSelectedLoanType(title);
    setShowApplicationForm(true);
    setAutoPlay(false);
  };
  
  const handleCheckEligibility = (title) => {
    setSelectedLoanType(title);
    setShowEligibilityCalculator(true);
    setAutoPlay(false);
  };
  
  const handleCloseModal = () => {
    setShowApplicationForm(false);
    setShowEligibilityCalculator(false);
    setAutoPlay(true);
  };
  
  const BG = "/bg-loan.png";
  
  return (
    <>
      <section
        style={{ height: "fit-content" }}
        id="loan-section-home"
        className="mb-16 loan-section-home min-h-fit"
      >
        <div>
          <h1
            className="loan-headers-home mb-6"
            style={{
              textAlign: "center",
              fontSize: "60px",
              marginTop: "40px",
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              fontWeight: "700",
              color: `${COLOR ? "black" : "#163312"}`,
              fontFamily: "Helvetica",
            }}
          >
            FundsMama Loan Offers
          </h1>
        </div>
        <div className="relative min-h-fit flex flex-col items-center p-4 mobile">
          <div
            ref={ref}
            className="relative w-[100%] max-w-[29vw] images h-[650px] mx-auto ml-12 mr-12 loan-image-container"
            style={{
              background: `${
                COLOR
                  ? "linear-gradient( #18ADA5 0%, #18ADA5 20%, #fff 100%)"
                  : "rgb(178, 255, 142)"
              }`,
              objectFit: "contain",
              borderRadius: "50px",
            }}
          >
            <div
              className="absolute images w-full inset-0 z-10 overflow-hidden rounded-3xl"
              style={{
                backgroundImage: `url(${BG})`,
                backgroundSize: "cover",
                borderRadius: "50px",
              }}
            >
              <div
                className="transition-transform w-full duration-500 ease-in-out h-full"
                style={{
                  height: "600%",
                  transform: `translateY(-${currentImageIndex * (100 / 6)}%)`,
                }}
              >
                {loans.map((loan, index) => {
                  return (
                    <div
                      key={index}
                      className="w-full"
                      style={{
                        height: `${100 / 6}%`, // Each image takes 1/6 of the container
                      }}
                    >
                      <img
                        key={index}
                        src={loan.image}
                        className="relative -left-[5vw] top-[5%]"
                        alt={`${loan.title} interface`}
                        style={{
                          width: "40vw",
                          height: "90%",
                          maxWidth: "100vw",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {loans.map((loan, index) => (
              <LoanBox
                key={index}
                title={loan.title}
                description={loan.description}
                position={loan.position}
                TIMG={loan.TImg}
                delay={loan.delay}
                isInView={inView}
                onClick={() => handleBoxClick(index)}
                isActive={selectedLoan === index}
                isHighlighted={currentImageIndex === index}
                COLOR={COLOR}
                onApplyNow={() => handleApplyNow(loan.title)}
                onCheckEligibility={() => handleCheckEligibility(loan.title)}
              />
            ))}
          </div>

          <div className="loan-mobile">
            {COLOR ? (
              <HomeMobileLoanCarousel
                loans={loans}  // Pass all 6 loans including new ones
                images={images}  // Pass all 6 images including new ones
                COLOR="#"
                loanImage={loanImages}
                onApplyNow={handleApplyNow}
                onCheckEligibility={handleCheckEligibility}
              />
            ) : (
              <HomeMobileLoanCarousel
                loans={loans}  // Pass all 6 loans including new ones
                images={images}  // Pass all 6 images including new ones
                loanImage={loanImages}
                onApplyNow={handleApplyNow}
                onCheckEligibility={handleCheckEligibility}
              />
            )}
          </div>
        </div>
        
        {/* Modal for Loan Application */}
        {showApplicationForm && (
          <LoanApplicationForm loanType={selectedLoanType} onClose={handleCloseModal} />
        )}
        
        {/* Modal for Eligibility Calculator */}
        {showEligibilityCalculator && (
          <EligibilityCalculator loanType={selectedLoanType} onClose={handleCloseModal} />
        )}
        
        <style jsx>{`
          @media screen and (max-height: 425px) {
            .loan-section-home {
              margin-top: 100px !important;
            }
          }
          @media (min-width: 950px) {
            .loan-mobile {
              display: none !important;
            }
          }
          @media screen and (max-width: 912px), screen and (max-height: 425px) {
            .loan-section-home {
              height: fit-content !important;
            }
            .loan-mobile {
              display: block !important;
            }

            .loan-headers-home {
              font-size: 50px !important;
              font-weight: 700 !important;
            }
            .images {
              display: none !important;
            }
          }
          @media (max-height: 425px) and (max-width: 912px) {
            .loan-section-home {
              height: fit-content !important;
            }
          }
          @media (max-width: 350px) {
            .loan-headers-home {
              font-size: 1.5rem !important;
            }
          }
          @media (max-width: 512px) {
            .loan-section-home {
              height: fit-content !important;
            }
            .loan-headers-home {
              font-size: 1.8rem !important;
            }
            .images {
              display: none !important;
            }
          }

          @media (max-height: 425px) {
            .loan-section-home {
              height: fit-content !important;
            }
          }
          
          /* Fix for buttons on mobile */
          @media (max-width: 640px) {
            :global(.loan-mobile button) {
              width: 100% !important;
              margin-bottom: 8px !important;
            }
            
            :global(.loan-mobile .action-buttons) {
              display: flex !important;
              flex-direction: column !important;
              width: 100% !important;
              margin-top: 12px !important;
            }
          }
        `}</style>
      </section>
    </>
  );
};

export default HomeLoanDisplay;