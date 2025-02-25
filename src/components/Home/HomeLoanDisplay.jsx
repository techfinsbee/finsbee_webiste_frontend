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
  COLOR,
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
      absolute bg-[#8B6B4E] text-white rounded-xl shadow-md 
      transition-all duration-300 transform opacity-0
  ${
    window.innerWidth > 1100 ? "w-[29vw]" : "w-[30vw]"
  } h-fit hidden md:block cursor-pointer manrope
    `;

    const scaleClasses = isHighlighted
      ? "scale-105 shadow-lg bg-[#725839] ring-4 ring-white ring-opacity-50"
      : "scale-95 hover:scale-105 hover:shadow-md hover:bg-[#725839]";

    // Define responsive positioning using CSS calculations
    const positions = {
      leftTop: `${
        isAnimated ? "translate-x-[-15vw]" : "translate-x-0"
      } top-0 ${
        window.innerWidth > 1100 ? "left-[-15vw]" : "left-[-16.6vw]"
      }`,
      leftMiddle: `${
        isAnimated ? "translate-x-[-15vw]" : "translate-x-0"
      } top-1/2 -translate-y-1/2 ${
        window.innerWidth > 1100 ? "left-[-15vw]" : "left-[-16.6vw]"
      }`,
      leftBottom: `${
        isAnimated ? "translate-x-[-15vw]" : "translate-x-0"
      } bottom-0 ${
        window.innerWidth > 1100 ? "left-[-15vw]" : "left-[-16.7vw]"
      }`,
      rightTop: `${isAnimated ? "translate-x-[15vw]" : "translate-x-0"} top-0 ${
        window.innerWidth > 1100 ? "right-[-15vw]" : "right-[-16.6vw]"
      }`,
      rightMiddle: `${
        isAnimated ? "translate-x-[15vw]" : "translate-x-0"
      } top-1/2 -translate-y-1/2 ${
        window.innerWidth > 1100 ? "right-[-15vw]" : "right-[-16.6vw]"
      }`,
      rightBottom: `${
        isAnimated ? "translate-x-[15vw]" : "translate-x-0"
      } bottom-0 ${
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
        background: "#F8F9FA",
        color: "#112A00",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding: "1.5rem",
      }}
      onClick={onClick}
    >
      <div className="flex gap-2 items-center mb-2">
        <img src={TIMG} alt="" className="w-12" />
        <h3
          className="text-xl mb-2 coolvetica"
          style={{
            fontWeight: "750",
            color: `${COLOR ? "#112A00" : "#112A00"}`,
          }}
        >
          {title}
        </h3>
      </div>
      <p
        className="text-md leading-tight text-gray-500"
        style={{ fontFamily: "Helvetica", fontWeight: "500" }}
      >
        {description}
      </p>
    </div>
  );
};

const HomeLoanDisplay = ({ COLOR, loanImages }) => {
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
      title: "Home Loan",
      description:
        "Lay the foundation of your home with loans upto INR 3 Cr with minimal documentation and digital process.",
      position: "leftTop",
      delay: 200,
      image: images[4],
      TImg: `${loanImages ? loanImages.image1 : "/HL.png"}`,
    },
    {
      title: "Loan Against Property",
      description:
        "Leverage Your Property for a Better Tomorrow.Secure loans upto INR 25 Lakhs",
      position: "leftMiddle",
      delay: 200,
      image: images[3],
      TImg: `${loanImages ? loanImages.image2 : "/LAP.png"}`,
    },
    {
      title: "Personal EMI-Based Loan",
      description:
        "Financial Freedom in Easy Instalments. Get loans upto INR 5 Lakhs with flexible EMIs.",
      position: "leftBottom",
      delay: 200,
      image: images[1],
      TImg: `${loanImages ? loanImages.image3 : "/EL.png"}`,
    },
    {
      title: "Credit Cards",
      description:
        "Empower Your Credit Journey with Your FD. Leverage your fixed deposit to secure loans upto INR 5Cr.",
      position: "rightTop",
      delay: 200,
      image: images[2],
      TImg: `${loanImages ? loanImages.image4 : "/CC.png"}`,
    },
    {
      title: "Instant Loan",
      description:
        "Quick Cash When You Need It Most. Get instant loans upto INR 2 Lakhs in minutes.",
      position: "rightMiddle",
      delay: 200,
      image: images[0],
      TImg: `${loanImages ? loanImages.image5 : "/PL.png"}`,
    },

    {
      title: "Loan Against Security",
      description:
        "Smart Loans Backed by Smart Investments. Unlock the value of your portfolio to avail loans upto INR 60 Cr at best LTVs",
      position: "rightBottom",
      delay: 200,
      image: images[5],
      TImg: `${loanImages ? loanImages.image6 : "/LAS.png"}`,
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
        className="mb-16 loan-section-home min-h-fit"
      >
        <div>
          <h1
            className="loan-headers-home mb-8"
            style={{
              textAlign: "center",
              fontSize: "70px",
              marginTop: "50px",
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              fontWeight: "700",
              color: `${COLOR ? "#163312" : "#163312"}`,
              fontFamily: "Helvetica",
            }}
          >
            FundsMama Loan Offers
          </h1>
        </div>
        <div className="relative min-h-fit flex flex-col items-center p-4 mobile">
          <div
            ref={ref}
            className="relative w-[100%] max-w-[29vw] images h-[600px] mx-auto ml-12 mr-12 loan-image-container"
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
                        className="relative -left-[10vw]"
                        alt={`${loan.title} interface`}
                        style={{
                          width: "50vw",
                          height: "100%",
                          maxWidth: "100vw",
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
                COLOR={COLOR}
              />
            ))}
          </div>

          <div className="loan-mobile">
            {COLOR ? (
              <HomeMobileLoanCarousel
                loans={loans}
                images={images}
                COLOR="#"
                loanImage={loanImages}
              />
            ) : (
              <HomeMobileLoanCarousel
                loans={loans}
                images={images}
                loanImage={loanImages}
              />
            )}
          </div>
        </div>
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
        `}</style>
      </section>
    </>
  );
};

export default HomeLoanDisplay;
