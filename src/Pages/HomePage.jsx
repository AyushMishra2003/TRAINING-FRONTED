import { Link } from "react-router-dom";

import HomePageImage from "../assets/img/backgroundimg.png";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Home";
import tutorial from '../assets/img/courseLogo.png'
import lifetimeacess from '../assets/img/lifetimeLogo.png'
import students from '../assets/img/enrolledLogo.png'
import course from '../assets/img/courselogo.jpg'
import TrainerLogo from '../assets/img/TrainerLogo.png'
import Service from "./service/Service";
function HomePage() {
    return (
        <HomeLayout>
            <div className="pt-10 text-black flex flex-col items-center gap-2  lg:gap-0 md:gap-1 bg-[#DEE4FA] min-h-[90vh] w-[100vw] pb-3">
                <div className="flex flex-col-reverse items-center justify-center lg:gap-[3rem] xl:gap-[10rem] gap-2 lg:flex-row">
                   <div className="lg:w-[25rem] w-[19rem] sm:w-[36.5rem]  lg:space-y-6 gap-1  md:w-[45rem] pb-1">
                    <h1 className="lg:text-[2rem] font-semibold text-[1.2rem] text-[#2B3543]">Find Out best  <span className='font-bold text-green-700'>Farming Training Course</span>     </h1>
                    <p className="lg:text-xl text-[0.9rem] sm:text-[1.1rem]  text-black">
                        We have a large library of courses taught by highly skilled and qualified faculties at a very affordable cost.
                    </p>

                    <div className="flex gap-1">
                        <Link to="/courses">
                            <button className="px-4 py-2 text-lg font-semibold transition-all duration-300 ease-in-out bg-[#FF1B49] rounded-md cursor-pointer lg:px-5 lg:py-3 text-white ">
                                Explore courses
                            </button>
                        </Link>

                        <Link to="/courses">
                            <button className="px-4 py-2 text-lg font-semibold text-black transition-all duration-300 ease-in-out border border-[#FF1B49] rounded-md cursor-pointer lg:px-5 lg:py-3   bg-white ">
                                Watch Demo
                            </button>
                        </Link>
                    </div>
                    </div>
                    <div className="">
                    <img alt="homepage image" src={HomePageImage} className=" w-[20rem] sm:w-[38rem] md:w-[46rem] lg:w-[35rem] xl:w-[35rem]" />
                    </div>
                </div>
               
                <div className="flex flex-col items-center sm:flex-row justify-center gap-3  p-2 bg-white rounded-md shadow-md w-[15rem] md:w-[45rem]   sm:w-[38rem] lg:w-[60rem] mt-3 lg:gap-[2rem]">
                    <div className="flex items-center gap-3 sm:gap-1 lg:gap-[2rem]">
                        <img src={TrainerLogo} alt="" className="w-[4rem] h-[4rem] rounded-full shadow-[0px_0px_0px_2px_#808080]" />
                        <p className="text-[1.2rem] font-semibold w-[6rem]">Best Online Training</p>
                    </div>

                    <div className="flex items-center gap-3 sm:gap-1 lg:gap-[2rem]">
                        <img src={lifetimeacess} alt=""  className="w-[4rem] h-[4rem] rounded-full shadow-[0px_0px_0px_2px_#a42dcf]"/>
                        <p className="text-[1.2rem] font-semibold w-[6rem]">Fully Lifetime Access</p>
                    </div>

                    <div className="flex items-center gap-3 sm:gap-1 lg:gap-[2rem]">
                        <img src={students} alt=""  className="w-[4rem] h-[4rem] rounded-full shadow-[0px_0px_0px_2px_#179619]"/>
                        <p className="text-[1.2rem] font-semibold w-[6rem]">800k+ Entrolled Students</p>
                    </div>
                    <div className="flex items-center gap-3 sm:gap-1 lg:gap-[2rem]">
                        <img src={course} alt="" className="w-[4rem] h-[4rem] rounded-full shadow-[0px_0px_0px_2px_#3845a6]" />
                        <p className="text-[1.2rem] font-semibold w-[6rem]">200+ Courses Available</p>
                    </div>
                </div>
                <Service/>

                <section >
                    <div className='w-full p-5 py-12 sm:px-20 md:px-[10vw] lg:px-[25vw]  flex flex-col gap-2 items-center'>
                         <p className="text-[2rem] font-semibold">Ask Questions?</p>
                        <div className=" join join-vertical w-full rounded-md shadow-[2px_2px_9px_#000,-2px_-2px_1px_#3a3b3a]">
                            <div className="collapse collapse-arrow join-item border border-[#2d3a4b] bg-[#808080]">
                                <input type="radio" name="my-accordion-4" />
                                <div className="text-xl font-medium collapse-title">
                                  Training are live or recorded?
                                </div>
                                <div className="text-white collapse-content">
                                    <p>All lectures are recorded.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border border-[#2d3a4b] bg-[#808080]">
                                <input type="radio" name="my-accordion-4" />
                                <div className="text-xl font-medium collapse-title">
                                    Training are started from basic or not 
                                </div>
                                <div className="text-white collapse-content">
                                    <p>Yes every course starts from the very basics until it is specifically mentioned otherwise.</p>
                                </div>
                            </div>
                             <div className="collapse collapse-arrow join-item border border-[#2d3a4b] bg-[#808080]">
                                <input type="radio" name="my-accordion-4" />
                                <div className="text-xl font-medium collapse-title">
                                    Demo Video Available or not
                                </div>
                                <div className="text-white collapse-content">
                                    <p>Yes Demo are Available</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            </div>
        </HomeLayout>
    );
}

export default HomePage;