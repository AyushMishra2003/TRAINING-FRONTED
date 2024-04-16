import React, { useEffect } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import HomeLayout from '../../Layout/HomeLayout'
import { useSelector, useDispatch } from 'react-redux'
import { GiDuration } from "react-icons/gi";
import { IoMdVideocam } from "react-icons/io";
import { CiUser } from "react-icons/ci";
const CourseDescription = () => {
   
   const {state}=useLocation()

   const navigate=useNavigate()
   const dispatch=useDispatch()

   const {role,data,profileData}=useSelector((state)=>state.auth)
  //  console.log(data);
  //  console.log(profileData);
   
  async function deleteCourse(){
    // console.log(cid);
    // const response=await dispatch(deleteCourse(cid))
    console.log("hyy i am delete course function");
    await dispatch(deleteCourse(state?._id))
    // navigate("/courses")
  }

   useEffect(()=>{
      if(!state){
        navigate('/courses')
      }
   },[])  
  return (
    <HomeLayout>
        <div className='min-h-[90vh] pt-12  gap-3  text-black w-[100vw] flex flex-col lg:flex-row items-center justify-center bg-[#DEE4FA]'>
          <div className='flex flex-col items-center justify-center gap-4 md:gap-1 '>
              <div className='flex flex-col sm:flex-row sm:items-start rounded-md gap-7 items-center justify-center  '>
                  <img src={state?.thumbnail?.secure_url} alt="thumbnail" className=' w-[18rem] md:w-[25rem] sm:w-[20rem] sm:h-[20rem] h-[17rem] object-cover rounded-md ' /> 
                  <div className='flex gap-2 flex-col items-center sm:items-start'>
                    <p className='text-[#F57005] font-bold text-[1.2rem] text-center'>Instructor: {state?.createdBy}</p> 
                      <div className='flex flex-col items-center justify-center gap-2 p-2 sm:items-start'>
                       <p className='text-[1rem] font-semibold '> <span className='text-[1rem]'>Course Name: </span>{state?.title}</p>
                       <p className='text-[0.9rem] font-semibold w-[18rem] sm:w-[20rem]'>{state?.description}</p>
                     </div>
               <div className='flex flex-col gap-2 '>
                {
                     role==="ADMIN" || data?.subscription?.status === 'active' ? <button className=' py-[0.5rem] px-[3rem] text-white w-fit bg-[#F57005] font-semibold rounded-lg' onClick={()=>navigate("/course/displaylecture",{state:{...state}})} >Watch Lectures</button>:<button onClick={()=>navigate("/checkout")}  className=' py-[0.5rem] px-[3rem] text-white bg-yellow-600 rounded-md'>Subscribe</button>
                  }
                  {
                    role==="ADMIN" && <button className='py-[0.5rem] px-[3rem] text-white bg-[#F57005] font-semibold rounded-lg' onClick={()=>navigate("/course/deleteCourse",{state:{...state}})}>DELETE COURSE</button>
                  }
                  {
                    role==="USER" && <button className='py-[0.5rem] px-[2rem] text-white bg-[#F57005] rounded-md border-none' onClick={()=>navigate("/course/demoVideo",{state:{...state}})}>Demo Video</button>
                  }
               </div> 
               <div className='flex  items-center gap-1  w-fit'>
                    <p className='text-[1.5rem]'>Price:-</p>
                    <div className='flex items-center text-[1rem] gap-4'>
                    <p className='text-[1.2rem] font-semibold'>$200</p>
                    <p className='text-[1.5rem] font-bold line-through'>$500</p>
                   </div>
                  </div>  
               </div>
              </div>
              <div className='flex flex-col sm:flex-row items-center justify-center gap-3 '>
                <div className='flex w-[16rem] sm:w-[12rem] md:w-[15rem] p-2 items-center bg-white  gap-1 rounded-md shadow-md'>
                  <GiDuration className='text-[5rem] text-[#FF5722]'/>
                  <div className='flex flex-col items-center'>
                     <p className='font-bold text-[1.4rem]'>Duration</p>
                     <p>7 weeks</p>
                  </div>
             
                </div>
                <div className='flex w-[16rem] sm:w-[12rem] md:w-[15rem] p-2 items-center bg-white gap-1 rounded-md shadow-md'>
                  <IoMdVideocam className='text-[5rem] text-[#906AD4]'/>
                  <div className='flex flex-col items-center'>
                     <p className='font-bold text-[1.4rem]'>Lecture</p>
                     <p>{state?.numberOfLecture}</p>
                  </div>
                 
                </div>
                <div className='flex w-[16rem] sm:w-[12rem] md:w-[15rem] p-2 items-center bg-white gap-1 rounded-md shadow-md'>
                  <CiUser className='text-[5rem] text-[#7CBF2F]'/>
                  <div className='flex flex-col items-center'>
                    <p className='font-bold text-[1.4rem]'>Enrolled</p>
                    <p>0</p>
                  </div>
               
                </div>
              </div>
           
         </div> 
         <div className='flex flex-col  gap-2 p-[1.5rem] text-[1.5rem] rounded-md bg-white sm:w-[30rem] md:w-[45rem] lg:w-[18rem] '>
                 <p className='text-center text-[1.6rem] font-semibold'>Course Feature</p>
                <div className='flex flex-wrap lg:flex-col gap-[2rem] items-start justify-between  px-3 sm:w-[25rem]  md:w-[40rem lg:w-[18rem]' >
                  <div className='flex items-center justify-between gap-1 w-fit'>
                    <p className='text-black text-[1.5rem]'>Duration</p>
                    <p className='text-[#8D97A3] '>2hrs</p>
                  </div>
                  <div className='flex items-center justify-between gap-1  lg:border-none'>
                    <p className='text-black text-[1.5rem]'>Lesson</p>
                    <p className='text-[#8D9743]'>{state?.numberOfLecture}</p>
                  </div>
                  <div className='flex items-center justify-between gap-1  lg:border-none'>
                   <p className='text-black text-[1.5rem]'>Skill</p>
                   <p className='text-[#8D97A3]'>Advance</p>
                  </div>
                  <div className='flex items-center justify-between  lg:border-none gap-1 '>
                   <p className='text-black text-[1.5rem]'>Language</p>
                   <p className='text-[#8D97A3]'>HiEnglish</p>
                  </div>
                  <div className='flex items-center justify-between  lg:border-none gap-1 '>
                   <p className='text-black text-[1.5rem]'>Skill Level</p>
                   <p className='text-[#8D97A3]'>Expert</p>
                  </div> 
                   <div className='flex items-center justify-between border-b border-black lg:border-none gap-1 '>
                   <p className='text-black text-[1.5rem]'>Certificate</p>
                   <p className='text-[#8D97A3]'>Yes</p>
                  </div>
            </div>
          </div>  
      </div>  
    </HomeLayout>
  )
}

export default CourseDescription
