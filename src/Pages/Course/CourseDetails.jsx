import React, { useState } from 'react';
import { FaChevronDown, FaChevronRight, FaStar } from 'react-icons/fa';
import img from '../../assets/courseDetail.jpg';
import img1 from '../../assets/courseusername.png';
import HomeLayout from '../../Layout/HomeLayout';
import AllPageHeader from '../AllPageHeader/AllPageHeader';

const CourseDetails = () => {
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
      <AllPageHeader />
      <div className="w-full bg-white">
        <div className="container mx-auto p-4 flex flex-col lg:flex-row gap-4">
          <div className="overflow-hidden w-full lg:w-2/3">
            <div className="p-6">
              <h1 className="text-3xl font-bold">Sales Training: Practical Sales Techniques</h1>
              <div className="flex items-center my-4">
                <img src={img1} alt="Josif Saturn" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="text-gray-700">By Josif Saturn</p>
                  <p className="text-gray-600">Categories: Business, Design, Health & Fitness</p>
                </div>
              </div>
              <div className="flex items-center my-4">
                <span className="text-yellow-500">★★★★☆</span>
                <span className="ml-2 text-gray-600">(2 Ratings)</span>
              </div>
              <img src={img} alt="Course" className="w-full h-64 object-cover my-4" />
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
                    <p>Are you new to PHP or need a refresher? Then this course will help you get all the fundamentals...</p>
                    <p>It covers the basics of PHP, including syntax, functions, and how to work with databases.</p>
                    <p>By the end of this course, you'll be able to build dynamic web applications with PHP.</p>
                    <p>Enroll now and start your journey to becoming a proficient PHP developer.</p>
                    <p>Our hands-on approach ensures you gain practical experience.</p>
                    <div className="mt-4">
                      <h3 className="text-xl font-bold">What Will You Learn?</h3>
                      <ul className="list-disc ml-6">
                        <li>Enjoy selling by befriending customers</li>
                        <li>Be organized and efficient</li>
                        <li>Feel confident preparing for a sales meeting</li>
                        <li>Close deals with confidence</li>
                        <li>Understand the selling process and how to master it</li>
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
                <li>10 hours of video content</li>
                <li>Access to course materials</li>
                <li>Certificate of completion</li>
              </ul>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden pb-[5rem] pr-[4rem] pl-[2rem] pt-[2rem]">
              <h3 className="text-xl font-bold">Requirements</h3>
              <ul className="list-disc ml-6">
                <li>Basic understanding of sales</li>
                <li>Access to a computer</li>
                <li>Internet connection</li>
              </ul>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden pb-[5rem] pr-[3rem] pl-[2rem] pt-[2rem]">
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

export default CourseDetails;
