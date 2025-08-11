import React from "react";
import { Link } from "react-router-dom";

import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Footer = ({ COLOR = "#592eff" }) => {
  const cities = [
    "Banglore",
    "Kolkata",
    "Jaipur",
    "Coimbatore",
    "Ahmedabad",
    "Delhi",
    "Mumbai",
    "Chennai",
    "Hyderabad",
    "Pune",
    "Surat",
    "Indore",
    "Vadodara",
    "Lucknow",
    "Varanasi",
    "Patna",
    "Noida",
    "Amritsar",
  ];

  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionID) => {
    if (location.pathname === "/") {
      // Already on home, use custom event or scroll directly
      const element = document.getElementById(sectionID);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to home and pass scroll target
      navigate("/", { state: { scrollTo: sectionID } });
    }
  };

  return (
    <section id="contact-us">
      <footer
        className="w-full mb-20"
        style={{
          background: "linear-gradient(to bottom, #f8fffe, #f0fffc)",
          borderTop: `1px solid ${COLOR}20`,
        }}
      >
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 py-10">
          
          {/* Top row with logo and download buttons */}
          <div
            className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 pb-6 border-b"
            style={{ borderColor: `${COLOR}30` }}
          >
            {/* Logo and title */}
            <Link to="/" className="flex items-center mb-6 md:mb-0">
              <div className="flex items-center">
                <img
                  src="/finsbee.png"
                  className="w-[200px] md:w-[200px] object-contain mr-2"
                  alt="FinsBee"
                />
                <span
                  className="text-xl md:text-2xl lg:text-3xl font-bold"
                  style={{
                    fontWeight: "800",
                    fontFamily: "Helvetica",
                    color: "#163312",
                  }}
                >
                 
                </span>
              </div>
            </Link>

            {/* Download buttons */}
            <div className="flex gap-3">
              <a
                href="https://play.google.com/store/apps/details?id=com.finsbee.personalloan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-all hover:shadow-lg px-4 py-2 rounded-full"
                style={{
                  backgroundColor: `${COLOR}15`,
                  border: `1px solid ${COLOR}`,
                }}
              >
                <img
                  src="/play_logo.png"
                  className="w-6 h-6 transition-transform hover:scale-110"
                  alt="Google Play"
                />
                <span style={{ color: 'black' }}>Google Play</span>
              </a>

              <a
                href="https://apps.apple.com/in/app/finsbee-superapp/id6746641206?platform=iphone"
                className="flex items-center gap-2 transition-all hover:shadow-lg px-4 py-2 rounded-full"
                style={{
                  backgroundColor: `${COLOR}15`,
                  border: `1px solid ${COLOR}`,
                }}
              >
                <img
                  src="/apple_logo.png"
                  className="w-5 h-5 transition-transform hover:scale-110"
                  alt="App Store"
                />
                <span style={{ color: 'black' }}>App Store</span>
              </a>
            </div>
          </div>

          {/* Main footer sections moved down */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Our Products Section */}
            <div>
              <h3
                className="text-lg font-bold mb-4 pb-2 inline-block"
                style={{
                  borderBottom: `2px solid ${COLOR}`,
                  color: "#163312",
                }}
              >
                Our Products
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/personal-loan"
                    className="text-gray-600 hover:text-[#592eff] transition"
                  >
                    Personal Loan
                  </Link>
                </li>
                <li>
                  <Link
                    to="/business-loan"
                    className="text-gray-600 hover:text-[#592eff] transition"
                  >
                    Business Loan
                  </Link>
                </li>
                <li>
                  <Link
                    to="/home-loan"
                    className="text-gray-600 hover:text-[#592eff] transition"
                  >
                    Home Loan
                  </Link>
                </li>
                <li>
                  <Link
                    to="/loan-against-property"
                    className="text-gray-600 hover:text-[#592eff] transition"
                  >
                    Loan Against Property
                  </Link>
                </li>
                <li>
                  <Link
                    to="/loan-against-securities"
                    className="text-gray-600 hover:text-[#592eff] transition"
                  >
                    Loan Against Security
                  </Link>
                </li>
                <li>
                  <Link
                    to="/check-credit-score"
                    className="text-gray-600 hover:text-[#592eff] transition"
                  >
                    Check Credit Score
                  </Link>
                </li>
                {/* <li>
                  <Link
                    to="/"
                    state={{ scrollTo: "mart-home" }}
                    className="text-gray-600 hover:text-[#592eff] transition"
                  >
                    Mama Mart
                  </Link>
                </li> */}
              </ul>
            </div>

            {/* Company Section */}
            <div>
              <h3
                className="text-lg font-bold mb-4 pb-2 inline-block"
                style={{
                  borderBottom: `2px solid ${COLOR}`,
                  color: "#163312",
                }}
              >
                Our Company
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/aboutus"
                    className="text-gray-600 hover:text-[#592eff] transition"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/partner-with-us"
                    className="text-gray-600 hover:text-[#592eff] transition"
                  >
                    Partner with us write now
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms-and-conditions"
                    className="text-gray-600 hover:text-[#592eff] transition"
                  >
                    Terms and Conditions
                  </Link>
                </li>
                {/* <li>
                  <Link
                    to="/blogs"
                    className="text-gray-600 hover:text-[#592eff] transition"
                  >
                    Blog
                  </Link>
                </li> */}
                <li>
                  <Link
                    to="/privacy-policy"
                    className="text-gray-600 hover:text-[#592eff] transition"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/refund-policy"
                    className="text-gray-600 hover:text-[#592eff] transition"
                  >
                    Refund Policy
                  </Link>
                </li>
   

                {/* <li>
                  <Link
                    to="/blogs"
                    className="text-gray-600 hover:text-[#592eff] transition"
                  >
                    News Board
                  </Link>
                </li> */}
              </ul>
            </div>

            {/* Legal Section */}
            {/* <div>
              <h3
                className="text-lg font-bold mb-4 pb-2 inline-block"
                style={{
                  borderBottom: `2px solid ${COLOR}`,
                  color: "#163312",
                }}
              >
                Legal
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/terms-and-conditions"
                    className="text-gray-600 hover:text-[#592eff] transition"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy-policy"
                    className="text-gray-600 hover:text-[#592eff] transition"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faqs"
                    className="text-gray-600 hover:text-[#592eff] transition"
                  >
                    Grievance Redressal
                  </Link>
                </li>
                <li>
                  <Link
                    to="/csr"
                    className="text-gray-600 hover:text-[#592eff] transition"
                  >
                    Corporate Social Responsibility
                  </Link>
                </li>
                <li>
                  <Link
                    to="/security"
                    className="text-gray-600 hover:text-[#592eff] transition"
                  >
                    Security Centre
                  </Link>
                </li>
                <li>
                  <Link
                    to="/corporate"
                    className="text-gray-600 hover:text-[#592eff] transition"
                  >
                    Corporate Information
                  </Link>
                </li>
              </ul>
            </div> */}

            {/* Contact Section */}
            <div>
              <h3
                className="text-lg font-bold mb-4 pb-2 inline-block"
                style={{
                  borderBottom: `2px solid ${COLOR}`,
                  color: "#163312",
                }}
              >
                Contact Us
              </h3>
              <address className="not-italic text-gray-600 space-y-2">
                <p className="flex items-start">
                  <svg
                    className="w-5 h-5 mr-2 mt-1 flex-shrink-0"
                    fill="none"
                    stroke='#592eff'
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>L42, Lajpat Nagar-2, New Delhi-110024</span>
                </p>
                <p className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 flex-shrink-0"
                    fill="none"
                     stroke='#592eff'
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <a
                    href="tel:+919220468743"
                    className="hover:text-[#592eff] transition"
                  >
                    +91-92204 68743
                  </a>
                </p>
                <p className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 flex-shrink-0"
                    fill="none"
                     stroke='#592eff'
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a
                    href="mailto:Customercare@finsbee.com"
                    className="hover:text-[#592eff] transition break-words"
                  >
                    Customercare@finsbee.com
                  </a>
                </p>
              </address>

              <div className="mt-5 flex space-x-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61577055301810"
                  aria-label="Facebook"
                  className="text-gray-400 hover:text-[#592eff] transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/finsbee/posts/?feedView=all"
                  aria-label="LinkedIn"
                  className="text-gray-400 hover:text-[#592eff] transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </a>
                <a
                  href="https://x.com/FinsBee_"
                  aria-label="X (formerly Twitter)"
                  className="text-gray-400 hover:text-[#592eff] transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/finsbee.official/"
                  aria-label="Instagram"
                  className="text-gray-400 hover:text-[#592eff] transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Apply Loan Location Links */}
          <div
            className="mt-10 pt-6 border-t"
            style={{ borderColor: `${COLOR}30` }}
          >
            <h3 className="text-md font-bold mb-4" style={{ color: "#163312" }}>
              Apply for Loan in Your City
            </h3>
            <div className="text-gray-600 text-sm grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-2 gap-x-3">
              {cities.map((city) => {
                return (
                  <Link
                    key={city}
                    to={`/apply-loan/personal-loan/${city}`}
                    className="hover:text-[#592eff] transition"
                  >
                    Personal Loan in {city}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Copyright */}
          <div
            className="mt-8 pt-6 border-t flex flex-wrap justify-between"
            style={{ borderColor: `${COLOR}30` }}
          >
            <p className="text-sm text-gray-500 mb-2 sm:mb-0">
              © {new Date().getFullYear()} Stradex International Private Limited. All rights reserved.
            </p>
            <div className="text-sm text-gray-500"></div>

            <div>
              <button onClick={() => scrollToSection("home-home")}>🔼</button>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        a {
          transition: all 0.2s ease-in-out;
        }

        .social-icon {
          transition: all 0.3s ease;
        }
        .social-icon:hover {
          transform: translateY(-3px);
        }
      `}</style>
    </section>
  );
};

export default Footer;
