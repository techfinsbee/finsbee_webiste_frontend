import React from "react";
import { Download } from "lucide-react";
import Header from "./Header";
import { Link } from "react-router-dom";
import HomeHeader from "./Home/HomeHeader";
import Navbar from "./Navbar/Navbar";
const AboutUs = () => {
  const loanOptions = [
    "Personal Loans",
    "Business Loans",
    "Homw Loans",
    "Loan Against Property",
    "Loan Against Security",
    "Check Free Credit Score",
  ];

  const whyChooseUs = [
    {
      title: "All-in-One Platform",
      description:
        "From applying for loans to shopping for the latest products, FundsMama brings everything together under one roof.",
    },
    {
      title: "Shop & Earn Rewards",
      description:
        "Our exclusive in-app e-commerce store lets you redeem Coins earned from loan disbursements or previous purchases. Choose from a wide selection of products, ranging from electronics to lifestyle items, and enjoy the convenience of paying with Coins or combining them with cash or EMI options.",
    },
    {
      title: "Seamless Digital Experience",
      description:
        "Apply for loans or shop your heart out with our easy-to-use app. Our streamlined process ensures a paperless, hassle-free experience every time.",
    },
    {
      title: "Trusted Partnerships",
      description:
        "We work with India's most reliable NBFCs, banks, and top-notch brands to bring you trusted loan solutions and quality products.",
    },
    {
      title: "Your Privacy Matters",
      description:
        "Your personal and financial data is safe with us. FundsMama adheres to strict data security and compliance protocols to ensure your peace of mind.",
    },
  ];
  const dropdownData = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Loans",
      link: "loan-section-home",
    },
    {
      title: "Mart",
      link: "mart-home",
    },
    {
      title: "About Us",
      link: "/aboutus",
    },
    {
      title: "Contact Us",
      link: "contact-us-home",
    },
  ];

  return (
    <div className="min-h-screen " style={{}}>
      <Navbar
        dropdownData={dropdownData}
        COLOR="#fff"
        Hover="home"
        TXTCOLOR="#"
      />
      {/* Hero Section */}
      <section className=" py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-[#09615D]">FundsMama</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Where financial solutions meet rewarding experiences. We're not just
            a lending platform; we're a unique ecosystem that combines easy
            access to loans with an exclusive in-app e-commerce store,
            redefining how you think about finance and shopping. At FundsMama,
            every step of your journey—whether applying for a loan or shopping
            for your favorite products—is designed to be simple, rewarding, and
            seamless.
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
            Who We Are
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            FundsMama is your one-stop destination for loans and rewards. We
            simplify borrowing by connecting you to trusted NBFCs, banks, and
            lending institutions, ensuring you get the best options tailored to
            your needs. But we go beyond loans! Our platform also features a
            reward-driven e-commerce store, where you can use Coins earned from
            loans or purchases to shop from a wide range of products. <br />
            From quick payday loans to long-term financing and exciting shopping
            experiences, FundsMama is here to make your financial and lifestyle
            aspirations come true.
          </p>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600">
              To create a world where financial empowerment and rewarding
              shopping experiences go hand in hand. We envision becoming India's
              most trusted platform for loans and rewards, making every
              financial milestone worth celebrating.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">
              Our Mission
            </h2>
            <ul className="text-gray-600 space-y-2">
              <li>
                • To simplify access to financial solutions while ensuring
                transparency and convenience.
              </li>
              <li>
                • To transform financial journeys with rewards that enhance user
                experiences.
              </li>
              <li>
                • To combine lending and lifestyle, offering users the joy of
                shopping with their earned rewards
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Choose FundsMama?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-white flex flex-col justify-center items-center p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
            <div className="bg-white p-8 rounded-lg flex flex-col justify-center shadow-md">
              <h2 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                Diverse Loan Options
              </h2>
              <div className=" gap-4">
                <ul className="text-gray-600">
                  {loanOptions.map((loan, index) => (
                    <li key={index}>• {loan}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Join the FundsMama Family</h2>
          <p className="text-lg mb-8">
            At FundsMama, we believe finance should empower you, and rewards
            should elevate your experience. Whether you’re planning your next
            big purchase, meeting financial needs, or simply enjoying the thrill
            of shopping, we’re here to make it all happen—hassle-free and
            rewarding.
            <br /> <br />
            Start your journey with FundsMama today. Explore endless
            possibilities, and experience a platform that brings finance and
            lifestyle together.
          </p>
          <Link to="https://play.google.com/store/apps/details?id=com.fundsmama.personalloan">
            <button className="bg-[#09615D]  px-8 py-3 rounded-full font-semibold flex items-center mx-auto text-white transition-colors">
              <Download className="w-5 h-5 mr-2" />
              Download Our App
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
