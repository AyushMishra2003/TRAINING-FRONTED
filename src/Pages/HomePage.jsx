import { Link, useNavigate } from "react-router-dom";
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
import HeroSection from "./HeroSection";
import FeaturesSection from "./Feature";
import Knowledge from "./Knowleges";
import Banner from "./Banner";
import Contact from "./Contact";
import Faq from "./Faq";
import JoinCommunity from "./JoinCommity";
import Course from "../Component/Course";
import CourseAllList from "./Course/CourseAllList";


function HomePage() {
    const navigate = useNavigate()
    return (
        <HomeLayout>
            <div className="flex flex-col">

                <HeroSection />
                <FeaturesSection />

                {/* <div className="h-4 bg-gray-200 flex justify-center">
                    <div className="w-full h-4 bg-gray-200 flex flex-wrap">
                        {[...Array(20)].map((_, i) => (
                            <span key={i} className="w-4 h-4 bg-gray-200 rounded-full mx-2" />
                        ))}
                    </div>
                </div> */}
                  <Knowledge />
                  <Banner />
                  <div className="flex flex-col items-center justify-center gap-4 pb-2">
                    <h1 className="text-[1.5rem] text-center font-bold">Our Top Notch Courses</h1>

                    <CourseAllList />
                    <button
                        className="bg-[#22C55E] hover:bg-[#1a9441] text-white font-bold py-2 px-6 rounded border-2 border-transparent hover:border-[#22C55E] animate-bounce"
                        onClick={() => navigate("/courses")}
                    >
                        View More
                    </button>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <Contact />
                </div>
              

                <Faq />
                <JoinCommunity />
            </div>

        </HomeLayout>
    );
}

export default HomePage;