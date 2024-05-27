import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCourse } from '../../Redux/Slices/CourseSlice'
import HomeLayout from '../../Layout/HomeLayout'
import CourseCard from '../../Component/CourseCard'
import CourseIntro from './CourseIntro'


const CourseAllList = () => {
    const dispatch=useDispatch()

    const [courseData]=useSelector((state)=>{
       return [state.course.courseData]
    })
    
    console.log(courseData);
    async function getCourses(){
        const res=await dispatch(getAllCourse())
    }
    useEffect(()=>{
       getCourses()
    },[])

    courseData.map((val)=><CourseCard key={val.id} description={val.description} thumbnail={val.thumbnail.secure_url} category={val.category} createdBy={val.createdBy} numberOfLecture={val.numberOfLecture} title={val.title}/>)
  return (
    <div>
         <div className='flex flex-wrap w-[90rem] justify-center items-center gap-[1.2rem] p-[1.5rem]'> 
             {courseData.map((val)=><CourseCard  obj={val} key={val._id}/>)}
          </div>
    </div>
  )
}

export default CourseAllList