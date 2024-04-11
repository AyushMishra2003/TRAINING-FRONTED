import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CiStar } from "react-icons/ci";

const CourseCard = ({obj}) => {
    
   const navigate=useNavigate()

  return (
    <div  onClick={()=>navigate('/course/description' ,{state: {...obj}})}  className='w-[25rem] flex flex-col rounded-lg border cursor-pointer hover:border border-[#2A254D] pb-1'>
       <img src={obj.thumbnail.secure_url} alt=""  />
       <div className='flex flex-col gap-2 p-2'>
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
