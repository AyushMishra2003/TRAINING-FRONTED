import React from 'react';
import HomeLayout from '../Layout/HomeLayout';
import AllPageHeader from './AllPageHeader/AllPageHeader';

const SignUpPage = () => {
  return (
    <HomeLayout>
      <AllPageHeader name={"Student Registration"} url={"/signup"}/>
      <div className="min-h-screen bg-white flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-gray-100 rounded-lg shadow-md p-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold">Student Registation</h2>
          </div>
          <form>
            <div className="mb-4 flex space-x-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="First Name"
                  className="border border-gray-300 p-3 rounded-md w-full"
                />
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border border-gray-300 p-3 rounded-md w-full"
                />
              </div>
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Username"
                className="border border-gray-300 p-3 rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email Address"
                className="border border-gray-300 p-3 rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                className="border border-gray-300 p-3 rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Confirm Password"
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
