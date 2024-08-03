import React from 'react';
import { FaStar } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  return(    
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={course?.photo?.secure_url} alt={course?.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex items-center mb-2">
          <img src={course?.photo?.secure_url} alt={"CoursePhoto"} className="w-8 h-8 rounded-full mr-2" />
          <span className="font-medium text-gray-800">{"Ayush Mishra ji"}</span>
        </div>
        <h3 className="font-bold text-lg text-gray-900 mb-2">{course.title}</h3>
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} className={`mr-1 ${index < course.rating ? 'text-yellow-500' : 'text-gray-300'}`} />
          ))}
          <span className="text-gray-600">({course?.reviews})</span>
        </div>
        <div className='flex justify-between'>
          <button className="hover:bg-yellow-500 border border-yellow-500 text-yellow-500 hover:text-white duration-300 font-semibold py-2 px-4 rounded">
            Enroll Course
          </button>
          <button
            className="hover:bg-yellow-500 border border-yellow-500 text-yellow-500 hover:text-white duration-300 font-semibold py-2 px-4 rounded"
            onClick={(e) => {
              e.stopPropagation();
              navigate('/course/coursesDescription', { state: { course } });
            }}
          >
            View Detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
