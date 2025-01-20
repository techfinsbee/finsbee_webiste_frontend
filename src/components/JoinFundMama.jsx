import React from 'react';
import { useInView } from 'react-intersection-observer';

const JoinFundMama = () => {
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  return (
    <>
      <div ref={ref} className="join-container">
        <div className="header-container">
          <h1 className="head">
            Join FundsMama - Your First Step to Smarter Savings and Easier Investments
          </h1>
        </div>
        <div className="signup-div">
          <button
            className={`
              signup-button
              transform transition-all duration-[1000ms]
              ${inView ? 'button-visible' : 'button-hidden'}
            `}
          >
            SignUp
          </button>
        </div>
      </div>
      <style jsx>{`
        .join-container {
          margin-top: 100px;
        }

        .header-container {
          display: flex;
          justify-content: center;
        }

        .head {
          text-align: center;
          width: 50%;
          font-size: 30px;
        }

        .signup-button {
          position: absolute;
          padding: 0.75rem 1.5rem;
          background-color: #E6D5C3;
          border-radius: 0.5rem;
          bottom: -20%;
          right: 40%;
          height: 70px;
          width: 200px;
          font-size: 30px;
        }

        .button-visible {
          transform: translateY(-20px);
          opacity: 1;
        }

        .button-hidden {
          transform: translateY(0);
          opacity: 0;
        }

        @media screen and (max-width: 728px) {
          .head {
            width: 100%;
          }
          
          .signup-button {
            right: 27%;
            bottom: -150px;
            transform: translateY(450px);
          }
          
          .button-visible {
            transform: translateY(430px);
          }
        }

        /* Redmi Note 10 specific styling */
        @media screen and (width: 393px) {
          .signup-button {
            right: 24%;
            bottom: -100px;
            width: 170px !important;
            height: 58px !important;
            font-size: 25px;
          }
          
          .button-visible {
            transform: translateY(430px);
          }
        }

        @media screen and (max-width: 425px) {
          .signup-button {
            right: 25%;
            bottom: 0px;
            width: 180px !important;
            height: 60px !important;
            font-size: 26px;
          }
        }

        @media screen and (max-width: 375px) {
          .signup-button {
            right: 23%;
            bottom: -120px;
            width: 160px !important;
            height: 55px !important;
            font-size: 24px;
          }
          
          .button-visible {
            transform: translateY(430px);
          }
        }

        @media screen and (max-width: 320px) {
          .signup-button {
            right: 25%;
            bottom: -200px;
            width: 150px !important;
            height: 50px !important;
            font-size: 22px;
          }
          
          .button-visible {
            transform: translateY(430px);
          }
        }
      `}</style>
    </>
  );
};

export default JoinFundMama;