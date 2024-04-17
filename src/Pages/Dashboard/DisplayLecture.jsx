import React, { useEffect, useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { deleteCourseLecture, getCourseLectures } from '../../Redux/Slices/LectureSlice'
import HomeLayout from '../../Layout/HomeLayout'
const DisplayLecture = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {state}=useLocation()
    // console.log(state._id);
    // console.log(state.thumbnail);
    // console.log(state);
   const lectures=useSelector((state)=>{
          return(state.lecture.lectures)
   })
   const {role}=useSelector((state)=>state.auth)
   const [currentVideo,setCurrentVideo]=useState(0)

  //  console.log(role);
  //  console.log(lectures);
  //  console.log(state);

  async function onLectureDelete(courseId,lectureId){
    console.log("hyy i am on lecture delete");
    console.log(courseId,lectureId);
    await dispatch(deleteCourseLecture({courseId:courseId,lectureId:lectureId}))
    console.log("done deleted");
    getLecture(courseId)
  }

   async function getLecture(){
     const response=await dispatch(getCourseLectures(state._id))
   } 
   useEffect(()=>{
    if(!state){
      useNavigate("/courses")
    }
    getLecture()
   },[])
  //  getLecture()
  return (
    <HomeLayout>
     <div className='flex flex-col  gap-1 min-h-[90vh]  w-[100vw] pt-[4rem] bg-[#DEE4FA] lg:pt-[1rem]'>
         {/* <p className='text-[1.4rem] font-semibold text-center text-[#F78F3C]'>Course Name:{state.title}</p> */}
       <div className='flex flex-col items-center gap-4 p-2 md:flex-row md:items-start'>
            {/* left section for video playing */}
            <div className='flex flex-col gap-3 rounded-lg '>
              <video src={state && lectures[currentVideo]?.lecture?.secure_url} 
              className='object-fill w-full rounded-tl-lg rounded-tr-lg ' 
              controls
              disablePictureInPicture
              muted
              controlsList='nodownload'
              >  
             </video>   
             <div className=''>
                <h1 className='text-[1.5rem] font-medium '>{lectures && lectures[currentVideo]?.title}</h1>
                <p className='text-[1rem] font-medium font-400'>{lectures && lectures[currentVideo]?.description}</p>
             </div>
            </div>
            {/* right section for displying list of lectures */}
             <div className='w-full shadow-[2px_3px_5px_black] p-2'>
               <ul className='gap-1 rounded-lg shadow-md'>
                <li>
                  <p className='text-[1.3rem] font-bold '>Lectures list:</p>
                  {role==="ADMIN" && <button className='p-[0.5rem] px-[1.6rem] rounded-md text-white text-[1.2rem] font-semibold bg-red-400' onClick={()=>navigate("/course/addLecture",{state:{...state}})}>Add new lecture</button>}
                </li>
                {lectures && 
                  lectures.map((lecture,index)=>{
                    return(
                      <li key={lecture._id} >
                         <p className='cursor-pointer text-[1rem] font-semibold' onClick={()=>setCurrentVideo(index)}>
                           <span className='text-[1rem] font-semibold tetxt-black'>
                            {" "}lecture {index+1}: {lecture.title}
                           </span>
                         </p> 
                         {role==="ADMIN" && <button onClick={()=>onLectureDelete(state._id,lecture?._id)}   className='p-[0.5rem] px-[1.6rem] rounded-md text-white text-[1.2rem] font-semibold bg-green-400'>Delete Lecture</button>}
                      </li>
                    )
                  })
                }
               </ul>
             </div>
         </div>
    </div>

    </HomeLayout>
  )
}

export default DisplayLecture
