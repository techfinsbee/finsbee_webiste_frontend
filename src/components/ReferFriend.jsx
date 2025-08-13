import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";

const ReferFriend = () => {
  const dropdownData = [
    
    { title: "Loans", link: "loan-section-home" },
    // { title: " ", link: "mart-home" },
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
      
      <div className="container mx-auto pt-20 pb-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-[#163312]">Refer a Friend</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#ffc73c] to-[#ffc73c] text-black rounded-t-lg p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Earn ₹500 for Every Friend You Refer!</h2>
            <p className="text-lg">When your friend gets a loan approved, both of you get rewarded.</p>
          </div>
          
          <div className="bg-white shadow-lg rounded-b-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#f4f1c8] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#000] text-xl font-bold">1</span>
                </div>
                <h3 className="font-semibold mb-2">Share Your Referral Code</h3>
                <p className="text-gray-600">Share your unique referral code with friends via WhatsApp, Email, or SMS</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#f4f1c8] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#000] text-xl font-bold">2</span>
                </div>
                <h3 className="font-semibold mb-2">Friend Takes a Loan</h3>
                <p className="text-gray-600">Your friend downloads the app and gets a loan approved</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#f4f1c8] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#000] text-xl font-bold">3</span>
                </div>
                <h3 className="font-semibold mb-2">Both Get Rewarded</h3>
                <p className="text-gray-600">You get ₹500 and your friend gets ₹200 as a welcome bonus</p>
              </div>
            </div>
            
            {/* Referral code section */}
            <div className="bg-[#f9f9f9] p-6 rounded-lg mb-8">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-lg font-semibold mb-1">Your Unique Referral Code</h3>
                  <div className="flex items-center">
                    <span className="bg-white border border-gray-300 px-4 py-2 rounded-l-md font-mono text-lg">FUNDS2023</span>
                    <button className="bg-[#ffc73c] text-black px-4 py-2 rounded-r-md hover:bg-[#ffc73c] transition-colors">Copy</button>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <button className="bg-[#25D366] text-white p-3 rounded-full hover:opacity-90 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                    </svg>
                  </button>
                  <button className="bg-blue-500 text-white p-3 rounded-full hover:opacity-90 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                    </svg>
                  </button>
                  <button className="bg-gray-500 text-white p-3 rounded-full hover:opacity-90 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
                      <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer COLOR="#ffc73c" />
    </div>
  );
};

export default ReferFriend;