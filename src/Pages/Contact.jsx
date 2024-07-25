import React from 'react';
import HomeLayout from '../Layout/HomeLayout';
import AllPageHeader from './AllPageHeader/AllPageHeader';
import image1 from '../assets/con3.png'
import image2 from '../assets/con2.png'
import image3 from '../assets/con1.png'
const ContactPage = () => {
  return (
    <HomeLayout>
        <AllPageHeader name={"Contact"} url={"/contact"}/>
      <div className="min-h-screen bg-white p-6 md:p-12">
      <div className="container mx-auto ">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-100 p-2 py-6 rounded-md text-center flex items-center justify-center gap-10">
            <img src={image1} alt="" className='w-[5rem]' />
            <div className="flex justify-center mb-4 items-start flex-col">
                <p className="text-xl font-bold">Our Phone</p>
              <p className="text-lg">000 2324 39493</p>
            </div>
     
          </div>
          <div className="bg-gray-100 p-2 rounded-md text-center  flex items-center justify-center gap-10">
            <img src={image2} alt="" className='w-[5rem]' />
            <div className="flex justify-center mb-4 items-start flex-col">
                <p className="text-xl font-bold">Our Phone</p>
              <p className="text-lg">000 2324 39493</p>
            </div>
     
          </div>
          <div className="bg-gray-100 p-2 rounded-md text-center  flex items-center justify-center gap-10">
            <img src={image3} alt="" className='w-[5rem]' />
            <div className="flex justify-center mb-4 items-start flex-col">
                <p className="text-xl font-bold">Our Phone</p>
              <p className="text-lg">000 2324 39493</p>
            </div>
     
          </div>
        </div>
        <div className="md:flex">
          <div className="md:w-1/2 p-6">
            <h3 className="text-[2.5rem] font-bold mb-4">Write Us a Message</h3>
            <p className="mb-8 text-sm leading-relaxed">
              The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog.
            </p>
          </div>
          <div className="md:w-1/2 p-6">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Full name"
                  className="border border-gray-300 p-3 rounded-md w-full"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="border border-gray-300 p-3 rounded-md w-full"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="border border-gray-300 p-3 rounded-md w-full"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="border border-gray-300 p-3 rounded-md w-full"
                />
              </div>
              <textarea
                placeholder="Your Message"
                className="border border-gray-300 p-3 rounded-md w-full h-32 mb-4"
              />
              <button
                type="submit"
                className="bg-yellow-400 text-white py-3 px-6 rounded-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className=''>
         <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.0369724128955!2d82.99323956088575!3d25.26934167757142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e3229c5f00e51%3A0x2a17ac9898868786!2sSchool%20of%20Biotechnology%20New%20Building!5e0!3m2!1sen!2sin!4v1711779891268!5m2!1sen!2sin" 
            width="600"
            height="400"
            frameborder="0"
            style={{ border: 0 }}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
            className='w-[100vw]'
                />

               </div>

      </div>
    </HomeLayout>
  );
};

export default ContactPage;
