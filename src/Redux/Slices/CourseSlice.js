import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast"
import axiosInstance from "../../Helper/axiosInstance"



const initialState={
    courseData:[]
}

export const getAllCourse=createAsyncThunk("/course/get",async()=>{

    try{
      const response=axiosInstance.get("/courses")

      toast.promise(response,{
        loading:"loading course data...",
        success:"courses loaded succesfully",
        error:"failed to get the courses"
      })
      return (await response).data.data
    }catch(error){
        toast.error(error?.response?.data?.message)
    }
})


export const createNewCourse=createAsyncThunk("/course/create",async(data)=>{
  try{
    let formData=new FormData()
    formData.append("title",data?.title)
    formData.append("description",data?.description)
    formData.append("category",data?.category)
    formData.append("createdBy",data?.createdBy)
    formData.append("thumbnail",data?.thumbnail)
    
    const response=axiosInstance.post("/courses",formData)


    toast.promise(response,{
      loading:"creating new Course",
      success:"Course created Successfull",
      error:"failed to create course"
    })

    return (await response).data

  }catch(error){
     toast.error(error.response.data.message)
  }
})

export const deleteCourse=createAsyncThunk("/course/delete",async(cid)=>{
  try{
    const response=axiosInstance.delete(`/courses/${cid}`)
    toast.promise(response,{
      loading:"deleting course lectures",
      success:"Lecture delete sucessfully",
      error:"Failed to delete the lectures"
     })
     return (await response).data
    // console.log("hyyy ");
  }catch(error){
      toast.error(error.response.data.message)
  }
})


const courseSlice=createSlice({
    name:"courses",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
      builder.addCase(getAllCourse.fulfilled,(state,action)=>{
        console.log(action);
        if(action.payload){
            state.courseData=[...action.payload]
        }
      })
    }
})

export default courseSlice.reducer