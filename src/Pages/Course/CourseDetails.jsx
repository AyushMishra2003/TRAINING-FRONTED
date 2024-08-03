import React, { useState } from 'react';
import { FaChevronDown, FaChevronRight, FaStar } from 'react-icons/fa';
import img from '../../assets/courseDetail.jpg';
import img1 from '../../assets/courseusername.png';
import HomeLayout from '../../Layout/HomeLayout';
import AllPageHeader from '../AllPageHeader/AllPageHeader';
import { useLocation } from 'react-router-dom';

const CourseDetails = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [tab, setTab] = useState('courseInfo');

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const handleTabChange = (tab) => {
    setTab(tab);
  };

  const location = useLocation();
  const { course } = location.state;

  console.log(course);
  

  return (
    <HomeLayout>
      <AllPageHeader name={"Course Details"} url={"/courseDetail"} />
      <div className="w-full bg-white">
        <div className="container mx-auto p-4 flex flex-col lg:flex-row gap-4">
          <div className="overflow-hidden w-full lg:w-2/3">
            <div className="p-6">
              <h1 className="text-3xl font-bold">{course?.title}</h1>
              <div className="flex items-center my-4">
                <img src={img1} alt="Josif Saturn" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="text-gray-700">By Ayush Mishra ji</p>
                  <p className="text-gray-600">Categories: <span>{course?.category}</span></p>
                </div>
              </div>
              <div className="flex items-center my-4">
                <span className="text-yellow-500">★★★★☆</span>
                <span className="ml-2 text-gray-600">(2 Ratings)</span>
              </div>
              <img src={course?.photo?.secure_url} alt="Course" className="w-full h-64 object-cover my-4" />
              <div className="bg-gray-100 p-4 rounded-lg text-center flex flex-col gap-5">
                <h2 className="text-2xl font-bold">Free</h2>
                <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg mt-2">Enroll now</button>
              </div>
              <div className="mt-6">
                <nav className="flex border-b">
                  <button
                    className={`mr-6 pb-2 ${tab === 'courseInfo' ? 'text-yellow-500 border-yellow-500 border-b-2' : 'text-gray-500'}`}
                    onClick={() => handleTabChange('courseInfo')}
                  >
                    Course Info
                  </button>
                  <button
                    className={`mr-6 pb-2 ${tab === 'reviews' ? 'text-yellow-500 border-yellow-500 border-b-2' : 'text-gray-500'}`}
                    onClick={() => handleTabChange('reviews')}
                  >
                    Reviews
                  </button>
                </nav>
                {tab === 'courseInfo' && (
                  <div className="mt-4">
                    <h3 className="text-xl font-bold">About Course</h3>
                    <p>{course?.aboutCourse}</p>
                    <div className="mt-4">
                      <h3 className="text-xl font-bold">What Will You Learn?</h3>
                      <ul className="list-disc ml-6">
                         {course?.whatWeLearn?.map((item, index) => (
                            <li key={index}>{item}</li>
                       ))}
                     </ul>
                    </div>
                  </div>
                )}
                {tab === 'reviews' && (
                  <div className="mt-4">
                    <h3 className="text-xl font-bold">Student Reviews</h3>
                    <div className="mt-2">
                      <div className="flex items-center">
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-gray-300" />
                        <span className="ml-2 text-gray-600">(4.0)</span>
                      </div>
                      <p className="mt-2 text-gray-700">"Great course! Learned a lot about sales techniques."</p>
                      <p className="text-gray-600">- Student 1</p>
                    </div>
                    <div className="mt-2">
                      <div className="flex items-center">
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-gray-300" />
                        <FaStar className="text-gray-300" />
                        <span className="ml-2 text-gray-600">(3.0)</span>
                      </div>
                      <p className="mt-2 text-gray-700">"Informative, but could use more examples."</p>
                      <p className="text-gray-600">- Student 2</p>
                    </div>
                  </div>
                )}
                <div className="mt-6">
                  <h3 className="text-xl font-bold">Course Content</h3>
                  <div className="mt-4">
                    <button
                      onClick={() => toggleSection('section1')}
                      className="flex items-center w-full py-2 px-4 bg-gray-200 rounded-lg hover:bg-gray-300"
                    >
                      <span className="text-lg">What is Sales?</span>
                      <span className="ml-auto">{expandedSection === 'section1' ? <FaChevronDown /> : <FaChevronRight />}</span>
                    </button>
                    {expandedSection === 'section1' && (
                      <div className="pl-4 mt-2">
                        <button className="flex items-center w-full py-2 px-4 bg-gray-100 rounded-lg">
                          <span className="text-lg">Lecture 1: Introduction</span>
                          <span className="ml-auto">07:00</span>
                        </button>
                      </div>
                    )}
                    <button
                      onClick={() => toggleSection('section2')}
                      className="flex items-center w-full py-2 px-4 bg-gray-200 rounded-lg hover:bg-gray-300 mt-2"
                    >
                      <span className="text-lg">Staying on the Sales Tightrope</span>
                      <span className="ml-auto">{expandedSection === 'section2' ? <FaChevronDown /> : <FaChevronRight />}</span>
                    </button>
                    {expandedSection === 'section2' && (
                      <div className="pl-4 mt-2">
                        <button className="flex items-center w-full py-2 px-4 bg-gray-100 rounded-lg">
                          <span className="text-lg">Lecture 1: Balancing Act</span>
                          <span className="ml-auto">10:00</span>
                        </button>
                      </div>
                    )}
                    <button
                      onClick={() => toggleSection('section3')}
                      className="flex items-center w-full py-2 px-4 bg-gray-200 rounded-lg hover:bg-gray-300 mt-2"
                    >
                      <span className="text-lg">Effective Communication</span>
                      <span className="ml-auto">{expandedSection === 'section3' ? <FaChevronDown /> : <FaChevronRight />}</span>
                    </button>
                    {expandedSection === 'section3' && (
                      <div className="pl-4 mt-2">
                        <button className="flex items-center w-full py-2 px-4 bg-gray-100 rounded-lg">
                          <span className="text-lg">Lecture 1: Clarity and Precision</span>
                          <span className="ml-auto">15:00</span>
                        </button>
                      </div>
                    )}
                    <button
                      onClick={() => toggleSection('section4')}
                      className="flex items-center w-full py-2 px-4 bg-gray-200 rounded-lg hover:bg-gray-300 mt-2"
                    >
                      <span className="text-lg">Overcoming Objections</span>
                      <span className="ml-auto">{expandedSection === 'section4' ? <FaChevronDown /> : <FaChevronRight />}</span>
                    </button>
                    {expandedSection === 'section4' && (
                      <div className="pl-4 mt-2">
                        <button className="flex items-center w-full py-2 px-4 bg-gray-100 rounded-lg">
                          <span className="text-lg">Lecture 1: Handling Rejections</span>
                          <span className="ml-auto">20:00</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 flex flex-col gap-4 items-center">
            <div className="bg-white shadow-md rounded-lg overflow-hidden pb-[5rem] pr-[4rem] pl-[2rem] pt-[2rem]">
              <h3 className="text-xl font-bold">Material Includes</h3>
              <ul className="list-disc ml-6">
                {course?.MaterialIncludes?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden pb-[5rem] pr-[4rem] pl-[2rem] pt-[2rem]">
              <h3 className="text-xl font-bold">Requirements</h3>
              <ul className="list-disc ml-6">
                {course?.Requirements?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden pb-[5rem] pr-[3rem] pl-[2rem] pt-[2rem]">
              <h3 className="text-xl font-bold">Audience</h3>
              <ul className="list-disc ml-6">
                {course?.Audience?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default CourseDetails;
