import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TestimonialsSection = ({ COLOR }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  // Define testimonials data - reduced to three
  const testimonials = [
    {
      id: 1,
      name: "Rohit Shah",
      location: "Mumbai",
      profession: "Business Owner",
      rating: 5,
      text: "FundsMama made my business loan process incredibly smooth. The competitive rates and quick approval saved me weeks of paperwork. The FMCoins were an amazing bonus - I used them to get a new laptop from Mama Mart!",
      loanType: "Business Loan"
    },
    {
      id: 2,
      name: "Priya Desai",
      location: "Pune",
      profession: "Software Engineer",
      rating: 4.5,
      text: "I needed a personal loan urgently for a family emergency. FundsMama processed my application within hours, and their user-friendly app made tracking repayments effortless. Plus, the rewards system actually makes repaying loans rewarding!",
      loanType: "Personal Loan"
    },
    {
      id: 3,
      name: "Arjun Mehta",
      location: "Bangalore",
      profession: "Marketing Professional",
      rating: 5,
      text: "After comparing multiple platforms, I chose FundsMama for my home loan. Their interest rates were the best, and the entire process was paperless! The customer service team was available 24/7 to address my concerns.",
      loanType: "Housing Loan"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    if (!inView) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [inView, testimonials.length]);

  // Function to get avatar background color based on name
  const getAvatarColor = (name) => {
    const colors = [
      "#7B549C", // Primary purple 
      "#9966CC", // Light purple
      "#664481", // Dark purple
    ];
    
    // Use name's first character code to determine color index
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  // Function to render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={`star-${i}`} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      );
    }

    // Add half star if needed
    if (hasHalfStar) {
      stars.push(
        <div key="half-star" className="relative w-5 h-5">
          <svg className="w-5 h-5 text-gray-300 absolute" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg className="w-2.5 h-5 text-yellow-400 absolute overflow-hidden" fill="currentColor" viewBox="0 0 10 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        </div>
      );
    }

    // Add empty stars to make total of 5
    for (let i = Math.ceil(rating); i < 5; i++) {
      stars.push(
        <svg key={`empty-star-${i}`} className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      );
    }

    return stars;
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section 
      id="testimonials" 
      className="mt-2 py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${COLOR ? "rgba(123, 84, 156, 0.15)" : "rgba(123, 84, 156, 0.15)"} 0%, ${COLOR ? "rgba(24, 173, 165, 0.05)" : "rgba(123, 84, 156, 0.05)"} 100%)`
      }}
      ref={ref}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-20" 
          style={{ 
            background: "radial-gradient(circle, rgba(123, 84, 156, 0.8) 0%, transparent 70%)",
            transform: "translate(-30%, -30%)"
          }} />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-10" 
          style={{ 
            background: "radial-gradient(circle, rgba(123, 84, 156, 0.6) 0%, transparent 70%)",
            transform: "translate(20%, 20%)"
          }} />
      
      <div className="max-w-7xl ml-14 mr-14 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 coolvetica"
            style={{ 
              color: COLOR ? "#7B549C" : "#7B549C",
              position: "relative",
              display: "inline-block"
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            Success Stories
            <div 
              className="absolute h-1 w-32 rounded-full left-1/2 transform -translate-x-1/2" 
              style={{ 
                bottom: "-15px", 
                background: "linear-gradient(to right, #9966CC, #7B549C)"
              }}
            ></div>
          </motion.h2>
          <motion.p 
            className="mt-8 text-lg md:text-xl max-w-3xl mx-auto manrope"
            style={{ color: "#555" }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            Hear from our customers who've transformed their financial journey with FundsMama
          </motion.p>
        </div>

        {/* Desktop testimonials */}
        <div className="hidden lg:block">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={testimonial.id}
                className={`rounded-2xl p-6 transition-all duration-500 transform ${
                  activeIndex === index 
                    ? "scale-105 shadow-xl bg-white" 
                    : "scale-95 shadow-md bg-white bg-opacity-80"
                }`}
                style={{
                  borderTop: activeIndex === index ? "4px solid #7B549C" : "4px solid transparent",
                  filter: activeIndex !== index ? "grayscale(0.3)" : "none",
                }}
                variants={cardVariants}
                onClick={() => setActiveIndex(index)}
              >
                <div className="flex items-start mb-4">
                  {/* Letter avatar instead of image */}
                  <div 
                    className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center mr-4 text-white text-2xl font-bold"
                    style={{ 
                      backgroundColor: getAvatarColor(testimonial.name),
                      boxShadow: "0 4px 10px rgba(123, 84, 156, 0.3)"
                    }}
                  >
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg coolvetica" style={{ color: "#7B549C" }}>
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {testimonial.location} • {testimonial.profession}
                    </p>
                    <div className="flex mt-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -left-2 -top-2 text-5xl text-purple-200">"</div>
                  <p className="relative z-10 text-gray-700 manrope leading-relaxed pl-4">
                    {testimonial.text}
                  </p>
                  <div className="absolute -bottom-5 -right-2 text-5xl text-purple-200 transform rotate-180">"</div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-sm font-medium px-3 py-1 rounded-full" 
                    style={{ background: "rgba(123, 84, 156, 0.15)", color: "#7B549C" }}>
                    {testimonial.loanType}
                  </span>
                  <span className="text-sm text-gray-500 italic">Verified Customer</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile testimonial carousel */}
        <div className="lg:hidden">
          <div className="relative px-4">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
              style={{ borderTop: "4px solid #7B549C" }}
            >
              <div className="flex items-start mb-4">
                {/* Letter avatar for mobile */}
                <div 
                  className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center mr-4 text-white text-2xl font-bold"
                  style={{ 
                    backgroundColor: getAvatarColor(testimonials[activeIndex].name),
                    boxShadow: "0 4px 10px rgba(123, 84, 156, 0.3)"
                  }}
                >
                  {testimonials[activeIndex].name.charAt(0)}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg coolvetica" style={{ color: "#7B549C" }}>
                    {testimonials[activeIndex].name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {testimonials[activeIndex].location} • {testimonials[activeIndex].profession}
                  </p>
                  <div className="flex mt-1">
                    {renderStars(testimonials[activeIndex].rating)}
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-2 -top-2 text-4xl text-purple-200">"</div>
                <p className="relative z-10 text-gray-700 manrope leading-relaxed pl-4">
                  {testimonials[activeIndex].text}
                </p>
                <div className="absolute -bottom-5 -right-2 text-4xl text-purple-200 transform rotate-180">"</div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center">
                <span className="text-sm font-medium px-3 py-1 rounded-full" 
                  style={{ background: "rgba(123, 84, 156, 0.15)", color: "#7B549C" }}>
                  {testimonials[activeIndex].loanType}
                </span>
                <span className="text-sm text-gray-500 italic">Verified Customer</span>
              </div>
            </motion.div>

            {/* Mobile navigation */}
            <div className="flex justify-center items-center mt-6">
              {/* Dots indicator */}
              <div className="flex space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      activeIndex === index ? "bg-purple-700" : "bg-purple-200"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .coolvetica {
            font-size: 2.25rem;
          }
        }
        
        @media (max-width: 640px) {
          .coolvetica {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;