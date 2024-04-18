import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { me } from '../Redux/Slices/AuthSlice'
import HomeLayout from '../Layout/HomeLayout'
import { Navigate } from 'react-router-dom'



const UserProfile = () => {
   const dispatch=useDispatch()
   
   const  userProfile=useSelector((state)=>state.auth.profileData)

      console.log(userProfile);

   async function getProfile(){
      console.log("get profile run");
      const res=await dispatch(me())
   }

   useEffect(()=>{
     getProfile()
   },[])

  return (
    <HomeLayout>
      <div className= 'flex flex-col items-center justify-center gap-10  min-h-[90vh] max-w-full bg-gradient-to-r from-cyan-500 to-blue-500 pt-[3rem] sm:pt-[4rem] lg:pt-[0rem]'>
        <div className='flex p-[2rem] bg-[#1A202A] rounded-lg flex-col  sm:flex-row sm:gap-[2rem] lg:gap-[3rem] lg:p-[5rem]'>
          <div className='flex flex-col  gap-2'>
             <div>
                <img src={userProfile?.avater?.secure_url} alt="userProfileImage" className='w-[8rem] h-[8rem] rounded-full' />
             </div>
             <div className='flex flex-col gap-1'>
                 <label htmlFor="FullName" className='font-light text-white'>Full Name</label>
                  <input type="text" value={userProfile?.fullName}  className='pr-[2rem] p-[0.3rem] border border-[#2D3A4B] bg-[#1A202A] text-white font-light' disabled/>
             </div>
             <div className='flex flex-col gap-[0.3rem]'>
                  <label htmlFor="Number" className='font-light text-white'>Number</label>
                 <input type="number" value={userProfile?.number} className='pr-[2rem] p-[0.3rem] border border-[#2D3A4B] bg-[#1A202A] font-light text-white'  disabled/>
             </div>
             <div className='flex flex-col gap-[0.3rem]'>
               <label htmlFor="email" className='font-light text-white'>Email</label>
               <input type="email" value={userProfile?.email} className='pr-[2rem] p-[0.3rem] border border-[#2D3A4B] bg-[#1A202A] font-light text-white' disabled />
               {/* <p>{userProfile?.email}</p> */}
             </div>
          </div>
          <div className='flex flex-col gap-6 '>
            <div>
               <p className='font-light text-white text-[1rem]'>Role</p>
               <p className='pr-[5rem] p-[0.3rem] border border-[#2D3A4B] font-light text-white'>{userProfile?.role}</p>
            </div>
            <button className='p-[0.1rem] px-[3rem] text-black bg-[#FFB827] rounded-md ' onClick={()=>Navigate("/coming")}> Edit Profile</button>
            <button className='p-[0.1rem] px-[3rem] text-black bg-[#FFB827] rounded-md' onClick={()=>Navigate("/coming")}>Change Passoword</button>
          </div>
        </div>
      </div>
    </HomeLayout>
  )
}

export default UserProfile
