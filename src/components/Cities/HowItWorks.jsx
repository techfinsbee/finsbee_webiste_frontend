import React from 'react';

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
  <div className="text-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 mb-10">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 lg:mb-16 text-gray-900">
        How It Works
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            {/* Step Number Circle */}
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#ffc73c] text-white rounded-full flex items-center justify-center text-lg sm:text-xl font-bold shadow-lg">
                {index + 1}
              </div>
            </div>
            
           
            
            {/* Step Card */}
            <div className="bg-white border border-gray-200 rounded-lg px-4 py-2 sm:p-6 lg:px-4 lg:py-2 shadow-sm hover:shadow-md transition-shadow duration-300 relative z-10 h-full">
              {/* Icon */}
              <div className="text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6">
                {step.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">
                {step.title}
              </h3>
              
              {/* Description */}
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Mobile Step Indicators */}
      <div className="flex justify-center mt-8 md:hidden">
        <div className="flex space-x-2">
          {steps.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 bg-[#ffc73c] rounded-full opacity-50"
            ></div>
          ))}
        </div>
      </div>
      
      {/* Call to Action */}
     
    </div>
  </div>
);

export default HowItWorks;