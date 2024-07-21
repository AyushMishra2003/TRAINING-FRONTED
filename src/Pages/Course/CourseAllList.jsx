import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCourse } from '../../Redux/Slices/CourseSlice';
import CourseCard from '../../Component/CourseCard';

const CourseAllList = () => {
    const dispatch = useDispatch();

    const { courseData } = useSelector(state => state.course);

    async function getCourses() {
        await dispatch(getAllCourse());
    }

    useEffect(() => {
        getCourses();
    }, []);

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className='flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8'>
                {courseData.map(course => (
                    <CourseCard
                        key={course._id}
                        obj={course}
                        description={course.description}
                        thumbnail={course.thumbnail.secure_url}
                        category={course.category}
                        createdBy={course.createdBy}
                        numberOfLecture={course.numberOfLecture}
                        title={course.title}
                        className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4"
                    />
                ))}
            </div>
        </div>
    );
};

export default CourseAllList;
