import React, { useEffect } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import HomeLayout from '../../Layout/HomeLayout'
import { useSelector, useDispatch } from 'react-redux'

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
        <div className='min-h-[90vh] pt-12 px-20 gap-3  text-black w-[100vw] flex flex-col justify-center'>
          <div className='flex items-start justify-center gap-2 '>
              <div className='border border-black rounded-md'>
                  <img src={state?.thumbnail?.secure_url} alt="thumbnail" className='h-[20rem] w-fit object-cover rounded-md' />  
                  <p className='text-[#F57005] font-bold text-[1.2rem]'>Instructor: {state?.createdBy}</p> 
                <div className='flex flex-col gap-2'>
                    <p className='text-[1.3rem] font-semibold '> <span className='text-[1.3rem]'>Course Name: </span>{state?.title}</p>
                    <p className='text-[1rem] font-semibold w-[22rem]'>{state?.description}</p>
               </div>
              </div>
             <div className='flex flex-col gap-2 p-[2rem] text-[1.5rem] border border-black rounded-md'>
                 <p>Course Feature</p>
                  <div className='flex items-center justify-between border-b border-black'>
                    <p className='text-[#8D97A3]'>Duration</p>
                    <p>2hrs</p>
                  </div>
                  <div className='flex items-center justify-between border-b border-black'>
                    <p className='text-[#8D97A3]'>Lesson</p>
                    <p>{state?.numberOfLecture}</p>
                  </div>
                  <div className='flex items-center justify-between border-b border-black'>
                   <p className='text-[#8D97A3]'>Skill</p>
                   <p>Advance</p>
                  </div>
                  <div className='flex items-center justify-between border-b border-black'>
                    <p className='text-[#8D97A3]'>Price</p>
                    <div className='flex items-center text-[1rem] gap-4'>
                    <p className='text-[1.2rem] font-semibold'>$200</p>
                    <p className='text-[1.5rem] font-bold line-through'>$500</p>
                 </div>
                  </div>
                  <div className='flex items-center justify-between border-b border-black '>
                   <p className='text-[#8D97A3]'>Language</p>
                   <p>HiEnglish</p>
                  </div>
                  {
                     role==="ADMIN" || 1?<button className=' p-[0.4rem] px-[4rem] text-white w-fit bg-[#F57005] font-semibold rounded-lg' onClick={()=>navigate("/course/displaylecture",{state:{...state}})} >Watch Lectures</button>:<button onClick={()=>navigate("/checkout")}  className=' p-[0.2rem] px-[2rem] text-white bg-yellow-600'>Subscribe</button>
                  }
                  {
                    role==="ADMIN" && <button className='p-[0.2rem] px-[3rem] text-white bg-[#F57005] font-semibold rounded-lg' onClick={()=>navigate("/course/deleteCourse",{state:{...state}})}>DELETE COURSE</button>
                  }
                  {
                    role==="USER" && <button className='p-[0.2rem] px-[3rem] text-white bg-[#F57005] rounded-md border-none' onClick={()=>navigate("/course/demoVideo",{state:{...state}})}>Demo Video</button>
                  }
           </div>
        </div>
      </div>  
    </HomeLayout>
  )
}

export default CourseDescription
