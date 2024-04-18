import React, { useEffect } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import HomeLayout from '../../Layout/HomeLayout'
import { useSelector, useDispatch } from 'react-redux'
import { GiDuration } from "react-icons/gi";
import { IoMdVideocam } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import discountImg from '../../assets/img/discount.jpg'

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
        <div className='min-h-[90vh] pt-20 gap-3  text-black w-[100vw] flex flex-col  bg-[#DEE4FA] pl-4 pb-3 md:gap-[2rem] md:items-center md:justify-center'>
          <div className='flex flex-col gap-4 md:gap-3 md:items-center md:justify-center lg:gap-[3rem]'>
              <div className='flex flex-col gap-1 rounded-md md:gap-4 md:flex-row sm:items-start lg:gap-8'>
                  <img src={state?.thumbnail?.secure_url} alt="thumbnail" className=' w-full md:w-[25rem] lg:w-[35rem] md:h-[20rem] rounded-md object-cover' /> 
                  <div className='flex flex-col gap-2 sm:items-start md:w-[21rem] lg:w-[23rem] ' >
                      <div className='flex flex-col gap-2 sm:items-start'>
                       <p className='text-[1.3rem] font-semibold '>{state?.title}</p>
                       <p className='text-[0.9rem] font-semibold '>{state?.description}</p>
                     </div>
                  <div className='flex flex-col sm:flex-row sm:gap-5 md:flex-col md:gap-1'>   
                  {
                     role==="ADMIN" || data?.subscription?.status === 'active' ? <button className=' py-[0.5rem] px-[3rem] text-white w-fit bg-[#F57005] font-semibold rounded-lg' onClick={()=>navigate("/course/displaylecture",{state:{...state}})} >Watch Lectures</button>:<button onClick={()=>navigate("/checkout")}  className=' py-[0.5rem] px-[3rem] text-white bg-yellow-600 rounded-md'>Subscribe</button>
                  }
                  {
                    role==="ADMIN" && <button className='py-[0.5rem] px-[3rem] text-white bg-[#F57005] font-semibold rounded-lg w-fit' onClick={()=>navigate("/course/deleteCourse",{state:{...state}})}>DELETE COURSE</button>
                  }
                  {
                    role==="USER" && <button className='py-[0.5rem] px-[2rem] text-white bg-[#F57005] rounded-md border-none' onClick={()=>navigate("/course/demoVideo",{state:{...state}})}>Demo Video</button>
                  }
                </div>  
               <div className='flex flex-col gap-1 '>
                 <div className='flex gap-4'>
                    <p className='text-[1.5rem] font-semibold'>&#8377;2500</p>
                    <strike className="text-[1.5rem] font-semibold">5000</strike>
                 </div>
                 <p className='text-red-500 text-[1.4rem]'>{`50% Discount`}</p>  
                </div>  
               </div>
              </div>
              <div className='flex flex-wrap gap-3 sm:flex-row lg:gap-[3rem]'>
                <div className='flex w-[16rem] sm:w-[14rem] md:w-[14rem] p-2 items-center bg-[#15191E]   gap-1 rounded-md shadow-md'>
                  <GiDuration className='text-[5rem] text-[#FF5722]'/>
                  <div className='flex flex-col items-center text-white'>
                     <p className='font-bold text-[1.4rem]'>Duration</p>
                     <p>7 weeks</p>
                  </div>
             
                </div>
                <div className='flex w-[16rem] sm:w-[14rem] md:w-[14rem] p-2 items-center bg-[#15191E] gap-1 rounded-md shadow-md'>
                  <IoMdVideocam className='text-[5rem] text-[#906AD4]'/>
                  <div className='flex flex-col items-center text-white'>
                     <p className='font-bold text-[1.4rem]'>Lecture</p>
                     <p>{state?.numberOfLecture}</p>
                  </div>
                 
                </div>
                <div className='flex w-[16rem] sm:w-[14rem] md:w-[14rem] p-2 items-center bg-[#15191E] gap-1 rounded-md shadow-md'>
                  <CiUser className='text-[5rem] text-[#7CBF2F]'/>
                  <div className='flex flex-col items-center text-white'>
                    <p className='font-bold text-[1.4rem]'>Enrolled</p>
                    <p>0</p>
                  </div>
               
                </div>
              </div>
           
         </div> 
         {/* <div className='flex flex-col  gap-2 p-[1.5rem] text-[1.5rem] rounded-md bg-[#15191e] text-white sm:w-[30rem] md:w-[45rem] lg:w-[18rem] '>
                  <div className=''>
                    <p className=' text-[1.5rem]'>Duration</p>
                    <p className="">2hrs</p>
                  </div>
                  <div className=''>
                    <p className=' text-[1.5rem]'>Lesson</p>
                    <p className=''>{state?.numberOfLecture}</p>
                  </div>
                  <div className=''>
                   <p className=' text-[1.5rem]'>Skill</p>
                   <p className=''>Advance</p>
                  </div>
                  <div className=''>
                   <p className=' text-[1.5rem]'>Language</p>
                   <p className=''>HiEnglish</p>
                  </div>
                  <div className=''>
                   <p className=' text-[1.5rem]'>Skill Level</p>
                   <p className=''>Expert</p>
                  </div> 
                   <div className=''>
                   <p className=' text-[1.5rem]'>Certificate</p>
                   <p className=''>Yes</p>
                  </div>
          </div>   */}
           <div className='flex gap-2 flex-col w-[90%] sm:w-[90%] sm:flex-row sm:justify-evenly rounded-md bg-[#15191E] shadow-[2px_2px_9px_#000,-2px_-2px_1px_#3a3b3a]  flex-wrap items-start justify-center md:gap-6 text-white md:items-center md:justify-center md:w-[85%] lg:w-[70%]'>
                        <div className='p-2 sm:text-center'>
                            <p className='text-[1.25rem] capitalize font-semibold tracking-wide text-white'>{state?.category}</p>
                            <p className='text-[0.85rem] font text-[#dbdbdb] tracking-wide'>Category</p>
                        </div>
                        <div className='p-2 sm:text-center'>
                            <p className='text-[1.25rem] capitalize font-semibold tracking-wide'>HiEnglish</p>
                            <p className='text-[0.85rem] font text-[#dbdbdb] tracking-wide'>Language</p>
                        </div>
                        <div className='p-2 sm:text-center'>
                            <p className='text-[1.25rem] capitalize font-semibold tracking-wide'>{state?.numberOfLecture}</p>
                            <p className='text-[0.85rem] font text-[#dbdbdb] tracking-wide'>Total Lectures</p>
                        </div>
                        <div className='p-2 sm:text-center'>
                            <p className='text-[1.25rem] capitalize font-semibold tracking-wide'>{state?.createdBy}</p>
                            <p className='text-[0.85rem] font text-[#dbdbdb] tracking-wide'>Instructor</p>
                        </div>
                        <div className='p-2 sm:text-center'>
                            <p className='text-[1.25rem] capitalize font-semibold tracking-wide'>10+</p>
                            <p className='text-[0.85rem] font text-[#dbdbdb] tracking-wide'>Hours of learning</p>
                        </div>
            </div>
      </div>  
    </HomeLayout>
  )
}

export default CourseDescription
