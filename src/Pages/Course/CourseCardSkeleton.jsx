import React from 'react';

const SkeletonCourseCard = () => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden animate-pulse">
    <div className="w-full h-48 bg-gray-200"></div>
    <div className="p-4">
      <div className="flex items-center mb-2">
        <div className="w-8 h-8 bg-gray-200 rounded-full mr-2"></div>
        <div className="w-1/3 h-4 bg-gray-200 rounded"></div>
      </div>
      <div className="w-1/2 h-5 bg-gray-200 rounded mb-2"></div>
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, index) => (
          <div key={index} className={`w-4 h-4 bg-gray-200 rounded-full mr-1 ${index < 5 ? 'text-yellow-500' : 'text-gray-300'}`}></div>
        ))}
        <div className="w-1/4 h-4 bg-gray-200 rounded ml-2"></div>
      </div>
      <div className="w-1/2 h-10 bg-gray-200 rounded"></div>
    </div>
  </div>
);

export default SkeletonCourseCard;
