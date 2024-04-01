import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createNewCourse } from '../../Redux/Slices/CourseSlice'
import { AiOutlineArrowLeft } from "react-icons/ai";
import HomeLayout from '../../Layout/HomeLayout'
import { Link } from 'react-router-dom'
const CreateCourse = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [previewImage,setPreviewImage]=useState("")
  const [userInput,setUserInput]=useState({
     title:"",
     category:"",
     createdBy:"",
     description:"",
     thumbnail:null
  })


  function handleImageUpload(e){
        e.preventDefault();
        console.log("i am handle image uplaods");
        const uploadedImage = e.target.files[0];
        console.log(uploadedImage)
        if(uploadedImage) {
             setUserInput({
                ...userInput,
                thumbnail: uploadedImage
            });
            const fileReader = new FileReader();
            fileReader.readAsDataURL(uploadedImage);
            // fileReader.addEventListener("load", function () {
            //     thumbnail:uploadedImage
            //     previewImage:this.result
            //     console.log(userInput.previewImage)
            // })
            fileReader.addEventListener("load", function () {
              setPreviewImage(this.result);
          })
        }
  }

  function handleUserInput(e){
    const {name,value}=e.target
    setUserInput({
      ...userInput,
      [name]:value
    })
    console.log(userInput);
  }

  async function onFormSubmit(e){
    e.preventDefault()
    if(!userInput.title || !userInput.category || !userInput.createdBy || !userInput.description || !userInput.thumbnail){
      toast.error("All field are required")
      return 
    }

    const response=await dispatch(createNewCourse(userInput))

  if(response?.payload?.success){
    setUserInput({
      title:"",
      category:"",
      createdBy:"",
      description:"",
      thumbnail:null,
      previewImage:"" 
    })
    navigate("/courses")
  }
}
  return (
    <HomeLayout>
            <div className="flex items-center justify-center h-[100vh]">
                <form
                    onSubmit={onFormSubmit}
                    className="flex flex-col justify-center gap-5 rounded-lg p-4 text-black w-[700px] my-10 shadow-[0_0_10px_black] relative"
                >
                    
                    <Link className="absolute text-2xl cursor-pointer top-8 link text-accent">
                        <AiOutlineArrowLeft />
                    </Link>

                    <h1 className="text-2xl font-bold text-center">
                        Create New Course
                    </h1>

                    <main className="grid grid-cols-2 gap-x-10">
                        <div className="gap-y-6">
                            <div>
                                <label htmlFor="image_uploads" className="cursor-pointer">
                                    {previewImage ? (
                                        <img 
                                            className="w-full m-auto border h-44"
                                            src={previewImage}
                                        />
                                    ): (
                                        <div className="flex items-center justify-center w-full m-auto border h-44">
                                            <h1 className="text-lg font-bold">Upload your course thumbnail</h1>
                                        </div>
                                    )}

                                </label>
                                <input 
                                    className="hidden"
                                    type="file"
                                    id="image_uploads"
                                    accept=".jpg, .jpeg, .png"
                                    name="image_uploads"
                                    onChange={handleImageUpload}
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-lg font-semibold" htmlFor="title">
                                    Course title
                                </label>
                                <input
                                    required
                                    type="text"
                                    name="title"
                                    id="title"
                                    placeholder="Enter course title"
                                    className="px-2 py-1 bg-transparent border"
                                    value={userInput.title}
                                    onChange={handleUserInput}
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1">
                            <div className="flex flex-col gap-1">
                                <label className="text-lg font-semibold" htmlFor="createdBy">
                                    Course Instructor
                                </label>
                                <input
                                    required
                                    type="text"
                                    name="createdBy"
                                    id="createdBy"
                                    placeholder="Enter course instructor"
                                    className="px-2 py-1 bg-transparent border"
                                    value={userInput.createdBy}
                                    onChange={handleUserInput}
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="text-lg font-semibold" htmlFor="category">
                                    Course category
                                </label>
                                <input
                                    required
                                    type="text"
                                    name="category"
                                    id="category"
                                    placeholder="Enter course category"
                                    className="px-2 py-1 bg-transparent border"
                                    value={userInput.category}
                                    onChange={handleUserInput}
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-lg font-semibold" htmlFor="description">
                                    Course description
                                </label>
                                <textarea
                                    required
                                    type="text"
                                    name="description"
                                    id="description"
                                    placeholder="Enter course description"
                                    className="h-24 px-2 py-1 overflow-y-scroll bg-transparent border resize-none"
                                    value={userInput.description}
                                    onChange={handleUserInput}
                                />
                            </div>
                        </div>
                    </main>

                    <button type="submit" className="w-full py-2 text-lg font-semibold transition-all duration-300 ease-in-out bg-yellow-600 rounded-sm cursor-pointer hover:bg-yellow-500">
                        Create Course
                    </button>


                </form>
            </div>
    </HomeLayout>
  )
}

export default CreateCourse
