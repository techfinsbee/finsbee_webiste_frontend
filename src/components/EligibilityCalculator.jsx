import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const EligibilityCalculator = ({ loanType, onClose }) => {
  const [formData, setFormData] = useState({
    income: '',
    employmentType: 'Salaried',
    age: '',
    existingEmi: '',
    cibil: '',
    loanAmount: '',
    tenure: '60',
  });
  
  const [eligibilityScore, setEligibilityScore] = useState(null);
  const [emi, setEmi] = useState(null);
  const [loading, setLoading] = useState(false);
  const [eligibilityAmount, setEligibilityAmount] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Calculate EMI
  const calculateEMI = (principal, tenure, rate) => {
    // Monthly interest rate
    const monthlyRate = (rate / 100) / 12;
    // Total number of payments
    const totalPayments = tenure;
    // Calculate EMI using the formula: P * r * (1+r)^n / ((1+r)^n - 1)
    const emi = principal * monthlyRate * Math.pow(1 + monthlyRate, totalPayments) / 
                (Math.pow(1 + monthlyRate, totalPayments) - 1);
    return Math.round(emi);
  };

  // Calculate eligibility score based on inputs
  const calculateEligibility = () => {
    setLoading(true);

    setTimeout(() => {
      let score = 0;
      const income = parseFloat(formData.income);
      const age = parseFloat(formData.age);
      const existingEmi = parseFloat(formData.existingEmi) || 0;
      const cibil = parseFloat(formData.cibil);
      
      // Income score (40% weightage)
      if (income > 100000) score += 40;
      else if (income > 50000) score += 35;
      else if (income > 30000) score += 30;
      else if (income > 20000) score += 25;
      else score += 15;
      
      // Age score (10% weightage)
      if (age >= 25 && age <= 45) score += 10;
      else if (age > 45 && age <= 55) score += 8;
      else if (age > 55) score += 5;
      else score += 3;
      
      // Employment type (10% weightage)
      if (formData.employmentType === 'Salaried') score += 10;
      else if (formData.employmentType === 'Self-Employed') score += 8;
      else score += 6;
      
      // CIBIL score (30% weightage)
      if (cibil >= 750) score += 30;
      else if (cibil >= 700) score += 25;
      else if (cibil >= 650) score += 20;
      else if (cibil >= 600) score += 15;
      else score += 5;
      
      // Existing EMI vs Income ratio (10% weightage)
      const emiRatio = (existingEmi / income) * 100;
      if (emiRatio < 30) score += 10;
      else if (emiRatio < 40) score += 8;
      else if (emiRatio < 50) score += 5;
      else score += 2;
      
      // Calculate eligible amount based on income and existing EMIs
      // Assuming 50% is the maximum EMI to income ratio allowed
      const eligibleMonthlyPayment = (income * 0.5) - existingEmi;
      
      // Interest rate based on loan type
      let interestRate;
      switch(loanType) {
        case 'Housing Loans':
          interestRate = 8.5;
          break;
        case 'Loan Against Property':
          interestRate = 9.5;
          break;
        case 'Personal Loans':
          interestRate = 12;
          break;
        case 'Loan Against Security':
          interestRate = 10;
          break;
        default:
          interestRate = 10;
      }
      
      // Calculate eligible amount based on maximum EMI possible
      const tenure = parseInt(formData.tenure);
      const monthlyRate = (interestRate / 100) / 12;
      const eligibleAmount = eligibleMonthlyPayment * ((Math.pow(1 + monthlyRate, tenure) - 1) / 
                            (monthlyRate * Math.pow(1 + monthlyRate, tenure)));
      
      // Calculate EMI for the requested loan amount
      const loanAmount = parseFloat(formData.loanAmount);
      const calculatedEmi = calculateEMI(loanAmount, tenure, interestRate);
      
      setEligibilityScore(Math.min(100, Math.round(score)));
      setEligibilityAmount(Math.round(eligibleAmount));
      setEmi(calculatedEmi);
      setShowResult(true);
      setLoading(false);
    }, 1500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateEligibility();
  };

  const resetForm = () => {
    setShowResult(false);
    setEligibilityScore(null);
    setEligibilityAmount(null);
    setEmi(null);
  };

  return (
    <motion.div 
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div 
        className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="bg-[#ffc73c] py-4 px-6 sticky top-0 z-10">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-white">{loanType} Eligibility Calculator</h2>
            <button 
              onClick={onClose}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="p-6">
          {!showResult ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-600 mb-1">Monthly Income (₹)</label>
                <input
                  type="number"
                  name="income"
                  value={formData.income}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffc73c]"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-600 mb-1">Employment Type</label>
                <select
                  name="employmentType"
                  value={formData.employmentType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffc73c]"
                  required
                >
                  <option value="Salaried">Salaried</option>
                  <option value="Self-Employed">Self-Employed</option>
                  <option value="Business Owner">Business Owner</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-600 mb-1">Age</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  min="21"
                  max="65"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffc73c]"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-600 mb-1">Existing EMI (if any)</label>
                <input
                  type="number"
                  name="existingEmi"
                  value={formData.existingEmi}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffc73c]"
                />
              </div>
              
              <div>
                <label className="block text-gray-600 mb-1">CIBIL Score (Approx.)</label>
                <input
                  type="number"
                  name="cibil"
                  value={formData.cibil}
                  onChange={handleChange}
                  min="300"
                  max="900"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffc73c]"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">Enter a value between 300-900</p>
              </div>
              
              <div>
                <label className="block text-gray-600 mb-1">Desired Loan Amount (₹)</label>
                <input
                  type="number"
                  name="loanAmount"
                  value={formData.loanAmount}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffc73c]"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-600 mb-1">Loan Tenure (months)</label>
                <select
                  name="tenure"
                  value={formData.tenure}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffc73c]"
                  required
                >
                  <option value="12">12 months</option>
                  <option value="24">24 months</option>
                  <option value="36">36 months</option>
                  <option value="48">48 months</option>
                  <option value="60">60 months</option>
                  {(loanType === 'Housing Loans' || loanType === 'Loan Against Property') && (
                    <>
                      <option value="120">120 months</option>
                      <option value="180">180 months</option>
                      <option value="240">240 months</option>
                    </>
                  )}
                </select>
              </div>
              
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-6 py-2 bg-[#ffc73c] text-white rounded-md hover:bg-[#ffc73c] transition-colors flex items-center justify-center"
                >
                  {loading ? (
                    <>
                      <span className="animate-spin mr-2">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      </span>
                      Calculating
                    </>
                  ) : "Check Eligibility"}
                </button>
              </div>
            </form>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-800">Your Eligibility Result</h3>
                <p className="text-sm text-gray-600 mt-1">Based on the information provided</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-600">Eligibility Score</span>
                  <span className="font-semibold text-lg">
                    {eligibilityScore}/100
                  </span>
                </div>
                
                <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden mb-1">
                  <div 
                    className="absolute top-0 left-0 h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${eligibilityScore}%`,
                      backgroundColor: 
                        eligibilityScore >= 80 ? '#10B981' : 
                        eligibilityScore >= 60 ? '#FBBF24' : 
                        '#EF4444'
                    }}
                  ></div>
                </div>
                
                <div className="text-right text-xs">
                  <span className={`font-medium ${
                    eligibilityScore >= 80 ? 'text-green-600' : 
                    eligibilityScore >= 60 ? 'text-yellow-600' : 
                    'text-red-600'
                  }`}>
                    {eligibilityScore >= 80 ? 'Excellent' : 
                     eligibilityScore >= 60 ? 'Good' : 
                     'Needs Improvement'}
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <p className="text-gray-600 mb-1">Eligible Loan Amount</p>
                  <p className="text-lg font-semibold text-gray-900">₹{eligibilityAmount?.toLocaleString()}</p>
                  {parseFloat(formData.loanAmount) > eligibilityAmount && (
                    <p className="text-xs text-red-500 mt-1">
                      Your requested amount exceeds eligibility
                    </p>
                  )}
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <p className="text-gray-600 mb-1">Estimated Monthly EMI</p>
                  <p className="text-lg font-semibold text-gray-900">₹{emi?.toLocaleString()}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    For ₹{parseFloat(formData.loanAmount).toLocaleString()} over {formData.tenure} months
                  </p>
                </div>
              </div>
              
              {eligibilityScore < 60 && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-red-700">
                        Your eligibility score is low. Consider improving your CIBIL score or reducing existing EMIs before applying.
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="flex gap-4">
                <button
                  onClick={resetForm}
                  className="flex-1 px-4 py-2 border border-[#ffc73c] text-[#ffc73c] rounded-md hover:bg-gray-50 transition-colors"
                >
                  Recalculate
                </button>
                
                {eligibilityScore >= 60 && (
                  <button
                    onClick={() => {
                      onClose();
                      // Here you could trigger the loan application form to open
                    }}
                    className="flex-1 px-4 py-2 bg-[#ffc73c] text-white rounded-md hover:bg-[#ffc73c] transition-colors"
                  >
                    Apply Now
                  </button>
                )}
              </div>
              
              <p className="text-xs text-gray-500 text-center mt-4">
                This is an indicative calculation based on the information provided. 
                Actual loan eligibility may vary subject to detailed assessment.
              </p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default EligibilityCalculator;