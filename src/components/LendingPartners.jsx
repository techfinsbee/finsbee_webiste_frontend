import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./LendingPartners.css";

const LendingPartners = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  // Updated partners with more reliable logo URLs
  const partners = [
  { name: "Aditya Birla", logo: "https://tse4.mm.bing.net/th?id=OIP.-lzw0AbxAjScrE0m241gywHaEK&pid=Api&P=0&h=180" },
  { name: "Axis Bank", logo: "https://tse4.mm.bing.net/th?id=OIP.y1XmJNHlaqg_HQGMons6wwHaF2&pid=Api&P=0&h=180" },
  { name: "HDFC Bank", logo: "https://tse3.mm.bing.net/th?id=OIP.wk3UBkzWGSXAQv1i-UJpSwHaJa&pid=Api&P=0&h=180" },
  { name: "Bajaj Finserv", logo: "https://tse1.mm.bing.net/th?id=OIP.4NHCI_A_JQuqbHBWH-2RaAAAAA&pid=Api&P=0&h=180" },
  { name: "Finnable", logo: "https://tse1.mm.bing.net/th?id=OIP.qYztYoSOPCd7UkII6NQ53QHaGN&pid=Api&P=0&h=180" },
  { name: "IDFC FIRST Bank", logo: "https://tse4.mm.bing.net/th?id=OIP.asFja8yIK8yqw7reKimm0QHaFj&pid=Api&P=0&h=180" },
  { name: "IndusInd Bank", logo: "https://tse4.mm.bing.net/th?id=OIP.5N-v8EBW6WnwD4UySigJvwHaCY&pid=Api&P=0&h=180" },
  { name: "Kotak Mahindra Bank", logo: "https://tse3.mm.bing.net/th?id=OIP.R5HK-mbTDB2m_jLHiUx50wHaCl&pid=Api&P=0&h=180" },
  { name: "L&T Finance", logo: "https://tse3.mm.bing.net/th?id=OIP.ItASukBq4_HgbHZ7pn8C_QHaDq&pid=Api&P=0&h=180" },
  { name: "Tata Capital", logo: "https://tse1.mm.bing.net/th?id=OIP.zhgWcfQhX2iLw5okSo9X8gHaDt&pid=Api&P=0&h=180" },
  { name: "Yes Bank", logo: "https://tse3.mm.bing.net/th?id=OIP.RLAqL4y-ozL2geQW6JsggwHaEO&pid=Api&P=0&h=180" },
  { name: "Clix Capital", logo: "https://tse3.mm.bing.net/th?id=OIP.2uY6NOmfRqt9ZFMMru3_vAHaE8&pid=Api&P=0&h=180" },
  { name: "Ram Fincorp", logo: "https://tse2.mm.bing.net/th?id=OIP.MlfK3GcPjsR8AM5NQTQNYgHaHa&pid=Api&P=0&h=180" },
  { name: "Godrej Capital", logo: "https://tse3.mm.bing.net/th?id=OIP.7Yxufp1Xv4MK2yl_i5ytLAAAAA&pid=Api&P=0&h=180" },
  { name: "ICICI Bank", logo: "https://tse2.mm.bing.net/th?id=OIP.wcM7ajR7lKE5j_jOYz4HZQHaHa&pid=Api&P=0&h=180" },
  { name: "SBI", logo: "https://tse1.mm.bing.net/th?id=OIP.XYmv13PmuE3W40Uf1OeT8wHaCl&pid=Api&P=0&h=180" },
  { name: "InCred", logo: "https://tse2.mm.bing.net/th?id=OIP.3ZxsGcbXpkK7mkgTzd-U-AHaCq&pid=Api&P=0&h=180" },
  { name: "KreditBee", logo: "https://tse2.mm.bing.net/th?id=OIP.6emc2t-KZmHDK7blYWDeDgHaHb&pid=Api&P=0&h=180" },
  { name: "Instant Mudra", logo: "https://tse1.mm.bing.net/th?id=OIP.CfxWFPLJT8cfKitdBF6A1wHaHa&pid=Api&P=0&h=180" },
  { name: "PayMe", logo: "https://tse2.mm.bing.net/th?id=OIP.SMvxb-L29Ci1PgxAPSFcbgHaEK&pid=Api&P=0&h=180" },
  { name: "Chintamoney", logo: "https://tse2.mm.bing.net/th?id=OIP.-UecjFxZbknMbRRWdF896AAAAA&pid=Api&P=0&h=180" },
  { name: "Shriram Finance", logo: "https://tse3.mm.bing.net/th?id=OIP.ppWNoxao1V5UpbEjS0R1AQHaCd&pid=Api&P=0&h=180" },
  { name: "Poonawalla", logo: "https://tse3.mm.bing.net/th?id=OIP.NzIweLQ9xIgSeVfITHc4XQHaEH&pid=Api&P=0&h=180" },
  { name: "IIFL", logo: "https://tse1.mm.bing.net/th?id=OIP.MSHYCH8sKpEsk2M3cilIeQHaDW&pid=Api&P=0&h=180" },
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
    const partnersPerRow = 6;
    
    for (let i = 0; i < partners.length; i += partnersPerRow) {
      rowsOfPartners.push(partners.slice(i, i + partnersPerRow));
    }
    
    return rowsOfPartners;
  };

  const rowsOfPartners = getRowPartners();
  
  return (
    <section id="lending-partners" ref={ref} className="lending-partners-section py-16 px-4">
      <div className="max-w-7xl mx-auto">
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
      </div>
    </section>
  );
};

export default LendingPartners;