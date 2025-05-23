import React from 'react';
import './HowItWorks.component.css'; // Optional: for styling


const steps = [
  {
    title: 'Check Eligibility',
    icon: '👍',
    description: 'Once you provide your basic details, we will instantly let you know about your eligibility to receive loan.',
  },
  {
    title: 'Complete Profile',
    icon: '✅',
    description: 'Submit your basic details through our website or app platform.',
  },
  {
    title: 'Get Loan',
    icon: '💰',
    description: 'Your loan will be processed and money will be deposited in the bank account you have provided.',
  },
];

const HowItWorks = () => (
  <div className="how-it-works relative -top-[10vh]">
    <h2 className='text-5xl font-bold'>How It Works</h2>
    <div className="steps my-20">
      {steps.map((step, index) => (
        <div>
            <div className='flex justify-center'>
                <span className='rounded-[50%] w-10 h-10 bg-[#18ADA5] text-center p-2'>{index+1}</span>
            </div>

            <div className="step h-[40vh]" key={index}>
                <div className="icon mb-5">{step.icon}</div>
                <h3 className='text-xl font-bold mb-5'>{step.title}</h3>
                <p>{step.description}</p>
            </div>
        </div>
      ))}
    </div>
  </div>
);

export default HowItWorks;
