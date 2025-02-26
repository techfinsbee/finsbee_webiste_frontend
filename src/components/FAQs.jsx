import Header from "./Header"
const FAQs = () => {
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