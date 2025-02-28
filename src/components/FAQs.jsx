// import Header from "./Header"
import HomeHeader from "./Home/HomeHeader";
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
        <HomeHeader
          dropdownData={dropdownData}
          COLOR="#fff"
          Hover="home"
          TXTCOLOR="#"
        ></HomeHeader>

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