import React from "react";

const HomeFooter = ({ COLOR }) => {
  return (
    <section id="contact-us-home">
      <footer
        className="w-full text-white-800 border-t border-gray-200 coolvetica"
        style={{
          boxShadow: "200px 200px 200px #000000",
          background: `${COLOR ? "#09615D" : "#163312"} `,
        }}
      >
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Top section with logo and sign up button */}
          <div className="flex sm:flex-row justify-between items-center mb-8">
            <div className="flex">
              <img
                src="/white-logo.svg"
                className=" relative -left-8 w-[100px] sm:w-[120px] ml-0"
                alt="FUNDSMAMA"
              />{" "}
              <span
                className="text-lg sm:text-4xl relative -left-14 text-[#fff] flex juistify-center items-center"
                style={{
                  fontWeight: "800",
                  fontFamily: "Helvetica",
                }}
              >
                FUNDSMAMA
              </span>
            </div>
            <button className="bg-white sm:w-fit text-[14px] w-[40vw] text-black px-2 md:px-6 py-2 rounded-[50px] transition-colors">
              Sign up for Updates
            </button>
          </div>

          {/* Footer Links Grid */}
          <div className="grid grid-cols-1 text-white md:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/privacy-policy"
                    className="text-xl font-semibold hover:text-white-600 "
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms-and-conditions"
                    className="text-xl font-semibold hover:text-white-600"
                  >
                    Terms & Condition
                  </a>
                </li>

                <li>
                  <a
                    href="/lending-partners"
                    className="text-xl font-semibold hover:text-white-600"
                  >
                    Our Lending Partners
                  </a>
                </li>
                <li>
                  <a
                    href="/faqs"
                    className="text-xl font-semibold hover:text-white-600"
                  >
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/aboutus"
                    className="text-xl font-semibold hover:text-white-600"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#contact-us"
                    className="text-xl font-semibold hover:text-white-600"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 - Contact Info */}
            <div>
              <ul className="space-y-2">
                <li className="text-xl font-semibold hover:text-white-600 flex gap-2">
                  <img src="/Map_Pin.png" className="h-6" alt="" />
                  L42, Lajpat Nagar-2, New Delhi-110024
                </li>
                <li className="text-xl font-semibold hover:text-white-600 flex gap-2">
                  <img src="/Frame.svg" alt="" />
                  +91-97117 11026
                </li>
                <li>
                  <a
                    href="mailto:Customercare@fundsmama.com"
                    className="text-lg md:text-lg flex gap-2 font-semibold hover:text-white-600 underline"
                  >
                    <img src="/Mail.png" alt="" />
                    Customercare@fundsmama.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sign Up Section */}
      </footer>
      <style jsx>{`
        @media (max-height: 512px) {
          li,
          li a {
            font-size: 0.9rem !important;
            line-height: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HomeFooter;
