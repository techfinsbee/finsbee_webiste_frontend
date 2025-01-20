import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#E6D5C3] text-gray-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Top section with logo and sign up button */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-4 sm:mb-0">
            <img 
              src="/logo.png" 
              alt="FUNDSMAMA" 
              className="h-24 mr-2"
            />
          </div>
          <button className="bg-[#C4957E] text-white px-6 py-2 rounded-lg hover:bg-[#B3846D] transition-colors">
            Sign up for Updates
          </button>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div>
            <ul className="space-y-2">
              <li><a href="/privacy-policy" className="text-xl font-semibold hover:text-gray-600 ">Privacy Policy</a></li>
              <li><a href="/terms-and-conditions" className="text-xl font-semibold hover:text-gray-600">Terms & Condition</a></li>
              <li><a href="/credit-score" className="text-xl font-semibold hover:text-gray-600">Credit Score</a></li>
              <li><a href="/fm-calculator" className="text-xl font-semibold hover:text-gray-600">FM's Calculator</a></li>
              <li><a href="/lending-partners" className="text-xl font-semibold hover:text-gray-600">Our Lending Partners</a></li>
              <li><a href="/brands" className="text-xl font-semibold hover:text-gray-600">Our Brands</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <ul className="space-y-2">
              <li><a href="/about-us" className="text-xl font-semibold hover:text-gray-600">About Us</a></li>
              <li><a href="contact-us" className="text-xl font-semibold hover:text-gray-600">Contact Us</a></li>
              <li><a href="/our-partners" className="text-xl font-semibold hover:text-gray-600">Our Partners</a></li>
              <li><a href="/security" className="text-xl font-semibold hover:text-gray-600">Security</a></li>
              <li><a href="/grievance-redressal" className="text-xl font-semibold hover:text-gray-600">Grievance Redressal</a></li>
            </ul>
          </div>

          {/* Column 3 - Contact Info */}
          <div>
            <ul className="space-y-2">
              <li>
                <a href="mailto:Info@fundsmama.com" className="text-xl font-semibold hover:text-gray-600 underline">
                  Info@fundsmama.com  
                </a>
              </li>
              <li className="text-xl font-semibold hover:text-gray-600">L42 ,Lajpat Nagar</li>
              <li className="text-xl font-semibold hover:text-gray-600">2,Newdelhi-110042</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Sign Up Section */}
      
    </footer>
  );
};

export default Footer;