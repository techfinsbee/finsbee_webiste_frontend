import React, { useState } from 'react';
import { MapPin, Clock, User, Phone, Mail, CreditCard, CheckCircle, ArrowLeft, Home } from 'lucide-react';
import Navbar from '../Navbar/Navbar';

const Booking = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    address: '',
    city: '',
    pincode: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);

  const services = [
    { id: 'loan', name: 'Loan Consultation', price: 499, description: 'Personal & Business Loan Guidance at Your Home' },
    { id: 'insurance', name: 'Insurance Advisory', price: 599, description: 'Life, Health & General Insurance at Your Doorstep' },
    { id: 'mutual_funds', name: 'Mutual Funds', price: 799, description: 'Investment Planning & Portfolio Review at Home' }
  ];



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceSelect = (serviceId) => {
    setFormData(prev => ({
      ...prev,
      service: serviceId
    }));
  };

 

  const validateStep = () => {
    switch(currentStep) {
      case 1:
        return formData.name && formData.phone && formData.email;
      case 2:
        return formData.service;
      case 3:
        return formData.address && formData.city && formData.pincode;
      default:
        return true;
    }
  };

  const handleNext = () => {
    if (validateStep()) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => prev - 1);
  };

   const handlePayment = async () => {
  setIsProcessing(true);

  try {
    const res = await fetch(`http://13.201.249.156:8081/api/bookings/create`, {
      
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    if (!res.ok) throw new Error('Failed to book');

    const data = await res.json();
    if (data.paymentLink) {
      window.location.href = data.paymentLink; // 🔁 redirect to Cashfree
    }
  } catch (error) {
    console.error('Booking error:', error);
    alert('There was a problem booking your visit.');
  } finally {
    setIsProcessing(false);
  }
};

  // const handlePayment = async () => {
  //   setIsProcessing(true);
    
  //   // Simulate payment processing
  //   setTimeout(() => {
  //     setIsProcessing(false);
  //     setCurrentStep(5); // Success page
  //   }, 3000);
  // };

  const selectedService = services.find(s => s.id === formData.service);
  const today = new Date().toISOString().split('T')[0];

  return (
    
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-100 py-4 sm:py-8 px-4 flex items-center justify-center">
      <div className="w-full max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Book Home Visit Consultation</h1>
          <p className="text-sm sm:text-base text-gray-600 px-2">Expert consultant arrives at your home within 30 minutes</p>
        </div>
       <Navbar/>
       
        {/* Progress Bar */}
        <div className="mb-6 sm:mb-8">
          <div className="flex justify-between items-center">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className={`flex items-center ${step < 4 ? 'flex-1' : ''}`}>
                <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium ${
                  currentStep >= step ? 'bg-teal-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {step}
                </div>
                {step < 4 && (
                  <div className={`flex-1 h-1 mx-1 sm:mx-2 ${
                    currentStep > step ? 'bg-teal-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-2 px-1">
            <span>Details</span>
            <span>Service</span>
            <span>Address</span>
            <span>Payment</span>
          </div>
        </div>
        

        {/* Form Card */}
        <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-xl border border-white/20 p-4 sm:p-8">
          {/* Step 1: Personal Details */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <User className="w-10 h-10 sm:w-12 sm:h-12 text-teal-600 mx-auto mb-2" />
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Personal Information</h2>
                <p className="text-sm sm:text-base text-gray-600">Tell us about yourself</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm sm:text-base"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm sm:text-base"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm sm:text-base"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
              </div>

              <button
                onClick={handleNext}
                disabled={!validateStep()}
                className="w-full py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors text-sm sm:text-base font-medium"
              >
                Continue
              </button>
            </div>
          )}

          {/* Step 2: Service Selection */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <CreditCard className="w-10 h-10 sm:w-12 sm:h-12 text-teal-600 mx-auto mb-2" />
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Choose Your Service</h2>
                <p className="text-sm sm:text-base text-gray-600">Select the consultation type</p>
              </div>

              <div className="space-y-3">
                {services.map((service) => (
                  <div
                    key={service.id}
                    onClick={() => handleServiceSelect(service.id)}
                    className={`p-3 sm:p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      formData.service === service.id
                        ? 'border-teal-500 bg-teal-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{service.name}</h3>
                        <p className="text-xs sm:text-sm text-gray-600">{service.description}</p>
                      </div>
                      <div className="text-left sm:text-right">
                        <div className="text-lg font-bold text-gray-900">₹{service.price}</div>
                        <div className="text-xs sm:text-sm text-gray-500">30 minutes</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleBack}
                  className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm sm:text-base"
                >
                  <ArrowLeft className="w-4 h-4 inline mr-1 sm:mr-2" />
                  Back
                </button>
                <button
                  onClick={handleNext}
                  disabled={!validateStep()}
                  className="flex-1 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors text-sm sm:text-base font-medium"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Address Details */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <MapPin className="w-10 h-10 sm:w-12 sm:h-12 text-teal-600 mx-auto mb-2" />
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Your Address</h2>
                <p className="text-sm sm:text-base text-gray-600">Where should our consultant visit you?</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Complete Address</label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm sm:text-base"
                    placeholder="Enter your complete address with landmarks"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm sm:text-base"
                      placeholder="Your city"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">PIN Code</label>
                    <input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleInputChange}
                      maxLength={6}
                      className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm sm:text-base"
                      placeholder="PIN Code"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="bg-teal-50/80 backdrop-blur-sm rounded-lg p-4 border border-teal-100/50">
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-teal-900">Quick Service Promise</p>
                    <p className="text-xs sm:text-sm text-teal-700">Our consultant will reach your location within 30 minutes of booking confirmation</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleBack}
                  className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm sm:text-base"
                >
                  <ArrowLeft className="w-4 h-4 inline mr-1 sm:mr-2" />
                  Back
                </button>
                <button
                  onClick={handleNext}
                  disabled={!validateStep()}
                  className="flex-1 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors text-sm sm:text-base font-medium"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Payment */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <CreditCard className="w-10 h-10 sm:w-12 sm:h-12 text-teal-600 mx-auto mb-2" />
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Payment Summary</h2>
                <p className="text-sm sm:text-base text-gray-600">Review your home visit booking</p>
              </div>

              {/* Booking Summary */}
              <div className="bg-gray-50/80 backdrop-blur-sm rounded-lg p-4 sm:p-6 space-y-3 sm:space-y-4 border border-gray-100/50">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                  <span className="text-sm sm:text-base text-gray-600">Name:</span>
                  <span className="font-medium text-sm sm:text-base">{formData.name}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                  <span className="text-sm sm:text-base text-gray-600">Email:</span>
                  <span className="font-medium text-sm sm:text-base break-all">{formData.email}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                  <span className="text-sm sm:text-base text-gray-600">Phone:</span>
                  <span className="font-medium text-sm sm:text-base">{formData.phone}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                  <span className="text-sm sm:text-base text-gray-600">Service:</span>
                  <span className="font-medium text-sm sm:text-base">{selectedService?.name}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                  <span className="text-sm sm:text-base text-gray-600">Address:</span>
                  <span className="font-medium text-sm sm:text-base">{formData.address}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                  <span className="text-sm sm:text-base text-gray-600">City:</span>
                  <span className="font-medium text-sm sm:text-base">{formData.city}, {formData.pincode}</span>
                </div>
                <div className="border-t pt-3 sm:pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total Amount:</span>
                    <span className="text-teal-600">₹{selectedService?.price}</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleBack}
                  className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm sm:text-base"
                >
                  <ArrowLeft className="w-4 h-4 inline mr-1 sm:mr-2" />
                  Back
                </button>
                <button
                  onClick={handlePayment}
                  disabled={isProcessing}
                  className="flex-1 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors text-sm sm:text-base font-medium"
                >
                  {isProcessing ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white mr-2"></div>
                      Processing...
                    </div>
                  ) : (
                    'Pay Now via Cashfree'
                  )}
                </button>
              </div>
            </div>
          )}

          {/* Step 5: Success */}
          {currentStep === 5 && (
            <div className="text-center space-y-6">
              <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-green-500 mx-auto" />
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Home Visit Booked!</h2>
                <p className="text-sm sm:text-base text-gray-600">Your consultant will arrive within 30 minutes.</p>
              </div>

              <div className="bg-green-50/80 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-green-100/50">
                <h3 className="font-semibold text-green-800 mb-2 text-sm sm:text-base">Booking Details</h3>
                <div className="text-xs sm:text-sm text-green-700 space-y-1">
                  <p><strong>Service:</strong> {selectedService?.name}</p>
                  <p><strong>Address:</strong> {formData.address}</p>
                  <p><strong>City:</strong> {formData.city}, {formData.pincode}</p>
                  <p><strong>Expected Arrival:</strong> Within 30 minutes</p>
                </div>
              </div>

              <div className="bg-teal-50/80 backdrop-blur-sm rounded-lg p-4 border border-teal-100/50">
                <div className="flex items-start justify-center">
                  <Home className="w-5 h-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-teal-900">What to Expect</p>
                    <p className="text-xs sm:text-sm text-teal-700">Our expert consultant will call you before arrival and bring all necessary documents</p>
                  </div>
                </div>
              </div>

              <div className="text-xs sm:text-sm text-gray-600 space-y-1">
                <p>A confirmation message has been sent to <strong className="break-all">{formData.email}</strong></p>
                <p>Our consultant will call you at <strong>{formData.phone}</strong> before arrival.</p>
              </div>

              <button
                onClick={() => {
                  setCurrentStep(1);
                  setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    service: '',
                    address: '',
                    city: '',
                    pincode: ''
                  });
                }}
                className="w-full py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors text-sm sm:text-base font-medium"
              >
                Book Another Home Visit
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Booking;
