import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../../Helper/axiosInstance";

const initialState={
    isLoggedIn:localStorage.getItem('isLoggedIn') || false,
    role:localStorage.getItem('role') || "",
    data:localStorage.getItem('data') || {}
}

export const createAccount=createAsyncThunk("/auth/signup",async (data)=>{
    console.log(data);
   try{
     const response=axiosInstance.post("user/register",data)
     console.log(response);
     toast.promise(response,{
        loading:"Wait creating your account",
        success:(data)=>{
        //  isLoggedIn(true)   
         return data?.data?.message
        },
        // success:isLoggedIn(true),
        error:"Failed to Create Account"
     })

     return (await response).data
   }catch(error){
    toast.error(error?.response?.data?.message)
   } 
})


const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{}
})


export const {}=authSlice.actions

export default authSlice.reducer

