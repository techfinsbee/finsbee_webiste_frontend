import React, { useState, useEffect } from "react";
import HomeMobileStepsCarousel from "./HomeMobileStepsCarousel";
const HomeSteps = ({ StepColor, stepImage }) => {
  const Data = {
    our_solutions: [
      {
        title: "Download & Sign-Up",
        content:
          "Get the Fundsmama app on Google Play Store or App Store and sign up in minutes.",
        image: "/c3.svg",
      },
      {
        title: "Fill the Application",
        content: "Enter basic details like name, DOB, and email to begin.",
        image: "/c4.svg",
      },
      {
        title: "Apply for Loan",
        content: "Submit your request with a seamless verification process.",
        image: "/c2.svg",
      },
      {
        title: "Upload Required Documents",
        content: "Securely upload PAN, Aadhaar, and other required documents.",
        image: "/c1.svg",
      },
      {
        title: "Loan Disbursal",
        content:
          "Get quick approvals and receive funds in as fast as 10 minutes.",
        image: "/c4.svg",
      },
    ],
  };
  const images = ["/c3.svg", "/c4.svg", "/c2.svg", "/c1.svg", "/c4.svg"];

  const steps_content = [
    {
      title: "Download & Sign-Up",
      content:
        "Get the Fundsmama app on Google Play Store or App Store and sign up in minutes.",
      image: images[2],
    },
    {
      title: "Fill the Application",
      content: "Enter basic details like name, DOB, and email to begin.",
      image: images[3],
    },
    {
      title: "Apply for Loan",
      content: "Submit your request with a seamless verification process.",
      image: images[1],
    },
    {
      title: "Upload Required Documents",
      content: "Securely upload PAN, Aadhaar, and other required documents.",
      image: images[0],
    },
    {
      title: "Loan Disbursal",
      content:
        "Get quick approvals and receive funds in as fast as 10 minutes.",
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
      }, 200); // Reduced to 150ms for faster transition
    }, 6000);
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
  return (
    <section
      className="step-section p-0 min-h-fit"
      style={{
        borderRadius: "50px",
      }}
    >
      <div className="flex flex-col first-div w-full m-0">
        <div className="flex flex-row justify-start w-full steps">
          <div
            className="w-1/2 relative steps-content overflow-hidden step-image flex justify-center"
            style={{
              background: `${StepColor.left ? StepColor.left : "#97F15D"}`,
              borderTopLeftRadius: "50px",
              height:`${window.innerHeight>1022?'80vh':''}`
            }}
          >
            <div
              className="text-center mt-[5rem] flex flex-col gap-4 coolvetica"
              style={{ color: `${stepImage ? "black" : "#163312"}` }}
            >
              <h1 className=" text-5xl font-bold">Loan Application Steps</h1>
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
            <div className="w-full h-full absolute">
              <div className="flex absolute bottom-0 justify-center w-full">
                <img
                  src="/step-coin.png"
                  alt="Coin background"
                  className={`object-cover w-[70%] relative object-center  relative `}
                />
              </div>
            </div>

            <div
              className={`absolute w-fit h-fit transition-all duration-150 image-cont ease-in-out ${
                isAnimating
                  ? "translate-x-full opacity-0"
                  : "translate-x-0 opacity-100"
              }`}
            >
              <img
                src={Data.our_solutions[activeIndexList].image}
                alt=""
                className="h-full object-contain rounded-lg mx-auto"
                style={{
                  bottom: `${window.innerWidth > 1400 ? `${window.innerHeight>1000?'-150px':'-60px'}` : "-80px"}`,
                  position: "relative",
                }}
              />
            </div>
          </div>
          <div
            className="w-1/2 steps-content p-10"
            style={{
              borderTopRightRadius: "50px",
              background: `${StepColor.right ? StepColor.right : "#112B00"}`,
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
                      activeIndexList === index
                        ? `${
                            StepColor.left
                              ? StepColor.left
                              : "rgb(178, 255, 142)"
                          }`
                        : "",
                    margin: "10px",
                  }}
                >
                  <div className="flex gap-12 items-start">
                    <div className="relative">
                      <div>
                        <img
                          src={`${stepImage ? stepImage : "Rectangle.png"}`}
                          alt=""
                        />
                      </div>
                    </div>

                    <div className="step-content">
                      <h3
                        className={`text-2xl font-bold coolvetica ${
                          activeIndexList === index
                            ? "text-black"
                            : "text-white"
                        }`}
                      >
                        {data.title}
                      </h3>
                      <p
                        className={`mt-2 transition-colors duration-150 manrope ${
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
          {StepColor ? (
            <HomeMobileStepsCarousel
              steps={steps_content}
              images={images}
              COLOR="#"
              stepImage={stepImage}
            />
          ) : (
            <HomeMobileStepsCarousel steps={steps_content} images={images} stepImage={stepImage}/>
          )}
        </div>
      </div>

      <style jsx>{`
      
      @media(min-height:900px){
        .step-section, .first-div, .image-cont,.steps-content{
          min-height:100vh;
        }
      }
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

        @media screen and (min-width: 1025px) {
          .mobile-step {
            display: none !important;
          }
        }

        @media screen and (max-width: 1025px) {
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
        @media screen and (max-height: 720px) {
          .coin-image {
            height: 70vh;
          }
        }

        @media screen and (min-width: 1400px) {
          .coin-image {
            height: 63vh;
          }
        }
      `}</style>
    </section>
  );
};

export default HomeSteps;
