import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const AnimatedCounter = ({
  end,
  duration,
  label,
  prefix = "",
  suffix = "+",
  shouldAnimate,
  bgColor
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldAnimate) {
      setCount(0);
      return;
    }

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
  }, [end, duration, shouldAnimate]);

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
      className={`rounded-xl p-6 flex flex-col items-center justify-center text-center min-w-96 h-[200px]
                  shadow-lg transition-transform duration-300 hover:scale-105`}
      style={{ backgroundColor: bgColor }}
    >
      <div className="text-5xl font-bold text-[#1D3800]">
        {prefix}
        {formatNumber(count)}
        {suffix}
      </div>
      <div className="text-gray-600 text-sm">{label}</div>
    </div>
  );
};

const HomeAnimatedCounter = () => {
  const stats = [
    {
      end: 60,
      label: "Worth Of Loans Disbursed",
      prefix: "INR ",
      suffix: " Cr+",
      bgColor: "#F8F9FA",
    },
    {
      end: 1000000,
      label: "App downloads",
      prefix: "",
      bgColor: "#A7FA5A",
    },
    {
      end: 40000,
      label: "Loans Disbursed",
      prefix: "",
      bgColor: "#F8F9FA",
    },
  ];

  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "-5% 0px -5% 0px",
    triggerOnce: false,
  });

  const [hasExited, setHasExited] = useState(true);

  useEffect(() => {
    if (!inView) {
      setHasExited(true);
    }
  }, [inView]);

  const shouldAnimate = inView && hasExited;

  return (
    <div ref={ref} className="flex flex-wrap gap-20 justify-center items-center mt-20">
      {stats.map((stat, index) => (
        <AnimatedCounter
          key={index}
          end={stat.end}
          duration={1000}
          label={stat.label}
          prefix={stat.prefix}
          suffix={stat.suffix}
          shouldAnimate={shouldAnimate}
          bgColor={stat.bgColor}
        />
      ))}
    </div>
  );
};

export default HomeAnimatedCounter;
