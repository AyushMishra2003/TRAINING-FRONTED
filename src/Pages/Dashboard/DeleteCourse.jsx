import React, { useEffect } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { deleteCourse } from '../../Redux/Slices/CourseSlice'
const DeleteCourse = () => {
  const {state}=useLocation()
  const navigate=useNavigate()
  const dispatch=useDispatch()
  console.log(state);
  async function ondeletecourse(){
    console.log("i am delete course");
    await dispatch(deleteCourse(state?._id))
    navigate("/courses")
  }
  useEffect(()=>{
      if(!state){
        navigate("/courses")
      }
      ondeletecourse()
      
  },[])
  return (
    <div>
      <h1>i am delete lecture</h1>
    </div>
  )
}

export default DeleteCourse
