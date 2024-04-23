import {AiFillCloseCircle} from 'react-icons/ai';
import {FiMenu} from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import Footer from '../Component/Footer';
import { logout, me } from '../Redux/Slices/AuthSlice';
import { getAllCourse } from '../Redux/Slices/CourseSlice';
import logo from '../assets/img/mainlogo.png'

function HomeLayout({ children }) {

    const dispatch=useDispatch()
    const navigate=useNavigate()

    const isLoggedIn=useSelector((state)=>state?.auth?.isLoggedIn)
    const role=useSelector((state)=>state?.auth?.role)


    function changeWidth() {
        const drawerSide = document.getElementsByClassName("drawer-side");
        drawerSide[0].style.width = 'auto';
    }

    function hideDrawer() {
        const element = document.getElementsByClassName("drawer-toggle");
        element[0].checked = false;

        const drawerSide = document.getElementsByClassName("drawer-side");
        drawerSide[0].style.width = '0';
    }

    async function handleLogout(e) {
        e.preventDefault();

        const res = await dispatch(logout());
        if(res?.payload?.success)
        navigate("/");
    }
    
    async function getCourses(e){
        console.log("hello ");
        e.preventDefault()
        console.log("don1");
        const res=await dispatch(getAllCourse())
        console.log("don2");
        console.log(res?.payload);
        if(res?.payload?.success){
        console.log("ho gaya babu");
        }
    }

    return (
        <div className="min-h-[90vh] ">
            <div className="absolute left-0 z-50 w-full bg-[#1F2937]  drawer lg:hidden">
                <input className="drawer-toggle" id="my-drawer" type="checkbox" />
                <div className="drawer-content">
                    <label htmlFor="my-drawer" className="relative cursor-pointer">
                        <FiMenu 
                            onClick={changeWidth}
                            size={"32px"}
                            className="m-4 font-bold text-black"
                        />
                    </label>
                </div>
                <div className="w-0 drawer-side bg-[#1F2937]">
                    <label htmlFor="my-drawer" className="drawer-overlay">
                    </label>
                    <ul className="menu p-4 w-48 h-[100%] sm:w-80  relative  bg-[#1F2937] text-white">
                        <li className="absolute z-50 w-fit right-2">
                            <button onClick={hideDrawer}>
                                <AiFillCloseCircle size={24} />
                            </button>
                        </li>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        {/* <li>
                            <Link to="/coming">Contact Us</Link>
                        </li> */}
                        {/* <li>
                            <Link to="/coming">About Us</Link>
                        </li> */}
                        <li>
                            <Link to="/courses">All courses</Link>
                        </li>
                        <li>
                            <Link to="/courses">Contract Farming</Link>
                        </li>
                        <li>
                            <Link to="/courses">Shop</Link>
                        </li>
                         
                       {isLoggedIn && role=='ADMIN' &&(
                          <li>
                             <Link to={"/admin/dashboard"}>Admin DashBoard</Link>
                          </li>
                       )}
                         {isLoggedIn && role=='ADMIN' &&(
                          <li>
                             <Link to={"/course/create"}>Create Course</Link>
                          </li>
                       )}

                         {!isLoggedIn && (
                            <li className="absolute bottom-4 w-[90%]">
                                <div className="flex items-center justify-center w-full text-black">
                                <button className='w-full px-4 py-1 font-semibold bg-green-700 rounded-md '>
                                        <Link to="/login" className='text-black'>Login</Link>
                                    </button>
                                    <button className='w-full px-4 py-1 font-semibold text-black bg-green-700 rounded-md'>
                                        <Link to="/signup">Signup</Link>
                                    </button>
                                </div>
                            </li>
                        )} 

                        {isLoggedIn && (
                            <li className="absolute bottom-4 w-[90%]">
                                <div className="flex items-center justify-center w-full">
                                <button className='w-full px-4 py-1 font-semibold bg-green-700 rounded-md '>
                                        <Link to="/login" className='text-black'>Login</Link>
                                    </button>
                                    <button className='w-full px-4 py-1 font-semibold text-black bg-green-700 rounded-md'>
                                        <Link to="/signup">Signup</Link>
                                    </button>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
               <div>
                 <p>logo</p>
               </div>
            </div>
            <div className='p-[1rem] items-center list-none gap-10 justify-between bg-[#1F2937] hidden lg:flex'>
                <div className='flex items-center justify-center gap-6 text-[1rem] font-semibold text-white'>
                    <div>
                        <img src={logo} alt="Logo" className='w-[5rem] ' />
                    </div>
                <li>
                     <Link to="/">Home</Link>
                 </li> 
                        <li>
                            <Link to="/courses">Our courses</Link>
                        </li>

                        <li>
                            <Link to="/contactFarming" >Contact Farming</Link>
                        </li>
                        <li>
                            <Link to="/shop">Shop Us</Link>
                        </li>
                         
                       {isLoggedIn && role=='ADMIN' &&(
                          <li>
                             <Link to={"/admin/dashboard"}>Admin DashBoard</Link>
                          </li>
                       )}
                         {isLoggedIn && role=='ADMIN' &&(
                          <li>
                             <Link to={"/course/create"}>Create Course</Link>
                          </li>
                       )}
            </div>
                         {!isLoggedIn && (
                            <li className="">
                                <div className="flex items-center justify-center w-full gap-3 text-black">
                                    <button className='w-full px-4 py-1 font-semibold bg-green-700 rounded-md '>
                                        <Link to="/login" className='text-black'>Login</Link>
                                    </button>
                                    <button className='w-full px-4 py-1 font-semibold text-black bg-green-700 rounded-md'>
                                        <Link to="/signup">Signup</Link>
                                    </button>
                                </div>
                            </li>
                        )} 

                        {isLoggedIn && (
                            <li className="">
                                <div className="flex items-center justify-center w-full gap-3">
                                    <button className='w-full px-4 py-1 font-semibold text-black bg-green-700 rounded-md'>
                                        <Link to="/viewprofile">Profile</Link>
                                    </button>
                                    <button className='w-full px-4 py-1 font-semibold text-black bg-green-700 rounded-md'>
                                        <Link onClick={handleLogout}>Logout</Link>
                                    </button>
                                </div>
                            </li>
                        )}      
            </div>
            {/* <div className='flex items-center border border-black'>
                <div>
                    logo
                </div>
                <div>
                <Link>Home</Link>
                <Link>Contact Us</Link>
                <Link>About us</Link>
                <Link>Home</Link>
                <Link>All Courses</Link>
                {isLoggedIn && role=='ADMIN' &&(
                          <li>
                             <Link to={"/admin/dashboard"}>Admin DashBoard</Link>
                          </li>
                       )}
                         {isLoggedIn && role=='ADMIN' &&(
                          <li>
                             <Link to={"/course/create"}>Create Course</Link>
                          </li>
                       )}
                </div>

                <div>
                {!isLoggedIn && (
                            <li className="absolute bottom-4 w-[90%]">
                                <div className="flex items-center justify-center w-full text-black">
                                    <button className='w-full px-4 py-1 font-semibold bg-green-700 rounded-md '>
                                        <Link to="/login" className='text-black'>Login</Link>
                                    </button>
                                    <button className='w-full px-4 py-1 font-semibold text-black bg-green-700 rounded-md'>
                                        <Link to="/signup">Signup</Link>
                                    </button>
                                </div>
                            </li>
                        )} 
                    {isLoggedIn && (
                            <li className="absolute bottom-4 w-[90%]">
                                <div className="flex items-center justify-center w-full">
                                    <button className='w-full px-4 py-1 font-semibold text-black rounded-md hover:bg-green-700'>
                                        <Link to="/viewprofile">Profile</Link>
                                    </button>
                                    <button className='w-full px-4 py-1 font-semibold text-black rounded-md hover:bg-green-700'>
                                        <Link onClick={handleLogout}>Logout</Link>
                                    </button>
                                </div>
                            </li>
                        )}      
                </div>
              
            </div> */}
            { children }
          
            <Footer />
        </div>
    )
}

export default HomeLayout;