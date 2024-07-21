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
import CourseCategory from "./Course/CourseCategory";


function HomePage() {
    const navigate = useNavigate()
    return (
        <HomeLayout>
            <div className="flex flex-col overflow-x-hidden">

                <HeroSection />
                <FeaturesSection />

                  <Knowledge />
                  <CourseCategory/>
              
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