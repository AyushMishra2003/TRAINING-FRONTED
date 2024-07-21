// src/components/HomeSection.js
import React from 'react';
import heroPhoto from '../assets/aboutPhoto.png';
import { FaAngleRight } from "react-icons/fa6";

const Knowledge = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center  gap-8 lg:gap-10 justify-center lg:justify-center p-4 pb-[5rem] ">
      {/* Left Section */}
      <div className="relative w-full lg:w-fit">
        <img 
          src={heroPhoto} 
          alt="About Us"
          className="w-full lg:w-[35rem] h-[20rem] lg:h-[30rem] object-cover rounded-lg"
        />
        <div className="absolute bottom-[-2rem] left-1/2 transform -translate-x-1/2 bg-white lg:w-[20rem] border-b-4 border-yellow-400 rounded-lg shadow-lg px-6 py-6">
          <p className="text-lg font-semibold text-[#201654]">About Us</p>
          <p className="text-sm text-[#201654] w-[10rem] sm:w-full">
            This is some text about us that is positioned over the image. 
            Adjust as needed for content.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col lg:w-fit gap-2 mt-4 lg:mt-0">
        <p className="text-xl text-[#201654] font-bold">
          About Us
        </p>
        <div className=""></div>
        <h2 className="text-2xl lg:text-4xl font-bold text-[#201654] mb-4">
          Strength in Numbers
        </h2>
        <p className="text-[#201654] mb-4 lg:w-[38rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quis asperiores distinctio et consequuntur, eos, itaque tempora veritatis officia temporibus consequatur quam fuga iste, quibusdam porro debitis obcaecati. Consequuntur, fugiat molestias reprehenderit vero provident incidunt inventore porro nihil possimus eligendi.
        </p>
        <div className='flex flex-col gap-2'>
          <div className='flex items-start lg:w-[30rem] w-full gap-4'>
            <button className='px-4 py-2 rounded-lg bg-[#FDC800] border border-[#201654] font-bold text-white flex items-center justify-center'>
              <FaAngleRight />
            </button>
            <div className='flex flex-col gap-2 flex-1'>
              <p className='text-[#201654] text-xl font-bold'>Ligula molestie</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus quaerat dolore blanditiis error voluptates harum totam illum eum voluptatum saepe.</p>
            </div>
          </div>
          <div className='flex items-start lg:w-[30rem] w-full gap-4'>
            <button className='px-4 py-2 rounded-lg bg-[#FDC800] border border-[#201654] font-bold text-white flex items-center justify-center'>
              <FaAngleRight />
            </button>
            <div className='flex flex-col gap-2 flex-1'>
              <p className='text-[#201654] text-xl font-bold'>Ligula molestie</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus quaerat dolore blanditiis error voluptates harum totam illum eum voluptatum saepe.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Knowledge;
