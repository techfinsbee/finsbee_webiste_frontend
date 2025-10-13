// import { ArrowRight } from "lucide-react";
// import React from "react";
// import { motion } from "framer-motion";

// export const Header = () => {
//     const navigationItems = [
//         { label: "Loan", active: true },
//         { label: "Insurance", active: false },
//         { label: "Investment", active: false },
//     ];

//     return (
//         <section
//             className="flex flex-col h-[856px] items-start gap-24 relative rounded-b-[120px] bg-gradient-to-b from-gray-800/70 via-gray-900/90 to-gray-900 bg-cover bg-center bg-no-repeat"
//             style={{
//                 backgroundImage: `radial-gradient(50% 50% at 50% 100%, rgba(33,33,33,0.72) 32%, rgba(33,33,33,0.9) 100%), url(https://c.animaapp.com/mfrfs2g1ZfgUJE/img/1-section.png)`,
//             }}
//         >
//             <main className="flex items-center px-0 py-0 mt-56 relative w-full">
//                 <div className="flex flex-col items-start gap-6 pl-[136px] pr-0 py-12 relative flex-1">
//                     <div className="flex items-center justify-center relative w-full">
//                         <h2
//                             className="relative flex-1 font-bold text-[32px] text-gray-100 tracking-wide leading-normal -translate-y-4 animate-fade-in opacity-0"
//                             style={{ animationDelay: "600ms" }}
//                         >
//                             Building Wealth with Trust
//                         </h2>
//                     </div>

//                     <div className="flex flex-col items-center gap-3.5 relative w-full">
//                         <h1
//                             className="relative w-full font-bold text-[64px] text-yellow-400 leading-normal -translate-y-4 animate-fade-in opacity-0"
//                             style={{ animationDelay: "800ms" }}
//                         >
//                             Secure your future -discover the power of gold and silver
//                             investment
//                         </h1>
//                     </div>

//                     <button
//                         className="inline-flex items-center justify-center gap-2.5 px-7 py-4 relative bg-yellow-400 rounded-[28px] border border-yellow-300 hover:bg-yellow-300 transition-colors -translate-y-4 animate-fade-in opacity-0"
//                         style={{ animationDelay: "1000ms" }}
//                     >
//                         <span className="relative font-bold text-base text-gray-800 tracking-wide leading-5 whitespace-nowrap">
//                             Start Saving Now
//                         </span>

//                         <ArrowRight className="relative w-6 h-6 text-gray-800" />
//                     </button>
//                 </div>



//                 <div className="flex h-[434px] w-[511px] hidden lg:block items-center justify-center relative">
//                     {/* Container for both bars */}
//                     <div className="relative flex h-[353px] w-[406px] gap-3 items-end">
//                         {/* Gold Bar */}
//                         <motion.div
//                             className="bg-black rounded-t-[20px] border-t-[3px] border-r-2 border-l-2  border-yellow-300 overflow-hidden"
//                             style={{ originY: 1 }} // bottom fixed
//                             animate={{
//                                 height: ["75px", "347px"],
//                                 width: ["99px", "400px"], // grows/shrinks width
//                             }}
//                             transition={{
//                                 duration: 2,
//                                 repeat: Infinity,
//                                 repeatType: "reverse",
//                                 repeatDelay: 1,
//                                 ease: "easeInOut",
//                             }}
//                         >
//                             <motion.img
//                                 src="https://c.animaapp.com/mfrfs2g1ZfgUJE/img/cf619aae8d1a0bde2188775c801b914d-1.png"
//                                 alt="Gold bar"
//                                 className="w-full h-full object-cover rounded-t-[20px] items-center gap-2.5 p-2.5 relative   bg-black"
//                                 style={{ originY: 1 }}
//                                 animate={{
//                                     height: ["75px", "228.4px"],
//                                     width: ["99px", "380px"],
//                                 }}
//                                 transition={{
//                                     duration: 2,
//                                     repeat: Infinity,
//                                     repeatType: "reverse",
//                                     repeatDelay: 1,
//                                     ease: "easeInOut",
//                                 }}
//                             />
//                         </motion.div>

//                         {/* Silver Bar */}
//                         <motion.div
//                             className="bg-black rounded-t-[20px] overflow-hidden border-t-[3px] border-r-2 border-l-2 border-yellow-300"
//                             style={{ originY: 1 }} // bottom fixed
//                             animate={{
//                                 height: ["347px", "75px"],
//                                 width: ["400px", "99px"],
//                             }}
//                             transition={{
//                                 duration: 2,
//                                 repeat: Infinity,
//                                 repeatType: "reverse",
//                                 repeatDelay: 1,
//                                 ease: "easeInOut",
//                                 delay: 0.1,
//                             }}
//                         >
//                             <motion.img
//                                 src="https://c.animaapp.com/mfrfs2g1ZfgUJE/img/cf619aae8d1a0bde2188775c801b914d-1-1.png"
//                                 alt="Silver bar"
//                                 className="w-full h-full object-cover  rounded-t-[20px] items-start gap-2.5 p-2.5  relative   bg-black"
//                                 style={{ originY: 1 }}
//                                 animate={{
//                                     height: ["280.4px", "75px"],
//                                     width: ["380px", "99px"],
//                                 }}
//                                 transition={{
//                                     duration: 2,
//                                     repeat: Infinity,
//                                     repeatType: "reverse",
//                                     repeatDelay: 1,
//                                     ease: "easeInOut",
//                                     delay: 0.1,
//                                 }}
//                             />
//                         </motion.div>
//                     </div>
//                 </div>
//             </main>

