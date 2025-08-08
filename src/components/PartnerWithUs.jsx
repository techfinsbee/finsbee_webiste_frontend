import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer"

const PartnerWithUs = () => {
  const dropdownData = [
    
    { title: "Loans", link: "loan-section-home" },
    // { title: "MamaMart", link: "mart-home" },
    { title: "About Us", link: "/aboutus" },
    { title: "Contact Us", link: "contact-us" },
  ];

  return (
    <div className="bg-white min-h-screen">
      <Navbar
        dropdownData={dropdownData}
        COLOR="#fff"
        Hover="home"
        TXTCOLOR="#"
      />
      
      <div className="container mx-auto pt-[5rem] pb-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-[#163312]">Partner With Us</h1>
        
        {/* Content similar to your existing component structure */}
        <div className="bg-[#f9f9f9] rounded-lg shadow-md p-6 md:p-10 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#ffc73c]">Join Our Affiliate Network</h2>
          
          {/* Partner content */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">Why Partner With FinsBee?</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li>Earn competitive commissions on every successful referral</li>
              <li>Access to comprehensive marketing materials</li>
              <li>Dedicated affiliate support team</li>
              <li>Real-time tracking and reporting</li>
              <li>Monthly payments with low payout thresholds</li>
            </ul>
          </div>
          
          {/* Form section */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-left">Become a Partner Today</h3>
            <form className="space-y-4">
              {/* Form fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffc73c]" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffc73c]" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffc73c]" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Website/Platform</label>
                  <input type="text" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffc73c]" />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">How do you plan to promote FinsBee?</label>
                <textarea className="w-full px-4 py-2 border rounded-md h-28 focus:outline-none focus:ring-2 focus:ring-[#ffc73c]"></textarea>
              </div>
              
              <div className="flex items-center">
                <input type="checkbox" id="terms" className="mr-2" />
                <label htmlFor="terms" className="text-gray-700">I agree to the terms and conditions</label>
              </div>
              
              <div className="text-center">
                <button type="submit" className="bg-[#ffc73c] text-black font-medium px-8 py-3 rounded-md hover:bg-[#ffc73c] transition-colors">Submit Application</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      <Footer COLOR="#ffc73c" />
    </div>
  );
};

export default PartnerWithUs;