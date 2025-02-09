import React from "react";
import { useInView } from "react-intersection-observer";
import AnimatedMain from "../AnimatedMain";
const HomeMainSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  return (
    <section id="home-home">
      <div
        ref={ref}
        className="w-full relative flex items-center justify-between px-8 lg:px-16 HomeMain overflow-hidden"
        style={{
          background: "linear-gradient(180deg, rgb(255, 252, 247) 0%, #b2ff8e 100%)",
          borderBottomLeftRadius:"10%",
          borderBottomRightRadius:"10%",
          height:"90vh"
        }}
      >
        {/* Left content */}
        <div className="flex flex-col gap-8 lg:gap-12 w-full lg:w-1/2 pt-8 lg:pt-0">
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 leading-tight">
            Your Ultimate Financial SuperApp
            <AnimatedMain></AnimatedMain>
            
          </h1>
          
          {/* Download button */}
          <div className="flex items-center gap-4">
            <button className="px-6 py-3 rounded-full font-semibold flex items-center gap-2">
              <img src="/download.png" alt="" />
            </button>
            
          </div>

          {/* Downloads count */}
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white" >
                  <img src="/hello.png" className="rounded-full" alt="" />
                </div>
              ))}
            </div>
            <span className="text-gray-700 font-semibold">200K+ Downloads</span>
          </div>
        </div>

        {/* Right content - Phone mockup */}
        <div className="lg:block w-1/2 relative HomeImage">
          <div className="relative w-72 h-full mx-auto">
            <img src="/image1.png" alt="" />
          </div>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 680px){
          .HomeMain{
            flex-direction: column;
            gap: 20px;
            height: 100vh !important;
            margin-top: 0px;
          }
            .HomeImage{
              width: 100%;
              display: flex;
              justify-content: center;
            }
        }
      `}</style>
    </section>
  );
};

export default HomeMainSection;