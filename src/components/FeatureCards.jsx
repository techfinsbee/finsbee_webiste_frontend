import React from 'react';

const FeatureCards = () => {
  const features = [
    {
      title: 'EXCITING REWARDS SYSTEM',
      description: 'Consumer earn FM Coins on every successful disbursement and product purchase',
      bgColor: 'bg-orange-100',
    },
    {
      title: 'EXCITING PRODUCTS',
      description: 'Access FundsMall Listing 1000+ products across 35+ categories',
      bgColor: 'bg-orange-100',
    },
    {
      title: 'Flexible payment options',
      description: 'Access FundsMall Listing 1000+ products across 35+ categories',
      bgColor: 'bg-orange-100',
    },
  ];

  return (
    <div style={{display:"flex", justifyContent:"center", marginBottom:"50px"}}>
    <div className="p-4" style={{width:"85%"}}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className={`${feature.bgColor} rounded-lg p-6 shadow-sm transition-transform duration-200 hover:scale-105`}
          >
            <h3 className="text-2xl flex center font-bold mb-4">
              {feature.title}
            </h3>
            <p className="text-xl text-gray-700">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default FeatureCards;