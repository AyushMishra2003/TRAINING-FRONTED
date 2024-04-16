import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import toast from "react-hot-toast"
import axiosInstance from "../../Helper/axiosInstance"


const initialState={
    usersCount:0,
    subscribedUser:0,
}

export const getStatsData=createAsyncThunk("stats/get",async()=>{
    try{
       const response=axiosInstance.get("/admin/stats")
       toast.promise(response,{
        loading:"Getting the stats...",
        success:(data)=>{
            return data?.data?.message
        },
        error:"Failed to load data stats"
       })
       return (await response).data
    }catch(error){
         toast.error(error?.response?.data?.message)
    }
})


const statSlice=createSlice({
   name:"stat",
   initialState,
   reducers:{},
   extraReducers:(builder)=>{
    builder.addCase(getStatsData.fulfilled,(state,action)=>{
         state.usersCount=action?.payload?.usersCount,
         state.subscribedUser=action?.payload?.subscribedUser
    })
   }
})


export default statSlice.reducer