//             <img
//                 className="absolute top-0 left-px w-[759px] h-[611px]"
//                 alt="Abstract design"
//                 src="https://c.animaapp.com/mfrfs2g1ZfgUJE/img/abstract-design.svg"
//             />
//         </section>
//     );
// };


import { ArrowRight } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

export const Header = () => {
  return (
    <section
      className="flex flex-col items-start justify-center h-auto lg:min-h-screen  relative rounded-b-[60px] lg:rounded-b-[120px] bg-gradient-to-b from-gray-800/70 via-gray-900/90 to-gray-900 bg-cover bg-center bg-no-repeat px-6 sm:px-10 md:px-16"
      style={{
        backgroundImage: `radial-gradient(50% 50% at 50% 100%, rgba(33,33,33,0.72) 32%, rgba(33,33,33,0.9) 100%), url(https://c.animaapp.com/mfrfs2g1ZfgUJE/img/1-section.png)`,
      }}
    >
      {/* Main Content */}
      <main className="flex flex-col-reverse lg:flex-row items-center justify-between w-full mt-20 lg:mt-56 gap-10 lg:gap-0">
        {/* Left Section (Text Content) */}
        <div className="flex flex-col items-start gap-6  pb-2 lg:text-left w-full lg:w-1/2">
          <h2
            className="font-bold text-2xl sm:text-3xl md:text-4xl text-gray-100 tracking-wide leading-normal animate-fade-in opacity-0"
            style={{ animationDelay: "600ms" }}
          >
            Building Wealth with Trust
          </h2>

          <h1
            className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-yellow-400 leading-snug animate-fade-in opacity-0"
            style={{ animationDelay: "800ms" }}
          >
            Secure your future — discover the power of gold and silver investment
          </h1>

          <button
            className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3 sm:py-4 bg-yellow-400 rounded-[28px] border border-yellow-300 hover:bg-yellow-300 transition-colors animate-fade-in opacity-0 mt-4"
            style={{ animationDelay: "1000ms" }}
          >
            <span className="font-bold text-sm sm:text-base text-gray-800 tracking-wide leading-5 whitespace-nowrap">
              Start Saving Now
            </span>
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
          </button>
        </div>

        {/* Right Section (Animation Bars) */}
        <div className="hidden lg:flex items-center justify-center relative w-full lg:w-[511px] h-[300px] sm:h-[380px] md:h-[420px] lg:h-[434px]">
          {/* Hide animation on small devices for performance */}
          <div className="hidden lg:flex relative gap-3 items-end h-[250px] sm:h-[353px] w-[300px] sm:w-[406px]">
            {/* Gold Bar */}
            <motion.div
              className="bg-black rounded-t-[16px] border-t-[3px] border-x-2 border-yellow-300 overflow-hidden"
              style={{ originY: 1 }}
              animate={{
                height: ["75px", "347px"],
                width: ["99px", "400px"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 1,
                ease: "easeInOut",
              }}
            >
              <motion.img
                src="https://c.animaapp.com/mfrfs2g1ZfgUJE/img/cf619aae8d1a0bde2188775c801b914d-1.png"
                alt="Gold bar"
                className="w-full h-full object-cover rounded-t-[16px] bg-black p-2"
                animate={{
                  height: ["75px", "228.4px"],
                  width: ["99px", "380px"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 1,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Silver Bar */}
            <motion.div
              className="bg-black rounded-t-[16px] overflow-hidden border-t-[3px] border-x-2 border-yellow-300"
              style={{ originY: 1 }}
              animate={{
                height: ["347px", "75px"],
                width: ["400px", "99px"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 1,
                ease: "easeInOut",
                delay: 0.1,
              }}
            >
              <motion.img
                src="https://c.animaapp.com/mfrfs2g1ZfgUJE/img/cf619aae8d1a0bde2188775c801b914d-1-1.png"
                alt="Silver bar"
                className="w-full h-full object-cover rounded-t-[16px] bg-black p-2"
                animate={{
                  height: ["280.4px", "75px"],
                  width: ["380px", "99px"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 1,
                  ease: "easeInOut",
                  delay: 0.1,
                }}
              />
            </motion.div>
          </div>
        </div>
      </main>

      {/* Decorative SVG */}
      <img
        className="absolute top-0 left-0 w-[400px] sm:w-[600px] md:w-[759px] h-auto"
        alt="Abstract design"
        src="https://c.animaapp.com/mfrfs2g1ZfgUJE/img/abstract-design.svg"
      />
    </section>
  );
};
