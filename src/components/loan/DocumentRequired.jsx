
"use client";

const DocumentSection = ({ title, categories, showTitle }) => (
  <div className="w-full">
    {showTitle && (
      <p className="text-gray-600 font-bold text-sm underline py-4 tracking-wide uppercase text-center">
        {title}
      </p>
    )}

    <div className="flex flex-col lg:flex-row items-start gap-6 w-full">
      {Object.entries(categories).map(([category, items]) => (
        <div
          key={category}
          className="bg-white p-6 rounded-lg lg:rounded-none 
                     lg:first:rounded-l-lg lg:last:rounded-r-lg 
                     lg:[&:not(:first-child)]:border-l 
                     lg:border-dashed lg:border-gray-300 flex-1"
        >
          <h2 className="text-lg sm:text-xl font-normal text-gray-800 mb-6">
            {category}
          </h2>

          <ul className="flex flex-col gap-4">
            {items.map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="w-6 h-6 bg-yellow-400 text-white rounded-full flex items-center justify-center">
                  ✔
                </span>
                <span className="text-base text-gray-800">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

const DocumentRequired = ({ data }) => {
  const hasSalaried = !!data.salaried;
  const hasSelfEmployed = !!data.selfEmployed;
  const showHeaders = hasSalaried && hasSelfEmployed;

  return (
      <section className="flex flex-col items-center gap-12 px-4 sm:px-6 md:px-8 lg:px-[136px]  mx-auto">
  <div className="w-full max-w-[1400px]">
       <div className="
     bg-white rounded-2xl shadow-[0_10px_10px_rgba(0,0,0,0.12)] border border-gray-100 p-8 md:p-12">
      <h1 className="justify-self-center text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
        Document Required 
      </h1>

      {hasSalaried && (
        <DocumentSection
          title="For Salaried Individuals"
          categories={data.salaried}
          showTitle={showHeaders}
        />
      )}

      {hasSelfEmployed && (
        <DocumentSection
          title="For Self-Employed Individuals"
          categories={data.selfEmployed}
          showTitle={showHeaders}
        />
      )}
      </div>
      </div>
    </section>
  );
};

export default DocumentRequired;
