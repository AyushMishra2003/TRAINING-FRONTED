import React, { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import CourseCardSkeleton from "./CourseSkeleton";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourse } from "../../Redux/Slices/CourseSlice";
import { Link } from "react-router-dom";

const CourseCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState("Business");
  const [visibleCourses, setVisibleCourses] = useState(6); // State to manage number of visible courses
  const dispatch = useDispatch();
  const { courseData, loading } = useSelector((state) => state.course);

  useEffect(() => {
    dispatch(getAllCourse());
  }, [dispatch]);

  // Filter courses based on the selected category
  const filteredCourses = courseData.filter(course => course.category === selectedCategory);

  // Set of unique categories based on the course data
  const categories = ["Business", "Design", "Development"];

  // Handler to show more courses
  const handleShowMore = () => {
    setVisibleCourses(prevCount => prevCount + 6); // Show 6 more courses on each click
  };

  return (
    <div className="container mx-auto p-4 flex flex-col gap-8">
      <h1 className="text-4xl text-[#201654] text-center font-bold">Top Featured Courses</h1>
      <div className="flex justify-center flex-wrap gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => { setSelectedCategory(category); setVisibleCourses(6); }} // Reset visible courses on category change
            className={`py-2 px-4 rounded-full ${selectedCategory === category ? "bg-yellow-500 text-black font-semibold" : "bg-gray-200 text-black font-semibold"}`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {loading
          ? [...Array(6)].map((_, index) => <CourseCardSkeleton key={index} />)
          : filteredCourses.length > 0
            ? filteredCourses.slice(0, visibleCourses).map((course, index) => (
                <CourseCard key={index} course={course} />
              ))
            : <p className="text-center text-gray-500">No courses available for this category.</p>
        }
      </div>
      {/* {filteredCourses.length > visibleCourses && ( */}
        <div className="flex justify-center mt-4">
          <Link 
             to={"/coursesList"}
            className="py-2 px-4 bg-yellow-500 text-black font-semibold rounded-full">
            View More
          </Link>
        </div>
      {/* )} */}
    </div>
  );
};

export default CourseCategory;
