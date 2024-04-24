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
import bgcVideo from "../assets/img/farmingbgc.mp4"
import HomeDes from "./HomeDes";
function HomePage() {
    return (
        <HomeLayout>
             <div className='bg-main font-poppins'>

<main className={`relative min-h-[fit]  w-full overflow-hidden z-[100] `}>
    <video src={bgcVideo} alt="" className=' min-w-[100vw] absolute top-0 left-0 h-full object-cover' loop autoPlay playsInline muted ></video>

    <div className={` bg-[#060614ef] z-60  pb-0 flex w-full h-full  items-center object-cover flex-col justify-between  text-white py-[1rem] gap-2 `}>
        <div className='flex flex-col items-center justify-center gap-3 w-[99vw] md:w-[48rem] p-2 sm:w-[95vw] overflow-hidden'>
            <h2  className='tracking-[3px] bg-light p-[2px] px-4 rounded-full text-[1.15rem] text-center mt-[7rem] text-red font-[500]'>Welcome to TheFarmingShip</h2>
            <HomeDes/>
        </div>
        <div className="z-[100]">
        <div className="lg:w-[32rem] flex flex-col w-[18rem] sm:w-[36.5rem]  gap-1 lg:gap-[1.2rem]  md:w-[45rem] msm:w-[27rem] avsm:w-[24rem] z-100 pb-[2.5rem]">
                    <div className="flex flex-col gap-1 avsm:flex-row">
                        <Link to="/courses">
                            <button className="px-4 py-2 text-lg font-semibold transition-all  bg-[#FF1B49] rounded-md cursor-pointer lg:px-5 lg:py-3 text-white border border-[#FF1B49] hover:bg-[#DEE4FA] hover:text-black ease-in duration-500 w-fit ">
                                Explore courses
                            </button>
                        </Link>

                        <Link to="/courses">
                            <button className="px-[2rem] py-2 text-lg font-semibold text-black transition-all  border border-[#FF1B49] rounded-md cursor-pointer lg:px-[3rem] lg:py-[0.8rem]  w-fit  bg-[#FF1B49] hover:bg-[#ffffff] hover:text-[#FF1B49] ease-in duration-300 ">
                                Shop
                            </button>
                        </Link>
                        <Link to="/courses">
                            <button className="px-4 py-2 text-lg font-semibold transition-all  bg-[#FF1B49] rounded-md cursor-pointer lg:px-5 lg:py-3 text-white border border-[#FF1B49] hover:bg-[#DEE4FA] hover:text-black ease-in duration-500 w-fit ">
                                Contract Farming
                            </button>
                        </Link>
                        {/* <Link to="/shop">
                            <button className="px-[2.2rem] py-[2rem] text-lg font-semibold text-black transition-all  border border-[#FF1B49] rounded-md cursor-pointer lg:px-5 lg:py-3  w-fit  bg-[#FF1B49] hover:bg-[#FF1B49] hover:text-white ease-in duration-300 ">
                                Shop
                            </button>
                        </Link> */}

                    </div>
                    </div>
                </div>
        </div>
</main>
{/* <div className="flex flex-col-reverse items-center justify-center lg:gap-[1rem] gap-2 lg:flex-row z-50 border bordr-red-500">
                   <div className="lg:w-[32rem] flex flex-col w-[18rem] sm:w-[36.5rem]  gap-1 lg:gap-[1.2rem]  md:w-[45rem] pb-1 msm:w-[27rem] avsm:w-[24rem] z-100">
                    <h1 className="lg:text-[2rem] font-semibold text-[1.2rem] text-[#2B3543]">Find Out best  <span className='font-bold text-green-700'>Farming Training Course</span>     </h1>
                    <p className="lg:text-xl text-[0.9rem] sm:text-[1.1rem]  text-black">
                        We have a large library of courses taught by highly skilled and qualified faculties at a very affordable cost.
                    </p>

                    <div className="flex flex-col gap-1 avsm:flex-row">
                        <Link to="/courses">
                            <button className="px-4 py-2 text-lg font-semibold transition-all  bg-[#FF1B49] rounded-md cursor-pointer lg:px-5 lg:py-3 text-white border border-[#FF1B49] hover:bg-[#DEE4FA] hover:text-black ease-in duration-500 w-fit ">
                                Explore courses
                            </button>
                        </Link>

                        <Link to="/courses">
                            <button className="px-4 py-2 text-lg font-semibold text-black transition-all  border border-[#FF1B49] rounded-md cursor-pointer lg:px-5 lg:py-3  w-fit  bg-white hover:bg-[#FF1B49] hover:text-white ease-in duration-300 ">
                                Watch Demo
                            </button>
                        </Link>
                    </div>
                    </div>

                </div> */}
<Service/>
</div>
</HomeLayout>
 );
}

export default HomePage;