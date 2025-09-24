import { CheckCircle } from "lucide-react";
import React from "react";

const App = () => {
  const eligibilityCriteria = [
    {
      title: "For Salaried Individuals",
      image: "https://c.animaapp.com/mfwi9k86KhnY9k/img/manager.png",
      criteria: [
        "Age: 21-58 years",
        "Minimum monthly income: ₹15,000",
        "At least 6 months in current job",
        "Credit Score: 650+",
      ],
    },
    {
      title: "For Self-Employed Individuals",
      image: "https://c.animaapp.com/mfwi9k86KhnY9k/img/manager-1.png",
      criteria: [
        "Age: 21-65 years",
        "Minimum monthly income: ₹20,000",
        "Business running for 2+ years",
        "Credit Score: 650+",
      ],
    },
  ];

  return (
    <div className="h-[90%] bg-gray-50">
      <section className="flex flex-col items-center gap-12 px-6 md:px-12 py-16">
        {/* Header */}
        <div className="flex flex-col items-center gap-2 text-center max-w-2xl">
          <p className="text-gray-600 font-bold text-sm tracking-wide uppercase">
            The Results Speaks for Themselves
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
            Eligibility Criteria
          </h1>
        </div>

        {/* Content Cards */}
        <div className="flex flex-col lg:flex-row items-start gap-0 w-full max-w-6xl">
          {eligibilityCriteria.map((section, index) => (
            <div
              key={index}
              className={`flex-1 bg-white p-6 ${
                index === 0 
                  ? "lg:border-r border-dashed border-gray-300 lg:rounded-r-none rounded-lg lg:rounded-l-lg" 
                  : "lg:border-l-0 lg:rounded-l-none rounded-lg lg:rounded-r-lg"
              } ${index > 0 ? "mt-6 lg:mt-0" : ""}`}
            >
              <div className="flex flex-col lg:flex-row items-start justify-between gap-6">
                {/* Text Content */}
                <div className="flex flex-col gap-6 flex-1">
                  <h2 className="text-xl md:text-2xl font-normal text-gray-800">
                    {section.title}
                  </h2>

                  <ul className="flex flex-col gap-4">
                    {section.criteria.map((criterion, criterionIndex) => (
                      <li
                        key={criterionIndex}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle className="w-6 h-6 text-gray-800 flex-shrink-0" />
                        <span className="text-gray-800 text-base">
                          {criterion}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image */}
                <div className="flex items-center justify-center flex-shrink-0">
                  <img
                    className="w-40 h-40 md:w-52 md:h-52 object-cover rounded-lg"
                    alt="Professional illustration"
                    src={section.image}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default App;
