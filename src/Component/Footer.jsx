import React from 'react';
import logo from '../assets/booklogo.jpg'
const Footer = () => {
  return (
    <footer className="bg-[#F0F4F9] text-black py-10">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        {/* <div className="flex flex-col md:flex-row items-center justify-between pb-10 border-b-2 border-yellow-500">
          <div className="mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Subscribe to our Newsletter</h4>
            <form className="flex flex-col md:flex-row items-center">
              <input type="text" placeholder="Your Full Name" className="p-2 border border-gray-300 rounded-md mb-4 md:mb-0 md:mr-4" />
              <input type="email" placeholder="Your Email Address" className="p-2 border border-gray-300 rounded-md mb-4 md:mb-0 md:mr-4" />
              <button className="bg-yellow-500 text-white py-2 px-6 rounded-md">Subscribe</button>
            </form>
          </div>
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          <div>
            <h4 className="text-lg font-bold mb-4 border-b-2 border-yellow-500 inline-block">Contact Us</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <i className="fas fa-map-marker-alt text-yellow-500 mr-2"></i>
                  Ayush Mishra Bhojubeer Varanasi Uttar Pradesh
              </div>
              <div className="flex items-center">
                <i className="fas fa-envelope text-yellow-500 mr-2"></i>
                  ayushm185@gmail.com
              </div>
              <div className="flex items-center">
                <i className="fas fa-phone text-yellow-500 mr-2"></i>
                 +91 6388291292
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 border-b-2 border-yellow-500 inline-block">Quick Links</h4>
            <div className="space-y-2 text-black">
              <div className="flex items-center">
                <div className="h-3 w-3 bg-yellow-500 rounded-full mr-2"></div>
                <a href="#" className='hover:text-yellow-500 duration-300'>Home</a>
              </div>
              <div className="flex items-center">
                <div className="h-3 w-3 bg-yellow-500 rounded-full mr-2"></div>
                <a href="#" className='hover:text-yellow-500 duration-300'>About Us</a>
              </div>
              <div className="flex items-center">
                <div className="h-3 w-3 bg-yellow-500 rounded-full mr-2"></div>
                <a href="#" className='hover:text-yellow-500 duration-300'>Terms & Conditions</a>
              </div>
              <div className="flex items-center">
                <div className="h-3 w-3 bg-yellow-500 rounded-full mr-2"></div>
                <a href="#" className='hover:text-yellow-500 duration-300'>Special</a>
              </div>
              <div className="flex items-center">
                <div className="h-3 w-3 bg-yellow-500 rounded-full mr-2"></div>
                <a href="#" className='hover:text-yellow-500 duration-300'>Privacy Policy</a>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 border-b-2 border-yellow-500 inline-block">Course</h4>
            <div className="space-y-2 text-black">
              <div className="flex items-center">
                <div className="h-3 w-3 bg-yellow-500 rounded-full mr-2"></div>
                <a href="#" className='hover:text-yellow-500 duration-300'>Photography</a>
              </div>
              <div className="flex items-center">
                <div className="h-3 w-3 bg-yellow-500 rounded-full mr-2"></div>
                <a href="#" className='hover:text-yellow-500 duration-300'>Math</a>
              </div>
              <div className="flex items-center">
                <div className="h-3 w-3 bg-yellow-500 rounded-full mr-2"></div>
                <a href="#" className='hover:text-yellow-500 duration-300'>Marketing</a>
              </div>
              <div className="flex items-center">
                <div className="h-3 w-3 bg-yellow-500 rounded-full mr-2"></div>
                <a href="#" className='hover:text-yellow-500 duration-300'>Health & Fitness</a>
              </div>
              <div className="flex items-center">
                <div className="h-3 w-3 bg-yellow-500 rounded-full mr-2"></div>
                <a href="#"  className='hover:text-yellow-500 duration-300' >Development</a>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 border-b-2 border-yellow-500 inline-block">News & Blog</h4>
            <div className="space-y-2">
              <div>
                <a href="#">Now you can use AI to create your online course</a>
                <p className="text-sm text-gray-600">Jan 10, 2024</p>
              </div>
              <div>
                <a href="#">Photography by Creating an Online Course</a>
                <p className="text-sm text-gray-600">Jan 10, 2024</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col lg:flex-row justify-between items-center">
          <div>
            <img src={logo} alt="EDUMINT Logo" className="h-10" />
          </div>
          <div className="text-start text-sm my-4 lg:my-0 flex items-center gap-3">
            <p className='text-[#201654] font-bold'>SkillPathshala</p>
            <p>&copy; 2024 by Ayush Mishra</p>
       
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-gray-600"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-gray-600"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" className="text-gray-600"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
