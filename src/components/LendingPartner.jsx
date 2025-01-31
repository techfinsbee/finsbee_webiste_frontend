import Header from "./Header";
const LendingPartner = () => {
  const LendingPartners = [
    {partner:"Olyv", link: "http://olyv.co.in"},
    {partner:"Meghdoot Mercantile", link:"https://meghdootmercantile.com"},
    {partner:"Chintamani", link:"https://chintamanifinlease.com"},
    {partner:"Girdhar Finlease", link:"#"},
    {partner:"Payme", link:"https://paymeindia.in"},
    {partner:"Capri Global", link:"https://capriloans.in"},
  ];

  return (
    <>
    <Header />
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
              <div className="bg-white p-6 rounded-lg  hover:shadow-lg transition-shadow duration-300 border border-gray-100 h-full flex items-center justify-center group">
                <div className="text-xl font-medium text-gray-700 group-hover:text-[#CD855F] transition-colors duration-300 text-center">
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