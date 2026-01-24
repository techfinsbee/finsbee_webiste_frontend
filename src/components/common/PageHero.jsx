// "use client";

// import Image from "next/image";

// const PageHero = ({
//   title,
//   subtitle,
//   bgImage,
//   abstractImage,
//   height = "lg:h-[600px]",
//   children,
// }) => {
//   return (
//     <section className="relative w-full overflow-hidden">
//       {/* Background */}
//       <div
//         className={`
//           relative w-full
//           h-[37rem] sm:h-[38rem] md:h-[48rem] ${height}
//           rounded-b-[40px] sm:rounded-b-[60px] lg:rounded-[0px_0px_120px_120px]
//           overflow-hidden
//         `}
//       >
//         {/* Main Background Image */}
//         {bgImage && (
//           <Image
//             src={bgImage}
//             alt="Background"
//             fill
//             priority
//             className="object-cover"
//           />
//         )}

//         {/* Gradient Overlay */}
//         <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_100%,rgba(89,46,255,0.72)_32%,rgba(49,25,140,0.9)_100%)]" />

//         {/* Abstract Overlay */}
//         {abstractImage && (
//           <Image
//             src={abstractImage}
//             alt="Abstract design"
//             fill
//             className="object-cover opacity-90 mix-blend-lighten"
//           />
//         )}

//         {/* Content */}
//         <div className="relative  md:w-[890px] z-10 pt-20 sm:pt-28 md:pt-48">
//           <div className="px-4  md:px-[136px]">
//             <h1 className="font-bold text-yellow-400 text-2xl sm:text-4xl md:text-4xl leading-normal">
//               {title}
//             </h1>

//             {subtitle && (
//               <p className="mt-4 text-[#FFEEC3] text-lg md:text-xl max-w-2xl">
//                 {subtitle}
//               </p>
//             )}

//             {children && <div className="mt-8">{children}</div>}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PageHero;




"use client";

import Image from "next/image";
import clsx from "clsx";

const PageHero = ({
  title,
  subtitle,
  bgImage,
  abstractImage,
  height = {
    // base: "h-[37rem]",
    // sm: "sm:h-[38rem]",
    // md: "md:h-[48rem]",
    // lg: "lg:h-[600px]",
     base: "h-[15rem]",
    sm: "sm:h-[20rem]",
    md: "md:h-[25rem]",
    lg: "lg:h-[30rem]",
  },
  children,
}) => {
  return (
    <section className="relative w-full overflow-hidden">
      <div
        className={clsx(
          "relative w-full overflow-hidden",
          "rounded-b-[40px] sm:rounded-b-[60px] lg:rounded-[0px_0px_120px_120px]",
          height.base,
          height.sm,
          height.md,
          height.lg
        )}
      >
        {/* Background */}
        {bgImage && (
          <Image
            src={bgImage}
            alt="Background"
            fill
            priority
            className="object-cover"
          />
        )}

        {/* Gradient Overlay */}
        {/* <div className="absolute inset-0  radial-gradient(100% 100% at 50% 100%, rgba(89,46,255), rgba(49,25,140,0.7) 100%)" /> */}
        <div
  className="absolute inset-0  bg-[radial-gradient(100%_100%_at_50%_100%,rgba(89,46,255,1),rgba(49,25,140,0.7)_100%)]"
/>

        {/* Abstract Overlay */}
        {abstractImage && (
          <Image
            src={abstractImage}
            alt="Abstract design"
            fill
            className="object-cover opacity-90 mix-blend-lighten"
          />
        )}

        {/* Content */}
        <div className="relative z-10 pt-25 mx-10  md:pt-30 lg:pt-48">
          <div className="px-4 md:px-[136px] md:max-w-[890px]">
            <h1 className="font-bold text-yellow-400 text-2xl sm:text-4xl md:text-4xl leading-normal">
              {title}
            </h1>

            {subtitle && (
              <p className="mt-4 text-[#FFEEC3] text-lg md:text-xl max-w-2xl">
                {subtitle}
              </p>
            )}

            {children && <div className="mt-8">{children}</div>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHero;



