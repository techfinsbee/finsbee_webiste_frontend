import React, { useState, useEffect } from "react";
import HomeMobileStepsCarousel from "./HomeMobileStepsCarousel";
const HomeSteps = () => {
  const Data = {
    our_solutions: [
      {
        title: "Download & Sign-Up",
        content:
          "Download the Fundsmama app from Google Play Store or the App Store and complete a quick sign-up.",
        image: "/c3.svg",
      },
      {
        title: "Fill the Application",
        content:
          "Provide basic details like your full name, date of birth, and email address to get started.",
        image: "/c4.svg",
      },
      {
        title: "Apply for Loan",
        content:
          "Submit your loan application after a smooth verification process, with just a few taps.",
        image: "/c2.svg",
      },
      {
        title: "Upload Required Documents",
        content:
          "Upload essential documents, such as your PAN and Aadhaar card, to complete the application.",
        image: "/c1.svg",
      },
      {
        title: "Loan Disbursal",
        content:
          "Get your loan approved and disbursed quickly — as fast as within 10 minutes.",
        image: "/c4.svg",
      },
    ],
  };
  const images = ["/c3.svg", "/c4.svg", "/c2.svg", "/c1.svg", "/c4.svg"];

  const steps_content = [
    {
      title: "Download & Sign-Up",
      content:
        "Download the Fundsmama app from Google Play Store or the App Store and complete a quick sign-up.",
      image: images[2],
    },
    {
      title: "Fill the Application",
      content:
        "Provide basic details like your full name, date of birth, and email address to get started.",
      image: images[3],
    },
    {
      title: "Apply for Loan",
      content:
        "Submit your loan application after a smooth verification process, with just a few taps.",
      image: images[1],
    },
    {
      title: "Upload Required Documents",
      content:
        "Upload essential documents, such as your PAN and Aadhaar card, to complete the application.",
      image: images[0],
    },
    {
      title: "Loan Disbursal",
      content:
        "Get your loan approved and disbursed quickly — as fast as within 10 minutes.",
      image: images[3],
    },
  ];

  const screenWidth = window.innerWidth;
  const isMobile = screenWidth < 425;

  const [activeIndexList, setActiveIndexList] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const startInterval = () => {
    return setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndexList(
          (prevIndex) => (prevIndex + 1) % Data.our_solutions.length
        );
        setIsAnimating(false);
      }, 150); // Reduced to 150ms for faster transition
    }, 5000);
  };

  useEffect(() => {
    const interval = startInterval();
    setIntervalId(interval);
    return () => clearInterval(interval);
  }, []);

  const handleListItemClick = (index) => {
    if (index === activeIndexList || isAnimating) return;

    if (intervalId) {
      clearInterval(intervalId);
    }

    setIsAnimating(true);

    // Reduced timeout to 150ms for faster response
    setTimeout(() => {
      setActiveIndexList(index);
      setIsAnimating(false);

      const newInterval = startInterval();
      setIntervalId(newInterval);
    }, 150);
  };
  const BG = "/bg-loan.png";

  return (
    <section
      className=" p-0 min-h-screen"
      style={{
        borderRadius: "50px",
      }}
    >
      <div className="flex flex-col h-fit w-full m-0">
        <div className="flex flex-row justify-start w-full steps">
          <div
            className="w-1/2 relative min-h-screen steps-content overflow-hidden step-image flex justify-center"
            style={{
              background: "#97F15D",
              borderTopLeftRadius: "50px",
            }}
          >
            <div className="text-center mt-32 flex flex-col gap-4">
              <h1 className="text-[#163312] text-5xl font-bold">
                Loan Application Steps
              </h1>
              <p className="text-xl">
                With Fundsmama you unlock loans at lower prices
              </p>
            </div>
            <div className=" absolute object-cover bottom-0">
              <img src="/Ellipse1.png" alt="" />
            </div>
            <div className=" absolute object-cover bottom-0">
              <img src="/Ellipse2.png" alt="" />
            </div>
            <div className=" absolute object-cover bottom-0">
              <img src="/Ellipse3.png" alt="" />
            </div>
            <div className="absolute object-cover bottom-0 bg-[]">
              <img src="/BLUR.png" alt="" />
            </div>
            <div className=" absolute object-contain top-[50%]">
              <img src="/bg-loan.png" alt="" />
            </div>

            
            <div
              className={`absolute w-fit h-fit transition-all duration-150 ease-in-out ${
                isAnimating
                  ? "translate-x-full opacity-0"
                  : "translate-x-0 opacity-100"
              }`}
            >
              <img
                src={Data.our_solutions[activeIndexList].image}
                alt=""
                className="h-full object-contain step-per-image rounded-lg mx-auto"
                style={{
                  top: "130px",
                  position: "relative",
                }}
              />
            </div>
          </div>
          <div
            className="w-1/2 steps-content bg-[#112B00] p-10"
            style={{
              borderTopRightRadius: "50px",
            }}
          >
            <div className="flex flex-col">
              {Data.our_solutions.map((data, index) => (
                <div
                  key={index}
                  className={`rounded-lg p-4 cursor-pointer transition-all duration-150 ${
                    isAnimating ? "pointer-events-none" : ""
                  }`}
                  onClick={() => handleListItemClick(index)}
                  style={{
                    background:
                      activeIndexList === index ? "rgb(178, 255, 142)" : "",
                    margin: "10px",
                  }}
                >
                  <div className="flex gap-12 items-start">
                    <div className="relative">
                      <div>
                        <img src="Rectangle.png" alt="" />
                      </div>
                    </div>

                    <div className="step-content">
                      <h3
                        className={`text-lg font-bold roboto-serif ${
                          activeIndexList === index
                            ? "text-black"
                            : "text-white"
                        }`}
                      >
                        {data.title}
                      </h3>
                      <p
                        className={`mt-2 transition-colors duration-150 roboto-light ${
                          activeIndexList === index
                            ? "text-black"
                            : "text-gray-300"
                        }`}
                      >
                        {data.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mobile-step">
          <HomeMobileStepsCarousel steps={steps_content} images={images} />
        </div>
      </div>

      <style jsx>{`
        .animate-ping {
          animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        @keyframes ping {
          75%,
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        @media screen and (min-width: 933px) {
          .mobile-step {
            display: none !important;
          }
        }

        @media screen and (max-width: 933px) {
          .flex-row {
            flex-direction: column;
          }

          .w-1/2 {
            width: 100%;
          }

          .loan-header {
            font-size: 18px !important;
            gap: 5px !important;
            margin-bottom: 40px !important;
          }

          .steps {
            flex-direction: column !important;
            padding: 0 !important;
          }

          .steps .steps-content,
          .step-image {
            width: 100% !important;
          }

          .step-image {
            margin-top: 100px;
          }
          .steps-content {
            display: none !important;
          }
        }

        @media screen and (max-width: 512px) {
          .steps-content {
            display: none !important;
          }

          .step-image {
            margin-top: 0px;
            height: 550px !important;
          }

          .step-per-image {
            width: 250px !important;
            height: 500px !important;
          }
        }

        @media screen and (max-width: 360px) {
          .step-header {
            font-size: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HomeSteps;
