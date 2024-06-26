import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../../Helper/axiosInstance";
import { json } from "react-router-dom";

const initialState={
    isLoggedIn:localStorage.getItem('isLoggedIn') || false,
    role:localStorage.getItem('role') || "",
    data:localStorage.getItem('data') || "ACTIVE",
    profileData:{}
}

// const ProfileData=[]

// console.log(ProfileData);

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


export const LoginAccount=createAsyncThunk("/auth/login",async(data)=>{
    try{
        console.log(data);
       const response=axiosInstance.post("user/login",data)
    //    console.log(data?.da);
       toast.promise(response,{
        loading:"Wait!, Authentication in progress...",
        success:(data)=>{
            return data?.data?.message
        },
        error:"Failed to Login"
       })
    //    console.log(data?.data);
       return (await response).data
    }catch(error){
        toast.error(error?.response?.data?.message)
    }
})

export const logout=createAsyncThunk("/auth/logout",async()=>{
    try{
       const response=axiosInstance.get("user/logout")
       toast.promise(response,{
        loading:"Wait! logout in progress....",
        success:(data)=>{
            return data?.data?.message
        },
        error:"Filed to logout"
       })
    }catch(error){
        toast.error(error?.response?.data?.message)
    }
})

export const me=createAsyncThunk("/auth/me",async()=>{
    try{
      const response=axiosInstance.get("user/me")
      console.log(response);
      toast.promise(response,{
        loading:"Wait! Authrizaton in Process",
        success:(data)=>{
            console.log(data?.data?.user);
            return data?.data?.message
        },
        error:"Failed to view Your Profile"
      })
    //   console.log((await response).data.data);
      return (await response).data.user
    }catch(e){
        toast.error(error?.response?.data?.message)
    }
})


const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
       builder
       .addCase(LoginAccount.fulfilled,(state,action)=>{
        localStorage.setItem("data",JSON.stringify(action?.payload?.user))
        localStorage.setItem("isLoggedIn",true)
        localStorage.setItem("role",action?.payload?.user?.role)
        state.isLoggedIn=true,
        console.log(action?.payload?.user)
        state.data=action?.payload?.user
        state.role=action?.payload?.user?.role
       })
       .addCase(logout.fulfilled,(state)=>{
        localStorage.clear()
        state.data={}
        state.isLoggedIn=false
        state.role=""
       })
       .addCase(me.fulfilled,(state,action)=>{
        //  console.log(action.payload)
         if(action.payload){
            console.log(action.payload);
            state.profileData={...action.payload}
            // console.log(state.profileData);
         }
       })
    }
})


export const {}=authSlice.actions

export default authSlice.reducer

