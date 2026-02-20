

import { User } from 'lucide-react';

const REQUIRED_FIELDS = ['name', 'email', 'phone', 'DOB', 'PAN', 'pincode', 'gender'];



const ProfileBanner = ({ profileData = {}, onClose }) => {
  const totalFields = REQUIRED_FIELDS.length;
  const filledCount = REQUIRED_FIELDS.filter(field => profileData?.[field]?.trim()).length;
  const completion = Math.round((filledCount / totalFields) * 100);




  if (completion === 100) return null; // Hide if complete

  // return (
  //   <div className="mt-6 mb-6 sm:px-6">
  //     <div
  //       className="p-4 sm:p-5 rounded-2xl transition-all duration-300"
  //       style={{
  //         background: '#ffffff',
  //         boxShadow:
  //           '8px 8px 16px rgba(163, 177, 198, 0.4), -8px -8px 16px rgba(255, 255, 255, 0.8)',
  //         border: '1px solid #f3f4f6',
  //       }}
  //     >
  //       <div className="flex justify-between items-center">
  //         {/* Left: Icon + Text */}
  //         <div className="flex items-center space-x-3">
  //           <div
  //             className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center"
  //             style={{
  //               background: 'linear-gradient(135deg, #f87171 0%, #f87171 100%)',
  //               boxShadow:
  //                 'inset 2px 2px 6px rgba(248, 113, 113, 0.3), inset -2px -2px 6px rgba(255, 255, 255, 0.6)',
  //             }}
  //           >
  //             <User className="text-white w-4 h-4 sm:w-5 sm:h-5" />
  //           </div>
  //           <span className="text-black font-medium text-sm sm:text-base tracking-wide">
  //             Profile {completion}% Complete
  //           </span>
  //         </div>

  //         {/* Right: Buttons */}
  //         <div className="flex items-center space-x-2">
  //           <button
  //             className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white text-black text-xs sm:text-sm font-semibold rounded-xl transition-all hover:bg-gray-100"
  //             style={{
  //               boxShadow:
  //                 'inset 2px 2px 6px rgba(163, 177, 198, 0.3), inset -2px -2px 6px rgba(255, 255, 255, 0.7)',
  //             }}
  //           >
  //             Update
  //           </button>
  //           {onClose && (
  //             <button
  //               onClick={onClose}
  //               className="text-black hover:text-teal-700 font-bold text-lg sm:text-xl transition-all"
  //             >
  //               ×
  //             </button>
  //           )}
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default ProfileBanner;
