import React from 'react';
import backgroundImage from '../../assets/bgimage.jpg'

const AllPageHeader = () => {
  return (
    <div 
    className="relative w-full h-64 bg-cover bg-center flex flex-col justify-center items-center text-white"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
    <div className="relative z-10 flex flex-col items-center">
      <h1 className="text-4xl font-bold">Courses</h1>
      <nav className="mt-2">
        <ul className="flex space-x-2">
          <li>Home</li>
          <li>/</li>
          <li>Course</li>
        </ul>
      </nav>
    </div>
  </div>
  );
};

export default AllPageHeader;
