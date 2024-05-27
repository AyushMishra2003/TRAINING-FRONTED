import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCourse } from '../../Redux/Slices/CourseSlice'
import HomeLayout from '../../Layout/HomeLayout'
import CourseCard from '../../Component/CourseCard'
import CourseIntro from './CourseIntro'
import CourseAllList from './CourseAllList'

const CourseList = () => {
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
    // (val.description,val.thumbnail.secure_url,val.category,val.createdBy,val.numberOfLecture,val.title,))
  return(
    <div>
      <HomeLayout>
         <div className='flex flex-wrap items-center justify-center gap-1 pt-12 pb-2  bg-[#F1EDEA] w-full '>
            <CourseIntro/>
            <CourseAllList/>
        </div> 
       
      </HomeLayout>
    </div>
  )
}

export default CourseList
