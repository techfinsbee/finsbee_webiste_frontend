import React, { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import HomeMobileLoanCarousel from "./HomeMobileLoanCarousel";
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
}) => {
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
      absolute bg-[#8B6B4E] text-white rounded-xl shadow-lg 
      transition-all duration-300 transform opacity-0
      w-[30vw] h-[130px] hidden md:block cursor-pointer manrope
    `;

    // Separate scaling classes for automatic and hover effect
    const scaleClasses = isHighlighted
      ? "scale-105 shadow-2xl bg-[#725839] ring-4 ring-white ring-opacity-50"
      : "scale-95 hover:scale-105 hover:shadow-xl hover:bg-[#725839]";

    const positions = {
      leftTop: `${
        isAnimated ? "-translate-x-64" : "translate-x-0"
      } top-0 -left-44`,
      leftMiddle: `${
        isAnimated ? "-translate-x-64" : "translate-x-0"
      } top-1/2 -translate-y-1/2 -left-44`,
      leftBottom: `${
        isAnimated ? "-translate-x-64" : "translate-x-0"
      } bottom-0 -left-44`,
      rightTop: `${
        isAnimated ? "translate-x-64" : "translate-x-0"
      } top-0 -right-44`,
      rightMiddle: `${
        isAnimated ? "translate-x-64" : "translate-x-0"
      } top-1/2 -translate-y-1/2 -right-44`,
      rightBottom: `${
        isAnimated ? "translate-x-64" : "translate-x-0"
      } bottom-0 -right-44`,
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
        background: "#F8F9FA",
        color: "#112A00",
        width: "30vw",
        height: "fit-content",
        display: "flex",
        flexDirection: "column",
        gap:'10px',
        padding:"1.5rem"
      }}
      onClick={onClick}
    >
      <div className="flex gap-2 items-center mb-2 ">
        <img src={TIMG} alt="" className="w-12" />
        <h3 className="text-xl mb-2 coolvetica" style={{fontWeight:"900"}}>{title}</h3>
      </div>
      <p className="text-md leading-tight manrope">{description}</p>
    </div>
  );
};

const HomeLoanDisplay = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [selectedLoan, setSelectedLoan] = useState(null);
  const images = [
    "/instant_loan.svg",
    "/emi_loan.png",
    "/solar.svg",
    "/loan_against_property.png",
    "/home_loan.svg",
    "/loan_against_security.png",
  ];
  const loans = [
    {
      title: "Instant Loan",
      description:
        "Quick Cash When You Need It Most. Get instant loans upto xxx in minutes.,",
      position: "leftTop",
      delay: 0,
      image: images[0],
      TImg: "/PL.png",
    },
    {
      title: "Personal EMI-Based Loan",
      description: "Financial Freedom in Easy Instalments. Get loans upto xx at rr%",
      position: "leftMiddle",
      delay: 200,
      image: images[1],
      TImg: "/EL.png",
    },
    {
      title: "Credit Cards",
      description:
        "oEmpower Your Credit Journey with Your FD. Leverage your fixed deposit to secure loans upto xx at bjb%.",
      position: "leftBottom",
      delay: 200,
      image: images[2],
      TImg: "/CC.png",
    },
    {
      title: "Loan Against Property",
      description:
        "Leverage Your Property for a Better Tomorrow. Loans upto xxx, starting at cxx%",
      position: "rightTop",
      delay: 200,
      image: images[3],
      TImg: "/LAP.png",
    },
    {
      title: "Home Loan",
      description:
        "Lay the foundation of your home with loans upto 3cr. starting at 12 %p.a",
      position: "rightMiddle",
      delay: 200,
      image: images[4],
      TImg: "/HL.png",
    },
    {
      title: "Loan Against Security",
      description:
        "Smart Loans Backed by Smart Investments. Unlock the valur of your portfolio to avail loans upto tt% at best LTVs",
      position: "rightBottom",
      delay: 200,
      image: images[5],
      TImg: "/LAS.png",
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
  const BG = "/bg-loan.png";
  return (
    <>
      <section
        style={{ height: "fit-content" }}
        id="loan-section-home"
        className="mb-16 loan-section min-h-screen"
      >
        <div>
          <h1
            className="loan-headers"
            style={{
              textAlign: "center",
              fontSize: "70px",
              marginTop: "50px",
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              fontWeight: "700",
              color: "#163312",
              fontFamily: 'Coolvetica',
            }}
          >
            Funds Mama Loan Offers
          </h1>
        </div>
        <div className="relative min-h-screen flex flex-col items-center p-4 mobile">
          <div
            ref={ref}
            className="relative w-[450px] images h-[600px] ml-12 mr-12 loan-image-container"
            style={{
              backgroundColor: "rgb(178, 255, 142)",
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
                        className="relative -top-12"
                        alt={`${loan.title} interface`}
                        style={{
                          width: "100%",
                          height:"100%",
                          objectFit: "cover",
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
              />
            ))}
          </div>

          <div className="loan-mobile">
            <HomeMobileLoanCarousel loans={loans} images={images} />
          </div>
        </div>
        <style jsx>{`
          @media screen and (max-width: 1000px) {
            .loan-image-container {
              width: 300px !important;
            }
          }
          @media screen and (max-height: 780px) {
            .loan-section {
              margin-top: 100px !important;
            }
          }
          @media (min-width: 950px) {
            .loan-mobile {
              display: none !important;
            }
          }
          @media (max-width: 912px), screen and (max-height: 512px) {
            .loan-section {
              height: fit-content !important;
            }
            .loan-mobile {
              display: block !important;
            }
            ,
            .loan-headers {
              font-size: 25px !important;
              font-weight: 700 !important;
            }
            .images {
              display: none !important;
            }
          }
          @media (max-height: 692px) and (max-width: 912px) {
            .loan-section {
              height: fit-content !important;
            }
          }
          @media (max-width: 350px) {
            .loan-headers {
              font-size: 1.5rem !important;
            }
          }
          @media (max-width: 512px) {
            .loan-section {
              height: 80vh !important;
            }
            .loan-headers{
              font-size: 1.8rem !important;
            }
            .images {
              display: none !important;
            }
          }

          @media (max-height: 600px) {
            .loan-section {
              height: fit-content !important;
            }
          }
        `}</style>
      </section>
    </>
  );
};

export default HomeLoanDisplay;
