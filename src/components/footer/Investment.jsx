import { ArrowRightIcon, ArrowUpIcon, MailIcon, PhoneIcon } from "lucide-react";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function InvestmentOptionsSection () {
  const socialIcons = [
    {
      src: "https://c.animaapp.com/mfj8sjndzkaKcu/img/vuesax-broken-instagram.svg",
      alt: "Social media icon",
    },
    {
      src: "https://c.animaapp.com/mfj8sjndzkaKcu/img/vuesax-broken-instagram.svg",
      alt: "Social media icon",
    },
    {
      src: "https://c.animaapp.com/mfj8sjndzkaKcu/img/vuesax-broken-instagram.svg",
      alt: "Social media icon",
    },
    {
      src: "https://c.animaapp.com/mfj8sjndzkaKcu/img/vuesax-broken-instagram.svg",
      alt: "Social media icon",
    },
  ];

  const navigationLinks = [
    "About Us",
    "Blog",
    "Term & Condition",
    "Privacy Policy",
  ];

  const loanTypes = [
    "Personal Loan",
    "Business Loan",
    "Education Loan",
    "Home Loan",
    "LAP",
    "LAS",
  ];

  const investmentOptions = [
    {
      title: "Gold",
      percentage: "+34.70%",
      period: "p.a(3Y)",
      background:
        "url(https://c.animaapp.com/mfj8sjndzkaKcu/img/category-element.png) 50% 50% / cover, linear-gradient(223deg, rgba(240,199,53,1) 0%, rgba(217,143,57,1) 100%)",
    },
    {
      title: "Silver",
      percentage: "+34.70%",
      period: "p.a(3Y)",
      background:
        "url(https://c.animaapp.com/mfj8sjndzkaKcu/img/category-element-1.png) 50% 50% / cover, linear-gradient(223deg, rgba(202,201,201,1) 0%, rgba(151,151,151,1) 100%)",
    },
  ];

  return (
    <footer className="flex items-center justify-between w-full">
      <div className="flex flex-col items-start gap-8 pl-0 pr-8 pt-24 pb-8 flex-1 w-full border-b border-solid border-[#b39fff]">
        <div className="flex items-center justify-between w-full">
          <div className="inline-flex items-center gap-6">
            {socialIcons.map((icon, index) => (
              <div
                key={index}
                className="flex w-[72px] h-[72px] items-center justify-center gap-[15.49px] px-[26.34px] py-[23.24px] rounded-2xl border border-solid border-[#9073ff]"
              >
                <img
                  className="w-[37.18px] h-[37.18px] mt-[-5.83px] mb-[-5.83px] ml-[-8.93px] mr-[-8.93px]"
                  alt={icon.alt}
                  src={icon.src}
                />
              </div>
            ))}
          </div>

          <button className="inline-flex items-center justify-center gap-2.5 px-7 py-4 mr-[-1.00px] bg-white rounded-lg border border-solid border-[#592eff] h-auto text-[#592eff] font-bold hover:bg-[#592eff] hover:text-white transition-colors">
            <div className="font-bold text-base">
              Get Partner with us
            </div>
            <ArrowRightIcon className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col items-start gap-8 w-full">
          <div className="flex items-center gap-16 w-full">
            <div className="flex flex-col items-start gap-12 flex-1 self-stretch">
              <div className="inline-flex flex-col items-start gap-2.5">
                <img
                  className="w-[280px] h-[100px] object-cover"
                  alt="Finsbee transparent"
                  src="https://c.animaapp.com/mfj8sjndzkaKcu/img/finsbee-transparent-2.png"
                />

                <nav className="flex w-40 gap-4 flex-col items-start">
                  <div className="flex flex-col items-start w-full">
                    {navigationLinks.map((link, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-1 px-0 py-2 w-full"
                      >
                        <div className="flex-1 mt-[-1.00px] text-white text-base hover:text-purple-200 transition-colors cursor-pointer">
                          {link}
                        </div>
                      </div>
                    ))}
                  </div>
                </nav>
              </div>

              <div className="inline-flex flex-col items-start gap-2">
                <div className="w-[222px] mt-[-1.00px] opacity-60 text-gray-300 text-base">
                  @ Copyright Finsbee
                </div>
              </div>
            </div>

            <div className="flex items-start justify-between flex-1">
              <div className="flex w-40 gap-4 flex-col items-start">
                <h3 className="mt-[-1.00px] text-white text-2xl font-bold">
                  Loan
                </h3>

                <div className="flex flex-col items-start w-full">
                  {loanTypes.map((loanType, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-1 px-0 py-2 w-full"
                    >
                      <div className="flex-1 mt-[-1.00px] text-white text-base hover:text-purple-200 transition-colors cursor-pointer">
                        {loanType}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="inline-flex gap-6 flex-col items-start">
                <h3 className="w-fit mt-[-1.00px] text-white text-2xl font-bold whitespace-nowrap">
                  Investment
                </h3>

                <div className="flex flex-col items-start gap-4 w-full">
                  {investmentOptions.map((option, index) => (
                    <div
                      key={index}
                      className="flex flex-col w-[156px] h-[116px] items-start justify-between p-4 rounded-2xl shadow-lg border-0 cursor-pointer hover:scale-105 transition-transform"
                      style={{ background: option.background }}
                    >
                      <div className="p-0 w-full h-full flex flex-col justify-between">
                        <div className="text-white text-2xl font-bold drop-shadow-md">
                          {option.title}
                        </div>

                        <div className="flex flex-col items-start gap-1 w-full">
                          <div className="w-fit mt-[-1.00px] text-white text-base font-bold drop-shadow-md whitespace-nowrap">
                            {option.percentage}
                          </div>

                          <div className="text-white text-sm drop-shadow-md">
                            {option.period}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex h-[76px] items-center justify-between px-8 py-0 w-full bg-[#2121210D]  rounded-lg">
            <div className="w-[286px] text-white text-xl font-bold">
              Have a any questions?
              <br />
              Contact Us
            </div>

            <div className="inline-flex items-center gap-12">
              <div className="inline-flex items-center gap-4 cursor-pointer hover:opacity-80 transition-opacity">
                <PhoneIcon className="w-8 h-8 text-white" />

                <div className="inline-flex flex-col items-start">
                  <div className="mt-[-1.00px] text-white text-sm">
                    Call Us @
                  </div>

                  <div className="w-fit text-white font-bold text-sm">
                    +91 92134 56789
                  </div>
                </div>
              </div>

              <div className="inline-flex items-center gap-4 cursor-pointer hover:opacity-80 transition-opacity">
                <MailIcon className="w-8 h-8 text-white" />

                <div className="inline-flex flex-col items-start">
                  <div className="mt-[-1.00px] text-white text-sm">
                    Send mail to
                  </div>

                  <div className="w-fit text-white font-bold text-sm">
                    support@finsbee.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}

      <aside className="flex flex-col  bg-gradient-to-r from-[#512AE8] to-[#592EFF] w-[383px] items-center justify-center gap-16 px-12 py-6 self-stretch ">
        <h2 className="text-white text-3xl font-bold text-center">
          Get financial help @ your doorstep
        </h2>

        <motion.button
          className="relative inline-flex flex-col h-[218px] w-[218px] items-center justify-center p-12 rounded-full overflow-hidden border border-white border-opacity-50 bg-transparent cursor-pointer"
          whileHover="hover"
          initial="initial"
          animate="initial"
        >
          {/* Yellow circle animation */}
          <motion.div
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[216px] h-[216px] bg-yellow-500 rounded-full"
            variants={{
              initial: { x: "120%", y: "120%", scale: 0.9, opacity: 0.8 },
              hover: { x: 0, y: 0, scale: 1, opacity: 1 },
            }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 12,
              mass: 0.8,
            }}
          />

          {/* Content stays on top */}
          <motion.div
            className="inline-flex flex-col items-center mt-[-5.91px] mb-[-3.91px] z-10"
            variants={{
              initial: { color: "#ffffff" }, // white
              hover: { color: "#000000" },   // black
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Arrow changes based on hover */}
            <motion.div
              variants={{
                initial: { opacity: 1 },
                hover: { opacity: 0 },
              }}
              className="absolute"
            >
              <Image
                src="/landing_page/arrow-up.svg"
                width={102}
                height={102}
                alt="Arrow Up White"
                className="w-[101.82px] h-[101.82px]"
              />
            </motion.div>

            <motion.div
              variants={{
                initial: { opacity: 0 },
                hover: { opacity: 1 },
              }}
            >
              <Image
                src="/landing_page/arrow-up 2.svg"
                width={102}
                height={102}
                alt="Arrow Up Black"
                className="w-[101.82px] h-[101.82px]"
              />
            </motion.div>

            <motion.div
              className="w-fit text-2xl font-bold text-center whitespace-nowrap"
              variants={{
                initial: { color: "#ffffff" }, // white
                hover: { color: "#000000" },   // black
              }}
              transition={{ duration: 0.3 }}
            >
              Connect us
            </motion.div>
          </motion.div>
        </motion.button>

        <div className="flex flex-col items-center w-full">
          <div className="mt-[-1.00px] text-white text-2xl font-bold text-center">
            10:00 A.M - 7:00 P.M (IST)
          </div>

          <div className="text-white text-base text-center">
            All Day (* We do not server on holidays)
          </div>
        </div>
      </aside>
    </footer>
  );
}
