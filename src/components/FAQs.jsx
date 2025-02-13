import Header from "./Header"
const FAQs = () => {
  const dropdownData = [
    {
      title: "Home",
      link: "/home",
    },
    {
      title: "Loans",
      link: "loan-section",
    },
    {
      title: "Mart",
      link: "mart",
    },
    {
      title: "About Us",
      link: "/about-us",
    },
    {
      title: "Contact Us",
      link: "contact-us",
    },
  ];
  return (<>
        <Header dropdownData={dropdownData}></Header>

    <div className="faqs">
      <h1>FAQs</h1>
      <style jsx>{`
        body,html{
          background: white;
        }
      `}</style>
    </div>
    </>
  )
}

export default FAQs