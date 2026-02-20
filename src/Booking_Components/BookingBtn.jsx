// "use client";

// import { useRouter } from "next/navigation";

// export default function BottomCTA() {
//   const router = useRouter();

//   const handleClick = () => {
//     router.push("/booking");
//   };

//   return (                                                                          
//     <div className="lg:hidden fixed bottom-0 left-0 w-full z-50">
//       <div className="px-4 pb-5 pt-3">
//         <button
//           onClick={handleClick}
//           className="w-full py-3 text-lg font-semibold text-white 
//           rounded-full shadow-lg active:scale-95 transition-all 
//           bg-gradient-to-r from-purple-600 to-indigo-600"
//         >
//           60 Minutes Booking
//         </button>
//       </div>
//     </div>
//   );
// }

"use client";

import { useRouter } from "next/navigation";
import clsx from "clsx";

export default function BottomCTA({
  label = "Book Now",
  href = "/booking",
  onClick,
  className = "",
  isFixed = true,
}) {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) onClick();
    else router.push(href);
  };

  return (
    <div className={clsx(isFixed && "fixed bottom-0 left-0 w-full")}>
      <button
        onClick={handleClick}
        className={clsx(
          `
          w-full py-3 text-lg font-semibold text-white
          rounded-full shadow-lg
          active:scale-95 transition-all duration-200
          bg-[linear-gradient(279.02deg,_#592EFF_2%,_#9E05EB_100%)]
          `,
          className
        )}
      >
        {label}
      </button>
    </div>
  );
}
