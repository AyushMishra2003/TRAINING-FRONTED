import React from 'react';
import 'tailwindcss/tailwind.css';

const Course = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 relative group cursor-pointer">
      <img
        className="w-full"
        src="https://via.placeholder.com/400x200"
        alt="Photography Course"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          Photography Is A Complete Guideline For Easy Learning
        </div>
        <p className="text-gray-700 text-base">
          $19
        </p>
        <p className="text-gray-700 text-base">
          <span className="mr-2">📅 30/01/23</span>
          <span>👤 2 Students</span>
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          John Smith
        </span>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-center justify-center">
        <span className="text-lg">See Details</span>
      </div>
    </div>
  );
};

export default Course;