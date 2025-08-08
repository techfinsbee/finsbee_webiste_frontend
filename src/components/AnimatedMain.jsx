import React, { useState, useEffect } from "react";

const AnimatedMain = ({ benefits, Color, TXTCOLOR }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % benefits.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-2xl px-1 mt-5">
      <div className="flex  sm:text-left gap-4 sm:gap-0">
        <div className="relative h-8">
          <div className="relative overflow-hidden h-[50px] sm:h-[80px] animated-text inline-block w-[400px] sm:w-[300px] lg:w-[500px]">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`absolute inset-0 w-full p-0 transition-all duration-500 ease-in-out ${
                  Color ? "lg:text-5xl" : "lg:text-6xl"
                } `}
                style={{
                  transform: `translateY(${
                    index === currentIndex ? "0%" : "100%"
                  })`,
                  opacity: index === currentIndex ? 1 : 0,
                  willChange: "transform",
                }}
              >
                <span
                  className={`block ${
                    Color ? "h-[250px]" : "h-[250px]"
                  } animate-height`}
                  style={{
                    fontFamily: Color ? "Helvetica" : "roboto-slab",
                  }}
                >
                  {benefit.split("").map((char, index) => (
                    <span
                      key={index}
                      className="inline-block"
                      style={{
                        animation: Color
                          ? `${
                              TXTCOLOR
                                ? "text-color-indigo-shift 5s ease infinite"
                                : "text-color-shift 5s ease infinite"
                            }`
                          : " ",
                        animationDelay: Color ? `${index * 0.1}s` : "",
                        color: TXTCOLOR
                          ? "#ffc73c"
                          : `${Color ? "#163312" : "#CD855F"}`,
                        fontWeight: Color ? "700" : "bold",
                      }}
                    >
                      {char === " " ? "\u00A0" : char}
                      <style jsx>{`
                        @keyframes text-color-shift {
                          0%,
                          100% {
                            color: rgb(28, 51, 17);
                          }
                          20% {
                            color: #b2ff8e;
                          }
                          40% {
                            color: #163312;
                          }
                          60% {
                            color: #b2ff8e;
                          }
                          80% {
                            color: #163312;
                          }
                        }

                        @keyframes text-color-blue-shift {
                          0%,
                          100% {
                            color:#592eff;
                          }
                          20% {
                            color: rgb(242, 232, 255);
                          }
                          40% {
                            color: #592eff;
                          }
                          60% {
                            color: rgb(242, 232, 255);
                          }
                          80% {
                            color: rgb(242, 232, 255);
                          }
                        }
                      `}</style>
                    </span>
                  ))}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 728px) {
          .text-base {
            font-size: 5rem !important;
          }
        }

        @media (max-width: 512px) {
          .animated-text {
            font-size: 2rem !important;
          }
          .animate-height {
            height: 20px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedMain;
