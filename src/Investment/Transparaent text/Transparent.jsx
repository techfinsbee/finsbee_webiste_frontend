"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Animated Text Section Component
const AnimatedTextSection = () => {
  const [visibleWords, setVisibleWords] = useState(0);

  // The text content
  const text =
    "At FinsBee, we recognize that wealth is more than just numbers; it represents stability, freedom, and a legacy for future generations. That is why we strive to make wealth generation simple, transparent, and accessible to all. In today's digital age, when financial prospects are growing quicker than ever, we provide a safer and more secure alternative to invest in gold and silver online.";

  // Split text into words
  const words = text.split(" ");

  // Animation effect - reveal words one by one
  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleWords((prev) => {
        if (prev < words.length) {
          return prev + 1;
        }
        clearInterval(timer);
        return prev;
      });
    }, 150); // Speed: 150ms per word

    return () => clearInterval(timer);
  }, [words.length]);

  return (
    <motion.section
      className="max-w-6xl mx-auto px-8 py-16 rounded-2xl"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="text-start">
        <div
          className="text-5xl font-bold leading-relaxed"
          style={{ fontFamily: "Lato, sans-serif" }}
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              className={`inline-block mr-3 transition-all duration-500 ${
                index < visibleWords ? "text-gray-900" : "text-transparent"
              }`}
              style={{
                WebkitTextStroke: index >= visibleWords ? "1px #4d4d4d" : "none",
                letterSpacing: "0.48px",
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: index < visibleWords ? 1 : 0.7,
                y: index < visibleWords ? 0 : 10,
              }}
              transition={{
                duration: 0.3,
                delay: index * 0.05,
              }}
            >
              {word}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default AnimatedTextSection;
