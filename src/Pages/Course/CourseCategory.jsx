import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import img from '../../assets/coursephoto.jpg';
import userphoto from '../../assets/courseusername.png';

// Sample placeholder course data
const demoCourses = [
  {
    image: img,
    logo: userphoto,
    teacher: "Doris Jordan",
    title: "User Experience Design Essentials Online 2024",
    rating: 4.0,
    reviews: 1,
  },
  {
    image: img,
    logo: userphoto,
    teacher: "Jaction Leo",
    title: "Because Millions of websites and applications use PHP",
    rating: 4.5,
    reviews: 2,
  },
  {
    image: img,
    logo: userphoto,
    teacher: "Doris Jordan",
    title: "Complete Refresher Financial Analyst Course",
    rating: 4.0,
    reviews: 2,
  },
  {
    image: img,
    logo: userphoto,
    teacher: "John Doe",
    title: "Introduction to Machine Learning",
    rating: 4.3,
    reviews: 3,
  },
  {
    image: img,
    logo: userphoto,
    teacher: "Jane Smith",
    title: "Advanced React and Redux",
    rating: 4.8,
    reviews: 5,
  },
  {
    image: img,
    logo: userphoto,
    teacher: "Alice Brown",
    title: "Mastering Python for Data Science",
    rating: 4.7,
    reviews: 4,
  },
];

const CourseCard = ({ course }) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden">
    <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <div className="flex items-center mb-2">
        <img src={course.logo} alt={course.teacher} className="w-8 h-8 rounded-full mr-2" />
        <span className="font-medium text-gray-800">{course.teacher}</span>
      </div>
      <h3 className="font-bold text-lg text-gray-900 mb-2">{course.title}</h3>
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, index) => (
          <FaStar key={index} className={`mr-1 ${index < course.rating ? 'text-yellow-500' : 'text-gray-300'}`} />
        ))}
        <span className="text-gray-600">({course.reviews})</span>
      </div>
      <button className="hover:bg-yellow-500 border border-yellow-500 text-yellow-500 hover:text-white duration-300 font-semibold py-2 px-4 rounded">Enroll Course</button>
    </div>
  </div>
);

const CourseCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState("development");

  return (
    <div className="container mx-auto p-4 flex flex-col gap-8">
      <h1 className="text-4xl text-[#201654] text-center font-bold">Top Featured Courses</h1>
      <div className="flex justify-center flex-wrap gap-4 mb-8">
        {["development", "healthFitness", "marketing", "photography"].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`py-2 px-4 rounded-full ${selectedCategory === category ? "bg-yellow-500 text-black font-semibold" : "bg-gray-200 text-black font-semibold"}`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1).replace(/([A-Z])/g, ' $1')}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {demoCourses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseCategory;
