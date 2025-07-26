import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./LendingPartners.css";

const LendingPartners = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  Updated partners with more reliable logo URLs
    const partners = [
  { name: "Aditya Birla", logo: "src/assets/AdityaBirla.jpeg" },
  { name: "Avans", logo: "src/assets/Avans.png" },
  { name: "HDFC Bank", logo: "src/assets/Chintamani.png" },
  { name: "Bajaj Finserv", logo: "src/assets/Credit sea.png" },
  { name: "Finnable", logo: "src/assets/Finnable.png" },
  { name: "Piramal", logo: "src/assets/incred.jpeg" },
  { name: "IndusInd Bank", logo: "src/assets/intant mudra.png" },
  { name: "Kotak Mahindra Bank", logo: "src/assets/Lending Cart.jpeg" },
  { name: "L&T Finance", logo: "src/assets/Olyv.png" },
  { name: "Tata Capital", logo: "src/assets/piramal.png" },
  { name: "Yes Bank", logo: "src/assets/Ram fincorp.jpeg" },
  { name: "Clix Capital", logo: "src/assets/shivalik.png" },
  { name: "Ram Fincorp", logo: "src/assets/Tata capital.png" },
  { name: "Godrej Capital", logo: "src/assets/Zype.jpeg" },
  { name: "ICICI Bank", logo: "src/assets/tyy.png" },
];

  // Animation settings
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5,
        type: "spring", 
        stiffness: 100,
      }
    }
  };
  
  // Split partners into rows (6 partners per row for larger screens)
  const getRowPartners = () => {
    const rowsOfPartners = [];
    const partnersPerRow = 7;
    
    for (let i = 0; i < partners.length; i += partnersPerRow) {
      rowsOfPartners.push(partners.slice(i, i + partnersPerRow));
    }
    
    return rowsOfPartners;
  };

  const rowsOfPartners = getRowPartners();
  
  return (
    <section id="lending-partners" ref={ref} className="lending-partners-section py-16 px-4">
{/*       <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-14 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          Our Lending Partners
        </motion.h2>
        
        <motion.div 
          className="partners-grid"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {rowsOfPartners.map((row, rowIndex) => (
            <div key={rowIndex} className="partners-row">
              {row.map((partner, index) => (
                <motion.div 
                  key={`${rowIndex}-${index}`} 
                  className="partner-item"
                  variants={itemVariants}
                >
                  <div className="partner-card">
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name} logo`}
                      className="partner-logo" 
                      loading="lazy"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://via.placeholder.com/150x80?text=" + partner.name;
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </motion.div>
        
        <motion.p 
          className="text-center text-gray-600 mt-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          We partner with India's leading banks and financial institutions to offer you the best loan options
        </motion.p>
      </div> */}
    </section>
  );
};

export default LendingPartners;
