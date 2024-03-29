import { Link } from "react-router-dom";

import HomePageImage from "../assets/img/36712.jpg";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Home";

function HomePage() {
    return (
        <HomeLayout>
            <div className="pt-10 text-black flex items-center justify-center gap-10 mx-16 h-[90vh]">
                <div className="w-1/2 space-y-6">
                    {/* <h1 className="text-5xl font-semibold">
                        Find out best
                        <span className="font-bold text-yellow-500">
                              Online Courses
                        </span>
                    </h1> */}
                    {/* <h1 className="text-5xl font-semibold">Find out best Framing Training Course</h1> */}
                    <h1 className="text-5xl font-semibold">Find Out best  <span className='font-bold text-green-700'>Framing Training Course</span>     </h1>
                    <p className="text-xl text-black">
                        We have a large library of courses taught by highly skilled and qualified faculties at a very affordable cost.
                    </p>

                    <div className="space-x-6">
                        <Link to="/courses">
                            <button className="px-5 py-3 text-lg font-semibold transition-all duration-300 ease-in-out bg-green-500 rounded-md cursor-pointer hover:bg-green-600">
                                Explore courses
                            </button>
                        </Link>

                        <Link to="/contact">
                            <button className="px-5 py-3 text-lg font-semibold text-black transition-all duration-300 ease-in-out border border-green-500 rounded-md cursor-pointer hover:bg-green-600">
                                Watch Demo
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="flex items-center justify-center w-1/2">
                    <img alt="homepage image" src={HomePageImage} />
                </div>

            </div>
        </HomeLayout>
    );
}

export default HomePage;