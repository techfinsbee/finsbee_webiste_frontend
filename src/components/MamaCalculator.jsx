import React from 'react'
import Header from "./Header";

const MamaCalculator = () => {
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
    <>
          <Header dropdownData={dropdownData}></Header>

    <section className=" py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Welcome to <span className="text-[#CD855F]">FundsMama</span>
        </h1>
      </div>
    </section>
    </>
  )
}

export default MamaCalculator
