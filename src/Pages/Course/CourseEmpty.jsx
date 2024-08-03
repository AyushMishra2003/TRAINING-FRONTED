import React from 'react';

const CourseEmpty = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4  my-8 rounded-lg  max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-gray-700 mb-2 text-center">No Courses Available</h2>
      <p className="text-gray-500 text-center">
        We couldn't find any courses matching your criteria. Please try adjusting your filters or check back later.
      </p>
    </div>
  );
};

export default CourseEmpty;
