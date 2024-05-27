import React from 'react';
import ban from '../assets/hero/baner.png'
const Banner = () => {
    return (
        <div className='bg-green-500 text-white p-8 rounded-lg flex items-center justify-center pb-[2rem] pt-[2rem] gap-[6rem] mb-5'>
            <div className="text-start  flex flex-col ">
                <p className="text-lg font-bold">Study at Your Own Pace</p>
                <h2 className="text-4xl font-bold mb-4 lg:w-[50rem]">Enhance Your Career By Following Our Online Courses</h2>
                <button className="bg-white text-green-500 px-6 py-3 rounded-full font-bold hover:bg-green-600 hover:text-white transition duration-300 ease-in-out w-fit">Get Started</button>
            </div>
            <div className="flex items-center justify-center">
                <img src={ban} alt="Person juggling" className="h-[14rem] w-[14rem] object-cover" />
            </div>
        </div>

    )
}

export default Banner;