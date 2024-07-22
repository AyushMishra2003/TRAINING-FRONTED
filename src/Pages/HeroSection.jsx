
import React from 'react';
import heroSection from '../assets/HeroPhoto.png'
const HeroSection = () => {
  return (
    <section className="flex    flex-col-reverse lg:flex-row items-center justify-center  bg-[#F0F4F9]  lg:gap-4 xl:gap-[15rem] gap-4">
      {/* Left Section */}
      <div className="flex flex-col lg:w-[30rem]  lg:items-start gap-4 md:gap-2 items-center">
        <h1 className="text-lg lg:text-2xl font-bold text-center  text-[#201654] ">
           Discover Research
        </h1>
        <h1 className='text-[#201654] md:text-[3.5rem]  text-[1.5rem] text-center lg:text-start font-bold sm:text-[3rem]'>
           A better learning future starts here
        </h1>
        <div className="flex gap-4 flex-col sm:flex-row">
          <button className="bg-yellow-400 border border-yellow-400 px-8 py-4 font-bold text-[#201654] rounded hover:bg-yellow-300">
            Get A Quote
          </button>
          <button className="bg-white text-black border border-[#424141] px-10 py-4 rounded hover:bg-yellow-500 duration-500">
            Read More
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="">
        <img 
          src={heroSection} 
          alt="Hero"
          className="lg:w-[30rem]"
        />
      </div>
    </section>
  );
};

export default HeroSection;
