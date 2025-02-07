import React from "react";

const Footer = () => {
  return (
    <section id="contact-us" >
      <footer className="w-full text-gray-800 border-t border-gray-200 " style={{ boxShadow:"200px 200px 200px #000000"}}>
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Top section with logo and sign up button */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
            <div className="flex items-center mb-4 sm:mb-0">
              <img src="/logo.png" alt="FUNDSMAMA" className="h-24 mr-2" />
            </div>
            <button className="bg-[#C4957E] text-white px-6 py-2 rounded-lg hover:bg-[#B3846D] transition-colors">
              Sign up for Updates
            </button>
          </div>

          {/* Footer Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/privacy-policy"
                    className="text-xl font-semibold hover:text-gray-600 "
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms-and-conditions"
                    className="text-xl font-semibold hover:text-gray-600"
                  >
                    Terms & Condition Credit Score
                  </a>
                </li>
                <li>
                  <a
                    href="/mama-calculator"
                    className="text-xl font-semibold hover:text-gray-600 "
                  >
                    Mama's Calculator
                  </a>
                </li>
                <li>
                  <a
                    href="/mama-shoppingmall"
                    className="text-xl font-semibold hover:text-gray-600 "
                  >
                    Mama's Shoppingmall
                  </a>
                </li>
                <li>
                  <a
                    href="/lending-partners"
                    className="text-xl font-semibold hover:text-gray-600"
                  >
                    Our Lending Partners
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/about-us"
                    className="text-xl font-semibold hover:text-gray-600"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#contact-us"
                    className="text-xl font-semibold hover:text-gray-600"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="/features"
                    className="text-xl font-semibold hover:text-gray-600"
                  >
                    Features
                  </a>
                </li>

                <li>
                  <a
                    href="/testimonials"
                    className="text-xl font-semibold hover:text-gray-600 "
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    href="/blog"
                    className="text-xl font-semibold hover:text-gray-600 "
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="/sitemap"
                    className="text-xl font-semibold hover:text-gray-600 "
                  >
                    Sitemap
                  </a>
                </li>
                <li>
                  <a
                    href="/press-release"
                    className="text-xl font-semibold hover:text-gray-600 "
                  >
                    Press Release
                  </a>
                </li>
                <li>
                  <a
                    href="/customer-care"
                    className="text-xl font-semibold hover:text-gray-600 "
                  >
                    Customer Care
                  </a>
                </li>
                <li>
                  <a
                    href="/faqs"
                    className="text-xl font-semibold hover:text-gray-600"
                  >
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 - Contact Info */}
            <div>
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:Customercare@fundsmama.com"
                    className="text-xl font-semibold hover:text-gray-600 underline"
                  >
                    Customercare@fundsmama.com
                  </a>
                </li>
                <li className="text-xl font-semibold hover:text-gray-600">
                  L42, Lajpat Nagar-2, New Delhi-110024
                </li>
                <li className="text-xl font-semibold hover:text-gray-600"></li>
                <li className="text-xl font-semibold hover:text-gray-600">
                  +91-96505 53609
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sign Up Section */}
      </footer>
    </section>
  );
};

export default Footer;
