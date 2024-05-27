import React from 'react';
import { FaSearch } from 'react-icons/fa';
import hero1 from '../assets/hero/hero1.webp';
import hero2 from '../assets/hero/hero2.webp';


const HeroSection = () => {
  return (
    <section className=" py-16 bg-[#F1EDEA]">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <div className="flex flex-col md:flex-row justify-between items-center w-full mb-6">
          <img src={hero1} alt="Illustration 1" className="custom-img-size mb-4 md:mb-0 animate-updown" />
          <div className='flex flex-col gap-5'>

            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mx-4">
              Make Your Dream Come True With Our Course
            </h1>
            <div className="w-full max-w-md mx-auto input-wrapper">
              <input
                type="text"
                placeholder="What do you want to learn?"
                className="search-input w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <FaSearch className="search-icon" />
            </div>
          </div>
          <img src={hero2} alt="Illustration 2" className="custom-img-size mt-4 md:mt-0 animate-updown" />
        </div>
        {/* <div className="w-full max-w-md mx-auto input-wrapper">
          <input
            type="text"
            placeholder="What do you want to learn?"
            className="search-input w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <FaSearch className="search-icon" />
        </div>  */}
      </div>
    </section>
  );
};

export default HeroSection;
