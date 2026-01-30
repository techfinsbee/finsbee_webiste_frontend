"use client";

import Image from "next/image";

export default function FinanceClassCard() {
  return (
    <div className="min-h-screen relative bg-[#FAFAFA] flex flex-col items-center pt-12">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/booking/planbg.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Logo */}
      <div className="w-full flex justify-start">
        <div
          className="flex flex-col w-[130px] sm:w-[140px] md:w-[171.83px] cursor-pointer items-start gap-2 ml-4 sm:ml-8 md:ml-11 mt-2 -translate-y-4 animate-fade-in opacity-0 bg-[#592eef] rounded-xl p-2"
          onClick={() => (window.location.href = "/")}
        >
          <img
            className="relative w-full h-[40px] sm:h-[50px] md:h-[55.38px] object-cover"
            alt="Finsbee transparent"
            src="/FinsbeeLogo.svg"
            width={155.83}
            height={55.38}
          />
        </div>
      </div>
      <div
        className="relative  md:w-[640px] md:h-[469px] rounded-[16px] bg-white p-3 sm:p-12 border-2 border-[#FFEEC3] m-2  sm:mt-12"
        style={{
          //   boxShadow: "0 20px 40px rgba(0,0,0,0.08), inset 0 0 0 2px #fde9b4",
          //   boxShadow: "0px 4px 12px rgba(0, 12, 0, 0.16))",
          boxShadow: "0px 4px 12px rgba(17, 24, 39, 0.16)",
        }}
      >
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-start justify-between ">
          {/* Left Content */}
          <div className="md:max-w-[442px] md:h-[106px]">
            <p className="text-[15px] sm:text-[20px] font-semibold text-[#7b7b7b] mb-2">
              Introducing <span className="text-black">Finance Classes</span>
            </p>

            <h1 className="text-[22px] sm:text-[32px] leading-[1] font-extrabold text-black">
              Join <span className="text-[#5b4bff] font-extrabold">free</span>{" "}
              finance classes
              <br />
              by Experts on{" "}
              <span className="text-[#5b4bff] font-extrabold">Zoom</span>
            </h1>

            <p className="mt-2 sm:mt-4 text-[22px] sm:text-[24px]  text-black">
              Starting from{" "}
              <span className="text-[#5b4bff] font-bold">3 Feb</span>
            </p>
          </div>

          {/* Right Illustration */}
          <div className="shrink-0 w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] relative">
            <Image
              src="/webinar.webp"
              alt="Zoom Class"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>

        {/* Language Cards */}
        <div className="mt-5 sm:mt-10 grid grid-cols-2  md:grid-cols-2 gap-2 sm:gap-6">
          {/* Hindi */}
          <div className="flex items-center gap-4 h-[67px] bg-[#E9E9E966] border border-[#d9d9d9] sm:px-6 sm:py-4">
            <div className="flex items-center justify-center w-[32px] h-[32px]">
              <Image
                src="/calendar.webp"
                alt="Calendar"
                width={24}
                height={24}
                className="object-contain"
              />
            </div>

            <div>
              <p className="text-[20px] font-bold text-black">Hindi</p>
              <p className="text-[16px] text-[#6b6b6b]">Saturday</p>
            </div>
          </div>

          {/* English */}
          <div className="flex items-center h-[67px] gap-4 bg-[#E9E9E966]  border border-[#d9d9d9]  sm:px-6 sm:py-4">
            <div className="flex items-center justify-center w-[32px] h-[32px]">
              <Image
                src="/calendar.webp"
                alt="Calendar"
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
            <div>
              <p className="text-[20px] font-bold text-black">English</p>
              <p className="text-[16px] text-[#6b6b6b]">Tuesday</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8">
          {/* <a
            href="https://chat.whatsapp.com/JlWVMfZCz1eCKVr8QU20PC"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full cursor-pointer"
          >
            <button className=" w-[280px] xs:w-full sm:w-full rounded-[8px] cursor-pointer bg-[#FFD263]  h-[60px] text-[18px] sm:text-[22px] font-extrabold text-black transition hover:bg-[#f6d164]">
              Join Class Whatsapp Community
            </button>
          </a> */}
          <a
            href="https://chat.whatsapp.com/JlWVMfZCz1eCKVr8QU20PC"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full cursor-pointer"
            onClick={() => {
              if (typeof fbq === "function") {
                fbq("trackCustom", "whatsapp_community_join_click");
              }
            }}
          >
            <button className="w-[280px] xs:w-full sm:w-full rounded-[8px] cursor-pointer bg-[#FFD263] h-[60px] text-[18px] sm:text-[22px] font-extrabold text-black transition hover:bg-[#f6d164]">
              Join Class Whatsapp Community
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
