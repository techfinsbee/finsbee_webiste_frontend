import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./LendingPartners.css";

const LendingPartners = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  return (
    <section
      id="lending-partners"
      ref={ref}
      className="lending-partners-section py-16 px-4"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          Our Lending Partner
        </motion.h2>

        <motion.a
          href="https://girdharfinlease.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl md:text-4xl font-semibold text-blue-700 hover:underline inline-block"
          style={{ color: '#0363A3' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          Girdhar Finlease Private Limited
        </motion.a>

        <motion.p
  className="text-center text-gray-600 mt-4 sm:mt-6 px-4 sm:px-6 md:px-12
             !leading-relaxed
             !text-[clamp(0.95rem,1.2vw+0.6rem,1.25rem)]"
  initial={{ opacity: 0 }}
  animate={inView ? { opacity: 1 } : { opacity: 0 }}
  transition={{ delay: 0.4, duration: 0.7 }}
>
  We proudly collaborate with Girdhar Finlease to provide tailored financial solutions.
</motion.p>


      </div>
    </section>
  );
};

export default LendingPartners;
