import React from "react";

const HomeFooter = ({ COLOR }) => {
  return (
    <section id="contact-us-home" className="mt-20">
      <footer
        className=" w-full text-white-800 border-t border-gray-200 coolvetica"
        style={{
          boxShadow: "200px 200px 200px #000000",
          background: `${COLOR ? "" : "#163312"} `,
        }}
      >
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Top section with logo and sign up button */}
          <div className="flex sm:flex-row justify-between items-center mb-8">
            <div className="flex w-[200px] object-cover"> 
              <img
                src="/finsbee.png"
                className="relative lg:-left-16 -left-[10vw] sm:-left-[6vw] w-[150px] sm:w-[250px] ml-0 object-cover"
                alt="FinsBee"
              />{" "}
              <span
                className="text-lg sm:text-4xl relative sm:-left-[12vw] -left-[18vw] lg:-left-28 top-1 lg:top-2 text-black  flex juistify-center items-center"
                style={{
                  fontWeight: "800",
                  fontFamily: "Helvetica",
                }}
              >
                FinsBee
              </span>
            </div>
            <button className="bg-[#342F3E] sm:w-fit text-[14px] w-[40vw] text-white px-2 md:px-6 py-2 rounded-[50px] transition-colors">
              Sign up for Updates
            </button>
          </div>

          {/* Footer Links Grid */}
          <div className="grid grid-cols-1 text-black md:grid-cols-3 gap-8">
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

                {/* <li>
                  <a
                    href="/lending-partners"
                    className="text-xl font-semibold hover:text-white-600"
                  >
                    Our Lending Partners
                  </a>
                </li> */}
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
                    href="/cancellation-and-refund"
                    className="text-xl font-semibold hover:text-white-600"
                  >
                    Cancellation & Refund Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 - Contact Info */}
            <div>
              <ul className="space-y-2">
                <li className="text-xl font-semibold hover:text-white-600 flex gap-2">
                  <span className="text-2xl mr-2">⚲</span> L42, Lajpat Nagar-2, New Delhi-110024
                </li>
                <li className="text-xl font-semibold hover:text-white-600 flex gap-2">
                  <span className="text-2xl">✆</span> +91-92204 68743
                </li>
                <li>
                  <a
                    href="mailto:Customercare@finsbee.com"
                    className="text-lg md:text-lg flex gap-2 font-semibold hover:text-white-600"
                  >
                    <span className="text-2xl">✉</span> Customercare@finsbee.com
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
