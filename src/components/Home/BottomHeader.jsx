import { Clock } from 'lucide-react';

import { useNavigate } from "react-router-dom";

const BottomHeader = ({
  showContactInfo = true,
  customText = "Book Your 60 Min Consultant",
}) => {
  const navigate = useNavigate();

  const handleBookingClick = () => {
    navigate("/booking");
  };
 
  return (
<div className="fixed bottom-0 left-0 right-0 z-50 bg-yellow backdrop-blur-md border-t border-gray-200/50 shadow-[0_0_20px_rgba(0,0,0,0.4)] py-5">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Left side - Company info */}
          {showContactInfo && (
            <div className="hidden sm:flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="text-base text-gray-600">
                  {/* Left content */}
                </div>
              </div>
            </div>
          )}
          
          {/* Center - Main CTA */}
          <div className="flex-1 sm:flex-none">
            <button 
               onClick={handleBookingClick}
              className="w-full sm:w-auto bg-gradient-to-r from-yellow-500 to-yellow-500 hover:from-yellow-600 hover:to-yellow-600 text-black font-semibold py-4 px-8 rounded-full transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-3 text-lg"
            >
              <Clock className="w-6 h-6" />
              <span>{customText}</span>
            </button>
          </div>
          
          {/* Right side - Contact info */}
          {showContactInfo && (
            <div className="hidden sm:flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="text-base text-gray-600">
                  {/* Right content */}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BottomHeader;