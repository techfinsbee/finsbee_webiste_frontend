import { ArrowRight } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

export const Header = () => {
    const navigationItems = [
        { label: "Loan", active: true },
        { label: "Insurance", active: false },
        { label: "Investment", active: false },
    ];

    return (
        <section
            className="flex flex-col h-[856px] items-start gap-24 relative rounded-b-[120px] bg-gradient-to-b from-gray-800/70 via-gray-900/90 to-gray-900 bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `radial-gradient(50% 50% at 50% 100%, rgba(33,33,33,0.72) 32%, rgba(33,33,33,0.9) 100%), url(https://c.animaapp.com/mfrfs2g1ZfgUJE/img/1-section.png)`,
            }}
        >
            {/* <header className="flex items-start justify-around pl-0 pr-[280px] py-0 relative w-full">
                <div className="flex flex-col items-start gap-2.5 pt-6 pb-2.5 px-24 relative flex-1">
                    <nav className="flex items-center justify-between pl-12 pr-40 py-2 relative w-full rounded-full">
                        <div className="flex flex-col w-[155.83px] items-start gap-2.5 relative -translate-y-4 animate-fade-in opacity-0">
                            <img
                                className="relative w-full h-[55.38px] object-cover"
                                alt="Finsbee transparent"
                                src="https://c.animaapp.com/mfrfs2g1ZfgUJE/img/finsbee-transparent-2.png"
                            />
                        </div>

                        <div
                            className="flex flex-col w-[403px] items-center justify-center gap-2.5 p-3 relative rounded-2xl -translate-y-4 animate-fade-in opacity-0"
                            style={{ animationDelay: "200ms" }}
                        >
                            <div className="flex items-center justify-center gap-6 relative w-full">
                                {navigationItems.map((item, index) => (
                                    <button
                                        key={item.label}
                                        className={`relative flex-1 transition-colors ${item.active
                                            ? "p-3 bg-white/30 rounded-xl border border-white/30 text-white"
                                            : "px-3 py-2 rounded-lg text-gray-200 hover:bg-white/10"
                                            }`}
                                    >
                                        <span className="relative font-normal text-base tracking-wide leading-normal whitespace-nowrap">
                                            {item.label}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </nav>
                </div>

                <div
                    className="absolute right-px bottom-[-111px] w-[227px] h-[228px] -translate-y-4 animate-fade-in opacity-0"
                    style={{ animationDelay: "400ms" }}
                >
                    <div className="relative w-full h-full">
                        <img
                            className="absolute w-full h-[98.11%] top-0 left-0"
                            alt="Rectangle"
                            src="https://c.animaapp.com/mfrfs2g1ZfgUJE/img/rectangle-35.svg"
                        />

                        <div className="flex flex-col w-[93.03%] items-end gap-4 px-0 py-2.5 absolute h-[92.78%] top-[7.22%] left-0">
                            <div className="inline-flex items-center justify-end gap-2.5 px-0 py-2.5 relative">
                                <p className="relative w-[187px] font-bold text-2xl text-gray-800 text-right leading-[30px]">
                                    All-in-One Finance Help
                                    <br />@ your doorstep
                                </p>
                            </div>

                            <div className="flex w-[167px] items-center relative">
                                <img
                                    className="relative w-[65.66px] h-[65.84px]"
                                    alt="Arrow r"
                                    src="https://c.animaapp.com/mfrfs2g1ZfgUJE/img/arrow-r-01-1.svg"
                                />

                                <button className="inline-flex items-center justify-end gap-2 relative mr-[-0.66px] -ml-3 border-b-2 border-gray-800 bg-transparent hover:bg-gray-100/10 transition-colors">
                                    <span className="relative font-bold text-base text-gray-800 tracking-wide leading-5 whitespace-nowrap">
                                        Book Your Slot
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header> */}

            <main className="flex items-center px-0 py-0 mt-56 relative w-full">
                <div className="flex flex-col items-start gap-6 pl-[136px] pr-0 py-12 relative flex-1">
                    <div className="flex items-center justify-center relative w-full">
                        <h2
                            className="relative flex-1 font-bold text-[32px] text-gray-100 tracking-wide leading-normal -translate-y-4 animate-fade-in opacity-0"
                            style={{ animationDelay: "600ms" }}
                        >
                            Building Wealth with Trust
                        </h2>
                    </div>

                    <div className="flex flex-col items-center gap-3.5 relative w-full">
                        <h1
                            className="relative w-full font-bold text-[64px] text-yellow-400 leading-normal -translate-y-4 animate-fade-in opacity-0"
                            style={{ animationDelay: "800ms" }}
                        >
                            Secure your future -discover the power of gold and silver
                            investment
                        </h1>
                    </div>

                    <button
                        className="inline-flex items-center justify-center gap-2.5 px-7 py-4 relative bg-yellow-400 rounded-[28px] border border-yellow-300 hover:bg-yellow-300 transition-colors -translate-y-4 animate-fade-in opacity-0"
                        style={{ animationDelay: "1000ms" }}
                    >
                        <span className="relative font-bold text-base text-gray-800 tracking-wide leading-5 whitespace-nowrap">
                            Start Saving Now
                        </span>

                        <ArrowRight className="relative w-6 h-6 text-gray-800" />
                    </button>
                </div>



                <div className="flex h-[434px] w-[511px] items-center justify-center relative">
                    {/* Container for both bars */}
                    <div className="relative flex h-[353px] w-[406px] gap-3 items-end">
                        {/* Gold Bar */}
                        <motion.div
                            className="bg-black rounded-t-[20px] border-t-[3px] border-r-2 border-l-2  border-yellow-300 overflow-hidden"
                            style={{ originY: 1 }} // bottom fixed
                            animate={{
                                height: ["75px", "347px"],
                                width: ["99px", "400px"], // grows/shrinks width
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
                                className="w-full h-full object-cover rounded-t-[20px] items-center gap-2.5 p-2.5 relative   bg-black"
                                style={{ originY: 1 }}
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
                            className="bg-black rounded-t-[20px] overflow-hidden border-t-[3px] border-r-2 border-l-2 border-yellow-300"
                            style={{ originY: 1 }} // bottom fixed
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
                                className="w-full h-full object-cover  rounded-t-[20px] items-start gap-2.5 p-2.5  relative   bg-black"
                                style={{ originY: 1 }}
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

            <img
                className="absolute top-0 left-px w-[759px] h-[611px]"
                alt="Abstract design"
                src="https://c.animaapp.com/mfrfs2g1ZfgUJE/img/abstract-design.svg"
            />
        </section>
    );
};
