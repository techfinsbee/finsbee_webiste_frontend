import React from 'react';
import { useInView } from 'react-intersection-observer';
import './JoinFundMama.component.css'
const JoinFundMama = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  return (
    <div className="flex flex-col items-center join-fund">
      <div className="text-center max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-3xl font-bold roboto-serif join-text ">
        Join FundsMama – Empowering Your Finances with Easy Loans and Shopping!
        </h1>
        
        <div ref={ref} className={`transform transition-all duration-700 ease-out ${
          inView 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-20 opacity-0'
        }`}>
          <button className="mt-8 px-8 py-3 text-white bg-amber-700 rounded-md text-lg font-semibold hover:bg-amber-800 transition-colors signup-button" onClick={()=>{
            window.location.href = "https://funds.mama.com/signup";
          }}>
            Sign-Up
          </button>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 728px) {
          .join-fund{
            margin-top: 200px !important;
          }
        }
          @media (max-width: 400px) {
          .join-fund{
            margin-top: 0px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default JoinFundMama;