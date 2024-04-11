import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./Slices/AuthSlice";
import CourseSliceReducer from "./Slices/CourseSlice";
import razorpaySliceReducer from "./Slices/RazorpaySlice";
import lectureSliceReducer from "./Slices/LectureSlice"
import statSliceReducer from "./Slices/StatSlice"
const store=configureStore({
    reducer:{
        auth:authSliceReducer,
        course:CourseSliceReducer,
        razorpay:razorpaySliceReducer,
        lecture:lectureSliceReducer,
        stats:statSliceReducer
    },
    devTools:true
})


export default store