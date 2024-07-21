import React from 'react';
import WhatDo from './WhatWeData.jsX'; // Adjust the import path as necessary
import WhatWeCard from '../Component/WhatWeCard';

const WhatWeData = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row md:justify-between gap-8">
        <div className="flex-1">
          <h1 className="text-4xl text-[#201654] font-bold">What We Do</h1>
          <h2 className="text-2xl text-[#201654] mt-2">How It Works?</h2>
        </div>
        <div className="flex-1">
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. 
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        {WhatDo.map((item, index) => (
          <WhatWeCard key={index} icon={item.icon} heading={item.heading} para={item.para} />
        ))}
      </div>
    </div>
  );
};

export default WhatWeData;
