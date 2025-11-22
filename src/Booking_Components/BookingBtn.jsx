"use client";

import { useRouter } from "next/navigation";

export default function BottomCTA() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/booking");
  };

  return (                                                                          
    <div className="lg:hidden fixed bottom-0 left-0 w-full z-50">
      <div className="px-4 pb-5 pt-3">
        <button
          onClick={handleClick}
          className="w-full py-3 text-lg font-semibold text-white 
          rounded-full shadow-lg active:scale-95 transition-all 
          bg-gradient-to-r from-purple-600 to-indigo-600"
        >
          60 Minutes Booking
        </button>
      </div>
    </div>
  );
}
