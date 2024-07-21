import React from 'react';

const WhatWeCard = ({ icon, heading, para }) => {
  return (
    <div className='relative bg-[#F0F4F9] p-4 rounded-lg shadow-md flex flex-col items-center gap-2'>
      <div className='absolute top-4 left-4 bg-blue-500 text-white w-8 h-8 flex items-center justify-center rounded-full'>
        {icon}
      </div>
      <h3 className="mt-8 mb-2 text-xl font-bold">{heading}</h3>
      <p className='text-center'>{para}</p>
      <button className="flex items-center text-blue-500 mt-2">
        Read More
      </button>
    </div>
  );
};

export default WhatWeCard;
