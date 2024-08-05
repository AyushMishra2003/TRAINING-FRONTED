import React, { useState } from 'react';
import HomeLayout from '../Layout/HomeLayout';
import AllPageHeader from './AllPageHeader/AllPageHeader';
import { useDispatch } from 'react-redux';
import { LoginAccount } from '../Redux/Slices/AuthSlice';

const LoginPage = () => {
  // State for form data
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const dispatch=useDispatch()

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Handle form submission
  const handleSubmit = async(e) => {
     e.preventDefault();
     console.log(formData);
     const response=await dispatch(LoginAccount(formData))
     console.log(response);
     

  };

  return (
    <HomeLayout>
      <AllPageHeader name={"Login"} url={"/login"} />
      <div className="min-h-screen bg-white flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-gray-100 rounded-lg shadow-md p-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold">Hi, Welcome back!</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                name="email"
                placeholder="Username or Email Address"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 p-3 rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="border border-gray-300 p-3 rounded-md w-full"
              />
            </div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <input
                  type="checkbox"
                  name="keepSignedIn"
                  checked={formData.keepSignedIn}
                  onChange={handleChange}
                  className="mr-2 leading-tight"
                />
                <span className="text-sm">Keep me signed in</span>
              </div>
              <div>
                <a href="#" className="text-sm text-blue-500 hover:underline">Forgot?</a>
              </div>
            </div>
            <button
              type="submit"
              className="bg-yellow-400 text-white py-3 px-6 rounded-md w-full"
            >
              Sign In
            </button>
          </form>
          <div className="text-center mt-6">
            <p className="text-sm">
              Don't have an account? <a href="#" className="text-blue-500 hover:underline">Register Now</a>
            </p>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default LoginPage;
