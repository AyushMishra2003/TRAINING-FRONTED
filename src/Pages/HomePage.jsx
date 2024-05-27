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
                <div className="flex flex-col items-center justify-center">
                    <Knowledge />
                    <Banner />
                    <Contact />
                </div>
                <div className="flex flex-col items-center justify-center gap-4 pb-2">
                <CourseAllList/>
                <button>View More</button>
                </div>
              
                <Faq />
                <JoinCommunity />
            </div>

        </HomeLayout>
    );
}

export default HomePage;