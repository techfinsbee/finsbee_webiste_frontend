// import Header from "./Header";
import HomeHeader from "./Home/HomeHeader";
const LendingPartner = () => {
  const LendingPartners = [
    {
      partner: "Olyv",
      link: "http://olyv.co.in",
      img: "/lending_partner2.png",
    },
    {
      partner: "Meghdoot Mercantile",
      link: "https://meghdootmercantile.com",
      img: "/lending_partner6.png",
    },
    {
      partner: "Chintamani",
      link: "https://chintamanifinlease.com",
      img: "/lending_partner7.png",
    },
    { partner: "Girdhar Finlease", link: "#", img: "/lending_partner1.png" },
    {
      partner: "Payme",
      link: "https://paymeindia.in",
      img: "/lending_partner4.png",
    },
    {
      partner: "Capri Global",
      link: "https://capriloans.in",
      img: "/lending_partner.png",
    },
  ];
  const dropdownData = [
    {
      title: "Home",
      link: "/home",
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
      <HomeHeader
        dropdownData={dropdownData}
        COLOR="#fff"
        Hover="home"
        TXTCOLOR="#"
      ></HomeHeader>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
            Our Lending Partners
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {LendingPartners.map((info, index) => (
              <a
                key={index}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-[#09615D] p-4 rounded-lg text-white hover:shadow-lg transition-shadow duration-300 border border-gray-100 h-full flex items-center justify-center group gap-2 flex-col md:flex-row">
                  <img src={info.img} alt="" className="w-[20vw] md:w-[8vw]" />
                  <div className="text-xl font-medium  group-hover:text-gray-200 transition-colors duration-300 text-center">
                    {info.partner}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LendingPartner;
