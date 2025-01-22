import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const CibilScoreSection = () => {
  const [score, setScore] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  useEffect(() => {
    let animationFrame;
    let startTime;
    const duration = 1000; // Animation duration in milliseconds
    const targetScore = 400;

    const animateValue = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / duration;

      if (progress < 1 && inView) {
        const currentScore = Math.min(
          Math.floor(progress * targetScore),
          targetScore
        );
        setScore(currentScore);
        animationFrame = requestAnimationFrame(animateValue);
      } else {
        setScore(targetScore);
      }
    };

    if (inView) {
      animationFrame = requestAnimationFrame(animateValue);
    }

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [inView]);

  return (
    <div
      className="flex justify-center p-8 cibil-score"
      style={{ marginTop: "250px" }}
    >
      <div className="cibil-w" style={{ width: "84%" }}>
        {/* Header */}
        <h1 className="text-4xl md:text-5xl gap-2  flex justify-center font-bold mb-12 check roboto-serif">
          Check Your <span className="text-[#C17D5B]">Cibil Score</span>
        </h1>

        {/* Main content grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mb-12">
          {/* Item 1 */}
          <div className="space-y-1">
            <div className="flex gap-4">
              <div
                className="flex justify-center"
                style={{ alignItems: "center" }}
              >
                <img
                  src="/sheet.png"
                  className="w-[40px] h-8 text-green-500"
                  alt=""
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold roboto-serif">
                  Correct Any Discrepancies
                </h2>

                <p className="text-gray-600 roboto-light">
                  Contact the lender or the concerned credit bureau to correct
                  any discrepancies
                </p>
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="space-y-1">
            <div className="flex gap-4">
              <div
                className="flex justify-center"
                style={{ alignItems: "center" }}
              >
                <svg
                  className="w-8 h-8 text-green-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="11"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M8 12l3 3 5-5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold flex gap-4 roboto-serif">
                  Get Better Loan Rates
                </h2>
                <p className="text-gray-600 roboto-light">
                  A good Credit Score will help you get better interest rates
                  and credit Limits
                </p>
              </div>
            </div>
          </div>

          {/* Item 3 */}
          <div className="space-y-1">
            <div className="flex gap-4">
              <div
                className="flex justify-center"
                style={{ alignItems: "center" }}
              >
                <img
                  src="/credit.png"
                  className="w-8 h-8 text-green-500"
                  alt=""
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold flex gap-4 roboto-serif">
                  Monitor Your Credit Health
                </h2>
                <p className="text-gray-600 roboto-light">
                  Check your credit score and report regularly to track your
                  credit health
                </p>
              </div>
            </div>
          </div>

          {/* Item 4 */}
          <div className="space-y-1">
            <div className="flex gap-4">
              <div
                className="flex justify-center"
                style={{ alignItems: "center" }}
              >
                <img
                  src="/money.png"
                  className="w-8 h-8 text-green-500"
                  alt=""
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold roboto-serif">
                  Improve Your Financial Decision
                </h2>

                <p className="text-gray-600 roboto-light">
                  Learn about your credit history, credit health, and various
                  other factors
                </p>
              </div>
            </div>
          </div>

          {/* Item 5 */}
          <div className="space-y-1">
            <div className="flex gap-4">
              <div
                className="flex justify-center"
                style={{ alignItems: "center" }}
              >
                <img
                  src="/piggy-bank.png"
                  className="w-8 h-8 text-green-500"
                  alt=""
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold roboto-serif">
                  Learn About Key Insights
                </h2>

                <p className="text-gray-600 roboto-light">
                  Make better decisions to grow your savings and improve your
                  Finances
                </p>
              </div>
            </div>
          </div>

          {/* Item 6 */}
          <div className="space-y-1">
            <div className="flex gap-4">
              <div
                className="flex justify-center"
                style={{ alignItems: "center" }}
              >
                <img
                  src="/cibil-mobile.png"
                  className="w-8 h-8 text-green-500"
                  alt=""
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold flex gap-4 roboto-serif">
                  Your Credit Health Matters
                </h2>
                <p className="text-gray-600 roboto-light">
                  Credit health is one of the most Important Factors
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          ref={ref}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <button
            className="bg-[#D4B8AC] text-black text-4xl px-12 py-3 font-semibold hover:bg-[#C17D5B] hover:text-white transition-colors w-96 mb-8 roboto-serif"
            style={{ height: "130px", borderRadius: "20px" }}
          >
            Download <br />
            Cibil Score
          </button>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src="/lever.gif" style={{ width: "90%" }} alt="" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .w-96 {
            width: 15rem !important;
            height: 100px !important;
            font-size: 1.5rem !important;
          }
          .grid {
            grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
          }

          .check {
            font-size: 1.8rem !important;
          }
          .cibil-score {
            margin-top: 0px !important;
          }
          .cibil-w {
            width: 100% !important;
          }
        }

        @media (max-width: 375px) {
          .w-96 {
            width: 15rem !important;
            height: 100px !important;
            font-size: 1.5rem !important;
          }
          .grid {
            grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
          }

          .check {
            font-size: 1.3rem !important;
          }
          .cibil-score {
            margin-top: 0px !important;
          }
          .cibil-w {
            width: 100% !important;
          }

          @media (min-width: 1367px) and (max-width: 1920px) {
            /* For screens up to 17 inches (approx.) */
            .cibil-score {
              margin-top: 0px;
            }
          }
        }
      `}</style>
    </div>
  );
};

export default CibilScoreSection;
