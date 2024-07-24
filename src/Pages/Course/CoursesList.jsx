import React, { useState } from 'react';
import { FaFilter, FaTimes } from 'react-icons/fa';
import img from '../../assets/courses.jpg';
import HomeLayout from '../../Layout/HomeLayout';
import AllPageHeader from '../AllPageHeader/AllPageHeader';

const courses = [
  {
    image: img,
    title: 'WordPress for Beginners – Master WordPress',
    users: 2,
    duration: '7h 30m',
    instructor: 'Janusz Yuda',
    category: 'Business, Design, Development, Marketing',
    price: 'Free',
  },
  {
    image: img,
    title: 'WordPress for Beginners – Master WordPress',
    users: 2,
    duration: '7h 30m',
    instructor: 'Janusz Yuda',
    category: 'Business, Design, Development, Marketing',
    price: 'Free',
  },
  {
    image: img,
    title: 'WordPress for Beginners – Master WordPress',
    users: 2,
    duration: '7h 30m',
    instructor: 'Janusz Yuda',
    category: 'Business, Design, Development, Marketing',
    price: 'Free',
  },
  {
    image: img,
    title: 'WordPress for Beginners – Master WordPress',
    users: 2,
    duration: '7h 30m',
    instructor: 'Janusz Yuda',
    category: 'Business, Design, Development, Marketing',
    price: 'Free',
  },
  {
    image: img,
    title: 'WordPress for Beginners – Master WordPress',
    users: 2,
    duration: '7h 30m',
    instructor: 'Janusz Yuda',
    category: 'Business, Design, Development, Marketing',
    price: 'Free',
  },
  {
    image: img,
    title: 'WordPress for Beginners – Master WordPress',
    users: 2,
    duration: '7h 30m',
    instructor: 'Janusz Yuda',
    category: 'Business, Design, Development, Marketing',
    price: 'Free',
  },
  // Add more courses as needed
];

const CoursesList = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const clearFilters = () => {
    setSelectedCategory('');
    setSelectedTag('');
    setSelectedLevel('');
    setSelectedPrice('');
  };

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  ); // Add your filter logic here

  return (
    <HomeLayout>
        <AllPageHeader/>
      <div className="flex flex-col lg:flex-row bg-[#FFFFFF] ">
        <aside className={`fixed lg:relative lg:w-1/4 lg:max-w-xs p-4 bg-white shadow-lg  flex flex-col  lg:gap-4 lg:shadow-none lg:bg-transparent transition-transform transform ${isFilterVisible ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'} lg:translate-x-0 right-0 top-0 h-full lg:h-auto z-50 `}>
          <div className="flex justify-between items-center mb-4 lg:hidden ">
            <h2 className="text-xl font-bold">Filters</h2>
            <button onClick={() => setIsFilterVisible(false)}>
              <FaTimes className="text-xl" />
            </button>
          </div>
          <div className=''>
            <h3 className="font-semibold ">Category</h3>
            <div className="space-y-2">
              {['Business', 'Design', 'Development'].map((category) => (
                <label key={category} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedCategory === category}
                    onChange={() => setSelectedCategory(category)}
                    className="form-checkbox"
                  />
                  <span className="">{category}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold ">Tags</h3>
            <div className="space-y-2">
              {['Adobe XD', 'Graphic Design', 'Health & Fitness', 'Illustrations'].map((tag) => (
                <label key={tag} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedTag === tag}
                    onChange={() => setSelectedTag(tag)}
                    className="form-checkbox"
                  />
                  <span className="">{tag}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold ">Level</h3>
            <div className="space-y-2">
              {['All Levels', 'Beginner', 'Intermediate'].map((level) => (
                <label key={level} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedLevel === level}
                    onChange={() => setSelectedLevel(level)}
                    className="form-checkbox"
                  />
                  <span className="">{level}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold ">Price</h3>
            <div className="space-y-2">
              {['Free', 'Paid'].map((price) => (
                <label key={price} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedPrice === price}
                    onChange={() => setSelectedPrice(price)}
                    className="form-checkbox"
                  />
                  <span className="">{price}</span>
                </label>
              ))}
            </div>
          </div>
          <button
            onClick={clearFilters}
            className=" border-[#FED952] border  text-[#FED952] font-se hover:bg-[#FED953]  hover:text-white px-6 py-2 rounded-full"
          >
            Clear Filters
          </button>
        </aside>
        <main className="w-full lg:w-3/4 p-4 lg:ml-8">
          <div className="flex flex-col lg:flex-row justify-between items-center mb-4">
            <div className="flex items-center space-x-2 mb-4 lg:mb-0">
              <button onClick={() => setIsFilterVisible(true)} className="lg:hidden">
                <FaFilter className="text-2xl" />
              </button>
              <h1 className="text-2xl font-bold">Courses</h1>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center space-y-2 lg:space-y-0 lg:space-x-4">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-input px-4 py-2 rounded-lg border"
              />
              <select className="form-select px-4 py-2 rounded-lg border">
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCourses.map((course, index) => (
              <div key={index} className="border rounded-lg p-4 flex flex-col">
                <img src={course.image} alt={course.title} className="w-full h-32 object-cover rounded-md mb-4" />
                <h2 className="text-xl font-bold mb-2">{course.title}</h2>
                <p className="text-gray-600 mb-2">By {course.instructor}</p>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">{course.users} users</span>
                  <span className="text-gray-600">{course.duration}</span>
                </div>
                <span className="text-lg font-bold mb-2">{course.price}</span>
                  <button className="mt-2 border border-[#FED952] text-[#FED952] duration-300 hover:text-[#fff] font-bold px-4 py-2 rounded hover:bg-[#FED952] ">Enroll Now</button>
          
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <button className="px-4 py-2 border rounded-lg mx-1">Previous</button>
            <button className="px-4 py-2 border rounded-lg mx-1">1</button>
            <button className="px-4 py-2 border rounded-lg mx-1">2</button>
            <button className="px-4 py-2 border rounded-lg mx-1">3</button>
            <button className="px-4 py-2 border rounded-lg mx-1">Next</button>
          </div>
        </main>
      </div>
    </HomeLayout>
  );
};

export default CoursesList;
