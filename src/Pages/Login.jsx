import React, { useState } from 'react'
import HomeLayout from '../Layout/HomeLayout'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import { LoginAccount } from '../Redux/Slices/AuthSlice'
const Login = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const [loginData,setLoginData]=useState({
      email:"",
      password:""
  })

  function handleUserInput(e){
     const {name,value}=e.target
     setLoginData({
      ...loginData,
      [name]:value
     })
  }
  
  async function Login(event){
    console.log("ayush");
     event.preventDefault()
     if(email=="" || password==""){
      toast.error("Please fill All the details")
      return 
     }
    
    // const formData=new FormData()
    // formData.append("email",loginData.email)
    // formData.append("password",loginData.password)
   
    const LoginData={
      "email":loginData.email,
      "password":loginData.password
    }
    const response=await dispatch(LoginAccount(LoginData))
    if(response?.payload?.success)
    navigate("/")
    
    setLoginData({
      email:"",
      password:""
    })
  }

  console.log(loginData);
  return (
    <HomeLayout>
      
      <div className='flex items-center justify-center min-h-[90vh] bg-gray-500'>
          <form noValidate  onSubmit={Login}    className='flex flex-col  justify-center gap-3 rounded-lg  text-white shadow-[0_0_10px_black] sm:w-96 sm:p-5 w-70 p-4' >
             <h1 className='text-2xl font-bold text-center '> Login Page</h1>
             <div className='flex flex-col gap-1'>
                <label htmlFor="email" className='font-semibold'>Email</label>
                <input type="email" required name='email' id='email' placeholder='Enter your email' className='bg-transparent border rounded-md px focus:none' onChange={handleUserInput} value={loginData.email} />
             </div>   
             <div className='flex flex-col gap-1'>
                <label htmlFor="password" className='font-semibold'>Password</label>
                <input type="password" required name='password' id='password' placeholder='Enter your Password' className='bg-transparent border rounded-md px focus:none' onChange={handleUserInput} value={loginData.password}  />
             </div>   
             <button type='submit'  className='w-full py-1 text-2xl font-semibold transition-all duration-300 ease-in-out bg-yellow-600 rounded-md cursor-pointer hover:bg-yellow-400'>Login In</button>
             <p className='text-center'>Not Have an Account? <Link to='/signup' className='cursor-pointer link text-accent'>Sign up</Link></p>
          </form>
       </div>

    </HomeLayout>
  )
}

export default Login
