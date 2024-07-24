import React from 'react';
import community from '../assets/communitybg.png'
const JoinCommunity = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center p-4 lg:p-8 bg-[#F2F7FA]">
      <div className="flex justify-center lg:w-1/2 w-full mb-4 lg:mb-0">
        <img
          src={community}
          alt="Illustration of a person"
          className="w-full h-auto max-w-sm"
        />
      </div>
      <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start">
        <h2 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-4">
          Join Our Community
        </h2>
        <p className="text-gray-600 text-center lg:text-left mb-6">
          Stay ahead of the game and stay informed with our latest news and exclusive offers.
          Sign up for our newsletter now and get it all delivered straight to your inbox.
        </p>
        <form className="flex w-full max-w-md">
          <input
            type="email"
            placeholder="Email address"
            className="flex-grow p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button
            type="submit"
            className="bg-yellow-500 text-white p-3 rounded-r-lg hover:bg-yellow-600 transition duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default JoinCommunity;
