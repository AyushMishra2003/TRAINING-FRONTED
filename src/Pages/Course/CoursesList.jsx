import React, { useEffect, useState } from 'react';
import { FaFilter, FaTimes } from 'react-icons/fa';
import HomeLayout from '../../Layout/HomeLayout';
import AllPageHeader from '../AllPageHeader/AllPageHeader';
import CourseCard from './CourseCard';
import CourseCardSkeleton from './CourseSkeleton';
import CourseEmpty from './CourseEmpty';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCourse } from '../../Redux/Slices/CourseSlice';

const CoursesList = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 6;

  const clearFilters = () => {
    setSelectedCategory('');
    setSelectedTag('');
    setSelectedLevel('');
    setSelectedPrice('');
  };

  const dispatch = useDispatch();
  const { courseData, loading } = useSelector((state) => state.course);

  useEffect(() => {
    dispatch(getAllCourse());
  }, [dispatch]);

  // Filter courses based on search and filters
  const filteredCourses = courseData
    .filter(course =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(course =>
      (!selectedCategory || course.category === selectedCategory) &&
      (!selectedTag || course.tag === selectedTag) &&
      (!selectedLevel || course.level === selectedLevel) &&
      (!selectedPrice || course.price === selectedPrice)
    );

  // Pagination logic
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);

  return (
    <HomeLayout>
      <AllPageHeader name={"Course"} url={"/courses"} />
      <div className="flex flex-col lg:flex-row bg-[#FFFFFF] ">
        <aside className={`fixed lg:relative lg:w-1/4 lg:max-w-xs p-4 bg-white shadow-lg flex flex-col lg:gap-4 lg:shadow-none lg:bg-transparent transition-transform transform ${isFilterVisible ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'} lg:translate-x-0 right-0 top-0 h-full lg:h-auto z-50 `}>
          <div className="flex justify-between items-center mb-4 lg:hidden ">
            <h2 className="text-xl font-bold">Filters</h2>
            <button onClick={() => setIsFilterVisible(false)}>
              <FaTimes className="text-xl" />
            </button>
          </div>
          {/* Filter sections */}
          <div>
            <h3 className="font-semibold">Category</h3>
            <div className="space-y-2">
              {['Business', 'Design', 'Development'].map((category) => (
                <label key={category} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedCategory === category}
                    onChange={() => setSelectedCategory(prev => prev === category ? '' : category)}
                    className="form-checkbox"
                  />
                  <span className="ml-2">{category}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold">Tags</h3>
            <div className="space-y-2">
              {['Adobe XD', 'Graphic Design', 'Health & Fitness', 'Illustrations'].map((tag) => (
                <label key={tag} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedTag === tag}
                    onChange={() => setSelectedTag(prev => prev === tag ? '' : tag)}
                    className="form-checkbox"
                  />
                  <span className="ml-2">{tag}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold">Level</h3>
            <div className="space-y-2">
              {['AllLevels', 'Beginner', 'Intermediate'].map((level) => (
                <label key={level} className="flex items-center">
                  <input
                    type="radio"
                    name="level"
                    checked={selectedLevel === level}
                    onChange={() => setSelectedLevel(prev => prev === level ? '' : level)}
                    className="form-radio"
                  />
                  <span className="ml-2">{level}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold">Price</h3>
            <div className="space-y-2">
              {['Free', 'Paid'].map((price) => (
                <label key={price} className="flex items-center">
                  <input
                    type="radio"
                    name="price"
                    checked={selectedPrice === price}
                    onChange={() => setSelectedPrice(prev => prev === price ? '' : price)}
                    className="form-radio"
                  />
                  <span className="ml-2">{price}</span>
                </label>
              ))}
            </div>
          </div>
          <button
            onClick={clearFilters}
            className="border-[#FED952] border text-[#FED952] font-se hover:bg-[#FED953] hover:text-white px-6 py-2 rounded-full mt-4"
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
            {loading
              ? [...Array(coursesPerPage)].map((_, index) => <CourseCardSkeleton key={index} />)
              : filteredCourses.length === 0
              ? <CourseEmpty />
              : currentCourses.map((course, index) => (
                  <CourseCard key={index} course={course} />
                ))}
          </div>
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))}
              className="px-4 py-2 border rounded-lg mx-1"
              disabled={currentPage === 1}
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 border rounded-lg mx-1 ${currentPage === i + 1 ? 'bg-yellow-500 text-white' : ''}`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages))}
              className="px-4 py-2 border rounded-lg mx-1"
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </main>
      </div>
    </HomeLayout>
  );
};

export default CoursesList;
