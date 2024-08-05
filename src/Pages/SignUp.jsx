import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import HomeLayout from '../Layout/HomeLayout';
import AllPageHeader from './AllPageHeader/AllPageHeader';
import { useDispatch } from 'react-redux';
import { createAccount } from '../Redux/Slices/AuthSlice';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
    gender: '',
    whatsappNumber: ''
  });

  const [showPassword, setShowPassword] = useState(false);

  const dispatch=useDispatch()
  const navigate=useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const response=await dispatch(createAccount(formData))

    console.log(response);
    if(response?.payload){
      setFormData({
          name: '',
          email: '',
          password: '',
          phoneNumber: '',
          gender: '',
         whatsappNumber: ''
      })
      navigate("/login")
      
    }
    

  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <HomeLayout>
      <AllPageHeader name={"Student Registration"} url={"/signup"}/>
      <div className="min-h-screen bg-white flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-gray-100 rounded-lg shadow-md p-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold">Student Registration</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="border border-gray-300 p-3 rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="border border-gray-300 p-3 rounded-md w-full"
              />
            </div>
            <div className="mb-4 relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="border border-gray-300 p-3 rounded-md w-full"
              />
              <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number"
                className="border border-gray-300 p-3 rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="border border-gray-300 p-3 rounded-md w-full"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="whatsappNumber"
                value={formData.whatsappNumber}
                onChange={handleChange}
                placeholder="WhatsApp Number"
                className="border border-gray-300 p-3 rounded-md w-full"
              />
            </div>
            <button
              type="submit"
              className="bg-yellow-400 text-white py-3 px-6 rounded-md w-full"
            >
              Sign Up
            </button>
          </form>
          <div className="text-center mt-6">
            <p className="text-sm">
              Already have an account? <a href="#" className="text-blue-500 hover:underline">Sign In</a>
            </p>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default SignUpPage;
