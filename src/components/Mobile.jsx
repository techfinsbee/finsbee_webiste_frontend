import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./Mobile.component.css";

const AnimatedCounter = ({
  end,
  duration,
  label,
  prefix = "",
  suffix = "+",
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(0) + "M";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(0) + "K";
    }
    return num.toString();
  };

  return (
    <div
      className="bg-[#E6D5C3] rounded-3xl p-6 flex flex-col items-center justify-center text-center min-w-[250px]
                    shadow-[0_8px_30px_rgb(0,0,0,0.12)] transform hover:scale-105 transition-all duration-300 mobile-box
                    border border-[rgba(255,255,255,0.1)]"
    >
      <div className="text-4xl font-bold mb-2 text-gray-800">
        {prefix}
        {formatNumber(count)}
        {suffix}
      </div>
      <div className="text-gray-700">{label}</div>
    </div>
  );
};

const Mobile = () => {
  const stats = [
    {
      end: 1000000,
      label: "App downloads",
      prefix: "",
    },
    {
      end: 40000,
      label: "Loans Disbursed",
      prefix: "",
    },
    {
      end: 60,
      label: "Worth Of Loans\nDisbursed",
      prefix: "INR ",
      suffix: " Cr+",
    },
  ];

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <>
      <div style={{ height: "50vh" }}>
        <div className="" style={{ display: "flex", justifyContent: "center" }}>
          <img src="/mobile.png" alt="" />
        </div>
        <div
          ref={ref}
          className="flex flex-wrap gap-28 justify-center items-center counters"
        >
          {inView &&
            stats.map((stat, index) => (
              <AnimatedCounter
                key={index}
                end={stat.end}
                duration={1500}
                label={stat.label}
                prefix={stat.prefix}
                suffix={stat.suffix}
              />
            ))}
        </div>
      </div>
      <style jsx>{`
      @media screen and (max-width: 1000px) {
        .counters {
            gap: 0rem !important;
            justify-content: space-between !important;
            padding: 0px 10px;
          }
      }
        @media screen and (max-width: 820px) {
          .counters {
            gap: 0rem !important;
            justify-content: space-between !important;
            padding: 0px 10px;
          }
            .mobile-box{
              min-width: 200px !important;
            }
        }
            @media screen and (max-width: 655px) {
          .counters {
            gap: 1rem !important;
            justify-content: center !important;
            padding: 0px 10px;
          }
            .mobile-box{
              min-width: 250px !important;
            }
        }


      `}</style>
    </>
  );
};

export default Mobile;
