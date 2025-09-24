import { ArrowRight, ArrowUp, Mail, Phone } from 'lucide-react';

export default function FinsbeeFooter() {
  const socialIcons = [
    { src: "https://c.animaapp.com/mfidv09x75b3D3/img/vuesax-broken-instagram.svg", alt: "Instagram" },
    { src: "https://c.animaapp.com/mfidv09x75b3D3/img/vuesax-broken-instagram.svg", alt: "Facebook" },
    { src: "https://c.animaapp.com/mfidv09x75b3D3/img/vuesax-broken-instagram.svg", alt: "Twitter" },
    { src: "https://c.animaapp.com/mfidv09x75b3D3/img/vuesax-broken-instagram.svg", alt: "LinkedIn" },
  ];

  const companyLinks = ["About Us", "Blog", "Term & Condition", "Privacy Policy"];
  const loanTypes = ["Personal Loan", "Business Loan", "Education Loan", "Home Loan", "LAP", "LAS"];
  const loanCities = [
    "Personal Loan in Banglore",
    "Personal Loan in Mumbai", 
    "Personal Loan in Delhi",
    "Personal Loan in Chennai",
    "Personal Loan in Pune",
    "Personal Loan in Hyderabad"
  ];

  const investmentOptions = [
    {
      title: "Gold",
      percentage: "+34.70%",
      period: "p.a(3Y)",
      bgImage: "https://c.animaapp.com/mfidv09x75b3D3/img/category-element.png",
      gradient: "from-yellow-400 to-yellow-600"
    },
    {
      title: "Silver", 
      percentage: "+34.70%",
      period: "p.a(3Y)",
      bgImage: "https://c.animaapp.com/mfidv09x75b3D3/img/category-element-1.png",
      gradient: "from-gray-300 to-gray-500"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 rounded-tl-[120px]">
      <div className="flex">
        {/* Main Content */}
        <div className="flex-1 px-8 lg:px-36 py-24">
          {/* Header Section */}
          <div className="flex items-center justify-between mb-16">
            <div className="flex items-center gap-6">
              {socialIcons.map((icon, index) => (
                <div
                  key={index}
                  className="w-18 h-18 flex items-center justify-center rounded-2xl border border-purple-300 hover:bg-purple-500/10 transition-colors cursor-pointer"
                >
                  <img className="w-9 h-9" alt={icon.alt} src={icon.src} />
                </div>
              ))}
            </div>

            <button className="flex items-center gap-3 px-7 py-4 bg-white rounded-lg border border-purple-600 text-purple-600 font-bold hover:bg-purple-600 hover:text-white transition-colors">
              Get Partner with us
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>

          {/* Content Section */}
          <div className="flex gap-16 mb-16">
            {/* Left Column */}
            <div className="flex-1">
              <div className="mb-12">
                <img
                  className="w-70 h-25 object-cover mb-6"
                  alt="Finsbee Logo"
                  src="https://c.animaapp.com/mfidv09x75b3D3/img/finsbee-transparent-2.png"
                />
                
                <nav className="space-y-2">
                  {companyLinks.map((link, index) => (
                    <div key={index} className="py-2">
                      <a href="#" className="text-purple-100 hover:text-white transition-colors text-base">
                        {link}
                      </a>
                    </div>
                  ))}
                </nav>
              </div>

              <div className="text-purple-200 opacity-60 text-base">
                © Copyright Finsbee
              </div>
            </div>

            {/* Middle Column - Loans */}
            <div className="w-40">
              <h3 className="text-white text-2xl font-bold mb-6">Loan</h3>
              <nav className="space-y-2">
                {loanTypes.map((loan, index) => (
                  <div key={index} className="py-2">
                    <a href="#" className="text-purple-100 hover:text-white transition-colors text-base">
                      {loan}
                    </a>
                  </div>
                ))}
              </nav>
            </div>

            {/* Right Column - Investment */}
            <div className="flex flex-col gap-6">
              <h3 className="text-white text-2xl font-bold">Investment</h3>
              
              <div className="space-y-4">
                {investmentOptions.map((option, index) => (
                  <div
                    key={index}
                    className={`w-39 h-29 p-4 rounded-2xl bg-gradient-to-br ${option.gradient} cursor-pointer hover:scale-105 transition-transform shadow-lg`}
                    style={{
                      backgroundImage: `url(${option.bgImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className="h-full flex flex-col justify-between">
                      <h4 className="text-white text-2xl font-bold drop-shadow-md">
                        {option.title}
                      </h4>
                      
                      <div className="space-y-1">
                        <div className="text-white text-base font-bold drop-shadow-md">
                          {option.percentage}
                        </div>
                        <div className="text-white text-sm drop-shadow-md">
                          {option.period}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="flex items-center justify-between px-8 py-6 bg-black/5 rounded-lg">
            <div className="text-white text-xl font-bold">
              Have any questions?<br />
              Contact Us
            </div>

            <div className="flex items-center gap-12">
              <div className="flex items-center gap-4 cursor-pointer hover:opacity-80 transition-opacity">
                <Phone className="w-8 h-8 text-white" />
                <div>
                  <div className="text-white text-sm">Call Us @</div>
                  <div className="text-white font-bold text-sm">+91 92134 56789</div>
                </div>
              </div>

              <div className="flex items-center gap-4 cursor-pointer hover:opacity-80 transition-opacity">
                <Mail className="w-8 h-8 text-white" />
                <div>
                  <div className="text-white text-sm">Send mail to</div>
                  <div className="text-white font-bold text-sm">support@finsbee.com</div>
                </div>
              </div>
            </div>
          </div>

          {/* Loan Cities Section */}
          <div className="mt-12">
            <h2 className="text-white text-3xl font-bold mb-8">Apply for Loan in Your City</h2>
            
            <div className="grid grid-cols-4 gap-6">
              {Array.from({ length: 4 }).map((_, columnIndex) => (
                <div key={columnIndex} className="space-y-4">
                  {loanCities.map((city, cityIndex) => (
                    <div key={cityIndex} className="py-2">
                      <a 
                        href="#" 
                        className={`text-base transition-colors ${
                          cityIndex === 0 ? 'text-purple-100' : 'text-purple-200'
                        } hover:text-white`}
                      >
                        {city}
                      </a>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-96 bg-purple-800 px-12 py-24 flex flex-col items-center gap-16">
          <h2 className="text-white text-3xl font-bold text-center">
            Get financial help @ your doorstep
          </h2>

          <button className="relative w-54 h-54 rounded-full border border-white/50 bg-transparent hover:bg-white/10 transition-colors cursor-pointer overflow-hidden">
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
              <ArrowUp className="w-25 h-25 text-white mb-2" />
              <div className="text-white text-2xl font-bold">Connect us</div>
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-54 h-54 bg-yellow-500 rounded-full"></div>
          </button>

          <div className="text-center">
            <div className="text-white text-2xl font-bold mb-2">
              10:00 A.M - 7:00 P.M (IST)
            </div>
            <div className="text-white text-base">
              All Day (* We do not serve on holidays)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
