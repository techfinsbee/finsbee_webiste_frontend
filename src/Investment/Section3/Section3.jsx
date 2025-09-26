"use client";

export default function Section3() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Container */}
      <section className="flex flex-col items-center px-4 md:px-32 py-24">
        
        {/* Header Section */}
        <div className="w-full max-w-6xl mb-16">
          <div className="text-gray-800 font-bold text-base tracking-wide mb-2">
            Types of
          </div>

          <div className="flex items-center gap-2 mb-4">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800">
              Your Gateway
            </h1>
            <div className="relative inline-block">
              <span className="absolute inset-0 bg-yellow-400 rounded"></span>
              <h1 className="relative text-5xl md:text-6xl font-bold text-gray-800 px-2">
                to Wealth
              </h1>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-800">
            in Gold & Silver
          </h1>
        </div>

        {/* Content Cards Section */}
        <div className="w-full max-w-6xl items-end grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="bg-[#EEEAFF] h-[336px]  rounded-2xl p-12">
            <p className="text-gray-800 text-xl leading-relaxed">
              Whether you wish to buy gold online as a symbol of timeless security or explore the dynamic growth potential of silver investment, our platform ensures your journey is safe, reliable, and effortless. Every transaction is backed by secure systems, transparent pricing, and a guarantee of purity, giving you confidence in every decision you make.
            </p>
          </div>

          <div className="bg-[#FFEEC3] rounded-2xl p-12">
            <p className="text-gray-800 text-xl leading-relaxed">
              With FinsBee, investing is more than just making a purchase; it's about creating a route to long-term prosperity. We empower you to diversify, safeguard, and boost your financial path by offering safe online gold investments as well as flexible alternatives to acquire digital gold and silver online. By combining proven financial advice with modern digital convenience, we enable you to invest with clarity, confidence, and complete control. At FinsBee, you don't simply buy gold or silver; you also have the option to invest in your future with elegance and security.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
  