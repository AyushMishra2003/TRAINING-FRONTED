import React from 'react'
import HomeLayout from '../Layout/HomeLayout'
import HomePageImage from "../assets/img/36712.jpg";
import { Link } from 'react-router-dom';
const AboutUs = () => {
  return (
    <div>
      <HomeLayout>
      <div className="flex flex-col items-center justify-center pt-10 mx-16 text-black border border-black h-[90vh]">
                <div className="">
                    we are very proud of our work and we do in very large scale
                </div>
                <div>
                we are very proud of our work and we do in very large scale
                </div>

                {/* <div className="flex items-center justify-center w-1/2">
                    <img alt="homepage image" src={HomePageImage} />
                </div> */}

            </div>
      </HomeLayout>
    </div>
  )
}

export default AboutUs



