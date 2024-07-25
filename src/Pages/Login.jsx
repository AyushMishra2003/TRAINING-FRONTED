import React from 'react';
import HomeLayout from '../Layout/HomeLayout';
import AllPageHeader from './AllPageHeader/AllPageHeader';

const LoginPage = () => {
  return (
    <HomeLayout>
      <AllPageHeader name={"Login"} url={"/login"}/>
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-gray-100 rounded-lg shadow-md p-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">Hi, Welcome back!</h2>
        </div>
        <form>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Username or Email Address"
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
          <div className="flex items-center justify-between mb-4">
            <div>
              <input
                type="checkbox"
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
