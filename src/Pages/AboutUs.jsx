import React from "react";
import img1 from '../assets/aboutus.jpg';
import img2 from '../assets/aboutphoto1.png';
import img3 from '../assets/aboutphoto2.png';
import HomeLayout from "../Layout/HomeLayout";
import AllPageHeader from "./AllPageHeader/AllPageHeader";
import { FaCheckCircle } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <HomeLayout>
      <AllPageHeader />
      <div className="p-8 overflow-x-hidden bg-white">
        {/* Section 1: About Us */}
        <section className="flex flex-col lg:flex-row items-start justify-center mb-16">
  <div className="mb-8 lg:mb-0 lg:w-1/2">
    <img
      src={img1}
      alt="About Us"
      className="w-full h-auto rounded-lg"
    />
  </div>
  <div className="lg:pl-16 lg:w-1/2">
    <div className="flex mb-4 items-center">
      <div className="flex-grow border-t border-gray-300"></div>
      <h3 className="px-4 text-lg font-medium text-gray-700">About Us</h3>
      <div className="flex-grow border-t border-gray-300"></div>
    </div>
    <h2 className="text-3xl sm:text-4xl font-bold mb-4 lg:mb-6 xl:mb-8">
      Education in continuing a proud tradition.
    </h2>
    <p className="text-gray-700 mb-4 text-base sm:text-lg lg:text-xl">
      The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph,
    </p>

    <ul className="list-none pl-0 text-gray-700">
      <li className="flex items-center mb-2">
        <FaCheckCircle className="text-yellow-500 mr-2" /> Metus interdum metus
      </li>
      <li className="flex items-center mb-2">
        <FaCheckCircle className="text-yellow-500 mr-2" /> Ligula cur maecenas
      </li>
      <li className="flex items-center mb-2">
        <FaCheckCircle className="text-yellow-500 mr-2" /> Fringilla nulla
      </li>
      <li className="flex items-center mb-2">
        <FaCheckCircle className="text-yellow-500 mr-2" /> Metus interdum metus
      </li>
      <li className="flex items-center mb-2">
        <FaCheckCircle className="text-yellow-500 mr-2" /> Ligula cur maecenas
      </li>
      <li className="flex items-center mb-2">
        <FaCheckCircle className="text-yellow-500 mr-2" /> Fringilla nulla
      </li>
    </ul>
  </div>
</section>


        {/* Section 2: Our Creative Team */}
        <section className="mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <h3 className="px-4 text-lg font-medium text-gray-700">Meet Our Team</h3>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <h2 className="text-3xl font-bold mb-8 text-center">Our Creative Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative text-center">
              <img
                src={img2}
                alt="Josif Saturn"
                className="w-full h-auto mb-4"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white p-2">
                <h3 className="text-xl font-semibold">Josif Saturn</h3>
                <p className="text-gray-600">Teacher</p>
              </div>
            </div>
            <div className="relative text-center">
              <img
                src={img2}
                alt="Edumint Owner"
                className="w-full h-auto mb-4"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white p-2">
                <h3 className="text-xl font-semibold">Edumint Owner</h3>
                <p className="text-gray-600">Admin</p>
              </div>
            </div>
            <div className="relative text-center">
              <img
                src={img2}
                alt="Janusz Yuda"
                className="w-full h-auto mb-4"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white p-2">
                <h3 className="text-xl font-semibold">Janusz Yuda</h3>
                <p className="text-gray-600">SEO Expert</p>
              </div>
            </div>
            <div className="relative text-center">
              <img
                src={img2}
                alt="Edumint Owner"
                className="w-full h-auto mb-4"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white p-2">
                <h3 className="text-xl font-semibold">Edumint Owner</h3>
                <p className="text-gray-600">Admin</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: What Our Clients Say */}
        <section>
          <div className="flex items-center justify-center mb-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <h3 className="px-4 text-lg font-medium text-gray-700">Client Testimonials</h3>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative text-center bg-white p-6 shadow-lg testimonial-card">
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Duis at est id leo luctus gravida a in ipsum.
              </p>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                <img
                  src={img3}
                  alt="Kelly Coleman"
                  className="w-20 h-20 rounded-full border-2 border-white shadow-md"
                />
              </div>
              <h3 className="text-xl font-semibold mt-12">Kelly Coleman</h3>
              <p className="text-gray-600">Nulla nec</p>
            </div>
            <div className="relative text-center bg-white p-6 shadow-lg testimonial-card">
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Duis at est id leo luctus gravida a in ipsum.
              </p>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                <img
                  src={img3}
                  alt="Eugene Freeman"
                  className="w-20 h-20 rounded-full border-2 border-white shadow-md"
                />
              </div>
              <h3 className="text-xl font-semibold mt-12">Eugene Freeman</h3>
              <p className="text-gray-600">Tincidunt</p>
            </div>
            <div className="relative text-center bg-white p-6 shadow-lg testimonial-card">
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Duis at est id leo luctus gravida a in ipsum.
              </p>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                <img
                  src={img3}
                  alt="Kelly Coleman"
                  className="w-20 h-20 rounded-full border-2 border-white shadow-md"
                />
              </div>
              <h3 className="text-xl font-semibold mt-12">Kelly Coleman</h3>
              <p className="text-gray-600">Nulla nec</p>
            </div>
          </div>
        </section>
      </div>
    </HomeLayout>
  );
};

export default AboutUs;
