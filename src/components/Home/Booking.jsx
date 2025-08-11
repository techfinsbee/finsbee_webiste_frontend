import React, { useState,useEffect } from 'react';
import { MapPin, Clock, User,CreditCard, CheckCircle, ArrowLeft, Home } from 'lucide-react';
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

 const isValidDelhiPincode = (pincode) => /^1100[0-9]{2}$/.test(pincode);
  const BASE_URL ='https://booking.apifundstech.com';



  const carouselItems = [
  "✅ Explain your best options clearly",
  "✅ Guide you on documents and eligibility",
  "✅ Help you apply",
];

   const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselItems.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);


  const services = [
    { id: 'loan', name: 'Loan Consultation', price: 399, description: 'Personal & Business Loan Guidance at Your Home' },
    { id: 'insurance', name: 'Insurance Advisory', price: 399, description: 'Life, Health & General Insurance at Your Doorstep' },
    { id: 'mutual_funds', name: 'Mutual Funds', price: 399, description: 'Investment Planning & Portfolio Review at Home' }
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

  const [bookingId, setBookingId] = useState(null);

 const saveStep = async (payload) => {
  try {
    const res = await fetch(`${BASE_URL}/api/bookings/step`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...payload, bookingId }),
      credentials: 'include'
    });

    const data = await res.json();
    console.log("✅ Booking API Response:", data); // ADD THIS

    if (data.bookingId) setBookingId(data.bookingId);
  } catch (err) {
    console.error("Error saving step data:", err);
  }
};



 const handleNext = async () => {
  if (!validateStep()) return;

  if (currentStep === 1) {
    await saveStep({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
    });
  } else if (currentStep === 2) {
    const priceMap = { loan: 399, insurance: 399, mutual_funds: 399 };
    await saveStep({
      service: formData.service,
      price: priceMap[formData.service] || 0,
    });
  } else if (currentStep === 3) {

     if (!isValidDelhiPincode(formData.pincode)) {
      alert("📍 We're expanding soon! Currently, bookings are only accepted for Delhi (PIN codes starting with 110XXX).");
      return;
    }
    await saveStep({
      address: formData.address,
      city: formData.city,
      pincode: formData.pincode,
    });
  }

  setCurrentStep(prev => prev + 1);
};



  const handleBack = () => {
    setCurrentStep(prev => prev - 1);
  };


if (!formData.price) {
  formData.price = services.find(s => s.id === formData.service)?.price || 0;
}


// const handlePayment = async () => {
//   setIsProcessing(true);

//   try {
//     const payload = {
//       bookingId,
//       time: '10:00 AM'
//     };
//     console.log(payload);

//     const res = await fetch(`${BASE_URL}/api/bookings/create`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(payload),
//       credentials: 'include'
//     });

//     const data = await res.json();
//     if (!res.ok) throw new Error(data?.message || 'Failed to book');

//     //console.log("✅ Booking API Response:", data);
//     setCurrentStep(5);

//     // let sessionId = data?.sessionId;
//     // if (!sessionId) throw new Error('No session ID received');

//     // // 🧼 Strip "payment" suffix if accidentally present
//     // sessionId = sessionId.replace(/payment$/, '');

//     // // 🔁 Correct Cashfree hosted checkout redirect
//     // const redirectUrl = `https://www.cashfree.com/pg/orders/${sessionId}`;
//     // console.log("➡️ Redirecting to:", redirectUrl);
//     // window.location.href = redirectUrl;

