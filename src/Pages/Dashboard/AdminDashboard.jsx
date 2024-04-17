import React, { useEffect } from 'react'
import HomeLayout from '../../Layout/HomeLayout'
// import {Chart as ChartJS,ArcElement,Tooltip,Legand,CategoryScale,LinearScale,BarElement,Title} from "chart.js"
import { ArcElement, BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title,Tooltip } from "chart.js";

import { Bar, Pie } from "react-chartjs-2";
import { BsCollectionPlayFill, BsTrash } from "react-icons/bs";
import {FaSalesforce, FaUsers} from "react-icons/fa";
import { FcSalesPerformance } from "react-icons/fc";
import { GiMoneyStack } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteCourse, getAllCourse } from '../../Redux/Slices/CourseSlice';
import { getPaymentRecord } from '../../Redux/Slices/RazorpaySlice';
import {getStatsData} from '../../Redux/Slices/StatSlice'


ChartJS.register(ArcElement, BarElement, CategoryScale, Legend, LinearScale, Title, Tooltip);


const AdminDashboard = () => {

   const dispatch=useDispatch()
   const navigate=useNavigate()

   const {usersCount, subscribedUser}=useSelector((state)=>{
      console.log(state);
      return (state.stats)
   })
   // const allUsersCount=2
   // const subscribedCount=5
//    console.log(allUsersCount, subscribedCount);
//   console.log(usersCount,subscribedUser);

   const {allPayments,finalMonths,monthlySalesRecord}=useSelector((state)=>state.razorpay)
//    ye all payement m subscription count hoga usme aayega dyan rakhna
   const count=10

    // console.log(monthlySalesRecord);
   const myCourses=useSelector((state)=>state?.course?.courseData)

//    console.log(myCourses);

  const userData={
    labels:["Registred User","Enrolled User"],
    datasets:[
        {
        label:"User Details",
        data:[usersCount,subscribedUser],
        backgroundColor:["yellow","green"],
        borderWidth:1,
        borderColor:["yellow","green"]
     }
  ]
}

  const salesData={
    labels:["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"],
    fontColor:"black",
    datasets:[
        {
            label:"Sales/Month",
            data:monthlySalesRecord,
            backgroundColor:["red"],
            borderColor:["black"],
            borderWidth:2
        }
    ]
  }
   
 async function onCourseDelete(id){
    if(window.confirm("Are you sure you want to delete")){
        const res=await dispatch(deleteCourse(id))
        if(res?.payload?.success){
            await dispatch(getAllCourse()) 
        }
    }
 }


  useEffect(()=>{
    (
         async()=>{
            await dispatch(getAllCourse())
            await dispatch(getPaymentRecord())
            await dispatch(getStatsData())
         }
    )()
  },[])
  return (
    <HomeLayout>
    <div className='min-h-[90vh]  gap-6 text-black  w-[100vw]   bg-[#DEE4FA] border border-red-500 hidden lg:flex  lg:flex-col lg:items-center lg:justify-center'>
         <h1 className='text-5xl font-semibold text-red-500 '>Admin Dashboard</h1>     
      <div className=' gap-10 w-[100vw] items-center justify-center  flex '>    
       <div className=''>
         <div className=''>
            {/* pichar */}

            <div>
                <Pie data={userData}/>
            </div>
          <div className='flex items-center gap-3'>
            <div className='flex items-center gap-4'>
                <div className='flex flex-col items-center'>
                    <p className='text-xl font-semibold '>Registred Users</p>
                    <h3 className='text-xl font-bold'>{usersCount}</h3>
                </div>
                <FaUsers className='text-5xl text-yellow-500'/>
            </div>
            <div className='flex items-center gap-4'>
                <div className='flex flex-col items-center'>
                    <p className='text-xl font-semibold '>Subscribed Users</p>
                    <h3 className='text-xl font-bold'>{subscribedUser}</h3>
                </div>
                <FaUsers className='text-5xl text-green-500'/>
            </div>
         </div>   
         </div>

        </div> 
       
       <div>
          <div className=' w-[25rem] h-[10rem]'>
            <Bar    data={salesData}/>
          </div>
          <div>
            <div className='flex items-center gap-4'>
                <div className='flex flex-col items-center'>
                    <p className='text-xl font-semibold '>Subscription Count</p>
                    <h3 className='text-xl font-bold'>{count}</h3>
                </div>
                <FcSalesPerformance className='text-5xl text-yellow-500'/>
            </div>
          </div>
       </div>
        
      </div> 

      <div>
        <div className='flex flex-col items-center justify-center'>
            <h1 className='text-xl font-bold '>Courses OverView</h1>

            <button onClick={()=>navigate("/course/create")} className=' w-fit  p-[0.4rem] px-[1.2rem] rounded-lg bg-[#1F2937] text-white font-bold'>
              Create new course
            </button>
            <table className='table overflow-x-scroll '>
               <thead className=''>
                  <tr>
                    <th>S No</th>
                    <th>Course title</th>
                    <th>Course Category</th>
                    <th>Instrcutor</th>
                    <th>Total Lecture</th>
                    <th>Description</th>
                    <th>Action</th>
                  </tr>
               </thead>
               <tbody className=''>
                {myCourses.map((course,ind)=>{
                   return(
                    <tr key={course._id} className=''>
                       <td>{ind+1}</td>
                       <td>
                        <textarea readOnly value={course?.title} className='w-40 h-auto resize-none bg-[#DEE4FA]'></textarea>
                       </td>
                       <td>
                        {course?.category}
                       </td>
                       <td>
                        {course?.createdBy}
                       </td>
                       <td>
                        {course?.numberOfLecture}
                       </td>
                       <td>
                       <textarea readOnly value={course?.description} className='w-40 h-[9rem] resize-none bg-[#DEE4FA]'></textarea>
                       </td>
                       <td className='flex items-center gap-4' >
                            <button onClick={()=>navigate("/course/displaylecture",{state:{...course}})} className='p-[0.2rem] px-[2rem] font-bold text-black rounded-md'>
                               <BsCollectionPlayFill className='text-[1rem] font-bold text-green-600'/>
                            </button>
                            <button onClick={()=>onCourseDelete(course?._id)} className='p-[0.2rem] px-[2rem] font-bold text-black rounded-md'>
                               <BsTrash className='text-[1rem] font-bold text-red-500'/>
                            </button>
                       </td>
                    </tr>
                   )
                })}

               </tbody>
            </table>
        </div>
      </div> 
    </div>
    </HomeLayout>
  )
}

export default AdminDashboard
