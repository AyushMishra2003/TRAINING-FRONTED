import React, { useState } from 'react';
import { FaChevronDown, FaChevronRight, FaStar } from 'react-icons/fa';
import HomeLayout from '../../Layout/HomeLayout';
import AllPageHeader from '../AllPageHeader/AllPageHeader';

const CourseDetailSkelton = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [tab, setTab] = useState('courseInfo');

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const handleTabChange = (tab) => {
    setTab(tab);
  };

  return (
    <HomeLayout>
      <AllPageHeader name={"Course Details"} url={"/courseDetail"} />
      <div className="w-full bg-white">
        <div className="container mx-auto p-4 flex flex-col lg:flex-row gap-4">
          <div className="overflow-hidden w-full lg:w-2/3">
            <div className="p-6">
              <h1 className="text-3xl font-bold">Course Title Here</h1>
              <div className="flex items-center my-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                <div>
                  <p className="text-gray-700">Instructor Name</p>
                  <p className="text-gray-600">Categories: Category List</p>
                </div>
              </div>
              <div className="flex items-center my-4">
                <span className="text-yellow-500">★★★★☆</span>
                <span className="ml-2 text-gray-600">(Ratings)</span>
              </div>
              <div className="w-full h-64 bg-gray-200 my-4"></div>
              <div className="bg-gray-100 p-4 rounded-lg text-center flex flex-col gap-5">
                <h2 className="text-2xl font-bold">Price</h2>
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
                    <p>Course description here...</p>
                    <div className="mt-4">
                      <h3 className="text-xl font-bold">What Will You Learn?</h3>
                      <ul className="list-disc ml-6">
                        <li>Learning point 1</li>
                        <li>Learning point 2</li>
                        <li>Learning point 3</li>
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
                        <span className="ml-2 text-gray-600">(Rating)</span>
                      </div>
                      <p className="mt-2 text-gray-700">"Review comment here..."</p>
                      <p className="text-gray-600">- Student Name</p>
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
                      <span className="text-lg">Section Title 1</span>
                      <span className="ml-auto">{expandedSection === 'section1' ? <FaChevronDown /> : <FaChevronRight />}</span>
                    </button>
                    {expandedSection === 'section1' && (
                      <div className="pl-4 mt-2">
                        <button className="flex items-center w-full py-2 px-4 bg-gray-100 rounded-lg">
                          <span className="text-lg">Lecture Title 1</span>
                          <span className="ml-auto">Duration</span>
                        </button>
                      </div>
                    )}
                    <button
                      onClick={() => toggleSection('section2')}
                      className="flex items-center w-full py-2 px-4 bg-gray-200 rounded-lg hover:bg-gray-300 mt-2"
                    >
                      <span className="text-lg">Section Title 2</span>
                      <span className="ml-auto">{expandedSection === 'section2' ? <FaChevronDown /> : <FaChevronRight />}</span>
                    </button>
                    {expandedSection === 'section2' && (
                      <div className="pl-4 mt-2">
                        <button className="flex items-center w-full py-2 px-4 bg-gray-100 rounded-lg">
                          <span className="text-lg">Lecture Title 2</span>
                          <span className="ml-auto">Duration</span>
                        </button>
                      </div>
                    )}
                    <button
                      onClick={() => toggleSection('section3')}
                      className="flex items-center w-full py-2 px-4 bg-gray-200 rounded-lg hover:bg-gray-300 mt-2"
                    >
                      <span className="text-lg">Section Title 3</span>
                      <span className="ml-auto">{expandedSection === 'section3' ? <FaChevronDown /> : <FaChevronRight />}</span>
                    </button>
                    {expandedSection === 'section3' && (
                      <div className="pl-4 mt-2">
                        <button className="flex items-center w-full py-2 px-4 bg-gray-100 rounded-lg">
                          <span className="text-lg">Lecture Title 3</span>
                          <span className="ml-auto">Duration</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 flex flex-col gap-4 items-center">
            <div className="bg-white shadow-md rounded-lg overflow-hidden p-4">
              <h3 className="text-xl font-bold">Material Includes</h3>
              <ul className="list-disc ml-6">
                <li>10 hours of video content</li>
                <li>Access to course materials</li>
                <li>Certificate of completion</li>
              </ul>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden p-4">
              <h3 className="text-xl font-bold">Requirements</h3>
              <ul className="list-disc ml-6">
                <li>Basic understanding of sales</li>
                <li>Access to a computer</li>
                <li>Internet connection</li>
              </ul>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden p-4">
              <h3 className="text-xl font-bold">Audience</h3>
              <ul className="list-disc ml-6">
                <li>New salespeople</li>
                <li>Experienced sales professionals</li>
                <li>Anyone interested in sales</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default CourseDetailSkelton;