//   } catch (error) {
//     console.error('❌ Booking error:', error);
//     alert(error.message || 'There was a problem booking your visit.');
//   } finally {
//     setIsProcessing(false);
//   }
// };

  const handlePayment = () => {
  const rzpPaymentLink = "https://rzp.io/rzp/bvPI7AiM";
  window.location.href = rzpPaymentLink;
};


 const STATIC_QR_IMAGE_URL = "/QrCode.jpeg"; // Assuming it's in /public folder
 const WHATSAPP_NUMBER = "919999999999";


  const selectedService = services.find(s => s.id === formData.service);
  const today = new Date().toISOString().split('T')[0];



  return (

    <>
     <style>{`
    @media screen and (max-width: 620px) {
      html, body {
        padding-top: 0px !important;
      }
    }
  `}</style>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100  sm:p-2  flex items-center justify-center">
      <div className="w-full max-w-2xl mx-auto">
        {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
        Need a Loan, Insurance, or Investment?
      </h1>

      <p className="text-sm sm:text-base text-gray-600 px-2 mb-4">
        A verified FundsMama advisor will visit your home or office in 60 mins
      </p>

      <div className="w-full max-w-md mx-auto mt-6 min-h-[2.5rem]">
        <p className="text-sm sm:text-base text-gray-700 px-4 transition-opacity duration-500 ease-in-out">
          {carouselItems[current]}
        </p>
      </div>
    </div>


     {/* Desktop Navbar */}
<div className="hidden sm:block">
  <Navbar />
</div>



       
        {/* Progress Bar */}
        <div className="mb-6 sm:mb-8">
          <div className="flex justify-between items-center">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className={`flex items-center ${step < 4 ? 'flex-1' : ''}`}>
                <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium ${
                  currentStep >= step ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {step}
                </div>
                {step < 4 && (
                  <div className={`flex-1 h-1 mx-1 sm:mx-2 ${
                    currentStep > step ? 'bg-blue-600' : 'bg-gray-200'
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
                <User className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mx-auto mb-2" />
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
                    className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
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
                    className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
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
                    className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
              </div>

              <button
                onClick={handleNext}
                disabled={!validateStep()}
                className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors text-sm sm:text-base font-medium"
              >
                Continue
              </button>
            </div>
          )}

          {/* Step 2: Service Selection */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <CreditCard className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mx-auto mb-2" />
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
                        ? 'border-blue-500 bg-blue-50'
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
                        <div className="text-xs sm:text-sm text-gray-500">60 minutes</div>
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
                  className="flex-1 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors text-sm sm:text-base font-medium"
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
                <MapPin className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mx-auto mb-2" />
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
                    className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
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
                      className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
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
                      className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                      placeholder="PIN Code"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="bg-blue-50/80 backdrop-blur-sm rounded-lg p-4 border border-blue-100/50">
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-blue-900">Quick Service Promise</p>
                    <p className="text-xs sm:text-sm text-blue-700">Our consultant will reach your location within 30 minutes of booking confirmation</p>
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
                  className="flex-1 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors text-sm sm:text-base font-medium"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Payment */}
    {currentStep === 4 && (
 <div className="space-y-6 text-center">
  <div className="mb-6">
    <CreditCard className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mx-auto mb-2" />
    <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Proceed to Payment</h2>
    <p className="text-sm sm:text-base text-gray-600">Click the button below to complete your payment.</p>
  </div>

  <div className="bg-gray-50/80 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-gray-100/50 space-y-2 text-left text-sm sm:text-base text-gray-700 max-w-md mx-auto">
    <div className="flex justify-between"><span>Name:</span><span>{formData.name}</span></div>
    <div className="flex justify-between"><span>Email:</span><span className="break-all">{formData.email}</span></div>
    <div className="flex justify-between"><span>Phone:</span><span>{formData.phone}</span></div>
    <div className="flex justify-between"><span>Service:</span><span>{selectedService?.name}</span></div>
    <div className="flex justify-between"><span>Amount:</span><span>₹{selectedService?.price}</span></div>
  </div>

  <div className="flex gap-3 mt-6">
    <button
      onClick={handleBack}
      className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm sm:text-base"
    >
      <ArrowLeft className="w-4 h-4 inline mr-1 sm:mr-2" />
      Back
    </button>

    <button
      onClick={handlePayment}
      className="flex-1 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm sm:text-base font-medium"
    >
      Pay Now
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
                  <p><strong>Expected Arrival:</strong> Within 60 minutes</p>
                </div>
              </div>

              <div className="bg-blue-50/80 backdrop-blur-sm rounded-lg p-4 border border-blue-100/50">
                <div className="flex items-start justify-center">
                  <Home className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-blue-900">What to Expect</p>
                    <p className="text-xs sm:text-sm text-blue-700">Our expert consultant will call you before arrival and bring all necessary documents</p>
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
                className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base font-medium"
              >
                Book Another Home Visit
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
    </>
    
  );
};

export default Booking;