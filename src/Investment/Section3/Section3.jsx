"use client";
import { motion, AnimatePresence } from "framer-motion";
export default function Section3() {
  return (
    <>
      <div className="flex flex-col items-center px-[136px]">
        <motion.header
          className="flex flex-col items-start w-full"
          initial={{ opacity: 1, x: 800 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="font-bold text-[16px] tracking-[0.5px] text-[#212121]">
            Types of
          </h3>

          <div className="flex flex-wrap w-full items-start">
            <h1 className="w-full font-bold text-[64px]  text-[#212121] font-['Lato',sans-serif]">
              Your Gateway
            </h1>
            <span className="relative w-fit font-bold text-[64px]  text-[#212121]">
              <motion.span
                initial={{ scaleY: 0, opacity: 0 }}
                whileInView={{ scaleY: 1, opacity: 1 }}
                exit={{ scaleY: 0, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.8 }}
                className="absolute inset-0 bg-[#FFC73C] -z-10 origin-top"
              />
              to Wealth
            </span>
          </div>

          <h1 className="font-bold text-[64px] text-[#212121]">
            in Gold & Silver
          </h1>
        </motion.header>
      </div>

      <div className="bg-white -mt-10">
        {/* Main Container */}
        <section className="flex flex-col items-center px-4 md:px-32 ">
          {/* Header Section */}

          {/* Content Cards Section */}
          <div className="w-full max-w-6xl items-end grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#EEEAFF] h-[336px]  rounded-2xl p-12">
              <p className="text-gray-800 text-xl leading-relaxed">
                Whether you wish to buy gold online as a symbol of timeless
                security or explore the dynamic growth potential of silver
                investment, our platform ensures your journey is safe, reliable,
                and effortless. Every transaction is backed by secure systems,
                transparent pricing, and a guarantee of purity, giving you
                confidence in every decision you make.
              </p>
            </div>

            <div className="bg-[#FFEEC3] rounded-2xl p-12">
              <p className="text-gray-800 text-xl leading-relaxed">
                With FinsBee, investing is more than just making a purchase;
                it's about creating a route to long-term prosperity. We empower
                you to diversify, safeguard, and boost your financial path by
                offering safe online gold investments as well as flexible
                alternatives to acquire digital gold and silver online. By
                combining proven financial advice with modern digital
                convenience, we enable you to invest with clarity, confidence,
                and complete control. At FinsBee, you don't simply buy gold or
                silver; you also have the option to invest in your future with
                elegance and security.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
