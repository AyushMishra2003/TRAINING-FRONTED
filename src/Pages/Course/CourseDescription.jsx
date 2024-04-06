import React, { useEffect } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import HomeLayout from '../../Layout/HomeLayout'
import { useSelector } from 'react-redux'

const CourseDescription = () => {
   
   const {state}=useLocation()
   const navigate=useNavigate()

   const {role,data}=useSelector((state)=>state.auth)
   

   useEffect(()=>{
       console.log(state);
       console.log(role);
   },[])  
  return (
    <HomeLayout>
        <div className='min-h-[90vh] pt-12 px-20 flex items-center    justify-center  bg-gray-600'>
          <div className='border border-black flex gap-[1rem]'>

           <div className='flex flex-col items-center gap-[0.2rem] '>
                <img src={state?.thumbnail?.secure_url} alt="thumbnail" className='w-full h-64' />   
                 <div className='flex items-center gap-[2rem]'>
                   <p className='text-[1.5rem] text-yellow-600'>Total Lectures</p>
                   <p className='text-[1.5rem] text-white'>{state?.numberOfLecture}</p>
                  </div> 
                  <div className='flex items-center gap-[2rem]'>
                    <p className='text-[1.5rem] text-yellow-600'>Instructor:</p>
                    <p className='text-[1.5rem] text-white'>{state?.createdBy}</p>
                  </div>  
                 {
                     role==="ADMIN" || data?.subscription?.status==="ACTIVE"?<button className=' p-[0.2rem] px-[2rem] text-white bg-yellow-600'>Watch Lectures</button>:<button onClick={()=>navigate("/checkout")}  className=' p-[0.2rem] px-[2rem] text-white bg-yellow-600'>Subscribe</button>
                 }
           </div>
           <div className='text-white  flex flex-col gap-[2rem] '>
            <p className='break-words w-[30rem] text-[1.7rem]'>{state?.title}</p>
            <div>
               <p>Course Description</p>
               <p className='w-[27rem] text-[1.5rem] break-words'>{state?.description}</p>
            </div>
           </div>
         </div>  
        </div>
    </HomeLayout>
  )
}

export default CourseDescription
