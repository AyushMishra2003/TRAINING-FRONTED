import React, { useEffect, useState } from 'react'
import HomeLayout from '../../Layout/HomeLayout'
import {useLocation,useNavigate} from 'react-router-dom'
import {useDispatch} from "react-redux"
import {toast} from 'react-hot-toast'
import { addCourseLecture } from '../../Redux/Slices/LectureSlice'
import { AiOutlineArrowLeft } from "react-icons/ai";
const AddLecture = () => {

   const courseDetails=useLocation().state
   const dispatch=useDispatch()
   const navigate=useNavigate()

   const [userInput,setUserInput]=useState({
    id:courseDetails._id,
    lecture:undefined,
    title:"",
    description:"",
    videoSrc:""
   })   
  
   console.log(userInput);


  function handleInputChange(e){
    const {name,value}=e.target

    setUserInput({
        ...userInput,
        [name]:value
    })
  } 
  
  function handleVideo(e){
    console.log(e);
    const video=e.target.files[0]
    const source=window.URL.createObjectURL(video)
    console.log(source);
    setUserInput({
        ...userInput,
        lecture:video,
        videoSrc:source
    })
  }
  
 async function onFormSubmit(e){
    e.preventDefault();
    if(!userInput.lecture || !userInput.title || !userInput.description){
      toast.error("All Field is Required")
      return 
    }
    const response=await dispatch(addCourseLecture(userInput))
    if(response?.payload?.success){
        setUserInput({
            id:courseDetails._id,
            lecture:undefined,
            title:"",
            description:"",
            videoSrc:""
        })
    }
 }

 useEffect(()=>{
    if(!courseDetails)
    navigate("/courses")
 },[])

  return (
    <HomeLayout>
         <div className="min-h-[90vh] text-black flex flex-col items-center justify-center gap-10 mx-16  ">
                <div className="flex flex-col gap-5 p-2 shadow-[0_0_10px_black] w-[95vw] md:w-[60vw] rounded-lg  mt-[4rem] lg:mt-[1.5rem] ">
                    <header className="relative flex items-center justify-center">
                        <button 
                            className="absolute text-xl text-green-500 left-2"
                            onClick={() => navigate(-1)}
                        >
                            <AiOutlineArrowLeft />
                        </button>
                        <h1 className="text-xl font-semibold text-yellow-500">
                            Add new lecture
                        </h1>
                    </header>
                    <form 
                        onSubmit={onFormSubmit} className="flex flex-col gap-3"
                    >

                        <input 
                            type="text"
                            name="title"
                            placeholder="enter the title of the lecture"
                            onChange={handleInputChange}
                            className="px-3 py-1 bg-transparent border text-black"
                            value={userInput.title}
                        />
                        <textarea 
                            type="text"
                            name="description"
                            placeholder="enter the description of the lecture"
                            onChange={handleInputChange}
                            className="px-3 py-1 overflow-y-scroll bg-transparent border resize-none h-36 text-black"
                            value={userInput.description}
                        />
                        {userInput.videoSrc ? (
                            <video 
                                muted
                                src={userInput.videoSrc}
                                controls 
                                controlsList="nodownload nofullscreen"
                                disablePictureInPicture
                                className="object-fill w-full rounded-tl-lg rounded-tr-lg"
                            >

                            </video>
                        ) : (
                            <div className="flex items-center justify-center h-48 border cursor-pointer">
                                <label className="font-semibold cursor-pointer text-black" htmlFor="lecture">Choose your video</label>
                                <input type="file" className="hidden" id="lecture" name="lecture" onChange={handleVideo} accept="video/mp4 video/x-mp4 video/*" />
                            </div>
                        )}
                        <button type="submit" className="py-1 text-lg font-semibold btn btn-primary" >
                            Add new Lecture
                        </button>
                    </form>
                </div>
            </div>  
    </HomeLayout>
  )
}

export default AddLecture
