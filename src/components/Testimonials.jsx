import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";

const TestimonialsSection = ({ COLOR }) => {
  const MAX_VISIBLE = 3;
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for next, -1 for prev
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  // Define testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Rohit Shah",
      location: "Mumbai",
      profession: "Business Owner",
      rating: 5,
      text: "FinsBee made my business loan process incredibly smooth. The competitive rates and quick approval saved me weeks of paperwork. The FBCoins were an amazing bonus - I used them to get a new laptop from Mama Mart!",
      loanType: "Business Loan"
    },
    {
      id: 2,
      name: "Priya Desai",
      location: "Pune",
      profession: "Software Engineer",
      rating: 4.5,
      text: "I needed a personal loan urgently for a family emergency. FinsBee processed my application within hours, and their user-friendly app made tracking repayments effortless. Plus, the rewards system actually makes repaying loans rewarding!",
      loanType: "Personal Loan"
    },
    {
      id: 3,
      name: "Arjun Mehta",
      location: "Bangalore",
      profession: "Marketing Professional",
      rating: 5,
      text: "After comparing multiple platforms, I chose FinsBee for my home loan. Their interest rates were the best, and the entire process was paperless! The customer service team was available 24/7 to address my concerns.",
      loanType: "Home Loan"
    },
    {
      id: 4,
      name: "Neha Kapoor",
      location: "Delhi",
      profession: "Interior Designer",
      rating: 4.8,
      text: "I opted for a Loan Against Property with FinsBee to expand my studio. The valuation was fair, and the disbursal was quick. Their transparency and support made the entire experience stress-free.",
      loanType: "Loan Against Property"
    },
    {
      id: 5,
      name: "Siddharth Iyer",
      location: "Chennai",
      profession: "Stock Trader",
      rating: 4.7,
      text: "FinsBee's Loan Against Securities helped me unlock liquidity without selling my investments. The process was seamless and the interest rates were surprisingly low.",
      loanType: "Loan Against Securities"
    },
    {
      id: 6,
      name: "Anjali Verma",
      location: "Hyderabad",
      profession: "Entrepreneur",
      rating: 5,
      text: "FinsBee supported my startup with a business loan when others hesitated. Their flexible repayment options and FBCoins rewards made it a win-win!",
      loanType: "Business Loan"
    },
    {
      id: 7,
      name: "Karan Malhotra",
      location: "Ahmedabad",
      profession: "Civil Engineer",
      rating: 4.6,
      text: "I used FinsBee for a home loan and was impressed by their digital-first approach. No paperwork, no delays – just fast, efficient service.",
      loanType: "Home Loan"
    },
    {
      id: 8,
      name: "Meera Joshi",
      location: "Kolkata",
      profession: "Teacher",
      rating: 4.9,
      text: "When I needed a personal loan for my daughter's education, FinsBee came through. The process was simple, and I even earned FBCoins for timely repayments!",
      loanType: "Personal Loan"
    }
  ];

  // Calculate maximum index for desktop carousel
  const maxDesktopIndex = Math.max(0, testimonials.length - MAX_VISIBLE);
  
  const nextSlide = () => {
    setDirection(1);
    setActiveIndex((prev) => {
      if (window.innerWidth >= 1024) {
        // Desktop: cycle through groups of 3
        return prev >= maxDesktopIndex ? 0 : prev + 1;
      } else {
        // Mobile: cycle through individual testimonials
        return (prev + 1) % testimonials.length;
      }
    });
  };

  const prevSlide = () => {
    setDirection(-1);
    setActiveIndex((prev) => {
      if (window.innerWidth >= 1024) {
        // Desktop: cycle through groups of 3
        return prev <= 0 ? maxDesktopIndex : prev - 1;
      } else {
        // Mobile: cycle through individual testimonials
        return prev <= 0 ? testimonials.length - 1 : prev - 1;
      }
    });
  };

  // Auto-rotate testimonials
  // useEffect(() => {
  //   if (!inView) return;
    
  //   const interval = setInterval(() => {
  //     setDirection(1);
  //     setActiveIndex((prev) => {
  //       if (window.innerWidth >= 1024) {
  //         return prev >= maxDesktopIndex ? 0 : prev + 1;
  //       } else {
  //         return (prev + 1) % testimonials.length;
  //       }
  //     });
  //   }, 5000);
    
  //   return () => clearInterval(interval);
  // }, [inView, maxDesktopIndex]);

  // Function to get avatar background color based on name
  const getAvatarColor = (name) => {
    const colors = [
      "#ffc73c", // Primary purple 
      "#ffc73c", // Light purple
      "#ffc73c", // Dark purple
    ];
    
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

  return (
    <section 
      id="testimonials" 
      className="mt-2 py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex flex-col justify-center"
      style={{
        background: `linear-gradient(135deg, ${COLOR ? "rgba(177, 198, 198, 0.42)" : "rgba(123, 84, 156, 0.15)"} 0%, ${COLOR ? "rgba(24, 173, 165, 0.05)" : "rgba(123, 84, 156, 0.05)"} 100%)`
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
      
      <div className="max-w-7xl lg:ml-14 lg:mr-14 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ 
              color: COLOR ? " #000" : " #ffc73c",
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
                background: "linear-gradient(to right, #ffc73c,  #ffc73c)"
              }}
            ></div>
          </motion.h2>
          <motion.p 
            className="mt-8 text-lg md:text-xl max-w-3xl mx-auto"
            style={{ color: "#555" }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            Hear from our customers who've transformed their financial journey with FinsBee
          </motion.p>
        </div>

        {/* Desktop testimonials */}
        <div className="hidden lg:block">
          <div className="relative px-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: direction * 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -100 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="flex space-x-6"
              >
                {testimonials.slice(activeIndex, activeIndex + MAX_VISIBLE).map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="bg-white rounded-2xl p-6 shadow-lg flex-1"
                    style={{ borderTop: "4px solid  #592eff" }}
                  >
                    <div className="flex items-start mb-4">
                      <div
                        className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center mr-4 text-black text-2xl font-bold"
                        style={{
                          backgroundColor: getAvatarColor(testimonial.name),
                          // boxShadow: "0 4px 10px  #ffc73c",
                        }}
                      >
                        {testimonial.name.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg" style={{ color: " #000" }}>
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
                      <div className="absolute -left-2 -top-2 text-4xl text-blue-200">"</div>
                      <p className="relative z-10 text-gray-700 leading-relaxed pl-4">
                        {testimonial.text}
                      </p>
                      <div className="absolute -bottom-5 -right-2 text-4xl text-blue-200 transform rotate-180">"</div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center">
                      <span className="text-sm font-medium px-3 py-1 rounded-full"
                        style={{ background: "rgba(168, 209, 217, 0.15)", color: " #000" }}>
                        {testimonial.loanType}
                      </span>
                      <span className="text-sm text-gray-500 italic">Verified Customer</span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Desktop Controls */}
            <div className="flex justify-between items-center mt-8 px-4">
              <button
                onClick={prevSlide}
                className="text-blue-700 hover:text-blue-900 font-bold text-3xl p-2 rounded-full hover:bg-blue-50 transition-colors"
                aria-label="Previous testimonials"
              >
                ‹
              </button>
              <div className="flex space-x-3">
                {Array.from({ length: maxDesktopIndex + 1 }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > activeIndex ? 1 : -1);
                      setActiveIndex(index);
                    }}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      activeIndex === index ? "bg-blue-700" : "bg-blue-400"
                    }`}
                    aria-label={`Go to testimonial group ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextSlide}
                className="text-blue-700 hover:text-blue-900 font-bold text-3xl p-2 rounded-full hover:bg-blue-50 transition-colors"
                aria-label="Next testimonials"
              >
                ›
              </button>
            </div>
          </div>
        </div>

        {/* Mobile testimonial carousel */}
        <div className="lg:hidden">
          <div className="relative px-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: direction * 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -100 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
                style={{ borderTop: "4px solid #754eff" }}
              >
                <div className="flex items-start mb-4">
                  <div 
                    className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center mr-4 text-white text-2xl font-bold"
                    style={{ 
                      backgroundColor: getAvatarColor(testimonials[activeIndex].name),
                      boxShadow: "0 4px 10px rgba(150, 193, 198, 0.3)"
                    }}
                  >
                    {testimonials[activeIndex].name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg" style={{ color: "#754eff" }}>
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
                  <p className="relative z-10 text-gray-700 leading-relaxed pl-4">
                    {testimonials[activeIndex].text}
                  </p>
                  <div className="absolute -bottom-5 -right-2 text-4xl text-purple-200 transform rotate-180">"</div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-sm font-medium px-3 py-1 rounded-full" 
                    style={{ background: "rgba(123, 84, 156, 0.15)", color: "#754eff" }}>
                    {testimonials[activeIndex].loanType}
                  </span>
                  <span className="text-sm text-gray-500 italic">Verified Customer</span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Mobile navigation */}
            <div className="flex justify-between items-center mt-6">
              <button
                onClick={prevSlide}
                className="text-purple-700 hover:text-blue-900 font-bold text-2xl p-2 rounded-full hover:bg-purple-50 transition-colors"
                aria-label="Previous testimonial"
              >
                ‹
              </button>
              <div className="flex space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > activeIndex ? 1 : -1);
                      setActiveIndex(index);
                    }}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      activeIndex === index ? "bg-blue-700" : "bg-blue-200"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextSlide}
                className="text-blue-700 hover:text-purple-900 font-bold text-2xl p-2 rounded-full hover:bg-purple-50 transition-colors"
                aria-label="Next testimonial"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
