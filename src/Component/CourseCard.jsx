import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
const CourseCard = ({ obj }) => {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate('/course/description', { state: { ...obj } })} 
      className="max-w-sm rounded-lg overflow-hidden shadow-lg m-4 relative group cursor-pointer transition-transform transform hover:scale-105"
    >
      <img 
        src={obj.thumbnail.secure_url} 
        alt={obj.title} 
        className="w-full h-40 object-cover"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          {obj.title}
        </div>
        <p className="text-gray-700 text-base">
          Course Name: {obj.category}
        </p>
        <p className="text-gray-700 text-base">
          Lessons: {obj.numberOfLecture}
        </p>
        <p className="text-gray-700 text-base">
          By: {obj.createdBy}
        </p>
        <p className="text-gray-700 text-base mt-2 line-clamp-3">
          {obj.description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button 
          className="bg-[#2A254D] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#1e203d] transition-colors"
          onClick={(e) => { e.stopPropagation(); navigate('/course/description', { state: { ...obj } }) }}
        >
          View Detail
        </button>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-center justify-center">
        <p className="text-lg flex items-center">See Details <span><FaArrowRight/></span> </p>
      </div>
    </div>
  );
}

export default CourseCard;
