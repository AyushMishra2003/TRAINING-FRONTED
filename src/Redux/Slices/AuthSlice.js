import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../../Helper/axiosInstance";
import { json } from "react-router-dom";

const initialState={
    isLoggedIn:localStorage.getItem('isLoggedIn') || false,
    id:localStorage.getItem('id') || "",
    role:localStorage.getItem('role') || "",
    data:localStorage.getItem('data') || {},
    userData:localStorage.getItem('userData') || [],
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

export const me = createAsyncThunk('/auth/me', async (id, { rejectWithValue }) => {
    try {
      console.log(id);
      console.log(typeof id);
      
      // Correct way to pass params
      const response =  axiosInstance.get('/user/me', {
        params: { id }
      });
  
      console.log(response);
  
      toast.promise(
        response,
        {
          loading: "Wait! Authorization in Process",
          success: (data) => {
            return data?.data?.message;
          },
          error: "Failed to view Your Profile"
        }
      );
  
      // Return the user data
      console.log(await response);
      return (await response).data.user
  
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message || "Failed to view Your Profile");
  
      // Return a rejected value with error message
      return rejectWithValue(error?.response?.data?.message);
    }
  });

const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
       builder
       .addCase(LoginAccount.fulfilled,(state,action)=>{
        localStorage.setItem("data",JSON.stringify(action?.payload?.user))
        localStorage.setItem("isLoggedIn",true)
        localStorage.setItem("id",action?.payload?.user?._id)
        localStorage.setItem("role",action?.payload?.user?.role)
        state.isLoggedIn=true,
        console.log(action?.payload?.user)
        state.data=action?.payload?.user
        state.role=action?.payload?.user?.role
        localStorage.setItem("userData",JSON.stringify(action?.payload?.user))

        console.log(state.userData);
        console.log(state.isLoggedIn);
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
            console.log(state.profileData);
            // console.log(state.profileData);
         }
       })
    }
})


export const {}=authSlice.actions

export default authSlice.reducer

