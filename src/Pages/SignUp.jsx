import React, { useState } from 'react'
import HomeLayout from '../Layout/HomeLayout'
import { BsPersonCircle } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {toast} from 'react-hot-toast'
import { createAccount } from '../Redux/Slices/AuthSlice'
const SignUp = () => {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    

    const [previewImage,setPreviewImage]=useState("")
    const [signupData,setSignData]=useState({
        fullName:"",
        email:"",
        password:"",
        avatar:""
    })

    function handleUserInput(e){
        const {name,value}=e.target
        setSignData({
            ...signupData,
          [name]:value
        })
    }

    function getImage(event) {
        event.preventDefault();
        const uploadedImage = event.target.files[0];

        if(uploadedImage) {
             setSignData({
                ...signupData,
                avatar: uploadedImage
            });
            const fileReader = new FileReader();
            fileReader.readAsDataURL(uploadedImage);
            fileReader.addEventListener("load", function () {
                setPreviewImage(this.result);
            })
        }
    }
   
    async function createNewAccount(event){
       event.preventDefault()
       if(!signupData.email || !signupData.fullName || !signupData.password || !signupData.avatar){
        toast.error("Please fill all the details")
        return 
       }

    //    field length
    if(signupData.fullName.length<5){
        toast.error("Name Should be alteast 5 Characters")
        return 
    }
    if(!signupData.email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )){
        toast.error("Invalid Email Id ")
        return 
      }
   
    // if(!signupData.password.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)){
    //     toast.error("Passoword Should be 6 to 16 Character long with  atleast a Number, a Character")
    //     return 
    // }  
      
    const formData=new FormData()
    // console.log(signupData.email,signupData.fullName,signupData.password);
    formData.append("fullName",signupData.fullName)
    formData.append("email",signupData.email)
    formData.append("password",signupData.password)
    formData.append("avatar",signupData.avatar)

    
    // dispatch create account action

    const response=await dispatch(createAccount(formData))
    if(response?.payload?.success)
    navigate("/")

    setSignData({
        fullName:"",
        email:"",
        password:"",
        avatar:""
    })
    setPreviewImage("")
}
   

  return (
    <HomeLayout>
    
       <div className='flex items-center justify-center h-[90vh] bg-gray-500'>
          <form noValidate    onSubmit={createNewAccount}  className='flex flex-col  justify-center gap-3 rounded-lg  text-white shadow-[0_0_10px_black] w-96 p-5' >
             <h1 className='text-2xl font-bold text-center '>Registration Page</h1>
             
             <label htmlFor="image_uploads" className="cursor-pointer">
                        {previewImage ? (
                            <img className="w-24 h-24 m-auto rounded-full" src={previewImage} />
                        ) : (
                            <BsPersonCircle className='w-24 h-24 m-auto rounded-full' />
                        )}
                    </label>
                    <input 
                        onChange={getImage}
                        className="hidden"
                        type="file"
                        name="image_uploads"
                        id="image_uploads"
                        accept=".jpg, .jpeg, .png, .svg"
                    />
             <div className='flex flex-col gap-1'>
                <label htmlFor="fullName" className='font-semibold'>Full Name</label>
                <input type="fullName" required name='fullName' id='fullName' placeholder='Enter your Full Name' className='bg-transparent border rounded-md px focus:none' onChange={handleUserInput} value={signupData.fullName}/>
             </div>
             <div className='flex flex-col gap-1'>
                <label htmlFor="email" className='font-semibold'>Email</label>
                <input type="email" required name='email' id='email' placeholder='Enter your email' className='bg-transparent border rounded-md px focus:none' onChange={handleUserInput} value={signupData.email}/>
             </div>   
             <div className='flex flex-col gap-1'>
                <label htmlFor="password" className='font-semibold'>Passowrd</label>
                <input type="password" required name='password' id='password' placeholder='Enter your Passoword' className='bg-transparent border rounded-md px focus:none' onChange={handleUserInput} value={signupData.password}/>
             </div>
             <button type='submit'  className='w-full py-2 text-2xl font-semibold transition-all duration-300 ease-in-out bg-yellow-600 rounded-md cursor-pointer hover:bg-yellow-400'>Create account</button>
             <p className='text-center'>Already have an account? <Link to='/login' className='cursor-pointer link text-accent'>Login</Link></p>
          </form>
       </div>

    </HomeLayout>
  )
}

export default SignUp
