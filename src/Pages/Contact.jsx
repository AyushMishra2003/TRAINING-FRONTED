import React from 'react';
import contact from '../assets/hero/contact.png';

function Contact() {
    return (
        <div className="bg-[#F2F7FA] flex flex-col lg:flex-row justify-center items-center w-full gap-4 p-4 lg:p-8">
            <div className='flex flex-col items-center h-fit w-full lg:w-1/2'>
                <div className="mb-4">
                    <h2 className="text-2xl lg:text-4xl font-bold text-gray-800">
                        Learn At Your Own Pace, With Lifetime Access Anywhere And Any Device
                    </h2>
                </div>
                <div className="mb-4 w-full">
                    <img src={contact} alt="Woman reading a book" className="w-full h-auto rounded-md" />
                </div>
            </div>
            <div className="flex justify-center items-center w-full lg:w-[30rem]">
                <div className="bg-white p-6 lg:p-8 rounded-lg w-full lg:w-[30rem] max-w-md">
                    <h2 className="text-2xl lg:text-4xl mb-4 bg-green-500 text-white p-4 lg:p-12 font-bold text-center rounded-t-lg">
                        Contact Now
                    </h2>
                    <p className="text-gray-800 mb-6 text-center">
                        More than 100 Courses are free for this month
                    </p>
                    <form className="space-y-4">
                        <div>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                        </div>
                        <div>
                            <textarea
                                placeholder="Message"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                                rows="4"
                            ></textarea>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full p-3 bg-green-700 text-white rounded-lg hover:bg-black transition ease-in-out duration-300"
                            >
                                Submit Now
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
