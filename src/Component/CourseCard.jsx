import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CiStar } from "react-icons/ci";

const CourseCard = ({obj}) => {
    
   const navigate=useNavigate()

  return (
    <div  onClick={()=>navigate('/course/description' ,{state: {...obj}})}  className='lg:w-[25rem] sm:w-[25rem] h-fit w-[20rem] flex flex-col rounded-lg cursor-pointer pb-1 shadow-[2px_4px_5px_#1F2937] items-center justify-center'>
       <img src={obj.thumbnail.secure_url} alt="" className='lg:w-[25rem] lg:h-[10rem] w-[19rem] object-cover' />
       <div className='flex flex-col justify-between gap-2 p-2'>
          <p className='text-[1.2rem]  text-[#2A254D] font-semibold  '>Course Name:- {obj.category}</p>
          <p className='text-[1.5rem] font-bold '>{obj.title}</p>
          <p className='text-[1.rem] font-normal text-[#838383]'>{obj.description}</p>
          <div className='flex justify-between '>
            <p> <span>Lessons: </span>   {obj.numberOfLecture}</p>
            <p>By: {obj.createdBy}</p>
          </div>
          <button className='px-[2rem] p-[0.2rem] w-fit rounded-md bg-[#2A254D] text-white font-semibold'>View Detail</button>
       </div>
    </div>
  )
}

export default CourseCard
