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
   console.log(lectures);
   console.log(state);

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
     <div className='flex flex-col items-center justify-center gap-1 pt-12 pb-2 border border-black min-h-[90vh]'>
         <h1>i am display lecture</h1>
         <p className='text-xl font-semibold text-center text-yellow-500'>Course Name:{state.title}</p>
      {lectures && lectures.length>0 && <div className='flex justify-center w-full gap-10'>
            {/* left section for video playing */}
            <div className='w-[30rem] p-[2rem] rounded-lg border border-black'>
              <video src={state && lectures[currentVideo]?.lecture?.secure_url} 
              className='object-fill w-full rounded-tl-lg rounded-tr-lg' 
              controls
              disablePictureInPicture
              muted
              controlsList='nodownload'
              >  
             </video>   
             <div>
                <h1>{lectures && lectures[currentVideo]?.title}</h1>
                <p>{lectures && lectures[currentVideo]?.description}</p>
             </div>
            </div>
            {/* right section for displying list of lectures */}
             <div>
               <ul className='w-[28rem] p-2 rounded-lg gap-1 border border-black'>
                <li>
                  <p>Lectures list:</p>
                  {role==="ADMIN" && <button className='p-[0.5rem] px-[2rem] border border-black' onClick={()=>navigate("/course/addLecture",{state:{...state}})}>Add new lecture</button>}
                </li>
                {lectures && 
                  lectures.map((lecture,index)=>{
                    return(
                      <li key={lecture._id} >
                         <p className='cursor-pointer' onClick={()=>setCurrentVideo(index)}>
                           <span>
                            {" "}lecture {index+1}: {lecture.title}
                           </span>
                         </p> 
                         {role==="ADMIN" && <button onClick={()=>onLectureDelete(state._id,lecture?._id)}   className='p-[0.5rem] px-[1rem] border border-black'>Delete Lecture</button>}
                      </li>
                    )
                  })
                }
               </ul>
             </div>
         </div>}
    </div>

    </HomeLayout>
  )
}

export default DisplayLecture
