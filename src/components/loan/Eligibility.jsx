


"use client";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

const ELIGIBILITY_IMAGES = [
  "/loan_Page/pic2.png",
  "/loan_Page/pic1.png",
];

const Eligibility = ({ data }) => {
  const entries = Object.entries(data);

  return (
   <section className="flex flex-col items-center gap-12 px-4 sm:px-6 md:px-8 lg:px-[136px]  mx-auto">
  <div className="w-full max-w-[1400px]">
    <div className="bg-white rounded-2xl shadow-[0_10px_10px_rgba(0,0,0,0.12)] border border-gray-100 p-8 md:p-12">
      {/* Heading */}
      <div className="justify-self-center max-w-2xl px-3 pb-3">
        <p className="justify-self-center text-gray-600 font-bold text-sm tracking-wide uppercase">
          The Results Speak for Themselves
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-800">
          Eligibility Criteria
        </h1>
      </div>

      {/* Cards */}
      <div className="flex flex-col lg:flex-row items-start gap-6 w-full">
        {entries.map(([title, criteria], index) => {
          const imageSrc = ELIGIBILITY_IMAGES[index] || ELIGIBILITY_IMAGES[0];

          return (
            <div
              key={title}
              className="bg-white p-6 rounded-lg lg:rounded-none 
                         lg:first:rounded-l-lg lg:last:rounded-r-lg 
                         lg:[&:not(:first-child)]:border-l 
                         lg:border-dashed lg:border-gray-300 flex-1"
            >
              <div className="flex flex-col lg:flex-row items-start justify-between gap-6">
                
                {/* Text */}
                <div className="flex flex-col gap-6 flex-1">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-normal text-gray-800">
                    {title}
                  </h2>

                  <ul className="flex flex-col gap-4">
                    {criteria.map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle className="w-6 h-6 text-gray-800 flex-shrink-0" />
                        <span className="text-gray-800 text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image */}
                <div className="flex items-center justify-center flex-shrink-0">
                  <Image
                    src={imageSrc}
                    alt={title}
                    width={208}
                    height={208}
                    className="w-24 h-24 sm:w-32 sm:h-32 md:w-52 md:h-52 object-contain rounded-lg"
                  />
                </div>

              </div>
            </div>
          );
        })}
      </div>
      </div>
      </div>
    </section>
  );
};

export default Eligibility;
