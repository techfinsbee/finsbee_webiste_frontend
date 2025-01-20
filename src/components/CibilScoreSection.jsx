import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const CibilScoreSection = () => {
  const [score, setScore] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false
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
        const currentScore = Math.min(Math.floor(progress * targetScore), targetScore);
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
    <div className="flex justify-center p-8 mt-20">
      <div className="" style={{width:"84%"}}>
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold mb-12">
          Check Your <span className="text-[#C17D5B]">Cibil Score</span>
        </h1>

        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-12">
          {/* Left Column */}
          <div className="space-y-8">
            <div>
              
              <h2 className="text-2xl font-bold mb-2 flex gap-4"><img src="/cibil-mobile.png" className="w-8 h-8 text-green-500" alt="" />Your Credit Health Matters</h2>
              <p className="text-gray-600">Credit health in one of the most Important Factors</p>
            </div>

            <div className="flex items-start space-x-4">
              <div className="mt-1">
                <svg className="w-8 h-8 text-green-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2"/>
                  <path d="M8 12l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                
                <h2 className="text-2xl font-bold mb-2 flex gap-4">Get Better Loan Rates</h2>
                <p className="text-gray-600">A good Credit Score will help you get better interest rates and credit Limits</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-2 flex gap-4"><img src="/credit.png" className="w-8 h-8 text-green-500" alt="" />Monitor Your Credit Health</h2>
              <p className="text-gray-600">Check your credit score and report regularly to track your credit health</p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-2">Improve Your Financial Decision</h2>
              <p className="text-gray-600">Learn about the your credit history, credit health and various other factors</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-2">Learn About Key Insights</h2>
              <p className="text-gray-600">Make better decisions to grow your savings and improve your Finances</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-2">Correct Any Discrepancies</h2>
              <p className="text-gray-600">Contact the lender or the concerned credit bureau to correct any discrepancies</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div ref={ref} className="flex flex-col md:flex-row justify-between items-center gap-4">
          <button className="bg-[#D4B8AC] text-black text-4xl px-12 py-3 font-semibold hover:bg-[#C17D5B] hover:text-white transition-colors w-96 mb-8" style={{height:"130px", borderRadius:"20px"}}>
            Download <br />Cibil Score
          </button>
          <div style={{display:"flex", justifyContent:"center"}}>
        <img src="/lever.gif" style={{width:"90%"}} alt="" />
      </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .w-96{
            width: 15rem !important;
            height: 100px !important;
            font-size: 1.5rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default CibilScoreSection;