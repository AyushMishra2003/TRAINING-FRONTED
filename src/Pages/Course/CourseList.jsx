import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCourse } from '../../Redux/Slices/CourseSlice'
import HomeLayout from '../../Layout/HomeLayout'
import CourseCard from '../../Component/CourseCard'

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
         <div className='flex flex-col items-center justify-center gap-1 pt-12 pb-2 border border-black '>
           <p className='text-center text-[1.5rem] font-normal'>Step in FarmingShip World</p>
           <p className='text-[3rem] font-bold font-mono '><span className='text-[#2A254D]'>Explore the Courses</span> made by Industry Expert</p>
          <div className='flex flex-wrap w-[90rem] justify-center items-center gap-[1.2rem] p-[1.5rem]'> 
             {courseData.map((val)=><CourseCard  obj={val} key={val._id}/>)}
          </div>
          {/* <div className='flex gap-3 '>
            <button className='px-[2.5rem] p-[0.2rem] font-semibold text-white rounded-md bg-[#7DBB28]'>Prev</button>
             <button className='px-[2.5rem] p-[0.2rem]  font-semibold text-white rounded-md  bg-[#7DBB28]'>Next</button>
           </div>  */}
        </div> 
       
      </HomeLayout>
    </div>
  )
}

export default CourseList
