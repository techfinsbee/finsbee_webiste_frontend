import React from 'react';
import { useInView } from 'react-intersection-observer';
import './JoinFundMama.component.css';

const JoinFundMama = () => {
  const { ref, inView } = useInView({
    threshold: 1, // Trigger when 30% of the section is visible
    triggerOnce: true, // Allow animation to re-trigger on each scroll
  });

  return (
    <>
      <div ref={ref} style={{marginTop: "100px"}}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h1 className="head">
            Join FundsMama - Your First Step to Smarter Savings and Easier Investments
          </h1>
        </div>
        <div className="signup-div">
          <button
            className={`
              absolute px-6 py-3
              bg-[#E6D5C3] rounded-lg
              transform transition-all duration-[1000ms]
              ${inView ? '-translate-y-20 opacity-100' : 'translate-y-0 opacity-0'}
            `}
            style={{ width: '110px', right: '40%' }}
          >
            SignUp
          </button>
        </div>
      </div>
    </>
  );
};

export default JoinFundMama;
