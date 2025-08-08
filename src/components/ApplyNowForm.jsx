import React, { useState } from 'react';
import { motion } from 'framer-motion';

const LoanApplicationForm = ({ loanType, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    loanAmount: '',
    tenure: '',
    income: '',
    employmentType: 'Salaried',
    city: '',
    pincode: '',
    address: '',
    panCard: '',
    aadhaar: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateStep = (stepNumber) => {
    const newErrors = {};
    
    if (stepNumber === 1) {
      if (!formData.fullName.trim()) {
        newErrors.fullName = 'Full name is required';
      }
      
      if (!formData.email.trim()) {
        newErrors.email = 'Email address is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
      
      if (!formData.phone.trim()) {
        newErrors.phone = 'Phone number is required';
      } else if (!/^\d{10}$/.test(formData.phone.replace(/\s/g, ''))) {
        newErrors.phone = 'Please enter a valid 10-digit phone number';
      }
    }
    
    else if (stepNumber === 2) {
      if (!formData.loanAmount || isNaN(formData.loanAmount) || Number(formData.loanAmount) <= 0) {
        newErrors.loanAmount = 'Please enter a valid loan amount';
      }
      
      if (!formData.tenure) {
        newErrors.tenure = 'Please select a loan tenure';
      }
      
      if (!formData.income || isNaN(formData.income) || Number(formData.income) <= 0) {
        newErrors.income = 'Please enter a valid monthly income';
      }
    }
    
    else if (stepNumber === 3) {
      if (!formData.city.trim()) {
        newErrors.city = 'City is required';
      }
      
      if (!formData.pincode.trim()) {
        newErrors.pincode = 'Pincode is required';
      } else if (!/^\d{6}$/.test(formData.pincode.replace(/\s/g, ''))) {
        newErrors.pincode = 'Please enter a valid 6-digit pincode';
      }
      
      if (!formData.panCard.trim()) {
        newErrors.panCard = 'PAN card number is required';
      } else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.panCard.toUpperCase())) {
        newErrors.panCard = 'Please enter a valid PAN card number';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate before submission
    if (!validateStep(step)) {
      return;
    }
    
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
    
    // In a real implementation, you would send the data to your backend
    // Example:
    // try {
    //   const response = await fetch('/api/loan-application', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData),
    //   });
    //   const data = await response.json();
    //   setLoading(false);
    //   setSubmitted(true);
    // } catch (error) {
    //   console.error('Error submitting application:', error);
    //   setLoading(false);
    // }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <motion.div 
            key="step1"
            initial="hidden" 
            animate="visible" 
            variants={formVariants}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-gray-700">Personal Information</h3>
            <div>
              <label className="block text-gray-600 mb-1">Full Name <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffc73c]`}
                required
              />
              {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Email Address <span className="text-red-500">*</span></label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffc73c]`}
                required
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Phone Number <span className="text-red-500">*</span></label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffc73c]`}
                required
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>
            <div className="flex justify-end pt-4">
              <button
                type="button"
                onClick={nextStep}
                className="px-6 py-2 bg-[#ffc73c] text-white rounded-md hover:bg-[#ffc73c] transition-colors"
              >
                Next
              </button>
            </div>
          </motion.div>
        );
      
      case 2:
        return (
          <motion.div 
            key="step2"
            initial="hidden"
            animate="visible"
            variants={formVariants}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-gray-700">Loan Details</h3>
            <div>
              <label className="block text-gray-600 mb-1">Loan Amount (₹) <span className="text-red-500">*</span></label>
              <input
                type="number"
                name="loanAmount"
                value={formData.loanAmount}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${errors.loanAmount ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffc73c]`}
                required
              />
              {errors.loanAmount && <p className="text-red-500 text-xs mt-1">{errors.loanAmount}</p>}
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Tenure (months) <span className="text-red-500">*</span></label>
              <select
                name="tenure"
                value={formData.tenure}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${errors.tenure ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffc73c]`}
                required
              >
                <option value="">Select Tenure</option>
                <option value="12">12 months</option>
                <option value="24">24 months</option>
                <option value="36">36 months</option>
                <option value="48">48 months</option>
                <option value="60">60 months</option>
                {loanType === 'Housing Loans' && (
                  <>
                    <option value="120">120 months</option>
                    <option value="180">180 months</option>
                    <option value="240">240 months</option>
                    <option value="300">300 months</option>
                  </>
                )}
              </select>
              {errors.tenure && <p className="text-red-500 text-xs mt-1">{errors.tenure}</p>}
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Monthly Income (₹) <span className="text-red-500">*</span></label>
              <input
                type="number"
                name="income"
                value={formData.income}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${errors.income ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffc73c]`}
                required
              />
              {errors.income && <p className="text-red-500 text-xs mt-1">{errors.income}</p>}
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Employment Type <span className="text-red-500">*</span></label>
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
            <div className="flex justify-between pt-4">
              <button
                type="button"
                onClick={prevStep}
                className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="px-6 py-2 bg-[#ffc73c] text-white rounded-md hover:bg-[#ffc73c] transition-colors"
              >
                Next
              </button>
            </div>
          </motion.div>
        );
      
      case 3:
        return (
          <motion.div 
            key="step3"
            initial="hidden"
            animate="visible"
            variants={formVariants}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-gray-700">Additional Information</h3>
            <div>
              <label className="block text-gray-600 mb-1">City <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${errors.city ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffc73c]`}
                required
              />
              {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Pincode <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${errors.pincode ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffc73c]`}
                required
                maxLength={6}
              />
              {errors.pincode && <p className="text-red-500 text-xs mt-1">{errors.pincode}</p>}
            </div>
            <div>
              <label className="block text-gray-600 mb-1">PAN Card Number <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="panCard"
                value={formData.panCard}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${errors.panCard ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffc73c]`}
                required
                maxLength={10}
              />
              {errors.panCard && <p className="text-red-500 text-xs mt-1">{errors.panCard}</p>}
            </div>
            <div className="flex justify-between pt-4">
              <button
                type="button"
                onClick={prevStep}
                className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
              >
                Previous
              </button>
              <button
                type="submit"
                onClick={handleSubmit}
                disabled={loading}
                className="px-6 py-2 bg-[#ffc73c] text-white rounded-md hover:bg-[#ffc73c] transition-colors flex items-center"
              >
                {loading ? (
                  <>
                    <span className="animate-spin mr-2">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </span>
                    Processing
                  </>
                ) : "Submit Application"}
              </button>
            </div>
          </motion.div>
        );
      
      default:
        return null;
    }
  };

  if (submitted) {
    return (
      <motion.div 
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div 
          className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
              <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Application Submitted Successfully!</h3>
            <p className="mt-2 text-gray-600">
              Your {loanType} application has been received. Our team will review your application and contact you shortly.
            </p>
            <p className="mt-4 text-sm text-gray-500">Reference ID: {Math.random().toString(36).substring(2, 10).toUpperCase()}</p>
            <button
              onClick={onClose}
              className="mt-6 px-4 py-2 bg-[#ffc73c] text-white rounded-md hover:bg-[#ffc73c] transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div 
        className="bg-white rounded-lg shadow-xl overflow-hidden max-w-md w-full"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="bg-[#ffc73c] py-4 px-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-white">{loanType} Application</h2>
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
          <div className="mb-6">
            <div className="flex items-center">
              {[1, 2, 3].map((stepNumber) => (
                <React.Fragment key={stepNumber}>
                  <div 
                    className={`w-8 h-8 flex items-center justify-center rounded-full ${
                      step >= stepNumber ? 'bg-[#ffc73c] text-white' : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {stepNumber}
                  </div>
                  {stepNumber < 3 && (
                    <div 
                      className={`flex-1 h-1 mx-2 ${
                        step > stepNumber ? 'bg-[#ffc73c]' : 'bg-gray-200'
                      }`}
                    ></div>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-xs">Personal Info</span>
              <span className="text-xs">Loan Details</span>
              <span className="text-xs">Documents</span>
            </div>
          </div>

          <form onSubmit={(e) => e.preventDefault()}>
            {renderStep()}
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LoanApplicationForm;