import React, { useState } from 'react';
import HomeLayout from '../../Layout/HomeLayout';

const lectures = [
  { id: 1, title: '13th Aug Orientation Lecture & Introduction To Python', duration: '2h 7m 28s' },
  { id: 2, title: '14th Aug Live Class Variables And Types', duration: '2h 41m 40s' },
  { id: 3, title: '16th Aug Live Class Keywords, Type Conversion, Input', duration: '2h 8m 59s' },
  // Add more lectures here
];

function CourseEnrollment() {
  const [selectedLecture, setSelectedLecture] = useState(lectures[0]);

  return (
    <HomeLayout>
    <div className="flex flex-col lg:flex-row p-4 space-y-4 lg:space-y-0 lg:space-x-4">
      <div className="w-full lg:w-3/4 space-y-4">
        <div className="relative" style={{ paddingTop: '56.25%' /* 16:9 Aspect Ratio */ }}>
          <iframe
            src={`https://www.youtube.com/embed/${selectedLecture.id}`}
            title={selectedLecture.title}
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">{selectedLecture.title}</h2>
          <p>Duration: {selectedLecture.duration}</p>
        </div>
        <nav className="flex space-x-4 border-b pb-2">
          <a href="#overview" className="text-blue-500">Overview</a>
          <a href="#resources" className="text-blue-500">Resources</a>
          <a href="#notes" className="text-blue-500">Notes</a>
          <a href="#doubts" className="text-blue-500">Doubts</a>
          <a href="#feedback" className="text-blue-500">Feedback</a>
        </nav>
        <div id="overview" className="space-y-2">
          <h3 className="text-xl font-semibold">Course Details</h3>
          <p>Full Stack Web Development using Python in Hindi</p>
          <p>Course Duration: 113h 52m 38s</p>
          <p>What you'll learn:</p>
          <ul className="list-disc ml-6">
            <li>Python basics</li>
            <li>List object basics</li>
            <li>String objects</li>
            <li>Tuples</li>
            <li>Functions</li>
            <li>Memory management</li>
            <li>OOP concepts</li>
            <li>Exception Handling</li>
            {/* Add more topics as needed */}
          </ul>
        </div>
        {/* Add Resources, Notes, Doubts, and Feedback sections here */}
      </div>
      <div className="w-full lg:w-1/4 space-y-4">
        <h3 className="text-xl font-semibold mb-4">Lecture List</h3>
        <ul>
          {lectures.map((lecture) => (
            <li key={lecture.id} className="mb-2">
              <button
                onClick={() => setSelectedLecture(lecture)}
                className="w-full text-left p-2 border border-gray-300 rounded hover:bg-gray-100"
              >
                <div className="flex justify-between">
                  <span>{lecture.title}</span>
                  <span>{lecture.duration}</span>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </HomeLayout>
  );
}

export default CourseEnrollment;
