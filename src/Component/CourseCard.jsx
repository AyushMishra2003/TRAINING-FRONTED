import React from 'react'
import { useNavigate } from 'react-router-dom'

const CourseCard = ({obj}) => {
    
   const navigate=useNavigate()

  return (
    <div  onClick={()=>navigate("/course/description/")}  className='border border-black w-[25rem] flex flex-col rounded-lg'>
       <img src={obj.thumbnail.secure_url} alt=""  />
       <div className='flex gap-[0.3rem]'>
          <p className='text-[1rem] font-normal'>Lesson</p>
          <p className='font-semibold'>{obj.numberOfLecture}</p>
       </div>
       <p className='text-[1rem] w-[24rem]  break-words'>{obj.title}</p>
       <p className='text-[1rem] w-[24rem] break-words'>{obj.description}</p>
       <div className='flex gap-[1rem] font-bold text-[1rem]'>
         <p className='line-through'>$100</p>
         <p className='text-[#7DBB28]'>$50</p>
       </div>
       <button className='px-[2rem] p-[0.2rem] rounded-b-lg bg-[#7DBB28] text-white'>Add to Card</button>
    </div>
  )
}

export default CourseCard
